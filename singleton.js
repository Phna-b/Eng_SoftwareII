






const Singleton = (function(user){
    function userFactory(tipo) {
        this.nome = localStorage.getItem("loggedAs"),
        this.logadoDesde = localStorage.getItem(this.nome+"logadoDesde"),
        this.events = localStorage.getItem(this.nome+"-events");
        this.tipo = (tipo)?'admin':'user';
    }
    let usuario;
    function Usuario(){
      return new userFactory(0);
    }
    function Admin(){
      return new userFactory(1);
    }
    return {
      getUsuario: () => {
        if(!usuario){
          if(localStorage.getItem("loggedAs")=="admin"||localStorage.getItem("loggedAs")=="adm")
            usuario = Admin();
          else
            usuario = Usuario();
        }
        return usuario;
      }
    } 
  })();

  function checkLogin() {
    temp_loggedAs = localStorage.getItem("loggedAs");
    temp_regMatch = window.location.href.match(/(calendar.html)/g);
    if((!temp_loggedAs||temp_loggedAs=='null')&&(temp_regMatch&&temp_regMatch[0]=='calendar.html')){
      alert("Faça login para acessar o calendário!");
      window.location.href = "index.html";
    }else{
      usuario = Singleton.getUsuario();
      if(temp_regMatch&&temp_regMatch[0]=='calendar.html'){
        document.getElementById('calendarioDe').innerHTML="Calendário de "+usuario.nome;
      }
    }
  }

  function logout(){
    if(confirm("Tem certeza que deseja sair?")){
      thanks = "Obrigado por utilizar nosso sistema, "+usuario.nome+"!";
      thanks+="\n\nCalendário de eventos - Um trabalho prático de Engenharia de Software II ";
      thanks+="trazido a vocês por:\nLuís Guilherme L. Aguiar - 19.1.8025";
      thanks+="\nPedro Henrique Nunes - 19.2.8008";
      alert(thanks);
      localStorage.removeItem("loggedAs");
      window.location.href="index.html"
    }
  }