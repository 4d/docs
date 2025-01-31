---
id: wp-delete-bookmark
title: WP DELETE BOOKMARK
slug: /WritePro/commands/wp-delete-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE BOOKMARK.Syntax-->**WP DELETE BOOKMARK** ( *docWP* ; *nomSignet* )<!-- END REF-->
<!--REF #_command_.WP DELETE BOOKMARK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomSignet | Text | &#8594;  | Nom du signet à supprimer |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE BOOKMARK.Summary-->la commande **WP DELETE BOOKMARK** supprime de *docWP* le signet nommé *nomSignet*.<!-- END REF-->

Si le signet *nomSignet* n'existe pas dans *docWP*, la commande ne fait rien.

#### Exemple 

Vous souhaitez renommer un signet existant. Pour cela, vous devez créer un nouveau signet basé sur la même plage puis supprimer l'ancien :

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
    WP CREATE BOOKMARK($wpRange;$bookmarkNewName)
 End if
```

#### Voir aussi 

[WP Bookmark range](wp-bookmark-range.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  