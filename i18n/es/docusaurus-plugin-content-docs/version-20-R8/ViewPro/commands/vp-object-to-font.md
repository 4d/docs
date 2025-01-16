---
id: vp-object-to-font
title: VP Object to font
---

<!-- REF #_method_.VP Object to font.Syntax -->

**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->

<!-- REF #_method_.VP Object to font.Params -->

| Parámetros  | Tipo   |                             | Descripción      |                  |
| ----------- | ------ | --------------------------- | ---------------- | ---------------- |
| font object | Object | ->                          | Objeto fuente    |                  |
| Result      | Text   | <- | Fuente abreviada | <!-- END REF --> |

#### Descripción

El comando `VP Object to font` <!-- REF #_method_.VP Object to font.Summary -->devuelve una cadena abreviada de fuente a partir de *fontObj*<!-- END REF -->.

En *fontObj*, pase un objeto que contenga las propiedades de la fuente. Se soportan las siguientes propiedades:

| Propiedad | Tipo | Descripción                                                                                                                                                                         | Valores posibles                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Obligatorio |
| --------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| family    | text | Define la fuente.                                                                                                                                                   | todo tipo de familia de fuentes estándar o genérica. Ej. "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                                                                                | Sí          |
| size      | text | Defines the size of the font. The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" | un número con una de las siguientes unidades: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmin", "vmax"</li>o uno de los siguientes:<li>`vk font size grande`</li><li>`vk font size grande`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | Sí          |
| style     | text | Estilo de fuente.                                                                                                                                                   | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                                                                                                                           | No          |
| variant   | text | Especifica el tipo de letra en minúsculas.                                                                                                                          | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                                                                                                                     | No          |
| weight    | text | Define el grosor de la fuente.                                                                                                                                      | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                                                                                      | No          |

Este objeto puede crearse con el comando [VP Font to object](vp-font-to-object.md).

La cadena abreviada devuelta puede asignarse a la propiedad "font" de una celda con la función [VP SET CELL STYLE](vp-set-cell-style.md), por ejemplo.

#### Ejemplo

```4d
$cellStyle:=VP Get cell style($range)
 
$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder
 
$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contains "bolder oblique small-caps 16pt arial"
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
