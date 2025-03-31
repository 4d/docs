---
id: wp-get-style-sheet
title: WP Get style sheet
slug: /WritePro/commands/wp-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP Get style sheet.Syntax-->**WP Get style sheet** ( *wpDoc* ; *nomeFolhaEstilo* ) -> Resultado<!-- END REF-->
<!--REF #_command_.WP Get style sheet.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Documento 4d Write Pro |
| nomeFolhaEstilo | Text | &#8594;  | Nome da folha de estilo |
| Resultado | Object | &#8592; | Objeto estiloFolha |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WP Get style sheet.Summary-->O comando **WP Get style sheet** devolve o objeto de folha de estilo designado por *nomeFolhaEstilo*.<!-- END REF-->

Em *wpDoc*, passe o documento 4D Write Pro que contém a folha de estilo.

O parâmetro *nomeFolhaEstilo* lhe permite especificar o nome da folha de estilo a devolver. Se o nome da folha de estilo não existir em *wpDoc*, um objeto nulo é devolvido.

#### Exemplo 

Para recuperar a folha de estilo "Main title":

```4d
 var $styleSheet : Object
 
 $styleSheet:=WP Get style sheet(wpArea;"Main title")
 If($styleSheet=Null) // verifica se a folha de estilo existe//se não existir, vai criá-la
    $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")
 End if
```

#### Ver também 

*Accessar texto e atributos de imagem por programação*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  
[WP New style sheet](wp-new-style-sheet.md)  