(function() {
  let c6 = app.getComponente('c6');
  let $ctrl = c6.$ctrl;


  $ctrl.c6 = function() {
//Funcao de login
      function Log(){
      login = document.getElementById("login");
      senha = document.getElementById("senha");
      if ( ValidLog(login.value,senha.value)){
         window.location.href = "cen2.html"
        }
      else{
        alert("Usuario ou senha invalidos ou nao cadastrados, por favor cadastre-se.");
      }
      }
//Validar Login
  function ValidLog(login,senha){
    return localStorage.getItem(login) == senha;
  }
// Salvar para localStorage
  function Saved(){
    if (!(document.getElementById('login').value || document.getElementById('senha').value)){
      alert('Insira um usuario e senha.');
    }else{
    localStorage.setItem(document.getElementById('login').value,document.getElementById('senha').value);
  }
  }
//funcao que irá inserir os elementos de formulario login
    var divQ6 = document.getElementById('q6');
    var formQ6 = document.createElement("form");
    formQ6.setAttribute("id","myform")
    divQ6.appendChild(formQ6);
      
    var labell = document.createElement("label");
    labell.innerHTML = 'Login: ';
    formQ6.appendChild(labell);
    
    var inputl = document.createElement('input');
    inputl.setAttribute("id","login");
    inputl.setAttribute("type","text");
    inputl.setAttribute("required","");
    formQ6.appendChild(inputl);

    var linebreak = document.createElement('br');
    formQ6.appendChild(linebreak);
    
    var labels = document.createElement("label");
    labels.innerHTML = 'Senha: ';
    formQ6.appendChild(labels);

    var inputs = document.createElement('input');
    inputs.setAttribute("id","senha");
    inputs.setAttribute("type","password");
    inputs.setAttribute("required","");
    formQ6.appendChild(inputs);

    var linebreak = document.createElement('br');
    formQ6.appendChild(linebreak);
    
    var botaologin = document.createElement("input");
    botaologin.setAttribute('type', "button");
    botaologin.setAttribute('id', "botaologin");
    botaologin.setAttribute('value','Login');
    formQ6.appendChild(botaologin);
    botaologin.onclick = Log;

    var botaocadastro = document.createElement("input");
    botaocadastro.setAttribute('type', "button");
    botaocadastro.setAttribute('id', "botaol");
    botaocadastro.setAttribute('value','Cadastrar-se');
    formQ6.appendChild(botaocadastro);
    botaocadastro.onclick = Saved;

  }
}
)();

app.c6.$ctrl.c6();


