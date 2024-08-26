/*
Estruturas de repetição servem para repetir n vezes uma operação.
mais comuns while e for.

while é a estrutura mais simples, o objetivo é repetir até que se atinja determinada condição.
whil -> enquanto
*/
var x = 0;

while(x <= 5) {
    console.log("Testando repetição " + x);
    //incremetador
    x++;
}

var arr = ['teste', 'testando', '1', '2'];
var y = 0;

while(y <= 3) {
    console.log(arr[y]);
    y++;
}