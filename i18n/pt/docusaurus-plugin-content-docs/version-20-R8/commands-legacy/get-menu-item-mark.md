---
id: get-menu-item-mark
title: Get menu item mark
slug: /commands/get-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item mark.Syntax-->**Get menu item mark** ( *menu* ; *menuItem* {; *processo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item mark.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item de menu ou -1 para o último item adicionado |
| processo | Integer | &#8594;  | Número de referência de processo |
| Resultado | Text | &#8592; | Item de menu atual marcado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu item mark.Summary-->O comando Get menu item mark devolve a marca da linha de menu cujo número ou referência de menu e número de linha se passam em *menu* e *menuItem*.<!-- END REF--> Pode passar -1 em *menuItem* para indicar o último elemento adicionado a *menu.*

Se omite o parâmetro processo, Get menu item mark é aplicado a barra de menus do processo atual. Do contrario, Get menu item mark é aplicado a barra de menus do processo atual cujo número de referencia se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado. 

Se a linha de menu não tem marca ou se o parâmetro *menuItem* especifica um submenu hierárquico, Get menu item mark devolve uma cadeia vazia.

**Nota:** para maior informação sobre as marcas das linhas de menus em Macintosh e Windows, consulte a descrição do comando [SET MENU ITEM MARK](set-menu-item-mark.md "SET MENU ITEM MARK").

#### Exemplo 

O exemplo a seguir exemplo inverte a marca de uma linha de menu:  
  
```4d
 SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))
```

#### Ver também 

[SET MENU ITEM MARK](set-menu-item-mark.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 428 |
| Thread-seguro | &cross; |
| Proibido no servidor ||


