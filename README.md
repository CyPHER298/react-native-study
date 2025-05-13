# React Native Studies

Nesse repositório está sendo estudado o React Native, uma biblioteca JavaScript usada para criar aplicativos móveis nativos.

Tem uma tabela organizada com os tópicos estudados até o momento no [Notion](https://www.notion.so/React-Native-1f17e8467fd28085ae46f9f35d774ade?pvs=4)

Os conteúdos serão atulizados no **Notion** e **Github** com o mesmo conteúdo, assim deixando um ambiente agradável para um iniciante no Github e para um experiente.

[Introdução](#introdução)
[Getting-Started](#getting-started)

## Introdução

React Native é flexível. Útil para iOS, Android e Web ao mesmo tempo.

Para criar o ambiente de desenvolvimento será necessário:

- Node.js
- Expo Go
- IDE (a gosto)

O React Native tem a sintaxe muito similar com React.js, porém os componentes que serão colocados no código serão componentes nativos do mobile. Como um exemplo é para os textos. A tag <p> é usada para colocar um texto de paragrafo, normalmente, entretanto no React Native usamos o componente <Text> para ser incluso um texto. Já a estilização não muda. Caso queira usar como usamos na tag html com style={{ font-size: 1em }}, mas caso queira usar StyleSheet ou Tailwind, também chamado de NativeWind, o React Native também aceita.

**Por que usar React Native?**

Como dito na primeira linha, React Native é uma linguagem muito flexível, sendo útil para todos os dispositivos. Além disso, é uma linguagem muito fácil de aprender, pois tem uma sintaxe muito similar com o React.js. Uma linguagem muito rápida de desenvolvimento, pois não é necessário criar um aplicativo nativo para cada plataforma. Podendo usar tanto TypeScript quanto JavScript.

## Getting Started

### Iniciando o ambiente de desenvolvimento default

Use o comando `npx create-expo-app@latest` para criar os arquivos pela **Expo**. Será feito o `npm install` de forma automática, aguarde um momento que será instalado tudo corretamente.

Primeiro passo é entrar no diretório do projeto, (`cd /fokus/` no projeto guia) e em seguida digitar `npm start` para iniciar o projeto. Aparecerá várias opções de inicialização.

Digite “w” para abrir a aplicação na web. Podemos ver o projeto default funcionando.

---

### Iniciando o ambiente mobile default

Quando inicializar o projeto, irá aparecer um QRCode no terminal de comando. Leia o QRCode com o celular e/ou acesse o aplicativo Expo Go, logo em seguida irá fazer o “build” do projeto e mostrar na tela o projeto feito.

---

### Preparando o ambiente personalizado

Após tudo isso volte ao terminal de comando e digite `npm run reset-project` e apague o *_layout.tsx* e apenas deixe o *index.tsx* e troque a extensão por para *index.jsx* trabalharmos por enquanto.

> __Projeto de estudos desenvolvido por Henrique Batista para ajudar programadores em React Native.__