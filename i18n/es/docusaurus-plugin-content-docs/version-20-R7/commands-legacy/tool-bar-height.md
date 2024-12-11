---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expresada en píxeles) de la barra de herramientas o 0 si la barra está oculta |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Tool bar height.Summary-->El comando Tool bar height devuelve la altura de la barra de herramientas visible actualmente, expresada en píxeles.<!-- END REF--> Dependiendo del contexto, puede ser la barra de herramientas de modo Diseño 4D, o una barra de herramientas personalizada creada con [Open form window](open-form-window.md) (la barra de herramientas de modo Diseño se oculta automáticamente cuando se muestra una barra de herramientas personalizada).

Si no se muestra ninguna barra de herramientas, el comando devuelve 0.

#### Ver también 

[HIDE TOOL BAR](hide-tool-bar.md)  
[Menu bar height](menu-bar-height.md)  
[SHOW TOOL BAR](show-tool-bar.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1016 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


