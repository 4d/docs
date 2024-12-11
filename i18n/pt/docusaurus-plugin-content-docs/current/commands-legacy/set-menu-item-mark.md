---
id: set-menu-item-mark
title: SET MENU ITEM MARK
slug: /commands/set-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM MARK.Syntax-->**SET MENU ITEM MARK** ( *menu* ; *menuItem* ; *marcar* {; *processo*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM MARK.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de Item ou -1 para o último item adicionado |
| marcar | Text | &#8594;  | Marcar item Novo menu |
| processo | Integer | &#8594;  | Número de referência de processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM MARK.Summary-->O comando SET MENU ITEM MARK modifica a marca do elemento de menu cujo número ou referência de menu é passado em *menu* e cujo número de linha se passa em *menuItem* ao primeiro caractere da cadeia passada em *marcar*.<!-- END REF--> Pode passar -1 em *menuItem* para designar a última linha adicionada ao menu.

Se omitir o parâmetro *processo*, SET MENU ITEM MARK é aplicada à barra de menus do processo atual. Do contrário, SET MENU ITEM MARK é aplicado a barra de menus do processo atual cujo número de referência se passa em *processo*. 

**Nota**: se passa um parâmetro MenuRef em menu, ou parâmetro processo é inútil e será ignorado

Se passa uma cadeia vazia, toda marca da linha de menu é eliminada. Do contrário:

* Em Macintosh, o primeiro caractere da cadeia é convertido na marca da linha de menu. Geralmente, passará Char (18), o qual é o caractere de marca para os menus Macintosh.
* Em Windows, a marca automática de Window é associada ao menu

#### Exemplo 

Ver exemplo para o comando [Get menu item mark](get-menu-item-mark.md "Get menu item mark").

#### Ver também 

[Get menu item mark](get-menu-item-mark.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 208 |
| Thread-seguro | &check; |
| Proibido no servidor ||


