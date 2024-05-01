---
id: vp-get-stylesheet
title: VP Get stylesheets
---

<!-- REF #_method_.VP Get stylesheets.Syntax -->

**VP Get stylesheets** ( _vpAreaName_ : Text { ; _sheet_ : Integer } ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get stylesheets.Params -->

| Parámetros | Tipo       |    | Descripción                                                     |                  |
| ---------- | ---------- | -- | --------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | -> | Nombre de objeto formulario área 4D View Pro                    |                  |
| sheet      | Integer    | -> | Alcance objetivo (por defecto = hoja actual) |                  |
| Result     | Collection | <- | Colección de objetos de hojas de estilo                         | <!-- END REF --> |

#### Descripción

The `VP Get stylesheets` command <!-- REF #_method_.VP Get stylesheets.Summary -->returns the collection of defined style sheet objects from the designated _sheet_<!-- END REF -->.

En _vpAreaName_, pase el nombre de la propiedad del área 4D View Pro. Si pasa un nombre que no existe, se devuelve un error.

You can define where to get the style sheets in the optional _sheet_ parameter using the sheet index (counting begins at 0) or with the following constants:

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
