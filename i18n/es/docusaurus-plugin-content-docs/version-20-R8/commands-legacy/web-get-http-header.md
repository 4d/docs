---
id: web-get-http-header
title: WEB GET HTTP HEADER
slug: /commands/web-get-http-header
displayed_sidebar: docs
---

<!--REF #_command_.WEB GET HTTP HEADER.Syntax-->**WEB GET HTTP HEADER** ( encab|arrayCamp {; *arrayValores*} )<!-- END REF-->
<!--REF #_command_.WEB GET HTTP HEADER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| encab&#124;arrayCamp | Texto, Array texto | &#8592; | Encabezado HTTP de la petición o Campos del encabezado HTTP |
| arrayValores | Text array | &#8592; | Contenido de los campos del encabezado HTTP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB GET HTTP HEADER.Summary-->El comando **WEB GET HTTP HEADER** devuelve, en una cadena o dos arrays, el encabezado HTTP de la petición en proceso.<!-- END REF-->

Este comando puede llamarse desde cualquier método (*Método de base On Web Authentication*, [QR SET DESTINATION](qr-set-destination.md), método llamado por "*/4DACTION"*...) ejecutado en un proceso web.

* **Primera sintaxis:** **WEB GET HTTP HEADER** **(encabezado)**
Cuando se utiliza esta sintaxis, el resultado devuelto en la variable *encabezado* es el siguiente: 

```4d
 "GET /page.html HTTP\1.0"+Char(13)+Char(10)+"User-Agent: browser"+Char(13)+Char(10)+"Cookie: C=HELLO"
```

Cada campo de encabezado está separado por una secuencia CR+LF (Retorno de carro+Retorno de línea) bajo Windows y Mac OS.

* **Segunda sintaxis:** **WEB GET HTTP HEADER** **(arrayCamp; arrayValores)**

Cuando utiliza esta sintaxis, los resultados devueltos en los arrays *arrayCamp* y *arrayValores* son del siguiente tipo:

| *fieldArray{1} = "X-METHOD"*   | *valueArray{1} = "GET" \**        |
| ------------------------------ | --------------------------------- |
| *fieldArray{2} = "X-URL"*      | *valueArray{2} = "/page.html" \** |
| *fieldArray{3} = "X-VERSION"*  | *valueArray{3} = "HTTP/1.0" \**   |
| *fieldArray{4} = "User-Agent"* | *valueArray{4} = "browser"*       |
| *fieldArray{5} = "Cookie"*     | *valueArray{5} = "C=HELLO"*       |

  
\* Estos tres primeros elementos no corresponden a los campos HTTP. Forman parte de la primera línea de la petición.

Conforme al estándar HTTP, los nombres de los campos siempre se escriben en inglés.

Esta es una lista de algunos campos HTTP que pueden utilizarse en una petición:

* **Accept**: contenido permitido por el navegador.
* **Accept-Language**: idioma(s) aceptado(s) por el navegador (para información). Permite seleccionar una página web utilizando el idioma definido en el navegador.
* **Cookie**: lista de cookies
* **From**: dirección de correo electrónico del usuario del navegador.
* **Host**: nombre o dirección del servidor (por ejemplo utilizando un URL, http://miservidorweb/mipagina.html, Host toma el valor «miservidorweb»). Permites administrar varios nombres que apuntan a la misma dirección IP (virtual hosting).
* **Referer**: origen de la petición (por ejemplo http://miservidorweb/mipagina1.html), es decir la página que el usuario muestra cuando se hace clic en el botón Anterior.
* **User-Agent**: nombre y versión del navegador o del proxy.

#### Ejemplo 

El siguiente método permite recuperar el contenido de todo campo de encabezado de petición HTTP: 

```4d
  // Método de proyecto GetHTTPField
  // GetHTTPField (Text) -> Text
  // GetHTTPField (Nombre encabezado HTTP) -> Contenido encabezado HTTP
 
 var $0;$1 : Text
 var $vlElem : Integer
 ARRAY TEXT($nombres;0)
 ARRAY TEXT($valores;0)
 $0:=""
 WEB GET HTTP HEADER($nombres;$valores)
 $vlElem:=Find in array($nombres;$1)
 If($vlElem>0)
    $0:=$valores{$vlElem}
 End if
```

* Una vez escrito este método de proyecto, puede llamarse de esta forma:

```4d
  // Contenido del encabezado Cookie
 $cookie:=GetHTTPField("Cookie")
```

* Puede enviar diferentes páginas en función del idioma del navegador (por ejemplo en el Método  
On Web Connection):

```4d
 $idioma:=GetHTTPField("Accept-Language")
 Case of
    :($idioma="@fr@") //Francés (ver lista ISO 639)
       WEB SEND FILE("index_fr.html")
    :($idioma="@sp@") //Español (ver lista ISO 639)
       WEB SEND FILE("index_es.html")
    Else
       WEB SEND FILE("index.html")
 End case
```

**Nota:** los navegadores web permiten definir varios idiomas por defecto. Están listados en el campo "Accept-Language", separados por un ";". Su propiedad está definida de acuerdo a su posición dentro de la cadena; por lo tanto es una buena idea probar la posición de los idiomas en la cadena.

* Este es un ejemplo de hosts virtuales (por ejemplo en el [QR SET DESTINATION](qr-set-destination.md)). Los siguiente nombres "home\_site.com", "home\_site1.com" y "home\_site2.com" apuntan a la misma dirección IP, por ejemplo 192.1.2.3.

```4d
 $host:=GetHTTPField("Host")
 Case of
    :($host="www.site1.com")
       WEB SEND FILE("home_site1.com")
    :($host="www.site2.com")
       WEB SEND FILE("home_site2.com")
    Else
       SEND HTML FILE("home_site.com")
 End case
```

#### Ver también 

[WEB GET HTTP BODY](web-get-http-body.md)  
[WEB SET HTTP HEADER](web-set-http-header.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 697 |
| Hilo seguro | &check; |


