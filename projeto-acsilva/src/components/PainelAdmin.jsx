import { useState } from "react";

export default function PainelAdmin({
  empresas = [], // Define como array vazio caso falte no App
  onAdicionarEmpresa = () => console.log("Função faltando"),
  onAdicionarObra = () => console.log("Função faltando"),
}) {
  const [nomeEmpresa, setNomeEmpresa] = useState("");
  const [nomeObra, setNomeObra] = useState("");
  const [empresaSelecionada, setEmpresaSelecionada] = useState("");

  const handleAddEmpresa = (e) => {
    e.preventDefault();
    if (!nomeEmpresa) return;
    onAdicionarEmpresa({ nome: nomeEmpresa });
    setNomeEmpresa("");
    alert("Empresa cadastrada!");
  };

  const handleAddObra = (e) => {
    e.preventDefault();
    if (!nomeObra || !empresaSelecionada) {
      alert("Selecione uma empresa e digite o nome da obra.");
      return;
    }
    onAdicionarObra({ nome: nomeObra, empresaId: empresaSelecionada });
    setNomeObra("");
    alert("Obra cadastrada!");
  };

  return (
    <div className="admin-container">
      <h2
        style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}
      >
        Painel Administrativo
      </h2>

      <section
        className="admin-section"
        style={{
          background: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3
          style={{ borderBottom: "2px solid #27ae60", paddingBottom: "10px" }}
        >
          Cadastrar Nova Empresa
        </h3>
        <form
          onSubmit={handleAddEmpresa}
          style={{ display: "flex", gap: "10px", marginTop: "15px" }}
        >
          <input
            type="text"
            placeholder="Nome da Empresa (ex: Vidrala)"
            value={nomeEmpresa}
            onChange={(e) => setNomeEmpresa(e.target.value)}
            required
            className="input-admin"
          />
          <button type="submit" className="btn-enviar" style={{ margin: 0 }}>
            Adicionar
          </button>
        </form>
      </section>

      <section
        className="admin-section"
        style={{ background: "#f8f9fa", padding: "20px", borderRadius: "8px" }}
      >
        <h3
          style={{ borderBottom: "2px solid #27ae60", paddingBottom: "10px" }}
        >
          Cadastrar Nova Obra
        </h3>
        <form
          onSubmit={handleAddObra}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "15px",
          }}
        >
          <select
            value={empresaSelecionada}
            onChange={(e) => setEmpresaSelecionada(e.target.value)}
            required
            className="input-admin"
          >
            <option value="">Selecione a Empresa da Obra...</option>
            {empresas.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.nome}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Nome da Obra (ex: Reparação de Forno)"
            value={nomeObra}
            onChange={(e) => setNomeObra(e.target.value)}
            required
            className="input-admin"
          />
          <button type="submit" className="btn-enviar" style={{ margin: 0 }}>
            Adicionar Obra
          </button>
        </form>
      </section>
    </div>
  );
}
