---
id: vp-get-sheet-index
title: VP Get sheet index
---

<!-- REF #_method_.VP Get sheet index.Syntax -->

**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

| Parámetros | Tipo    |                             | Descripción                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro |                  |
| name       | Text    | ->                          | Nombre de la hoja                            |                  |
| Resultado  | Integer | <- | Índice de la hoja                            | <!-- END REF --> |

#### Descripción

El comando `VP Get sheet index` <!-- REF #_method_.VP Get sheet index.Summary -->devuelve el índice de una hoja basándose en su nombre en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *name*, pase el nombre de la hoja cuyo índice se devolverá. Si no se encuentra ninguna hoja llamada *name* en el documento, el método devuelve -1.

> La indexación comienza en 0.

#### Ejemplo

En el siguiente documento:

![](../../assets/en/ViewPro/vp-sheet-index-name.png)

Obtiene el índice de la hoja llamada "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea";"Total premier trimestre") //devuelve 2
```

#### Ver también

[VP Get sheet count](vp-get-sheet-count.md)<br/>
[VP Get sheet name](vp-get-sheet-name.md)
