---
id: wp-bookmark-range
title: WP Bookmark range
slug: /WritePro/commands/wp-bookmark-range
displayed_sidebar: docs
---

<!--REF #_command_.WP Bookmark range.Syntax-->**WP Bookmark range** ( *docWP* : Object ; *nomSignet* : Text ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Bookmark range.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomSignet | Text | &#8594;  | Nom du signet dont vous souhaitez récupérer la plage |
| Résultat | Object | &#8592; | Plage du signet |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WP Bookmark range.Summary-->La commande **WP Bookmark range** retourne un objet de type plage (objPlage) contenant la plage associée au signet nommé *nomSignet* dans le document *docWP*.<!-- END REF-->

Si le signet *nomSignet* n'existe pas dans *docWP*, un objet plage objPlage vide est retourné.

## Exemple 

Vous souhaitez faire apparaître la plage associée au signet "MyBookmark" dans votre document :

```4d
 var $wpRange : Object
 $wpRange:=WP Bookmark range(WParea;"MyBookmark")
 WP SELECT(WParea;$wpRange)
```

## Voir aussi 

[WP DELETE BOOKMARK](../commands/wp-delete-bookmark)  
[WP GET BOOKMARKS](../commands/wp-get-bookmarks)  
[WP NEW BOOKMARK](../commands/wp-new-bookmark)  
[WP Text range](../commands/wp-text-range)  
