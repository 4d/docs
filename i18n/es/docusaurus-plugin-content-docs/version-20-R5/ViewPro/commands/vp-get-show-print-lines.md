---
id: vp-get-show-print-lines
title: VP Get show print lines
---

<!-- REF #_method_.VP Get show print lines.Syntax -->

**VP Get show print lines** ( _vpAreaName_ : Text {; _sheet_ : Integer } ) : Boolean<!-- END REF -->

<!-- REF #_method_.VP Get show print lines.Params -->

| Parámetros | Tipo    |    | Descripción                                                         |                  |
| ---------- | ------- | -- | ------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                        |                  |
| sheet      | Integer | <- | Índice de la hoja                                                   |                  |
| Resultado  | Boolean | <- | True si las líneas de impresión son visibles, de lo contrario False | <!-- END REF --> |

#### Descripción

El comando `VP Get show print lines` <!-- REF #_method_.VP Get show print lines.Summary -->devuelve `True` si las líneas de la vista previa de impresión están visibles y `False` si están ocultas.<!-- END REF -->

En _vpAreaName_, pase el nombre del área 4D View Pro.

En _sheet_, pase el índice de la hoja objetivo. Si se omite _sheet_, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

#### Ejemplo

El siguiente código comprueba si las líneas de vista previa se muestran u ocultan en el documento:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### Ver también

[VP SET SHOW PRINT LINES](vp-set-show-print-lines.md)
