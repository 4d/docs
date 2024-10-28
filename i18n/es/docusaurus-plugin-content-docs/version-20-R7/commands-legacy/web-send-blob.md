---
id: web-send-blob
title: WEB SEND BLOB
slug: /commands/web-send-blob
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND BLOB.Syntax-->**WEB SEND BLOB** ( *BLOB* ; *tipo* )<!-- END REF-->
<!--REF #_command_.WEB SEND BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB a enviar al navegador |
| tipo | Text | &#8594;  | Tipo de datos del BLOB |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SEND BLOB.Summary-->El comando **WEB SEND BLOB** permite enviar el BLOB *blob* al navegador.<!-- END REF--> 

El tipo de datos contenidos en el BLOB es indicado por *tipo*. Este parámetro puede contener los siguientes valores: 

* *tipo* \= **Cadena vacía** (""): en este caso, no necesita dar más información en el BLOB. El navegador intentará interpretar los contenidos del BLOB.
* *tipo* \= **Extensión de archivo** (Ejemplo: ".HTM", ".GIF", ".JPEG", etc.): en este caso, especifique el navegador, por intermedio de su extensión, el tipo MIME de los datos contenidos en el BLOB. El BLOB será interpretado de acuerdo a su extensión. Sin embargo, la extensión debe ser estándar para que el navegador pueda interpretarla correctamente.
* *tipo* \= **Mime/Tipo** (Ejemplo: “text/html”, “image/tiff”, etc.): en este caso, especifique directamente al navegador el tipo MIME de los datos contenidos en el BLOB. Esta solución ofrece más libertad. Además, los tipos estándar, puede pasar un tipo MIME personalizado para enviar los documentos propietarios en Intranet. Para hacerlo, sólo necesita configurar los navegadores con el fin de reconocer el tipo enviado y ejecutar la aplicación correspondiente. El valor a pasar en el parámetro *tipo* es, en este caso, “application/x-\[NombreTipo\]”. En los navegadores de los equipos clientes, usted referencia este tipo y lo asocia a la acción “Launch the application”. El comando **WEB SEND BLOB** permite entonces enviar documentos de todo tipo, los clientes Intranet abren automáticamente la aplicación asociada.  
    
**Nota:** para mayor información sobre los tipos MIME, consulte la página: <http://www.iana.org/assignments/media-types>.

Esta es una lista de los tipos MIME más comunes:

| **Extensión** | **Mime/Tipo**            |
| ------------- | ------------------------ |
| .htm          | text/html                |
| .html         | text/html                |
| .shtml        | text/html                |
| .shtm         | text/html                |
| .css          | text/css                 |
| .pdf          | application/pdf          |
| .rtf          | application/rtf          |
| .ps           | application/postscript   |
| .eps          | application/postscript   |
| .hqx          | application/mac-binhex40 |
| .js           | application/javascript   |
| .json         | application/json         |
| .txt          | text/plain               |
| .text         | text/plain               |
| .gif          | image/gif                |
| .jpg          | image/jpeg               |
| .jpeg         | image/jpeg               |
| .jpe          | image/jpeg               |
| .jfif         | image/jpeg               |
| .pic          | image/pict               |
| .pict         | image/pict               |
| .tif          | image/tiff               |
| .tiff         | image/tiff               |
| .mpeg         | video/mpeg               |
| .mpg          | video/mpeg               |
| .mov          | video/quicktime          |
| .moov         | video/quicktime          |
| .aif          | audio/aiff               |
| .aiff         | audio/aiff               |
| .wav          | audio/wav                |
| .ram          | audio/x-pn-realaudio     |
| .sit          | application/x-stuffit    |
| .bin          | application/x-stuffit    |
| .xml          | application/xml          |
| .z            | application/x-zip        |
| .zip          | application/x-zip        |
| .gz           | application/x-gzip       |
| .tar          | application/x-tar        |

**Nota:** la lista de tipos MIME soportada por el servidor 4D HTTP se guarda en el archivo "MimeTypes.xml" que se encuentra en la siguiente carpta de la aplicación 4D: *\[Contents\]\\Native components\\HTTPServer.bundle\\Contents\\Resources*.   
  
Las referencias a las variables 4D y etiquetas de tipo *4DSCRIPT* en la página siempre se analizan.

#### Ejemplo 

Consulte el ejemplo de la rutina [PICTURE TO BLOB](picture-to-blob.md).

#### Ver también 

[WEB SEND FILE](web-send-file.md)  