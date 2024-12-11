---
id: get-field-entry-properties
title: GET FIELD ENTRY PROPERTIES
slug: /commands/get-field-entry-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Syntax-->**GET FIELD ENTRY PROPERTIES** ( ptrCamp|numTabla {; *numCamp*}; *lista* ; *obligatorio* ; *noEditable* ; *noModificable* )<!-- END REF-->
<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| ptrCamp&#124;numTabla | Puntero, Entero largo | &#8594;  | Puntero del campo o número de tabla |
| numCamp | Integer | &#8594;  | Número de campo si el número de tabla se pasa como primer parámetro |
| lista | Text | &#8592; | Nombre de la lista asociada o cadena vacía |
| obligatorio | Boolean | &#8592; | True = Obligatorio, False = Opcional |
| noEditable | Boolean | &#8592; | True = No editable, False = Editable |
| noModificable | Boolean | &#8592; | True = No modificable, False = Modificable |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET FIELD ENTRY PROPERTIES.Summary-->El comando GET FIELD ENTRY PROPERTIES devuelve las propiedades de entrada de datos para el campo especificado por *numTabla* y *numCamp* o por *ptrCamp*.<!-- END REF--> 

Puede pasar:

* números de tabla y de campo en *numTabla* y *numCamp*, o
* un puntero al campo en *ptrCamp*.

**Nota:** este comando devuelve las propiedades definidas a nivel de la ventana de estructura de la base. Propiedades similares pueden definirse a nivel de los formularios. 

Una vez ejecutado el comando:

* El parámetro *list* devuelve el nombre de la lista asociada al campo (si la hay). Es posible asociar una lista a los siguientes tipos de campos: Alfa, Texto, Numérico, Entero, Entero largo, Fecha, Hora y Booleano.

Si ninguna lista está asociada al campo o si el tipo del campo no permite la asociación de listas, se devuelve una cadena vacía (""). 

* El parámetro *obligatorio* devuelve True si el campo es “Obligatorio”; de lo contrario False. El atributo "obligatorio" puede asociarse a todo tipo de campos, excepto BLOB.
* El parámetro *noEditable* devuelve True si el campo dispone del atributo “No editable”, de lo contrario False. Un campo no editable únicamente puede leerse, no acepta entrada de datos. El atributo “No modificable” puede asociarse a campos de todos los tipos, excepto BLOB.
* El parámetro *noModificable* devuelve True si el campo es “No modificable”, de lo contrario False. Un campo no modificable acepta sólo una entrada y no puede ser modificado. El atributo “No modificable” puede ser definido para todos los tipos de campos, excepto BLOB.

#### Ver también 

[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[GET TABLE PROPERTIES](get-table-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 685 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


