---
id: vp-get-row-attributes
title: VP Get row attributes
---

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| Parámetros | Tipo       |    | Descripción                          |                  |
| ---------- | ---------- | -- | ------------------------------------ | ---------------- |
| rangeObj   | Object     | -> | Objeto rango                         |                  |
| Result     | Collection | <- | Colección de propiedades de la línea | <!-- END REF --> |

#### Descripción

El comando `VP Get row attributes` <!-- REF #_method_.VP Get row attributes.Summary -->devuelve una colección de propiedades para cualquier fila del *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de líneas cuyos atributos serán recuperados.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](vp-set-row-attributes.md) method.

#### Ejemplo

El siguiente código devuelve una colección de los atributos dentro del rango dado:

```4d
var $range : Object
var $attr : Collection
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### Ver también

[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
