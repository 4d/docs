---
id: set-menu-item-icon
title: SET MENU ITEM ICON
slug: /commands/set-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM ICON.Syntax-->**SET MENU ITEM ICON** ( *menu* ; *lineamenu* ; *refIcon*	 {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido |
| refIcon | Text, Integer | &#8594;  | Nombre o número de la librería de imágenes a asociar a la línea de menú |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM ICON.Summary-->El comando **SET MENU ITEM ICON** permite modificar el icono asociado a la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF-->  
Puede pasar -1 en *lineaMenu* para especificar el último elemento añadido a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el comando aplicará a todas las instancias del menú en todos los procesos. En este caso, si se pasa el parámetro *proceso* se ignora. Si pasa un número de menú, el comando tendrá en cuenta el menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

En *refIcon*, puede pasar el nombre o el número de la imagen de la librería a utilizar como icono. Puede utilizar una imagen de la librería (bases binarias únicamente) o una referencia a un archivo de imagen.

* Referencia de archivo de imagen. Se pueden utilizar dos tipos:  
   * **path:<filesystem>** (*recomendado*), por ejemplo "path:/RESOURCES/icon.png". Para mayor información, consulte el párrafo *Rutas a los Filesystem*.  
   * **file:<relativePathname>** (*obsoleto*), por ejemplo "file:icon.png". La imagen debe estar ubicada en la carpeta **Resources** de la base.
* Imagen de librería (bases binarias únicamente): puede pasar el nombre o el número de imagen. Por lo general es preferible utilizar su número en lugar del nombre ya que los números de imagen son identificadores únicos, que no es el caso con de los nombres.

**Nota:** se recomienda el uso de una ruta de archivo de imagen ya que la Librería de imágenes está en desuso y no es compatible con las bases de datos de proyectos 4D. Además, el tipo *file:<relativePathname>* es obsoleto, se recomienda utilizar *path:<filesystem>*.

#### Ejemplo 

Uso de una imagen ubicada en la carpeta Resources de la base:

```4d
 SET MENU ITEM ICON($MenuRef;2;"Path:/RESOURCES/english.lproj/spot.png")
```

#### Ver también 

[GET MENU ITEM ICON](get-menu-item-icon.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 984 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


