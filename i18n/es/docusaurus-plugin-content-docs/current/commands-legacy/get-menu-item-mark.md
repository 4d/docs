---
id: get-menu-item-mark
title: Get menu item mark
slug: /commands/get-menu-item-mark
displayed_sidebar: docs
---

<!--REF #_command_.Get menu item mark.Syntax-->**Get menu item mark** ( *menu* ; *lineamenu* {; *proceso*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu item mark.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594;  | Número de referencia de proceso |
| Resultado | Text | &#8592; | Marca de línea del menú actual |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Get menu item mark.Summary-->El comando Get menu item mark devuelve la marca de la línea de menú cuyo número o referencia de menú y número de línea se pasan en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu.*

Si omite el parámetro proceso, Get menu item mark se aplica a la barra de menús del proceso actual. De lo contrario, Get menu item mark se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y será ignorado. 

Si la línea de menú no tiene marca o si el parámetro *menuItem* especifica un submenú jerárquico, Get menu item mark devuelve una cadena vacía.

**Nota:** para mayor información sobre las marcas de las líneas de menús en Macintosh y Windows, consulte la descripción del comando [SET MENU ITEM MARK](set-menu-item-mark.md "SET MENU ITEM MARK").

#### Ejemplo 

El siguiente ejemplo invierte la marca de una línea de menú:

```4d
 SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))
```

#### Ver también 

[SET MENU ITEM MARK](set-menu-item-mark.md)  