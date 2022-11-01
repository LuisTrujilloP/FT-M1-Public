
//                                  Clousure
//      Utilidades
//                  - proteger las variables
//                  - fabrica de funciones 



var crearFunction = function(){
    var arreglos = [];

    for(var i = 0; i < 3; i++){
        arreglos.push
            (function(){
                console.log(i);
            }(i))

    }
}
var arr = crearFunction();
arr[0]();
arr[1]();
arr[2]();



