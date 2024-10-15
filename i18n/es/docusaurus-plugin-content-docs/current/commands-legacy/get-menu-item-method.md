---
id: get-menu-item-method
title: Get menu item method
slug: /commands/get-menu-item-method
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item method.Syntax-->**Get menu item method** ( *menu* ; *lineaMenu* {; *proceso*} ) -> Resultado<!-- END REF-->
<!--REF #_command_.Get menu item method.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &rarr; | Referencia de menú o Número de menú |
| lineaMenu | Integer | &rarr; | Número de línea de menú o -1 para el último elemento añadido al menú |
| proceso | Integer | &rarr; | Número de proceso |
| Resultado | Text | &larr; | Nombre del método |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu item method.Summary-->El comando Get menu item method devuelve el nombre del método de proyecto 4D asociado a la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> 

Puede pasar -1 en *lineaMenu* con el fin de especificar el último elemento añadido al *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el parámetro *proceso* no será necesario y si se pasa será ignorado. Si pasa un número de menú, el comando tomará el menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

El comando devuelve el nombre del método 4D como una cadena de caracteres (expresión). Si ningún método está asociado a la línea de menú, el comando devuelve una cadena vacía.

#### Ver también 

[SET MENU ITEM METHOD](set-menu-item-method.md)  