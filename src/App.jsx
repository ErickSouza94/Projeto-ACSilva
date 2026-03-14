import { useState, useEffect } from "react";
import "./App.css";
import { empresasParceiras, obrasAtivas } from "./components/data";
import { registroService } from "./components/Services/RegistoService";
import Historico from "./components/Historico";
import ResumoObras from "./components/ResumoObras"; // Importe o novo componente

function App() {
  const getHoje = () => new Date().toISOString().split("T")[0];

  const [empresaId, setEmpresaId] = useState("");
  const [obraId, setObraId] = useState("");
  const [nome, setNome] = useState("");
  const [dataTrabalho, setDataTrabalho] = useState(getHoje());
  const [horasInput, setHorasInput] = useState("");
  const [minutosInput, setMinutosInput] = useState("");

  const [obrasFiltradas, setObrasFiltradas] = useState([]);
  const [historico, setHistorico] = useState([]);

  // ESTADO PARA NAVEGAÇÃO ENTRE PÁGINAS
  const [abaAtiva, setAbaAtiva] = useState("registro");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setHistorico(registroService.obterTodos());
  }, []);

  useEffect(() => {
    const filtradas = obrasAtivas.filter((o) => o.empresaId === empresaId);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setObrasFiltradas(filtradas);
    setObraId("");
  }, [empresaId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const empresaNome = empresasParceiras.find((e) => e.id === empresaId)?.nome;
    const obraNome = obrasAtivas.find((o) => o.id === obraId)?.nome;

    const h = Number(horasInput) || 0;
    const m = Number(minutosInput) || 0;

    if (h === 0 && m === 0) {
      alert("Por favor, introduza as horas ou os minutos do trabalho.");
      return;
    }

    const totalDecimal = h + m / 60;

    const novoRegistro = {
      id: Date.now(),
      empresa: empresaNome,
      obra: obraNome,
      colaborador: nome,
      horas: totalDecimal.toFixed(2),
      tempoFormatado: `${h}h ${m}m`,
      data: new Date(dataTrabalho).toLocaleDateString("pt-PT"),
    };

    const atualizado = registroService.salvar(novoRegistro);
    setHistorico(atualizado);

    alert(
      `REGISTRO SALVO COM SUCESSO!\n\n` +
        `Data: ${novoRegistro.data}\n` +
        `Empresa: ${empresaNome}\n` +
        `Obra: ${obraNome}\n` +
        `Tempo: ${h}h ${m}m`,
    );

    setObraId("");
    setHorasInput("");
    setMinutosInput("");
  };

  const handleExcluir = (id) => {
    if (window.confirm("Tem certeza que deseja apagar este registro?")) {
      const atualizado = registroService.excluir(id);
      setHistorico(atualizado);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>AC Silva Metalomecânica</h1>
        <p>Folha de Obra Digital</p>
      </header>

      {/* MENU DE NAVEGAÇÃO */}
      <nav className="menu-navegacao">
        <button
          className={abaAtiva === "registro" ? "btn-nav active" : "btn-nav"}
          onClick={() => setAbaAtiva("registro")}
        >
          Novo Registro
        </button>
        <button
          className={abaAtiva === "resumo" ? "btn-nav active" : "btn-nav"}
          onClick={() => setAbaAtiva("resumo")}
        >
          Registros por Obra
        </button>
      </nav>

      {abaAtiva === "registro" ? (
        <>
          <form className="form-horas" onSubmit={handleSubmit}>
            <div className="campo">
              <label>Data do Trabalho:</label>
              <input
                type="date"
                value={dataTrabalho}
                onChange={(e) => setDataTrabalho(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label>Empresa Parceira:</label>
              <select
                value={empresaId}
                onChange={(e) => setEmpresaId(e.target.value)}
                required
              >
                <option value="">Selecione a empresa...</option>
                {empresasParceiras.map((emp) => (
                  <option key={emp.id} value={emp.id}>
                    {emp.nome}
                  </option>
                ))}
              </select>
            </div>

            <div className="campo">
              <label>Obra / Serviço:</label>
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

            <div className="campo">
              <label>Nome do Colaborador:</label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome"
                required
              />
            </div>

            <div className="tempo-container">
              <div className="campo">
                <label>Horas:</label>
                <input
                  type="number"
                  value={horasInput}
                  onChange={(e) => setHorasInput(e.target.value)}
                  placeholder="0"
                  min="0"
                />
              </div>
              <div className="campo">
                <label>Minutos:</label>
                <input
                  type="number"
                  value={minutosInput}
                  onChange={(e) => setMinutosInput(e.target.value)}
                  placeholder="0-59"
                  min="0"
                  max="59"
                />
              </div>
            </div>

            <button type="submit" className="btn-enviar">
              Registrar no Sistema
            </button>
          </form>

          <Historico registros={historico} onExcluir={handleExcluir} />
        </>
      ) : (
        <ResumoObras registros={historico} />
      )}
    </div>
  );
}

export default App;
