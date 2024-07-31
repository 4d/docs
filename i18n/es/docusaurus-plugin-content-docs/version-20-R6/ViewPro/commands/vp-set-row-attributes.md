---
id: vp-set-row-attributes
title: VP SET ROW ATTRIBUTES
---

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->

**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| Parámetros  | Tipo   |    | Descripción                                       |                  |
| ----------- | ------ | -- | ------------------------------------------------- | ---------------- |
| rangeObj    | Object | -> | Rango de líneas                                   |                  |
| propertyObj | Object | -> | Objeto que contiene las propiedades de las líneas | <!-- END REF --> |

#### Descripción

El comando `VP SET ROW ATTRIBUTES` <!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->aplica los atributos definidos en el *propertyObj* a las filas del *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango. Si el rango contiene tanto columnas como líneas, los atributos se aplican sólo a las líneas.

El parámetro *propertyObj* permite especificar los atributos que se aplicarán a las líneas del *rangeObj*. Estos atributos son:

| Propiedad       | Tipo    | Descripción                                                                             |
| --------------- | ------- | --------------------------------------------------------------------------------------- |
| height          | number  | Altura de la línea expresada en píxeles                                                 |
| pageBreak       | boolean | True para insertar un salto de página antes de la primera línea del rango, si no, false |
| visible         | boolean | True si la fila es visible, si no, false                                                |
| redimensionable | boolean | True si la línea puede redimensionarse, si no, false                                    |
| header          | text    | Texto del encabezado de la línea                                                        |

#### Ejemplo

Quiere cambiar el tamaño de la segunda línea y definir el encabezado:

```4d
var $row; $properties : Object
 
$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")
 
VP SET ROW ATTRIBUTES($row;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### Ver también

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP get column attributes](vp-get-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
