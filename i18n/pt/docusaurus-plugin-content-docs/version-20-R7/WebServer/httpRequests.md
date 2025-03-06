---
id: httpRequests
title: Processamento de pedidos HTTP
---

O servidor da web 4D oferece várias funcionalidades para lidar com solicitações HTTP:

- el método base `On Web Connection`, un enrutador para su aplicación web,
- la URL `/4DACTION` para llamar al código del lado del servidor
- `WEB GET VARIABLES` para obtener valores de los objetos HTML enviados al servidor
- otros comandos como `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, o `WEB GET BODY PART` permiten personalizar el tratamiento de las solicitudes, incluidas las cookies.
- el método proyecto *COMPILER_WEB*, para declarar sus variables.

## On Web Connection

El método base `On Web Connection` puede utilizarse como punto de entrada al servidor web de 4D.

### Chamadas dos métodos banco

The `On Web Connection` database method is automatically called when the server receives any URL that is not a path to an existing page on the server. The <code>On Web Connection</code> database method is automatically called when the server receives any URL that is not a path to an existing page on the server.

Por ejemplo, la URL "*a/b/c*" llamará al método base, pero "*a/b/c.html*" no llamará al método base si la página "c.html" existe en la subcarpeta "a/b" del [WebFolder](webServerConfig.md#root-folder).

> The request should have previously been accepted by the [`On Web Authentication`](authentication.md#on-web-authentication) database method (if it exists) and the web server must be launched.

### Sintaxe

**On Web Connection**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text )

| Parâmetros | Tipo |                             | Descrição                                                                |
| ---------- | ---- | :-------------------------: | ------------------------------------------------------------------------ |
| $1         | Text | <- | URL                                                                      |
| $2         | Text | <- | Cabeçalhos HTTP + corpo HTTP (até um limite de 32 kb) |
| $3         | Text | <- | Endereço IP do cliente Web (browser)                  |
| $4         | Text | <- | Endereço IP do servidor                                                  |
| $5         | Text | <- | Nome de usuario                                                          |
| $6         | Text | <- | Senha                                                                    |

Estes parâmetros devem ser declarados como se indica a seguir:

```4d
//Método base On Web Authentication

 C_TEXT($1;$2;$3;$4;$5;$6)

