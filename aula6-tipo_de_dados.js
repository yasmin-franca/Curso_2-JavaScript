//Number, String, Boolean (true/false), null, undefinded, Object -> typeof.

/*
Number:
Tipo de dado para números
Três valores simbólicos: +Infinity, - Infinity, NaN (Not a Number)
Engloba todo os tipo sde números.
*/
var numero = 5;
console.log(numero);
console.log(typeof numero);

var float = 5.5; //número quebrado
console.log(float);
console.log(typeof float);

var textoComNumero = '532';
console.log(textoComNumero);
console.log(typeof textoComNumero);
//não é considerado número por conta das aspas simples.

console.log(NaN);
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof -Infinity);

/*----------------------------------------------------------------------------------------------------*/

/*
String:
tipo de dados para texto
aspas ' ou aspas "
número entre aspas pode ser considerado uma string
é possível concatenar (juntar) strings com o +
*/
var nome = "Matheus";
console.log(nome);
console.log(typeof nome);

var sobrenome = "França"

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);
console.log(typeof nomeCompleto);

/*document.write("Ela disse: 'Estou quebrada'");*/
/*----------------------------------------------------------------------------------------------------*/

/*
Boolean:
tipo de dados para representar valor verdadeiro ou falso
comparações resultam em boleanos
é possível atribuir um true/false a uma variável e ela terá o tipo boolean
*/
