// splice - adionar um elemento no meio do array e remover um elemento específico
var arr = [1,2,3,4,5];
arr.splice(2, 0, 999);
console.log(arr);

arr.splice(4, 1);
console.log(arr);


//indexOf para achar o indice de um elemento
console.log(arr.indexOf(5));


//join transforma o array numa string
var arr2 = ["O", "rato", "roeu", "a", "roupa", "do", "rei", "de", "Roma."];
console.log(arr2.join(" "));


//reverse para inverter a ordem
console.log(arr2.reverse());