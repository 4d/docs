---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *proceso*} ) : Integer<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| Resultado | Integer | &#8592; | Número de líneas de menú en el menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Count menu items.Summary-->El comando Count menu items devuelve el número de los elementos del menú presentes en el menú cuyo número o referencia se pasa en *menu.<!-- END REF-->*  
  
Si omite el parámetro *proceso*, Count menu items se aplica a la barra de menús del proceso actual. De lo contrario, Count menu items se aplica a la barra de menús del proceso cuyo número de referencia se pasa en *proceso*. 

**Nota**: si pasa un parámetro MenuRef en *menu*, el parámetro *proceso* es inútil y se ignorará.

#### Ver también 

[Count menus](count-menus.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 405 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


