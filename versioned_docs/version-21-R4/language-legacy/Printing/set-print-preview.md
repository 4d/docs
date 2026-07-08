---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *preview* : Boolean )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| preview | Boolean | &#8594;  | Preview on screen (TRUE), or No preview (FALSE) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|2004.5|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** allows you to programmatically check or uncheck the Preview on Screen option of the Print dialog box.<!-- END REF--> If you pass TRUE in *preview*, Preview on Screen will be checked, if you pass FALSE in *preview*, Preview on Screen will be unchecked. This setting is local to a process and does not affect the printing of other processes or users.

**Note:** On Windows, you can define the print preview format using the [SET PRINT OPTION](../commands/set-print-option) command.

## Example 

The following example turns on the Preview on Screen option to display the results of a query on screen, and then turns it off.

```4d
 QUERY([Customers])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Customers] ;*)
    SET PRINT PREVIEW(False)
 End if
```

## See also 

[Get print preview](../commands/get-print-preview)  
[Is in print preview](../commands/is-in-print-preview)  

## Properties

|  |  |
| --- | --- |
| Command number | 364 |
| Thread safe | no |


