---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *objetoHojaEstilo* : Object ) | (*wpDoc* : Object ; *nombreHojaEstilo* : Text )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
<div class="no-index">

| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objetoHojaEstilo | Object | &#8594;  | Objeto hoja de estilo |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| nombreHojaEstilo | Text | &#8594;  | Nombre de la hoja de estilo |
</div>
<!-- END REF-->

## Descripción 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->El comando **WP DELETE STYLE SHEET** elimina el párrafo designado o la hoja de estilo de caracteres del documento actual.<!-- END REF--> Cuando se elimina una hoja de estilo, el carácter o párrafo al que se aplicó vuelve a su estilo original (es decir, el predeterminado).

Este comando ofrece dos formas de eliminar una hoja de estilo. Puede especificar:

* el objeto hoja de estilo (creado con [WP New style sheet](../commands/wp-new-style-sheet) o devuelto por el comando [WP Get style sheet](../commands/wp-get-style-sheet)) para eliminar en el parámetro *tipoHojaEstilo*, o
* el documento 4D Write Pro junto con el nombre de la hoja de estilo para eliminar en los parámetros *wpDoc* y *nombreHojaEstilo*.

**Nota**: la hoja de estilo predeterminada ("Normal") no se puede eliminar.

## Ver también 

*Acceder a contenidos de documentos por programación*  
[WP Get style sheet](../commands/wp-get-style-sheet)  
[WP Get style sheets](../commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../commands/wp-import-style-sheets)  
[WP New style sheet](../commands/wp-new-style-sheet)  
