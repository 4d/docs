---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

| Parámetros | Tipo                               |   | Descripción                                                                                     |
| ---------- | ---------------------------------- | - | ----------------------------------------------------------------------------------------------- |
| dsTable    | Tabla                              | → | Tabla de la base 4D cuya selección actual se utilizará para construir la selección de entidades |
| settings   | Object                             | → | Opciones de construcción: context                                               |
| Resultado  | 4D.EntitySelection | ← | Selección de entidades que coinciden con la clase de datos relacionada con la tabla dada        |

<!-- END REF-->

#### Descripción

The `Create entity selection` command <!--REF #_command_.Create entity selection.Summary-->builds and returns a new, [alterable](../ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table<!-- END REF-->.

If the current selection is sorted, an [ordered](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). Si la selección actual no está ordenada, se crea una selección de entidades no ordenada.

If the *dsTable* is not exposed in [`ds`](ds.md), an error is returned. Este comando no puede utilizarse con un datastore remoto.

En el parámetro opcional *settings*, puede pasar un objeto que contenga la siguiente propiedad:

| Propiedad | Tipo | Descripción                                                                                                                              |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Etiqueta para el [contexto de optimización](../ORDA/client-server-optimization.md) aplicado a la selección de entidades. |

#### Ejemplo

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee])
// La entity selection $employees ahora contiene un conjunto de referencias
// en todas las entidades relacionadas con la clase de datos Employee
```

#### Ver también

[USE ENTITY SELECTION](use-entity-selection.md)<br/>[`dataClass.newSelection()`](../API/DataClassClass.md#newselection)
