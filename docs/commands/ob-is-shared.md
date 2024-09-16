---
id: ob-is-shared
title: OB Is shared
displayed_sidebar: docs
---

<!--REF #_command_.OB Is shared.Syntax-->**OB Is shared** ( *toCheck* ) -> Function result<!-- END REF-->
<!--REF #_command_.OB Is shared.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| toCheck | Object, Collection | -> | Object or collection or to check |
| Function result | Boolean | <- | True if the object or collection is shareable, False if it is alterable |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB Is shared.Summary-->The **OB Is shared** command returns **True** if the *toCheck* object or collection is shared, and **False** otherwise (see [Shared objects and shared collections](/4Dv20R6/4D/20-R6/Shared-objects-and-shared-collections.<!-- END REF-->300-6957624.en.html)).

This command returns **True** if you pass a shareable entity selection in *toCheck* (see ).
