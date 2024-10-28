---
id: wp-import-style-sheets
title: WP IMPORT STYLE SHEETS
slug: /WritePro/commands/wp-import-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP IMPORT STYLE SHEETS.Syntax-->**WP IMPORT STYLE SHEETS** ( *targetDoc* ; *sourceDoc* )<!-- END REF-->
<!--REF #_command_.WP IMPORT STYLE SHEETS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| targetDoc | Object | &#8594;  | Documento 4D Write Pro que vai receber as folhas de estilo |
| sourceDoc | Object | &#8594;  | Documento 4D Write Pro do qual vai receber as folhas de estilo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP IMPORT STYLE SHEETS.Summary-->O comando **WP IMPORT STYLE SHEETS** importa todas as folhas de estilo de *sourceDoc* em *targetDoc*.<!-- END REF-->

No parâmetro *targetDoc*, passe o documento 4D Write Pro que receberá as folhas de estilo importadas.

No parâmetro *sourceDoc*, passe o documento 4D Write Pro que contenha as folhas de estilo a importar.

**Nota**: se uma folha de estilo de *sourceDoc* tiver o mesmo nome que uma folha de estilo em *targetDoc*, a folha de estilo importada sobre-escreverá (substituirá) a folha de estilo em *targetDoc*.

#### Exemplo 

Se quiser importar uma folha de estilo de modelo e receber uma notificação com o número de cada tipo de folha de estilo importada:

```4d
 wpArea:=WP New
 $template:=WP Import document("Template.4wp")
 
 WP IMPORT STYLE SHEETS(wpArea;$template)
 
 $nb1:=WP Get style sheets(wpArea;wk type paragraph).length
 $nb2:=WP Get style sheets(wpArea;wk type character).length
 ALERT(String($nb1)+" paragraph style sheet(s) and "+string($nb2)+" character style sheet(s) imported))
```

#### Ver também 

[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  