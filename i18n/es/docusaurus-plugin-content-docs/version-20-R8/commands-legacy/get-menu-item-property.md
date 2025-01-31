---
id: get-menu-item-property
title: GET MENU ITEM PROPERTY
slug: /commands/get-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM PROPERTY.Syntax-->**GET MENU ITEM PROPERTY** ( *menu* ; *lineaMenu* ; *propiedad* ; *valor* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM PROPERTY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer | &#8594;  | Referencia de menú o número de menú |
| lineaMenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido al menú |
| propiedad | Text | &#8594;  | Tipo de propiedad |
| valor | any | &#8592; | Valor de la propiedad |
| proceso | Integer | &#8594;  | Número del proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET MENU ITEM PROPERTY.Summary-->El comando **GET MENU ITEM PROPERTY** devuelve, en el parámetro *valor*, el valor actual de la línea de menú designada por los parámetros *menu* y *lineaMenu*.<!-- END REF--> 

Puede pasar -1 en *lineaMenu* para especificar el último elemento añadido a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el parámetro *proceso* no es necesario y será ignorado si se pasa. Si pasa un número de menú, el comando tendrá en cuenta el menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

En el parámetro *propiedad*, pase la propiedad para la cual quiere obtener el valor. Puede utilizar una de las constantes del tema “*Propiedades de ítem de menú*” o una cadena correspondiente a una propiedad personalizada. Para mayor información sobre las propiedades de los menús y sus valores, consulte la descripción del comando [SET MENU ITEM PROPERTY](set-menu-item-property.md).

**Nota de compatibilidad**: por defecto, si la variable *valor* no se escribe o declara explícitamente como texto, el comando devolverá un nombre *Acción estándar*. Si desea obtener un valor numérico tal como se define en el tema de la constante *Valores para acción estándar asociada* (obsoleto), debe declarar la variable *valor* como entero largo.

#### Ver también 

[SET MENU ITEM PROPERTY](set-menu-item-property.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 972 |
| Hilo seguro | &cross; |


