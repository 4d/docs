---
id: disable-menu-item
title: DISABLE MENU ITEM
slug: /commands/disable-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DISABLE MENU ITEM.Syntax-->**DISABLE MENU ITEM** ( *menu* ; *lineamenu* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.DISABLE MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia del menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594;  | Número de referencia del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DISABLE MENU ITEM.Summary-->El comando DISABLE MENU ITEM desactiva el comando de menú cuyo número o referencia de menú y número de elemento usted pasó en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu*.

Si omite el parámetro proceso, DISABLE MENU ITEM se aplica a la barra de menús del proceso actual. De lo contrario, DISABLE MENU ITEM se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso.*

Si el parámetro *menuItem* designa un submenú jerárquico, todos los elementos de este menú y de los eventuales submenús son desactivados. Este comando también funciona con una barra de menús creada con el comando [Create menu](create-menu.md "Create menu") e instalada con el comando SET MENU BAR.   

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y será ignorado.

**Tip:** para activar/desactivar todas las líneas de menús de una vez, pase 0 (cero) en *menuItem*.

#### Ver también 

[ENABLE MENU ITEM](enable-menu-item.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 150 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


