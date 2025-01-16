---
id: wp-delete-picture
title: WP DELETE PICTURE
slug: /WritePro/commands/wp-delete-picture
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE PICTURE.Syntax-->**WP DELETE PICTURE**  ( *objImagen* )<!-- END REF-->
<!--REF #_command_.WP DELETE PICTURE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objImagen | Object | &#8594;  | Objeto de la imagen (en línea o anclada) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE PICTURE.Summary-->El comando **WP DELETE PICTURE**  elimina la imagen definida por el parámetro *objImagen*.<!-- END REF-->

Si no existe una imagen, el comando no hace nada.

#### Ejemplo 

Desea eliminar una imagen utilizando su ID:

```4d
 var $myPicture : Object
 
  // obtener la imagen
 $myPicture:=WP Get element by ID(myDoc;"Logo")
 
  // Eliminar la imagen
 WP DELETE PICTURE($myPicture)
```

#### Ver también 

*Gestión de imágenes*  
[WP Add picture](../commands/wp-add-picture.md)  