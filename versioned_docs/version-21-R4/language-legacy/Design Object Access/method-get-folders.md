---
id: method-get-folders
title: METHOD GET FOLDERS
slug: /commands/method-get-folders
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET FOLDERS.Syntax-->**METHOD GET FOLDERS** ( *arrNames* : Text array {; *filter* : Text}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET FOLDERS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| arrNames | Text array | &#8592; | Array of Home page folder names |
| filter | Text | &#8594;  | Name filter |
| * | Operator | &#8594;  | If passed = command applies to host database when executed from a component (parameter ignored outside of this context) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|13|Created|

</details>
</div>

## Description 

<!--REF #_command_.METHOD GET FOLDERS.Summary-->The **METHOD GET FOLDERS** command returns, in the *arrNames* array, the names of folders created on the Home page of the 4D Explorer<!-- END REF-->:

![](../../assets/en/commands/pict837666.en.png)

Since folder names must be unique, the hierarchy is not returned in this array. 

You can limit this list of folders by passing a comparison string in the *filter* parameter: in this case, only folders whose names match the filter are returned. You can use the @ character in order to specify "starts with", "ends with" or "contains" type filters. If you pass an empty string, the *filter* parameter is ignored. 

If the command is executed from a component, it returns by default the paths of the component methods. If you pass the *\** parameter, the array contains the paths of the methods of the host database.

## See also 

[METHOD GET PATHS](../commands/method-get-paths)  

## Properties

|  |  |
| --- | --- |
| Command number | 1206 |
| Thread safe | no |


