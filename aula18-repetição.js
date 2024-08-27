/*
Estruturas de repetição servem para repetir n vezes uma operação.
mais comuns while e for.

while é a estrutura mais simples, o objetivo é repetir até que se atinja determinada condição.
while -> enquanto

For é mais complexo, porém mais utilizado
a instrução fica em uma linha só e proporciona mais controle.
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


for(var i = 0; i < 10; i++) {
    console.log("Testando for: " + i);
}

var arr = [1,2,3,4];

for(var j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}