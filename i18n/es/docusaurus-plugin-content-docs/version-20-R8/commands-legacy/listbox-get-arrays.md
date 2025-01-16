---
id: listbox-get-arrays
title: LISTBOX GET ARRAYS
slug: /commands/listbox-get-arrays
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET ARRAYS.Syntax-->**LISTBOX GET ARRAYS** ( {* ;} *objeto* ; *arrNomsCols* ; *arrNomsEncabezados* ; *arrVarCols* ; *arrVarEncabezados* ; *arrColsVisibles* ; *arrEstilos* {; *arrNomsPies* ; *arrVarsPies*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET ARRAYS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| arrNomsCols | Text array | &#8592; | Nombres de objeto de las columnas |
| arrNomsEncabezados | Text array | &#8592; | Nombres de objeto de los títulos |
| arrVarCols | Pointer array | &#8592; | Punteros hacia las variables de las columnas |
| arrVarEncabezados | Pointer array | &#8592; | Punteros hacia campos o Nil |
| arrColsVisibles | Boolean array | &#8592; | Visibilidad de cada columna |
| arrEstilos | Pointer array | &#8592; | Punteros a los arrays o a las variables de estilos de colores y de visibilidad o Nil |
| arrNomsPies | Text array | &#8592; | Nombres de los objetos de pies de columna |
| arrVarsPies | Pointer array | &#8592; | Punteros a las variables de pies de columna |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET ARRAYS.Summary-->El comando **LISTBOX GET ARRAYS** devuelve un conjunto de arrays sincronizados ofreciendo información sobre cada columna (visible o invisible) del list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional \*, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

Una vez se ejecuta el comando: 

* El array *arrNomsCols* contiene la lista de los nombres de los objetos para cada columna del list box.
* El array *arrNomsEncabezados* contiene la lista de los nombres de los objetos para cada título de columna del list box.
* El array *arrVarCol*s contiene los punteros hacia las variables (arrays) asociadas a cada columna del list box. Para un listbox de tipo selección, *arrVarCols* contiene:  
   * Para una columna asociada a un campo, un puntero al campo asociado,  
   * Para una columna asociada a una variable, un puntero a la variable,  
   * Para una columna asociada a una expresión, un puntero Nil.
* El array *arrVarEncabezados* contiene punteros hacia las variables asociadas a cada título de columna del list box.
* El array *arrColsVisibles* contiene un valor Booleano para cada columna, indicando si la columna es visible ([True](true.md "True")) o oculta ([False](false.md "False")) en el list box.
* El array *arrEstilos* contiene, para un list box de tipo array, cuatro hacia cuatro arrays que permiten aplicar individualmente un estilo, un color de fuente, un color de fondo y un control de visualización personalizado a cada fila del list box. Estos arrays son asociados al list box en la Lista de propiedades del modo Diseño o vía el comando [LISTBOX SET ARRAY](listbox-set-array.md). Si un array no es especificado para el list box, el elemento correspondiente en *arrEstilos* contendrá un puntero Nil.  
El cuarto del puntero corresponde ya sea a un array booleano (array de líneas ocultas), o a un array entero largo (array utilizado para definir las líneas ocultas, desactivadas y no seleccionables), en función de la implementación utilizada para el array de control de líneas (ver *Propiedades específicas de los list box*).  
Para un list box de tipo selección, colección o selección de entidades, *arrEstilos* contiene:
* * Por cada configuración definida vía una variable, un puntero a la variable,  
   * Por cada configuración definida vía una expresión, un puntero Nil.

#### Ver también 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 832 |
| Hilo seguro | &cross; |


