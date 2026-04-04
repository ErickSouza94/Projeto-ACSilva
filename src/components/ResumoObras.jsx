import "./ResumoObra.css";

import React from "react";

export default function ResumoObras({ registros }) {
  // Agrupamos por "Empresa - Obra" para garantir clareza
  const agrupado = registros.reduce((acc, reg) => {
    const chaveObra = `${reg.empresa} | ${reg.obra}`;
    if (!acc[chaveObra]) acc[chaveObra] = {};
    if (!acc[chaveObra][reg.data]) acc[chaveObra][reg.data] = [];
    acc[chaveObra][reg.data].push(reg);
    return acc;
  }, {});

  return (
    <div className="resumo-container">
      <h2>Relatório por Obra</h2>
      {Object.keys(agrupado).length === 0 ? (
        <p className="vazio">Nenhum registro encontrado para resumo.</p>
      ) : (
        Object.entries(agrupado).map(([obraInfo, datas]) => (
          <div key={obraInfo} className="secao-obra">
            {/* O título agora mostra "EMPRESA | Obra" */}
            <h3 className="titulo-obra">{obraInfo}</h3>

            {Object.entries(datas).map(([data, lista]) => {
              const totalDia = lista.reduce(
                (sum, r) => sum + Number(r.horas),
                0,
              );

              return (
                <div key={data} className="linha-dia">
                  <span className="data-label">{data}</span>
                  <div className="detalhes-dia">
                    {lista.map((r, i) => (
                      <div key={i} className="colaborador-linha">
                        <small>
                          {r.colaborador}: {r.tempoFormatado}
                        </small>
                      </div>
                    ))}
                    <strong className="total-destaque">
                      Total: {totalDia.toFixed(2)}h
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        ))
      )}
    </div>
  );
}
