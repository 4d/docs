---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer } ) : Object<!-- END REF-->

<!--REF #_command_.WP Get style sheet.Params-->

<div class="no-index">

| Paramètres     | Type    |                             | Description                                      |
| -------------- | ------- | --------------------------- | ------------------------------------------------ |
| wpDoc          | Object  | &#8594; | Document 4D Write Pro                            |
| styleSheetName | Text    | &#8594; | Nom de la feuille de style                       |
| listLevelIndex | Integer | &#8594; | Niveau de la feuille de style dans la hiérarchie |
| Résultat       | Object  | &#8592; | Objet feuille de style                           |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release  | Modifications                       |
| -------- | ----------------------------------- |
| 4D 21 R3 | Ajout du paramètre *listLevelIndex* |
| 4D 18    | Created                             |

</details>
</div>

## Description

<!--REF #_command_.WP Get style sheet.Summary-->La commande **WP Get style sheet** renvoie l'objet feuille de style désigné par *styleSheetName* ou par le nom de la feuille de style et *listLevelIndex* dans le cas d'une [feuille de style de liste hiérarchique](../user-legacy/stylesheets.md#hierarchical-list-style-sheets).<!-- END REF-->

Dans *wpDoc*, passez le document 4D Write Pro qui contient la feuille de style.

Le paramètre *styleSheetName* permet de spécifier le nom de la feuille de style à retourner. Si le nom de la feuille de style n'existe pas dans *wpDoc*, un objet null est renvoyé.

Si *styleSheetName* est le nom du niveau racine d'une feuille de style de liste hiérarchique, vous pouvez éventuellement spécifier le paramètre *listLevelIndex* pour récupérer un niveau spécifique de la hiérarchie.

- *listLevelIndex* représente le niveau de la feuille de style dans la hiérarchie (1 = niveau racine, 2 = premier sous-niveau, etc.).
- Si le paramètre est omis et que la feuille de style est hiérarchique, la feuille de style du niveau racine est renvoyée.
- Si le niveau demandé n'existe pas, un objet null est renvoyé.
- Si la feuille de style n'est pas une feuille de style de liste hiérarchique et que *listLevelIndex* est supérieur à 1, un objet null est renvoyé.

## Exemple 1

Pour récupérer la feuille de style "Main title" :

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // check if the style sheet exists//if not create it
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

## Exemple 2

Pour récupérer un niveau spécifique d'une feuille de style de liste hiérarchique :

```4d
var $rootStyle : Object
var $subLevelStyle : Object

// Récupérer la feuille de style du niveau racine
$rootStyle:=WP Get style sheet(wpArea ; "MainList")

// Récupérer le deuxième niveau (premier sous-niveau)
$subLevelStyle:=WP Get style sheet(wpArea ; "MainList";2)

If($subLevelStyle=Null)
    ALERT("Le niveau demandé n'existe pas.")
End if
```

## Voir également

[Style sheets](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)