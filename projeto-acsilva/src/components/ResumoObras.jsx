/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import api from "./Services/api";

function ResumoObras({ registros, setRegistros }) {
  const [filtroEmpresa, setFiltroEmpresa] = useState("");
  const [filtroObra, setFiltroObra] = useState("");
  const [filtroColaborador, setFiltroColaborador] = useState("");

  const alternarStatusObra = async (id, status) => {
    try {
      const novoStatus = !status;
      await api.patch(`/empresas/obra/${id}/status`, { concluida: novoStatus });
      if (typeof setRegistros === "function") {
        setRegistros(
          registros.map((r) =>
            r.obraId === id || r.obra?.id === id
              ? { ...r, obra: { ...r.obra, concluida: novoStatus } }
              : r,
          ),
        );
      }
    } catch (err) {
      alert("Erro ao atualizar status.");
    }
  };

  // --- FILTRAGEM ---
  const registrosFiltrados = registros.filter((reg) => {
    const empresa = (reg.obra?.empresa?.nome || "").toLowerCase();
    const obra = (reg.obra?.nome || "").toLowerCase();
    const colab = (reg.colaborador || "").toLowerCase();

    return (
      empresa.includes(filtroEmpresa.toLowerCase()) &&
      obra.includes(filtroObra.toLowerCase()) &&
      colab.includes(filtroColaborador.toLowerCase())
    );
  });

  // --- AGRUPAMENTO PARA OS CARDS ---
  const resumo = registrosFiltrados.reduce((acc, reg) => {
    const chave = `${reg.obra?.empresa?.nome} - ${reg.obra?.nome}`;
    if (!acc[chave]) {
      acc[chave] = {
        id: reg.obra?.id || reg.obraId,
        empresa: reg.obra?.empresa?.nome,
        obra: reg.obra?.nome,
        concluida: reg.obra?.concluida,
        dados: [],
      };
    }
    acc[chave].dados.push(reg);
    return acc;
  }, {});

  // --- EXPORTAÇÃO ---
  const exportarParaCSV = () => {
    if (registrosFiltrados.length === 0) return;

    // Adicionado "Materiais" ao cabeçalho
    const cabecalho = "Data;Empresa;Obra;Colaborador;Tempo;Materiais;Status\n";
    const linhas = registrosFiltrados
      .map((reg) => {
        const data = new Date(reg.data).toLocaleDateString("pt-PT");
        const status = reg.obra?.concluida ? "CONCLUIDA" : "EM ANDAMENTO";
        // Limpar possíveis quebras de linha no texto de materiais para não quebrar o CSV
        const materiaisTexto = reg.materiais
          ? reg.materiais.replace(/\n/g, " ")
          : "";
        return `${data};${reg.obra?.empresa?.nome};${reg.obra?.nome};${reg.colaborador};${reg.tempoFormatado};${materiaisTexto};${status}`;
      })
      .join("\n");

    const blob = new Blob(["\ufeff", cabecalho + linhas], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Relatorio_Registos.csv`;
    link.click();
  };

  return (
    <div className="resumo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2>Resumo por Obra</h2>
        <button onClick={exportarParaCSV} className="btn-exportar">
          📊 Exportar Registos
        </button>
      </div>

      {/* FILTROS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "15px",
          marginBottom: "25px",
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #e0e0e0",
        }}
      >
        <div>
          <label
            style={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "#555",
              display: "block",
              marginBottom: "5px",
            }}
          >
            EMPRESA
          </label>
          <input
            type="text"
            placeholder="Filtrar empresa..."
            value={filtroEmpresa}
            onChange={(e) => setFiltroEmpresa(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "#555",
              display: "block",
              marginBottom: "5px",
            }}
          >
            OBRA
          </label>
          <input
            type="text"
            placeholder="Filtrar obra..."
            value={filtroObra}
            onChange={(e) => setFiltroObra(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            style={{
              fontSize: "0.75rem",
              fontWeight: "bold",
              color: "#555",
              display: "block",
              marginBottom: "5px",
            }}
          >
            COLABORADOR
          </label>
          <input
            type="text"
            placeholder="Filtrar nome..."
            value={filtroColaborador}
            onChange={(e) => setFiltroColaborador(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>

      {Object.values(resumo).length === 0 ? (
        <p style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          Nenhum registo corresponde aos filtros.
        </p>
      ) : (
        Object.values(resumo).map((group, index) => (
          <div
            key={index}
            className="resumo-card"
            style={{
              borderLeft: group.concluida
                ? "10px solid #27ae60"
                : "10px solid #3498db",
              marginBottom: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
              overflow: "hidden",
              backgroundColor: "white",
            }}
          >
            {/* CABEÇALHO DO CARD */}
            <div
              style={{
                padding: "12px 20px",
                backgroundColor: group.concluida ? "#27ae60" : "#2c3e50",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>
                <strong>{group.empresa}</strong> | {group.obra}
              </span>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {group.concluida ? (
                  <>
                    <span style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                      CONCLUÍDA ✅
                    </span>
                    <button
                      onClick={() =>
                        alternarStatusObra(group.id, group.concluida)
                      }
                      style={{
                        marginTop: "4px",
                        padding: "2px 10px",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                        color: "white",
                        border: "1px solid white",
                        borderRadius: "4px",
                        fontSize: "0.65rem",
                      }}
                    >
                      Reabrir
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      alternarStatusObra(group.id, group.concluida)
                    }
                    style={{
                      padding: "8px 15px",
                      cursor: "pointer",
                      backgroundColor: "#2ecc71",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    Finalizar Obra
                  </button>
                )}
              </div>
            </div>

            {/* LISTA DE REGISTOS DENTRO DA OBRA */}
            <div style={{ padding: "15px 20px" }}>
              {group.dados.map((d, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    flexDirection: "column", // Alterado para empilhar nome e materiais
                    padding: "10px 0",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span>
                      <strong>{d.colaborador}</strong>
                    </span>
                    <span style={{ color: "#666" }}>
                      {d.tempoFormatado}{" "}
                      <small>({new Date(d.data).toLocaleDateString()})</small>
                    </span>
                  </div>

                  {/* CAIXA DE MATERIAIS ADICIONADA AQUI */}
                  {d.materiais && (
                    <div
                      style={{
                        marginTop: "6px",
                        padding: "8px 12px",
                        backgroundColor: "#fff9c4", // Amarelo suave para destacar
                        borderLeft: "4px solid #fbc02d",
                        borderRadius: "4px",
                        fontSize: "0.85rem",
                        color: "#444",
                        width: "fit-content",
                        maxWidth: "90%",
                        boxShadow: "1px 1px 3px rgba(0,0,0,0.1)",
                      }}
                    >
                      <strong>📦 Materiais:</strong> {d.materiais}
                    </div>
                  )}
                </div>
              ))}

              <div
                style={{
                  marginTop: "12px",
                  textAlign: "right",
                  color: group.concluida ? "#27ae60" : "#3498db",
                  fontWeight: "bold",
                }}
              >
                Total de registos nesta vista: {group.dados.length}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ResumoObras;
