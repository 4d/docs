---
id: set-print-option
title: SET PRINT OPTION
slug: /commands/set-print-option
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT OPTION.Syntax-->**SET PRINT OPTION** ( *option* : Integer, Text ; *value1* : Integer, Text {; *value2* : Integer, Text} )<!-- END REF-->
<!--REF #_command_.SET PRINT OPTION.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer, Text | &#8594;  | Option number |
| value1 | Integer, Text | &#8594;  | Value 1 of the option |
| value2 | Integer, Text | &#8594;  | Value 2 of the option |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|20|Modified|
|16|Modified|
|15 R5|Modified|
|12.2|Modified|
|12|Modified|
|2004.3|Modified|
|<6|Created|

</details>
</div>

## Description 

<!--REF #_command_.SET PRINT OPTION.Summary-->The **SET PRINT OPTION** command is used to modify, by programming, the value of a print option.<!-- END REF--> Each option defined using this command is applied to the[ current 4D printing settings](../../settings/compatibility.md) as long as no other command that modifies print parameters ([PRINT SETTINGS](../commands/print-settings), [PRINT SELECTION](../commands/print-selection) without the *\>* parameter, etc.) is called. If a print job has been opened (e.g. with [OPEN PRINTING JOB](../commands/open-printing-job)), the option is set for the job and cannot be modified as long as the job has not terminated (except for the Orientation option, see below).

### options and values 

The *option* parameter allows you to indicate the option to be modified. You can pass one of the predefined constants of the “*Print Options*” theme listed below. Pass the new value(s) of the specified *option* in the *value1* and (optionally) *value2* parameters. The number and nature of the values to be passed depend on the type of option specified. 

| Constant                     | Value | Comment                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option                 | 1     | If you use only *value1*, it contains the name of the paper. If you use both parameters, *value1* contains the paper width and *value2* contains the paper height. The width and height are expressed in points. Use the [PRINT OPTION VALUES](../commands/print-option-values) command to get the name, height and width of all the paper formats offered by the printer.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Orientation option           | 2     | *value1* only: 1=Portrait, 2=Landscape. If a different orientation option is used, [GET PRINT OPTION](../commands/get-print-option) returns 0 in *value1*. This option can be called within a print job, which means that you can switch from portrait to landscape, or vice versa, during the same print job.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Scale option                 | 3     | *value1* only: scale value in percentage. Be careful, some printers do not allow you to modify the scale. If you pass an invalid value, the property is reset to 100% at the time of printing.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Number of copies option      | 4     | *value1* only: number of copies to be printed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Paper source option          | 5     | (Windows only) *value1* only: number corresponding to the index, in the array of trays returned by the [PRINT OPTION VALUES](../commands/print-option-values) command, of the paper tray to be used. This option can only be used under Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Destination option           | 9     | *value1*: code specifying the type of print destination: 1=Printer, 2=File (PS on Mac), 3=PDF file, 5=Screen (macOS driver option).<br/>If *value1* is different from 1 or 5, *value2* contains pathname for resulting document. This path will be used until another path is specified. If a file with the same name already exists at the destination location, it will be replaced. With [GET PRINT OPTION](../commands/get-print-option), if the current value is not in the predefined list, *value1* contains -1 and the system variable OK is set to 1\. If an error occurs, *value1* and the system variable OK are set to 0\. **<br/>Note (Windows)**: To print PDF on Windows, you have to call [SET CURRENT PRINTER](../commands/set-current-printer)(Generic PDF driver) and set the printing destination to 2 (File) or 3 (PDF File). Setting 3 lets you write multi-platform code. |
| Double sided option          | 11    | *value1*: 0=Single-sided or standard, 1=Double-sided. If *value1*\=1, *value2* contains the binding: 0=Left binding (default value), 1=Top binding.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Spooler document name option | 12    | *value1* only: name of the current print document, which appears in the list of spooler documents. The name defined by this statement will be used for all the print documents of the session for as long as a new name or an empty string is not passed. To use or restore standard operation (using the method name in the case of a method, the table name for a record, etc.), pass an empty string in *value1*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Page range option            | 15    | *value1*\=first page to print (default value is 1) and (optional) *value2*\=number of the last page to print (default value -1 = end of document).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Legacy printing layer option | 16    | (Windows only) *value1* only: 1=select the GDI-based legacy printing layer for the subsequent printing jobs. 0=select the D2D printing layer (default). This selector is mainly intended to allow legacy plug-ins to print inside 4D jobs in 4D applications on Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Print preview option         | 18    | (Windows only) *value1*: Format to use for print previews on Windows. Available values: kp preview automatic (default): Use XPS printer and viewer if available, otherwise use PDF printer or viewer if available, otherwise generate an error. kp preview XPS: Use XPS printer and viewer if available, otherwise generate an error. kp preview PDF: Use PDF printer and viewer if available, otherwise generate an error. *value2* (can be used with [GET PRINT OPTION](../commands/get-print-option) only): Print preview format actually used on Windows (can differ from *value1* depending on the configuration). Available values: kp preview none: No format available. kp preview XPS: XPS printer and viewer used. kp preview PDF: PDF printer and viewer used.                                                                                                                               |

Once set using this command, a print option is kept throughout the duration of the session for the entire 4D application. It will be used by the [PRINT SELECTION](../commands/print-selection), [PRINT RECORD](../commands/print-record), [Print form](../commands/print-form), [QR REPORT](../commands/qr-report) and [WP PRINT](../../WritePro/commands-legacy/wp-print.md) commands, as well as for all 4D printing, including that in Design mode.

**Notes:** 

* It is indispensable to use the optional *\>* parameter with the [PRINT SELECTION](../commands/print-selection), [PRINT RECORD](../commands/print-record) and [PAGE BREAK](../commands/page-break) commands in order to avoid resetting the print options that were set using the **SET PRINT OPTION** command.
* The **SET PRINT OPTION** command mainly supports PostScript printers. You can use this command with other types of printers, such as PCL or Ink, but in this case, it is possible that some options may not be available.

## Example 

The value of Orientation option can be modified within the same print job. Note that the option must have been set before the [PAGE BREAK](../commands/page-break) command:

```4d
 ALL RECORDS([People])
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    SET PRINT OPTION(Orientation option;1) //portrait
    Print form([People];"Vertical_Form")
 
    SET PRINT OPTION(Orientation option;2) //landscape
    PAGE BREAK //must be called imperatively AFTER the option
    Print form([People];"Horiz_Form")
    CLOSE PRINTING JOB
 End if
```

## System variables and sets 

The system variable OK is set to 1 if the command has been executed correctly; otherwise, it is set to 0.

## Error management 

If the value passed for an *option* is invalid or if it is not available on the printer, the command returns an error (that you can intercept using an error-handling method installed by the [ON ERR CALL](../commands/on-err-call) command) and the current value of the option remains unchanged. 

## See also 

[GET PRINT OPTION](../commands/get-print-option)  
[Print form](../commands/print-form)  
[PRINT OPTION VALUES](../commands/print-option-values)  
*Print Options*  
[SET CURRENT PRINTER](../commands/set-current-printer)  

## Properties

|  |  |
| --- | --- |
| Command number | 733 |
| Thread safe | no |
| Modifies variables | OK, error |



