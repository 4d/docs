---
id: listbox-get-footer-calculation
title: LISTBOX Get footer calculation
slug: /commands/listbox-get-footer-calculation
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get footer calculation.Syntax-->**LISTBOX Get footer calculation** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get footer calculation.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| resultado | Integer | &#8592; | Tipo de cálculo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX Get footer calculation.Summary-->El nuevo comando **LISTBOX Get footer calculation** devuelve el tipo de cálculo asociado al área de pie de página del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
El parámetro *objeto* puede designar:  

* la variable o el nombre de un área de pie de página. En este caso, el comando devuelve el cálculo asociado a esta área.
* la variable o el nombre de una columna de list box. En este caso, el comando devuelve el cálculo asociado al área de pie de página de esta columna.
Puede comparar el valor devuelto con las constantes del tema *List box cálculo pie*  (ver el comando [LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)).

#### Ver también 

[LISTBOX SET FOOTER CALCULATION](listbox-set-footer-calculation.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1150 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


