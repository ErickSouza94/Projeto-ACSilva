import React from "react";
import axios from "axios"; // Certifique-se de que o axios está instalado

function ResumoObras({ registros, setRegistros }) {
  // --- FUNÇÃO PARA COMUNICAR COM O BACKEND ---
  const alternarStatusObra = async (obraId, statusAtual) => {
    try {
      const novoStatus = !statusAtual;

      // AJUSTE: Use a URL do seu backend no Render
      // Exemplo: https://seu-projeto.onrender.com/empresas/obra/${obraId}/status
      await axios.patch(
        `https://backend-acsilva.onrender.com/empresas/obra/${obraId}/status`,
        {
          concluida: novoStatus,
        },
      );

      // Atualiza o estado local para mudar a cor na tela sem dar F5
      const novosRegistros = registros.map((reg) => {
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
        "Erro ao atualizar o status da obra. Verifique se o backend está online.",
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
              borderTopLeftRadius: "6px",
              borderTopRightRadius: "6px",
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
            {/* Aqui entra a sua tabela ou lista de tempos por colaborador */}
            {group.dados.map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: "0.9rem",
                  borderBottom: "1px solid #eee",
                  padding: "5px 0",
                }}
              >
                {d.colaborador}: {d.tempoFormatado} (
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
