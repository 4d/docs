---
id: ob-is-shared
title: OB Is shared
slug: /commands/ob-is-shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *toCheck* ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| toCheck | Object, Collection | &#x1F852; | Object or collection or to check |
| Function result | Boolean | &#x1F850; | True if the object or collection is shareable, False if it is alterable |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is shared.Summary-->The **OB Is shared** command returns **True** if the *toCheck* object or collection is shared, and **False** otherwise (see *Shared objects and shared collections*).<!-- END REF-->

This command returns **True** if you pass a shareable entity selection in *toCheck* (see ).
