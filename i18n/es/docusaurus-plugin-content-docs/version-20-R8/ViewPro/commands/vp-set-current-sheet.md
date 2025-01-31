---
id: vp-set-current-sheet
title: VP SET CURRENT SHEET
---

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->

**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *sheet* : Integer)<!-- END REF -->

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| Parámetros | Tipo    |                             | Descripción                                  |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre de objeto formulario área 4D View Pro |                  |
| sheet      | Integer | <- | Índice de la nueva hoja actual               | <!-- END REF --> |

#### Descripción

El comando `VP SET CURRENT SHEET` <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->define la hoja actual en *vpAreaName*<!-- END REF -->. La hoja actual es la hoja seleccionada en el documento.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *sheet*, pase el índice de la hoja que se va a definir como hoja actual. Si el índice pasado es inferior a 0 o supera el número de hojas, el comando no hace nada.

> La indexación comienza en 0.

#### Ejemplo

La hoja actual del documento es la primera hoja:

![first-sheet-selected](../../assets/en/ViewPro/vp-sheet-3-select.png)

Define la hoja actual en la tercera hoja:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### Ver también

[VP Get current sheet](vp-get-current-sheet.md)
