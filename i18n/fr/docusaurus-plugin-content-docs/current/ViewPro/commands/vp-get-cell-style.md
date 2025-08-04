---
id: vp-get-cell-style
title: VP Get cell style
---

<!-- REF #_method_.VP Get cell style.Syntax -->

**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get cell style.Params -->

| Paramètres | Type   |                             | Description |                  |
| ---------- | ------ | --------------------------- | ----------- | ---------------- |
| rangeObj   | Object | ->                          | Objet plage |                  |
| Résultat   | Object | <- | Objet style | <!-- END REF --> |

## Description

La commande `VP Get cell style`<!-- REF #_method_.VP Get cell style.Summary -->retourne un [objet stylet](../configuring.md#style-objects) pour la première cellule de *rangeObj*<!-- END REF -->.

Dans *rangeObj*, passez une plage contenant le style à récupérer.

- Si *rangeObj* contient une plage de cellules, le style de cellule est retourné.
- Si *rangeObj* contient une plage qui n'est pas une plage cellule, le style de la première cellule de la plage est retourné.
- Si *rangeObj* contient plusieurs lignes, seul le style de la première cellule de la première plage est retourné.

## Exemple

Pour obtenir les détails concernant le style de la cellule sélectionnée (B2) :

![](../../assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

Le code suivant :

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... retournera cet objet :

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

## Voir également

[VP GET DEFAULT STYLE](vp-get-default-style.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)
