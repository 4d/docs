---
id: messages-off
title: MESSAGES OFF
slug: /commands/messages-off
displayed_sidebar: docs
---

<!--REF #_command_.MESSAGES OFF.Syntax-->**MESSAGES OFF**<!-- END REF-->
<!--REF #_command_.MESSAGES OFF.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|17 R4|Modified|
|11 SQL Release 3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.MESSAGES OFF.Summary-->The MESSAGES OFF and [MESSAGES ON](../commands/messages-on) commands turn on and off the progress meters displayed by 4D while executing time-consuming operations.<!-- END REF--> By default, messages are on. 

The following table shows operations that display the progress meter:

| Apply Formula | Quick Report     | Order by     |
| ------------- | ---------------- | ------------ |
| Export Data   | Import Data      | Graph        |
| Query by Form | Query by Formula | Query Editor |

The following table lists the commands that display the progress meter:

[APPLY TO SELECTION](../commands/apply-to-selection)  
[Average](../commands/average)  
[BUILD APPLICATION](../commands/build-application)  
[DISTINCT VALUES](../commands/distinct-values)  
[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[Max](../commands/max)  
[Min](../commands/min)  
[ORDER BY](../commands/order-by)  
[ORDER BY FORMULA](../commands/order-by-formula)  
[QR REPORT](../commands/qr-report)  
[QUERY](../commands/query)  
[QUERY BY FORMULA](../commands/query-by-formula)  
[QUERY BY EXAMPLE](../commands/query-by-example)  
[QUERY SELECTION](../commands/query-selection)  
[QUERY SELECTION BY FORMULA](../commands/query-selection-by-formula)  
[REDUCE SELECTION](../commands/reduce-selection)  
[RELATE MANY SELECTION](../commands/relate-many-selection)  
[RELATE ONE SELECTION](../commands/relate-one-selection)  
[SCAN INDEX](../commands/scan-index)  
[Sum](../commands/sum)

**Note for 4D Server:** Progress message windows are not shown on the server since these operations are automatically listed on the *\_o\_PAGE SETUP* of the administration window. If you want to force these progress windows to be displayed, you must call the [MESSAGES ON](../commands/messages-on) command on the server. 

## Example 

The following example turns off the progress meter before doing a sort, and then turns it back on after completing the sort:

```4d
 MESSAGES OFF
 ORDER BY([Addresses];[Addresses]ZIP;>;[Addresses]Name2;>)
 MESSAGES ON
```

## See also 

[MESSAGES ON](../commands/messages-on)  

## Properties

|  |  |
| --- | --- |
| Command number | 175 |
| Thread safe | yes |


