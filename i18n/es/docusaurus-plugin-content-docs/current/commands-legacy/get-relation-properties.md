---
id: get-relation-properties
title: GET RELATION PROPERTIES
slug: /commands/get-relation-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET RELATION PROPERTIES.Syntax-->**GET RELATION PROPERTIES** ( ptrCamp|numTabla {; *numCamp*}; *tablaUno* ; *campUno* {; *discriminante* {; *autoUno* {; *autoMuchos*}}} )<!-- END REF-->
<!--REF #_command_.GET RELATION PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ptrCamp&#124;numTabla | Puntero, Entero largo | &#8594;  | Puntero de campo o número de tabla |
| numCamp | Integer | &#8594;  | Número de campo si se pasa un número de tabla  como primer parámetro |
| tablaUno | Integer | &#8592; | Número de la tabla Uno ó 0 si no se define  ninguna relación desde el campo |
| campUno | Integer | &#8592; | Número de campo Uno ó 0 si no se define  ninguna relación desde el campo |
| discriminante | Integer | &#8592; | Número de campo discriminante o 0 si ningún campo discriminante |
| autoUno | Boolean | &#8592; | True = Relación uno automática,  False = Relación uno manual |
| autoMuchos | Boolean | &#8592; | True = Relación unos a muchos automática,  False = Relación unos a muchos manual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET RELATION PROPERTIES.Summary-->El comando GET RELATION PROPERTIES devuelve las propiedades de la relación (si la hay) que comienza del campo fuente definido por *numTabla* y *numCamp* o por *ptrCamp*.<!-- END REF--> 

Puede pasar:

* Números de tabla y de campo en *numTabla* y *numCamp*,
* O un puntero al campo en *ptrCamp*.

Una se haya ejecutado el comando:

* Los parámetros *tablaUno* y *campoUno* contienen respectivamente el número de la tabla y del campo hacia los cuales apunta la relación (del campo fuente). Si ninguna relación comienza en el campo, este parámetro devuelve 0.
* El parámetro *discriminante* contiene el número del campo discriminante (de la tabla objetivo) definido dentro de esta relación. Si no se ha definido un campo discriminante en esta relación, o si ninguna relación parte del campo fuente, este parámetro devuelve 0.
* Los parámetro *autoUno* y *autoMuchos* devuelven [True](true.md "True") si, respectivamente, las opciones “Relación uno a muchos automática” y “Relación muchos a uno automática” se han seleccionado para esta relación; de lo contrario, devuelven [False](false.md "False").

**Nota:** los parámetros *autoUno* y *autoMuchos* también devolverán [True](true.md "True") si ninguna relación parte del campo fuente (en este caso devuelven valores no significativos.). El valor de los parámetros *tablaUno* y *campUno* permiten asegurarse de que una relación existe. 

#### Ver también 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  
[SET AUTOMATIC RELATIONS](set-automatic-relations.md)  
[SET FIELD RELATION](set-field-relation.md)  