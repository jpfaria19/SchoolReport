(function() {
  let c5 = app.getComponente('c5');
  let $ctrl = c5.$ctrl;



  $ctrl.triangulo = function() {


var divq5 = document.getElementById('q5');
var formq5 = document.createElement("form");
divq5.appendChild(formq5);

var labelLadoA = document.createElement("label");
labelLadoA.innerHTML = 'Lado a:';
formq5.appendChild(labelLadoA);

var inpLadoA = document.createElement("INPUT");
inpLadoA.setAttribute('type', "number");
inpLadoA.setAttribute('id', "valorainput");
formq5.appendChild(inpLadoA);
var linhaespaco = document.createElement('br');
formq5.appendChild(linhaespaco);

var labelLadoB = document.createElement("LABEL");
labelLadoB.innerHTML = 'Lado b:';
formq5.appendChild(labelLadoB);

var inpLadoB = document.createElement("INPUT");
inpLadoB.setAttribute('type', "number");
inpLadoB.setAttribute('id', "valorbinput");
formq5.appendChild(inpLadoB);

linhaespaco = document.createElement('br');
formq5.appendChild(linhaespaco);

var labelLadoC = document.createElement("LABEL");
labelLadoC.innerHTML = 'Lado c:';
formq5.appendChild(labelLadoC);

var inpLadoC = document.createElement("INPUT");
inpLadoC.setAttribute('type', "number");
inpLadoC.setAttribute("id", "valorcinput");
formq5.appendChild(inpLadoC);

linhaespaco = document.createElement('br');
formq5.appendChild(linhaespaco);

var button = document.createElement("input");
button.setAttribute('type', "button");
button.setAttribute('id', "botao");
button.setAttribute("value", "Calcular");
formq5.appendChild(button);

var result5 = document.createElement("p");
result5.setAttribute('id', "result5");
formq5.appendChild(result5);


button.onclick = function() {

  var x = parseInt(document.getElementById('valorainput').value);
  var y = parseInt(document.getElementById('valorbinput').value);
  var z = parseInt(document.getElementById('valorcinput').value);
  var res = "";

  if( !(isNaN(x)) && !(isNaN(y)) && !(isNaN(z)))  {



  if (x == y && x == z) {
    res = "Triangulo equilatero";
  };
  if (x != y && x != z && y !=z) {
    res = "Triangulo escaleno";
  };

  if((x == y && x != z) || (x == z && x !=y)) {
    res = "triangulo isosceles"
  };

  if (x== 0 || y == 0 || z == 0) {
    res = "Nao existe triangulo cujo lado seja zero"
  };


  }

  else {
  res = "Insira algum numero"
  }

    document.getElementById('result5').innerHTML = res;
};






};
})();

app.c5.$ctrl.triangulo();
