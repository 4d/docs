---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Paramètres    | Type    |    | Description                                    |                  |
| ------------- | ------- | -- | ---------------------------------------------- | ---------------- |
| rangeObj      | Object  | -> | Objet plage                                    |                  |
| champ         | Pointer | -> | Référence au champ dans la structure virtuelle |                  |
| formatPattern | Text    | -> | Format du champ                                | <!-- END REF --> |

## Description

The `VP SET FIELD` command <!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur. Dans *rangeObj*, passez une plage de cellule(s) dont vous voulez spécifier la valeur.

The *field* parameter specifies a 4D database [virtual field](../formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the *field* parameter. You can pass any valid [custom format](../configuring.md#cell-format).

## Exemple

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

## Voir également

[VP SET VALUE](vp-set-value.md)

