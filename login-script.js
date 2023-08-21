const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");
  entrar = document.querySelector("#entrar");
  cadastrar = document.querySelector("#cadastrar");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});

entrar.addEventListener("click",(e)=>{
  //passar a sessão para a página de calendário
  // window.open("calendar.html?loggedAs=luisguilherme", "_self");
  login();
});
cadastrar.addEventListener("click",(e)=>{
  cadastro();
});

function login(){
  if(localStorage.getItem("loggedAs")){
    if(typeof localStorage.getItem("loggedAs") == "string")
      alert("Você já está logado como "+localStorage.getItem("loggedAs")+"!")
    else
      alert("Você já está logado como "+JSON.parse(localStorage.getItem("loggedAs")).nome+"!");
    hrefCalendar();
    return;
  }
  var nome = document.getElementById("user").value;
  var senha = document.getElementById("pwd").value;
  if(localStorage.getItem(nome)&&localStorage.getItem(nome+senha)==senha){
    localStorage.setItem("loggedAs",nome);
    usuario = Singleton.getUsuario(nome);
    alert("Bem vindo "+nome+"!");
    localStorage.setItem("loggedAs",usuario.nome);
    console.log(localStorage.getItem("loggedAs"));
  }else{
    alert("Usuário ou senha incorretos!");
    return
  }
  hrefCalendar();
}

function cadastro(){
  var nome = document.getElementById("novoUsername").value;
  var senha1 = document.getElementById("pwd1").value;
  var senha2 = document.getElementById("pwd2").value;
  if(localStorage.getItem(nome)){
    alert("Usuário já cadastrado!");
    return;
  }
  if(senha1!=senha2){
    alert("As senhas devem ser iguais!");
    return;
  }
  localStorage.setItem(nome,nome);
  localStorage.setItem(nome+senha1,senha1);
  alert("Usuário cadastrado com sucesso!");
}

function hrefCalendar(){
  setTimeout(() => {
    window.location.href = "calendar.html";
  }, 1500);
}
