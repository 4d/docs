---
id: vp-get-frozen-panes
title: VP Get frozen panes
---

<!-- REF #_method_.VP Get frozen panes.Syntax -->

**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get frozen panes.Params -->

| Parámetros | Tipo    |                             | Descripción                                                            |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro                           |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite)         |                  |
| Result     | Object  | <- | Objeto que contiene la información de las columnas y líneas congeladas | <!-- END REF --> |

#### Descripción

El comando `VP Get frozen panes` <!-- REF #_method_.VP Get frozen panes.Summary -->devuelve un objeto con información sobre las columnas y filas congeladas en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

##### Objeto devuelto

El comando devuelve un objeto que describe las columnas y líneas congeladas. Este objeto puede contener las siguientes propiedades:

| Propiedad           | Tipo    | Descripción                                                    |
| ------------------- | ------- | -------------------------------------------------------------- |
| columnCount         | Integer | El número de columnas congeladas a la izquierda de la hoja     |
| trailingColumnCount | Integer | El número de columnas congeladas a la derecha de la hoja       |
| rowCount            | Integer | El número de líneas congeladas en la parte superior de la hoja |
| trailingRowCount    | Integer | El número de líneas congeladas en la parte inferior de la hoja |

#### Ejemplo

Quiere recuperar información sobre el número de columnas y líneas congeladas:

```4d
var $panesObj : Object

 
$panesObj:=VP Get frozen panes("ViewProArea")
```

El objeto devuelto contiene, por ejemplo:

![](../../assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### Ver también

[VP SET FROZEN PANES](vp-set-frozen-panes.md)
