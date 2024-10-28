---
id: delete-menu-item
title: DELETE MENU ITEM
slug: /commands/delete-menu-item
displayed_sidebar: docs
---

<!--REF #_command_.DELETE MENU ITEM.Syntax-->**DELETE MENU ITEM** ( *menu* ; *lineamenu* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.DELETE MENU ITEM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Número de menú o Referencia de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 por el último elemento añadido |
| proceso | Integer | &#8594;  | Número de referencia de proceso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.DELETE MENU ITEM.Summary-->El comando DELETE MENU ITEM elimina la línea de menú cuyo número o referencia de menú y número de elemento usted pasó en *menu* y *menuItem*.<!-- END REF--> Puede pasar -1 en *menuItem* para indicar el último elemento añadido a *menu.*

Si la línea de menú especificada *menu* y menuItem es un menú administrado por referencia y creado, por ejemplo, utilizando el comando [Create menu](create-menu.md "Create menu"), DELETE MENU ITEM borrará únicamente la instancia de *menuItem* en *menu.* El submenú referenciado por *menuItem* continuará existiendo en memoria. Debe utilizar el comando [RELEASE MENU](release-menu.md "RELEASE MENU") para borrar definitivamente un menú que es administrado por referencia.   
  
Este comando también funciona con una barra de menús creada con el comando [Create menu](create-menu.md "Create menu") e instalada con el comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

Si omite el parámetro *proceso*, DELETE MENU ITEM se aplica a la barra de menús del proceso actual. De lo contrario, DELETE MENU ITEM se aplica a la barra de menús del proceso actual cuyo número de referencia se pasa en *proceso*. 

**Nota:** si pasa un [MenuRef](# "Unique ID (16-character alphanumeric) of a menu") en *menu*, el parámetro *proceso* es inútil y será ignorado.

**Nota:** por consistencia en la interfaz del usuario, no se conserva un menú que no tenga líneas.

#### Ver también 

[APPEND MENU ITEM](append-menu-item.md)  
[INSERT MENU ITEM](insert-menu-item.md)  