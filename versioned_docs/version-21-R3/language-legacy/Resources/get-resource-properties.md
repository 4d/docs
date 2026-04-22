---
id: get-resource-properties
title: Get resource properties
slug: /commands/get-resource-properties
displayed_sidebar: docs
---

<!--REF #_command_.Get resource properties.Syntax-->**Get resource properties** ( *resType* : Text ; *resID* : Integer {; *resFile* : Time} ) : Integer<!-- END REF-->
<!--REF #_command_.Get resource properties.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| resType | Text | &#8594;  | 4-character resource type |
| resID | Integer | &#8594;  | Resource ID number |
| resFile | Time | &#8594;  | Resource file reference number, or all open resource files, if omitted |
| Function result | Integer | &#8592; | Resource attributes |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get resource properties.Summary-->The **Get resource properties** command returns the attributes of the resource whose type is passed in *resType* and whose ID number is passed in *resID*.<!-- END REF-->

If you pass a valid resource file reference number in the parameter *resFile*, the resource is searched for within that file only. If you do not pass the parameter *resFile*, the resource is searched for within the current open resource files. 

If the resource does not exist, the command returns *0* (zero) and sets the OK variable to *0* (zero).

The numeric value returned by **Get resource properties** must be seen as a bit field value whose bits have special meaning.

## Example 

See example for the [Get resource name](../commands/get-resource-name) command.

## System variables and sets 

The OK variable is set to 0 if the resource does not exist; otherwise, it is set to 1.


## Properties

|  |  |
| --- | --- |
| Command number | 515 |
| Thread safe | no |
| Modifies variables | OK |


