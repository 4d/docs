---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* ; *nomHojaEstilo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| nomHojaEstilo | Text | &#8594;  | Nombre de hoja de estilo |
| Resultado | Object | &#8592; | Objeto de hoja de estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP Get style sheet.Summary-->El comando **WP Get style sheet** devuelve el objeto de hoja de estilo designado por *nomHojaEstilo*.<!-- END REF-->

En *wpDoc*, pase el documento 4D Write Pro que contiene la hoja de estilo.

El parámetro *nomHojaEstilo* le permite especificar el nombre de la hoja de estilo a devolver. Si el nombre de la hoja de estilo no existe en *wpDoc*, se devuelve un objeto nulo.

#### Ejemplo 

Para recuperar la hoja de estilo "Main title":

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // verifica si la hoja de estilo existe//si no la crea
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

#### Ver también 

*Acceder a contenidos de documentos por programación*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  