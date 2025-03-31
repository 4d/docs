---
id: wp-delete-bookmark
title: WP DELETE BOOKMARK
slug: /WritePro/commands/wp-delete-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE BOOKMARK.Syntax-->**WP DELETE BOOKMARK** ( *wpDoc* ; *nomBK* )<!-- END REF-->
<!--REF #_command_.WP DELETE BOOKMARK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | 4D Write Pro document |
| nomBK | Text | &#8594;  | Nome de bookmark a apagar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP DELETE BOOKMARK.Summary-->O comando **WP DELETE BOOKMARK** elimina o marcador chamado *nombk de* *docWP*.<!-- END REF-->

Se o marcador *nombk* não existir em *docWP*, o comando não faz nada.

#### Exemplo 

Se quiser renomear uma bookmark existente, precisa criar uma nova bookmark com a mesma faixa, e então apagar a antiga:

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

#### Ver também 

[WP Bookmark range](wp-bookmark-range.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  