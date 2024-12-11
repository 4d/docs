---
id: get-menu-item-parameter
title: Get menu item parameter
slug: /commands/get-menu-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item parameter.Syntax-->**Get menu item parameter** ( *menu* ; *lineaMenu* ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item parameter.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594;  | Número de línea de menú o -1 para la última línea añadida al menú |
| Resultado | Text | &#8592; | Parámetro personalizado de la línea de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item parameter.Summary-->El comando Get menu item parameter devuelve la cadena de caracteres personalizada asociada a la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> Esta cadena debe haber sido definida previamente utilizando el comando [SET MENU ITEM PARAMETER](set-menu-item-parameter.md "SET MENU ITEM PARAMETER").

#### Ver también 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[Get selected menu item parameter](get-selected-menu-item-parameter.md)  
[SET MENU ITEM PARAMETER](set-menu-item-parameter.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1003 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


