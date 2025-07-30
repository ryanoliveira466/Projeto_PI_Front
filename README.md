

# temp_NomeProjeto

## Integrantes: Ryan Oliveira, Raike Vargas

Link Artigo (Apenas Visualização):
> https://www.overleaf.com/project/6842fb0dc0036bd7b447a232

---

---

# Tutorial projeto
---
### 1 - Download e pastas:
Crie duas pastas no seu computador após baixar os arquivos:

* Uma para os arquivos do Front(HTML, CSS JS)
* E outra para o Back(Laravel)

Obs: As pastas tem que estar **SEPARADAS**, não podemos misturar as duas.
---
### 2 - Configurando Laravel:
* Mude a porta do servidor do LivePreview do VScode para 5501(era pra ser a padrão 5500 mas por algum motivo no meu PC ele mudou), mais fácil em vez de mudar o JS em cada linha.
https://www.youtube.com/watch?v=yXNh70VH47Y.


```
composer install
```

Depois do *composer install* você vai ter que criar o arquivo .env com os seguintes dados(Veja a **.env.example** no arquivo e copie).

```
php artisan migrate
```
Após as migrates faça mais dois comandos:

```
php artisan key:generate
php artisan storage:link
```
E por fim...
```
php artisan config:clear      
php artisan route:clear
php artisan cache:clear
php artisan view:clear
```
Depois de todas as configurações faça esses comandos(Acredito que não seja necessário, só fechar e abrir o VSCode ou o servidor para as configurações pegarem)

---
### 3 - Comandos úteis

```
php artisan migrate:fresh --seed   
```
Reseta as tabelas e popula os Users/Senha padrão *password*.

```
php artisan serve
```

Inicia o server.

```
CTRL + C
```
Fecha o server.

---

---
# Apresentação
- Criar perfis antes para mostrar sistema de Follow, Following, Like, View
---

# Register
- Registrar usuário
- Mosrar no Mailtrap verificação de email

# Login
- Logar usuário

# Mostrar a home
- Apresentar pesquisa de usuários
- Apresentar projetos
- Apresentar Pre Visualização

# Create
- Layout
- Mudar o HTML ou CSS
- Apresentar a toolbar

# Abrir perfil de usuário a partir da home
- Abrir  perfil
- Seguir
- Mostrar projetos

# Abrir a profile do usuário logado
#### Apresentar Funções do usuário
- Create(apenas mostrar que vai para a página de create)
- Mostrar página do usuário(apenas mostrar que vai para a página pública do usuário)
- Followers
- Following

#### Apresentar projetos do usuário
- Editar um projeto(Mostrar que foi editado)
- Excluir(Mostrar que foi excluído)

#### Editar info do usuário
- Mudar TODOS os elementos do usuário(Foto, nome, email)
- Apresentar o MailTrap mostrando que chegou um email de verificação
- Mudar senha do usuário
- Deslogar e logar usuário

- Deslogar usuário novamente
- Ir em login, esquecer senha, colocar o email
- Mostar no Mailtrap o email de senha e fazer o projeto
- Logar o usuário novamente depois do processo
- Excluir usuário

---
