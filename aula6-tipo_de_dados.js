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
var verdadeiro = true;
console.log(verdadeiro);
console.log(typeof verdadeiro);

var falso = false;
console.log(falso);
console.log(typeof falso);

/*----------------------------------------------------------------------------------------------------*/

/*
Undefined e null:
null é tipo de dado que representa um valor
undefined é um tipo de dado para uma varíavel com valor não atribuído
*/
var nome = null;
console.log(nome);
console.log(typeof nome);

// a few moments later |

nome = "myg";
console.log(nome);
console.log(typeof nome);

var sobrenome2;
console.log(sobrenome2);
console.log(typeof sobrenome2);

/*----------------------------------------------------------------------------------------------------*/

/*
Object:
funcionam como um array associativo de outras linguagens
pode criar propriedades com chave e valor
idea de guardar um conjunto de valores para usar depois
*/
var obj = {
    nome: "MYG",
    ramo: "empresa",
    tempo_de_mercado: 40,
    esta_ativa: true,
};
console.log(obj);
console.log(typeof obj);

//acessando propriedades do objeto
console.log(obj.nome);
console.log(obj.ramo);
console.log(obj.tempo_de_mercado);

console.log("O nome da empresa é: " + obj.nome);

/*----------------------------------------------------------------------------------------------------*/

/*
Arrays:
São considerados objetos, mas servem como listas
podem ter itens de qualquer tipod de dado
Porém, não por chave e valor, e sim por índice
*/
var arr = ["MYG", "empresa", 40, true, {teste: 1, teste: 2}];
console.log(arr);

var arr2 = [2,3,4,5,6,7]; //mais comum arrays com um tipo só.
console.log(arr2);

//itens do array
console.log(arr[1]);
console.log(arr2[0]);

//inserindo valores ao array
arr[4] = false;
console.log(arr);

console.log(typeof arr);