---
id: relate-many-selection
title: RELATE MANY SELECTION
slug: /commands/relate-many-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY SELECTION.Syntax-->**RELATE MANY SELECTION** ( *unCampo* )<!-- END REF-->
<!--REF #_command_.RELATE MANY SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo de la tabla Muchos (donde inicia la relación) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RELATE MANY SELECTION.Summary-->El comando RELATE MANY SELECTION crea una selección de registros en la tabla Muchos, basada en la selección actual de la tabla Uno.<!-- END REF-->RELATE MANY SELECTION cambia el registro actual de la tabla Uno.

#### Ejemplo 

Este ejemplo selecciona todas las facturas de clientes con crédito superior o igual a $1 000\. El campo *\[Facturas\]IDCliente* está relacionado con el campo *\[Clientes\]NumID*. 

```4d
  // Seleccionar los clientes
 QUERY([Clientes];[Clientes]Credit>=1000)
  // Buscar todas las facturas relacionadas con cada uno de estos clientes
 RELATE MANY SELECTION([Facturas]IDCliente)
```

#### Ver también 

[QUERY](query.md)  
[RELATE ONE](relate-one.md)  
[RELATE ONE SELECTION](relate-one-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 340 |
| Hilo seguro | &check; |
| Modifica el registro actual ||
| Modifica la selección actual ||


