---
id: get-menu-item
title: Get menu item
slug: /commands/get-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item.Syntax-->**Get menu item** ( *menu* ; *lineamenu* {; *proceso*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get menu item.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Entero largo, MenuRef | &#x1F852; | Número de menú o Referencia de menú |
| lineamenu | Entero largo | &#x1F852; | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Entero largo | &#x1F852; | Número de referencia del proceso |
| Resultado | Cadena | &#x1F850; | Texto del elemento de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item.Summary-->El comando Get menu item devuelve el texto del comando de menú cuyos números de menú y de comando se pasan en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu*. 

Si omite el parámetro *proceso*, Get menu item se aplica a la barra de menús del proceso actual. De lo contrario, Get menu item se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

#### Ver también 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM](set-menu-item.md)  