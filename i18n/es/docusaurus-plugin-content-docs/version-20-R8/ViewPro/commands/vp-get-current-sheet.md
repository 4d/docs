---
id: vp-get-current-sheet
title: VP Get current sheet
---

<!-- REF #_method_.VP Get current sheet.Syntax -->

**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF -->

<!-- REF #_method_.VP Get current sheet.Params -->

| Parámetros | Tipo    |                             | Descripción                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro |                  |
| Resultado  | Integer | <- | Indice de la hoja actual                     | <!-- END REF --> |

#### Descripción

El comando `VP Get current sheet` <!-- REF #_method_.VP Get current sheet.Summary -->devuelve el índice de la hoja actual en *vpAreaName*. La hoja actual es la hoja seleccionada en el documento.<!-- END REF -->

En *vpAreaName*, pase el nombre del área 4D View Pro.

> La indexación comienza en 0.

#### Ejemplo

Cuando se selecciona la tercera hoja:

![third-sheet](../../assets/en/ViewPro/vp-sheet-3-select.png)

El comando devuelve 2:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### Ver también

[VP SET CURRENT SHEET](vp-set-current-sheet.md)
