import React, { useState } from "react";
import api from "./Services/api";

function ResumoObras({ registros, setRegistros }) {
  // Estados para os filtros
  const [filtroObra, setFiltroObra] = useState("");
  const [filtroColaborador, setFiltroColaborador] = useState("");

  const alternarStatusObra = async (obraId, statusAtual) => {
    if (!obraId) return;
    try {
      const novoStatus = !statusAtual;
      await api.patch(`/empresas/obra/${obraId}/status`, {
        concluida: novoStatus,
      });

      if (typeof setRegistros === "function") {
        const novosRegistros = registros.map((reg) => {
          if (reg.obraId === obraId || reg.obra?.id === obraId) {
            return { ...reg, obra: { ...reg.obra, concluida: novoStatus } };
          }
          return reg;
        });
        setRegistros(novosRegistros);
      }
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  // --- LÓGICA DE FILTRAGEM E AGRUPAMENTO ---
  const processarDados = () => {
    // 1. Primeiro filtramos os registros individuais
    const registrosFiltrados = registros.filter((reg) => {
      const nomeObra = (reg.obra?.nome || "").toLowerCase();
      const nomeEmpresa = (reg.obra?.empresa?.nome || "").toLowerCase();
      const nomeColaborador = (reg.colaborador || "").toLowerCase();

      const termoObra = filtroObra.toLowerCase();
      const termoColab = filtroColaborador.toLowerCase();

      return (
        (nomeObra.includes(termoObra) || nomeEmpresa.includes(termoObra)) &&
        nomeColaborador.includes(termoColab)
      );
    });

    // 2. Depois agrupamos os resultados que sobraram
    return registrosFiltrados.reduce((acc, reg) => {
      const obraId = reg.obra?.id || reg.obraId;
      const obraNome = reg.obra?.nome || "Sem Nome";
      const empresaNome = reg.obra?.empresa?.nome || "Sem Empresa";
      const concluida = reg.obra?.concluida || false;
      const chave = `${empresaNome} - ${obraNome}`;

      if (!acc[chave]) {
        acc[chave] = {
          id: obraId,
          empresa: empresaNome,
          obra: obraNome,
          concluida,
          dados: [],
        };
      }
      acc[chave].dados.push(reg);
      return acc;
    }, {});
  };

  const resumo = processarDados();

  const exportarParaCSV = () => {
    // Exporta apenas o que está filtrado na tela
    const dadosParaExportar = Object.values(resumo).flatMap((g) => g.dados);
    if (dadosParaExportar.length === 0) return;

    const cabecalho = "Data;Empresa;Obra;Colaborador;Tempo;Status\n";
    const linhas = dadosParaExportar
      .map((reg) => {
        return `${new Date(reg.data).toLocaleDateString("pt-PT")};${reg.obra?.empresa?.nome};${reg.obra?.nome};${reg.colaborador};${reg.tempoFormatado};${reg.obra?.concluida ? "CONCLUIDA" : "EM ANDAMENTO"}`;
      })
      .join("\n");

    const blob = new Blob(["\ufeff", cabecalho + linhas], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `Relatorio_Filtrado.csv`;
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
          📥 Baixar Excel (Filtrado)
        </button>
      </div>

      {/* --- BARRA DE FILTROS --- */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          backgroundColor: "#f1f1f1",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <div style={{ flex: 1 }}>
          <label
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Buscar Obra/Empresa:
          </label>
          <input
            type="text"
            placeholder="Ex: Manutenção..."
            value={filtroObra}
            onChange={(e) => setFiltroObra(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <label
            style={{
              fontSize: "0.8rem",
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Filtrar Colaborador:
          </label>
          <input
            type="text"
            placeholder="Ex: Erick..."
            value={filtroColaborador}
            onChange={(e) => setFiltroColaborador(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
      </div>

      {Object.values(resumo).length === 0 ? (
        <p style={{ textAlign: "center", color: "#666" }}>
          Nenhum registro encontrado para os filtros aplicados.
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
              backgroundColor: group.concluida ? "#f9fff9" : "#fff",
              marginBottom: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "10px 15px",
                backgroundColor: group.concluida ? "#27ae60" : "#2c3e50",
                color: "white",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <strong>
                {group.empresa} | {group.obra} {group.concluida ? "✅" : "🏗️"}
              </strong>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                {group.concluida ? (
                  <>
                    <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                      Obra Concluída
                    </span>
                    <button
                      onClick={() =>
                        alternarStatusObra(group.id, group.concluida)
                      }
                      style={{
                        padding: "2px 8px",
                        cursor: "pointer",
                        backgroundColor: "rgba(255,255,255,0.2)",
                        color: "white",
                        border: "1px solid white",
                        borderRadius: "4px",
                        fontSize: "0.7rem",
                      }}
                    >
                      Reabrir Obra
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() =>
                      alternarStatusObra(group.id, group.concluida)
                    }
                    style={{
                      padding: "6px 12px",
                      cursor: "pointer",
                      backgroundColor: "#2ecc71",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      fontWeight: "bold",
                    }}
                  >
                    Finalizar Obra
                  </button>
                )}
              </div>
            </div>
            <div style={{ padding: "15px" }}>
              {group.dados.map((d, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.9rem",
                    borderBottom: "1px solid #eee",
                    padding: "5px 0",
                    color: "#333",
                  }}
                >
                  <strong>{d.colaborador}</strong>: {d.tempoFormatado} (
                  {new Date(d.data).toLocaleDateString()})
                </div>
              ))}
              <div
                style={{
                  marginTop: "10px",
                  textAlign: "right",
                  fontWeight: "bold",
                  color: "#2c3e50",
                }}
              >
                Total Filtrado nesta Obra: {group.dados.length} registo(s)
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ResumoObras;
