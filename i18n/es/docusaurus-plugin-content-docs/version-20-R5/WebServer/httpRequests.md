---
id: httpRequests
title: Procesamiento de peticiones HTTP
---

El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:

- the `On Web Connection` database method, a router for your web application,
- the `/4DACTION` URL to call server-side code
- `WEB GET VARIABLES` para obtener valores de objetos HTML enviados al servidor
- otros comandos como `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, o `WEB GET BODY PART` permiten personalizar el procesamiento de la petición, incluyendo las cookies.
- el método proyecto _COMPILER_WEB_, para declarar sus variables.

## On Web Connection

The `On Web Connection` database method can be used as the entry point for the 4D Web server.

### Llamadas a métodos base

The `On Web Connection` database method is automatically called when the server reveives any URL that is not a path to an existing page on the server. Se llama al método de la base de datos con la URL.

For example, the URL "_a/b/c_" will call the database method, but "_a/b/c.html_" will not call the database method if the page "c.html" exists in the "a/b" subfolder of the [WebFolder](webServerConfig.md#root-folder).

> The request should have previously been accepted by the [`On Web Authentication`](authentication.md#on-web-authentication) database method (if it exists) and the web server must be launched.

### Sintaxis

**On Web Connection**( _$1_ : Text ; _$2_ : Text ; _$3_ : Text ; _$4_ : Text ; _$5_ : Text ; _$6_ : Text )

| Parámetros | Tipo |     | Descripción                                                                  |
| ---------- | ---- | :-: | ---------------------------------------------------------------------------- |
| $1         | Text |  <- | URL                                                                          |
| $2         | Text |  <- | Encabezados HTTP + cuerpo HTTP (hasta un límite de 32 kb) |
| $3         | Text |  <- | Dirección IP del cliente web (navegador)                  |
| $4         | Text |  <- | Dirección IP del servidor                                                    |
| $5         | Text |  <- | Nombre de usuario                                                            |
| $6         | Text |  <- | Contraseña                                                                   |

Debe declarar estos parámetros de la siguiente manera:

```4d
//On Web Connection database method
 
 C_TEXT($1;$2;$3;$4;$5;$6)
 
//Code for the method
```

Alternatively, you can use the [named parameters](Concepts/parameters.md#named-parameters) syntax:

```4d
// On Web Connection database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```

> Calling a 4D command that displays an interface element (`DIALOG`, `ALERT`, etc.) is not allowed and ends the method processing.

### $1 - Datos adicionales de la URL

El primer parámetro ($1) es la URL introducida por los usuarios en el área de direcciones de su navegador web, sin la dirección local.

Utilicemos como ejemplo una conexión de intranet. Supongamos que la dirección IP de su máquina 4D Web Server es 123.4.567.89. La siguiente tabla muestra los valores de $1 en función de la URL introducida en el navegador web:

| URL introducida en el navegador web                                                                                                               | Valor del parámetro $1                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.4.567.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.4.567.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Tenga en cuenta que es libre de utilizar este parámetro a su conveniencia. 4D simplemente ignora el valor pasado más allá de la parte del host de la URL. For example, you can establish a convention where the value "_/Customers/Add_" means “go directly to add a new record in the `[Customers]` table.” Al proporcionar a los usuarios de la web una lista de posibles valores y/o marcadores por defecto, puede dar accesos directos a diferentes partes de su aplicación. De este modo, los usuarios de la web pueden acceder rápidamente a los recursos de su sitio web sin tener que recorrer toda la ruta de navegación cada vez que realicen una nueva conexión.

### $2 - Encabezado y cuerpo de la petición HTTP

El segundo parámetro ($2) es el encabezado y el cuerpo de la petición HTTP enviada por el navegador web. Note that this information is passed to your `On Web Connection` database method "as is". Su contenido variará en función de la naturaleza del navegador web que intenta la conexión.

Si su aplicación utiliza esta información, deberá analizar el encabezado y el cuerpo. You can use the `WEB GET HTTP HEADER` and the `WEB GET HTTP BODY` commands.

> Por razones de rendimiento, el tamaño de los datos que pasan por el parámetro $2 no debe superar los 32 KB. Más allá de este tamaño, son truncados por el servidor HTTP de 4D.

### $3 - Dirección IP del cliente web

El parámetro $3 recibe la dirección IP de la máquina del navegador. Esta información puede permitirle distinguir entre las conexiones a la intranet y a Internet.

