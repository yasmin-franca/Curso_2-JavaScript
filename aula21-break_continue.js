/*
Break encerra uma instrução
Continue pula uma instrução
Utilizados (em grande parte) em loops
*/
for (var i = 10; i > 0; i--) {
    console.log(i);

    if (i === 5) {
        break;
    }
}

console.log("Deu o break!");

var x = 10;

while (x < 100) {

    x += 10;

    if (x === 60 || x === 90) {
        console.log("continue");
        continue;
    }

    console.log("Testando continue " + x);
}