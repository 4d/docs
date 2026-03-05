---
id: get-application-color-scheme
title: Get Application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get Application color scheme.Syntax-->**Get Application color scheme** ({ * }) : Text<!-- END REF-->
<!--REF #_command_.Get Application color scheme.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| * | Operator | &#8594;  | Returns color scheme of host database |
| Function result | Text | &#8592; | Current application color scheme |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|19|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get Application color scheme.Summary-->The **Get Application color scheme** command returns the name of the actual color scheme in use at the application level.<!-- END REF--> 

**Note:** On Windows, this command always returns "light".

The actual color scheme is defined by:

* a call to the [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) command;
* if [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) was not called or called with "inherited" parameter value, the [color scheme Settings](../../settings/interface.md#color-scheme) (host database Settings in case of a component);
* if settings set to "inherited", the OS user preferences.

The *\** parameter is useful when the command is called from a component: when it is passed, the command returns the color scheme of the host database. 

Please refer to the [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) command description for details about color scheme names. 

## Example 

```4d
 var $colorScheme : Text
 
  // Retrieve the colorScheme of the host database
 $colorScheme:=Get Application color scheme(*)
```

## See also 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme)  

## Properties

|  |  |
| --- | --- |
| Command number | 1763 |
| Thread safe | no |


