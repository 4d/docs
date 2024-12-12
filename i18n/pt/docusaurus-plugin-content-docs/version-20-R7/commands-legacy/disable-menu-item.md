---
id: disable-menu-item
title: DISABLE MENU ITEM
slug: /commands/disable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DISABLE MENU ITEM.Syntax-->**DISABLE MENU ITEM** ( *menu* ; *menuItem* {; *processo*} )<!-- END REF-->
<!--REF #_command_.DISABLE MENU ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado |
| processo | Integer | &#8594;  | Número de referência do processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.DISABLE MENU ITEM.Summary-->O comando DISABLE MENU ITEM desativa o comando de menu cujo número ou referência de menu e número de elemento você passou em *menu* e *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu*.

Se omite o parâmetro processo, DISABLE MENU ITEM é aplicado à barra de menus do processo atual. Do contrário, DISABLE MENU ITEM é aplicado à barra de menus do processo atual cujo número de referência se passa em *processo.*

Se o parâmetro *menuItem* designa um submenu hierárquico, todos os elementos deste menu e dos eventuais submenus são desativados. Este comando também funciona com uma barra de menus criada com o comando [Create menu](create-menu.md "Create menu") e instalada com o comando SET MENU BAR.   

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado.

**Tip:** para ativar/desativar todas as linhas de menus de uma vez, passe 0 (zero) em *menuItem*.

#### Ver também 

[ENABLE MENU ITEM](enable-menu-item.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 150 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


