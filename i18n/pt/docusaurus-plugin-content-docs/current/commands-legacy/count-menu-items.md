---
id: count-menu-items
title: Count menu items
slug: /commands/count-menu-items
displayed_sidebar: docs
---

<!--REF #_command_.Count menu items.Syntax-->**Count menu items** ( *menu* {; *processo*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Count menu items.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| menu | Integer, Text | &#x1F852; | Número de menu ou menu de referência |
| processo | Integer | &#x1F852; | Número de referência do processo |
| Resultado | Integer | &#x1F850; | Número de itens de menu no menu |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Count menu items.Summary-->O comando Count menu items devolve o número dos elementos do menu presentes no menu cujo número ou referência é passada em *menu.<!-- END REF-->*  
  
Se omite o parâmetro *processo*, Count menu items é aplicada a barra de menus do processo atual. Do contrário, Count menu items é aplicado a barra de menus do processo cujo número de referência é passada em *processo*. 

**Nota**: se passa um parâmetro MenuRef em *menu*, o parâmetro *processo é* inútil e será ignorado.

#### Ver também 

[Count menus](count-menus.md)  