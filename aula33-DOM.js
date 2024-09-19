/*
Document Object Model
É uma interface de programação para HTML
Por meio dele temos métodos para acessar a árvore de elementos
O DOM fornece uma cópia HTML
Podemos manipular eventos pelo DOM para afetar o HTML
 */
/*
Acessar o DOM caracteriza-se por identificar um elemento do HTML atráves de métodos
Depois podemos manipulá-los da forma que quisermos
Acessar o DOM é semelhante as regras de CSS
Podemos acessar por: tags, ids, classes.....
 */

//tag
var tit = document.getElementsByTagName('h1')[0];
console.log(tit);

var lis = document.getElementsByTagName('li');
console.log(lis);


//id
var paragrafo = document.getElementById('paragrafo');
console.log(paragrafo);


//class
var itensDaLista = document.getElementsByClassName('item');
console.log(itensDaLista);


//querySelectorAll
var itensClasse = document.getElementsByClassName('item');
console.log(itensClasse);

var itensQuery = document.querySelectorAll('#lista2 li');
console.log(itensQuery);


//querySelector
var lista = document.querySelector('#lista');
console.log(lista);