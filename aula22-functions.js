/*
Funções são blocos de código reutilizáveis.
A função precisa ser invocada para ser executada.
*/
function primeiraFuncao() {
    console.log("Hello World");
}
primeiraFuncao();

//argumento
function dizerNome(nome) {
    console.log("O nome é: " + nome);
}
dizerNome("Myg");

//passar como variável
var nomeBancoDeDados = "Matthew";

dizerNome(nomeBancoDeDados);

//return
function soma(a, b) {
    var soma = a + b;
    return soma;
    //ou - return a + b;
}

var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(5, 5);
console.log(somaDois);

console.log(soma(4, 4));