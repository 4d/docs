---
id: deferred-formulas
title: Deferred formulas
slug: /commands/deferred-formulas
displayed_sidebar: docs
---

<!--REF #_command_.Deferred formulas.Syntax-->**Deferred formulas** : Collection<!-- END REF-->
<!--REF #_command_.Deferred formulas.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Collection | &#8592; |Stack of formulas deferred in the function or method|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R4|Created|

</details>
</div>

## Description 

<!--REF #_command_.Deferred formulas.Summary-->The `Deferred formulas` command returns the collection of all formulas that have been deferred using the [`defer`](../../commands/defer) command in the current function or method<!-- END REF-->. 

If the command is called from another context, it returns an empty collection.



## Example

```4d
defer(ALERT("1"))
defer(ALERT("2"))
...
var $colStack:=Deferred formulas
    //$colStack = [<<Formula: ALERT("2")>>,<<Formula: ALERT("1")>>]
```

## See also 

[defer](../commands/defer)  

## Properties

|  |  |
| --- | --- |
| Command number | 1861 |
| Thread safe | yes |



