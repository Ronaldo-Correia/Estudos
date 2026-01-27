🌐 O que é uma API REST

REST significa Representational State Transfer.

É um estilo de arquitetura para construir APIs que usam URLs e métodos HTTP para acessar dados.
Cada recurso (ex.: usuários, produtos, posts) é representado por uma URL.
Os métodos HTTP definem a ação:

-GET → buscar dados

-POST → enviar/criar dados

-PUT/PATCH → atualizar dados

-DELETE → remover dados

Exemplo de endpoints REST:

GET https://api.exemplo.com/usuarios → lista todos os usuários

GET https://api.exemplo.com/usuarios/1 → busca usuário com id 1

POST https://api.exemplo.com/usuarios → cria novo usuário

🛠️ Como usar em JavaScript
Usando fetch (nativo do navegador)
```
// Buscar dados (GET)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Erro:", error));

// Enviar dados (POST)
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ title: "Novo Post", body: "Conteúdo aqui", userId: 1 })
})
  .then(response => response.json())
  .then(data => console.log("Criado:", data));
```
Usando async/await (mais moderno)
```
async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Erro:", error);
  }
}
getPost();
```
📚 Como funciona na prática

Seu código JS faz uma requisição HTTP para a API.

-O servidor processa e retorna uma resposta em JSON.

-Você manipula esse JSON como um objeto JavaScript.

-Usa os dados para atualizar a interface, salvar informações ou executar lógica.

🚀 Exemplos de uso real

Buscar previsão do tempo de uma API meteorológica.

-Criar um sistema de login que consome uma API de autenticação.

-Mostrar lista de produtos consumindo uma API de e-commerce.

## 🧠 Variáveis
```
let nome = "João";     // variável que pode mudar
const idade = 30;      // constante, não pode ser alterada
var cidade = "Bahia";  // forma antiga, evite usar
```
## 🔢 Tipos de Dados
```
String: "texto"
Number: 123, 3.14
Boolean: true, false
Array: [1, 2, 3]
Object: { nome: "João", idade: 30 }
Null: null
Undefined: undefined
```

## 🧮 Operadores
```
Aritméticos: +, -, *, /, %
Comparação: ==, ===, !=, !==, <, >, <=, >=
Lógicos: &&, ||, !
Atribuição: =, +=, -=, *=, /=
```
➕+= (atribuição com soma)
Serve para somar e atribuir ao mesmo tempo.
Exemplo:
```
let x = 5;
x += 3; // equivale a x = x + 3
console.log(x); // 8
```
👉 Também funciona com strings:
```
let texto = "Olá";
texto += " Ronaldo!";
console.log(texto); // "Olá Ronaldo!"
```
✖️ ** (exponenciação)
Serve para calcular potência.
Exemplo:
```
console.log(2 ** 3); // 8 (2 elevado a 3)
console.log(5 ** 2); // 25 (5 ao quadrado)
```
👉 É equivalente a Math.pow(2,3).

⚖️ && (AND lógico)
Serve para verificar se duas condições são verdadeiras.
Exemplo:
```
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir!");
}
```

## 🔁 Estruturas de Controle

### Condicional
```
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}
```
### Switch
```
switch (dia) {
  case "segunda":
    console.log("Começo da semana");
    break;
  case "sexta":
    console.log("Fim da semana");
    break;
  default:
    console.log("Dia comum");
}
```
## 🔄 Loops
```
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```
```
while (condicao) {
  // repete enquanto for true
}
```
```
do {
  // executa pelo menos uma vez
} while (condicao);
```
## 🧰 Funções
```
function saudacao(nome) {
  return "Olá, " + nome;
}
```
```
const soma = (a, b) => a + b; // função arrow
```
## 📦 Objetos e Arrays
### Objeto
```
const pessoa = {
  nome: "Ana",
  idade: 25,
  falar: function() {
    console.log("Oi!");
  }
};
```
### Array
```
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]); // "maçã"
```
## 📚 Métodos Comuns
### Arrays
```
frutas.push("uva");     // adiciona
frutas.pop();           // remove último
frutas.length;          // tamanho
frutas.includes("banana"); // verifica existência
```
### Strings
```
texto.length;
texto.toUpperCase();
texto.toLowerCase();
texto.includes("palavra");
texto.replace("a", "b");
```
## 🌐 DOM (Document Object Model)
```
document.getElementById("meuId");
document.querySelector(".minhaClasse");
elemento.innerHTML = "Novo conteúdo";
elemento.style.color = "red";
```
## 🕸️ Eventos
```
document.getElementById("botao").addEventListener("click", function() {
  alert("Botão clicado!");
});
```
## 📤 JSON
```
const obj = { nome: "João", idade: 30 };
const json = JSON.stringify(obj); // objeto → JSON
const novoObj = JSON.parse(json); // JSON → objeto
```
## 📦 Principais atributos e métodos de Strings
```
.length → tamanho da string
.toUpperCase() → transforma em maiúsculas
.toLowerCase() → transforma em minúsculas
.includes("texto") → verifica se contém determinado texto
.replace("a","b") → substitui partes da string
.trim() → remove espaços extras no início e fim
.split(" ") → divide em array usando separador
```
## 🔢 Principais atributos e métodos de Arrays
```
.length → quantidade de elementos
.push(item) → adiciona ao final
.pop() → remove último elemento
.shift() → remove primeiro elemento
.unshift(item) → adiciona no início
.includes(item) → verifica se existe
.indexOf(item) → posição do elemento
.join(",") → junta elementos em string
.map(fn) → percorre e transforma elementos
.filter(fn) → filtra elementos
.forEach(fn) → percorre cada elemento
.reduce(fn, valorInicial) → reduz array a um único valor
```
## 🧑‍💻 Principais atributos e métodos de Objetos
```
Object.keys(obj) → retorna chaves
Object.values(obj) → retorna valores
Object.entries(obj) → retorna pares chave/valor
obj.hasOwnProperty("chave") → verifica se existe propriedade
delete obj.chave → remove propriedade
```
## 📅 Principais atributos e métodos de Date
```
new Date() → cria data atual
.getFullYear() → ano
.getMonth() → mês (0–11)
.getDate() → dia do mês
.getDay() → dia da semana (0–6)
.getHours() → horas
.getMinutes() → minutos
.getSeconds() → segundos
.toLocaleDateString() → data formatada
.toLocaleTimeString() → hora formatada
```
## 🔧 Principais atributos e métodos de Math
```
Math.round(x) → arredonda
Math.floor(x) → arredonda para baixo
Math.ceil(x) → arredonda para cima
Math.random() → número aleatório entre 0 e 1
Math.max(a,b,...) → maior valor
Math.min(a,b,...) → menor valor
Math.pow(a,b) → potência
Math.sqrt(x) → raiz quadrada
```
## 🌐 Principais atributos e métodos do DOM
```
document.getElementById("id") → seleciona elemento por id
document.querySelector("seletor") → seleciona primeiro elemento que bate com seletor CSS
document.querySelectorAll("seletor") → seleciona todos elementos
element.innerHTML → altera conteúdo HTML
element.innerText → altera texto
element.style.propriedade → altera estilo CSS
element.addEventListener("evento", fn) → adiciona evento
```
## 🧠 Resumindo
```
Strings → manipulação de texto
Arrays → listas de dados
Objetos → coleções de chave/valor
Date → trabalhar com datas e horas
Math → cálculos matemáticos
DOM → manipulação da página
```
