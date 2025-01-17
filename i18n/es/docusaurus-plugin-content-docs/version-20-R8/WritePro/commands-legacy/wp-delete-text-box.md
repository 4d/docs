---
id: wp-delete-text-box
title: WP DELETE TEXT BOX
slug: /WritePro/commands/wp-delete-text-box
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE TEXT BOX.Syntax-->**WP DELETE TEXT BOX** ( *textBox* )<!-- END REF-->
<!--REF #_command_.WP DELETE TEXT BOX.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| textBox | Object | &#8594;  | Caja de texto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.WP DELETE TEXT BOX.Summary-->El comando **WP DELETE TEXT BOX** borra la caja de texto definida por el parámetro *textBox*.<!-- END REF-->

Si *textBox* no existe, el comando no hace nada.

#### Ejemplo 

Quiere borrar una caja de texto utilizando su ID:

```4d
 var $myTextBox : Object
 
  // Obtener la caja de texto
 $myTextBox:=WP Get element by ID(myDoc;"AddressBox")
 
  // Borrar la caja de texto
 WP DELETE TEXT BOX($myTextBox)
```

#### Ver también 

[WP New text box](wp-new-text-box.md)  