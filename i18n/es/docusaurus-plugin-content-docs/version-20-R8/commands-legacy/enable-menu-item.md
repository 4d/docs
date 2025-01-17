---
id: enable-menu-item
title: ENABLE MENU ITEM
slug: /commands/enable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.ENABLE MENU ITEM.Syntax-->**ENABLE MENU ITEM** ( *menu* ; *lineamenu* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.ENABLE MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia del menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594;  | Número de referencia del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ENABLE MENU ITEM.Summary-->El comando ENABLE MENU ITEM activa el comando de menú cuyo número o referencia de menú y número de elemento usted pasó en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu*.

Si omite el parámetro *proceso*, ENABLE MENU ITEM se aplica a la barra de menús del proceso actual. De lo contrario, ENABLE MENU ITEM se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y será ignorado.

**Tip:** para activar/desactivar todas los comandos de menús de una vez, pase 0 (cero) en *menuItem*.

#### Ver también 

[DISABLE MENU ITEM](disable-menu-item.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 149 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


