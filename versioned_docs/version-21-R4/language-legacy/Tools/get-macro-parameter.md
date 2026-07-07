---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *selector* : Integer ; *textParam* : Text )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Selection to use |
| textParam | Text | &#8592; | Returned text |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|11 SQL|Created|

</details>
</div>

## Description 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->The **GET MACRO PARAMETER** command returns, in the *paramText* parameter, all or part of the text of the method from which it was called.<!-- END REF-->

The *selector* parameter can be used to set the type of information to be returned. You can pass one of the following constants, added to the “*4D Environment*” theme:

| Constant                | Type    | Value |
| ----------------------- | ------- | ----- |
| Full method text        | Integer | 1     |
| Highlighted method text | Integer | 2     |

If you pass Full method text in *selector*, all of the text of the method will be returned in *paramText*. If you pass Highlighted method text in *selector*, only the text selected in the method will be returned in *paramText*.

## Example 

Refer to the example of the [SET MACRO PARAMETER](../commands/set-macro-parameter) command.

## See also 

[SET MACRO PARAMETER](../commands/set-macro-parameter)  

## Properties

|  |  |
| --- | --- |
| Command number | 997 |
| Thread safe | no |


