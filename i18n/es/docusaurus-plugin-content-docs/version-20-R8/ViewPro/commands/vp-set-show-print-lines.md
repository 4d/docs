---
id: vp-set-show-print-lines
title: VP SET SHOW PRINT LINES
---

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->

**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| Parámetros | Tipo    |    | Descripción                                                                                 |                  |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                                                |                  |
| visible    | Boolean | -> | Líneas de impresión mostradas si True (por defecto), ocultas si es False |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite)                              | <!-- END REF --> |

#### Descripción

El comando `VP SET SHOW PRINT LINES` <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> establece si se muestran las líneas de vista previa de impresión en una hoja de cálculo.<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *visible*, pase `True` para mostrar las líneas de impresión, y `False` para ocultarlas. Por defecto se pasa `True`.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

La posición de las líneas de impresión de una hoja de cálculo varía según los saltos de página de dicha hoja.

#### Ejemplo

El siguiente código muestra las líneas de impresión en la segunda hoja de un documento:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](../../assets/en/ViewPro/vp-set-show-print-lines.png)

Con un salto de página:

![set-show-print-lines-with-page-break](../../assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### Ver también

[4D Get show print lines](vp-get-show-print-lines.md)
