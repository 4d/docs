---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *componentsArray* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| componentsArray | Text array | &#8592; | Names of the components |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.COMPONENT LIST.Summary-->The `COMPONENT LIST` command sizes and fills the *componentsArray* array with the names of the components loaded by the 4D application for the current host project.<!-- END REF-->

When a project is opened, 4D loads the valid components:

* found in the [Components folder of your project](../Project/architecture.md#components).
* declared in the [**dependencies.json** file of your project](../Project/components.md#dependenciesjson-and-environment4djson).

**Reminder:** If the same component is installed at different locations, a [priority order](../Project/components.md#priority) is applied.

This command can be called from the host project or from a component. If the project does not use any components, the *componentsArray* array is returned empty.

The names of the components are the names of the structure files of the matrix databases (.4db, .4dc or .4dbase). This command can be used for setting up architectures and modular interfaces that offer additional functionalities according to the presence of components.

For more information about 4D components, please refer to [this page](../Concepts/components.md).

## See also 

[PLUGIN LIST](plugin-list.md)  

## Properties

|  |  |
| --- | --- |
| Command number | 1001 |
| Thread safe | yes |


