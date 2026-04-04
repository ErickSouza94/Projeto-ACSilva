import React from "react";

function ResumoObras({ registros }) {
  // 1. Verificação inicial (fora de qualquer lógica complexa)
  if (!registros || registros.length === 0) {
    return (
      <div className="vazio">
        Nenhum registo encontrado para gerar o resumo.
      </div>
    );
  }

  // 2. Lógica de agrupamento (esta parte pode ter validações)
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

  // Executamos a lógica
  const resumo = processarDados();

  // 3. Renderização (O return deve ser limpo, sem try/catch em volta)
  return (
    <div className="resumo-container">
      <h2
        style={{ color: "#2c3e50", marginBottom: "20px", fontSize: "1.2rem" }}
      >
        Relatório por Obra
      </h2>

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
