/*
Operadores condicionais são instruções que podem determinar o fluxo de uma aplicação.
são muito utilizados e deixam os softwares dinâmicos.
If, Else If, Else
*/

/*
Condiconal If
Executa um bloco de código se a instrução for verdadeira;
se for false, segue normalmente;
True e False = Boolean
*/
//console.log("antes do if");

/*if (true) {
    console.log("testando o if");
} //se for false o if não sera executado no console.*/

//console.log("depois do if");

var idade = 19

if (idade >= 18) {
    console.log("Pode tirar a CNH");
} else {
    console.log("Menor de idade! Volte quando fizer 18.");
}

/*----------------------------------------------------------------------------------------------------*/

/*
Operadores de Comparação:
São utilzados para verificação nas estruturas de condição.
==, !=, >, <, >=, <=, ===, !==
A partir da expressão de comparação podemos obter um true or false
== comparação entre dois valores, igual
!= diferente ou igual
> maior que
< menor que
>= maior ou igual a que
<= menor ou igual a que
=== igual a ( valor e tipo de dado)
!== diferente ou igual (valor e tipo de dado)
*/
var numero = '5';

if(numero === '5') {
    console.log("O número é 5");
}

if(numero !== 5) {
    console.log("Não é o número 5 do tipo number");
}

/*----------------------------------------------------------------------------------------------------*/

/*
Caso o if seja negativo, adiciona-se o else, que será outra condicional a ser executada;
Cria-se uma bifurcação no código;
O else if tem a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
*/

var nome = "Matheus"

if(nome == "Isaías") {
    console.log("O nome dele é Isaías");
} else if(nome == "Dante") {
    console.log("O nome dele é Dante");
} else {
    console.log("Ele possui outro nome");
}