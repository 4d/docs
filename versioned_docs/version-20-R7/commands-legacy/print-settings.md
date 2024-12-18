---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** {( *dialType* )}<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| dialType | Integer | &#8594;  | Dialog box to be displayed |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINT SETTINGS.Summary-->**PRINT SETTINGS** displays a printing dialog box.<!-- END REF--> This command must be called before a series of [Print form](print-form.md) commands or the [OPEN PRINTING JOB](open-printing-job.md) command.

The optional *dialType* parameter can be used to configure the display of the printing dialog box. You can use one of the following constants from the *Print Options* theme:

| Constant          | Value | Comment                                               |
| ----------------- | ----- | ----------------------------------------------------- |
| Page setup dialog | 1     | Display the Page setup dialog box                     |
| Print dialog      | 2     | Display the Print job dialog box (default if omitted) |

**Note:** The Print Job dialog box contains a **Preview on Screen** check box that allows the user to preview their print job. You can preset or reset this option by calling [SET PRINT PREVIEW](set-print-preview.md) before calling **PRINT SETTINGS**.

#### Example 

See example for the command [Print form](print-form.md).

#### System variables and sets 

If the user clicks OK in both dialog boxes, the OK system variable is set to 1\. Otherwise, the OK system variable is set to 0\. 

#### See also 

[OPEN PRINTING JOB](open-printing-job.md)  
[PAGE BREAK](page-break.md)  
[Print form](print-form.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 106 |
| Thread safe | &cross; |
| Modifies variables | OK |


