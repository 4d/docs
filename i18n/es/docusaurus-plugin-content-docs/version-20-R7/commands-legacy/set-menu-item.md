---
id: set-menu-item
title: SET MENU ITEM
slug: /commands/set-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM.Syntax-->**SET MENU ITEM** ( *menu* ; *lineamenu* ; *textoElem* {; *proceso*}{; *} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido |
| textoElem | Text | &#8594;  | Nuevo texto de la línea de menú |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| * | Operador | &#8594;  | Si se pasa: considerar metacaracteres como caracteres estándar |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET MENU ITEM.Summary-->El comando SET MENU ITEM cambia el texto de la línea de menú cuyo número o referencia de menú se pasa en *menu* y cuyo número de elemento se pasa en *menuItem*, para el texto que pasó en *itemText*.<!-- END REF--> Puede pasar -1 en *menuItem* para designar el último elemento añadido a *menu*.

Si no pasa el parámetro *\**, los caracteres "especiales" incluídos en *itemText* (tales como *( ; o !)* serán considerados como caracteres de instrucción (metacaracteres). Por ejemplo, para definir un elemento de menú como una línea de separación, inserte el carácter “-” en *itemText*. Si pasa el parámetro \*, los caracteres "especiales" se considerarán como caracteres estándar. Por favor consulte la descripción del comando [APPEND MENU ITEM](append-menu-item.md "APPEND MENU ITEM") para más información sobre los detalles de estos caracteres.

Si omite el parámetro *proceso*, SET MENU ITEM se aplica a la barra de menús del proceso actual. De lo contrario, SET MENU ITEM se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

#### Ver también 

[APPEND MENU ITEM](append-menu-item.md)  
[Get menu item](get-menu-item.md)  
[SET MENU ITEM SHORTCUT](set-menu-item-shortcut.md)  