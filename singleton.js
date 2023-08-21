const Singleton = (function(user){
    function Usuario(nomeUsuario) {
        this.nome = localStorage.getItem("loggedAs"),
        this.logadoDesde = localStorage.getItem(this.nome+"logadoDesde"),
        this.events = localStorage.getItem(this.nome+"events");
    }
    let usuario;
    function novoUsuario(nomeUsuario){
      var nomeUsuario=localStorage.getItem("loggedAs");
      const user = new Usuario(nomeUsuario);
      return user;
    }
    return {
      getUsuario: () => {
        if(!usuario){
          usuario = novoUsuario();
        }
        return usuario;
      }
    } 
  })();