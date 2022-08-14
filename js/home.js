function seleccion (elemento){
    var dato = document.querySelector(elemento);
    return dato;
}

var btnstart = seleccion("#start");
var btnadd = seleccion("#add");

btnstart.addEventListener("click",function(){
    
    setTimeout(() => {
        window.location = 'game.html';
    }, 200);  
})

btnadd.addEventListener("click", function(){

    setTimeout(()=>{
        window.location = 'addWord.html';
    },200)
})