> 4D devuelve las direcciones IPv4 en un formato híbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34. For more information, refer to the [IPv6 Support](webServerConfig.md#about-ipv6-support) section.

### $4 - Dirección IP del servidor

El parámetro $4 recibe la dirección IP solicitada por el servidor web 4D. 4D permite el multi-homing, que permite utilizar máquinas con más de una dirección IP. For more information, please refer to the [Configuration page](webServerConfig.html#ip-address-to-listen).

### $5 y $6 - Nombre de usuario y contraseña

The $5 and $6 parameters receive the user name and password entered by the user in the standard identification dialog box displayed by the browser, if applicable (see the [authentication page](authentication.md)).

> Si el nombre de usuario enviado por el navegador existe en 4D, el parámetro $6 (la contraseña del usuario) no se devuelve por razones de seguridad.

## /4DACTION

\*\*/4DACTION/\*\*_MethodName_<br/>
\*\*/4DACTION/\*\*_MethodName/Param_

| Parámetros | Tipo |     | Descripción                                 |
| ---------- | ---- | :-: | ------------------------------------------- |
| MethodName | Text |  -> | Nombre del método de proyecto 4D a ejecutar |
| Param      | Text |  -> | Parámetro texto a pasar al método proyecto  |

**Usage:** URL or Form action.

This URL allows you to call the _MethodName_ 4D project method with an optional _Param_ text parameter. The method will receive this parameter in _$1_.

- The 4D project method must have been [allowed for web requests](allowProject.md): the “Available through 4D tags and URLs (4DACTION...)” attribute value must have been checked in the properties of the method. Si no se comprueba el atributo, se rechaza la solicitud web.
- When 4D receives a `/4DACTION/MethodName/Param` request, the `On Web Authentication` database method (if it exists) is called.

`4DACTION/` can be associated with a URL in a static Web page:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

The `MyMethod` project method should generally return a "reply" (sending of an HTML page using `WEB SEND FILE` or `WEB SEND TEXT`, etc.). Asegúrese de que el tratamiento sea lo más breve posible para no bloquear el navegador.

> A method called by `/4DACTION` must not call interface elements (`DIALOG`, `ALERT`, etc.).

#### Ejemplo

This example describes the association of the `/4DACTION` URL with an HTML picture object in order to dynamically display a picture in the page. Inserta las siguientes instrucciones en una página HTML estática:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

The `getPhoto` method is as follows:

```4d
C_TEXT($1) // Este parámetro debe declararse siempre
var $path : Text
var $PictVar : Picture
var $BlobVar : Blob

 //busca la imagen en la carpeta Imágenes dentro de la carpeta Resources 
$path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+$1+".psd"

READ PICTURE FILE($path;$PictVar) //pone la imagen en la variable imagen
PICTURE TO BLOB($PictVar;$BLOB;".png") //convierte la imagen en formato ".png". WEB SEND BLOB($BLOB;"image/png")
```

### 4DACCIÓN para publicar formularios

El servidor web de 4D también le permite utilizar formularios "publicados", que son páginas HTML estáticas que envían datos al servidor web y recuperar fácilmente todos los valores. Se les debe asociar el tipo POST y la acción del formulario debe empezar imperativamente por /4DACTION/MethodName.

Un formulario puede ser enviado a través de dos métodos (ambos pueden ser utilizados con 4D):

- POST, normalmente utilizado para enviar datos al servidor web,
- GET, normalmente utilizado para solicitar datos del servidor web.

> When the Web server receives a posted form, it calls the `On Web Authentication` database method (if it exists).

In the called method, you must call the `WEB GET VARIABLES` command in order to [retrieve the names and values](#getting-values-from-the-requests) of all the fields included in an HTML page submitted to the server.

Ejemplo para definir la acción de un formulario:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Ejemplo

En una aplicación web, nos gustaría que los navegadores pudieran buscar entre los registros mediante una página HTML estática. Esta página se llama "search.htm". La aplicación contiene otras páginas estáticas que permiten, por ejemplo, mostrar el resultado de la búsqueda ("results.htm"). The POST type has been associated to the page, as well as the `/4DACTION/SEARCH` action.

Aquí está el código HTML que corresponde a esta página:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

During data entry, type “ABCD” in the data entry area, check the "Whole word" option and validate it by clicking the **Search** button. En la solicitud enviada al servidor web:

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D calls the `On Web Authentication` database method (if it exists), then the `processForm` project method is called, which is as follows:

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

## Obtener valores de las peticiones HTTP

El servidor web de 4D le permite recuperar datos enviados a través de peticiones POST o GET, utilizando formularios web o URLs.

Cuando el servidor web recibe una petición con datos en el encabezado o en la URL, 4D puede recuperar los valores de cualquier objeto HTML que contenga. This principle can be implemented in the case of a Web form, sent for example using `WEB SEND FILE` or `WEB SEND BLOB`, where the user enters or modifies values, then clicks on the validation button.

In this case, 4D can retrieve the values of the HTML objects found in the request using the `WEB GET VARIABLES` command. The `WEB GET VARIABLES` command retrieves the values as text.

Considere el siguiente código fuente de la página HTML:

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

Cuando 4D envía la página a un navegador web, tiene el siguiente aspecto:

![](../assets/en/WebServer/spiders.png)

Las principales características de esta página son:

- It includes three **Submit** buttons: `vsbLogOn`, `vsbRegister` and `vsbInformation`.
- When you click **Log On**, the submission of the form is first processed by the JavaScript function `LogOn`. Si no se introduce ningún nombre, el formulario ni siquiera se envía a 4D, y se muestra una alerta de JavaScript.
- The form has a POST 4D method as well as a Submit script (_GetBrowserInformation_) that copies the browser properties to the four hidden objects whose names starts with _vtNav_App_.
  It also includes the `vtUserName` object.

Let’s examine the 4D method `WWW_STD_FORM_POST` that is called when the user clicks on one of the buttons on the HTML form.

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

Las funcionalidades de este método son:

- The values of the variables _vtNav_appName_, _vtNav_appVersion_, _vtNav_appCodeName_, and _vtNav_userAgent_ (bound to the HTML objects having the same names) are retrieved using the `WEB GET VARIABLES` command from HTML objects created by the _GetBrowserInformation_ JavaScript script.
- Out of the _vsbLogOn_, _vsbRegister_ and _vsbInformation_ variables bound to the three Submit buttons, only the one corresponding to the button that was clicked will be retrieved by the `WEB GET VARIABLES` command. Cuando el envío se realiza mediante uno de estos botones, el navegador devuelve a 4D el valor del botón presionado. Esto le indica qué botón se ha presionado.

Tenga en cuenta que con HTML, todos los objetos son objetos de texto. If you use a SELECT object, it is the value of the highlighted element in the object that is returned in the `WEB GET VARIABLES` command, and not the position of the element in the array as in 4D. `WEB GET VARIABLES` always returns values of the Text type.

## Otros comandos del servidor web

El servidor web de 4D ofrece varios comandos web de bajo nivel que le permiten desarrollar un procesamiento personalizado de las solicitudes:

- the `WEB GET HTTP BODY` command returns the body as raw text, allowing any parsing you may need
- the `WEB GET HTTP HEADER` command return the headers of the request. It is useful to handle custom cookies, for example (along with the `WEB SET HTTP HEADER` command).
- the `WEB GET BODY PART` and `WEB Get body part count` commands to parse the body part of a multi-part request and retrieve text values, but also files posted, using BLOBs.

Estos comandos se resumen en el siguiente gráfico:

![](../assets/en/WebServer/httpCommands.png)

El servidor web de 4D ahora soporta archivos cargados con codificación chunked desde cualquier cliente web. La codificación de transferencia en trozos es un mecanismo de transferencia de datos especificado en HTTP/1.1. Permite transferir datos en una serie de "trozos" (partes) sin conocer el tamaño final de los datos. The 4D Web Server also supports chunked transfer encoding from the server to Web clients (using `WEB SEND RAW DATA`).

## Método proyecto COMPILER_WEB

El método COMPILER\WEB, si existe, es llamado sistemáticamente cuando el servidor HTTP recibe una petición dinámica y llama al motor 4D. This is the case, for example, when the 4D Web server receives a posted form or a URL to process in [`On Web Connection`](#on-web-connection). Este método está destinado a contener directivas de digitación y/o inicialización de variables utilizadas durante los intercambios web. Es utilizado por el compilador cuando se compila la aplicación. El método COMPILER\WEB es común a todos los formularios web. Por defecto, el método COMPILER_WEB no existe. Debe crearlo explícitamente.

> También se llama al método proyecto COMPILER_WEB, si existe, para cada solicitud SOAP aceptada.
