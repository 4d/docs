---
id: records-in-selection
title: Records in selection
slug: /commands/records-in-selection
displayed_sidebar: docs
---

<!--REF #_command_.Records in selection.Syntax-->**Records in selection** {( *tabla* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in selection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual devolver el número de registros      seleccionados,o tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Registros en la selección de tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Records in selection.Summary-->Records in selection devuelve el número de registros en la selección actual de *tabla*.<!-- END REF--> En contraste, [Records in table](records-in-table.md "Records in table") devuelve el número total de registros en la tabla.

#### Ejemplo 

El siguiente ejemplo muestra una técnica de bucle actualmente utilizada para moverse entre los registros de la selección actual. La misma operación puede realizarse con la ayuda del comando [APPLY TO SELECTION](apply-to-selection.md "APPLY TO SELECTION"):

```4d
 FIRST RECORD([Personas]) // Comenzar en el primer registro de la selección
 For($vlRegistro;1;Records in selection([Personas])) // Bucle una vez por registro
    Hacer algo // Realizar una operación con el registro
    NEXT RECORD([Personas]) // Pasar al siguiente registro
 End for
```

#### Ver también 

[Records in table](records-in-table.md)  