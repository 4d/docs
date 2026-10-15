---
id: current-method-path
title: Current method path
slug: /commands/current-method-path
displayed_sidebar: docs
---

<!--REF #_command_.Current method path.Syntax-->**Current method path**  : Text<!-- END REF-->
<!--REF #_command_.Current method path.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Full internal pathname of the method being executed |
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

<!--REF #_command_.Current method path.Summary-->The **Current method path** command returns the internal pathname of the database method, trigger, project method, form method or object method being executed.<!-- END REF-->

In the context of [4D macro-commands](../../code-editor/write-class-method.md#macros), the *<method\_path>* tag is replaced in the code by the full pathname of the method being executed. 

## See also 

[METHOD Get path](../commands/method-get-path)  
[METHOD GET PATHS](../commands/method-get-paths)  

## Properties

|  |  |
| --- | --- |
| Command number | 1201 |
| Thread safe | yes |


