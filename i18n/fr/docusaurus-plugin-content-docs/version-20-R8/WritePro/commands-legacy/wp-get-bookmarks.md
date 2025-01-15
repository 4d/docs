---
id: wp-get-bookmarks
title: WP GET BOOKMARKS
slug: /WritePro/commands/wp-get-bookmarks
displayed_sidebar: docs
---

<!--REF #_command_.WP GET BOOKMARKS.Syntax-->**WP GET BOOKMARKS** ( *docWP* ; *tabNomsSignets* )<!-- END REF-->
<!--REF #_command_.WP GET BOOKMARKS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| tabNomsSignets | Tableau texte | &#x1F858; | Tableau des noms de signets |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP GET BOOKMARKS.Summary-->La commande **WP GET BOOKMARKS** retourne un tableau contenant le nom de tous les signets définis dans le document *docWP*.<!-- END REF--> 

Après l'exécution de la commande, le tableau *tabNomSignets* est rempli avec tous les noms des signets du document. Dans le tableau, les noms sont triés en fonction de leur position dans le document. Si plusieurs signets débutent à la même position, ils sont triés par ordre alphabétique. 

#### Exemple 

Vous souhaitez connaître le nombre de signets définis dans votre document :

```4d
 ARRAY TEXT($_bookmarks;0)
 WP GET BOOKMARKS(WParea;$_bookmarks)
 ALERT("Le document contient "+Size of array($_bookmarks)+" signets.")
```

#### Voir aussi 

[WP Bookmark range](wp-bookmark-range.md)  
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP NEW BOOKMARK](wp-new-bookmark.md)  