//Código do método
```

Como alternativa, puede utilizar la sintaxis [parámetros nombrados](Concepts/parameters.md#named-parameters):

```4d
// Método banco de dados On Web Connection 
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```

> Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) não é permitido e encerra o processamento do método.

### $1 - Dados extra do URL

O primeiro parâmetro ($1) é a URL inserida pelos usuários na área de endereço de seu navegador da web, sem o endereço host.

Vamos utilizar uma ligação intranet como exemplo. Suponha que o endereço IP do seu Web Server 4D é 123.4.567.89. A tabela a seguir mostra os valores de $1 dependendo do URL inserida no navegador da Web:

| URL introduzido no navegador Web                                                                                                                  | Valor do parâmetro $1                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Note que você está livre para usar este parâmetro a sua conveniência. 4D simplesmente ignora o valor passado além da parte do host da URL. Por ejemplo, puede establecer una convención en la que el valor "*/Customers/Add*" significa "ir directamente a añadir un nuevo registro en la tabla `[Customers]`.” Fornecendo aos usuários web uma lista de valores possíveis e/ou favoritos padrão, você pode fornecer atalhos para diferentes partes de sua aplicação. Desta forma, os usuários da web podem acessar rapidamente os recursos do seu site sem percorrer todo o caminho de navegação toda vez que fizerem uma nova conexão.

### $2 - Cabeçalho e corpo do pedido HTTP

O segundo parâmetro ($2) é o cabeçalho e o corpo da solicitação HTTP enviada pelo navegador Web. Tenga en cuenta que esta información se pasa a su método base `On Web Connection` "tal cual". Seu conteúdo vária conforme o navegador da Web que tenta a conexão.

Se o seu aplicativo usar essas informações, caberá a você analisar o cabeçalho e o corpo. Puede utilizar los comandos `WEB GET HTTP HEADER` y `WEB GET HTTP BODY`.

> Por motivos de desempenho, o tamanho dos dados que passam pelo parâmetro $2 não deve exceder 32 KB. Para além deste tamanho, são truncados pelo servidor HTTP 4D.

### $3 - Endereço IP do cliente Web

O parâmetro $3 recebe o endereço IP do computador do navegador. Essas informações permitem distinguir entre conexões de intranet e de Internet.

> 4D devolve endereços IPv4 em formato híbrido IPv6/IPv4 escritos com um prefixo de 96 bits, por exemplo ::ffff:192.168.2.34 para o endereço IPv4 192.168.2.34. Para más información, consulte la sección [Soporte IPv6](webServerConfig.md#about-ipv6-support).

### $4 - Endereço IP do servidor

O parâmetro $4 recebe o endereço IP solicitado pelo servidor Web 4D. 4D permite multi-home que você pode usar máquinas com mais de um endereço IP. Para más información, consulte la [página Configuración](webServerConfig.html#ip-address-to-listen).

### $5 e $6 - Nome de usuário e palavra-passe

Los parámetros $5 y $6 reciben el nombre de usuario y la contraseña introducidos por el usuario en el cuadro de diálogo de identificación estándar que muestra el navegador, si procede (ver la página [autenticación](authentication.md)).

> Se o nome de usuário enviado pelo navegador existir em 4D, o parâmetro $6 (a senha do usuário) não é retornado por razões de segurança.

## /4DACTION

\*\*\*/4DACTION/***MethodName***<br/> \*\*/4DACTION/\*\*\*\*\**MethodName/Param*

| Parâmetros | Tipo |     | Descrição                                           |
| ---------- | ---- | :-: | --------------------------------------------------- |
| MethodName | Text |  -> | Nome do método de projeto 4D a ser executado        |
| Param      | Text |  -> | Parâmetro texto a ser passado para o método projeto |

**Uso:** URL o acción del formulario.

Esta URL permite llamar al método proyecto 4D *MethodName* con un parámetro texto opcional *Param*. El método recibirá este parámetro en *$1*.

- El método proyecto 4D debe haber sido [permitido para peticiones web](allowProject.md): el valor del atributo "Disponible a través de etiquetas y URLs 4D (4DACTION...)" debe haber sido marcado en las propiedades del método. Se o atributo não for verificado, o pedido Web é rejeitado.
- Cuando 4D recibes una petición `/4DACTION/MethodName/Param`, se llama el método base `On Web Authentication` (si existe).

`4DACTION/` puede asociarse a una URL en una página web estática:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

El método proyecto `MyMethod` debe devolver generalmente una "respuesta" (envío de una página HTML utilizando `WEB SEND FILE` o `WEB SEND TEXT`, etc.). Certifique-se de tornar o processamento o mais curto possível para não bloquear o navegador.

> Un método llamado por `/4DACTION` no debe llamar a elementos de la interfaz (`DIALOG`, `ALERT`, etc.).

#### Exemplo

Este ejemplo describe la asociación de la URL `/4DACTION` con un objeto imagen HTML para mostrar dinámicamente una imagen en la página. Inserir as seguintes instruções numa página HTML estática:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

El método `getPhoto` es el siguiente:

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

> Cuando el servidor web recibe un formulario publicado, llama al método base `On Web Authentication` (si existe).

En el método llamado, debe llamar al comando `WEB GET VARIABLES` para [recuperar los nombres y valores](#getting-values-from-the-requests) de todos los campos incluidos en una página HTML enviada al servidor.

Exemplo para definir a ação de um formulário:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Exemplo

Em uma aplicação Web, gostaríamos que os navegadores conseguissem pesquisar entre os registros usando uma página HTML estática. Esta página chama-se "search.htm". A aplicação contém outras páginas estáticas que permitem, por exemplo, exibir o resultado da pesquisa (“results.htm”). Se ha asociado el tipo POST a la página, así como la acción `/4DACTION/SEARCH`.

Aqui está o código HTML que corresponde a esta página:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

Durante la entrada de datos, escriba "ABCD" en el área de entrada de datos, marque la opción "Whole word" y valídela haciendo clic en el botón **Search**. No pedido enviado ao servidor Web:

```
vName="ABCD"
vExact="Word" OK="Search"
```

4D llama al método base `<On Web Authentication>` (si existe), luego se llama al método proyecto `processForm`, que es el siguiente:

```4d
 C_TEXT($1) //mandatory for compiled mode
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //we retrieve all the variables of the form
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //If the option has not been checked
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Send the list to the results.htm form
  //which contains a reference to the variable vLIST,
  //for example <!--4DHTML vLIST-->
  //...
End if
```

## Obter valores de pedidos HTTP

O servidor Web 4D permite que você recupere dados enviados através de solicitações POST ou GET, usando formulários Web ou URLs.

Quando o servidor web recebe uma solicitação com dados no cabeçalho ou no URL, 4D pode recuperar os valores de qualquer objeto HTML que ele contém. Este principio puede implementarse en el caso de un formulario web, enviado por ejemplo utilizando `WEB SEND FILE` o `WEB SEND BLOB`, en el que el usuario introduce o modifica valores y luego hace clic en el botón de validación.

En este caso, 4D puede recuperar los valores de los objetos HTML encontrados en la petición utilizando el comando `WEB GET VARIABLES`. El comando `WEB GET VARIABLES` recupera los valores como texto.

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
```

