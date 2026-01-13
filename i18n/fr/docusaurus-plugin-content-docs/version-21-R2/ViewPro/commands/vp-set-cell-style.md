---
id: vp-set-cell-style
title: VP SET CELL STYLE
---

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| Paramètres | Type   |    | Description |                  |
| ---------- | ------ | -- | ----------- | ---------------- |
| rangeObj   | Object | -> | Objet plage |                  |
| styleObj   | Object | -> | Objet style | <!-- END REF --> |

## Description

La commande `VP SET CELL STYLE` <!-- REF #_method_.VP SET CELL STYLE.Summary -->applique le(s) style(s) défini(s) dans *styleObj* aux cellules définies dans *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellules où le style sera appliqué. Si le *rangeObj* contient plusieurs cellules, le style est appliqué à chaque cellule.

> Les bordures appliquées avec `VP SET CELL STYLE` seront appliquées à chaque cellule de la *rangeObj*, contrairement à la commande [VP SET BORDER](vp-set-border.md) qui applique les bordures à l'ensemble du *rangeObj*.

Le paramètre *styleObj* permet de transmettre un objet contenant des paramètres de style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style. Vous pouvez utiliser une feuille de style existante ou créer un nouveau style.

Attribuez la valeur NULL pour supprimer un style et rétablir les paramètres de style par défaut (le cas échéant) :

- si vous attribuez la valeur NULL au paramètre *styleObj*, tous les paramètres de style seront supprimés de *rangeObj*,
- si vous attribuez la valeur NULL à un attribut, cet attribut spécifique sera supprimé de *rangeObj*.

Pour plus d'informations sur les objets de style et les feuilles de style, voir le paragraphe [Objets de style](../configuring.md#style-objects).

## Exemple

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null //supprimer un attribut spécifique
 
VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

## Voir également

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get cell style](vp-get-cell-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)