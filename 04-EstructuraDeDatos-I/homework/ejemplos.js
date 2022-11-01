// RECURSION


// Funcion que se llama a si misma
// y que voy modificando el argimento que le voy pasando,
// identificamos el caso base


// Funcion que se llama a si misma, en principio se puede, porque recursiva()
// forma parte del scope global, esto satura el motor de js, a no ser que le pongamos un limite


// function recursiva(){
//     recursiva();
// }




// Llamada recursiva
// Debe tener un freno
// condicion de freno se llama caso base  "cuando mi numero sea 1 paramos"


function suma(num){
    
    if(num <= 1){
        return 1;    
    }
    console.log(num)
    return num + suma(num - 1);

}
suma(4);


var arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var set1 = new Set(arreglo);



var queue = [];
queue.push(1);          //la cola es [2]
queue.push(2);          //la cola es [2]
queue.push(3);  
var i = queue.shift();  //la cola es [2]
console.log(i);
