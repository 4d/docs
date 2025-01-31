---
id: wp-delete-text-box
title: WP DELETE TEXT BOX
slug: /WritePro/commands/wp-delete-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE TEXT BOX.Syntax-->**WP DELETE TEXT BOX** ( *textBox* )<!-- END REF-->
<!--REF #_command_.WP DELETE TEXT BOX.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| textBox | Object | &#8594;  | Text box |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP DELETE TEXT BOX.Summary-->O comando **WP DELETE TEXT BOX** apaga a text box definida no parâmetro *textBox* .<!-- END REF-->

Se *textBox* não existir, o comando não faz nada.

#### Exemplo 

Se quiser apagar uma text box usando seu ID:

```4d
 var $myTextBox : Object
 
  // Obter a text box
 $myTextBox:=WP Get element by ID(myDoc;"AddressBox")
 
  // Apagar a text box
 WP DELETE TEXT BOX($myTextBox)
```

#### Ver também 

[WP New text box](wp-new-text-box.md)  