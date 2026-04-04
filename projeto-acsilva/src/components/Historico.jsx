import React from "react";

function Historico({ registros, onExcluir }) {
  // Função para formatar a data para o padrão PT-PT (DD/MM/AAAA)
  const formatarData = (dataString) => {
    if (!dataString) return "";
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-PT");
  };

  return (
    <section className="historico-section">
      <h3>
        <span role="img" aria-label="clock">
          🕒
        </span>{" "}
        Registos Recentes
      </h3>

      <div className="lista-registros">
        {registros.length === 0 ? (
          <p className="vazio">Nenhum registo encontrado no sistema.</p>
        ) : (
          registros.map((reg) => (
            <div key={reg.id} className="card-registro">
              {/* Lado Esquerdo: Info da Obra e Colaborador */}
              <div className="card-info">
                <strong>{reg.obra?.empresa?.nome || "Empresa"}</strong>
                <span>{reg.obra?.nome || "Obra não identificada"}</span>
                <small>
                  {reg.colaborador.toUpperCase()} • {formatarData(reg.data)}
                </small>
              </div>

              {/* Lado Direito: Tempo e Botão Excluir */}
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
