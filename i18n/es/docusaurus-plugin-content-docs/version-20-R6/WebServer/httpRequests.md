---
id: httpRequests
title: Procesamiento de peticiones HTTP
---

El servidor web de 4D ofrece varias funcionalidades para gestionar las peticiones HTTP:

- el método base `On Web Connection`, un enrutador para su aplicación web,
- la URL `/4DACTION` para llamar al código del lado del servidor
- `WEB GET VARIABLES` para obtener valores de objetos HTML enviados al servidor
- otros comandos como `WEB GET HTTP BODY`, `WEB GET HTTP HEADER`, o `WEB GET BODY PART` permiten personalizar el procesamiento de la petición, incluyendo las cookies.
- el método proyecto *COMPILER_WEB*, para declarar sus variables.

## On Web Connection

El método base `On Web Connection` puede utilizarse como punto de entrada al servidor web de 4D.

### Llamadas a métodos base

El método base `On Web Connection` se llama automáticamente cuando el servidor recibe cualquier URL que no sea una ruta a una página existente en el servidor. Se llama al método de la base de datos con la URL.

Por ejemplo, la URL "*a/b/c*" llamará al método base, pero "*a/b/c.html*" no llamará al método base si la página "c.html" existe en la subcarpeta "a/b" del [WebFolder](webServerConfig.md#root-folder).

> La petición debe haber sido aceptada previamente por el método base [`On Web Authentication`](authentication.md#on-web-authentication) de la base (si existe) y el servidor web debe lanzarse.

### Sintaxis

**On Web Connection**( *$1* : Text ; *$2* : Text ; *$3* : Text ; *$4* : Text ; *$5* : Text ; *$6* : Text )

| Parámetros | Tipo |                             | Descripción                                                                  |
| ---------- | ---- | :-------------------------: | ---------------------------------------------------------------------------- |
| $1         | Text | <- | URL                                                                          |
| $2         | Text | <- | Encabezados HTTP + cuerpo HTTP (hasta un límite de 32 kb) |
| $3         | Text | <- | Dirección IP del cliente web (navegador)                  |
| $4         | Text | <- | Dirección IP del servidor                                                    |
| $5         | Text | <- | Nombre de usuario                                                            |
| $6         | Text | <- | Contraseña                                                                   |

Debe declarar estos parámetros de la siguiente manera:

```4d
//Método base On Web Connection

 C_TEXT($1;$2;$3;$4;$5;$6)

//Código para el métodod
```

Como alternativa, puede utilizar la sintaxis [parámetros nombrados](Concepts/parameters.md#named-parameters):

```4d
// Método base On Web Connection
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)

```

> Llamando a un comando 4D que muestra un elemento de interfaz (`DIALOG`, `ALERT`, etc.) no está permitido y finaliza el procesamiento del método.

### $1 - Datos adicionales de la URL

El primer parámetro ($1) es la URL introducida por los usuarios en el área de direcciones de su navegador web, sin la dirección local.

Utilicemos como ejemplo una conexión de intranet. Supongamos que la dirección IP de su máquina 4D Web Server es 123.4.567.89. La siguiente tabla muestra los valores de $1 en función de la URL introducida en el navegador web:

| URL introducida en el navegador web                                                                                                               | Valor del parámetro $1                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| 123.4.567.89                                                                                      | /                                                                                     |
| http://123.45.67.89                                                               | /                                                                                     |
| 123.4.567.89/Customers                                                                            | /Customers                                                                            |
| http://123.45.67.89/Customers/Add                                                 | /Customers/Add                                                                        |
| 123.4.567.89/Do_This/If_OK/Do_That | /Do_This/If_OK/Do_That |

Tenga en cuenta que es libre de utilizar este parámetro a su conveniencia. 4D simplemente ignora el valor pasado más allá de la parte del host de la URL. Por ejemplo, puede establecer una convención en la que el valor "*/Customers/Add*" significa "ir directamente a añadir un nuevo registro en la tabla `[Customers]`.” Al proporcionar a los usuarios de la web una lista de posibles valores y/o marcadores por defecto, puede dar accesos directos a diferentes partes de su aplicación. De este modo, los usuarios de la web pueden acceder rápidamente a los recursos de su sitio web sin tener que recorrer toda la ruta de navegación cada vez que realicen una nueva conexión.

### $2 - Encabezado y cuerpo de la petición HTTP

El segundo parámetro ($2) es el encabezado y el cuerpo de la petición HTTP enviada por el navegador web. Tenga en cuenta que esta información se pasa a su método base `On Web Connection` "tal cual". Su contenido variará en función de la naturaleza del navegador web que intenta la conexión.

Si su aplicación utiliza esta información, deberá analizar el encabezado y el cuerpo. Puede utilizar los comandos `WEB GET HTTP HEADER` y `WEB GET HTTP BODY`.

> Por razones de rendimiento, el tamaño de los datos que pasan por el parámetro $2 no debe superar los 32 KB. Más allá de este tamaño, son truncados por el servidor HTTP de 4D.

### $3 - Dirección IP del cliente web

El parámetro $3 recibe la dirección IP de la máquina del navegador. Esta información puede permitirle distinguir entre las conexiones a la intranet y a Internet.

> 4D devuelve las direcciones IPv4 en un formato híbrido IPv6/IPv4 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34. Para más información, consulte la sección [Soporte IPv6](webServerConfig.md#about-ipv6-support).

### $4 - Dirección IP del servidor

El parámetro $4 recibe la dirección IP solicitada por el servidor web 4D. 4D permite el multi-homing, que permite utilizar máquinas con más de una dirección IP. Para más información, consulte la [página Configuración](webServerConfig.html#ip-address-to-listen).

### $5 y $6 - Nombre de usuario y contraseña

Los parámetros $5 y $6 reciben el nombre de usuario y la contraseña introducidos por el usuario en el cuadro de diálogo de identificación estándar que muestra el navegador, si procede (ver la página [autenticación](authentication.md)).

> Si el nombre de usuario enviado por el navegador existe en 4D, el parámetro $6 (la contraseña del usuario) no se devuelve por razones de seguridad.

## /4DACTION

\*\*/4DACTION/\*\**MethodName*<br/>
\*\*/4DACTION/\*\**MethodName/Param*

| Parámetros | Tipo |     | Descripción                                 |
| ---------- | ---- | :-: | ------------------------------------------- |
| MethodName | Text |  -> | Nombre del método de proyecto 4D a ejecutar |
| Param      | Text |  -> | Parámetro texto a pasar al método proyecto  |

**Uso:** URL o acción del formulario.

Esta URL permite llamar al método proyecto 4D *MethodName* con un parámetro texto opcional *Param*. El método recibirá este parámetro en *$1*.

- El método proyecto 4D debe haber sido [permitido para peticiones web](allowProject.md): el valor del atributo "Disponible a través de etiquetas y URLs 4D (4DACTION...)" debe haber sido marcado en las propiedades del método. Si no se comprueba el atributo, se rechaza la solicitud web.
- Cuando 4D recibes una petición `/4DACTION/MethodName/Param`, se llama el método base `On Web Authentication` (si existe).

`4DACTION/` puede asociarse a una URL en una página web estática:

```html
<A HREF="/4DACTION/MyMethod/hello">Do Something</A>
```

El método proyecto `MyMethod` debe devolver generalmente una "respuesta" (envío de una página HTML utilizando `WEB SEND FILE` o `WEB SEND TEXT`, etc.). Asegúrese de que el tratamiento sea lo más breve posible para no bloquear el navegador.

> Un método llamado por `/4DACTION` no debe llamar a elementos de la interfaz (`DIALOG`, `ALERT`, etc.).

#### Ejemplo

Este ejemplo describe la asociación de la URL `/4DACTION` con un objeto imagen HTML para mostrar dinámicamente una imagen en la página. Inserta las siguientes instrucciones en una página HTML estática:

```html
<IMG SRC="/4DACTION/getPhoto/smith">
```

El método `getPhoto` es el siguiente:

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

> Cuando el servidor web recibe un formulario publicado, llama al método base `On Web Authentication` (si existe).

En el método llamado, debe llamar al comando `WEB GET VARIABLES` para [recuperar los nombres y valores](#getting-values-from-the-requests) de todos los campos incluidos en una página HTML enviada al servidor.

Ejemplo para definir la acción de un formulario:

```html
<FORM ACTION="/4DACTION/MethodName" METHOD=POST>
```

#### Ejemplo

En una aplicación web, nos gustaría que los navegadores pudieran buscar entre los registros mediante una página HTML estática. Esta página se llama "search.htm". La aplicación contiene otras páginas estáticas que permiten, por ejemplo, mostrar el resultado de la búsqueda ("results.htm"). Se ha asociado el tipo POST a la página, así como la acción `/4DACTION/SEARCH`.

Aquí está el código HTML que corresponde a esta página:

```html
<form action="/4daction/processForm" method=POST>
<input type=text name=vName value=""><br/>
<input type=checkbox name=vExact value="Word">Whole word<br/>
<input type=submit name=OK value="Search">
</FORM>
```

Durante la entrada de datos, escriba "ABCD" en el área de entrada de datos, marque la opción "Whole word" y valídela haciendo clic en el botón **Search**. En la solicitud enviada al servidor web:

```
vName="ABCD"
vExact="Word"
OK="Search"
```

4D llama al método base `<On Web Authentication>` (si existe), luego se llama al método proyecto `processForm`, que es el siguiente:

```4d
 C_TEXT($1) //obligatorio para el modo compilado
 C_LONGINT($vName)
 C_TEXT(vName;vLIST)
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrVals;0)
 WEB GET VARIABLES($arrNames;$arrVals) //recuperamos todas las variables del formulario
 $vName:=Find in array($arrNames;"vName")
 vName:=$arrVals{$vName}
 If(Find in array($arrNames;"vExact")=-1) //Si la opción no ha sido marcada
    vName:=vName+"@"
 End if
 QUERY([Jockeys];[Jockeys]Name=vName)
 FIRST RECORD([Jockeys])
 While(Not(End selection([Jockeys])))
    vLIST:=vLIST+[Jockeys]Name+" "+[Jockeys]Tel+"<br/>"
    NEXT RECORD([Jockeys])
 End while
 WEB SEND FILE("results.htm") //Enviar la lista al formulario results.htm
  //que contiene una referencia a la variable vLIST,
  //por ejemplo <!--4DHTML vLIST-->
  //...
End if
```

## Obtener valores de las peticiones HTTP

El servidor web de 4D le permite recuperar datos enviados a través de peticiones POST o GET, utilizando formularios web o URLs.

Cuando el servidor web recibe una petición con datos en el encabezado o en la URL, 4D puede recuperar los valores de cualquier objeto HTML que contenga. Este principio puede implementarse en el caso de un formulario web, enviado por ejemplo utilizando `WEB SEND FILE` o `WEB SEND BLOB`, en el que el usuario introduce o modifica valores y luego hace clic en el botón de validación.

En este caso, 4D puede recuperar los valores de los objetos HTML encontrados en la petición utilizando el comando `WEB GET VARIABLES`. El comando `WEB GET VARIABLES` recupera los valores como texto.

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

- Incluye tres botones **Submit**: `vsbLogOn`, `vsbRegister` y `vsbInformation`.
- Cuando se hace clic en **Log On**, el envío del formulario se procesa primero por la función de JavaScript `LogOn`. Si no se introduce ningún nombre, el formulario ni siquiera se envía a 4D, y se muestra una alerta de JavaScript.
- El formulario tiene un método POST 4D así como un script Submit (*GetBrowserInformation*) que copia las propiedades del navegador a los cuatro objetos ocultos cuyos nombres empiezan por *vtNav_App*.
  También incluye el objeto `vtUserName`.

Examinemos el método 4D `WWW_STD_FORM_POST` que se llama cuando el usuario hace clic en uno de los botones del formulario HTML.

```4d
  // Recuperación del valor de las variables
 ARRAY TEXT($arrNames;0)
 ARRAY TEXT($arrValues;0)
 WEB GET VARIABLES($arrNames;$arrValues)
 C_LONGINT($user)

 Case of

  // Se ha presionado el botón Log On
    :(Find in array($arrNames;"vsbLogOn")#-1)
       $user :=Find in array($arrNames;"vtUserName")
       QUERY([WWW Users];[WWW Users]UserName=$arrValues{$user})
       $0:=(Records in selection([WWW Users])>0)
       If($0)
          WWW POST EVENT("Log On";WWW Log information)
  // El método WWW POST EVENT guarda la información en una tabla de la base
       Else

          $0:=WWW Register
  // El método WWW Register permite que un nuevo usuario de la Web se registre
       End if

  // Se ha presionado el botón Register
    :(Find in array($arrNames;"vsbRegister")#-1)
       $0:=WWW Register

  // Se ha presionado el botón de información
    :(Find in array($arrNames;"vsbInformation")#-1)
       WEB SEND FILE("userinfos.html")
 End case
```

Las funcionalidades de este método son:

- Los valores de las variables *vtNav_appName*, *vtNav_appVersion*, *vtNav_appCodeName*, y *vtNav_userAgent* (vinculados a los objetos HTML que tienen los mismos nombres) se recuperan utilizando el comando `WEB GET VARIABLES` de los objetos HTML creados por el script JavaScript *GetBrowserInformation*.
- De las variables vinculadas *vsbLogOn*, *vsbRegister* y *vsbInformation* a los tres botones de envío, sólo la correspondiente al botón que se ha presionado será recuperada por el comando `WEB GET VARIABLES`. Cuando el envío se realiza mediante uno de estos botones, el navegador devuelve a 4D el valor del botón presionado. Esto le indica qué botón se ha presionado.

Tenga en cuenta que con HTML, todos los objetos son objetos de texto. Si se utiliza un objeto SELECT, es el valor del elemento resaltado en el objeto el que se devuelve en el comando `WEB GET VARIABLES`, y no la posición del elemento en el array como en 4D. `WEB GET VARIABLES` siempre devuelve valores de tipo Texto.

## Otros comandos del servidor web

El servidor web de 4D ofrece varios comandos web de bajo nivel que le permiten desarrollar un procesamiento personalizado de las solicitudes:

- el comando `WEB GET HTTP BODY` devuelve el cuerpo como texto sin procesar, permitiendo cualquier análisis que pueda necesitar
- el comando `WEB GET HTTP HEADER` devuelve los encabezados de la petición. Es útil para manejar cookies personalizadas, por ejemplo (junto con el comando `WEB SET HTTP HEADER`).
- los comandos `WEB GET BODY PART` y `WEB Get body part count` para analizar la parte del cuerpo de una petición de varias partes y recuperar los valores de texto, pero también los archivos publicados, utilizando BLOBs.

Estos comandos se resumen en el siguiente gráfico:

![](../assets/en/WebServer/httpCommands.png)

El servidor web de 4D ahora soporta archivos cargados con codificación chunked desde cualquier cliente web. La codificación de transferencia en trozos es un mecanismo de transferencia de datos especificado en HTTP/1.1. Permite transferir datos en una serie de "trozos" (partes) sin conocer el tamaño final de los datos. El servidor web de 4D también soporta la codificación de transferencia en trozos desde el servidor a los clientes web (utilizando `WEB SEND RAW DATA`).

## Método proyecto COMPILER_WEB

El método COMPILER\WEB, si existe, es llamado sistemáticamente cuando el servidor HTTP recibe una petición dinámica y llama al motor 4D. El método COMPILER\WEB, si existe, es llamado sistemáticamente cuando el servidor HTTP recibe una petición dinámica y llama al motor 4D. Este método está destinado a contener directivas de digitación y/o inicialización de variables utilizadas durante los intercambios web. Es utilizado por el compilador cuando se compila la aplicación. El método COMPILER\WEB es común a todos los formularios web. Por defecto, el método COMPILER_WEB no existe. Debe crearlo explícitamente.

> También se llama al método proyecto COMPILER_WEB, si existe, para cada solicitud SOAP aceptada.
