---
id: vp-get-sheet-options
title: VP Get sheet options
---

<!-- REF #_method_.VP Get sheet options.Syntax -->

**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get sheet options.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre del área 4D View Pro en el formulario                   |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Objeto opciones de la hoja                                     | <!-- END REF --> |

#### Descripción

El comando `VP Get sheet options` <!-- REF #_method_.VP Get sheet options.Summary -->devuelve un objeto que contiene las opciones de hoja actuales del área *vpAreaName*<!-- END REF -->.

Pase el nombre del área de 4D View Pro en *vpAreaName*. Si pasa un nombre que no existe, se devuelve un error.

En el parámetro opcional *sheet*, puede designar una hoja específica (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Objeto devuelto

El método devuelve un objeto que contiene los valores actuales de todas las opciones de hoja disponibles. Un valor de opción puede haber sido modificado por el usuario o por el método [VP SET SHEET OPTIONS](vp-set-sheet-options.md).

Para ver la lista completa de las opciones, consulte [Opciones Hoja](../configuring.md#sheet-options).

#### Ejemplo

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) //los encabezados de las columnas son visibles
    ... //do something
End if
```

#### Ver también

[4D VIEW PRO SHEET OPTIONS](../configuring.md#sheet-options)<br/>
[VP SET SHEET OPTIONS](vp-set-sheet-options.md)
