---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *docWP* ; *nomSignet* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomSignet | Text | &#8594;  | Nom du signet dont vous souhaitez récupérer la plage |
| Résultat | Object | &#8592; | Plage du signet |

<!-- END REF-->

#### Compatibilité 

<!--REF #_command_.WP Bookmark range.Summary-->La commande **WP Bookmark range** était nommée **WP Get bookmark range** dans les versions précédentes de 4D Write Pro.<!-- END REF--> Elle a été renommée pour plus de clarté. 

#### Description 

La commande **WP Bookmark range** retourne un objet de type plage (objPlage) contenant la plage associée au signet nommé *nomSignet* dans le document *docWP*.

Si le signet *nomSignet* n'existe pas dans *docWP*, un objet plage objPlage vide est retourné.

#### Exemple 

Vous souhaitez faire apparaître la plage associée au signet "MyBookmark" dans votre document :

```4d
 var $wpRange : Object
 $wpRange:=WP Bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

#### Voir aussi 

[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  
[WP Text range](wp-text-range.md)  