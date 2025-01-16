---
id: vp-set-values
title: VP SET VALUES
---

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| Paramètres | Type       |    | Description           |                  |
| ---------- | ---------- | -- | --------------------- | ---------------- |
| rangeObj   | Object     | -> | Objet plage           |                  |
| valuesCol  | Collection | -> | Collection de valeurs | <!-- END REF --> |

#### Description

The `VP SET VALUES` command <!-- REF #_method_.VP SET VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](vp-cell.md)) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.

> - If *rangeObj* is not a cell range, only the first cell of the range is used.
> - If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

The *valuesCol* parameter is two-dimensional:

- La collection de premier niveau contient des sous-collections de valeurs. Chaque sous-collection définit une ligne. Passez une collection vide pour sauter une ligne.
- Chaque sous-collection définit les valeurs des cellules de la ligne. Les valeurs peuvent être de type entier long, réel, booléen, texte, date, null ou objet. Si la valeur est un objet, elle peut avoir les propriétés suivantes :

| Propriété | Type                                     | Description                                            |
| --------- | ---------------------------------------- | ------------------------------------------------------ |
| value     | Integer, Real, Boolean, Text, Date, Null | Valeur dans la cellule (sauf heure) |
| time      | Real                                     | Valeur heure (en secondes)          |

#### Exemple

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### Voir également

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
