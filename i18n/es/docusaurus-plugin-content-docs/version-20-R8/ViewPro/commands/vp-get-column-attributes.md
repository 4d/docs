---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| Parámetros | Tipo       |                             | Descripción                          |                  |
| ---------- | ---------- | --------------------------- | ------------------------------------ | ---------------- |
| rangeObj   | Object     | ->                          | Objeto rango                         |                  |
| Result     | Collection | <- | Colección de propiedades de columnas | <!-- END REF --> |

#### Descripción

El comando `VP Get column attributes` <!-- REF #_method_.VP Get column attributes.Summary -->devuelve una colección de propiedades para toda columna del *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que contenga un rango de columnas cuyos atributos serán recuperados.

La colección devuelta contiene todas las propiedades de las columnas, tanto si se han definido con el comando [VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md) como si no.

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
