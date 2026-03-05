---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *objFolhaEstilo* : Object ) | (*wpDoc* : Object ; *nomeFolhaEstilo* : Text )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| objFolhaEstilo | Object | &#8594;  | objeto folha de estilo |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| nomeFolhaEstilo | Text | &#8594;  | Nome da folha de estilo |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->O comando **WP DELETE STYLE SHEET** elimina o parágrafo designado ou a folha de estilo de caracteres de documento atual.<!-- END REF--> Quando eliminar uma folha de estilo, o caractere ou parágrafo ao que se aplicou volta a seu estilo original (ou seja, o predeterminado).

Este comando oferece duas formas de eliminar uma folha de estilo. Pode especificar:

* o objeto folha de estilo (criado com [WP New style sheet](../commands/wp-new-style-sheet) ou devolvido pelo comando [WP Get style sheet](../commands/wp-get-style-sheet)) para eliminar no parâmetro *tipoFolhaEstilo*, ou
* o documento 4D Write Pro junto com o nome da folha de estilo para eliminar nos parâmetros *wpDoc* e *nomeFolhaEstilo*.

**Nota**: a folha de estilo predeterminada ("Normal") não pode ser eliminada.

## Ver também 

*Accessar texto e atributos de imagem por programação*  
[WP Get style sheet](../commands/wp-get-style-sheet)  
[WP Get style sheets](../commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../commands/wp-import-style-sheets)  
[WP New style sheet](../commands/wp-new-style-sheet)  
