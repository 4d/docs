---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** {( *processo* )} -> Resultado<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &rarr; | Número de referência de processo |
| Resultado | Integer | &larr; | Número de menus da barra de menus atual |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count menus.Summary-->O comando Count menus devolve o número de menus presentes na barra de menus.<!-- END REF-->

Se omitir o parâmetro *processo*, Count menus é aplicada a barra de menus do processo atual. Do contrário, Count menus é aplicada a barra de menus do processo cujo número de referência se passa em *processo*. 

#### Ver também 

[Count menu items](count-menu-items.md)  