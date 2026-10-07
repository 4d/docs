---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* : Object ; *sourceDoc* : Object )<!-- END REF-->

<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->

<div class="no-index">

| Paramètres | Type   |                             | Description                                                 |
| ---------- | ------ | --------------------------- | ----------------------------------------------------------- |
| targetDoc  | Object | &#8594; | Document 4D Write Pro qui reçoit les feuilles de style      |
| sourceDoc  | Object | &#8594; | Document 4D Write Pro pour obtenir des feuilles de style de |

</div>
<!-- END REF-->

## Description

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->La commande **WP IMPORT STYLE SHEETS** importe toutes les feuilles de style du *sourceDoc* dans le *targetDoc*.<!-- END REF-->

Dans le paramètre *targetDoc*, passez le document 4D Write Pro qui recevra les feuilles de style importées.

Dans le paramètre *sourceDoc*, passez le document 4D Write Pro contenant les feuilles de style à importer.

**Note** : Si une feuille de style de *sourceDoc* a le même nom qu'une feuille de style dans *targetDoc*, la feuille de style importée écrasera (remplace) la feuille de style dans le *targetDoc*.

## Exemple

Vous souhaitez importer une feuille de style nommée template et recevoir une notification avec le numéro de chaque type de feuille de style importée :

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

## Voir également

[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)