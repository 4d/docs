---
id: wp-new-bookmark
title: WP NEW BOOKMARK
slug: /WritePro/commands/wp-new-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP NEW BOOKMARK.Syntax-->**WP NEW BOOKMARK** ( *objRango* ; *nombk* )<!-- END REF-->
<!--REF #_command_.WP NEW BOOKMARK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objRango | Object | &#8594;  | Rango o elemento |
| nombk | Text | &#8594;  | Nombre de marcador a crear |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP NEW BOOKMARK.Summary-->El comando **WP NEW BOOKMARK** crea un nuevo marcador llamado *nombk* basado en el *objRango* 4D Write Pro del documento padre.<!-- END REF-->

Los marcadores son referencias con nombres a rangos o elementos, que le permiten acceder y reutilizar partes específicas del documento, por ejemplo para plantillas. Para más información, consulte la sección *Comandos Marcadores*.

En *targetObj*, puede pasar:

* un rango, o
* un elemento (cuerpo / array / línea / imagen en línea / párrafo)

**Nota**: si pasó un elemento en *objRango* , el marcador contendrá solo el elemento especificado.

En *nombk*, pase el nombre para el nuevo marcador. Un nombre de marcador debe ser compatible con los nombres HTML/CSS, es decir, que sólo puede contener caracteres alfanuméricos (caracteres no válidos, tales como los caracteres de espacio, se eliminan de forma automática). Los nombres de los marcadores deben ser únicos dentro del documento. Si un marcador con el mismo nombre ya existe en el documento, se sobrescribe.

Puede crear tantos marcadores como desee dentro del mismo documento. Varios marcadores pueden ser creados usando el mismo rango exacto. Una vez creado, un marcador se almacena automáticamente en el documento de nivel superior y se guarda con el documento en sí.

#### Ejemplo 1 

Usted quiere crear un nuevo marcador referenciando el texto seleccionado actualmente en el documento. Puede escribir:

```4d
 var $range : Object
 $range:=WP Selection range(*;"WPDocument")
 WP NEW BOOKMARK($range;"my_bookmark")
```

#### Ejemplo 2 

Usted quiere cambiar el nombre de un marcador existente. Para ello, es necesario crear un nuevo marcador con el mismo rango y luego, eliminar el anterior:

```4d
 var $bookmarkOldName : Text
 var $bookmarkNewName : Text
 var $p : Integer
 var $wpRange : Object
 
 $bookmarkOldName:="MyBookmark"
 $bookmarkNewName:="MyNewBookmark"
 
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 
 $p:=Find in array($_bookmarks;$bookmarkOldName)
 If($p>0)
    $wpRange:=WP Get bookmark range(WParea;$bookmarkOldName)
    WP DELETE BOOKMARK(WParea;$bookmarkOldName)
    WP NEW BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### Ver también 

  
[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  