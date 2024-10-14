---
id: vp-get-stylesheet
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( *vpAreaName* : Text { ; *sheet* : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| Parámetros | Tipo       |                             | Descripción                                                     |                  |
| ---------- | ---------- | --------------------------- | --------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nombre de objeto formulario área 4D View Pro                    |                  |
| sheet      | Integer    | ->                          | Alcance objetivo (por defecto = hoja actual) |                  |
| Result     | Collection | <- | Colección de objetos de hojas de estilo                         | <!-- END REF --> |

#### Descripción

El comando `VP Get stylesheets` <!-- REF #_method_.VP Get stylesheets.Summary -->devuelve la colección de objetos de hojas de estilo definidos de la *sheet* designada<!-- END REF -->.

En *vpAreaName*, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

Puede definir dónde obtener las hojas de estilo en el parámetro opcional *sheet* utilizando el índice de la hoja (la numeración comienza en 0) o con las siguientes constantes:

- `vk current sheet`
- `vk workbook`

#### Ejemplo

El siguiente código devolverá una colección de todos los objetos estilo de la hoja actual:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

En este caso, la hoja actual utiliza dos objetos estilo:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```

#### Ver también

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)
