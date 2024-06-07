---
id: vp-set-text-value
title: VP SET TEXT VALUE
---

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| Parámetros    | Tipo   |    | Descripción           |                  |
| ------------- | ------ | -- | --------------------- | ---------------- |
| rangeObj      | Object | -> | Objeto rango          |                  |
| textValue     | Text   | -> | Valor texto a definir |                  |
| formatPattern | Text   | -> | Formato del valor     | <!-- END REF --> |

#### Descripción

El comando `VP SET TEXT VALUE` <!-- REF #_method_.VP SET TEXT VALUE.Summary -->asigna un valor de texto especificado a un rango de celdas designado<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](vp-cell.md) or [`VP Column`](vp-column.md)) whose value you want to specify. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *textValue* indica un valor texto que se asignará a *rangeObj*.

The optional *formatPattern* defines a [pattern](../configuring.md#cell-format) for the *textValue* parameter.

#### Ejemplo

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Ver también

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
