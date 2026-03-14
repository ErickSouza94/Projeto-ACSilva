import "./Services/Historico.css";

export default function Historico({ registros, onExcluir }) {
  return (
    <section className="historico-section">
      <h3>Registros de Hoje</h3>

      {registros.length === 0 ? (
        <p className="vazio">Nenhum registro encontrado.</p>
      ) : (
        <div className="lista-registros">
          {registros.map((item) => (
            <div key={item.id} className="card-registro">
              <div className="card-info">
                <strong>{item.empresa}</strong>
                <span> / {item.obra} / </span>
                <strong>
                  {item.colaborador} - {item.data}{" "}
                </strong>
              </div>
              <div className="card-acoes">
                <div className="card-horas">
                  <strong>{item.tempoFormatado}</strong>
                  {/* Botão de Excluir */}
                  <button
                    className="btn-excluir"
                    onClick={() => onExcluir(item.id)}
                    title="Excluir registro"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
