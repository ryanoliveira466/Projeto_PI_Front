# temp_NomeProjeto

## Integrantes: Ryan Oliveira, Raike Vargas

Link Artigo (Apenas Visualização):
> https://pt.overleaf.com/read/nscnkttppbcy#0bf01d


#Tutorial projeto
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

