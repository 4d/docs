---
id: read-picture-file
title: READ PICTURE FILE
slug: /commands/read-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.READ PICTURE FILE.Syntax-->**READ PICTURE FILE** ( *nomArchivo* ; *imagen* {; *} )<!-- END REF-->
<!--REF #_command_.READ PICTURE FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Nombre o ruta de acceso completa del archivo a leer, o cadena vacía |
| imagen | Picture | &#8592; | Campo o variable que recibe la imagen |
| * | Operador | &#8594;  | Si se pasa = acepta todo tipo de archivo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.READ PICTURE FILE.Summary-->El comando READ PICTURE FILE permite abrir la imagen guardada en el archivo del disco *nomArchivo* y cargarla en el campo o variable 4D *imagen*.<!-- END REF-->

Puede pasar en *nomArchivo* la ruta de acceso completa del archivo a leer, o únicamente el nombre del archivo. Si solo pasa el nombre del archivo, el archivo será ubicado junto al archivo de estructura de la base. Bajo Windows, igualmente debe indicar la extensión del archivo.

Si pasa una cadena vacía ("") en *nomArchivo*, aparece la caja de diálogo estándar de apertura de archivos, permitiendo al usuario seleccionar el archivo a leer, así como los formatos disponibles. 

Puede obtener la lista de formatos disponibles con la ayuda del comando [PICTURE CODEC LIST](picture-codec-list.md "PICTURE CODEC LIST").

Pase en *imagen* la variable o el campo imagen que deba recibir la imagen leída.

**Nota:** el formato interno de la imagen se almacena dentro de la variable o campo 4D. 

Si pasa el parámetro opcional *\**, el comando aceptará todo tipo de archivo. Esto significa que puede trabajar con imágenes sin necesariamente disponer de los codecs adecuados (ver la descripción del comando [BLOB TO PICTURE](blob-to-picture.md)).

#### Variables y conjuntos del sistema 

Si la ejecución del comando es correcta, la variable sistema Document contiene la ruta de acceso completa al archivo abierto y la variable sistema OK toma el valor 1\. De lo contrario, OK toma el valor 0.

#### Ver también 

[BLOB TO PICTURE](blob-to-picture.md)  
*Imágenes*  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  