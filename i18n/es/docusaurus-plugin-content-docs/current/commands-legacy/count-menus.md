---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *proceso* )} : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de referencia de proceso |
| Resultado | Integer | &#8592; | Número de menús de la barra de menús actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Count menus.Summary-->El comando Count menus devuelve el número de menús presentes en la barra de menús.<!-- END REF-->

Si omite el parámetro *proceso*, Count menus se aplica a la barra de menús del proceso actual. De lo contrario, Count menus se aplica a la barra de menús del proceso cuyo número de referencia se pasa en *proceso*. 

#### Ver también 

[Count menu items](count-menu-items.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 404 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


