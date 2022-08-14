function selector(elemento) {
    var dato = document.querySelector(elemento);
    return dato;
  }

  
  var letras = selector("#letras");
  var boton = selector("#start");
  var boton = selector("#faltas");
  var textos = selector("#error");
  var line = selector("#dale");
  var presentacion = selector("h1");
  var win = selector("h2");
  var btnsurrender = selector("#surrender");
  var btnInicio = selector("#start");
  var centro = selector(".centro");
  var btnjugar = selector(".btnjugar");
  
  var pantalla = document.querySelector('canvas');
  var part = pantalla.getContext('2d');

      //Horca
        part.beginPath();
        part.moveTo(15, 150);
        part.lineTo(200, 150);
        part.lineWidth = 6;
        part.strokeStyle = "black";
        part.stroke();
        part.beginPath();
        part.moveTo(30, 200);
        part.lineTo(30, 10);
        part.lineTo(150, 10);
        part.lineTo(150, 20);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.strokeStyle = "black";
        part.stroke();
      
  
  
  function draw(live, letter) {
    if (canvas.getContext) {
  
      if (live >= 1) {
        //Cabeza
        part.beginPath();
        part.arc(150, 40, 20, 0, Math.PI * 2, true);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
  
      if (live >= 2) {
        //Cuerpo
        part.beginPath();
        part.moveTo(150, 60);
        part.lineTo(150, 100);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
  
      if (live >= 3) {
        //brazos
        part.beginPath();
        part.moveTo(150, 60);
        part.lineTo(130, 100);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
  
      if (live >= 4) {
        //brazo
        part.beginPath();
        part.moveTo(150, 60);
        part.lineTo(170, 100);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
  
      if (live >= 5) {
        //piernas
        part.beginPath();
        part.moveTo(150, 100);
        part.lineTo(170, 130);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
  
      if (live >= 6) {
        //piernas
        part.beginPath();
        part.moveTo(150, 100);
        part.lineTo(130, 130);
        part.lineWidth = 4;
        part.lineCap = "round";
        part.stroke();
      }
    }
  }
  
  function selecionarPalabra(palabras) {
    return [...palabras].sort(() => (Math.random() > 0.5 ? 1 : -1)).slice(0, 1);
  }
  
  btnInicio.addEventListener("click", function () {
    location.reload();
  });
  
  var seleccionada = selecionarPalabra(palabras).toString();
  console.log(seleccionada.toString());
  
  //Funciona para crear la cantidad de lineas por palabras Y la cantidad de inputs de letras
  function crearRayas(cantidad) {
    for (var i = 1; i <= cantidad; i++) {
      var rayas = document.createElement("div");
      rayas.classList.add("raya");
      line.appendChild(rayas);
  
      //Creacion de los textbox con la cantidad de caracteres seleccionados de las palabras
      let txt = document.createElement("input");
      txt.type = "text";
      txt.classList.add("espacio");
      txt.name = "letras";
      txt.setAttribute("value", " ");
      txt.setAttribute("readonly", true);
      letras.appendChild(txt);
    }
  }
  
  
  crearRayas(seleccionada.length);
  
  presionarLetra();
  
  function printLetter(string, key, word) {
    for (var i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() == key.toString()) {
        word[i].value = key.toUpperCase();
      }
  
    }
  }
  
  
  btnsurrender.addEventListener("click", function () {
    setTimeout(() => {
      window.location = 'index.html';
    }, 200);
  });
  
  function presionarLetra() {
    var valido = false;
    document.addEventListener("keydown", (event) => {
      const keyName = event.key;

      var patron = /^[a-z]+$/;
      if (patron.test(keyName) && valido == false) {
        if (seleccionada.toLowerCase().includes(keyName) && seleccionada.toLowerCase().includes(keyName) != keyName) {
          var palabras = document.querySelectorAll(".espacio");
          var cadena = seleccionada;
          //Encontrar la cantidad de letras repetidas en una palabra
          printLetter(cadena, keyName, palabras);
          ValidateToWin();
  
        } else {
          let txt = document.createElement("label");
          txt.setAttribute("class", keyName);
          textos.appendChild(txt);
          txt.textContent = keyName.toUpperCase().toString();
  
          var cdad = document.querySelectorAll("[class=" + keyName + "]");
          var vida = document.querySelectorAll("label").length;
          draw(vida, keyName);
  
          if (cdad.length > 1) {
            //Removiendo el ultimo elemento de la lista
            const last = Array.from(cdad).pop();
            last.parentNode.removeChild(last);
          }
        }
      }
      var fin = document.querySelectorAll("label");
      if (fin.length >= 6 ) {
        presentacion.classList.add("fin");
        document.getElementById("fin").style.display = "show";
        valido = true;
      }
   
    });
  }
  
  function ValidateToWin() {
    let _insertedWords = document.querySelectorAll(".espacio");
    let _countWords = 0;
  
    for (let index = 0; index < _insertedWords.length; index++) {
      const element = _insertedWords[index].value;
      if (element != " ") {
        _countWords++;
      }
    }
  
    if (_countWords == seleccionada.length) {
      setTimeout(() => {
        win.classList.add("win");
        valido = true;
      
      }, 100);
    }
  
  }

  

