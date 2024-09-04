/*
Métodos númericos
O objeto Number, pai dos números contém métodos úteis para trabalhar com números em JS
A maioria dos tipos de dado também tem um objeto pai, como: String, Object, Array
*/

//parseFloat - casas decimais, ponto flutuante
console.log(parseFloat('12.999'));
console.log(Number.parseFloat('12.999'));

//parseInt |String to Integer
console.log(parseInt('10'));
console.log(parseInt(16.96));


//toFixed
console.log(23.183949324920.toFixed(1));

//isNaN
console.log(isNaN("teste"));

//MAX_VALUE e MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);