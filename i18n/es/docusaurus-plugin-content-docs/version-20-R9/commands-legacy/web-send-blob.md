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

## Descripción 

<!--REF #_command_.WEB SEND BLOB.Summary-->El comando **WEB SEND BLOB** permite enviar el BLOB *blob* al navegador.<!-- END REF--> 

El tipo de datos contenidos en el BLOB es indicado por *tipo*. Este parámetro puede contener los siguientes valores: 

* *tipo* \= **Cadena vacía** (""): en este caso, no necesita dar más información en el BLOB. El navegador intentará interpretar los contenidos del BLOB.
* *tipo* \= **Extensión de archivo** (Ejemplo: ".HTM", ".GIF", ".JPEG", etc.): en este caso, especifique el navegador, por intermedio de su extensión, el tipo MIME de los datos contenidos en el BLOB. El BLOB será interpretado de acuerdo a su extensión. Sin embargo, la extensión debe ser estándar para que el navegador pueda interpretarla correctamente.
* *tipo* \= **Mime/Tipo** (Ejemplo: “text/html”, “image/tiff”, etc.): en este caso, especifique directamente al navegador el tipo MIME de los datos contenidos en el BLOB. Esta solución ofrece más libertad. Además, los tipos estándar, puede pasar un tipo MIME personalizado para enviar los documentos propietarios en Intranet. Para hacerlo, sólo necesita configurar los navegadores con el fin de reconocer el tipo enviado y ejecutar la aplicación correspondiente. El valor a pasar en el parámetro *tipo* es, en este caso, “application/x-\[NombreTipo\]”. En los navegadores de los equipos clientes, usted referencia este tipo y lo asocia a la acción “Launch the application”. El comando **WEB SEND BLOB** permite entonces enviar documentos de todo tipo, los clientes Intranet abren automáticamente la aplicación asociada.  
    
**Nota:** para mayor información sobre los tipos MIME, consulte la página: <http://www.iana.org/assignments/media-types>.

La lista de tipos MIME y sus extensiones de archivo soportados por el servidor 4D HTTP se guarda en el archivo "MimeTypes.xml" que se encuentra en la  carpeta "Resources" de la aplicación 4D.
  
Las referencias a las variables 4D y etiquetas de tipo *4DSCRIPT* en la página siempre se analizan.

## Ejemplo 

Consulte el ejemplo de la rutina [PICTURE TO BLOB](picture-to-blob.md).

## Ver también 

[WEB SEND FILE](web-send-file.md)  

## Propiedades

|  |  |
| --- | --- |
| Número de comando | 654 |
| Hilo seguro | &check; |


