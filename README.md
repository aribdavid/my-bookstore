# Binds.co BackEnd Challenge

## Descrição

Para o desafio da vaga de desenvolvedor Backend foi criado em Nodejs uma API RESTful de uma livraria. A aplicação foi hospedada no Heroku
por meio de um container Docker e o banco de dados está hospedado no Supabase.
A arquitetura empregada foi o modelo MVC ( Model View Controller ) utilizando-se de uma camada extra Service entre a camada Model e Controller.
Foi utilizado express como framework pra criação da aplicação, sequelize para fazer ORM com o banco de dados PostgresSQL, além de JWT para autenticação.

## Funcionalidades

1 - Cria um novo usuário
2 - Realiza login de usuário já cadastrado
3 - Retorna todos usuários cadastrados ou individualmente de acordo com id
4 - Deleta um usuário
5 - Cria uma nova compra de um livro
6 - Retorna compras já realizadas
7 - Retorna as categorias cadastrdas ou individualmente de acordo com id
8 - Retorna os livros cadastrados ou individualmente de acordo com id
9 - Retorna os autores já cadastrados ou individualmente de acordo com id

## App em funcionamento

Aplicação se encontra hospedada no link https://aribdavid-my-bookstore.herokuapp.com/ . 

## Observações

Todas as rotas GET são autenticadas, para obter o token de autenticação você deve realizar uma requisição para o endpoint /login preenchendo o body com seu 
email e senha registrados ou utilizando o exemplo abaixo:

`{

"email": "leo@test.com"
"password: "123456"

}`

A requisição retorna um token que você DEVE incluir no campo authorization em todas as requisições GET

Você pode também usar o seguinte token nas requisições para evitar fazer o login:

`"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoibGVvQHRlc3QuY29tIiwiaWF0IjoxNjU1ODcyODM4LCJleHAiOjE2NTU4NzM3Mzh9.-NQ7HkRlRb3AsFc_bsiqN5s9Zxe72tRNVYUvt4YUbPo"`

## Endpoints GET

  /order - retorna todos os pedidos
  /user - retorna todos os usuários
  /user/:id - retorna usuário de acordo com id
  /category - retorna todas as categorias
  /category/:id - retorna categoria de acordo com id
  /book - retorna todos os livros
  /book/:id - retorna livro de acordo com id
  /author - retorna todos os autores
  /author/:id - retorna autor de acordo com id
  
## Endpoints POST
 
 /login - loga com um usuário existente
 /user - cria novo usuário
 /order - cria novo pedido
 
## Endpoints DELETE

/user - deleta o usuário cujo token ele está sendo utilizado

## Instalação

- Para executar o projeto localmente use os comandos abaixo:

#### Local:

`cd my-bookstore`
`npm install`
`npm run dev`

#### Docker:

- Ou você pode criar uma imagem Docker da aplicação e rodar em um container utilizando os comandos abaixo:

`cd my-bookstore`
`docker build -t my-bookstore-api .`
`docker run -p 3300:3300 -d my-bookstore-api` obs: a porta especificada nesse comando será a porta de acesso para aplicação no seu localhost


