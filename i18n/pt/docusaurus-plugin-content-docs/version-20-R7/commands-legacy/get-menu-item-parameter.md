---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* ; *menuItem* ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado ao menu |
| Resultado | Text | &#8592; | Parâmetro personalizado do item de menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu item parameter.Summary-->O comando Get menu item parameter devolve a cadeia de caracteres personalizada associada a linha de menu designada pelos parâmetros *menu* e *menuItem*.<!-- END REF--> Esta cadeia deve ter sido definida previamente utilizando o comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER").

#### Ver também 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1003 |
| Thread-seguro | &check; |
| Proibido no servidor ||


