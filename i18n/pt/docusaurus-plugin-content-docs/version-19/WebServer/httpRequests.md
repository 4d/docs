---
id: httpRequests
title: Processamento de pedidos HTTP
---

O servidor da web 4D oferece várias funcionalidades para lidar com solicitações HTTP:

- o método banco de dados `On Web Connection`, um roteador para sua aplicação web,
- o URL `/4DACTION` para chamar o código do lado do servidor
- `WEB GET VARIABLES` para obter valores de objetos HTML enviados ao servidor
- outros comandos como `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, ou `WEB GET PARTE BODY` permite personalizar o processamento de requisição, incluindo cookies.
- o método projeto *COMPILER_WEB*, para declarar suas variáveis.


## On Web Connection

O método banco de dados `On Web Connection` pode ser usado como ponto de entrada para o servidor Web 4D.

### Chamadas dos métodos banco

O método da base de dados é chamado com o URL. The `On Web Connection` database method is automatically called when the server receives any URL that is not a path to an existing page on the server.

Por exemplo, a URL "*a/b/c*" chamará o método do banco de dados, mas "*a/b/c. tml*" não chamará o método de banco de dados se a página "c.html" existir no subdiretório "a/b" do arquivo [WebFolder](webServerConfig.md#root-folder).

> O pedido deve ter sido aceite anteriormente pelo método de banco de dados [`On Web Authentication`](authentication.md#on-web-authentication) (se existir) e o servidor deve ser iniciado.

### Sintaxe

**On Web Connection**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text )

| Parâmetros | Tipo |    | Descrição                                             |
| ---------- | ---- |:--:| ----------------------------------------------------- |
| $1         | Text | <- | URL                                                   |
| $2         | Text | <- | Cabeçalhos HTTP + corpo HTTP (até um limite de 32 kb) |
| $3         | Text | <- | Endereço IP do cliente Web (browser)                  |
| $4         | Text | <- | Endereço IP do servidor                               |
| $5         | Text | <- | Nome de usuario                                       |
| $6         | Text | <- | Senha                                                 |


Estes parâmetros devem ser declarados como se indica a seguir:

```4d
//Método base On Web Authentication

 C_TEXT($1;$2;$3;$4;$5;$6)

