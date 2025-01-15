---
id: set-menu-item-style
title: SET MENU ITEM STYLE
slug: /commands/set-menu-item-style
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM STYLE.Syntax-->**SET MENU ITEM STYLE** ( *menu* ; *lineamenu* ; *estiloItem* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM STYLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido |
| estiloItem | Integer | &#8594;  | Nuevo estilo de la línea de menú |
| proceso | Integer | &#8594;  | Número de referencia de proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET MENU ITEM STYLE.Summary-->El comando SET MENU ITEM STYLE cambia el estilo de la fuente de la línea de menú cuyo número o referencia de menú se pasa en *menu* y cuyo número de elemento se pasa en *menuItem* de acuerdo al estilo de fuente pasado en *itemEstilo*.<!-- END REF--> Puede pasa -1 en *menuItem* para indicar el último elemento añadido a *menu*.

Si omite el parámetro *proceso*, SET MENU ITEM STYLE se aplica a la barra de menús del proceso actual. De lo contrario, SET MENU ITEM STYLE se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y se ignorará. 

En el parámetro *itemEstilo* puede definir el estilo del elemento. Pase una combinación (una o una suma) de las siguientes constantes predefinidas:

| Constante | Tipo         | Valor |
| --------- | ------------ | ----- |
| Plain     | Entero largo | 0     |
| Bold      | Entero largo | 1     |
| Italic    | Entero largo | 2     |
| Underline | Entero largo | 4     |

  

#### Ver también 

[Get menu item style](get-menu-item-style.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 425 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


