---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *docCible* ; *docSource* )<!-- END REF-->
<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docCible | Object | &#8594;  | Document 4D Write Pro qui reçoit les feuilles de style |
| docSource | Object | &#8594;  | Document 4D Write Pro contenant les feuilles de style à lire |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->La commande **WP IMPORT STYLE SHEETS** importe toutes les feuilles de style du *docSource* vers *docCible*.<!-- END REF-->

Dans le paramètre docCible, passez le document 4D Write Pro qui recevra les feuilles de style importées.

Dans le paramètre *docSource*, passez le document 4D Write Pro contenant les feuilles de style à importer. 

**Note** : Si une feuille de style provenant de *docSource* possède le même nom qu'une feuille de style de docCible, la feuille de style importée écrasera (remplacera) la feuille de style dans docCible.

#### Exemple 

Vous souhaitez importer une feuille de style nommée template et recevoir une notification avec le numéro de chaque type de feuille de style importée :

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" feuille(s) de style de paragraphe "+chaine($nb2)+"feuille(s) de style de caractère importée(s)))
```

#### Voir aussi 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  