//Código do método
```

Como alternativa, você pode usar a sintaxe de [parâmetros nomeados](Concepts/parameters.md#named-parameters):

```4d
// Método banco de dados On Web Connection 
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```


> Chamando um comando 4D que exibe um elemento de interface (`DIALOG`, `ALERT`, etc.) não é permitido e termina o processamento do método.


### $1 - Dados extra do URL

O primeiro parâmetro ($1) é a URL inserida pelos usuários na área de endereço de seu navegador da web, sem o endereço host.

Vamos utilizar uma ligação intranet como exemplo. Suponha que o endereço IP do seu Web Server 4D é 123.4.567.89. A tabela a seguir mostra os valores de $1 dependendo do URL inserida no navegador da Web:

| URL introduzido no navegador Web     | Valor do parâmetro $1    |
| ------------------------------------ | ------------------------ |
| 123.4.567.89                         | /                        |
| http://123.45.67.89                  | /                        |
| 123.4.567.89/Customers               | /Customers               |
| http://123.45.67.89/Customers/Add    | /Customers/Add           |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Note que você está livre para usar este parâmetro a sua conveniência. 4D simplesmente ignora o valor passado além da parte do host da URL. Por exemplo, você pode estabelecer uma convenção onde o valor "*/Customers/Add*" significa "vá diretamente para adicionar um novo registro na tabela `[Customers]`." Fornecendo aos usuários web uma lista de valores possíveis e/ou favoritos padrão, você pode fornecer atalhos para diferentes partes de sua aplicação. Desta forma, os usuários da web podem acessar rapidamente os recursos do seu site sem percorrer todo o caminho de navegação toda vez que fizerem uma nova conexão.


### $2 - Cabeçalho e corpo do pedido HTTP

O segundo parâmetro ($2) é o cabeçalho e o corpo da solicitação HTTP enviada pelo navegador Web. Note que esta informação é passada "assim como está" para o seu método banco de dados `On Web Connection`. Seu conteúdo vária conforme o navegador da Web que tenta a conexão.

Se o seu aplicativo usar essas informações, caberá a você analisar o cabeçalho e o corpo. Você pode usar os comandos `WEB GET HTTP HEADER` e `WEB GET HTTP BODY`.
> Por motivos de desempenho, o tamanho dos dados que passam pelo parâmetro $2 não deve exceder 32 KB. Para além deste tamanho, são truncados pelo servidor HTTP 4D.


### $3 - Endereço IP do cliente Web

O parâmetro $3 recebe o endereço IP do computador do navegador. Essas informações permitem distinguir entre conexões de intranet e de Internet.
> 4D devolve endereços IPv4 em formato híbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endereço IPv4 192.168.2.34. Para obter mais informações, consulte a seção [Suporte IPv6](webServerConfig.md#about-ipv6-support).

### $4 - Endereço IP do servidor

O parâmetro $4 recebe o endereço IP solicitado pelo servidor Web 4D. 4D permite multi-home que você pode usar máquinas com mais de um endereço IP. Para obter mais informações, consulte a [página Configuração](webServerConfig.html#ip-address-to-listen).

### $5 e $6 - Nome de usuário e palavra-passe

Os parâmetros $5 e $6 recebem o nome de usuário e a senha inseridos pelo usuário na caixa de diálogo de identificação padrão exibida pelo navegador, se aplicável (consulte a página [Autenticação](authentication.md)).
> Se o nome de usuário enviado pelo navegador existir em 4D, o parâmetro $6 (a senha do usuário) não é retornado por razões de segurança.




## /4DACTION

*/4DACTION/MethodName*<br/> */4DACTION/MethodName/Param*

| Parâmetros | Tipo |    | Descrição                                           |
| ---------- | ---- |:--:| --------------------------------------------------- |
| MethodName | Text | -> | Nome do método de projeto 4D a ser executado        |
| Param      | Text | -> | Parâmetro texto a ser passado para o método projeto |

**Utilização:** URL ou ação de formulário.

Este URL permite que você chame o método projeto *MethodName* 4D com um parâmetro de texto opcional *Param*. O método receberá este parâmetro em *$1*.

- O método projeto 4D deve ter sido [permitido para solicitações web](allowProject.md): a "Disponível através de etiquetas 4D e URLs (4DACTION...)" o valor do atributo deve ter sido verificado nas propriedades do método. Se o atributo não for verificado, o pedido Web é rejeitado.
- When 4D receives a `/4DACTION/MethodName/Param` request, the `On Web Authentication` database method (if it exists) is called.

`4DACTION/` pode ser associado a um URL em uma página Web estática:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

O método projeto `MyMethod` geralmente deve retornar uma "resposta" (envio de uma página HTML usando `WEB SEND FILE` ou `WEB SEND TEXT`, etc.). Certifique-se de tornar o processamento o mais curto possível para não bloquear o navegador.

> Um método chamado por `/4DACTION` não deve chamar elementos da interface (`DIALOG`, `ALERT`, etc.).

#### Exemplo

Este exemplo descreve a associação do URL `/4DACTION` com um objeto imagem HTML para exibir dinamicamente uma imagem na página. Inserir as seguintes instruções numa página HTML estática:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

O método `getPhoto` é o seguinte:

```4d
C_TEXT($1) // This parameter must always be declared
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 //find the picture in the Images folder within the Resources folder
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd" READ PICTURE FILE($path;$PictVar) //put the picture in the picture variable PICTURE TO BLOB($PictVar;$BLOB;".png") //convert the picture to ".png" format WEB SEND BLOB($BLOB;"image/png")
```

### 4DACCIÓN para publicar formulários

O servidor Web 4D também permite que você use formulários "postados", páginas HTML estáticas que enviam dados para o servidor da Web e para recuperar facilmente todos os valores. O tipo POST deve ser associado a eles e a ação do formulário deve começar imperativamente com /4DACTION/MethodName.

Um formulário pode ser enviado por dois métodos (ambos podem ser usados com 4D):
- POST, normalmente utilizado para enviar dados para o servidor Web,
- GET, normalmente utilizado para pedir dados ao servidor Web.

> Quando o servidor web recebe um formulário publicado, ele chama o método banco de dados `On Web Authentication` (se existir).

No método chamado, você usa o comando `WEB GET VARIABLES` para [recuperar os nomes e os valores](#getting-values-from-the-requests) de todos os campos incluídos em uma página HTML enviada ao servidor.

Exemplo para definir a ação de um formulário:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Exemplo

Em uma aplicação Web, gostaríamos que os navegadores conseguissem pesquisar entre os registros usando uma página HTML estática. Esta página chama-se "search.htm". A aplicação contém outras páginas estáticas que permitem, por exemplo, exibir o resultado da pesquisa (“results.htm”). O tipo POST foi associado à página, assim como a ação `/4DACTION/SEARCH`.

Aqui está o código HTML que corresponde a esta página:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

Durante a entrada de dados, digite "ABCD" na área de entrada de dados, marque a opção "toda a palavra" e valide-a clicando no botão **Pesquisar**. No pedido enviado ao servidor Web:

```
vName="ABCD"
vExact="Word" OK="Search"
```

4D chama o método `On Web Authentication` de banco de dados (se existir), então o método do projeto `processForm` é chamado, o seguinte:

```4d
 C_TEXT($1) //obrigatório para o modo compilado
 C_LONGINT($vName)
 C_TEXT(vName; LIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
  WEB GET VARIABLES($arrNames;$arrVals) //recuperamos todas as variáveis do formulário
  $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //Se a opção não foi verificada
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Enviar a lista para os resultados. formulário tm
  //que contém uma referência à variável vLIST,
  ///por exemplo <! -4DHTML vLIST-->
  //...
End if
```





## Obter valores de pedidos HTTP

O servidor Web 4D permite que você recupere dados enviados através de solicitações POST ou GET, usando formulários Web ou URLs.

Quando o servidor web recebe uma solicitação com dados no cabeçalho ou no URL, 4D pode recuperar os valores de qualquer objeto HTML que ele contém. Este princípio pode ser implementado no caso de um formulário Web, enviado, por exemplo, usando `WEB SEND FILE` ou `WEB SEND BLOB`, onde o usuário insere ou modifica valores, em seguida, clica no botão de validação.

Neste caso, 4D pode recuperar os valores dos objetos HTML encontrados na solicitação usando o comando `WEB GET VARIABLES`. O comando `WEB GET VARIABLES` recupera os valores como texto.

Considere o seguinte código fonte da página HTML:

```html
<html>
<head>
  <title>Welcome</title>
  <script language="JavaScript"><!--
function GetBrowserInformation(formObj){
formObj.vtNav_appName.value = navigator.appName
formObj.vtNav_appVersion.value = navigator.appVersion
formObj.vtNav_appCodeName.value = navigator.appCodeName
formObj.vtNav_userAgent.value = navigator.userAgent
return true
}
function LogOn(formObj){
if(formObj.vtUserName.value!=""){
return true
} else {
alert("Enter your name, then try again.")
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p> 
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> 
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p> 
<input name="vtNav_appName" value="" type="hidden"> 
<input name="vtNav_appVersion" value="" type="hidden"> 
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>

<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit"> 
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>

<input name="vtNav_appName" value="" type="hidden"> 
<input name="vtNav_appVersion" value="" type="hidden"> 
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
return false
}
}
//--></script>
</head>
<body>
<form action="/4DACTION/WWW_STD_FORM_POST" method="post"
 name="frmWelcome"
 onsubmit="return GetBrowserInformation(frmWelcome)">
  <h1>Welcome to Spiders United</h1>
  <p><b>Please enter your name:</b>
  <input name="vtUserName" value="" size="30" type="text"></p>
  <p>
<input name="vsbLogOn" value="Log On" onclick="return LogOn(frmWelcome)" type="submit">
<input name="vsbRegister" value="Register" type="submit">
<input name="vsbInformation" value="Information" type="submit"></p>
<p>
<input name="vtNav_appName" value="" type="hidden">
<input name="vtNav_appVersion" value="" type="hidden">
<input name="vtNav_appCodeName" value="" type="hidden">
<input name="vtNav_userAgent" value="" type="hidden"></p>
</form>
</body>
</html>
```

Quando 4D envia a página para um navegador Web, ela se parece com isso:

![](../assets/en/WebServer/spiders.png)

As principais características desta página são:

- Inclui três botões: **Submit**`vsbLogOn`, `vsbRegister` e `vsbInformation`.
- Ao clicar em **Log On**, a submissão do formulário é processada pela primeira vez pela função JavaScript `LogOn`. Se nenhum nome for inserido, o formulário nem é enviado para 4D, e um alerta JavaScript é exibido.
- O formulário tem um método POST 4D, bem como um script Submit (*GetBrowserInformation*) que copia as propriedades do navegador para os quatro objetos ocultos cujos nomes começam com *vtNav_App*. Inclui também o objecto `vtUserName`.

Vamos examinar o método 4D `WWW_STD_FORM_POST` que é chamado quando o usuário clica em um dos botões do formulário HTML.

```4d
  // Recuperação de valor de variáveis
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_LONGINT($user)

 Case of

  // O botão Log On foi clicado em
     :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // O método WWW POST EVENT salva as informações em uma tabela de banco de dados
       Else

          $0:=WWW Register
  // O método WWW Register permite que um novo usuário Web registre
        End if

  // O botão Register foi clicado
    :(Find in array($arrNames; vsbRegister")#-1)
       $0:=WWW Register

  // O botão de Informação foi clicado 
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
```

As funcionalidades deste método são:

- Os valores das variáveis *vtNav_appName*, *vtNav_appVersion*, *vtNav_appCodeName*, e *vtNav_userAgent* (vinculados a objetos HTML que têm os mesmos nomes) são recuperados usando o comando `WEB GET VARIABLES` dos objetos HTML criados pelo script JavaScript *GetBrowserInformation*.
- Das variáveis vinculadas *vsbLogOn*, *vsbRegister* e *vsbInformation* para os três botões de envio, apenas o correspondente ao botão pressionado será recuperado pelo comando `WEB GET VARIABLES`. Quando o envio é realizado por um desses botões, o navegador retorna o valor do botão clicado para 4D. Isto diz-lhe qual o botão em que se clicou.

Tenha em atenção que, com HTML, todos os objetos são objetos texto. Se você usar um objeto SELECT, é o valor do elemento destacado no objeto retornado no comando `WEB GET VARIABLES`, e não a posição do elemento no array como em 4D. `WEB GET VARIABLES` sempre retorna valores do tipo Text.


## Outros comandos do servidor Web

O servidor web 4D fornece vários comandos web de baixo nível, permitindo que você desenvolva processamento personalizado de solicitações:

- o comando `WEB GET HTTP BODY` retorna o corpo como texto bruto, permitindo qualquer análise que você possa precisar
- o comando `WEB GET HTTP HEADER` retornam os cabeçalhos da solicitação. É útil lidar com cookies personalizados, por exemplo (com o comando `WEB SET HTTP HEADER`).
- os comandos `WEB GET BODY PART` e `WEB Get body part count` para analisar a parte do corpo de uma solicitação de várias partes e recuperar valores de texto, mas também arquivos publicados, utilizando BLOBs.

Esses comandos estão resumidos no gráfico a seguir:

![](../assets/en/WebServer/httpCommands.png)

O servidor 4D oferece suporte a arquivos enviados na codificação de transferência chunked de qualquer cliente web. A codificação de transferência em pedaços é um mecanismo de transferência de dados especificado no HTTP/1.1. Ele permite que os dados sejam transferidos em uma série de "chunks" (partes) sem saber o tamanho final dos dados. O servidor Web 4D também suporta codificação de transferência chunked do servidor para clientes web (usando `WEB SEND RAW DATA`).

## Método projeto COMPILER_WEB

O método COMPILER\_WEB, se existir, é chamado sistematicamente quando o servidor HTTP recebe uma solicitação dinâmica e chama ao motor 4D. Este e o caso, por exemplo, quando o servidor da Web 4D recebe um formulário postado ou um URL para processo em [`On Web Connection`](#on-web-connection). Este método destina-se a conter diretivas de inicialização de tipagem e/ou variáveis utilizadas durante trocas web. É utilizado pelo compilador quando a aplicação é compilada. O método COMPILER\_WEB é comum a todos os formulários Web. Por defeito, o método COMPILER_WEB não existe. É necessário criá-lo explicitamente.

> O método projeto COMPILER_WEB também é chamado, se existir, para cada solicitação SOAP aceite.
