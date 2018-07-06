(function() {
  let c1 = app.getComponente('c1');
  let $ctrl = c1.$ctrl;

  $ctrl.c1 = function() {

    var divQ1 = document.getElementById('q1');
    var formQ1 = document.createElement("form");
    divQ1.appendChild(formQ1);

    var minvalor = document.createElement("label");
    minvalor.setAttribute('id', "minvalorid");
    minvalor.innerHTML = 'Valor minimo';
    formQ1.appendChild(minvalor);

    var mininp = document.createElement("input");
    mininp.setAttribute('type', "number");
    mininp.setAttribute('id', "mininpid");
    formQ1.appendChild(mininp);

    linhaespaco = document.createElement('br');
    formQ1.appendChild(linhaespaco);

    var maxvalor = document.createElement("label");
    maxvalor.setAttribute('id', "maxvalorid");
    maxvalor.innerHTML = 'Valor maximo';
    formQ1.appendChild(maxvalor);

    var maxinp = document.createElement("input");
    maxinp.setAttribute('type', "number");
    maxinp.setAttribute('id', "maxinpid");
    formQ1.appendChild(maxinp);

    var linhaespaco = document.createElement('br');
    formQ1.appendChild(linhaespaco);

    var result = document.createElement("p");
    result.setAttribute('id', "result");
    formQ1.appendChild(result);

    var button = document.createElement("input");
    button.setAttribute('type', "button");
    button.setAttribute('id', "button");
    button.setAttribute("value", "Calcular");
    formQ1.appendChild(button);

    linhaespaco = document.createElement('br');
    formQ1.appendChild(linhaespaco);
    button.onclick = function() {

      var k = 0;
      var min = parseInt(document.getElementById('mininpid').value);
      var max = parseInt(document.getElementById('maxinpid').value);
      var NumArray=[];

      if (!(isNaN(max)) && !(isNaN(min))) {
        console.log(typeof(min));
        for (i=min+1; i<max; i++) {
          if (i % 2 == 0 && i % 3 == 0) {
            NumArray.push(i);

          };

        };
        document.getElementById('result').innerHTML = "result:"+NumArray;
      } else {
        document.getElementById('result').innerHTML = "Insira um numero"
      }

    };


  };
})();

 app.c1.$ctrl.c1();