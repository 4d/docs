---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *one* {; *many*} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| one | Boolean | &#8594;  | Status of all Many-to-One relations |
| many | Boolean | &#8594;  | Status of all One-to-Many relations |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->**SET AUTOMATIC RELATIONS** temporarily changes all the manual relations into automatic relations for the entire database in the current process.<!-- END REF--> The relations stay automatic unless a subsequent call to **SET AUTOMATIC RELATIONS** is made.

* If *one* is true, then all manual Many-to-One relations will become automatic. If *one* is false, all previously changed Many-to-One relations will revert to manual relations.
* The same is true for the *many* parameter, except that manual One-to-Many relations are affected.

This command changes relations set as manual in the Design environment to automatic, just before executing operations that require them to be automatic (such as relational queries and sorts). After the operation is finished, relations can be changed back to manual by calling **SET AUTOMATIC RELATIONS** again. Any relations set as automatic in the Design environment are not affected by this command.

**Notes:** 

* When you pass [True](true.md "True") to the **SET AUTOMATIC RELATIONS** command, the automatic mode is "locked" for all the manual relations during the session. In this case, any calls to the [SET FIELD RELATION](set-field-relation.md) command during the same session are ignored, regardless of whether they are placed before or after **SET AUTOMATIC RELATIONS**. To "unlock" the automatic mode and take the calls to [SET FIELD RELATION](set-field-relation.md) into account, pass [False](false.md "False") to **SET AUTOMATIC RELATIONS**.
* Automatic features are disabled when related tables are being viewed in a list form displayed using [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md), or a subform. See *Automatic and manual relations*.

#### Example 

The following example makes all manual Many-to-One relations automatic and reverts any previously changed One-to-Many relations:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

#### See also 

*About Relations*  
[GET AUTOMATIC RELATIONS](get-automatic-relations.md)  
[GET RELATION PROPERTIES](get-relation-properties.md)  
[SELECTION RANGE TO ARRAY](selection-range-to-array.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SET FIELD RELATION](set-field-relation.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 310 |
| Thread safe | &check; |
| Forbidden on the server ||


