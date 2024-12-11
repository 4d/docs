---
id: enable-menu-item
title: ENABLE MENU ITEM
slug: /commands/enable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.ENABLE MENU ITEM.Syntax-->**ENABLE MENU ITEM** ( *menu* ; *menuItem* {; *processo*} )<!-- END REF-->
<!--REF #_command_.ENABLE MENU ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número do item de menu ou -1 para o último item adicionado |
| processo | Integer | &#8594;  | Número de referência de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.ENABLE MENU ITEM.Summary-->O comando ENABLE MENU ITEM ativa o comando de menu cujo número ou referência de menu e número de elemento que passou em *menu* e *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu*.

Se omite o parâmetro *processo*, ENABLE MENU ITEM é aplicado a barra de menus do processo atual. Do contrário, ENABLE MENU ITEM é aplicado a barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado.

**Tip:** para ativar/desativar todos os comandos de menus de uma vez, passe 0 (zero) em *menuItem*.

#### Ver também 

[DISABLE MENU ITEM](disable-menu-item.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 149 |
| Thread-seguro | &check; |
| Proibido no servidor ||


