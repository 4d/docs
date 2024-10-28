---
id: wp-delete-bookmark
title: WP DELETE BOOKMARK
slug: /WritePro/commands/wp-delete-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE BOOKMARK.Syntax-->**WP DELETE BOOKMARK** ( *docWP* ; *nombk* )<!-- END REF-->
<!--REF #_command_.WP DELETE BOOKMARK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| nombk | Text | &#8594;  | Nombre del marcador a eliminar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE BOOKMARK.Summary-->El comando **WP DELETE BOOKMARK** elimina el marcador llamado *nombk* de *docWP*.<!-- END REF-->

Si el marcador *nombk* no existe en *docWP*, el comando no hace nada.

#### Ejemplo 

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
    WP DELETE BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### Ver también 

[WP Bookmark range](wp-bookmark-range.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  