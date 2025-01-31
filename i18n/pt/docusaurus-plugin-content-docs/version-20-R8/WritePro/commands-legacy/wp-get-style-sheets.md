---
id: wp-get-style-sheets
title: WP Get style sheets
slug: /WritePro/commands/wp-get-style-sheets
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheets.Syntax-->**WP Get style sheets** ( *wpDoc* ; *tipo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get style sheets.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4D Write Pro |
| tipo | Integer | &#8594;  | Tipo de folha de estilo |
| Resultado | Collection | &#8592; | Coleção de objetos folha de estilo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get style sheets.Summary-->O comando **WP Get style sheets** devolve uma coleção de todos os objetos de folha de estilo de *tipo* definido em *wpDoc*.<!-- END REF-->

No parâmetro *wpDoc*, passe o documento 4D Write Pro com as folhas de estilo que quiser obter.

O parâmetro *tipo* especifica o tipo de folha a devolver. Os tipos disponíveis são:

* wk type character para folhas de estilo de caracteres
* wk type paragraph para folhas de estilo de parágrafo

#### Exemplo 

Se quiser recuperar uma coleção de todas as folhas de estilo de caracteres:

```4d
 var $styleSheets : Collection
 $styleSheets:=WP Get style sheets(myDoc;wk type character)
```

#### Ver também 

*Accessar texto e atributos de imagem por programação*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  