---
id: vp-set-frozen-panes
title: VP SET FROZEN PANES
---

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->

**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| Parámetros | Tipo    |    | Descripción                                                            |
| ---------- | ------- | -- | ---------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                           |
| paneObj    | Object  | -> | Objeto que contiene la información de las columnas y líneas congeladas |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)         |

<!-- END REF -->

#### Descripción

El comando `VP SET FROZEN PANES` <!-- REF #_method_.VP SET FROZEN PANES.Summary -->define el estado congelado de las columnas y filas del *paneObj* para que se muestren siempre en el *vpAreaName*<!-- END REF -->. . Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen.

- **Columnas a la izquierda o a la derecha**: para las columnas a la izquierda de la hoja, la línea se muestra a la derecha de la última columna congelada. Para las columnas situadas a la derecha de la hoja, la línea se muestra a la izquierda de la primera columna congelada.
- **Líneas en la parte superior o inferior**: para las líneas en la parte superior de la hoja, la línea se muestra debajo de la última línea congelada. Para las líneas situadas en la parte inferior de la hoja, la línea se muestra sobre la primera línea congelada.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede pasar un objeto que defina las columnas y líneas a congelar en el parámetro *paneObj*. Al definir el valor de una propiedad de columna o de línea en cero, se restablece (descongela) la propiedad. Si una propiedad está definida como menor que cero, el comando no hace nada. Puede pasar:

| Propiedad           | Tipo    | Descripción                                                    |
| ------------------- | ------- | -------------------------------------------------------------- |
| columnCount         | Integer | El número de columnas congeladas a la izquierda de la hoja     |
| trailingColumnCount | Integer | El número de columnas congeladas a la derecha de la hoja       |
| rowCount            | Integer | El número de líneas congeladas en la parte superior de la hoja |
| trailingRowCount    | Integer | El número de líneas congeladas en la parte inferior de la hoja |

En el parámetro opcional *sheet*, puede designar una hoja específica donde se definirá el rango (la numeración comienza en 0). Si se omite, se utiliza por defecto la hoja de cálculo actual. Puede seleccionar explícitamente la hoja de cálculo actual con la siguiente constante:

- `vk current sheet`

#### Ejemplo

Quiere congelar las tres primeras columnas de la izquierda, dos columnas de la derecha y la primera línea:

```4d
C_OBJECT($panes)
 
$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1
 
VP SET FROZEN PANES("ViewProArea";$panes)
```

![](../../assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### Ver también

[VP Get frozen panes](vp-get-frozen-panes.md)
