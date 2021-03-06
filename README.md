# ts-api

Modelo de Microserviço em Typescript e MongoDB

### 📋 Tecnologias utilizadas

As tecnologias abaixo foram utilizadas:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Swagger](https://swagger.io/)
- [Jest](https://jestjs.io/pt-BR/)

### 🔧 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/matheuscaet/ts-api.git

# Acesse a pasta do projeto no terminal/cmd
$ cd ts-api

# Instale as dependências
$ npm install
```

Crie um arquivo também na raiz, com nome **.env** e cole as variáveis dentro.

O preenchimento dessas variáveis são obrigatórias, então segue um exemplo de uso:

| VARIÁVEL  | VALOR                                                  |
| --------- | ------------------------------------------------------ |
| PORT      | 3001                                                   |
| URLMONGO  | mongodb+srv://(USER):(PASS)@cluster0.h5mtb.mongodb.net |
| NAMESPACE | SERVER                                                 |
| API_TOKEN | key                                                    |

### 🎲 Rodando o Back End (servidor)

```bash
# Execute a aplicação
$ npm start

```

### 📖 Acessando a documentação

```bash
# Acesse o link para ver o documentação Swagger
localhost:3001/api/docs

```

### 🧪 Rodando os Testes

```bash
# Execute os testes
$ npm run test

```
