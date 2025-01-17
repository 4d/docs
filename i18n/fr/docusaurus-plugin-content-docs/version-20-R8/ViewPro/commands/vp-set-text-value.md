---
id: vp-set-text-value
title: VP SET TEXT VALUE
---

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| Paramètres    | Type   |    | Description          |                  |
| ------------- | ------ | -- | -------------------- | ---------------- |
| rangeObj      | Object | -> | Objet plage          |                  |
| textValue     | Text   | -> | Valeur texte à fixer |                  |
| formatPattern | Text   | -> | Format de la valeur  | <!-- END REF --> |

#### Description

The `VP SET TEXT VALUE` command <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](../configuring.md#cell-format) for the *textValue* parameter.

#### Exemple

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Voir également

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
