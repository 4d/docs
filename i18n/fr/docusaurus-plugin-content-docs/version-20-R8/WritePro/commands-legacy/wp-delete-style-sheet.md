---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *objFeuilleStyle* ) | (*docWP* ; *nomFeuilleStyle* )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objFeuilleStyle | Object | &#8594;  | Objet feuille de style |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->La commande **WP DELETE STYLE SHEET** retire la feuille de style de paragraphe ou de caractère désignée du document courant.<!-- END REF--> Lorsqu'une feuille de style est retirée, chaque caractère ou paragraphe auquel elle s'appliquait reprend le style original (*i.e.* par défaut).

Cette commande offre deux manières de retirer une feuille de style. Vous pouvez indiquer :

* l'objet feuille de style (créé à l'aide de [WP New style sheet](wp-new-style-sheet.md) ou retourné par la commande [WP Get style sheet](wp-get-style-sheet.md)) à retirer dans le paramètre *typeFeuilleStyle*, ou
* le document 4D Write Pro avec le nom de la feuille de style à retirer dans les paramètres *docWP* et nomFeuilleStyle.

**Note** : La feuille de style par défaut ("Normal") ne peut pas être supprimée.

#### Voir aussi 

*Accéder au contenu des documents par programmation*  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  