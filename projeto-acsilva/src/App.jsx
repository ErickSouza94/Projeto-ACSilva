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
  const [carregando, setCarregando] = useState(false);
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

  const handleCadastroUnificado = async (dados) => {
    setCarregando(true);
    try {
      await api.post("/empresas/completo", dados);
      const res = await api.get("/empresas");
      setEmpresas(res.data);
      alert("Empresa e Obra cadastradas com sucesso!");
      setAbaAtiva("registro");
    } catch (err) {
      console.error("Erro no cadastro:", err);
      alert(err.response?.data?.message || "Erro ao cadastrar.");
    } finally {
      setCarregando(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const h = parseInt(horasInput) || 0;
    const m = parseInt(minutosInput) || 0;

    if (h === 0 && m === 0) {
      alert("Introduza o tempo de trabalho.");
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
    } catch (err) {
      alert("Erro ao salvar registro.");
    }
  };

  const handleExcluir = async (id) => {
    if (window.confirm("Apagar este registo permanentemente?")) {
      try {
        await api.delete(`/registros/${id}`);
        setHistorico((prev) => prev.filter((r) => r.id !== id));
        alert("Registo excluído com sucesso!");
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

            {/* --- BLOCO DO RESPONSÁVEL ADICIONADO AQUI --- */}
            {obraId && (
              <div
                className="campo"
                style={{ marginTop: "-10px", marginBottom: "15px" }}
              >
                <label style={{ fontSize: "0.85rem", color: "#666" }}>
                  Responsável pela Obra:
                </label>
                <div
                  style={{
                    padding: "10px",
                    backgroundColor: "#f0f2f5",
                    borderRadius: "5px",
                    borderLeft: "5px solid #2ecc71",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  👤 {responsavelNome}
                </div>
              </div>
            )}

            <div className="campo">
              <label>Colaborador:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="campo">
              <label>Tempo:</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="number"
                  value={horasInput}
                  onChange={(e) => setHorasInput(e.target.value)}
                  placeholder="H"
                />
                <input
                  type="number"
                  value={minutosInput}
                  onChange={(e) => setMinutosInput(e.target.value)}
                  placeholder="M"
                />
              </div>
            </div>
            <button type="submit" className="btn-enviar">
              Registar
            </button>
          </form>
          <Historico registros={historico} onExcluir={handleExcluir} />
        </>
      )}

      {abaAtiva === "resumo" && (
        <ResumoObras registros={historico} setRegistros={setHistorico} />
      )}

      {abaAtiva === "admin" &&
        (isAdminAutenticado ? (
          <PainelAdmin
            onAdicionarTudo={handleCadastroUnificado}
            isCarregando={carregando}
          />
        ) : (
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <button onClick={acessarAdmin} className="btn-nav">
              Validar Senha
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
