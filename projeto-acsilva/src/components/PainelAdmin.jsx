import { useState } from "react";

// Adicionado a prop isCarregando enviada pelo App.jsx
export default function PainelAdmin({
  onAdicionarTudo = () => {},
  isCarregando = false,
}) {
  const [formData, setFormData] = useState({
    nomeEmpresa: "",
    nomeObra: "",
    nomeResponsavel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.nomeEmpresa ||
      !formData.nomeObra ||
      !formData.nomeResponsavel
    ) {
      alert("Por favor, preencha todos os campos do cadastro.");
      return;
    }

    // ENVIAR DADOS: Passando o objeto para a função do App.jsx
    onAdicionarTudo({
      nome: formData.nomeEmpresa,
      obraNome: formData.nomeObra,
      responsavel: formData.nomeResponsavel,
    });

    // Limpa o formulário após o envio
    setFormData({ nomeEmpresa: "", nomeObra: "", nomeResponsavel: "" });
  };

  const sectionStyle = {
    background: "#f8f9fa",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    maxWidth: "600px",
    margin: "0 auto",
  };

  return (
    <div className="admin-container" style={{ padding: "20px" }}>
      <h2
        style={{ textAlign: "center", color: "#2c3e50", marginBottom: "30px" }}
      >
        Gestão de Novos Parceiros
      </h2>

      <section style={sectionStyle}>
        <h3
          style={{
            borderBottom: "2px solid #27ae60",
            paddingBottom: "10px",
            marginBottom: "20px",
            color: "#2c3e50",
          }}
        >
          Cadastrar Empresa, Obra e Responsável
        </h3>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Empresa:
            </label>
            <input
              type="text"
              name="nomeEmpresa"
              placeholder="Ex: Vidrala"
              value={formData.nomeEmpresa}
              onChange={handleChange}
              required
              disabled={isCarregando} // Desabilita inputs durante envio
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                backgroundColor: isCarregando ? "#eee" : "white",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Obra / Projeto:
            </label>
            <input
              type="text"
              name="nomeObra"
              placeholder="Ex: Manutenção de Forno 2"
              value={formData.nomeObra}
              onChange={handleChange}
              required
              disabled={isCarregando}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                backgroundColor: isCarregando ? "#eee" : "white",
              }}
            />
          </div>

          <div>
            <label
              style={{
                fontWeight: "bold",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Responsável Técnico:
            </label>
            <input
              type="text"
              name="nomeResponsavel"
              placeholder="Ex: Eng. Carlos Matos"
              value={formData.nomeResponsavel}
              onChange={handleChange}
              required
              disabled={isCarregando}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
                backgroundColor: isCarregando ? "#eee" : "white",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isCarregando} // Botão fica cinza e não clicável
            style={{
              marginTop: "10px",
              background: isCarregando ? "#95a5a6" : "#27ae60",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "6px",
              cursor: isCarregando ? "not-allowed" : "pointer",
              fontSize: "1rem",
              fontWeight: "bold",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => {
              if (!isCarregando) e.target.style.background = "#219150";
            }}
            onMouseOut={(e) => {
              if (!isCarregando) e.target.style.background = "#27ae60";
            }}
          >
            {isCarregando ? "A salvar na nuvem..." : "Finalizar Cadastro"}
          </button>
        </form>
      </section>
    </div>
  );
}
