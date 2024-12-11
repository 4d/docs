---
id: listbox-get-cell-position
title: LISTBOX GET CELL POSITION
slug: /commands/listbox-get-cell-position
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET CELL POSITION.Syntax-->**LISTBOX GET CELL POSITION** ( {* ;} *objeto* {; *X* ; *Y* }; *columna* ; *linea* {; *varCol*} )<!-- END REF-->
<!--REF #_command_.LISTBOX GET CELL POSITION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| X | Real | &#8594;  | Coordenada horizontal del ratón |
| Y | Real | &#8594;  | Coordenada vertical del ratón |
| columna | Integer | &#8592; | Número de columna |
| linea | Integer | &#8592; | Número de fila |
| varCol | Pointer | &#8592; | Puntero a la variable de la columna |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX GET CELL POSITION.Summary-->El comando **LISTBOX GET CELL POSITION** devuelve los números de la *columna* y de la *fila* correspondientes a la ubicación en el list box (designado por *\** y *objeto*) del último clic, última selección realizada con el teclado, o las coordenadas vertical y horizontal del ratón.<!-- END REF-->

Este comando devuelve las coordenadas de un clic o de una acción de selección incluso cuando la entrada de datos no es permitida en el list box.

Si se pasan los parámetros *X* e *Y*, este comando devuelve los números de columna y fila correspondientes a las coordenadas del ratón, de lo contrario este comando devuelve los números de columna y fila de un clic o de una acción de selección. El comando devolverá valores válidos incluso cuando la entrada de datos no esté permitida en el list box.

**Notas:** 

* El valor devuelto en el parámetro *linea* no tiene en cuenta ningún estado oculto/mostrado de las líneas de list box. También puede devolver un valor de 0 si el clic o la posición *Y* está por debajo de la última fila.
* Si se hace clic en una celda de una columna falsa, o es dado como la posición *X,* el parámetro *columna* contiene "N+1", donde N es el número de columnas existentes cuando se hace clic en una celda en una columna falsa o si no hay columna en la posición *X*. Una columna falsa se puede añadir automáticamente cuando se selecciona la opción "Columna de Autoredimensionamiento"; para más información consulte el párrafo *Tema Opciones de redimensionamiento*).
* En un list box jerárquico, el valor de la *columna* tiene en cuenta la(s) columna(s) fusionada(s) para representar la jerarquía, como se explica en el párrafo *Gestión de selecciones y de posiciones*.

El parámetro opcional *varCol* devuelve un puntero a la variable (es decir al array) asociado con la columna.

Cuando los parámetros *X* y *Y* no se utilizan, este comando sólo puede llamarse en el marco de un list box que genere uno de los siguientes eventos: 

* On Clicked y On Double Clicked
* On Before Keystroke y On After Keystroke
* On After Edit
* On Getting Focus y On Losing Focus
* On Data Change
* On Selection Change
* On Before Data Entry

Cuando el comando se llama fuera de este contexto, **LISTBOX GET CELL POSITION** devuelve 0 en *columna* y *fila*.

Este comando tiene en cuenta las acciones de selección o deselección efectuadas con el ratón, con el teclado, o utilizando el comando [EDIT ITEM](edit-item.md) (el cual genera el evento On Getting Focus). Si la selección se modifica utilizando las flechas del teclado, *columna* devuelve 0\. En ese caso, el parámetro *varCol* devuelve [Is nil pointer](is-nil-pointer.md) si se pasa.

#### Ver también 

[LISTBOX GET CELL COORDINATES](listbox-get-cell-coordinates.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 971 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


