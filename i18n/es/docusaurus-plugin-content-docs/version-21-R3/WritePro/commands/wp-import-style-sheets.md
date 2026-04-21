---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* : Object ; *sourceDoc* : Object )<!-- END REF-->

<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->

<div class="no-index">

| Parámetros | Tipo   |                             | Descripción                                         |
| ---------- | ------ | --------------------------- | --------------------------------------------------- |
| targetDoc  | Object | &#8594; | Documento 4D Write Pro para recibir hojas de estilo |
| sourceDoc  | Object | &#8594; | 4D Write Pro document to get style sheets from      |

</div>
<!-- END REF-->

## Descripción

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->El comando **WP IMPORT STYLE SHEETS** importa todas las hojas de estilo del *sourceDoc* al *targetDoc*.<!-- END REF-->

En el parámetro *targetDoc*, pase el documento 4D Write Pro que recibirá las hojas de estilo importadas.

In the *sourceDoc* parameter, pass the 4D Write Pro document containing the style sheets to import.

**Note**: If a style sheet from *sourceDoc* has the same name as a style sheet in *targetDoc*, the imported style sheet will overwrite (replace) the style sheet in the *targetDoc*.

## Ejemplo

You want to import a template style sheet and receive a notification with the number for each type of style sheet imported:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

## Ver también

[WP DELETE STYLE SHEET](../WritePro/commands/wp-delete-style-sheet)  
[WP Get style sheet](../WritePro/commands/wp-get-style-sheet)  
[WP Get style sheets](../WritePro/commands/wp-get-style-sheets)  
[WP New style sheet](../WritePro/commands/wp-new-style-sheet)