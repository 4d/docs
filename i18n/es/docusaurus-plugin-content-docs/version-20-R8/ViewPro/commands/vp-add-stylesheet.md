---
id: vp-add-stylesheet
title: VP ADD STYLESHEET
---

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| Parámetros | Tipo    |    | Descripción                                                    |                  |
| ---------- | ------- | -- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nombre de objeto formulario área 4D View Pro                   |                  |
| styleName  | Text    | -> | Nombre del estilo                                              |                  |
| styleObj   | Object  | -> | Objeto definiendo las propiedades del atributo                 |                  |
| sheet      | Integer | -> | Índice de la hoja (hoja actual si se omite) | <!-- END REF --> |

#### Descripción

El comando `VP ADD STYLESHEET` <!-- REF #_method_.VP ADD STYLESHEET.Summary -->crea o modifica la hoja de estilo *styleName* basándose en la combinación de las propiedades especificadas en *styleObj* en el documento abierto<!-- END REF -->. Si ya existe una hoja de estilo con el mismo nombre e índice en el documento, este comando la sobrescribirá con los nuevos valores.

> Las hojas de estilo creadas por este comando se guardan con el documento.

En *vpAreaName*, pase el nombre del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

El parámetro *styleName* permite asignar un nombre a la hoja de estilo. Si el nombre ya se utiliza dentro del mismo alcance, la nueva hoja de estilo sustituye a la existente. Tenga en cuenta que puede utilizar el mismo nombre para diferentes alcances (ver más adelante).

Dentro del *styleObj*, designe la configuración de la hoja de estilo (por ejemplo, fuente, decoración del texto, alineación, bordes, etc.). Para ver la lista completa de propiedades de estilo, consulte [../Propiedades de los objetos de estilo](configuring.md#style-object-properties).

Puede designar dónde definir la hoja de estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la indexación comienza en 0) o con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

Si una hoja de estilo *styleName* está definida al nivel del libro de trabajo y de la hoja, el nivel de hoja tiene prioridad sobre el nivel del libro de trabajo cuando se define la hoja de estilo.

Para aplicar la hoja de estilo, utilice los comandos [VP SET DEFAULT STYLE](vp-set-default-style.md) o [VP SET CELL STYLE](vp-set-cell-style.md).

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

creará y aplicará el siguiente objeto estilo llamado *GreenDashDotStyle*:

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

[Objetos de Estilo y Hojas de Estilo 4D View Pro](../configuring.md#style-objects--style-sheets)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
