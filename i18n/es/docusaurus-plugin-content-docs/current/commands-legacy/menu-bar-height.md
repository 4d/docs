---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expresada en píxeles) de la barra de menús (devuelve cero si la barra de menús está oculta) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Menu bar height.Summary-->Menu bar height devuelve la altura de la barra de menús, expresada en píxeles.<!-- END REF-->

El comando devuelve 0:

* Si la barra de menús está oculta
* En modo SDI en Windows, si se llama desde un proceso sin una ventana de formulario. Para más información sobre este modo, consulte la sección *Modo SDI en Windows*.

**Nota:** cuando la aplicación se ejecuta en modo SDI en Windows, **Menu bar height** devuelve la altura de una sola línea de barra de menú, incluso si la ventana se estrecha y la barra de menús se ha ajustado en dos o más líneas.

#### Ver también 

[HIDE MENU BAR](hide-menu-bar.md)  
[Menu bar screen](menu-bar-screen.md)  
[SHOW MENU BAR](show-menu-bar.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 440 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


