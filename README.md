# Controle de Funcionários

Consiste em uma aplicação full-stack DOCKERIZADA para gerenciamento de funcionários, sendo possível: Cadastrar Novos Funcionários, Editar Funcionário Existente e Excluir Funcionário. 

### BackEnd:

* Construído com Node.js, Express, Typescript, Sequelize, MySql, Joi.
* Aplicando Arquitetura de Software, com as camadas de Modelo, Serviço e de Controladores

### FrontEnd:
* Construída utilizado React, React Hooks, JavaScript, CSS, Axios.

### Instruções

Para rodar a aplicação utilize os comandos a seguir:

- **Para subir a aplicação e instalar as dependências: (Na Raiz do Projeto)**


```
npm install && npm run compose:up
```

- **Para criar as Tabelas e Iniciar a API: (Na Raiz do Projeto)**
 
```
docker exec -it px_bank_backend sh
```

```
npm initialize
```

```
npm start
```

- **Para descer a aplicação e deletar as tabela: (Na Raiz do Projeto)**

```
npm run compose:down
```

# API

A API contém Endpoints referente a Departments, Employees.

### Endpoints


#### Departments


| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os departamentos | http://localhost:3001/departments |
| `POST` | Realiza o cadastro de um novo departamento | http://localhost:3001/departments/:id |
| `PUT` | Realiza a atualização de um departamento | http://localhost:3001/departments/:id |
| `DELETE` | Realiza a exclusão de um departamento | http://localhost:3001/departments/:id |

Nas requisições POST e PUT é necessário informar o seguinte JSON:

```
{
  "department": string,
}
```

Exemplo:
```
{
  "department": "Administrativo",
}
```

#### Employee


| Método | Funcionalidade | URL |
|---|---|---|
| `GET` | Retorna todos os funcionários | http://localhost:3001/employees |
| `POST` | Realiza o cadastro de um novo funcionário | http://localhost:3001/employees/:id |
| `PUT` | Realiza a atualização de um funcionário | http://localhost:3001/employees/:id |
| `DELETE` | Realiza a exclusão de um funcionário | http://localhost:3001/employees/:id |

Nas requisições POST e PUT é necessário informar o seguinte JSON:

```
{
  "name": string,
  "cpf": string,
  "salary": number,
  "dateOfBirth": date,
  "departmentId": number,
}
```

Exemplo:
```
{
  "name": "João de Nazaré",
  "cpf": "45011212033",
  "salary": 4000,
  "dateOfBirth": "1968-09-07",
  "departmentId": 1,
}
```
