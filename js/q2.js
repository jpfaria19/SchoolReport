(function() {
  let c2 = app.getComponente('c2');
  let $ctrl = c2.$ctrl;



  $ctrl.fatorial = function() {



    var divQ2 = document.getElementById('q2');
    var formQ2 = document.createElement("form");
    divQ2.appendChild(formQ2);




    var fatorilabel = document.createElement("label");
    fatorilabel.setAttribute('id', "fatorilabelid");
    fatorilabel.innerHTML = 'Calcular o fatorial de ';
    formQ2.appendChild(fatorilabel);
    var inpfatorial = document.createElement("input");
    inpfatorial.setAttribute('type', "number");
    inpfatorial.setAttribute('id', "inpfatorialid");
    formQ2.appendChild(inpfatorial);
    var linhaespaco = document.createElement('br');
    formQ2.appendChild(linhaespaco);


    var button = document.createElement("input");
    button.setAttribute('type', "button");
    button.setAttribute('id', "botao");
    button.setAttribute("value", "Calcular");
    formQ2.appendChild(button);
    var result2 = document.createElement("p");
    result2.setAttribute('id', "result2");
    formQ2.appendChild(result2);
    button.onclick = function() {


      var fatorinum = parseInt(document.getElementById('inpfatorialid').value);


      if (!(isNaN(fatorinum))) {

        var start = new Date().getTime();
        var x2 = fatorinum;
        for (i=fatorinum-1; i>0; i--) {
        x2 = x2 * i;
        };
        var time = new Date().getTime() - start;





        document.getElementById('result2').innerHTML = `${fatorinum}! = ${x2}(${time})`;
      }  else {
        document.getElementById('result2').innerHTML = "Insira um numero"
      }

    };


  };
})();

 app.c2.$ctrl.fatorial();
