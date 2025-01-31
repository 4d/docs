---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *docWP* ; *type* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| type | Integer | &#8594;  | Type de la feuille de style |
| Résultat | Collection | &#8592; | Collection d'objets feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get style sheets.Summary-->La commande **WP Get style sheets** retourne une collection de tous les objets feuille de style du *type* défini dans *docWP*.<!-- END REF-->

Dans le paramètre docWP, passez le document 4D Write Pro avec les feuilles de style que vous souhaitez lire.

Le paramètre *type* indique le type de la feuille de style à retourner. Les types disponibles sont :

* wk type character pour les feuilles de style de caractère
* wk type paragraph pour les feuilles de style de paragraphe

#### Exemple 

Vous souhaitez récupérer une collection de toutes les feuilles de style de caractère :

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

#### Voir aussi 

*Accéder au contenu des documents par programmation*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  