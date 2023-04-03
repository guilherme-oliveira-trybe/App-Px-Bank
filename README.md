# Controle de Funcionários

Consiste em uma aplicação full-stack DOCKERIZADA para gerenciamento de funcionários, sendo possível: Cadastrar Novos Funcionários, Editar Funcionário Existente e Excluir Funcionário. 

### BackEnd:

* Construído com Node.js, Express, Typescript, Sequelize, MySql, Joi.
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores

### FrontEnd:
* Construída utilizado React, React Hooks, JavaScript, CSS, Axios.

### Instruções

- Para rodar a aplicação utilize os comandos a seguir:

```
Para subir a aplicação e instalar as dependências:
<-- na raiz do projeto -->
npm install && npm run compose:up


Para criar as Tabelas e Iniciar a API:
<-- na raiz do projeto -->
docker exec -it px_bank_backend sh // Para entrar no container do back-end

npm initialize // Para criar e popular as tabelas
npm start // Para iniciar a API

Para descer a aplicação e deletar as tabela:
<-- na raiz do projeto -->
npm run compose:down
```
