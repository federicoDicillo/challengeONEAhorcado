var inputTexto = document.querySelector("#inputTexto");
var btnaddrun = document.querySelector("#addrun");
var btncancel = document.querySelector("#cancel");

btnaddrun.addEventListener("click", function () {
    var palabra = inputTexto.value;

    if(palabra.length <= 8 && palabra !== "" ){
        palabras.push(inputTexto.value.toLocaleUpperCase());
        setTimeout(() => {
           window.location = 'game.html';
           console.log(palabras);
          }, 200);
    } else {
        alert("Debe colocar menos de 8 caracteres");
        inputTexto.value = "";
        inputTexto.focus();
    }

});

btncancel.addEventListener("click",function(){
    setTimeout(() => {
        window.location = 'index.html';
      }, 200);
    
});