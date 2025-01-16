---
id: create-menu
title: Create menu
slug: /commands/create-menu
displayed_sidebar: docs
---

<!--REF #_command_.Create menu.Syntax-->**Create menu** {( *menu* )} : Text<!-- END REF-->
<!--REF #_command_.Create menu.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Text, Integer, Text | &#8594;  | Referencia del menú o Número o nombre de barra de menús |
| Resultado | Text | &#8592; | Referencia del menú |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Create menu.Summary-->El comando **Create menu** permite crear un nuevo menú en memoria.<!-- END REF--> Este menú sólo existirá en memoria y no se añadirá al editor de menú en el entorno Diseño. Toda modificación efectuada a este menú durante la sesión repercutirá inmediatamente en todas las instancias de este menú y en todos los procesos de la base. 

El comando devuelve un identificador único de tipo MenuRef para el nuevo menú.

* Si no pasa el parámetro opcional *menu*, el menú será creado vacío. Debe construirlo y administrarlo utilizando los comandos [RELEASE MENU](release-menu.md), [SET MENU ITEM](set-menu-item.md), etc.
* Si pasa el parámetro *menu*, el menú creado será una copia exacta del menú fuente designado por este parámetro. Todas las propiedades del menú fuente, incluyendo los submenús asociados, serán aplicadas al nuevo menú. Note que una nueva referencia MenuRef se crea para el menú fuente y para cada submenú asociado existente.

En el parámetro *menu*, puede pasar una referencia de menú válida, o el número o nombre de una barra de menús definida en el entorno Diseño. En este último caso, el nuevo menú estará constituido por los menús y submenús de la barra de menús fuente.

**Nota:** si pasa un valor invalido en *menu*, se crea un menú vacío.

Un menú creado por este comando puede ser utilizado como barra de menús utilizando el comando [SET MENU BAR](set-menu-bar.md).

Cuando ya no necesite el menú creado por [Create menu](create-menu.md), recuerde llamar al comando [RELEASE MENU](release-menu.md) para liberar la memoria que está siendo utilizada. 

#### Ejemplo 

Consulte el ejemplo del comando [SET MENU BAR](set-menu-bar.md "SET MENU BAR").

#### Ver también 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[SET MENU BAR](set-menu-bar.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 408 |
| Hilo seguro | &cross; |


