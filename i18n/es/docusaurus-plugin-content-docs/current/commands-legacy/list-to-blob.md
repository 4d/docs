---
id: list-to-blob
title: LIST TO BLOB
slug: /commands/list-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LIST TO BLOB.Syntax-->**LIST TO BLOB** ( *lista* ; *BLOB* {; *} )<!-- END REF-->
<!--REF #_command_.LIST TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Lista jerárquica a almacenar en el BLOB |
| Blob | Blob | &#8594;  | BLOB a recibir la lista jerárquica |
| * | Operador | &#8594;  | * añadir el valor |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LIST TO BLOB.Summary-->El comando LIST TO BLOB almacena la lista jerárquica *list* en el BLOB *blob*.<!-- END REF-->

Si especifica el parámetro opcional \*, la lista jerárquica se añade al final del BLOB y el tamaño del BLOB se extiende en consecuencia. Utilizando el parámetro opcional \*, usted puede almacenar secuencialmente todo número de variables o listas (ver otros comandos BLOB) en un BLOB, siempre y cuando haya memoria suficiente. 

Si no especifica el parámetro opcional \*, la lista jerárquica se almacena al inicio del BLOB, reescribiendo su contenido anterior; el tamaño del BLOB se ajusta en consecuencia. 

Cualquiera que sea el lugar donde la lista esté almacenada, el tamaño del BLOB aumentará si es necesario de acuerdo a la ubicación especificada (hasta el tamaño de la lista si es necesario). Los bytes modificados (diferentes de los que usted definió) se inicializan en 0 (cero). 

**Advertencia:** si utiliza un BLOB para almacenar listas, luego debe llamar el comando [BLOB to list](blob-to-list.md "BLOB to list") para releer el contenido del BLOB, porque las listas son almacenadas en BLOBs utilizando un formato interno 4D.

Después de llamar el comando, si la lista se ha guardado correctamente, la variable OK toma el valor 1\. Si la operación no pudo efectuarse, la variable OK toma el valor 0; por ejemplo, si no hubiera suficiente memoria disponible.

**Nota sobre la independencia de plataforma:** LIST TO BLOB y [BLOB to list](blob-to-list.md "BLOB to list") utilizan un formato interno 4D para administrar listas almacenadas en BLOBs. La ventaja es que usted no tiene que preocuparse por la conversión de bytes (byte swapping) entre plataformas cuando utiliza estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando estos comandos puede ser reutilizado en Macintosh, y viceversa.

##### Nota 

**Nota de compatibilidad**: como este comando altera el blob pasado como parámetro, no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

#### Ejemplo 

Ver el ejemplo del comando [BLOB to list](blob-to-list.md "BLOB to list").

#### Ver también 

[BLOB to list](blob-to-list.md)  
[BLOB TO VARIABLE](blob-to-variable.md)  
[SAVE LIST](save-list.md)  
[VARIABLE TO BLOB](variable-to-blob.md)  