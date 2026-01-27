//fdskjkjkjkj
/*
Autor:Ronaldo
*/
window.onload = function() {
  document.getElementById("texto").innerHTML = "Meu primeiro texto <b>JS</b>!";
};
console.log("Oi isso é um console.log");
function apresentar(nome, idade) {
    console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
}

// Chamando a função
apresentar("João", 30);
apresentar("Maria", 25);

document.getElementById("id");
document.querySelector("Seletor");
document.querySelectorAll("Seletor");

function soma(v1,v2){
    return v1+v2;
}
function realPdolar(real,dolar){
    return real*dolar;
}
var valor=realPdolar(10,5.87);
document.getElementById("texto").innerHTML=soma(10,10);

const Ronaldo={
idade:20,
cor:"pardo",
curso:"ADS",
altura:"1.80",
treinar:function(){alert('biceps,peitoral,perna')},
completo:function(){
    return "Deve pesar 80kg com"+this.altura+" e "+this.idade+" de idade";
}
};
console.log(Ronaldo.completo());
