---
id: goto-object
title: GOTO OBJECT
slug: /commands/goto-object
displayed_sidebar: docs
---

<!--REF #_command_.GOTO OBJECT.Syntax-->**GOTO OBJECT** ( * ; *object* : Text )<br/>**GOTO OBJECT** ( *object* : Variable, Field )<!-- END REF-->
<!--REF #_command_.GOTO OBJECT.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified = object is an object name (string) If omitted = object is a field or a variable |
| object | Text, Variable, Field | &#8594;  | Object name (if * specified) or Variable or Field (if * omitted) to go to |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|12|Modified|
|12|Renamed|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.GOTO OBJECT.Summary-->The **GOTO OBJECT** command is used to select the data entry object *object* as the active area of the form.<!-- END REF--> It is equivalent to the user’s clicking on or tabbing into the field or variable.

If you specify the optional *\** parameter, you indicate an object name (a string) in *object*. If you omit the optional *\** parameter, you indicate a field or a variable in *object*. In this case, specify a field or variable reference (field or variable objects only) instead of a string. For more information about object names, see the section *Object Properties*. 

To remove any focus in the current form, call the command while passing an empty object name in *object* (see example 2). 

The **GOTO OBJECT** command can be used in the context of a subform. When it is called from a subform, it first looks for the object in the subform, then, if the search does not find anything there, it extends the search to objects of the parent form.

## Example 1 

The **GOTO OBJECT** command can be used in both ways: 

```4d
 GOTO OBJECT([People]Name) // Field Reference
 GOTO OBJECT(*;"AgeArea") // Object Name
```

## Example 2 

You don't want any object of the form to have the focus: 

```4d
 GOTO OBJECT(*;"")
```

## Example 3 

See the example for the [REJECT](../commands/reject) command.

## See also 

[CALL SUBFORM CONTAINER](../commands/call-subform-container)  
[REJECT](../commands/reject)  

## Properties

|  |  |
| --- | --- |
| Command number | 206 |
| Thread safe | no |


