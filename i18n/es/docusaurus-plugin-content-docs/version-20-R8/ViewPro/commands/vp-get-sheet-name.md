---
id: vp-get-sheet-name
title: VP Get sheet name
---

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| Parámetros | Tipo    |                             | Descripción                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro |                  |
| sheet      | Integer | ->                          | Índice de la hoja                            |                  |
| Resultado  | Text    | <- | Nombre de la hoja                            | <!-- END REF --> |

#### Descripción

El comando `VP Get sheet name` <!-- REF #_method_.VP Get sheet name.Summary -->devuelve el nombre de una hoja en función de su índice en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja cuyo nombre se devolverá.

Si el índice de hoja pasado no existe, el método devuelve un nombre vacío.

> La indexación comienza en 0.

#### Ejemplo

Obtener el nombre de la tercera hoja en el documento:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### Ver también

[VP Get sheet index](vp-get-sheet-index.md)
