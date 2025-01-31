---
id: blob-to-picture
title: BLOB TO PICTURE
slug: /commands/blob-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO PICTURE.Syntax-->**BLOB TO PICTURE** ( *blobImag* ; *imagen* {; *codec*} )<!-- END REF-->
<!--REF #_command_.BLOB TO PICTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| blobImag | Blob | &#8594;  | BLOB contiene una imagen |
| imagen | Picture | &#8592; | Campo o variable imagen 4D |
| codec | Text | &#8594;  | Identificador de codec de imagen |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB TO PICTURE.Summary-->El comando BLOB TO PICTURE inserta una imagen almacenada en un BLOB en un campo o variable imagen 4D, sin importar su formato original.<!-- END REF-->

Este comando es similar al comando [READ PICTURE FILE](read-picture-file.md), simplemente se aplica a un BLOB en lugar de a un archivo. Esto permite mostrar imágenes almacenadas en formato nativo en los BLOBs. Puede cargar una imagen en un BLOB utilizando, por ejemplo, el comando [DOCUMENT TO BLOB](document-to-blob.md) o [PICTURE TO BLOB](picture-to-blob.md).

En el parámetro *blobImag* se pasa el campo o imagen BLOB que contiene la imagen. La imagen puede estar en cualquier formato soportado nativamente por 4D. Puede obtener la lista de formatos disponibles utilizando el comando [PICTURE CODEC LIST](picture-codec-list.md). Si pasa el parámetro opcional *codec*, 4D utilizará el valor en este parámetro para decodificar el BLOB (ver el funcionamiento específico del comando con este tercer parámetro a continuación).

Pase en el parámetro *imagen* la variable o el campo 4D de tipo imagen el cual debe mostrar la imagen. 

**Nota:** el formato interno de la imagen se conserva dentro de la variable o campo 4D. 

Después de la ejecución del comando, *imagen* contiene la imagen a mostrar en 4D.

El parámetro opcional *codec* le permite especificar el codec a utilizar para la decodificación del BLOB.

Si pasa en *codec* un codec reconocido por 4D (devuelto por el comando [PICTURE CODEC LIST](picture-codec-list.md) ), se aplica al BLOB y la imagen se devuelve en el campo o variable imagen. 

Si pasa en *codec* un codec no reconocido por 4D, un nuevo codec se registra dinámicamente con el identificador pasado en el parámetro. 4D devuelve una imagen que encapsula el BLOB y la variable OK toma el valor 1\. En este caso, para recuperar el BLOB deberá utilizar el comando [PICTURE TO BLOB](picture-to-blob.md) con el mismo identificador personalizado. Este mecanismo en particular puede utilizarse para cumplir con dos necesidades específicas: 

* encapsulación de un BLOB (que no es una imagen) en una imagen,
* carga de una imagen sin utilizar un codec.

La implementación de estos mecanismos permite, más específicamente, la creación de "arrays de BLOBs " vía arrays de imagen. Este técnica debe utilizarse con precaución porque como los arrays se cargan completamente en la memoria, trabajar con BLOBs de gran tamaño puede afectar el funcionamiento de la aplicación. 

**Nota**: un BLOB creado por el comando [VARIABLE TO BLOB](variable-to-blob.md) se administra automáticamente; no es necesario pasar un codec para encapsularlo ya que el BLOB está "firmado". En este caso, para la operación contraria, deberá pasar ".4DVarBlog" como identificador de codec al comando [PICTURE TO BLOB](picture-to-blob.md). 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. Si la conversión ha fallado (QuickTime no está instalado, el BLOB no contiene una imagen legible, parámetro codec reconocido pero no validado por el BLOB , etc.), OK toma el valor 0 y el campo o variable imagen 4D se devuelve vacío.

#### Ver también 

[PICTURE CODEC LIST](picture-codec-list.md)  
[PICTURE TO BLOB](picture-to-blob.md)  
[READ PICTURE FILE](read-picture-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 682 |
| Hilo seguro | &check; |
| Modifica variables | OK |


