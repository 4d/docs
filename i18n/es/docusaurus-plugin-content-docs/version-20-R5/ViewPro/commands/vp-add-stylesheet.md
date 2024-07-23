---
id: vp-add-stylesheet
title: VP ADD STYLESHEET
---

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( _vpAreaName_ : Text ; _styleName_ : Text ; _styleObj_ : Object { ; _sheet_ : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| styleName  | Text    | -> | Nombre del estilo                                              |                  |
| styleObj   | Object  | -> | Objeto definiendo las propiedades del atributo                 |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crea o modifica la hoja de estilo _styleName_ basándose en la combinación de las propiedades especificadas en _styleObj_ en el documento abierto<!-- END REF -->. Si ya existe una hoja de estilo con el mismo nombre e índice en el documento, este comando la sobrescribirá con los nuevos valores.

> Las hojas de estilo creadas por este comando se guardan con el documento.

En _vpAreaName_, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro _styleName_ permite asignar un nombre a la hoja de estilo. Si el nombre ya se utiliza dentro del mismo alcance, la nueva hoja de estilo sustituye a la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Dentro del _styleObj_, designe la configuración de la hoja de estilo (por ejemplo, fuente, decoración del texto, alineación, bordes, etc.). Para ver la lista completa de propiedades de estilo, consulte [../Propiedades de los objetos de estilo](configuring.md#style-object-properties).

Puede designar dónde definir la hoja de estilo en el parámetro opcional _sheet_ utilizando el índice de la hoja (la indexación comienza en 0) o con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

Si una hoja de estilo _styleName_ está definida al nivel del libro de trabajo y de la hoja, el nivel de hoja tiene prioridad sobre el nivel del libro de trabajo cuando se define la hoja de estilo.

To apply the style sheet, use the [VP SET DEFAULT STYLE](vp-set-default-style.md) or [VP SET CELL STYLE](vp-set-cell-style.md) commands.

#### Ejemplo

El código siguiente:

```4d
$styles:=New object
$styles.backColor:="green"

//Line Border Object
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)

//Para aplicar el estiloVP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

creará y aplicará el siguiente objeto estilo llamado _GreenDashDotStyle_:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### Ver también

[4D View Pro Style Objects and Style Sheets](../configuring.md#style-objects--style-sheets)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
