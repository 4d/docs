---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *docTarget* ; *docSource* )<!-- END REF-->
<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| docTarget | Object | &#8594;  | Documento 4D Write Pro para recibir hojas de estilo |
| docSource | Object | &#8594;  | Documento 4D Write Pro para obtener hojas de estilo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->El comando **WP IMPORT STYLE SHEETS** importa todas las hojas de estilo de *docSource* en *docTarget*.<!-- END REF-->

En el parámetro *docTarget*, pase el documento 4D Write Pro que recibirá las hojas de estilo importadas.

En el parámetro *docSource*, pase el documento 4D Write Pro que contiene las hojas de estilo a importar.

**Nota**: si una hoja de estilo de *docSource* tiene el mismo nombre que una hoja de estilo en *docTarget*, la hoja de estilo importada sobrescribirá (reemplazará) la hoja de estilo en *docTarget*.

#### Ejemplo 

Desea importar una hoja de estilo de plantilla y recibir una notificación con el número de cada tipo de hoja de estilo importada:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" hoja(s) de estilo de párrafo "+string($nb2)+" hojas de estilo de caracter(es) importados))
```

#### Ver también 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  