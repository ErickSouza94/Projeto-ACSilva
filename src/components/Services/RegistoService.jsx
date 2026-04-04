const STORAGE_KEY = "ac_silva_registros_v1";

export const registroService = {
  // Salva um novo horário no "banco"
  salvar(novoRegistro) {
    const historicoAtual = this.obterTodos();
    const dadosAtualizados = [
      ...historicoAtual,
      { ...novoRegistro, id: Date.now() },
    ];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosAtualizados));
    return dadosAtualizados;
  },

  // Busca todos os horários já registrados
  obterTodos() {
    const dados = localStorage.getItem(STORAGE_KEY);
    return dados ? JSON.parse(dados) : [];
  },

  excluir(id) {
    const historicoAtual = this.obterTodos();
    const dadosAtualizados = historicoAtual.filter((reg) => reg.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dadosAtualizados));
    return dadosAtualizados;
  },

  // Limpa tudo (útil se o patrão já exportou os dados)
  limparTudo() {
    localStorage.removeItem(STORAGE_KEY);
  },
};
