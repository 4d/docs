---
id: selected-record-number
title: Selected record number
slug: /commands/selected-record-number
displayed_sidebar: docs
---

<!--REF #_command_.Selected record number.Syntax-->**Selected record number** {( *tabla* )} : Integer<!-- END REF-->
<!--REF #_command_.Selected record number.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual devolver el número de registros seleccionados, o Tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Número en la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Selected record number.Summary-->Selected record number devuelve la posición del registro actual en la selección actual de *tabla*.<!-- END REF--> 

Si la selección no está vacía y si el registro actual está en la selección, Selected record number devuelve un valor entre *1* y [Records in selection](records-in-selection.md "Records in selection"). Si la selección está vacía, o si no hay registro actual, devuelve *0* (cero).

El número del registro en la selección es diferente del número devuelto por [Record number](record-number.md "Record number"), que devuelve el número del registro físico en la tabla. El número del registro en la selección depende de la selección y el registro actual.

#### Ejemplo 

El siguiente ejemplo guarda el número del registro actual de la selección en una variable:

```4d
 NumRegAc:=Selected record number([Personas]) // Obtener el número del registro en la selección
```

#### Ver también 

*Acerca de números de registros*  
[GOTO SELECTED RECORD](goto-selected-record.md)  
[Records in selection](records-in-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 246 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


