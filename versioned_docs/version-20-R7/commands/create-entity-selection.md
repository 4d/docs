---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->***Create entity selection** ( *dsTable* : Table { ; *settings* : Object } ) : 4D.EntitySelection<!-- END REF-->
<!--REF #_command_.Create entity selection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dsTable | Table | &#8594;  | Table in the 4D database whose current selection will be used to build the entity selection |
| settings | Object |&#8594;  | Build option: context |
| Function result | 4D.EntitySelection | &#8592; | Entity selection matching the dataclass related to the given table |

<!-- END REF-->


#### Description

The `Create entity selection` command <!--REF #_command_.Create entity selection.Summary-->builds and returns a new, [alterable](../ORDA/entities.md#shareable-or-alterable-entity-selections) entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table<!-- END REF-->.

If the current selection is sorted, an [ordered](../ORDA/dsMapping.md#ordered-or-unordered-entity-selection) entity selection is created (the order of the current selection is kept). If the current selection is unsorted, an unordered entity selection is created.

If the *dsTable* is not exposed in [`ds`](ds.md), an error is returned. This command cannot be used with a Remote datastore.

In the optional *settings* parameter, you can pass an object containing the following property:

|Property|Type|Description|
|---|---|---|
|context|Text|Label for the [optimization context](../ORDA/client-server-optimization.md) applied to the entity selection.|


#### Example

```4d
var $employees : cs.EmployeeSelection
ALL RECORDS([Employee])
$employees:=Create entity selection([Employee])
// The $employees entity selection now contains a set of reference
// on all entities related to the Employee dataclass
```

#### See also 

[USE ENTITY SELECTION](use-entity-selection.md)<br/>[`dataClass.newSelection()`](../API/DataClassClass.md#newselection)