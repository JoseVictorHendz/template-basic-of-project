# Base para projetos em typescript
## Este modelo foi criado para auxiliar o início de um projeto backend com nodejs/typescript.

Indice
=
  * [Configs do projeto](#configs-do-projeto)
  * [Execução do projeto](#Execução-do-projeto)
  * [Rotas](#rotas)
    * [Buscar todos os usuários](#Buscar-todos-os-usuários)
    * [Buscar usuários pelo nome/caracteres](#Buscar-usuários-pelo-nome/caracteres)
    * [Criar usuário](#Criar-usuário)
    * [Edição de usuário](#Edição-de-usuário)
    * [Deletar usuário](#Deletar-usuário)
    * [Logon e logoff de usuário](#Logon-e-logoff-de-usuário)

Configs do projeto
=
* Para padronização da formatação de código foram usados eslintrc, editorconfig e prettier.
* O banco de dados utilizado foi postgres, [configure aqui o banco](https://github.com/JoseVictorHendz/template-basic-of-project/blob/main/ormconfig.json).


Execução do projeto
=
* ### Rode ```yarn``` para instalar todas as dependências.
* ### Execute o seguinte comando ```yarn typeorm migration:run``` para gerar as tabelas do banco e populalo. [Arquivos que geram e populam o banco](https://github.com/JoseVictorHendz/template-basic-of-project/blob/main/src/database/migrations/1603429283286-CreateSeedUser.ts).
* ### Rode ```yarn dev``` para executar o projeto.

Rotas
=
## Buscar todos os usuários.
```
GET: localhost:3333/users
```

## Buscar usuários pelo nome/caracteres.
```
GET: localhost:3333/users/:name
```

## Criar usuário
```
POST: localhost:3333/users
body: {
        "name": "josé victor",
        "email":  "jose",
        "password": "123456"
      }
```

## Edição de usuário.
```
UPDATE: localhost:3333/users/:id
body: {
        "name": "zezim"
      }
```

## Deletar usuário.
```
UPDATE: localhost:3333/users/:id
body: {
        "name": "zezim"
      }
```

## Logon e logoff de usuário.
```
POST: localhost:3333/sessions/logon
body: {
        "email": "jose",
        "password": "123456"
      }
```

```
POST: localhost:3333/sessions/logout
```
