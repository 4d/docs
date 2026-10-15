---
id: clear-pasteboard
title: CLEAR PASTEBOARD
slug: /commands/clear-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR PASTEBOARD.Syntax-->**CLEAR PASTEBOARD**<!-- END REF-->
<!--REF #_command_.CLEAR PASTEBOARD.Params-->
<div class="no-index">

| Does not require any parameters |  |
| --- | --- |
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

## Description 

<!--REF #_command_.CLEAR PASTEBOARD.Summary-->The CLEAR PASTEBOARD command clears the pasteboard of all its contents.<!-- END REF--> If the pasteboard contains multiple instances of the same data, all instances are cleared. After a call to CLEAR PASTEBOARD, the pasteboard is empty.

You must call CLEAR PASTEBOARD once before appending new data to the pasteboard using the command [APPEND DATA TO PASTEBOARD](../commands/append-data-to-pasteboard), because this latter command does not clear the pasteboard before appending the new data. 

Calling CLEAR PASTEBOARD once and then calling [APPEND DATA TO PASTEBOARD](../commands/append-data-to-pasteboard) several times enables you to Cut or Copy the same data under different formats.

On the other hand, the [SET TEXT TO PASTEBOARD](../commands/set-text-to-pasteboard) and [SET PICTURE TO PASTEBOARD](../commands/set-picture-to-pasteboard) commands automatically clear the pasteboard before appending the data to it.

## Example 1 

The following code clears and then appends data to the pasteboard:

```4d
 CLEAR PASTEBOARD // Make sure the pasteboard is emptied
 APPEND DATA TO PASTEBOARD("com.4d.private.picture.gif";$vxSomeData) // Add some gif pictures
 APPEND DATA TO PASTEBOARD("com.4d.private.text.rtf";$vxSylkData) // Add some RTF text
```

## Example 2 

See example for the [APPEND DATA TO PASTEBOARD](../commands/append-data-to-pasteboard) command.

## See also 

[APPEND DATA TO PASTEBOARD](../commands/append-data-to-pasteboard)  

## Properties

|  |  |
| --- | --- |
| Command number | 402 |
| Thread safe | no |


