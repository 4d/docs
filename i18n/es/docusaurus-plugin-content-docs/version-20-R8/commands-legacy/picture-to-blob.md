---
id: picture-to-blob
title: PICTURE TO BLOB
slug: /commands/picture-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.PICTURE TO BLOB.Syntax-->**PICTURE TO BLOB** ( *imagen* ; *blobImag* ; *codec* )<!-- END REF-->
<!--REF #_command_.PICTURE TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| imagen | Picture | &#8594;  | Campo o variable tipo imagen |
| blobImag | Blob | &#8592; | BLOB para recibir la imagen convertida |
| codec | Text | &#8594;  | Identificación de codec de imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.PICTURE TO BLOB.Summary-->El comando PICTURE TO BLOB convierte una imagen almacenada en una variable o en un campo 4D en otro formato y ubica la imagen resultante en un BLOB.<!-- END REF-->

Usted pasa en el parámetro *imagen* una variable o un campo 4D de tipo imagen y en el parámetro *blobImag* la variable o el campo BLOB el cual debe contener la imagen convertida. 

Pase en el parámetro *codec* una cadena indicando el formato de conversión. 

Un Codec puede ser una extensión (por ejemplo, "gif") o un tipo Mime (por ejemplo "image/jpg).  
 Puede obtener la lista de códigos disponibles vía el comando [PICTURE CODEC LIST](picture-codec-list.md). 

Una vez el comando ha sido ejecutado, *blobImagen* contiene la imagen en el formato especificado.

Si la conversión fue exitosa, la variable sistema OK toma el valor 1\. Si la conversión falla (convertidor no disponible), OK toma el valor 0 y el BLOB se genera vacío (0 byte).

#### Ejemplo 

Desea convertir una imagen de un formato propietario a formato GIF y mostrarlo en una página web estática. Puede utilizar un código como:

```4d
 var $picture : Picture
 var $BLOB : Blob
 var $path : Text
 
 $path:=Get 4D folder(Current resources folder)+"Images"+Folder separator+"Sunrise.psd" //encontrar la imagen en la carpeta Imágenes de la carpeta Recursos
 READ PICTURE FILE($path;$picture) //poner la imagen en la variable imagen
 
 PICTURE TO BLOB($picture;$BLOB;".gif") //convertir la imagen al formato ".gif"
 WEB SEND BLOB($BLOB;"image/gif")
```

#### Ver también 

[BLOB TO PICTURE](blob-to-picture.md)  
[PICTURE CODEC LIST](picture-codec-list.md)  
[WRITE PICTURE FILE](write-picture-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 692 |
| Hilo seguro | &check; |
| Modifica variables | OK |


