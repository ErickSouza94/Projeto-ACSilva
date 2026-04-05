import React from "react";
import axios from "axios";

function ResumoObras({ registros, setRegistros }) {
  // --- FUNÇÃO PARA COMUNICAR COM O BACKEND ---
  const alternarStatusObra = async (obraId, statusAtual) => {
    if (!obraId) {
      alert("Erro: ID da obra não encontrado.");
      return;
    }

    try {
      const novoStatus = !statusAtual;

      // URL ATUALIZADA conforme seu painel do Render
      await axios.patch(
        `https://acsilva-backend-render.onrender.com/empresas/obra/${obraId}/status`,
        {
          concluida: novoStatus,
        },
      );

      // Atualiza o estado local para mudar a cor na tela sem precisar de F5
      const novosRegistros = registros.map((reg) => {
        // Verifica o ID tanto no objeto aninhado quanto na raiz do registro
        if (reg.obraId === obraId || reg.obra?.id === obraId) {
          return {
            ...reg,
            obra: { ...reg.obra, concluida: novoStatus },
          };
        }
        return reg;
      });

      setRegistros(novosRegistros);
    } catch (error) {
      console.error("Erro ao atualizar status:", error);
      alert(
        "Erro ao conectar com o servidor. Verifique se o backend está online no Render.",
      );
    }
  };

  // --- EXPORTAR PARA EXCEL (CSV) ---
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

  // --- AGRUPAMENTO PARA EXIBIÇÃO ---
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
          alignItems: "center",
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
            <strong style={{ fontSize: "1.1rem" }}>
              {group.empresa} | {group.obra} {group.concluida ? "✅" : "🏗️"}
            </strong>

            <button
              onClick={() => alternarStatusObra(group.id, group.concluida)}
              style={{
                padding: "6px 12px",
                cursor: "pointer",
                backgroundColor: group.concluida ? "#e67e22" : "#2ecc71",
                color: "white",
                border: "none",
                borderRadius: "4px",
                fontWeight: "bold",
              }}
            >
              {group.concluida ? "Reabrir Obra" : "Finalizar Obra"}
            </button>
          </div>

          <div style={{ padding: "15px" }}>
            {group.dados.map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: "0.9rem",
                  borderBottom: "1px solid #eee",
                  padding: "5px 0",
                  color: group.concluida ? "#777" : "#333",
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
