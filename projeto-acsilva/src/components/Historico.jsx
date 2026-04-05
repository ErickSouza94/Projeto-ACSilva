import React from "react";

function Historico({ registros, onExcluir }) {
  // --- FUNÇÃO PARA GERAR E BAIXAR O CSV ---
  const exportarParaCSV = () => {
    if (registros.length === 0) {
      alert("Não há registos para exportar.");
      return;
    }

    // 1. Cabeçalhos das colunas (O que aparecerá no Excel)
    const cabecalho = "Data;Empresa;Obra;Colaborador;Tempo\n";

    // 2. Formatar as linhas (Usamos ";" como separador para o Excel abrir direto em PT-PT)
    const linhas = registros
      .map((reg) => {
        const data = new Date(reg.data).toLocaleDateString("pt-PT");
        const empresa = reg.obra?.empresa?.nome || "N/A";
        const obra = reg.obra?.nome || "N/A";
        const colaborador = reg.colaborador || "N/A";
        const tempo = reg.tempoFormatado || "00:00";

        return `${data};${empresa};${obra};${colaborador};${tempo}`;
      })
      .join("\n");

    const csvFinal = cabecalho + linhas;

    // 3. Criar o arquivo e disparar o download
    // Usamos o prefixo \ufeff para garantir que o Excel entenda acentos (UTF-8)
    const blob = new Blob(["\ufeff", csvFinal], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Relatorio_AC_Silva_${new Date().toLocaleDateString("pt-PT")}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para formatar a data para o padrão PT-PT
  const formatarData = (dataString) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-PT");
  };

  return (
    <section className="historico-section">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ margin: 0 }}>
          <span role="img" aria-label="clock">
            🕒
          </span>{" "}
          Registos Recentes
        </h3>

        {/* BOTÃO DE EXPORTAÇÃO */}
        {registros.length > 0 && (
          <button
            onClick={exportarParaCSV}
            className="btn-exportar"
            style={{
              padding: "8px 15px",
              backgroundColor: "#27ae60",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            📥 Baixar Relatório (Excel/CSV)
          </button>
        )}
      </div>

      <div className="lista-registros">
        {registros.length === 0 ? (
          <p className="vazio">Nenhum registo encontrado no sistema.</p>
        ) : (
          registros.map((reg) => (
            <div key={reg.id} className="card-registro">
              <div className="card-info">
                <strong>{reg.obra?.empresa?.nome || "Empresa"}</strong>
                <span>{reg.obra?.nome || "Obra não identificada"}</span>
                <small>
                  {reg.colaborador?.toUpperCase()} • {formatarData(reg.data)}
                </small>
              </div>

              <div className="card-acoes">
                <div className="card-horas">
                  <strong>{reg.tempoFormatado}</strong>
                  <span>DATA SYNC OK</span>
                </div>

                <button
                  className="btn-excluir"
                  onClick={() => onExcluir(reg.id)}
                  title="Apagar registo"
                >
                  &times;
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Historico;
