# Binds.co Back End Challenge

## Descrição

Para o desafio da vaga de desenvolvedor Backend foi criado em **Nodejs** uma API RESTful de uma livraria. A aplicação foi hospedada no **Heroku**
por meio de um container **Docker** e o banco de dados está hospedado no **Supabase**.
A arquitetura empregada foi o modelo MVC ( Model View Controller ) utilizando-se de uma camada extra Service entre a camada Model e Controller.
Foi utilizado **Express** como framework pra criação da aplicação, **Sequelize** para fazer ORM com o banco de dados PostgresSQL, além de **JWT** para autenticação.

## Funcionalidades

1 - Cria um novo usuário <br/>
2 - Realiza login de usuário já cadastrado <br/>
3 - Retorna todos usuários cadastrados ou individualmente de acordo com id <br/>
4 - Deleta um usuário <br/>
5 - Cria uma nova compra de um livro <br/>
6 - Retorna compras já realizadas <br/>
7 - Retorna as categorias cadastrdas ou individualmente de acordo com id <br/>
8 - Retorna os livros cadastrados ou individualmente de acordo com id <br/>
9 - Retorna os autores já cadastrados ou individualmente de acordo com id <br/>


## Antes de Utilizar


* Todas as rotas GET são autenticadas, para obter o **token** de autenticação você deve realizar uma requisição POST para o endpoint **/login** preenchendo o body da requisição com seu **email** e **senha** registrados. Aqui apresento 2 alternativas:



1 - Você pode registrar um novo usuário utilizando o endpoint **/user** com o método POST. o body da requisição deve conter os seguintes campos:

```
 {
 
 "firstName":"exemplo",
 "lastName": "exemplo",
 "email": "exemplo@exemplo.com",
 "password": "exemplo",
 "address":"exemplo"
 
 }

```

* OBS: A requisição retorna um token que você **DEVE** incluir no campo authorization do header em **TODAS** as requisições GET


2 - Você pode fazer uma requisição POST para o endpoint **/login** com esse usuário já registrado 

```
{

"email": "leo@test.com",
"password: "123456"

}

```

* OBS: A requisição retorna um token que você **DEVE** incluir no campo authorization do header em **TODAS** as requisições GET



## App em funcionamento

* Aplicação se encontra hospedada no link https://aribdavid-my-bookstore.herokuapp.com/ . 



## Endpoints GET

  **/order** - retorna todos os pedidos <br/>
  **/user** - retorna todos os usuários <br/>
  **/user/:id** - retorna usuário de acordo com id <br/>
  **/category** - retorna todas as categorias <br/>
  **/category/:id** - retorna categoria de acordo com id <br/>
  **/book** - retorna todos os livros <br/>
  **/book/:id** - retorna livro de acordo com id <br/>
  **/author** - retorna todos os autores <br/>
  **/author/:id** - retorna autor de acordo com id <br/>
  
## Endpoints POST
 
 **/login** - loga com um usuário existente <br/>
 **/user** - cria novo usuário <br/>
 **/order** - cria novo pedido <br/>
 
## Endpoints DELETE

**/user** - deleta o usuário cujo token está sendo utilizado

## Instalação

* Para executar o projeto localmente use os comandos abaixo:

#### Local:

`git clone https://github.com/aribdavid/my-bookstore/` <br/>
`cd my-bookstore` <br/>
`npm install` <br/>
`npm run dev` <br/>

#### Docker:

* Você pode criar uma imagem Docker da aplicação e rodar em um container utilizando os comandos abaixo:

`cd my-bookstore` <br/>
`docker build -t my-bookstore-api .` <br/>
`docker run -p 3300:3300 -d my-bookstore-api` <br/>

**obs: a porta especificada no comando acima será a porta de acesso para aplicação no seu localhost**

