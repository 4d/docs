---
id: wp-new-bookmark
title: WP NEW BOOKMARK
slug: /WritePro/commands/wp-new-bookmark
displayed_sidebar: docs
---

<!--REF #_command_.WP NEW BOOKMARK.Syntax-->**WP NEW BOOKMARK** ( *objCible* ; *nomSignet* )<!-- END REF-->
<!--REF #_command_.WP NEW BOOKMARK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| nomSignet | Text | &#8594;  | Nom du signet à créer |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP NEW BOOKMARK.Summary-->La commande **WP NEW BOOKMARK** crée un nouveau signet nommé *nomSignet* basé sur *objPlage* du document parent.<!-- END REF-->

Les signets sont des références nommées associées à des plages ou à des éléments, vous permettant de désigner et de réutiliser des parties spécifiques du document, par exemple pour les besoins liés à la génération de modèles. Pour plus d'informations, veuillez vous reporter à la section *Gestion des signets*. 

Dans *objCible*, vous pouvez passer :

* une plage 4D Write Pro, ou
* un élément (corps / tableau / ligne / image en ligne / paragraphe)

**Note :** Si vous passez un élément dans *objCible*, le signet contiendra uniquement l'élément défini. 

Dans *nomSignet*, passez le nom du nouveau signet. Un nom de signet doit être conforme aux règles de nommage HTML/CSS, *i.e*. il doit uniquement contenir des caractères alphanumériques (les caractères invalides, tels que les espaces, sont automatiquement supprimés). Chaque nom de signet doit être unique dans un document. Si un signet de même nom existe déjà dans le document, il est écrasé. 

Vous pouvez créer autant de signets que vous voulez dans un même document. Plusieurs signets peuvent être créés avec la même plage. Une fois créé, un signet est automatiquement stocké dans le document parent et est sauvegardé en même temps que le document lui-même. 

#### Exemple 1 

Vous souhaitez créer un nouveau signet référençant le texte couramment sélectionné dans le document. Vous pouvez écrire :

```4d
 var $range : Object
 $range:=WP Selection range(*;"WPDocument")
 WP NEW BOOKMARK($range;"my_bookmark")
```

#### Exemple 2 

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
[WP DELETE BOOKMARK](wp-delete-bookmark.md)  
[WP GET BOOKMARKS](wp-get-bookmarks.md)  