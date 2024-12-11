---
id: records-in-table
title: Records in table
slug: /commands/records-in-table
displayed_sidebar: docs
---

<!--REF #_command_.Records in table.Syntax-->**Records in table** {( *tabla* )} : Integer<!-- END REF-->
<!--REF #_command_.Records in table.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual devolver el número total de registros o Tabla por defecto, si se omite |
| Resultado | Integer | &#8592; | Número total de registros en la tabla |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Records in table.Summary-->Records in table devuelve el número total de los registros que contiene *tabla*.<!-- END REF--> [Records in selection](records-in-selection.md "Records in selection") devuelve únicamente el número de registros en la selección actual. Si Records in table se utiliza dentro de una transacción, los registros creados durante la transacción serán tenidos en cuenta.

#### Ejemplo 

El siguiente ejemplo muestra una alerta que indica el número de registros en la tabla:

```4d
 ALERT("Hay "+String(Records in table([Personas]))+" registros en la tabla.")
```

#### Ver también 

[Records in selection](records-in-selection.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 83 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


