---
id: get-menu-title
title: Get menu title
slug: /commands/get-menu-title
displayed_sidebar: docs
---

<!--REF #_command_.Get menu title.Syntax-->**Get menu title** ( *menu* {; *proceso*} ) : Text<!-- END REF-->
<!--REF #_command_.Get menu title.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| proceso | Integer | &#8594;  | Número de referencia del proceso |
| Resultado | Text | &#8592; | Título del menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get menu title.Summary-->El comando Get menu title devuelve el título del menú cuyo número o referencia se pasa en *menu.<!-- END REF-->*  
  
Si omite el parámetro *proceso*, Get menu title se aplica a la barra de menús del proceso actual. De lo contrario, Get menu title se aplica a la barra de menú para el proceso cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y será ignorado. 

#### Ver también 

[Count menus](count-menus.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 430 |
| Hilo seguro | &cross; |
| Prohibido en el servidor ||


