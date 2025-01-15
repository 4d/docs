---
id: vp-get-sheet-count
title: VP Get sheet count
---

<!-- REF #_method_.VP Get sheet count.Syntax -->

**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

| Parámetros | Tipo    |                             | Descripción                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro |                  |
| Resultado  | Integer | <- | Número de hojas                              | <!-- END REF --> |

#### Descripción

El comando `VP Get sheet count` <!-- REF #_method_.VP Get sheet count.Summary -->devuelve el número de hojas del documento cargado en *vpAreaName*.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

#### Ejemplo

En el siguiente documento:

![](../../assets/en/ViewPro/vp-sheet-3.png)

Obtener el número de hojas y define la hoja actual como la última hoja:

```4d
 $count:=VP Get sheet count("ViewProArea")
  //definir la hoja actual como la última hoja (la indexación comienza en 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Ver también

[VP Get sheet index](vp-get-sheet-index.md)<br/>
[VP SET SHEET COUNT](vp-set-sheet-count.md)
