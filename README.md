<h1 align="center">Miau</h1>

<p align="center">Projeto da disciplina: Desenvolvimento de Aplivativos</p>



<!--ts-->
- [Pré-requisitos](#pré-requisitos)
    - [Baixando o projeto do GitHub](#baixando-o-projeto-do-github)
- [Instalação](#instalação)
    - [Rodando o projeto](#rodando-o-projeto)
- [Tecnologias](#tecnologias)
<!--te-->

Pré-requisitos
==============

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### Baixando o projeto do GitHub

```bash
# Clone este repositório
$ git clone <https://github.com/lucas-nobrega/miau.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd miau
```
Instalação
==========
### Rodando o projeto

```bash
npx expo start

# Se estiver rodando no WSL2, use o comando abaixo
#instale o pacote:
npm i -g @expo/ngrok

npx expo start --tunnel
```
leia o QR Code com o aplicativo do Expo no seu celular ou use um emulador Android/iOS.

Tecnologias
==============

As seguintes ferramentas foram usadas na construção do projeto:

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
