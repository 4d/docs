---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  _rangeObj_ : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Parámetros | Tipo       |    | Descripción                          |                  |
| ---------- | ---------- | -- | ------------------------------------ | ---------------- |
| rangeObj   | Object     | -> | Objeto rango                         |                  |
| Result     | Collection | <- | Colección de propiedades de columnas | <!-- END REF --> |

#### Descripción

El comando `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->devuelve una colección de propiedades para toda columna del _rangeObj_<!-- END REF -->.

En _rangeObj_, pase un objeto que contenga un rango de columnas cuyos atributos serán recuperados.

The returned collection contains any properties for the columns, whether or not they have been set by the [VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md) command.

#### Ejemplo

El código siguiente:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... devolverá una colección de los atributos dentro del rango dado:

![](../../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### Ver también

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
