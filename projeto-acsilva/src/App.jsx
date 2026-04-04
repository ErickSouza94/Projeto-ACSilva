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

  const handleCadastroUnificado = async (dados) => {
    try {
      await api.post("/empresas/completo", dados);
      const res = await api.get("/empresas");
      setEmpresas(res.data);
      alert("Cadastrado com sucesso!");
    } catch (err) {
      alert("Erro ao cadastrar. Verifique se a empresa já existe.");
    }
  };

  // --- ALTERAÇÃO PRINCIPAL AQUI ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convertendo inputs para números para bater com o DTO/Prisma
    const h = parseInt(horasInput) || 0;
    const m = parseInt(minutosInput) || 0;

    if (h === 0 && m === 0) {
      alert("Introduza o tempo de trabalho.");
      return;
    }

    // Este objeto deve ter EXATAMENTE as propriedades do seu CreateRegistroDto
    const novoRegistro = {
      colaborador: nome,
      data: new Date(dataTrabalho).toISOString(), // O NestJS/Prisma prefere ISO String para datas
      horas: h,
      tempoFormatado: `${h}h ${m}m`,
      obraId: obraId,
    };

    try {
      const res = await api.post("/registros", novoRegistro);

      // Atualiza o histórico local com o novo registro vindo do banco
      setHistorico([res.data, ...historico]);

      alert("Registo salvo!");

      // Limpa apenas os campos de tempo e obra, mantendo o colaborador e data se desejar
      setObraId("");
      setHorasInput("");
      setMinutosInput("");
      setResponsavelNome("");
    } catch (err) {
      console.error("Erro detalhado do Backend:", err.response?.data);
      alert("Erro ao salvar registro. Verifique os campos.");
    }
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Apagar este registo?")) {
      try {
        await api.delete(`/registros/${id}`);
        setHistorico(historico.filter((r) => r.id !== id));
      } catch (err) {
        alert("Erro ao excluir.");
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
              <label>Data:</label>
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
                <option value="">Selecione...</option>
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
                <option value="">Selecione...</option>
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
                placeholder="Seu nome"
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
          <PainelAdmin onAdicionarTudo={handleCadastroUnificado} />
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
