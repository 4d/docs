---
id: listbox-get-grid
title: LISTBOX GET GRID
slug: /commands/listbox-get-grid
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET GRID.Syntax-->**LISTBOX GET GRID** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET GRID.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| horizontal | Boolean | &#8592; | True = visible, False = oculto |
| vertical | Boolean | &#8592; | True = visible, False = oculto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET GRID.Summary-->El comando **LISTBOX GET GRID** devuelve el estado visible/oculto de las líneas horizontales y/o verticales que componen la rejilla del objeto list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
El comando devuelve en los parámetros *horizontal* y *vertical*, el valor **True** o **False** dependiendo de si las líneas correspondientes se muestran (True) o se ocultan (False). Por defecto, se muestra la rejilla.

#### Ver también 

[LISTBOX SET GRID](listbox-set-grid.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1199 |
| Hilo seguro | &cross; |


