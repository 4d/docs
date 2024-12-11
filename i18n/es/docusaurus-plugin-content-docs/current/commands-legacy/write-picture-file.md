---
id: write-picture-file
title: WRITE PICTURE FILE
slug: /commands/write-picture-file
displayed_sidebar: docs
---

<!--REF #_command_.WRITE PICTURE FILE.Syntax-->**WRITE PICTURE FILE** ( *nomArchivo* ; *imagen* {; *codec*} )<!-- END REF-->
<!--REF #_command_.WRITE PICTURE FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomArchivo | Text | &#8594;  | Nombre o ruta de acceso completo del archivo a escribir, o cadena vacía |
| imagen | Picture | &#8594;  | Campo o variable imagen a escribir |
| codec | Text | &#8594;  | Identificación de codec de imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WRITE PICTURE FILE.Summary-->El comando WRITE PICTURE FILE permite guardar en un archivo en el disco la imagen pasada en el parámetro *imagen,* en el formato definido por *codec*.<!-- END REF--> 

Puede pasar en *nomArchivo* la ruta de acceso completa del archivo a crear, o únicamente el nombre del archivo. Si solo pasa el nombre del archivo, el archivo será ubicado junto al archivo de estructura de la base.   
  
Tiene que indicarse la extensión del archivo.

Si pasa una cadena vacía ("") en *nomArchivo*, aparece la caja de diálogo estándar de registro, permitiendo al usuario indicar el nombre, ubicación y formato del archivo a crear. Si se ha asociado un nombre por defecto al campo Imagen, se suministra en la caja de diálogo (ver el comando [SET PICTURE FILE NAME](set-picture-file-name.md)).

Pase en *imagen* la variable o campo imagen que contiene la imagen a almacenar en el disco.

El parámetro opcional *codec* permite definir el formato en el cual la imagen se guardará. Un codec puede ser una extensión (por ejemplo ".gif") o un tipo Mime (por ejemplo "image/jpg").  
 Puede obtener una lista de codecs disponibles a través del comando [PICTURE CODEC LIST](picture-codec-list.md).

Si se omite el parámetro *codec*, el comando intentará determinar el *codec* basado en la extensión del nombre del archivo pasado en el parámetro *nomArchivo*. Por ejemplo, si pasa la instrucción:  

```4d
 WRITE PICTURE FILE("c:\folder\photo.jpg";myphoto)
```

  
... el comando utilizará el codec JPEG para guardar la imagen.   
Si la extensión utilizada no corresponde a ningún codec disponible, el archivo no se guarda y la variable sistema OK toma el valor 0\. Si no pasa un *codec* o un archivo de extensión, el archivo imagen se guarda en formato PICT. 

**Nota:** si el formato de escritura de *imagen* (indicado vía la extensión del *nomArchivo* o el parámetro *codec*) es igual a su tipo original y si ninguna operación de transformación se ha aplicado, la imagen se escribe "tal cual", sin ninguna modificación. 

Si la ejecución del comando es correcta, la variable sistema Document contiene la ruta de acceso completa al archivo creado y la variable sistema OK toma el valor 1\. De lo contrario, OK toma el valor 0.

#### Ver también 

*Imágenes*  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  
[SET PICTURE FILE NAME](set-picture-file-name.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 680 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document |
| Prohibido en el servidor ||


