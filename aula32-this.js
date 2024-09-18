/*
Fora dos escopos locais, o this sempre se refere ao objeto global window
em objetos o this vai se referir a instância e pode acessar suas propriedades
mostrar valor ou alterar valor
*/
    var teste = 5;
    
    console.log(this.teste);
    console.log(teste);
    
    let pessoa = {
        nome: "Yasmin",
        idade: 19,
        falar: function() {
            console.log("Olá, mundo!");
        },
        soma: function(a, b) {
            return a + b;
        },
        dizerNome: function() {
            console.log("O meu nome é " + this.nome);
        },
        aniversario: function() {
            this.idade += 1;
        }
    };

    pessoa.dizerNome();

    console.log(pessoa.idade);
    
    pessoa.aniversario();

    console.log(pessoa.idade);