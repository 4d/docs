---
id: listbox-get-column-width
title: LISTBOX Get column width
slug: /commands/listbox-get-column-width
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get column width.Syntax-->**LISTBOX Get column width** ( {* ;} *objeto* {; *anchoMin* {; *anchoMax*}} )  -> Resultado<!-- END REF-->
<!--REF #_command_.LISTBOX Get column width.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &srarr; | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &srarr; | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| anchoMin | Integer | &harr; | Ancho mínimo de la columna (en píxeles) |
| anchoMax | Integer | &harr; | Ancho máximo de la columna (en píxeles) |
| Resultado | Integer | &larr; | Ancho de la columna (en píxeles) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get column width.Summary-->El comando LISTBOX Get column width devuelve el largo (en píxeles) de la columna designada por los parámetros *objeto* y *\*.<!-- END REF-->* Puede pasar indiferentemente una columna o un título de columna de list box en el parámetro *objeto*. 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección . 

LISTBOX Get column width puede devolver en los parámetros *anchoMin* y *anchoMax* los límites de redimensionamiento de la columna. Estos límites pueden definirse utilizando el comando [LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md "LISTBOX SET COLUMN WIDTH").   
Si no se ha definido ningún valor de ancho mínimo y/o máximo para la columna, el parámetro correspondiente devuelve 0\. 

#### Ver también 

[LISTBOX SET COLUMN WIDTH](listbox-set-column-width.md)  