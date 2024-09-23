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

//SELECIONAR ELEMENTOS
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


//ALTERAR CONTEÚDO
//1º selecionar o elemento
var title = document.querySelector("#title");

//innerHTML
title.innerHTML = "Testando o texto alterado!";

//textContent -> mais utilizado, recomendado e performático
var subtitle = document.querySelector(".subtitle");
subtitle.textContent = "Testando o textContent";


//CRIAR ELEMENTOS
//createElement
//inserir no body
var novoParagrafo = document.createElement("p");
var texto = document.createTextNode("Este é o conteúdo do paragráfo criado");
novoParagrafo.appendChild(texto);
console.log(novoParagrafo);

var body = document.querySelector("body");
console.log(body);
body.appendChild(novoParagrafo);

//inserir em um container
var container = document.getElementById("container");
console.log(container);

var el = document.createElement("span");
el.appendChild(document.createTextNode("texto do span"));
console.log(el);

container.appendChild(el);