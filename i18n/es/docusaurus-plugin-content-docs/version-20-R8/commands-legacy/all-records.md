---
id: all-records
title: ALL RECORDS
slug: /commands/all-records
displayed_sidebar: docs
---

<!--REF #_command_.ALL RECORDS.Syntax-->**ALL RECORDS** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.ALL RECORDS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual seleccionar todos los registros o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ALL RECORDS.Summary-->ALL RECORDS selecciona todos los registros de *tabla* para el proceso actual.<!-- END REF--> ALL RECORDS hace del primer registro de la selección el registro actual y lo carga en memoria. ALL RECORDS devuelve los registros en el orden por defecto, que es el orden en el cual los registros son almacenados en el disco.

#### Ejemplo 

El siguiente ejemplo muestra todos los registros de la tabla \[Personas\]:

```4d
 ALL RECORDS([Personas]) // Selección de todos los registros en la tabla
 DISPLAY SELECTION([Personas]) // Mostrar los registros en el formulario de salida
```

#### Ver también 

[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
[ORDER BY](order-by.md)  
[QUERY](query.md)  
[Records in selection](records-in-selection.md)  
[Records in table](records-in-table.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 47 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||


