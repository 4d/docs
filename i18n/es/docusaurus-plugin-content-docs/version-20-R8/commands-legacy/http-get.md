---
id: http-get
title: HTTP Get
slug: /commands/http-get
displayed_sidebar: docs
---

<!--REF #_command_.HTTP Get.Syntax-->**HTTP Get** ( *url* ; *respuesta* {; *nomEncab* ; *valoresEncab*}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.HTTP Get.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| url | Text | &#8594;  | URL al cual enviar la petición |
| respuesta | Text, Blob, Picture, Object | &#8592; | Resultado de la petición |
| nomEncab | Text array | &#8594;  | Nombres de los encabezados de la petición |
| &#8592; | Nombres de encabezados devueltos |
| valoresEncab | Text array | &#8594;  | Valores de los encabezados de la petición |
| &#8592; | Valores de los encabezados devueltos |
| * | Operador | &#8594;  | Si se pasa, la conexión se mantiene(keep-alive)Si se omite, la conexión se cierra automáticamente |
| Resultado | Integer | &#8592; | Código de estado HTTP |

<!-- END REF-->

:::info Compatibilidad

Este comando se mantiene sólo por razones de compatibilidad. Ahora se recomienda utilizar [`4D.HTTPRequest class`](../API/HTTPRequestClass.md).

:::


#### Descripción 

<!--REF #_command_.HTTP Get.Summary-->El comando **HTTP Get** envía directamente una petición HTTP GET a un URL específico y procesa la respuesta del servidor HTTP.<!-- END REF-->

Pase en el parámetro *url* el URL al cual enviar la petición. La sintaxis a utilizar es:

```RAW
http://[{user}:[{password}]@]host[:{port}][/{path}][?{queryString}]
```

Por ejemplo, puede pasar las siguientes cadenas:  

```RAW
    http://www.myserver.com    http://www.myserver.com/path    http://www.myserver.com/path?name="jones"    https://www.myserver.com/login (*)    http://123.45.67.89:8083    http://john:smith@123.45.67.89:8083    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]    http://[2001:0db8:0000:0000:0000:ff00:0042:8329]:8080/index.html (**)
```

*(\*)* Durante las peticiones HTTPS, la autoridad del certificado no se verifica.  
*(\*\*)* Para más información sobre las direcciones IPv6 en urls, consulte [RFC 2732](https://www.ietf.org/rfc/rfc2732.txt). 

Después de la ejecución del comando, el parámetro *respuesta* recupera el resultado de la petición devuelto por el servidor. Este resultado corresponde al cuerpo (body) de la respuesta, sin los encabezados (headers).  
Puede pasar variables de diferentes tipos en *respuesta*:

* Texto: cuando el resultado se espera en forma de texto (ver nota abajo)
* BLOB: cuando el resultado se espera en forma binaria.
* Imagen: cuando el resultado se espera en forma de imagen.
* Objeto: cuando el resultado se espera en forma de objeto *C\_OBJECT*.

**Nota:** cuando se pasa una variable de texto en *respuesta*, 4D intentará decodificar los datos devueltos desde el servidor. 4D primero intenta recuperar el conjunto de caracteres del encabezado de *tipo de contenido*, luego del contenido utilizando un BOM y, finalmente, busca cualquier atributo *http-equiv charset* (en contenido html) o *codificación* (para xml). Si no se puede detectar ningún charset, 4D intentará decodificar la respuesta en ANSI. Si la conversión falla, el texto resultante quedará vacío. Si no está seguro de si el servidor devuelve una información charset o BOM, pero conoce la codificación, es más preciso pasar *respuesta* en BLOB y llamar al [Convert to text](convert-to-text.md).

Si pasa un BLOB, contendrá el texto, la imagen o todo tipo de contenido (.wav, .zip, etc.) devuelto por el servidor. A continuación, debe gestionar la recuperación de estos contenidos (los encabezados no están incluidos en el BLOB). Si pasa un objeto de tipo *C\_OBJECT*, si la petición devuelve un resultado con el contenido tipo texto, 4D intenta analizar el contenido JSON y devuelve el resultado analizado como un objeto, de lo contrario, se devuelve un objeto *4D.Blob*.

En *nomEncab* y *valoresEncab* pase los arrays que contienen los nombres y los valores de los encabezados de la petición.  
Después de la ejecución del método, estos arrays contienen los nombres y los valores de los encabezados devueltos por el servidor HTTP. Más específicamente, este principio le permite administrar sus cookies.   
  
El parámetro *\** permite activar el mecanismo keep-alive para la conexión al servidor. Por defecto, este parámetro se omite, keep-alive no está activo.   
  
El comando devuelve el código del estado HTTP estándar (200=OK...) tal como fue devuelto por el servidor. La lista de códigos de estado HTTP está en el *RFC 2616*.  
Si la conexión al servidor no es posible por una razón relacionada con la red (DNS Failed, Server not reachable...), el comando devuelve 0 y se genera un error. Puede interceptar estos errores utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md).

#### Ejemplo 1 

Recuperación del logo 4D en el sitio web de 4D:

```4d
 var URLPic_t : Text
 URLPic_t:="http://www.4d.com/sites/all/themes/dimention/images/home/logo4D.jpg"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 var Pic_i : Picture
 $httpResponse:=HTTP Get(URLPic_t;Pic_i;HeaderNames_at;HeaderValues_at)
```

#### Ejemplo 2 

Recuperación de un RFC:

```4d
 var URLText_t : Text
 var Text_t : Text
 URLText_t:="http://tools.ietf.org/rfc/rfc1.txt"
 ARRAY TEXT(HeaderNames_at;0)
 ARRAY TEXT(HeaderValues_at;0)
 $httpResponse:=HTTP Get(URLText_t;Text_t;HeaderNames_at;HeaderValues_at)
```

#### Ejemplo 3 

Recuperación de un vídeo:

```4d
 var vBlob : Blob
 $httpResponse:=HTTP Get("http://www.example.com/video.flv";vBlob)
 BLOB TO DOCUMENT("video.flv";vBlob)
```

#### Ver también 

[HTTP Request](http-request.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1157 |
| Hilo seguro | &check; |
| Modifica variables | error |


