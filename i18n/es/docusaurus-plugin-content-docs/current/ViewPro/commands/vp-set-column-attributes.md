---
id: vp-set-column-attributes
title: VP SET COLUMN ATTRIBUTES
---

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->

**VP SET COLUMN ATTRIBUTES** ( _rangeObj_ : Object  ; _propertyObj_ : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| Parámetros  | Tipo   |    | Descripción                                    |                  |
| ----------- | ------ | -- | ---------------------------------------------- | ---------------- |
| rangeObj    | Object | -> | Objeto rango                                   |                  |
| propertyObj | Object | -> | Objeto que contiene las propiedades de columna | <!-- END REF --> |

#### Descripción

The `VP SET COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the _propertyObj_ to the columns in the _rangeObj_<!-- END REF -->.

En _rangeObj_, pase un objeto que contenga un rango. Si el rango contiene tanto columnas como líneas, los atributos se aplican sólo a las columnas.

The _propertyObj_ parameter lets you specify the attributes to apply to the columns in the _rangeObj_. Estos atributos son:

| Propiedad       | Tipo    | Descripción                                                                               |
| --------------- | ------- | ----------------------------------------------------------------------------------------- |
| ancho           | number  | Ancho de columna expresado en píxeles                                                     |
| pageBreak       | boolean | True para insertar un salto de página antes de la primera columna del rango, si no, false |
| visible         | boolean | True si la columna es visible, si no, false                                               |
| redimensionable | boolean | True si la columna puede redimensionarse, si no, false                                    |
| header          | text    | Texto del encabezado de la columna                                                        |

#### Ejemplo

Para cambiar el tamaño de la segunda columna y definir el encabezado, se escribe:

```4d
C_OBJECT($column;$properties)
 
$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")
 
VP SET COLUMN ATTRIBUTES($column;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### Ver también

[VP Column](vp-column.md)<br/>
[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
