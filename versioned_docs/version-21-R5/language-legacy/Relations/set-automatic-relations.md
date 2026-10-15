---
id: set-automatic-relations
title: SET AUTOMATIC RELATIONS
slug: /commands/set-automatic-relations
displayed_sidebar: docs
---

<!--REF #_command_.SET AUTOMATIC RELATIONS.Syntax-->**SET AUTOMATIC RELATIONS** ( *one* : Boolean {; *many* : Boolean} )<!-- END REF-->
<!--REF #_command_.SET AUTOMATIC RELATIONS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| one | Boolean | &#8594;  | Status of all Many-to-One relations |
| many | Boolean | &#8594;  | Status of all One-to-Many relations |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET AUTOMATIC RELATIONS.Summary-->**SET AUTOMATIC RELATIONS** temporarily changes all the manual relations into automatic relations for the entire database in the current process.<!-- END REF--> The relations stay automatic unless a subsequent call to **SET AUTOMATIC RELATIONS** is made.

* If *one* is true, then all manual Many-to-One relations will become automatic. If *one* is false, all previously changed Many-to-One relations will revert to manual relations.
* The same is true for the *many* parameter, except that manual One-to-Many relations are affected.

This command changes relations set as manual in the Design environment to automatic, just before executing operations that require them to be automatic (such as relational queries and sorts). After the operation is finished, relations can be changed back to manual by calling **SET AUTOMATIC RELATIONS** again. Any relations set as automatic in the Design environment are not affected by this command.

**Notes:** 

* When you pass [True](../commands/true) to the **SET AUTOMATIC RELATIONS** command, the automatic mode is "locked" for all the manual relations during the session. In this case, any calls to the [SET FIELD RELATION](../commands/set-field-relation) command during the same session are ignored, regardless of whether they are placed before or after **SET AUTOMATIC RELATIONS**. To "unlock" the automatic mode and take the calls to [SET FIELD RELATION](../commands/set-field-relation) into account, pass [False](../commands/false) to **SET AUTOMATIC RELATIONS**.
* Automatic features are disabled when related tables are being viewed in a list form displayed using [DISPLAY SELECTION](../commands/display-selection), [MODIFY SELECTION](../commands/modify-selection), or a subform. See *Automatic and manual relations*.

## Example 

The following example makes all manual Many-to-One relations automatic and reverts any previously changed One-to-Many relations:

```4d
 SET AUTOMATIC RELATIONS(True;False)
```

## See also 

*About Relations*  
[GET AUTOMATIC RELATIONS](../commands/get-automatic-relations)  
[GET RELATION PROPERTIES](../commands/get-relation-properties)  
[SELECTION RANGE TO ARRAY](../commands/selection-range-to-array)  
[SELECTION TO ARRAY](../commands/selection-to-array)  
[SET FIELD RELATION](../commands/set-field-relation)  

## Properties

|  |  |
| --- | --- |
| Command number | 310 |
| Thread safe | yes |


