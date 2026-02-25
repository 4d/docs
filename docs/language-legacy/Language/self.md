---
id: self
title: Self
slug: /commands/self
displayed_sidebar: docs
---

<!--REF #_command_.Self.Syntax-->**Self**  : Pointer<!-- END REF-->
<!--REF #_command_.Self.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Pointer | &#8592; | Pointer to form object (if any) whose method is currently being executed. Otherwise Nil (->[]) if outside of context |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Compatibility Note 

<!--REF #_command_.Self.Summary-->This command is kept only for compatibility reasons.<!-- END REF--> Starting with version 12 of 4D, it is recommended to use the [OBJECT Get pointer](../commands/object-get-pointer) command.

## Description 

The **Self**  command returns a pointer to the object whose object method is currently being executed. 

**Self** is used to reference a variable within its own object method. It returns a valid pointer when it is called from within an object method or from within a project method that is called directly or indirectly by an object method. 

If **Self** is called out of context, it returns a [Is nil pointer](../commands/is-nil-pointer) pointer (*\->\[\]*).

**Tip:** **Self** is useful when several objects on a form need to perform the same task, yet operate on themselves.

**Note:** When it is used in the context of a list box, the function returns a pointer to the list box or the column of the list box depending on the context. For more information, please refer to the *Managing List Box Objects* section.

## Example 

See the example for the [RESOLVE POINTER](../commands/resolve-pointer) command.

## See also 

[OBJECT Get pointer](../commands/object-get-pointer)  
[RESOLVE POINTER](../commands/resolve-pointer)  
[This](../commands/this)  

## Properties

|  |  |
| --- | --- |
| Command number | 308 |
| Thread safe | no |



