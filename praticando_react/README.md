# Guia rápido de criação de projeto React

Um passo a passo enxuto para decidir cada opção ao usar create-next-app e iniciar bem seu projeto.

## Passo a passo das escolhas

Nome do projeto:  
Use algo claro e sem espaços (ex.: praticando_react).

Defaults recomendados:  
Personalize para entender cada escolha desde o início.

TypeScript:  
Comece com No se estiver iniciando; migre depois.

Benefício do Yes: tipagem, menos bugs em escala.

Linter:  
ESLint — padrão do mercado, ajuda a manter qualidade.

React Compiler:  
No para evitar surpresas enquanto aprende.

Ative em projetos futuros para testar performance.

Tailwind CSS:  
Yes — acelera criação de UI bonita e responsiva.

Código em src/:  
Yes — organização mais profissional do código-fonte.

App Router:  
Yes — arquitetura moderna (layouts, server components, SEO).

Import alias:  
No — mantenha @/\* (simples e já funciona bem).

## Comandos essenciais

- **Criar projeto:**

```
npm create vite@latest
```

- **Instalar dependências:**

```bash
npm install
```

- **Entrar na pasta e executar:**

```bash
cd example
npm run dev
```

- **Acessar no navegador:**
  http://localhost:5173

## Estrutura inicial (App Router + src)

- **node_modules/** → dependências instaladas (React, ReactDOM, Vite etc).
- **public/** → arquivos estáticos (imagens, fontes).
- **src/** → código-fonte principal:
  - _assets/_ → recursos como imagens.

  - _App.jsx_ → componente principal da aplicação.

  - _App.css_ → estilos específicos do App.

  - _main.jsx_ → ponto de entrada, renderiza o App no DOM.

  - _index.css_ → estilos globais.

- **Arquivos de configuração:**
  - _.gitignore_ → arquivos ignorados pelo Git.

  - _eslint.config.js_ → regras de lint.

  - _index.html_ → HTML principal com <div id="root">

  - _package.json_ e _package-lock.json_ → metadados e dependências.

  - _vite.config.js_ → configurações do Vite.

  - _README.md_ → documentação inicial.

Importações com alias:

```
import Button from "@/components/Button";
```
## 🌱 O que são componentes React
- **🔹 Definição**
  - _Componente = pedaço da interface que você cria e pode reutilizar._

  - _Ele recebe props (informações vindas de fora) e retorna JSX (HTML dentro do JavaScript)._

  - _Pode ter estado e controlar seu próprio comportamento._

- **🔹 Componentes Funcionais**
  - _São funções que retornam JSX._

  - _Exemplo:_

```
function Saudacao(props) {
  return <h1>Olá, {props.name}!</h1>
}
```
  - _Uso:_
```
jsx
<Saudacao name="João" />
```
👉 Mais simples e modernos. Com Hooks (useState, useEffect), eles podem ter estado e ciclo de vida.

- **🔹 Componentes de Classe**

  - _São classes que estendem React.Component._
  - _Usam render() para devolver JSX._
  - _Exemplo:_

```
class Saudacao extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>
  }
}
```
👉 Podem ter estado (this.state) e métodos de ciclo de vida (componentDidMount, etc).

🎯 Diferença principal
Funcionais → simples, modernos, usam Hooks.

Classe → mais antigos, usam this.state e métodos de ciclo de vida.

## 🌱 O que são props?
- **🔹 Definição**

  - _Props = propriedades que você passa de um componente pai para um componente filho._

  - _É como se fossem mensagens ou pacotes de dados que o pai entrega ao filho._

  - _O filho não pode mudar os props, apenas usar._
👉 Analogia simples:
Imagina que o pai é uma cozinha e o filho é o garçom.
O pai prepara a comida (dados) e entrega ao filho (props). O filho só leva a comida até a mesa, não muda a receita.

- **🧩 Exemplo prático**
```
Componente Filho (Mensagem.jsx)
jsx
function Mensagem({ texto }) {
  return <p>{texto}</p>
}

export default Mensagem
```
👉 Aqui o filho recebe um prop chamado texto e mostra na tela.
```
Componente Pai (App.jsx)
jsx
import Mensagem from './Mensagem'

function App() {
  return (
    <div>
      <h1>Exemplo de Props</h1>
      <Mensagem texto="Olá Ronaldo, bem-vindo ao React!" />
      <Mensagem texto="Props são como pacotes de informação." />
    </div>
  )
}

export default App
```
👉 O pai (App) passa diferentes valores para o prop texto.
O filho (Mensagem) mostra cada um.