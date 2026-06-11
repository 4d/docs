---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *wpDoc* : Object ; *styleSheetType* : Integer ; *styleSheetName* : Text {; *listLevelCount* : Integer} ) : Object <!-- END REF-->

<!--REF #_command_.WP New style sheet.Params-->

<div class="no-index">

| Paramètres     | Type    |                             | Description                                |
| -------------- | ------- | --------------------------- | ------------------------------------------ |
| wpDoc          | Object  | &#8594; | Document 4D Write Pro                      |
| styleSheetType | Integer | &#8594; | Type de la feuille de style                |
| styleSheetName | Text    | &#8594; | Nom de la feuille de style                 |
| listLevelCount | Integer | &#8594; | Nombre total de niveaux dans la hiérarchie |
| Résultat       | Object  | &#8592; | Objet feuille de style                     |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

| Release  | Modifications                       |
| -------- | ----------------------------------- |
| 4D 18    | Created                             |
| 4D 21 R3 | Ajout du paramètre *listLevelCount* |

</details>
</div>

## Description

<!--REF #_command_.WP New style sheet.Summary-->La commande **WP New style sheet** crée un nouvel objet de feuille de style (vide) pour le *wpDoc* désigné.<!-- END REF-->

Dans le paramètre *wpDoc*, passez un document 4D Write Pro.

Le paramètre *styleSheetType* vous permet d'indiquer le type de la feuille de style, c'est-à-dire la partie du *wpDoc* qui sera affectée par la feuille de style. Deux types sont disponibles :

- wk type character: Applique les attributs de style aux caractères.
- wk type paragraph: Applique les attributs de style aux paragraphes (nécessaire si vous souhaitez créer des [feuilles de style de liste hiérarchique](#hierarchical-list-style-sheet)).

Passez un nom pour la feuille de style dans le paramètre *styleSheetName*. Le nom de la feuille de style est stocké avec le document et facilite la réutilisation ou la modification du style. Il peut également être utilisé avec les commandes [WP Get style sheet](../WritePro/commands/wp-get-style-sheet) et [WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet). Le nom de la feuille de style doit respecter les règles suivantes :

- il doit commencer par une lettre
- il peut alors contenir des caractères alphanumériques, des caractères d'espacement, des caractères "-" ou des caractères unicode >= 128
- il doit être unique dans le document, quel que soit le type
- il ne doit pas commencer par "section", qui est réservé
- le "\_" est remplacé par un espace et les espaces qui suivent sont supprimés.

Vous pouvez spécifier les attributs de la feuille de style en utilisant la commande [WP SET ATTRIBUTES](../commands/wp-set-attributes) ou la notation objet (voir [4D Write Pro Attributes](../commands-legacy/4d-write-pro-attributes.md)). Pour la liste des attributs disponibles, voir la section [Attributs des feuilles de style](../commands-legacy/4d-write-pro-attributes.md#style-sheets).

**Notes** :

- Une feuille de style ne modifie que l'affichage d'un caractère ou d'un paragraphe, et non la façon dont il est stocké dans le document. Si une feuille de style est supprimée, le texte reprendra le style par défaut.
- Tous les attributs de style qui ne sont pas définis dans la nouvelle feuille de style utiliseront automatiquement le style Normal. Pour plus d'informations, voir la page [*Feuilles de style*](../user-legacy/stylesheets.md).

### Feuille de style de liste hiérarchique

If the *styleSheetType* parameter is set to `wk type paragraph`, you can optionally pass the *listLevelCount* parameter to create a [multi-level list style sheet](../user-legacy/stylesheets.md#multi-level-list-style-sheets).

Le paramètre *listLevelCount* définit le nombre total de niveaux dans la hiérarchie. Lorsqu'elle est spécifiée (valeur ≥ 1), la commande crée automatiquement une feuille de style de niveau racine et les feuilles de style de niveau inférieur correspondantes.

Les valeurs prédéfinies suivantes sont appliquées :

- `wk list style type` est fixé à `wk decimal`
- `wk list level index` est automatiquement assigné (1 pour le niveau racine, incrémenté pour les sous-niveaux)
- `wk list level count` est fixé à la valeur spécifiée pour tous les niveaux
- `wk margin left` est automatiquement calculé (0,75 cm × indice de niveau ou 0,25 pouces \* indice de niveau, en fonction de l'unité de mise en page actuelle) : le décalage peut donc être différent selon que l'unité de mise en page est métrique ou en pouces (pour un meilleur alignement par défaut avec les graduations de la règle d'écriture courante).

Si le paramètre est omis ou fixé à 0, une feuille de style de paragraphe standard (non-liste) est créée.

## Exemple 1

Le code suivant crée et définit une feuille de style de paragraphe :

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 
  //définir les paramètres de la feuille de style
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP SET ATTRIBUTES($styleSheet;wk font size;"48pt")
 WP SET ATTRIBUTES($styleSheet;wk text color;"red")
 WP SET ATTRIBUTES($styleSheet;wk text align;wk left)
 
  //Appliquer la feuille de style au premier paragraphe
 var $Paragraphs : Collection
 $Paragraphs:=WP Get elements(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if
```

## Exemple 2

Le code suivant crée une feuille de style de liste hiérarchique à 3 niveaux :

```4d
var $mainList : Object

$mainList:=WP New style sheet(wpArea ; wk type paragraph ; "MainList" ; 3)

// La commande crée automatiquement :
// - 1 feuille de style de niveau racine (" MainList ")
// - 2 feuilles de style de niveau inférieur (" MainList lvl 2 " et " MainList lvl 3 ")

```

Résultat:

- La feuille de style racine :
  - `wk list level index` = 1
  - `wk list level count` = 3
  - `wk list style type` = `wk decimal`

- Les feuilles de style de sous-niveau :
  - ont des valeurs `wk list level index` incrémentées (2 et 3)
  - partagent le même `wk list level count`
  - sont automatiquement indentés (0,75 cm × indice de niveau)
  - font référence à la feuille de style racine via `wk root style`

## Voir également

[Style sheets](../user-legacy/stylesheets.md)  
[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../WritePro/commands/wp-import-style-sheets)
