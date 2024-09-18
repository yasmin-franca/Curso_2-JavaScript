//podemos criar também os nossos objetos com propriedades e métodos para auxiliar nos nossos programas.
let pessoa = {
    nome: "Yasmin",
    idade: 19,
    falar: function() {
        console.log("Olá, mundo!");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2, 2);

console.log(soma);