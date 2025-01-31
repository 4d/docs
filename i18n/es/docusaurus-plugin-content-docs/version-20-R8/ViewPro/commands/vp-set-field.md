---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Parámetros    | Tipo    |    | Descripción                                  |                  |
| ------------- | ------- | -- | -------------------------------------------- | ---------------- |
| rangeObj      | Object  | -> | Objeto rango                                 |                  |
| campo         | Puntero | -> | Referencia al campo en la estructura virtual |                  |
| formatPattern | Text    | -> | Formato del campo                            | <!-- END REF --> |

#### Descripción

El comando `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->asigna un campo virtual de base de datos 4D a un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango de la(s) celda(s) cuyo valor desea indicar. En *rangeObj*, pase un rango de la(s) celda(s) cuyo valor desea indicar.

El parámetro *field* especifica un [campo virtual](../formulas.md#referencing-fields-using-the-virtual-structure) de la base de datos 4D que se asignará a *rangeObj*. El nombre de la estructura virtual para el *field* se puede ver en la barra de fórmulas. Si alguna de las celdas de *rangeObj* tiene contenido, se sustituirá por *field*.

El parámetro opcional *formatPattern* define un modelo para el parámetro *field*. Puede pasar cualquier [formato personalizado] válido(../configuring.md#cell-format).

#### Ejemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Ver también

[VP SET VALUE](vp-set-value.md)
