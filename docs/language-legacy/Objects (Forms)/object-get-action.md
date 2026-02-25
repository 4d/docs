---
id: object-get-action
title: OBJECT Get action
slug: /commands/object-get-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get action.Syntax-->**OBJECT Get action** ( * ; *object* : Text ) : Text<br/>**OBJECT Get action** ( *object* : Variable, Field ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get action.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| Function result | Text | &#8592; | Associated standard action name and (if any) parameter string |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT Get action.Summary-->The **OBJECT Get action** command returns the name and (if any) parameter of the standard action associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF-->

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only).

You can set a standard action for an object in the Form editor using the Property List, or using the [OBJECT SET ACTION](../commands/object-set-action) command. **OBJECT Get action** returns a string containing the name of the standard action associated with the object (as well as its parameter, if any). 

For a comprehensive list of standard actions, please refer to the *Standard actions* section in the *Design Reference* manual. 

## Example 

You want to associate the "Cancel" action with all the objects in the form that do not already have any associated action:

```4d
 ARRAY TEXT($arrObjects;0)
 
 FORM GET OBJECTS($arrObjects)
 For($i;1;Size of array($arrObjects))
    If(OBJECT Get action(*;$arrObjects{$i})=ak none)
       OBJECT SET ACTION(*;$arrObjects{$i};ak cancel)
    End if
 End for
```

## See also 

[OBJECT SET ACTION](../commands/object-set-action)  

## Properties

|  |  |
| --- | --- |
| Command number | 1457 |
| Thread safe | no |


