---
id: http-request
title: HTTP Request
slug: /commands/http-request
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Request.Syntax-->**HTTP Request** ( *metodoHTTP* ; *url* ; *contenido* ; *respuesta* {; *nomEncab* ; *valoresEncab*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Request.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| metodoHTTP | Text | &#8594;  | Método HTTP para la petición |
| url | Text | &#8594;  | URL a la cual enviar la petición |
| contenido | Text, Blob, Picture, Object | &#8594;  | Contenido del cuerpo(body)de la petición |
| respuesta | Text, Blob, Picture, Object | &#8592; | Resultado de la petición |
| nomEncab | Text array | &#8594;  | Nombres de los encabezados de la petición |
| &#8592; | Nombres de los encabezados devueltos |
| valoresEncab | Text array | &#8594;  | Valores de los encabezados de la petición |
| &#8592; | Valores de los encabezados devueltos |
| * | Operador | &#8594;  | Si se pasa, la conexión se mantiene (keep-alive)Si se omite, la conexión se cierra automáticamente |
| Resultado | Integer | &#8592; | Código de estado HTTP |

<!-- END REF-->

:::info Compatibilidad

Este comando se mantiene sólo por razones de compatibilidad. Ahora se recomienda utilizar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::

#### 

<!--REF #_command_.HTTP Request.Summary-->El comando **HTTP Request** permite enviar todo tipo de petición HTTP a un URL específico y procesar la respuesta del servidor HTTP.<!-- END REF-->

Pase en el parámetro *metodoHTTP* el método HTTP de la petición. Puede utilizar una de las siguientes constantes, del tema *HTTP Client*:

| Constante           | Tipo   | Valor   | Comentario                                                                           |
| ------------------- | ------ | ------- | ------------------------------------------------------------------------------------ |
| HTTP DELETE method  | Cadena | DELETE  | Ver el *RFC 2616*                                                                    |
| HTTP GET method     | Cadena | GET     | Ver el *RFC 2616*. Equivale a utilizar el comando [HTTP Get](http-get.md "HTTP Get") |
| HTTP HEAD method    | Cadena | HEAD    | Ver el *RFC 2616*                                                                    |
| HTTP OPTIONS method | Cadena | OPTIONS | Ver el *RFC 2616*                                                                    |
| HTTP POST method    | Cadena | POST    | Ver el *RFC 2616*                                                                    |
| HTTP PUT method     | Cadena | PUT     | Ver el *RFC 2616*                                                                    |
| HTTP TRACE method   | Cadena | TRACE   | Ver el *RFC 2616*                                                                    |

Pase en el parámetro *url* el URL a donde quiere enviar la petición. La sintaxis a utilizar es:  

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Por ejemplo, puede pasar las siguientes cadenas:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* Durante las peticiones HTTPS, la autoridad del certificado no se verifica.   
*(\*\*)* Para mayor información sobre las direcciones IPv6 en urls, por favor consulte [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt).

Pase en el parámetro *contenido* el cuerpo (body) de la petición. Los datos pasados en este parámetro dependen del método HTTP de la petición.  
Puede enviar datos de tipo texto, BLOB, imagen u objeto. Cuando el content-type no se especifica, se utilizan los siguientes tipos:

* para los textos: texto/plano - UTF8
* para los BLOBs: aplicación/byte-stream
* para las imágenes: tipo MIME conocido (best for Web).
* para los objetos: aplicación/json

Después de la ejecución del comando, el parámetro *respuesta* recupera el resultado de la petición devuelto por el servidor. Este resultado corresponde al cuerpo (body) de la respuesta, sin los encabezados (headers). Puede pasar variables de diferentes tipos en *respuesta*:

* Texto: cuando el resultado se espera en forma de texto (ver nota abajo).
* BLOB: cuando el resultado se espera en forma binaria.
* Imagen: cuando el resultado se espera en forma de imagen.
* Objeto: cuando el resultado esperado es un objeto.

**Nota:** cuando se pasa una variable de texto en *respuesta*, 4D intentará decodificar los datos devueltos desde el servidor. 4D primero intenta recuperar el conjunto de caracteres del encabezado de *tipo de contenido*, luego del contenido utilizando un BOM y, finalmente, busca cualquier atributo *http-equiv charset* (en contenido html) o *codificación* (para xml). Si no se puede detectar ningún charset, 4D intentará decodificar la respuesta en ANSI. Si la conversión falla, el texto resultante quedará vacío. Si no está seguro de si el servidor devuelve una información charset o BOM, pero conoce la codificación, es más preciso pasar *respuesta* en BLOB y llamar al [Convert to text](convert-to-text.md).

Si pasa una variable de tipo objeto en el parámetro *respuesta*, si la petición devuelve un resultado con el contenido tipo texto, 4D intenta analizar el contenido JSON y devuelve el resultado analizado como un objeto. En caso contrario, se devuelve un objeto *4D.Blob*.

Si el resultado devuelto por el servidor no corresponde al tipo de la variable *respuesta*, se deja vacío.  
  
En *nomEncab* y *valoresEncab* pase los arrays que contienen los nombres y los valores de los encabezados de la petición.  
Después de la ejecución del método, estos arrays contienen los nombres y los valores de los encabezados devueltos por el servidor HTTP. Más específicamente, este principio le permite administrar sus cookies.   
  
El parámetro *\** permite activar el mecanismo keep-alive para la conexión al servidor. Por defecto, este parámetro se omite, keep-alive no está activo.

El comando devuelve el código del estado HTTP estándar (200=OK...) tal como fue devuelto por el servidor. La lista de códigos de estado HTTP está en el *RFC 2616*.   
Si la conexión al servidor no es posible por una razón relacionada con la red (DNS Failed, Server not reachable...), el comando devuelve 0 y se genera un error. Puede interceptar estos errores utilizando un método instalado por el comando [ON ERR CALL](on-err-call.md).

#### Ejemplo 1 

Solicitud de eliminación de un registro en una base remota:

```4d
 var $response : Text
 $body_t:="{record_id:25}"
 $httpStatus_l:=HTTP Request(HTTP DELETE method;"database.example.com";$body_t;$response)
```

**Nota:** usted debe procesar la solicitud de la manera apropiada en el servidor remoto, **HTTP Request** sólo se encarga de la petición y del resultado devuelto.

#### Ejemplo 2 

Solicitud de adición de un registro a una base remota:

```4d
 var $response : Text
 $body_t:="{fName:'john',fName:'Doe'}"
 $httpStatus_l:=HTTP Request(HTTP PUT method;"database.example.com";$body_t;$response)
```

**Nota:** usted debe procesar la solicitud de la manera apropiada en el servidor remoto, **HTTP Request** sólo se encarga de la petición y del resultado devuelto.

#### Ejemplo 3 

Petición para añadir un registro en JSON a una base remota:

```4d
 var $content : Object
 OB SET($content;"lastname";"Doe";"firstname";"John")
 $result:=HTTP Request(HTTP PUT method;"database.example.com";$content;$response)
```

#### Ver también 

[HTTP Get](http-get.md)  