---
id: gettingStarted
title: Desenvolvimento Web
---

Esta seção "Começando" é orientada aos usuários da primeira vez que querem uma visão geral sobre como ir de zero a 4D site que lida com dados do banco de dados. Vamos começar!


## Exemplo Hello World

Vamos começar fazendo com que o servidor Web envie "Hello World" para o navegador. A maneira mais simples de fazer isso é criar um projeto, inicie o servidor web e escreva um pequeno código que retorne um texto no método banco de dados `On Web Connection`.

### Iniciar o servidor Web

Para iniciar o servidor web 4D:

1. Inicie sua aplicação 4D e crie um projeto 4D novo e vazio.
2. No menu **Executar**, selecione **Iniciar o servidor Web**.

É tudo! O servidor web está iniciado (você pode ver o item de menu se tornou **Parar o servidor Web**). Está agora pronto para processar pedidos. Para o verificar, vamos apresentar a página inicial padrão.

### Exibição da página inicial padrão

O servidor 4D web cria automaticamente uma página `index.html` padrão na pasta raiz `WebFolder`, criada no mesmo nível que a pasta Projeto.

1. Inicie um navegador da Web e conecte-se ao endereço IP do servidor da Web (a porta http padrão do servidor Web 4D é 80). Se o servidor web e o navegador estiverem na mesma máquina, você pode selecionar **Teste o servidor Web** no menu **Executar**.

É apresentada a página inicial predefinida:

![](../assets/en/WebServer/defaultHomePage.png)

### Exibindo Hello World

1. Abra o Explorer, exiba a lista de Métodos de Banco de Dados e clique duas vezes em `On Web Connection`.

2. Digite o seguinte código:

```4d
Case of 
    : ($1="/hello")
        WEB SEND TEXT("Hello World!")
    Else 
        // Erro 404 por exemplo
    End case 
```

O método banco de dados [`On Web Connection`](httpRequests.md#on-web-connection) é chamado para as solicitações recebidas e recebe a URL de destino no parâmetro `$1`. Este código muito simples apenas envia o texto para o navegador.

3. No seu browser, introduza o seguinte URL:

```
http://localhost/hello
```

O servidor da Web processa o pedido e devolve-o:

![](../assets/en/WebServer/hello.png)


## Obter dados da base de dados

Agora vamos ver como é simples obter dados do banco de dados. Primeiro, vamos criar uma tabela e preenchê-la com alguns dados.

Criar um banco de dados básico com, por exemplo, uma tabela única contendo alguns registros:

![](../assets/en/WebServer/hello2.png) ![](../assets/en/WebServer/hello3.png)

### Exibição de dados em uma página

A solução mais simples para exibir dados é chamar uma [página de modelo](templates.md) que contenha etiquetas.

1. Usando qualquer editor de texto, crie um arquivo com as seguintes linhas:

```html
<html>
<body>
<!--#4DCODE ALL RECORDS([Friends])-->
<!--#4DLOOP [Friends]-->
<!--#4DTEXT [Friends]lastName--> <!--#4DTEXT [Friends]firstName--><br/>
<!--#4DENDLOOP-->
</body>
</html>
```

2. Nomeie o arquivo "friends.shtml" e salve-o no **WebFolder** do seu projeto.
3. No seu browser, introduza o seguinte URL:

```
http://localhost/friends.shtml
```

as páginas `.shtml` são processadas automaticamente pelo servidor web. A sua página preenchida com dados é devolvida:

![](../assets/en/WebServer/hello3bis.png)

### Pedido REST

Se não queremos apenas *exibir* dados, mas para *usar*, podemos utilizar ORDA e o servidor REST. Graças ao conceito [ORDA](ORDA/overview.md), a tabela `Friends` é automaticamente mapeada para um dataclass e está disponível através de [REST](REST/gettingStarted.md).


1. Usaremos o servidor REST para acessar os dados: vá para a caixa de diálogo **Parâmetros**, selecione **Web** > **Funcionalidades Web** e marque a opção **Expor como servidor REST**).

![](../assets/en/WebServer/hello5.png)

2. No seu browser, introduza o seguinte URL:

```
http://localhost/rest/$catalog
```

O servidor Web devolve os resultados em JSON:

```json
{
    "__UNIQID": "3F1B6ACFFE12B64493629AD76011922D",
    "dataClasses": [
        {
            "name": "Friends",
            "uri": "/rest/$catalog/Friends",
            "dataURI": "/rest/Friends"
        }
    ]
}
```

Você tem acesso ao catálogo, ou seja, a lista de dados e atributos expostos no datastore.

Você também pode obter qualquer dado.

3. Introduzir o seguinte URL:

```
http://localhost/rest/Friends
```

O servidor retorna as entidades, ou seja, os dados, da dataclass Friends:

