# Squad 37 - Hackathon Programa de Formação Season 4 - API OrangeEvolution

## Sobre a API

A API OrangeEvolution é uma API do tipo REST com tema de plataforma de estudos que foi desenvolvida com Node.JS e o framework Express, como back-end do projeto final do para o Hackaton do Programa de Formação Season 4 do Grupo FCamara. Seu objetivo é o gerenciamento dos conteúdos de estudos e de garantir o acesso do usuário a plataforma.

## Acessando a documentação

Você pode acessar a documentação da API através do site: [Heroku - API Docs](https://orange-evolution-squad37.herokuapp.com/api-docs/). Ela também pode ser acessada, caso o projeto seja inicializado no localhost através do: ```/api-docs````

## Tecnologias

- [X] Javascript(ES6)
- [X] Node.JS 16.x LTS
- [X] npm
- [X] Express
- [X] Nodemon
- [X] Dotenv
- [X] SQLite3
- [X] Sequelize
- [X] ESlint
- [X] Yup
- [X] Swagger
- [X] CORS
- [X] Jest
- [X] Insomnia

## Inicializando

Primeiro, deve-se clonar este repositório a partir do terminal com o comando abaixo:

```
git clone https://github.com/Hackaton-FCAMARA-Squad37/Projeto-FCamara-Backend.git
```
Acessar a pasta da aplicação, caso não esteja nela

```
cd Projeto-FCamara-Backend
```
Instalar as dependências necessárias e criar pasta node_modules

```
npm install
```

## Dependências
As dependências necessárias instaladas para este projeto foram a Express, Dotenv, SQLite3, Path, URL e CORS, que devem ser visualizadas no arquivo package.json.
 
 ```javascript
 "dependencies": {
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "dotenv": "^16.0.3",
    "express": "^4.18.2",
    "sequelize": "^6.25.3",
    "sqlite3": "^5.1.2",
    "swagger-ui-express": "^4.6.0",
    "yup": "^0.32.11"
  }
 ```
 
 ### Dependências de desenvolvimento
 
 As dependências instaladas para o ambiente de desenvolvimento foram Nodemon, Jest e ESLint.
 
 ```javascript
 "devDependencies": {
    "@jest-mock/express": "^2.0.1",
    "eslint": "^8.26.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-n": "^15.4.0",
    "eslint-plugin-promise": "^6.1.1",
    "jest": "^29.2.2",
    "nodemon": "^2.0.20"
  }
 ```
 
 ## Iniciar a aplicação
 
 Para iniciar a aplicação através do terminal, utilize o comando abaixo:
 
 ```
 npm run dev ou npm start
 ```
 
 ## Entidades
 
 No total são 5 entidades presentes nesta API. Caso a Database seja deletada, basta iniciar a aplicação que ela será automaticamente criada.
 Para acessar as rotas deve-se utilizar os método HTTP GET, POST, PUT e DELETE e a URL base fornecida, que é `http://localhost:port` (caso esteja no localhost) ou a url do Heroku contendo o deploy da API `https://orange-evolution-squad37.herokuapp.com/`.
 
 ### Entidade Usuario
 
 A entidade clientes está disponível na rota **'/usuarios'**. O modelo JSON para o corpo da requisição desta entidade segue abaixo:
 
 Rota POST:
 ```json
 {
     "nome": "João",
     "email": "joao@email.com",
     "senha": "senha123"
 }
 ```
 
 Rota GET:
 ```json
 {
	"id": 2,
	"nome": "Joao",
	"email": "joao@email.com",
	"senha": "senha123",
	"isAdmin": false
}
 ```
 
 ### Entidade Nivel
 
 A entidade nivel está disponível na rota **'/niveis'**. O modelo JSON para o corpo da requisição desta entidade segue abaixo:
 
 Rota POST:
 ```json
{
	"titulo": "Desenvolvimento"
}
 ```
 
 Rota GET:
 ```json
{
	"id": 1,
	"titulo": "UXUI"
}
 ```
 
 ### Entidade Tema
 
 A entidade tema está disponível na rota **'/temas'**. O modelo JSON para o corpo da requisição desta entidade segue abaixo:
 
 Rota POST:
 ```json
{
	"titulo": "coletar"
  "idNivel": 4
}
 ```
 
 Rota GET:
 ```json
{
	"id": 1,
	"titulo": "semear",
	"idNivel": 1
}
 ```
 
 ### Entidade UsuarioTema
 
 A entidade UsuarioTema está disponível na rota **'/usuario-temas'**. O modelo JSON para o corpo da requisição desta entidade segue abaixo:
 
 ```json
 {
     "id": 1,
     "idTema": 2,
     "idUsuario": 3
 }
 ```
 
 ### Entidade Conteudos
 
 A entidade conteudos está disponível na rota **'/conteudos'**. O modelo JSON para o corpo da requisição desta entidade segue abaixo:
 
  Rota POST:
 ```json
{
	"titulo": "O que é UX Design?",
	"tipo": "artigo",
	"duracao": "480",
	"descricao": "Aprenda sobre UX",
	"link": "https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience",
	"donoConteudo": "FCamara",
	"tags": "UX Design, UI Design, Significado",
	"divisao": "Introdução à UX Design",
	"idTema": 1
}
 ```
 
 Rota GET:
 ```json
{
		"id": 12,
		"titulo": "O que é UX Design?",
		"tipo": "artigo",
		"duracao": 480,
		"descricao": "Aprenda sobre UX",
		"link": "https://www.hostinger.com.br/tutoriais/ux-o-que-e-user-experience",
		"donoConteudo": "FCamara",
		"tags": "UX Design, UI Design, Significado",
		"divisao": "Introdução à UX Design",
		"idTema": 1
}
 ```
 
 ## Rotas CRUD
 
A partir da URL base pode-se executar as operações CRUD(Create, Read, Update e Delete) com os métodos HTTP: POST, GET, PUT e DELETE. Abaixo exemplos das
operações com a entidade Livros.
 
 ### Método GET (Read)
 
 Para visualizar os registros faça uma requisição HTTP do tipo GET com a URL da entidade desejada.
 
 `/conteudos`
 
 O método deve retornar todos os registros da entidade no formato JSON, como representado no modelo de cada entidade.
 
 Para filtrar os registros a partir de um ID específico, basta adicionar o "/(número do id)" ao final da URL.
 
 `/conteudos/{id}`
 
 ### Método POST (Create)
 
 Para adicionar um novo registro faça uma requisição HTTP do tipo POST com a URL da entidade desejada.
 
 `/conteudos`
 
 ### Método PUT (Update)
 
 Para atualizar um registro faça uma requisição HTTP do tipo PUT com a URL da entidade desejada e o ID do registro. 
 
 `conteudos/{id}`
 
 Nota-se que para o método PUT todo o corpo do registro deve ser utilizado, alterando apenas o campo que deseja atualizar.
 
 ### Método DELETE (Delete)
 
 Para deletar um registro faça uma requisição HTTP do tipo DELETE com a URL da entidade desejada e o ID do registro. 
 
 `/conteudos/{id}`

## Testes unitários

A partir do framework Jest utilizado como dependência de desenvolvimento nesta aplicação, testes unitários podem ser realizados para verificar as validações
criadas na pasta `controllers`. Os testes encontrados na pasta `__test__` podem ser executados no terminal com o seguinte comando:

```
npm run test
```

## Autores

* **Guilherme Silveira** - [GuiSilveira](https://github.com/GuiSilveira)
* **Vitor Augusto** - [VitorAam](https://github.com/VitorAam)

## Contato dos desenvolvedores

- [Guilherme Silveira](https://www.linkedin.com/in/guilherme-silveira-coutinho/)
- [Vitor Augusto](https://www.linkedin.com/in/vitor-aam/)

 
