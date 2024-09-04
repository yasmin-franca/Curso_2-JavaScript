//length - quantidade de caractere no texto
var nome = "MYG";
console.log(nome.length);

//indexOf - inicio da palavra/frase
console.log(nome[2]);
var frase = "O rato roeu a roupa do rei de Roma";
console.log(frase.indexOf("roeu"));

//slice - remove uma parte da frase/palavra
var roeu = frase.slice(7, 11);
console.log(roeu);

//replace - trocar
var novaFrase = frase.replace("roeu", "comeu");
console.log(novaFrase);

//métodos que podem modificar
