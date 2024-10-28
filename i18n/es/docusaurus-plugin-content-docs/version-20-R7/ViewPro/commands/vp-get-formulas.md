---
id: vp-get-formulas
title: VP Get formulas
---

<!-- REF #_method_.VP Get formulas.Syntax -->

**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

| Parámetros | Tipo       |                             | Descripción                         |                  |
| ---------- | ---------- | --------------------------- | ----------------------------------- | ---------------- |
| rangeObj   | Object     | ->                          | Objeto rango                        |                  |
| Result     | Collection | <- | Colección de valores de una fórmula | <!-- END REF --> |

#### Descripción

El comando `VP Get formulas` <!-- REF #_method_.VP Get formulas.Summary -->recupera las fórmulas de un *rangeObj* designado<!-- END REF -->.

En *rangeObj*, pase un rango cuyas fórmulas desea recuperar. Si *rangeObj* designa varios rangos, se devuelve la fórmula del primer rango. Si *rangeObj* no contiene fórmulas, el comando devuelve una cadena vacía.

La colección devuelta es bidimensional:

- La colección de primer nivel contiene subcolecciones de fórmulas. Cada subcolección representa una línea.
- Cada subcolección define los valores de las celdas para la línea. The first-level collection contains subcollections of formulas.

#### Ejemplo

Quiere recuperar las fórmulas de las columnas Sum y Average de este documento:

![](../../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

Puede utilizar este código:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### Ver también

[VP Get formula](vp-get-formula.md)<br/>
[VP Get values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
