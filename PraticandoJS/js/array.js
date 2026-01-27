const lista = [];
lista[0] = "arroz";
lista[2] = "macarrao";
lista[3] = "feijao";
//ou
const lista2 = ["1", "2", "3"];
lista.forEach(function (item) {
  alert(item);
});
//para pegar o ultimo item de uma lista
alert(lista[lista.length - 1]);

//adiciona o que quiser no array
lista.push("batata");

//remove ultimo item do array
lista.pop();

//remove primeio item do array
lista.shift();

//adiciona item no inicio do array
lista.unshift("cafe");

//manipula qual posicao o item que voce quer adicionar no array(primeiro Numero)e qual excluir(segundo Numero)
lista.splice(2, 0, "cebola");

//fundir os itens de dois arrays diferentes
const ListaPlus = lista.concat(lista2);

//coloca os itens em ordem alfabetica
const ListaOrdem = lista.sort();

//coloca em ordem decrescente
const ListaOrdem2 = lista.reverse();

// document.getElementById("jogos").innerHTML = ListaOrdem;

// Adicionar este código para manter o select visível e adicionar as opções da lista
const selectJogos = document.getElementById("jogos");
ListaOrdem.forEach((item) => {
  const option = document.createElement("option");
  option.value = item;
  option.text = item;
  selectJogos.appendChild(option);
});

// Usar let para arrays que serão modificados
let listaModificavel = [...lista];
