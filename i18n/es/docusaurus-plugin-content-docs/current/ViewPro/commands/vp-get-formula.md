---
id: vp-get-formula
title: VP Get formula
---

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| Parámetros | Tipo   |                             | Descripción  |                  |
| ---------- | ------ | --------------------------- | ------------ | ---------------- |
| rangeObj   | Object | ->                          | Objeto rango |                  |
| Result     | Text   | <- | Formula      | <!-- END REF --> |

#### Descripción

El comando `VP Get formula` <!-- REF #_method_.VP Get formula.Summary -->recupera la fórmula de un rango de celdas designado<!-- END REF -->.

En *rangeObj*, pase un rango cuya fórmula desea recuperar. Si *rangeObj* designa varias celdas o varios rangos, se devuelve la fórmula de la primera celda. Si *rangeObj* es una celda que no contiene una fórmula, el método devuelve una cadena vacía.

#### Ejemplo

```4d
  //set a formula
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
 
$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

#### Ver también

[VP Get formulas](vp-get-formulas.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
