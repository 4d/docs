---
id: get-list-item-parameter
title: GET LIST ITEM PARAMETER
slug: /commands/get-list-item-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER.Syntax-->**GET LIST ITEM PARAMETER** ( * ; *list* : Text ; *itemRef* : Integer, Operator ; *selector* : Text ; *value* : Variable )<br/>**GET LIST ITEM PARAMETER** ( *list* : Integer ; *itemRef* : Integer, Operator ; *selector* : Text ; *value* : Variable )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | If specified, list is an object name (string) If omitted, list is a list reference number |
| list | Integer, Text | &#8594;  | List reference number (if * omitted) or Name of list type object (if * passed) |
| itemRef | Integer, Operator | &#8594;  | Item reference number or 0 for the last item appended to the list or * for the current list item |
| selector | Text | &#8594;  | Parameter constant |
| value | Variable | &#8592; | Current value of parameter (variable of type Text, Boolean, Real) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|16 R4|Modified|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.GET LIST ITEM PARAMETER.Summary-->The **GET LIST ITEM PARAMETER** command is used to find out the current *value* of the *selector* parameter for the *itemRef* item of the hierarchical list whose reference or object name is passed in the *list* parameter.<!-- END REF-->

If you pass the first optional *\** parameter, you indicate that the *list* parameter is an object name (string) corresponding to a representation of the list in the form. If you do not pass this parameter, you indicate that the *list* parameter is a hierarchical list reference ([ListRef](# "A Longint reference to a hierachical list")). If you only use a single representation of the list or work with structural items (the second*\** is omitted), you can use either syntax. Conversely, if you use several representations of the same list and the second *\** is passed, the syntax based on the object name is required since each representation can have its own current item.

**Note:** If you use the @ character in the object name of the list and the form contains several lists that match this name, the **GET LIST ITEM PARAMETER** command will be applied to the first object whose name corresponds.

You can pass a reference number in *itemRef*. If this number does not correspond to an item in the list, the command does nothing. You can also pass 0 in *itemRef* to indicate the last item added to the list (using [APPEND TO LIST](../commands/append-to-list)).

Lastly, you can pass *\** in *itemRef*: in this case, the command is applied to the current item of the list. If several items are selected manually, the current item is the last one that was selected. If no item is selected, the command does nothing.

In *selector*, you can pass the Additional text or Associated standard action constants (found in the “*Hierarchical Lists*” theme) or any custom value. For more information about the *selector* and *value* parameters, please refer to the description of the [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter) command.

## See also 

[Hierarchical Lists](../../FormObjects/list_overview.md)
[SET LIST ITEM PARAMETER](../commands/set-list-item-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 985 |
| Thread safe | no |


