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
