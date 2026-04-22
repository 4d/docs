---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True if operating system = macOS, else False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17|Created|

</details>
</div>

## Description 

<!--REF #_command_.Is macOS.Summary-->The **Is macOS** command returns True if the current operating system is macOS.<!-- END REF--> 

## Example 

You want to determine if the current operating system is macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

## See also 

[System info](../commands/system-info)  
[Is Windows](../commands/is-windows)  

## Properties

|  |  |
| --- | --- |
| Command number | 1572 |
| Thread safe | yes |


