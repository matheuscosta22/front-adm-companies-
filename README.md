Para rodar esta spa é preciso instalar as dependências com o comando 'npm install', em seguida rode o codigo
com o comando 'npm start' e abrirá uma página em seu browser, vá para a rota 'http://localhost:3000/login'

regras de validação de dados dos usuários: 
name: maior que 5 caracteres, string
email: maior que 7 caracteres, string, email válido
zipcode:  maior que 7 caracteres, cep válido para preenchimento dos campos de endereço
number: numero da casa, predio e etc, maior que 0 caracteres
password: maior que 7 caracteres


Somente essas rotas estão disponíveis:
e antes de testar, não esqueça de verificar se as requisições para a sua Api, estão com o link correto
nas pastas do diretorio ./src/components/*

'http://localhost:3000/login'

'http://localhost:3000/logout'

'http://localhost:3000/register'