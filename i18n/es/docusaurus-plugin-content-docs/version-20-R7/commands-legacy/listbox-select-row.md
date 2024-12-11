---
id: listbox-select-row
title: LISTBOX SELECT ROW
slug: /commands/listbox-select-row
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROW.Syntax-->**LISTBOX SELECT ROW** ( {* ;} *objeto* ; *posicionL* {; *accion*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| posicionL | Integer | &#8594;  | Número de la fila a seleccionar |
| accion | Integer | &#8594;  | Acción de selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.LISTBOX SELECT ROW.Summary-->El comando LISTBOX SELECT ROW selecciona la fila cuyo número se pasa en *posicion* en el list box designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si omite este parámetro, indica que el parámetro *objeto* es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

El parámetro opcional *accion*, si se pasa, se utiliza para definir la acción de selección a ejecutar cuando una selección de filas ya existe en el list box. Puede pasar un valor o una de las siguientes constantes (ubicadas en el tema “\[#title id="274"/\]”):

| Constante                | Tipo         | Valor | Comentario                                                                                                                                                                                                                                                                               |
| ------------------------ | ------------ | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk add to selection      | Entero largo | 1     | La línea seleccionada se añade a la selección existente. Si la línea seleccionada ya pertenece a la selección existente, el comando no hace nada.                                                                                                                                        |
| lk remove from selection | Entero largo | 2     | La línea seleccionada se remueve de la selección existente. Si la línea especificada no pertenece a la selección existente, el comando no hace nada.                                                                                                                                     |
| lk replace selection     | Entero largo | 0     | La línea seleccionada se convierte en la nueva selección, reemplazando la selección existente. El comando tiene el mismo efecto que un clic de usuario en una línea (sin embargo, el evento On Clicked no se genera). Esta es la acción por defecto (si se omite el parámetro *acción*). |

Cuando el parámetro *posicion* no corresponde exactamente a un número de fila existente, el comando actúa de la siguiente manera:

* Si *posicion* es <0, el comando no hace nada, cualquiera que sea el valor del parámetro *accion*.
* Si *posicion* es 0 y el parámetro *accion* contiene lk replace selection o se omite, todas las filas del list box son seleccionadas. Si el parámetro *accion* contiene lk remove from selection, todas las filas del list box son deseleccionadas.
* Si el valor de *posicion* es superior al número total de filas contenidas en el list box (sólo en el caso de un array de tipo listbox), el array booleano asociado a el list box es redimensionado automáticamente y la acción de selección se efectúa. Este mecanismo permite utilizar LISTBOX SELECT ROW con los comandos “estándar” de gestión de arrays (tales como [APPEND TO ARRAY](append-to-array.md)) que no provocan la sincronización inmediata del listbox.

Después de la ejecución del método, los arrays son sincronizados: si el array fuente del listbox ha sido redimensionado efectivamente, la acción de selección se lleva a cabo. De lo contrario, el array booleano asociado con el list box vuelve a su tamaño inicial y el comando no hace nada.

**Notas:**

* Si quiere que el list box se desplace automáticamente para mostrar la fila seleccionada, utilice el comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md).
* Para pasar una fila a modo edición (para permitir la entrada de datos), utilice el comando [EDIT ITEM](edit-item.md).
* Si el número pasado en *posicion* corresponde a una línea oculta en el listbox, la línea es seleccionada pero no se muestra.
* Si ha seleccionado la opción **Ocultar el resaltado de selección** para un list box, deberá hacer las selecciones de list box visibles utilizando las opciones de interfaz disponibles. Para mayor información sobre cómo hacer esto, ver *Personalizar la apariencia de las selecciones*.

#### Ver también 

[EDIT ITEM](edit-item.md)  
[LISTBOX DELETE ROWS](listbox-delete-rows.md)  
[LISTBOX INSERT ROWS](listbox-insert-rows.md)  
[LISTBOX SELECT BREAK](listbox-select-break.md)  
[LISTBOX SELECT ROWS](listbox-select-rows.md)  
[OBJECT SET SCROLL POSITION ](object-set-scroll-position.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 912 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


