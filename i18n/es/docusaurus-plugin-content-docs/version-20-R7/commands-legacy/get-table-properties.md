---
id: get-table-properties
title: GET TABLE PROPERTIES
slug: /commands/get-table-properties
displayed_sidebar: docs
---

<!--REF #_command_.GET TABLE PROPERTIES.Syntax-->**GET TABLE PROPERTIES** ( PtrTabla|numTabla ; *invisible* {; *trigGuardarNuevo* {; *trigGuardaReg* {; *trigBorrarReg* {; *trigCargReg*}}}} )<!-- END REF-->
<!--REF #_command_.GET TABLE PROPERTIES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| PtrTabla&#124;numTabla | Puntero, Entero largo | &#8594;  | Puntero de tabla o número de tabla |
| invisible | Boolean | &#8592; | True = Invisible, False = Visible |
| trigGuardarNuevo | Boolean | &#8592; | True = Trigger “On saving new record” activado; de lo contrario, False |
| trigGuardaReg | Boolean | &#8592; | True = Trigger “On saving an existing record” activado; de lo contrario, False |
| trigBorrarReg | Boolean | &#8592; | True = Trigger “On deleting a record” activado; de lo contrario, False |
| trigCargReg | Boolean | &#8592; | *** No usado (obsoleto) *** |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET TABLE PROPERTIES.Summary-->El comando GET TABLE PROPERTIES devuelve las propiedades de la tabla pasada por *ptrTabla* o *numTabl* *a*.<!-- END REF--> Puede pasar en el primer parámetro el número de tabla o puntero de la tabla. 

Una vez ejecutado el comando:

* El parámetro *invisible* devuelve True si el atributo “Invisible” ha sido definido para la tabla, de lo contrario False. El atributo invisible permite ocultar la tabla en los editores estándar de 4D (etiquetas, gráficos...).
* El parámetro *trigGuardarNuevo* devuelve True si el trigger “Al guardar un registro nuevo” se ha activado para la tabla, de lo contrario False.
* El parámetro *trigGuardaReg* devuelve True si el trigger “Al guardar un registro existente” se ha activado para la tabla, de lo contrario False.
* El parámetro *trigBorrarReg* devuelve True si el trigger “Al borrar un registro” se ha activado para esta tabla, de lo contrario False.

#### Ver también 

[GET FIELD ENTRY PROPERTIES](get-field-entry-properties.md)  
[GET FIELD PROPERTIES](get-field-properties.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 687 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


