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
//toUpperCase e toLowerCase
var frase = "Esta é a frase que vamos manipular"

var fraseCaixaAlta = frase.toUpperCase();

console.log(fraseCaixaAlta);

console.log(fraseCaixaAlta.toLowerCase());

//trim - tirar espaço em excesso
var nome = "     Matheus       "

var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

//split
console.log(frase.split(" "));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(", "));

//lastIndexOf
var fraseDois = "Eu quero a última palavra teste dessa frase de teste";

console.log(fraseDois.indexOf("teste"));

console.log(fraseDois.lastIndexOf("teste"));