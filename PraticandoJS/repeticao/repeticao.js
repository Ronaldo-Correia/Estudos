let i=20;
//for(let i=0;i<=10;i++){
//    console.log(i);
//}
// imprime o valor atual de i antes do laço
while(i>0){
    console.log(i);
    i--;
}
do{
    console.log(i);
    i--;
}while(i>0);

let lista=[9,2,3,5,4,7,6]
lista.sort()
/*for(let pos=0;pos<lista.length;pos++){
    console.lo g(`A posição ${pos} tem o valor ${lista[pos]}`);
}
*/
for(let pos in lista){
    console.log(`A posicao ${pos} tem o valor ${lista[pos]}`);
}