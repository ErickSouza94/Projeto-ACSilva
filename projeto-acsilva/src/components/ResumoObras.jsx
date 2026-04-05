import React from "react";
// Importamos a sua configuração de api para evitar erros de conexão
import api from "./Services/api";

function ResumoObras({ registros, setRegistros }) {
  const alternarStatusObra = async (obraId, statusAtual) => {
    if (!obraId) return;

    // Se a obra já está concluída, não fazemos nada (para remover a função de reabrir)
    if (statusAtual) return;

    try {
      // Usamos a 'api' que você já configurou no projeto
      await api.patch(`/empresas/obra/${obraId}/status`, {
        concluida: true,
      });

      // Atualiza o estado local para refletir a mudança na tela
      if (typeof setRegistros === "function") {
        const novosRegistros = registros.map((reg) => {
          if (reg.obraId === obraId || reg.obra?.id === obraId) {
            return {
              ...reg,
              obra: { ...reg.obra, concluida: true },
            };
          }
          return reg;
        });
        setRegistros(novosRegistros);
      }
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert(
        "Erro ao conectar com o servidor. Tente novamente em alguns segundos.",
      );
    }
  };

  // --- EXPORTAR PARA EXCEL ---
  const exportarParaCSV = () => {
    if (!registros || registros.length === 0) return;
    const cabecalho = "Data;Empresa;Obra;Colaborador;Tempo;Status\n";
    const linhas = registros
      .map((reg) => {
        const data = new Date(reg.data).toLocaleDateString("pt-PT");
        const empresa = reg.obra?.empresa?.nome || "N/A";
        const obra = reg.obra?.nome || "N/A";
        const colaborador = reg.colaborador || "Anónimo";
        const tempo = reg.tempoFormatado || "0h 0m";
        const status = reg.obra?.concluida ? "CONCLUIDA" : "EM ANDAMENTO";
        return `${data};${empresa};${obra};${colaborador};${tempo};${status}`;
      })
      .join("\n");

    const blob = new Blob(["\ufeff", cabecalho + linhas], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `Relatorio_Obras.csv`;
    link.click();
  };

  const processarDados = () => {
    return registros.reduce((acc, reg) => {
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

  return (
    <div className="resumo-container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <h2>Resumo por Obra</h2>
        <button onClick={exportarParaCSV} className="btn-exportar">
          📥 Baixar Excel
        </button>
      </div>

      {Object.values(resumo).map((group, index) => (
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

            {/* LÓGICA DO BOTÃO ALTERADA AQUI */}
            {group.concluida ? (
              <span style={{ fontWeight: "bold", padding: "6px 12px" }}>
                Obra Concluída
              </span>
            ) : (
              <button
                onClick={() => alternarStatusObra(group.id, group.concluida)}
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

          <div style={{ padding: "15px" }}>
            {group.dados.map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: "0.9rem",
                  borderBottom: "1px solid #eee",
                  padding: "5px 0",
                }}
              >
                <strong>{d.colaborador}</strong>: {d.tempoFormatado} (
                {new Date(d.data).toLocaleDateString()})
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResumoObras;
