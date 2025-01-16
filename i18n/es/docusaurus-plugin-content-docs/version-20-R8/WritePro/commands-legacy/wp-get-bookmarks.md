---
id: wp-get-bookmarks
title: WP GET BOOKMARKS
slug: /WritePro/commands/wp-get-bookmarks
displayed_sidebar: docs
---

<!--REF #_command_.WP GET BOOKMARKS.Syntax-->**WP GET BOOKMARKS** ( *docWP* ; *arrayNomMarcadores* )<!-- END REF-->
<!--REF #_command_.WP GET BOOKMARKS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Documento 4D Write Pro |
| arrayNomMarcadores | Array texto | &#x1F858; | Array de nombres de marcadores |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP GET BOOKMARKS.Summary-->El comando **WP GET BOOKMARKS** devuelve un array que contiene los nombres de todos los marcadores definidos en *docWP*.<!-- END REF--> 

Después de ejecutar el comando, *arrayNomMarcadores* se llena con todos los nombres de marcadores en el documento. En el array, los nombres están ordenados por posición de marcador dentro del documento.   
Si varios marcadores comienzan en la misma posición, se ordenan por orden alfabético.

#### Ejemplo 

Usted quieres saber el número de marcadores definidos en su documento:

```4d
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 ALERT("The document contains "+Size of array($_bookmarks)+" bookmarks.")
```

#### Ver también 

[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  