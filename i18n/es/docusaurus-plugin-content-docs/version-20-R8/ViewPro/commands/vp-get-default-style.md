---
id: vp-get-default-style
title: VP Get default style
---

<!-- REF #_method_.VP Get default style.Syntax -->

**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

| Parámetros | Tipo    |                             | Descripción                                                    |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nombre del área 4D View Pro en el formulario                   |                  |
| sheet      | Integer | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | Object  | <- | Parámetros de estilo por defecto                               | <!-- END REF --> |

#### Descripción

El comando `VP Get default style` <!-- REF #_method_.VP Get default style.Summary -->devuelve un objeto de estilo predeterminado para una hoja<!-- END REF -->. El objeto devuelto contiene las propiedades básicas de renderización del documento, así como la configuración de estilo por defecto (si la hay) definida previamente por el método [VP SET DEFAULT STYLE](vp-set-default-style.md). Para obtener más información sobre las propiedades de estilo, consulte [Objetos de estilo y hojas de estilo](../configuring.md#style-objects--style-sheets).

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener el número de columnas en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0). Si se omite o si se pasa `vk current sheet`, se utiliza la hoja de cálculo actual.

#### Ejemplo

Para obtener los detalles sobre el estilo predeterminado para este documento:

![](../../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

Este código:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

devolverá esta información en el objeto *$defaultStyle*:

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

#### Ver también

[VP Get cell style](vp-get-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
