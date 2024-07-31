---
id: vp-set-field
title: VP SET FIELD
---

<!-- REF #_method_.VP SET FIELD.Syntax -->

**VP SET FIELD** ( _rangeObj_ : Object ; _field_ : Pointer { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FIELD.Params -->

| Parámetros    | Tipo    |    | Descripción                                  |                  |
| ------------- | ------- | -- | -------------------------------------------- | ---------------- |
| rangeObj      | Object  | -> | Objeto rango                                 |                  |
| campo         | Puntero | -> | Referencia al campo en la estructura virtual |                  |
| formatPattern | Text    | -> | Formato del campo                            | <!-- END REF --> |

#### Descripción

El comando `VP SET FIELD` <!-- REF #_method_.VP SET FIELD.Summary -->asigna un campo virtual de base de datos 4D a un rango de celdas designado<!-- END REF -->.

En _rangeObj_, pase un rango de la(s) celda(s) cuyo valor desea indicar. En _rangeObj_, pase un rango de la(s) celda(s) cuyo valor desea indicar.

El parámetro _field_ especifica un [campo virtual](../formulas.md#referencing-fields-using-the-virtual-structure) de la base de datos 4D que se asignará a _rangeObj_. El nombre de la estructura virtual para el _field_ se puede ver en la barra de fórmulas. Si alguna de las celdas de _rangeObj_ tiene contenido, se sustituirá por _field_.

El parámetro opcional _formatPattern_ define un modelo para el parámetro _field_. Puede pasar cualquier [formato personalizado] válido(../configuring.md#cell-format).

#### Ejemplo

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```

#### Ver también

[VP SET VALUE](vp-set-value.md)
