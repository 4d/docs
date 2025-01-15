---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *objetoHojaEstilo* ) | (*wpDoc* ; *nombreHojaEstilo* )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objetoHojaEstilo | Object | &#8594;  | Objeto hoja de estilo |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| nombreHojaEstilo | Text | &#8594;  | Nombre de la hoja de estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->El comando **WP DELETE STYLE SHEET** elimina el párrafo designado o la hoja de estilo de caracteres del documento actual.<!-- END REF--> Cuando se elimina una hoja de estilo, el carácter o párrafo al que se aplicó vuelve a su estilo original (es decir, el predeterminado).

Este comando ofrece dos formas de eliminar una hoja de estilo. Puede especificar:

* el objeto hoja de estilo (creado con [WP New style sheet](wp-new-style-sheet.md) o devuelto por el comando [WP Get style sheet](wp-get-style-sheet.md)) para eliminar en el parámetro *tipoHojaEstilo*, o
* el documento 4D Write Pro junto con el nombre de la hoja de estilo para eliminar en los parámetros *wpDoc* y *nombreHojaEstilo*.

**Nota**: la hoja de estilo predeterminada ("Normal") no se puede eliminar.

#### Ver también 

*Acceder a contenidos de documentos por programación*  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  