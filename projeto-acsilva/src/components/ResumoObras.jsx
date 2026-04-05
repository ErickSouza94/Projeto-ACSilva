import React from "react";

function ResumoObras({ registros }) {
  // --- FUNÇÃO PARA EXPORTAR CSV ---
  const exportarParaCSV = () => {
    if (!registros || registros.length === 0) return;

    // Cabeçalho adaptado para Excel em Português (ponto e vírgula)
    const cabecalho =
      "Data;Empresa;Obra;Colaborador;Tempo (Formatado);Horas (Decimais)\n";

    const linhas = registros
      .map((reg) => {
        const data = new Date(reg.data).toLocaleDateString("pt-PT");
        const empresa = reg.obra?.empresa?.nome || "N/A";
        const obra = reg.obra?.nome || "N/A";
        const colaborador = reg.colaborador || "Anónimo";
        const tempo = reg.tempoFormatado || "0h 0m";
        const horas = Number(reg.horas || 0)
          .toFixed(2)
          .replace(".", ","); // Vírgula para decimal no Excel PT

        return `${data};${empresa};${obra};${colaborador};${tempo};${horas}`;
      })
      .join("\n");

    const csvFinal = cabecalho + linhas;
    // \ufeff garante que o Excel reconheça caracteres especiais (acentos)
    const blob = new Blob(["\ufeff", csvFinal], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `Relatorio_Obras_AC_Silva_${new Date().toLocaleDateString("pt-PT")}.csv`,
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 1. Verificação inicial
  if (!registros || registros.length === 0) {
    return (
      <div className="vazio">
        Nenhum registo encontrado para gerar o resumo.
      </div>
    );
  }

  // 2. Lógica de agrupamento original
  const processarDados = () => {
    return registros.reduce((acc, reg) => {
      const obraNome = reg.obra?.nome || "Obra s/ Nome";
      const empresaNome = reg.obra?.empresa?.nome || "Empresa s/ Nome";
      const chave = `${empresaNome} | ${obraNome}`;

      if (!acc[chave]) {
        acc[chave] = {
          empresa: empresaNome,
          obra: obraNome,
          datas: {},
        };
      }

      const dataObjeto = new Date(reg.data);
      const dataFormatada = isNaN(dataObjeto)
        ? "Data Inválida"
        : dataObjeto.toLocaleDateString("pt-PT");

      if (!acc[chave].datas[dataFormatada]) {
        acc[chave].datas[dataFormatada] = {
          colaboradores: [],
          totalDia: 0,
        };
      }

      acc[chave].datas[dataFormatada].colaboradores.push({
        nome: reg.colaborador || "Anónimo",
        tempo: reg.tempoFormatado || "0h 0m",
        horasDecimais: Number(reg.horas) || 0,
      });

      acc[chave].datas[dataFormatada].totalDia += Number(reg.horas) || 0;

      return acc;
    }, {});
  };

  const resumo = processarDados();

  // 3. Renderização
  return (
    <div className="resumo-container">
      {/* Cabeçalho com Título e Botão lado a lado */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2 style={{ color: "#2c3e50", margin: 0, fontSize: "1.2rem" }}>
          Relatório por Obra
        </h2>

        <button
          onClick={exportarParaCSV}
          style={{
            backgroundColor: "#27ae60",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "0.9rem",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span>📥</span> Exportar Excel
        </button>
      </div>

      {Object.values(resumo).map((obraGroup, index) => (
        <div key={index} className="resumo-card">
          <div className="resumo-header">
            {obraGroup.empresa} | {obraGroup.obra}
          </div>

          <div className="resumo-body">
            {Object.entries(obraGroup.datas).map(([data, info]) => (
              <div key={data} className="resumo-dia">
                <div className="dia-linha">
                  <strong>{data}</strong>
                  <div className="colaboradores-lista">
                    {info.colaboradores.map((c, i) => (
                      <div key={i} className="colaborador-item">
                        <span>
                          {c.nome}: <strong>{c.tempo}</strong>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="dia-total">
                  Total: {info.totalDia.toFixed(2)}h
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResumoObras;
