import React from "react";

function Historico({ registros, onExcluir }) {
  // Função para formatar a data para o padrão PT-PT
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
              <div className="card-info">
                <strong>{reg.obra?.empresa?.nome || "Empresa"}</strong>
                <span>{reg.obra?.nome || "Obra não identificada"}</span>
                <small>
                  {reg.colaborador?.toUpperCase()} • {formatarData(reg.data)}
                </small>

                {/* ADICIONADO: Exibição de materiais no histórico */}
                {reg.materiais && (
                  <div
                    style={{
                      marginTop: "8px",
                      padding: "4px 8px",
                      backgroundColor: "#fff9c4",
                      borderLeft: "3px solid #fbc02d",
                      borderRadius: "3px",
                      fontSize: "0.75rem",
                      color: "#555",
                      fontStyle: "italic",
                    }}
                  >
                    <strong>Materiais:</strong> {reg.materiais}
                  </div>
                )}
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
