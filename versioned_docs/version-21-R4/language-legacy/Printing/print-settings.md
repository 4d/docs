---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** ({ *dialType* : Integer })<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dialType | Integer | &#8594;  | Dialog box to be displayed |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15 R5|Modified|
|11 SQL|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.PRINT SETTINGS.Summary-->**PRINT SETTINGS** displays a printing dialog box.<!-- END REF--> This command must be called before a series of [Print form](../commands/print-form) commands or the [OPEN PRINTING JOB](../commands/open-printing-job) command.

The optional *dialType* parameter can be used to configure the display of the printing dialog box. You can use one of the following constants from the *Print Options* theme:

| Constant          | Value | Comment                                               |
| ----------------- | ----- | ----------------------------------------------------- |
| Page setup dialog | 1     | Display the Page setup dialog box                     |
| Print dialog      | 2     | Display the Print job dialog box (default if omitted) |

**Note:** The Print Job dialog box contains a **Preview on Screen** check box that allows the user to preview their print job. You can preset or reset this option by calling [SET PRINT PREVIEW](../commands/set-print-preview) before calling **PRINT SETTINGS**.

## Example 

See example for the command [Print form](../commands/print-form).

## System variables and sets 

If the user clicks OK in both dialog boxes, the OK system variable is set to 1\. Otherwise, the OK system variable is set to 0\. 

## See also 

[OPEN PRINTING JOB](../commands/open-printing-job)  
[PAGE BREAK](../commands/page-break)  
[Print form](../commands/print-form)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Properties

|  |  |
| --- | --- |
| Command number | 106 |
| Thread safe | no |
| Modifies variables | OK |