```json
{
    "__DATACLASS": "Friends",
    "__entityModel": "Friends",
    "__GlobalStamp": 0,
    "__COUNT": 4,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-10-27T14:29:01.914Z",
            "__STAMP": 1,
            "ID": 1,
            "lastName": "Smith",
            "firstName": "John"
        },
        {
            "__KEY": "2",
            "__TIMESTAMP": "2020-10-27T14:29:16.035Z",
            "__STAMP": 1,
            "ID": 2,
            "lastName": "Brown",
            "firstName": "Danny"
        },
        {
            "__KEY": "3",
            "__TIMESTAMP": "2020-10-27T14:29:43.945Z",
            "__STAMP": 1,
            "ID": 3,
            "lastName": "Purple",
            "firstName": "Mark"
        },
        {
            "__KEY": "4",
            "__TIMESTAMP": "2020-10-27T14:34:58.457Z",
            "__STAMP": 1,
            "ID": 4,
            "lastName": "Dupont",
            "firstName": "Jenny"
        }
    ],
    "__SENT": 4
}
```

Este exemplo muito simples mostra como o servidor da web interage de forma transparente com o servidor [REST](REST/gettingStarted.md) para retornar quaisquer dados solicitados, sempre que este exposto. Nas suas interfaces da web, você pode facilmente vincular o código javascript ou html com dados retornados. Veja o [Explorador de data Web](Admin/dataExplorer.md) integrado para ter um exemplo de interface web sofisticada vinculada às dataclass.




## Login e sessão

Nas seções acima, nós temos acesso gratuito à aplicação através de solicitações web. No entanto, no mundo de aplicações web, a segurança do acesso aos dados é a prioridade. Ao se conectar ao servidor da web 4D, os usuários devem possuir autenticação e controlar sua navegação.

### Criação de uma tabela de usuários

A maneira mais simples e segura para registrar um usuário no servidor da Web 4D é baseada no seguinte cenário:

- Os usuários são armazenados em uma tabela dedicada e não exposta (chamado *WebUsers*, por exemplo)
- A tabela *WebUsers* pode ser [criptografada](MSC/encrypt.md) e armazena o login do usuário e um hash de sua senha.

1. Criar uma tabela com alguns campos, por exemplo:

![](../assets/en/WebServer/helloUsers.png)

2. Escreva e execute o seguinte código para criar um usuário:

```4d
var $webUser : cs. WebUsersEntity

$webUser:=ds. WebUsers.new()
$webUser.firstName:="John"
$webUser.lastName:="Doe"
// a senha seria inserida pelo usuário
$webUser.password:=Generate password hash("123")
$webUser.userId:="john@4d.com"
$webUser.save()
```



### Autenticação de usuários

> Para ser seguro de ponta a ponta, deve toda a conexão seja estabelecida via [https](webServerConfig.md#enable-https).

1. Abra o Explorador e crie um método projeto chamado "login".

3. Escreva o seguinte código:

```4d
var $indexUserId; $indexPassword : Integer
var $userId; $password : Text
var $user; $info : Object ARRAY TEXT($anames; 0)
ARRAY TEXT($avalues; 0)

// get values sent in the header of the request WEB GET VARIABLES($anames; $avalues)

// look for header login fields
$indexUserId:=Find in array($anames; "userId")
$userId:=$avalues{$indexUserId}
$indexPassword:=Find in array($anames; "password")
$password:=$avalues{$indexPassword}

//look for a user with the entered name in the users table
$user:=ds. WebUsers.query("userId = :1"; $userId).first() If ($user#Null) //a user was found
        //check the password
    If (Verify password hash($password; $user.password))
            //password ok, fill the session
        $info:=New object()
        $info.userName:=$user.firstName+" "+$user.lastName
        Session.setPrivileges($info)
            //You can use the user session to store any information
        WEB SEND TEXT("Welcome "+Session.userName)
    Else 
        WEB SEND TEXT("Wrong user name or password.")
    End if
    Else 
    WEB SEND TEXT("Wrong user name or password.")
End if
End if 
```

3. Exibir as propriedades do método clicando no botão **[i]** no editor de código, verifique as etiquetas e URLs `4D (4DACTION...)` opção e clique **OK**.

![](../assets/en/WebServer/hello0.png)


4. No seu browser, introduza o seguinte URL:

```
http://localhost/4DACTION/login/?userID=john@4d.com&password=123
```

> Usar tais URLs não é recomendado, só é apresentado aqui para manter o exemplo simples. Uma solicitação de login mais realista deve ser tratada através de um formulário web e uma solicitação POST. Consulte [esta página](sessions.md#example) para ver um exemplo de formulário POST.

Em seguida, será registado para a sessão:

![](../assets/en/WebServer/login1.png)

As credenciais incorretas serão rejeitadas:

![](../assets/en/WebServer/login2.png)

Assim que um usuário estiver logado, você poderá lidar com a sessão associada usando o método `WEB Get Current Session ID`. Ver a página [Sessões de usuário](sessions.md). 

