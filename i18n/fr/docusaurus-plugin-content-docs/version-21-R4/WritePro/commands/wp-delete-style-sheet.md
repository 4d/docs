---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *styleSheetObj* : Object )<br/>**WP DELETE STYLE SHEET** (*wpDoc* : Object ; *styleSheetName* : Text {; *listLevelIndex* : Integer })<!-- END REF-->

<!--REF #_command_.WP DELETE STYLE SHEET.Params-->

<div class="no-index">

| Paramètres     | Type    |                             | Description                                      |
| -------------- | ------- | --------------------------- | ------------------------------------------------ |
| styleSheetObj  | Object  | &#8594; | Objet feuille de style                           |
| wpDoc          | Object  | &#8594; | Document 4D Write Pro                            |
| listLevelIndex | Integer | &#8594; | Niveau de la feuille de style dans la hiérarchie |
| styleSheetName | Text    | &#8594; | Nom de la feuille de style                       |

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

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->La commande **WP DELETE STYLE SHEET** supprime la feuille de style de paragraphe ou de caractère désignée du document en cours.<!-- END REF--> Lorsqu'une feuille de style est supprimée, tous les caractères ou paragraphes auxquels elle s'appliquait reprennent leur style d'origine (c'est-à-dire la valeur par défaut).

Cette commande propose deux façons de supprimer une feuille de style. Vous pouvez spécifier :

- l'objet feuille de style (créé avec la commande [WP New style sheet](../WritePro/commands/wp-new-style-sheet) ou renvoyé par la commande [WP Get style sheet](../WritePro/commands/wp-get-style-sheet)) à supprimer via le paramètre *styleSheetType*, ou
- le document 4D Write Pro ainsi que le nom de la feuille de style à supprimer dans les paramètres *wpDoc* et *styleSheetName*.

Lorsque la feuille de style à supprimer appartient à une [feuille de style de liste hiérarchique](../user-legacy/stylesheets.md#hierarchical-list-style-sheets), le comportement dépend du niveau supprimé. Vous pouvez supprimer :

- la feuille de style au niveau de la racine, ou
- une feuille de style de sous-niveau spécifique en fournissant le paramètre facultatif *listLevelIndex*.

Lorsque vous supprimez la feuille de style du niveau racine (en passant 1 dans le paramètre *listLevelIndex* ou en l'omettant), toutes les feuilles de style des sous-niveaux associés sont automatiquement supprimées et l'ensemble de la structure hiérarchique est supprimée du document.

Lorsque vous supprimez une feuille de style de sous-niveau :

- L'indice `wk list level index` de toutes les feuilles de style de sous-niveau suivantes est décrémenté pour maintenir une numérotation continue des niveaux.
- Les noms des feuilles de style de sous-niveau concernées sont mis à jour pour refléter leur nouvel indice de niveau.
- L'attribut `wk list level count` de la feuille de style racine et de toutes les autres feuilles de style de sous-niveau est décrémenté pour correspondre au nouveau nombre total de niveaux.

La commande ne fait rien si le niveau spécifié n'existe pas, ou si la feuille de style ne fait pas partie d'une liste hiérarchique et que *listLevelIndex* est supérieur à 1.

**Note** : La feuille de style par défaut ("Normal") ne peut pas être supprimée.

## Exemple 1

Pour supprimer une feuille de style de caractère "MyCharStyle" :

```4d
WP DELETE STYLE SHEET(wpArea; "MyCharStyle")
```

## Exemple 2

L'exemple suivant supprime le deuxième niveau d'une feuille de style de liste hiérarchique :

```4d
// Supprimer le niveau 2 de la feuille de style hiérarchique "MainList"
WP DELETE STYLE SHEET(wpArea ; "MainList" ; 2)
```

Après l'exécution :

- Les valeurs d'indice `wk list level index` sont mises à jour (l'ancien niveau 3 devient le niveau 2).
- Le nombre `wk list level count` est décrémenté.

Pour supprimer l'ensemble de la feuille de style hiérarchique (racine et tous les sous-niveaux associés) :

```4d
WP DELETE STYLE SHEET(wpArea; "MainList")
```

## Voir également

[Style sheets](../user-legacy/stylesheets.md)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../commands-legacy/wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheet)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)