---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *docWP* ; *nomFeuilleStyle* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |
| Résultat | Object | &#8592; | Objet feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get style sheet.Summary-->La commande **WP Get style sheet** retourne l'objet feuille de style désigné par le *nomFeuilleStyle*.<!-- END REF-->

Dans *docWP*, passez le document 4D Write Pro qui contient la feuille de style.

Le paramètre nomFeuilleStyle vous permet de renseigner le nom de la feuille de style à retourner. Si le nom de la feuille de style n'existe pas dans docWP, un objet null est retourné.

#### Exemple 

Pour récupérer la feuille de style "Titre principal" :

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Titre principal")
 If($styleSheet=Null) // vérifier si la feuille de style existe //si ce n'est pas le cas, crééz-la
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Titre principal")
 End if
```

#### Voir aussi 

*Accéder au contenu des documents par programmation*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  