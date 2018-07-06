(function() {
  let c3 = app.getComponente('c3');
  let $ctrl = c3.$ctrl;

$ctrl.c3 = function() {

var divQ3 = document.getElementById("q3");
var formQ3 = document.createElement('form');
divQ3.appendChild(formQ3);

var tableQ3 = document.createElement('table');
tableQ3.setAttribute("text-align","left");
tableQ3.setAttribute("margin-left","auto");
tableQ3.setAttribute("margin-right","auto");
tableQ3.setAttribute("cellpadding","10");
tableQ3.setAttribute("cellspacing","10");
tableQ3.setAttribute("width","350");
tableQ3.setAttribute("bgcolor","#f1f1f1");
formQ3.appendChild(tableQ3);

var tablebody = document.createElement("tbody");
tableQ3.appendChild(tablebody);

// SA PORRA AQUI TROLLOU NAO CONSIGO ADICIONAR JUNTO COM O FOR PRA GERAR NEW ALUNO -.-'

var alunos = ["", "Arnaldo", "Bianca", "Carlos", "Diana", "Eloisa", "Fernanda", "Gabriela", "Helton", "Jorge", "Kayke", "Iago", "Lucas", "Matheus", "Neilton", "Octavio", "Paulo", "Quenia", "Rayza", "Sandra","Tabata","Ulisses","Vanessa"];
var nome = Symbol();
var nr = Symbol();
var nota = Symbol();

class Aluno {
    constructor(novo_nome,novo_nr,nova_nota){
        this[nome] = novo_nome;
        this[nr] = novo_nr;
        this[nota] = nova_nota;
    }
    
    getNome(){
      return this[nome];
    }

    getNr(){
      return this[nr];
    }

    getNota(){
      return this[nota];
    }
}

for (let x = 1; x < 23; x++){
// Array pra "randomizar" os nomes... rs

aluno = new Aluno(alunos[x], x, Math.floor((Math.random()*100)+1)); 

var trlinha = document.createElement("tr");
tablebody.appendChild(trlinha);

var tdcoluna = document.createElement("td");
tdcoluna.innerHTML = ("Aluno:"+aluno.getNome());
trlinha.appendChild(tdcoluna);

var tdcoluna1 = document.createElement("td");
tdcoluna1.innerHTML = ("Numero:"+aluno.getNr());
trlinha.appendChild(tdcoluna1);

var tdcoluna2 = document.createElement("td");
tdcoluna2.innerHTML = ("Nota:"+aluno.getNota());
trlinha.appendChild(tdcoluna2);


}



}
}

)();

 app.c3.$ctrl.c3();