---
id: object-set-action
title: OBJECT SET ACTION
slug: /commands/object-set-action
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET ACTION.Syntax-->**OBJECT SET ACTION** ( * ; *object* : Text ; *action* : Text )<br/>**OBJECT SET ACTION** ( *object* : Variable, Field ; *action* : Text )<!-- END REF-->
<!--REF #_command_.OBJECT SET ACTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, object is an object name (string) ; if omitted, object is a variable or a field |
| object | Text, Variable, Field | &#8594;  | Object name (if * is specified) or <br/>Variable or field (if * is omitted) |
| action | Text | &#8594;  | Name of action to associate (including parameters if necessary) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R3|Modified|
|14|Created|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET ACTION.Summary-->The **OBJECT SET ACTION** command modifies the standard action associated with the object(s) designated by the *object* and *\** parameters.<!-- END REF--> 

Passing the optional *\** parameter indicates that the *object* parameter is an object name (string). If you do not pass this parameter, it indicates that the *object* parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only). 

In the *action* parameter, pass a string containing the name of the standard action to associate with the object, or a constant from the *Standard Action* theme. Optionally, the action can have parameters.

For detailed information on action names, please refer to the *Standard actions* section in the *4D Design Reference* manual. 

**Compatibility Note:** Legacy constants (prefixed by \_o\_ in the "*Standard Action*" theme) are deprecated starting with 4D v16 R3\. However, they are still supported for compatibility. 

## Example 

You want to associate the **Validate** standard action with a button:

```4d
 OBJECT SET ACTION(*;"bValidate";ak accept)
```

## See also 

[OBJECT Get action](../commands/object-get-action)  

## Properties

|  |  |
| --- | --- |
| Command number | 1259 |
| Thread safe | no |


