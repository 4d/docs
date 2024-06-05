---
id: vp-get-workbook-options
title: VP Get workbook options
---

###

<!-- REF #_method_.VP Get workbook options.Syntax -->

**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get workbook options.Params -->

| Parámetros | Tipo   |    | Descripción                                           |                  |
| ---------- | ------ | -- | ----------------------------------------------------- | ---------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro          |                  |
| Result     | Object | <- | Objeto que contiene las opciones del libro de trabajo | <!-- END REF --> |

#### Descripción

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
returns an object containing all the workbook options in *vpAreaName*<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

El objeto devuelto contiene todas las opciones del libro de trabajo (por defecto y modificadas), en el libro de trabajo.

The list of workbook options is referenced in [`VP SET WORKBOOK OPTIONS`'s description](vp-set-workbook-options.md).

#### Ejemplo

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### Ver también

[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)
