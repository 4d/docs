---
id: base64-encode
title: BASE64 ENCODE
slug: /commands/base64-encode
displayed_sidebar: docs
---

<!--REF #_command_.BASE64 ENCODE.Syntax-->**BASE64 ENCODE** ( *aCodificar* {; *codificado*}{; *} )<!-- END REF-->
<!--REF #_command_.BASE64 ENCODE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| aCodificar | Blob, Text | &#8594;  | Valor a codificar |
| &#8592; | Valor codificado (si el parámetro codificado se omite) |
| codificado | Blob, Text | &#8592; | Varlor codificado |
| * | Operador | &#8594;  | Codificado en formato Base64URL |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BASE64 ENCODE.Summary-->El comando **BASE64 ENCODE** encodes the text or blob value passed in the *toEncode* parameter in Base64 or Base64URL format.<!-- END REF--> 

La codificación base64 modifica los datos codificados sobre 8 bits de manera que no conserven más de 7 bits útiles. Esta codificación es necesaria, por ejemplo, para la manipulación de BLOBs utilizando XML. Base64URL es una codificación alernativa con un procesamiento específico para las URLs y nombres de archivos (ver [rfc4648](https://tools.ietf.org/html/rfc4648#section-5)). 

Pase en *aCodificar* un valor texto o blob a codificar.

**Nota:** cuando se pasa un valor texto, el comando codifica la representación utf-8 del texto.

Si pasa el parámetro *codificado*, recibe los contenidos codificado de *aCodificar* como texto o blob al final de la ejecución del comando. En este caso, el parámetro *aCodificar* mismo no es modificado por el comando.

Si omite el parámetro *codificado*, el comando modifica directamente el parámetro *aCodificar*.

Por defecto, si se omite el parámetro *\**, el comando utiliza una codificación Base64\. Si pasa el parámetro *\**, el comando utiliza una codificación Base64URL.

#### Ver también 

[BASE64 DECODE](base64-decode.md)  
[Generate digest](generate-digest.md)  
*Presentación de los comandos XML DOM*  
[XML DECODE](xml-decode.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 895 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


