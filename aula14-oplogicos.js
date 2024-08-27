/*----------------------------------------------------------------------------------------------------*/

/*
Operadores Lógicos
Estes operadores realizam uma comparação para retornar um valor true ou false, decidindo então o fluxo da aplicação.
Utilizados principalmente nas instrutuções de condição e repetição, em conjunto dos operadores de comparação.
AND &&
OR ||
NOT !

AND && retorna true apenas se as duas expressões forem TRUE, então qualquer outro resultado o AND retorna FALSE
OR || retora true se uma das expressões for verdadeira, e só retorna false se todas as expressõe forem falsas.
NOT ! ele muda o valor que a expressão retornou, true vira false e vice e versa.
*/
var idade = 4;
var nome = "Cecília";

if(nome == "Helena" && idade == 5) {
    console.log("A Helena pode ir para a pré-escola");
} else {
    console.log("Esta não é a Helena");
}


if(nome == "Helena" || idade >= 5) {
    console.log("A menina pode ir para a pré-escola");
} else {
    console.log("Esta garotinha não pode ir a pré-escola");
}

if(!false) {
    console.log("Passou");
}