---
id: get-menu-item-method
title: Get menu item method
slug: /commands/get-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item method.Syntax-->**Get menu item method** ( *menu* ; *menuItem* {; *processo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de referência ou Número de Menu |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| processo | Integer | &#8594;  | Número de processo |
| Resultado | Text | &#8592; | Nome do método |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Get menu item method.Summary-->O comando Get menu item method devolve o nome do método de projeto 4D associado a linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> 

Pode passar -1 em *menuItem* com o objetivo de especificar o último elemento adicionado ao *menu*.

Em *menu*, pode passar uma referência de menu ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) ou um número de menu. Se passa uma referencia de menu, o parâmetro *processo* não é necessário e se for passado será ignorado. Se passa um número de menu, o comando tomará o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu número no parâmetro opcional *processo*.

O comando devolve o nome do método 4D como uma cadeia de caracteres (expressão). Se nenhum método está associado a linha de menu, o comando devolve uma cadeia vazia.

#### Ver também 

[SET MENU ITEM METHOD](set-menu-item-method.md)  