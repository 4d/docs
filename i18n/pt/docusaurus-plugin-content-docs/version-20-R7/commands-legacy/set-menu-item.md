---
id: set-menu-item
title: SET MENU ITEM
slug: /commands/set-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM.Syntax-->**SET MENU ITEM** ( *menu* ; *menuItem* ; *textoElem* {; *processo*}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| menuItem | Integer | &#8594;  | Número de item menu ou  -1 para o último item adicionado |
| textoElem | Text | &#8594;  | Novo texto para o item de menu |
| processo | Integer | &#8594;  | Número de referência do processo |
| * | Operador | &#8594;  | Se passado: considerar metacaracteres como caracteres comuns |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET MENU ITEM.Summary-->O comando SET MENU ITEM modifica o texto da linha de menu cujo número ou referencia de menu se passa em *menu* e cujo número de elemento se passa em *menuItem*, para o texto que passou em *itemText*.<!-- END REF--> Pode passar -1 em *menuItem* para designar o último elemento adicionado a *menu*.

Se no passa o parâmetro *\**, os caracteres "especiais" incluídos em *itemText* (tais como *( ; o !)* serão considerados como caracteres de instrução (meta caracteres). Por exemplo, para definir um elemento de menu como uma linha de separação, insere o caractere “-” em *itemText*. Se passa o parâmetro *\**, os caracteres "especiais" são considerados como caracteres padrão. Por favor consulte a descrição do comando [APPEND MENU ITEM](append-menu-item.md "APPEND MENU ITEM") para mais informação sobre os detalhes destes caracteres.

Se omitir o parâmetro *processo*, SET MENU ITEM é aplicada à barra de menus do processo atual. Do contrário, SET MENU ITEM é aplicado à barra de menus do processo atual cujo número de referência é passada em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado. 

#### Ver também 

[APPEND MENU ITEM](append-menu-item.md)  
[Get menu item](get-menu-item.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 348 |
| Thread-seguro | &check; |
| Proibido no servidor ||


