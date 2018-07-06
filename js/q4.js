(function() {
  let c4 = app.getComponente('c4');
  let $ctrl = c4.$ctrl;



  $ctrl.array = function() {


var divq4 = document.getElementById('q4');
var formq4 = document.createElement("form");
divq4.appendChild(formq4);

var quantidade = document.createElement("label");
quantidade.innerHTML = 'Quantidade de numeros:';
formq4.appendChild(quantidade);

var quantidadeinput = document.createElement("INPUT");
quantidadeinput.setAttribute('type', "number");
quantidadeinput.setAttribute('id', "quantidadeinputid");
formq4.appendChild(quantidadeinput);
var linebreak = document.createElement('br');
formq4.appendChild(linebreak);

var min = document.createElement("LABEL");
min.innerHTML = 'Valor minimo:';
formq4.appendChild(min);

var mininput = document.createElement("INPUT");
mininput.setAttribute('type', "number");
mininput.setAttribute('id', "mininputid");
formq4.appendChild(mininput);

linebreak = document.createElement('br');
formq4.appendChild(linebreak);

var max = document.createElement("LABEL");
max.innerHTML = 'Valor Maximo:';
formq4.appendChild(max);

var maxinput = document.createElement("INPUT");
maxinput.setAttribute('type', "number");
maxinput.setAttribute("id", "maxinputid");
formq4.appendChild(maxinput);

linebreak = document.createElement('br');
formq4.appendChild(linebreak);

var button = document.createElement("input");
button.setAttribute('type', "button");
button.setAttribute('id', "botao");
button.setAttribute("value", "Calcular");
formq4.appendChild(button);

var resultado4 = document.createElement("p");
resultado4.setAttribute('id', "result4");
formq4.appendChild(resultado4);


button.onclick = function() {

  var xquantidade = parseInt(document.getElementById('quantidadeinputid').value);
  var ymax = parseInt(document.getElementById('maxinputid').value);
  var zmin = parseInt(document.getElementById('mininputid').value);
  var ray = [];
  if (xquantidade > 0 && ymax > 0 && zmin > 0 && xquantidade <= ymax - zmin) {
    for (i=0; i<xquantidade; i++) {

       numger = Math.floor(Math.random() * (ymax - zmin + 1)) + zmin;
       retorno = ray.indexOf(numger);
       if (retorno === -1) {
         ray[i] = numger;
       }
       else {
         i--;
       }

    };
    ray = ray.sort(function(a, b){return a-b});
    document.getElementById('result4').innerHTML = ray;

  }
  else {
    document.getElementById('result4').innerHTML = "Range inadequado para a quantidade"
  }
  console.log(ray);



};






};
})();

app.c4.$ctrl.array();
