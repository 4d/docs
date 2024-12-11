---
id: set-menu-item-mark
title: SET MENU ITEM MARK
slug: /commands/set-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM MARK.Syntax-->**SET MENU ITEM MARK** ( *menu* ; *lineamenu* ; *marca* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM MARK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| marca | Text | &#8594;  | Nueva marca de línea de menú |
| proceso | Integer | &#8594;  | Número de referencia de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM MARK.Summary-->El comando SET MENU ITEM MARK cambia la marca del elemento de menú cuyo número o referencia de menú se pasa en *menu* y cuyo número de línea se pasa en *menuItem* al primer carácter de la cadena pasada en *marca*.<!-- END REF--> Puede pasar -1 en *menuItem* para designar la última línea añadida al menú.

Si omite el parámetro *proceso*, SET MENU ITEM MARK se aplica a la barra de menús del proceso actual. De lo contrario, SET MENU ITEM MARK se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota**: si pasa un parámetro MenuRef en menú, el parámetro proceso es inútil y se ignorará

Si pasa una cadena vacía, toda marca de la línea de menú se elimina. De lo contrario:

* En Macintosh, el primer carácter de la cadena se convierte en la marca de la línea de menú. Generalmente, pasará Char (18), el cual es el carácter de marca para los menús Macintosh.
* En Windows, la marca estándar de Window se asocia al menú.

#### Ejemplo 

Ver ejemplo para el comando [Get menu item mark](get-menu-item-mark.md "Get menu item mark").

#### Ver también 

[Get menu item mark](get-menu-item-mark.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 208 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


