/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import "./App.css";
import api from "./components/Services/api";
import Historico from "./components/Historico";
import ResumoObras from "./components/ResumoObras";
import PainelAdmin from "./components/PainelAdmin";

function App() {
  const [isAdminAutenticado, setIsAdminAutenticado] = useState(false);
  const [carregando, setCarregando] = useState(false); // NOVO ESTADO
  const getHoje = () => new Date().toISOString().split("T")[0];

  const [empresas, setEmpresas] = useState([]);
  const [historico, setHistorico] = useState([]);

  const [empresaId, setEmpresaId] = useState("");
  const [obraId, setObraId] = useState("");
  const [responsavelNome, setResponsavelNome] = useState("");
  const [nome, setNome] = useState("");
  const [dataTrabalho, setDataTrabalho] = useState(getHoje());
  const [horasInput, setHorasInput] = useState("");
  const [minutosInput, setMinutosInput] = useState("");

  const [obrasFiltradas, setObrasFiltradas] = useState([]);
  const [abaAtiva, setAbaAtiva] = useState("registro");

  // 1. Carrega dados iniciais
  useEffect(() => {
    const carregarDados = async () => {
      try {
        const [resEmpresas, resRegistros] = await Promise.all([
          api.get("/empresas"),
          api.get("/registros"),
        ]);
        setEmpresas(resEmpresas.data);
        setHistorico(resRegistros.data);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
      }
    };
    carregarDados();
  }, []);

  // 2. Filtra obras quando a empresa muda
  useEffect(() => {
    if (empresaId) {
      const empresaSel = empresas.find((e) => e.id === empresaId);
      setObrasFiltradas(empresaSel?.obras || []);
    } else {
      setObrasFiltradas([]);
    }
    setObraId("");
    setResponsavelNome("");
  }, [empresaId, empresas]);

  // 3. Define responsável quando a obra muda
  useEffect(() => {
    if (obraId) {
      const obraSelecionada = obrasFiltradas.find((o) => o.id === obraId);
      setResponsavelNome(obraSelecionada?.responsavel?.nome || "Não definido");
    } else {
      setResponsavelNome("");
    }
  }, [obraId, obrasFiltradas]);

  const acessarAdmin = () => {
    if (isAdminAutenticado) {
      setAbaAtiva("admin");
      return;
    }
    const senha = prompt("Digite a senha de administrador:");
    if (senha === "acsilvaadmin") {
      setIsAdminAutenticado(true);
      setAbaAtiva("admin");
    } else {
      alert("Senha incorreta!");
    }
  };

  // --- CADASTRO DE EMPRESA/OBRA (ATUALIZADO COM CARREGANDO) ---
  const handleCadastroUnificado = async (dados) => {
    setCarregando(true); // Inicia o estado de espera
    try {
      await api.post("/empresas/completo", dados);

      // Atualiza a lista de empresas após o cadastro
      const res = await api.get("/empresas");
      setEmpresas(res.data);

      alert("Empresa e Obra cadastradas com sucesso!");
      setAbaAtiva("registro"); // Opcional: Volta para a tela de registro
    } catch (err) {
      console.error("Erro no cadastro:", err);
      alert(
        err.response?.data?.message ||
          "Erro ao cadastrar. O servidor pode estar iniciando, tente novamente em 30 segundos.",
      );
    } finally {
      setCarregando(false); // Libera o botão independente de sucesso ou erro
    }
  };

  // --- SUBMISSÃO DO REGISTO ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const h = parseInt(horasInput) || 0;
    const m = parseInt(minutosInput) || 0;

    if (h === 0 && m === 0) {
      alert("Introduza o tempo de trabalho.");
      return;
    }

    if (!obraId) {
      alert("Por favor, selecione uma obra.");
      return;
    }

    const novoRegistro = {
      colaborador: nome,
      data: new Date(dataTrabalho).toISOString(),
      horas: h + m / 60,
      tempoFormatado: `${h}h ${m}m`,
      obraId: obraId,
    };

    try {
      const res = await api.post("/registros", novoRegistro);
      setHistorico([res.data, ...historico]);
      alert("Registo salvo com sucesso!");

      setObraId("");
      setHorasInput("");
      setMinutosInput("");
      setResponsavelNome("");
    } catch (err) {
      const msgErro = err.response?.data?.message || "Erro desconhecido";
      console.error("Erro detalhado:", msgErro);
      alert(
        `Erro ao salvar: ${Array.isArray(msgErro) ? msgErro.join(", ") : msgErro}`,
      );
    }
  };

  // --- EXCLUSÃO DE REGISTO ---
  const handleExcluir = async (id) => {
    if (!id) {
      alert("Erro: ID do registo não identificado.");
      return;
    }

    if (window.confirm("Apagar este registo permanentemente?")) {
      try {
        await api.delete(`/registros/${id}`);
        setHistorico((prev) => prev.filter((r) => r.id !== id));
        alert("Registo excluído com sucesso!");
      } catch (err) {
        const erroServidor = err.response?.data?.message || err.message;
        alert(`Erro ao excluir: ${erroServidor}`);
      }
    }
  };

  return (
    <div className="container">
      <header className="header">
        <img className="logo-img" src="logo_ac_silva.png" alt="Logo AC Silva" />
        <p>Folha de Obra Digital (Cloud Sync)</p>
      </header>

      <nav className="menu-navegacao">
        <button
          className={abaAtiva === "registro" ? "btn-nav active" : "btn-nav"}
          onClick={() => setAbaAtiva("registro")}
        >
          Novo Registo
        </button>
        <button
          className={abaAtiva === "resumo" ? "btn-nav active" : "btn-nav"}
          onClick={() => setAbaAtiva("resumo")}
        >
          Registos por Obra
        </button>
        <button
          className={abaAtiva === "admin" ? "btn-nav active" : "btn-nav"}
          onClick={acessarAdmin}
        >
          Admin
        </button>
      </nav>

      {abaAtiva === "registro" && (
        <>
          <form className="form-horas" onSubmit={handleSubmit}>
            <div className="campo">
              <label>Data de Trabalho:</label>
              <input
                type="date"
                value={dataTrabalho}
                onChange={(e) => setDataTrabalho(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label>Empresa:</label>
              <select
                value={empresaId}
                onChange={(e) => setEmpresaId(e.target.value)}
                required
              >
                <option value="">Selecione a empresa...</option>
                {empresas.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo">
              <label>Obra:</label>
              <select
                value={obraId}
                onChange={(e) => setObraId(e.target.value)}
                disabled={!empresaId}
                required
              >
                <option value="">Selecione a obra...</option>
                {obrasFiltradas.map((obra) => (
                  <option key={obra.id} value={obra.id}>
                    {obra.nome}
                  </option>
                ))}
              </select>
            </div>

            {responsavelNome && (
              <div className="campo">
                <label style={{ color: "#27ae60", fontSize: "0.85rem" }}>
                  Responsável pela Obra:
                </label>
                <input
                  type="text"
                  value={responsavelNome}
                  readOnly
                  style={{
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    color: "#166534",
                    fontWeight: "bold",
                  }}
                />
              </div>
            )}

            <div className="campo">
              <label>Colaborador:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Insira o seu nome"
                required
              />
            </div>

            <div className="campo">
              <label>Tempo de Trabalho:</label>
              <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <input
                  type="number"
                  value={horasInput}
                  onChange={(e) => setHorasInput(e.target.value)}
                  placeholder="Horas"
                  min="0"
                  style={{ flex: 1, padding: "10px" }}
                />
                <input
                  type="number"
                  value={minutosInput}
                  onChange={(e) => setMinutosInput(e.target.value)}
                  placeholder="Minutos"
                  min="0"
                  max="59"
                  style={{ flex: 1, padding: "10px" }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-enviar"
              style={{ marginTop: "10px" }}
            >
              Registar no Sistema
            </button>
          </form>

          <Historico registros={historico} onExcluir={handleExcluir} />
        </>
      )}

      {abaAtiva === "resumo" && <ResumoObras registros={historico} />}

      {abaAtiva === "admin" &&
        (isAdminAutenticado ? (
          <PainelAdmin
            onAdicionarTudo={handleCadastroUnificado}
            isCarregando={carregando} // PASSA O ESTADO PARA O COMPONENTE
          />
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <p>Acesso Restrito ao Administrador.</p>
            <button onClick={acessarAdmin} className="btn-nav">
              Validar Senha
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
