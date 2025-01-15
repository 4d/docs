---
id: vp-set-values
title: VP SET VALUES
---

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| Parámetros | Tipo       |    | Descripción          |                  |
| ---------- | ---------- | -- | -------------------- | ---------------- |
| rangeObj   | Object     | -> | Objeto rango         |                  |
| valuesCol  | Collection | -> | Colección de valores | <!-- END REF --> |

#### Descripción

El comando `VP SET VALUES` <!-- REF #_method_.VP SET VALUES.Summary -->asigna una colección de valores comenzando en el rango de celdas especificado<!-- END REF -->.

En *rangeObj*, pase un rango de celda (creada con [`VP Cell`](vp-cell.md)) cuyo valor desea especificar. La celda definida en *rangeObj* se utiliza para determinar el punto de partida.

> - Si *rangeObj* no es un rango de celdas, sólo se utilizará la primera celda del rango.
> - Si *rangeObj* incluye varios rangos, sólo se utilizará la primera celda del primer rango.

El parámetro *valuesCol* es bidimensional:

- La colección de primer nivel contiene subcolecciones de valores. Cada subcolección define una línea. Pasa una colección vacía para saltar una línea.
- Cada subcolección define los valores de las celdas para la línea. Los valores pueden ser enteros, reales, booleanos, texto, fecha, null u objeto. Si el valor es un objeto, puede tener las siguientes propiedades:

| Propiedad | Tipo                                     | Descripción                                           |
| --------- | ---------------------------------------- | ----------------------------------------------------- |
| value     | Integer, Real, Boolean, Text, Date, Null | Valor de la celda (excepto - time) |
| time      | Real                                     | Valor hora (en segundos)           |

#### Ejemplo

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //primera línea, 4 valores
$param.push(New collection) //segunda línea, sin tocar
$param.push(New collection(4;5;Null;"hello";"world")) // tercera línea, 5 valores
$param.push(New collection(6;7;8;9)) //cuarta línea, 4 valores
$param.push(New collection(Null;New object("value";Current date;"time";42))) //quinta línea, 1 valor
   
VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### Ver también

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
