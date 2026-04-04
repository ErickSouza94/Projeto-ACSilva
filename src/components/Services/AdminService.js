const EMPRESAS_KEY = "@acsilva:empresas";
const OBRAS_KEY = "@acsilva:obras";

export const adminService = {
  // Empresas
  obterEmpresas() {
    const dados = localStorage.getItem(EMPRESAS_KEY);
    return dados ? JSON.parse(dados) : [];
  },
  salvarEmpresa(novaEmpresa) {
    const atuais = this.obterEmpresas();
    const atualizadas = [...atuais, { id: Date.now().toString(), ...novaEmpresa }];
    localStorage.setItem(EMPRESAS_KEY, JSON.stringify(atualizadas));
    return atualizadas;
  },

  // Obras
  obterObras() {
    const dados = localStorage.getItem(OBRAS_KEY);
    return dados ? JSON.parse(dados) : [];
  },
  salvarObra(novaObra) {
    const atuais = this.obterObras();
    const atualizadas = [...atuais, { id: Date.now().toString(), ...novaObra }];
    localStorage.setItem(OBRAS_KEY, JSON.stringify(atualizadas));
    return atualizadas;
  }
};