Quando 4D envia a página para um navegador Web, ela se parece com isso:

![](../assets/en/WebServer/spiders.png)

As principais características desta página são:

- Incluye tres botones **Submit**: `vsbLogOn`, `vsbRegister` y `vsbInformation`.
- Cuando se hace clic en **Log On**, el envío del formulario se procesa primero por la función de JavaScript `LogOn`. Se nenhum nome for inserido, o formulário nem é enviado para 4D, e um alerta JavaScript é exibido.
- El formulario tiene un método POST 4D así como un script Submit (*GetBrowserInformation*) que copia las propiedades del navegador a los cuatro objetos ocultos cuyos nombres empiezan por *vtNav_App*.
 También incluye el objeto `vtUserName`.

Examinemos el método 4D `WWW_STD_FORM_POST` que se llama cuando el usuario hace clic en uno de los botones del formulario HTML.

```4d
  // Retrieval of value of variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_LONGINT($user)

 Case of

  // The Log On button was clicked
    :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // The WWW POST EVENT method saves the information in a database table
       Else

          $0:=WWW Register
  // The WWW Register method lets a new Web user register
       End if

  // The Register button was clicked
    :(Find in array($arrNames;"vsbRegister")#-1)
       $0:=WWW Register

  // The Information button was clicked
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
```

As funcionalidades deste método são:

- The values of the variables *vtNav_appName*, *vtNav_appVersion*, *vtNav_appCodeName*, and *vtNav_userAgent* (bound to the HTML objects having the same names) are retrieved using the `WEB GET VARIABLES` command from HTML objects created by the *GetBrowserInformation* JavaScript script.
- De las variables vinculadas *vsbLogOn*, *vsbRegister* y *vsbInformation* a los tres botones de envío, sólo la correspondiente al botón que se ha presionado será recuperada por el comando `WEB GET VARIABLES`. Quando o envio é realizado por um desses botões, o navegador retorna o valor do botão clicado para 4D. Isto diz-lhe qual o botão em que se clicou.

Tenha em atenção que, com HTML, todos os objetos são objetos texto. Si se utiliza un objeto SELECT, es el valor del elemento resaltado en el objeto el que se devuelve en el comando `WEB GET VARIABLES`, y no la posición del elemento en el array como en 4D. `WEB GET VARIABLES` siempre devuelve valores de tipo Texto.

## Outros comandos do servidor Web

O servidor web 4D fornece vários comandos web de baixo nível, permitindo que você desenvolva processamento personalizado de solicitações:

- el comando `WEB GET HTTP BODY` devuelve el cuerpo como texto sin procesar, permitiendo cualquier análisis que pueda necesitar
- el comando `WEB GET HTTP HEADER` devuelve los encabezados de la petición. Es útil para manejar cookies personalizadas, por ejemplo (junto con el comando `WEB SET HTTP HEADER`).
- los comandos `WEB GET BODY PART` y `WEB Get body part count` para analizar la parte del cuerpo de una petición de varias partes y recuperar los valores de texto, pero también los archivos publicados, utilizando BLOBs.

Esses comandos estão resumidos no gráfico a seguir:

![](../assets/en/WebServer/httpCommands.png)

O servidor 4D oferece suporte a arquivos enviados na codificação de transferência chunked de qualquer cliente web. A codificação de transferência em pedaços é um mecanismo de transferência de dados especificado no HTTP/1.1. Ele permite que os dados sejam transferidos em uma série de "chunks" (partes) sem saber o tamanho final dos dados. El servidor web de 4D también soporta la codificación de transferencia en trozos desde el servidor a los clientes web (utilizando `WEB SEND RAW DATA`).

## Método projeto COMPILER_WEB

O método COMPILER\_WEB, se existir, é chamado sistematicamente quando o servidor HTTP recebe uma solicitação dinâmica e chama ao motor 4D. O método COMPILER\_WEB, se existir, é chamado sistematicamente quando o servidor HTTP recebe uma solicitação dinâmica e chama ao motor 4D. Este método destina-se a conter diretivas de inicialização de tipagem e/ou variáveis utilizadas durante trocas web. É utilizado pelo compilador quando a aplicação é compilada. O método COMPILER\_WEB é comum a todos os formulários Web. Por defeito, o método COMPILER_WEB não existe. É necessário criá-lo explicitamente.

> O método projeto COMPILER_WEB também é chamado, se existir, para cada solicitação SOAP aceite.
