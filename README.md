## Projeto de estudo Prisma

Estudo para criar um banco com Prisma e com um servidor simples Express para trabalho.

## Prisma

Com o prisma é criado três tabelas `books`, `categories` e `books_categories` para o relacionamento.

## Instalando o projeto

```
npm install
```

## Rodando o projeto
```
npm run dev
```
Acesse a rota do servidor local `http://localhost:4000`

### Rotas da aplicação

- Criar um livro &rarr; **POST** `http://localhost:4000/books`
- Criar um livro com categoria &rarr; **POST** `http://localhost:4000/bookWithCategory`
- Criar categoria &rarr; **POST** `http://localhost:4000/category`
- Relacionar categoria com livro &rarr; **POST** `http://localhost:4000/categoryBook`
- Listar todos os livros &rarr; **GET** `http://localhost:4000/books`
- Listar livro por ID &rarr; **GET** `http://localhost:4000//books/:id`
- Listar categoria por ID &rarr; **GET** `http://localhost:4000/category/:id`

## Observações

Projeto foi integrado com o serviço da [Supabase](https://supabase.com/) para hospedar o banco de dados Postgres na nuvem.