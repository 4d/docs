---
id: create-entity-selection
title: Create entity selection
slug: /commands/create-entity-selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->**Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->

<!--REF #_command_.Create entity selection.Params-->

<div class="no-index">

| Parámetros | Tipo                               |                             | Descripción                                                                                     |
| ---------- | ---------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------- |
| dsTable    | Tabla                              | &#8594; | Tabla de la base 4D cuya selección actual se utilizará para construir la selección de entidades |
| settings   | Object                             | &#8594; | Opciones de construcción: context                                               |
| Resultado  | 4D.EntitySelection | &#8592; | Selección de entidades que coinciden con la clase de datos relacionada con la tabla dada        |

</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 17 R5       | Modificado     |
| 17          | Created        |

</details>
</div>

## Descripción

El comando `Create entity selection` <!--REF #_command_.Create entity selection.Summary-->crea y devuelve una nueva entity selection [modificable](../../ORDA/entities.md#shareable-or-alterable-entity-selections) relativa a la dataclass correspondiente con la *dsTable* dada, de acuerdo con la selección actual de esta tabla<!-- END REF-->.

Si la selección actual está ordenada, se crea una entity selection [ordenada](../../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) (se mantiene el orden de la selección actual). Si la selección actual no está ordenada, se crea una selección de entidades no ordenada.

Si *dsTable* no está expuesto en [`ds`](../commands/ds), se devuelve un error. Este comando no puede utilizarse con un datastore remoto.

En el parámetro opcional *settings*, puede pasar un objeto que contenga la siguiente propiedad:

| Propiedad | Tipo | Descripción                                                                                                                              |
| --------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| context   | Text | Etiqueta para el [contexto de optimización](../../ORDA/client-server-optimization.md) aplicado a la selección de entidades. |

:::info

Por razones de rendimiento, en 4D monopuesto y 4D Server, la selección de entidades devuelta está directamente conectada a la selección actual de *dsTable* (no es una copia). Mientras no se reemplace la selección actual, los cambios realizados en una se reflejan en la otra. Por ejemplo, [`REDUCE SELECTION`](../commands/reduce-selection) reduce la selección de entidades, y [`.add()`](../../API/EntitySelectionClass.md#add) aplicada a la selección de entidades añade la entidad a la selección actual. Para obtener una selección de entidades independiente, llame a [`.copy()`](../../API/EntitySelectionClass.md#copy) en el resultado:

```4d
$es:=Create entity selection([Employee]).copy()
```

:::

## Ejemplo

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee])
// La entity selection $employees ahora contiene un conjunto de referencias
// en todas las entidades relacionadas con la clase de datos Employee
```

## Ver también

[USE ENTITY SELECTION](../commands/use-entity-selection)<br/>[`dataClass.newSelection()`](../../API/DataClassClass.md#newselection)

## Propiedades

|                   |      |
| ----------------- | ---- |
| Número de comando | 1512 |
| Hilo seguro       | sí   |
