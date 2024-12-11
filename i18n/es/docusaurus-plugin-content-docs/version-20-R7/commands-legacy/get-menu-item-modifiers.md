---
id: get-menu-item-modifiers
title: Get menu item modifiers
slug: /commands/get-menu-item-modifiers
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item modifiers.Syntax-->**Get menu item modifiers** ( *menu* ; *lineaMenu* {; *proceso*} ) : Integer<!-- END REF-->
<!--REF #_command_.Get menu item modifiers.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido al menú |
| proceso | Integer | &#8594;  | Número de proceso |
| Resultado | Integer | &#8592; | Tecla(s) de modificación asociada(s) a la línea de menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item modifiers.Summary-->El comando Get menu item modifiers devuelve los modificadores adicionales asociados a los atajos de teclado estándar de la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF-->

El atajo estándar está compuesto por la tecla **Comando** (Mac OS) o **Ctrl** (Windows) y de una tecla personalizada. El atajo estándar se administra utilizando los comandos [SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md "SET MENU ITEM SHORTCUT") y [Get menu item key](get-menu-item-key.md "Get menu item key").

Los modificadores adicionales son la tecla **Mayús**  y la tecla Opción (Mac OS) /Alt (Windows). Estos modificadores sólo pueden utilizarse cuando un atajo estándar ha sido definido de antemano.

El valor del número devuelto por el comando corresponde al código de las teclas de modificación adicionales. Los códigos de las teclas son los siguientes:

* **Mayús** \= 512
* **Opción** (Mac OS) o **Alt** (Windows) = 2048

Si se utilizan ambas teclas, sus valores se combinan.

**Nota:** puede evaluar el valor devuelto utilizando las constantes Shift key mask  y Option key mask del tema “”.

Si la línea de menú no tiene una tecla de modificación asociada, el comando devuelve 0.

Puede pasar -1 en *lineaMenu* con el fin de especificar el último elemento añadido a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número.

Si pasa una referencia de menú, el parámetro *proceso* es inútil y será ignorado si se pasa.

Si pasa un número de menú, el comando tomará el menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

#### Ejemplo 

Consulte el ejemplo del comando [Get menu item key](get-menu-item-key.md "Get menu item key"). 

#### Ver también 

[Get menu item key](get-menu-item-key.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 980 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


