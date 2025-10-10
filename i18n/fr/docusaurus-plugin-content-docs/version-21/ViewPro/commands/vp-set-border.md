---
id: vp-set-border
title: VP SET BORDER
---

<!-- REF #_method_.VP SET BORDER.Syntax -->

**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

| Paramètres     | Type   |    | Description                               |                  |
| -------------- | ------ | -- | ----------------------------------------- | ---------------- |
| rangeObj       | Object | -> | Objet plage                               |                  |
| borderStyleObj | Object | -> | Objet contenant le style de bordure       |                  |
| borderPosObj   | Object | -> | Objet contenant la position de la bordure | <!-- END REF --> |

## Description

La commande `VP SET BORDER` <!-- REF #_method_.VP SET BORDER.Summary -->applique le(s) style(s) de bordure défini(s) dans *borderStyleObj* et *borderPosObj* à la plage définie dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules où le style de bordure sera appliqué. Si le *rangeObj* contient plusieurs cellules, les bordures appliquées avec `VP SET BORDER` seront appliquées au *rangeObj* dans son ensemble (contrairement à la commande [`VP SET CELL STYLE`](vp-set-cell-style.md) qui applique les bordures à chaque cellule du *rangeObj*). Si une feuille de style a déjà été appliquée, `VP SET BORDER` remplacera les paramètres de bordure précédemment appliqués pour le *rangeObj*.

Le paramètre *borderStyleObj* vous permet de définir le style des lignes de la bordure. Le *borderStyleObj* prend en charge les propriétés suivantes :

| Propriété | Type    | Description                                                                           | Valeurs possibles                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------- | ------- | ------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color     | text    | Définit la couleur de la bordure. Par défaut = black. | Couleur CSS syntaxe "#rrggbb" (syntaxe préférée), couleur CSS syntaxe "rgb(r,g,b)" (syntaxe alternative), nom de couleur CSS (syntaxe alternative)                                                                                                                                                                                                                                                                |
| style     | Integer | Définit le style de la bordure. Par défaut = empty.   | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

Vous pouvez définir la position du *borderStyleObj* (c'est-à-dire l'endroit où la ligne est appliquée) avec le *borderPosObj* :

| Propriété       | Type    | Description                                                                                            |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| all             | boolean | Style de la ligne de bordure appliqué à toutes les bordures.                           |
| left            | boolean | Style de la ligne de bordure appliqué à la bordure de gauche.                          |
| top             | boolean | Style de la ligne de bordure appliqué à la bordure supérieure.                         |
| right           | boolean | Style de la ligne de bordure appliqué à la bordure de droite.                          |
| bottom          | boolean | Style de la ligne de bordure appliqué à la bordure inférieure.                         |
| outline         | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures extérieures.              |
| inside          | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures intérieures.              |
| innerHorizontal | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures horizontales intérieures. |
| innerVertical   | boolean | Style de la ligne de bordure appliqué uniquemet aux bordures verticales intérieures.   |

## Exemple 1

Ce code applique la bordure suivante autour de la plage :

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

## Exemple 2

Ce code montre la différence entre `VP SET BORDER` et la définition des bordures avec la commande [`VP SET CELL STYLE`](vp-set-cell-style.md) :

```4d
// Définir les bordures à l'aide de VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
 
// Définir les bordures à l'aide de VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

## Voir également

[VP SET CELL STYLE](vp-set-cell-style.md)
