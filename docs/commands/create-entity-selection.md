---
id: create-entity-selection
title: Create entity selection
displayed_sidebar: docs
---

<!--REF #_command_.Create entity selection.Syntax-->**Create entity selection** ( *dsTable* {; *settings*} ) -> Function result<!-- END REF-->
<!--REF #_command_.Create entity selection.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dsTable | Table | -> | Table in the 4D database whose current selection will be used to build the entity selection |
| settings | Object | -> | Build option: context |
| Function result | EntitySelection | <- | Entity selection matching the dataclass related to the given table |

<!-- END REF-->

#### Description 



**Documentation moved**

The documentation for this command has been moved. Visit [developer.4d.com](https://developer.4d.com/docs/API/EntitySelectionClass.html#create-entity-selection) for updated documentation.

The **Create entity selection** command builds and returns a new, alterable entity selection related to the dataclass matching the given *dsTable*, according to the current selection of this table.

#### See also 

[USE ENTITY SELECTION](use-entity-selection.md)  