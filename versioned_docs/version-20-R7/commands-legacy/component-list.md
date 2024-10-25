---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *componentsArray* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| componentsArray | Text array | &#8592; | Names of the components |

<!-- END REF-->

#### Description 

<!--REF #_command_.COMPONENT LIST.Summary-->The COMPONENT LIST command sizes and fills the *componentsArray* array with the names of the components loaded by the 4D application for the current host database.<!-- END REF-->

When a database is opened, 4D loads the valid components found in the Components folder(s):

* the Components folder that is next to the structure file (if any),
* the Components folder that is next to the 4D application executable file.

**Reminder:** If the same component is placed in both locations, 4D will only load the one located next to the structure.

This command can be called from the host database or from a component. If the database does not use any components, the *componentsArray* array is returned empty.

The names of the components are the names of the structure files of the matrix databases (.4db, .4dc or .4dbase). This command can be used for setting up architectures and modular interfaces that offer additional functionalities according to the presence of components.

For more information about 4D components, please refer to the Design Reference manual.

#### See also 

[PLUGIN LIST](plugin-list.md)  