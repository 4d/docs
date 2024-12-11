---
id: set-menu-item-method
title: SET MENU ITEM METHOD
slug: /commands/set-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM METHOD.Syntax-->**SET MENU ITEM METHOD** ( *menu* ; *lineaMenu* ; *nomMetodo* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM METHOD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido al menú |
| nomMetodo | Text | &#8594;  | Nombre del método |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM METHOD.Summary-->El comando SET MENU ITEM METHOD puede utilizarse para modificar el método de proyecto 4D asociado a la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> 

Puede pasar -1 en *lineaMenu* para especificar la última línea a añadida a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el comando se aplicará a todas las instancias del menú en todos los procesos En este caso, si se pasa el parámetro *proceso* se ignora. Si pasa un número de menú, el comando se aplicará al menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

En *metodo*, pase el nombre del método 4D como cadena de caracteres (expresión).

**Nota:** si la línea de menú corresponde al título de un submenú jerárquico, el método no se llamará cuando la línea de menú sea seleccionada.

#### Ejemplo 

Consulte el ejemplo del comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

#### Ver también 

[Get menu item method](get-menu-item-method.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 982 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


