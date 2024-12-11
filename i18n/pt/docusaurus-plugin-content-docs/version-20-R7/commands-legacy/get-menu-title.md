---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *processo*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menu ou menu de referência |
| processo | Integer | &#8594;  | Número de referência de processo |
| Resultado | Text | &#8592; | Título do menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get menu title.Summary-->O comando Get menu title devolve o título do menu cujo número ou referência é passada em *menu.<!-- END REF-->*  
  
Se omite o parâmetro *processo*, Get menu title é aplicado à barra de menus do processo atual. Do contrário, Get menu title se aplica a barra de menu para o processo cujo número de referência se passa em *processo*. 

**Nota:** se passa um [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") em *menu*, o parâmetro *processo* é inútil e será ignorado. 

#### Ver também 

[Count menus](count-menus.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 430 |
| Thread-seguro | &check; |
| Proibido no servidor ||


