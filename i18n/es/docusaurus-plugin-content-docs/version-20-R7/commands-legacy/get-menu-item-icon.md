---
id: get-menu-item-icon
title: GET MENU ITEM ICON
slug: /commands/get-menu-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.GET MENU ITEM ICON.Syntax-->**GET MENU ITEM ICON** ( *menu* ; *lineamenu* ; *refIcono* {; *proceso*} )<!-- END REF-->
<!--REF #_command_.GET MENU ITEM ICON.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Referencia de menú o número de menú |
| lineamenu | Integer | &#8594;  | Número de línea de menú o -1 para el último elemento añadido al menú |
| refIcono | Text, Integer | &#8592; | Nombre o número de imagen asociado con la línea de menú |
| proceso | Integer | &#8594;  | Número de proceso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET MENU ITEM ICON.Summary-->El comando GET MENU ITEM ICON devuelve, en la variable *refIcono*, la referencia del icono asociado a la línea de menú designada por los parámetros *menu* y *menuItem*.<!-- END REF--> Esta referencia es el nombre o número de la imagen en la librería de imágenes.

Puede pasar -1 en *lineaMenu* para especificar la última línea añadida a *menu*.

En *menu*, puede pasar una referencia de menú ([MenuRef](# "Unique ID (16-character alphanumeric) of a menu")) o un número de menú. Si pasa una referencia de menú, el parámetro *proceso* no será necesario y si se pasa seignorará. Si pasa un número de menú, el comando tendrá en cuenta el menú correspondiente en la barra de menús principal del proceso actual. Si quiere designar otro proceso, pase su número en el parámetro opcional *proceso*.

* Si el icono se ha especificado utilizando un archivo de imagen, el comando devuelve el nombre de la imagen en *refIcono* utilizando **path:<filesystem path>**.
* Si el icono se ha especificado utilizando una imagen de librería (bases binarias únicamente), el comando devuelve el nombre o el número de la imagen dependiendo del tipo de variable pasada en este parámetro. TSe utiliza para un nombre: **pictlib:<name>**.  
Si no atribuye un tipo específico a la variable *refIcono*, por defecto, se devuelve el nombre de la imagen (tipo texto).

Si ningún icono está asociado a la línea de menú, el comando devuelve un valor vacío.

#### Ver también 

[SET MENU ITEM ICON](set-menu-item-icon.md)  