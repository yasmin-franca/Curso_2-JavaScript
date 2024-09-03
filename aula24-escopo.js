/*
No JavaScript pode ter vários escopos.
Global que é iniciado em toda a aplicação e os locais, que podem existir em várias instruções como as funções.
*/
var x = 1;
var y = 3;
console.log("Escopo global: " + x, y);

function teste() {
    var z = 0;
    console.log("Escopo local: " + z);
}
teste();

function testando() {
    var z = 5;
    console.log("Escopo local: " + z);
}
testando();

if(true) {
    var p = 1;
}
console.log(p);