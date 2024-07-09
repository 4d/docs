---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| Parámetros | Tipo    |    | Descripción                  |                  |
| ---------- | ------- | -- | ---------------------------- | ---------------- |
| rangeObj   | Object  | -> | Objeto rango                 |                  |
| boolValue  | Boolean | -> | Valor del booleano a definir | <!-- END REF --> |

#### Descripción

El comando `VP SET BOOLEAN VALUE` <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->asigna un valor booleano especificado a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pasa un rango de la(s) celda(s) (creada(s) por ejemplo con [`VP Cell`](vp-cell.md) o [`VP Column`](vp-column.md)) cuyo valor desea especificar. Si *rangeObj* incluye varias celdas, el valor especificado se repetirá en cada una de ellas.

El parámetro *boolValue* permite pasar el valor booleano (**True** o **False**) que se asignará al *rangeObj*.

#### Ejemplo

```4d
//Establecer el valor de la celda como False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### Ver también

[VP SET VALUE](vp-set-value.md)
