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

En *rangeObj*, pasa un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](vp-cell.md) o [`VP Column`](vp-column.md)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *textValue* indica un valor texto que se asignará a *rangeObj*.

El *formatPattern* opcional define un [patrón](../configuring.md#cell-format) para el parámetro *textValue*.

#### Ejemplo

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### Ver también

[Cell Format](../configuring.md#cell-format)<br/>
[VP SET VALUE](vp-set-value.md)
