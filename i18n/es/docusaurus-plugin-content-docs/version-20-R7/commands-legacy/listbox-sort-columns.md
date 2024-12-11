---
id: listbox-sort-columns
title: LISTBOX SORT COLUMNS
slug: /commands/listbox-sort-columns
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SORT COLUMNS.Syntax-->**LISTBOX SORT COLUMNS** ( {* ;} *objeto* ; *numColumna* ; *orden* {; *numColumna2* ; *orden2* ; ... ; *numColumnaN* ; *ordenN*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SORT COLUMNS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| numColumna | Integer | &#8594;  | Número(s) de columna(s) a ordenar |
| orden | * | &#8594;  | ">" para una ordenación ascendente o "<" para una ordenación descendente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SORT COLUMNS.Summary-->El comando LISTBOX SORT COLUMNS aplica una ordenación estándar a las líneas del list box definido por el objeto y los parámetros \* en función de los valores de una o varias columnas.<!-- END REF-->

**Nota**: una ordenación estándar se aplica en base a un único valor de columna cuando el usuario hace clic en el encabezado de la columna (ver *Ordenación estándar*).

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

En *numCol*, pase el número de columna cuyos valores quiere utilizar como criterio de ordenación. Puede utilizar todo tipo de datos, a excepción de imágenes y punteros.

En *orden*, pase el símbolo > o < para indicar el criterio de ordenación. Si *orden* contiene el símbolo “mayor que”(>), el criterio de ordenación es ascendente. Si *orden* contiene el símbolo “menor que” (<), el criterio de ordenación es descendente.

Puede definir ordenaciones multiniveles: para hacerlo, pase tantos pares (*numCol;orden*) como sea necesario. El nivel de ordenación se define por la posición del parámetro en la llamada.

Conforme con el principio de funcionamiento del list box, las columnas están sincronizadas, lo que significa que la ordenación de una columna repercute automáticamente en todas las otras columnas del objeto.

**Nota:** el comando **LISTBOX SORT COLUMNS** no tiene en cuenta la propiedad listbox *Sortable*.


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 916 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


