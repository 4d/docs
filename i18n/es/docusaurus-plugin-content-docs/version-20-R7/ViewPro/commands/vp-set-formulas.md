---
id: vp-set-formulas
title: VP SET FORMULAS
---

<!-- REF #_method_.VP SET FORMULAS.Syntax -->

**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULAS.Params -->

| Parámetros  | Tipo       |    | Descripción              |                  |
| ----------- | ---------- | -- | ------------------------ | ---------------- |
| rangeObj    | Object     | -> | Objeto de rango de celda |                  |
| formulasCol | Collection | -> | Colección de fórmulas    | <!-- END REF --> |

#### Descripción

El comando `VP SET FORMULAS` <!-- REF #_method_.VP SET FORMULAS.Summary -->asigna una colección de fórmulas que comienzan en el rango de celdas especificado<!-- END REF -->.

En *rangeObj*, pase un rango de la celda (creada con [VP Cell](vp-cell.md)) cuya fórmula desea especificar. Si *rangeObj* incluye varios rangos, sólo se utiliza el primer rango.

El parámetro *formulasCol* es una colección bidimensional:

- La colección de primer nivel contiene subcolecciones de fórmulas. Cada subcolección define una línea.
- Cada subcolección define los valores de las celdas para la línea. Los valores deben ser elementos textuales que contengan las fórmulas a asignar a las celdas.

> Si la fórmula es una cadena, utilice el punto `.` como separador numérico y la coma `,` como separador de parámetros.
> Si se utiliza un método 4D, debe estar permitido con el comando [`VP SET ALLOWED METHODS`](vp-set-allowed-methods.md).

Las fórmulas de *rangeObj* se eliminan sustituyéndolas por una cadena vacía ("").

#### Ejemplo 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // Primera línea
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Segunda línea

 
VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Definir las celdas con las fórmulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](../../assets/en/ViewPro/cmd_vpSetFormulas.PNG)

#### Ejemplo 2

Para eliminar las fórmulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // primera colección
$formulas.push(New collection("";"")) // segunda colección
 
VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Asignar a celdas
```

#### Ver también

[VP Get Formulas](vp-get-formulas.md)<br/>
[VP GET VALUES](vp-get-values.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET VALUES](vp-set-values.md)
