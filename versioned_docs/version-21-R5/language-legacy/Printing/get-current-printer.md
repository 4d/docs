---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Text | &#8592; | Name of the current printer |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|15 R5|Modified|
|2003|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get current printer.Summary-->The **Get current printer** command returns the name of the current printer defined in the 4D application.<!-- END REF--> By default, on start-up of 4D, the current printer is the printer defined in the system.

If the current printer is managed using a print server (spooler), the complete access path (under Windows) or the name of the spooler (under macOS) is returned.

To obtain the list of available printers as well as additional information, use the [PRINTERS LIST](../commands/printers-list) command. To modify the current printer, use the [SET CURRENT PRINTER](../commands/set-current-printer) command.

**Note:** When the Generic PDF driver constant is used with [SET CURRENT PRINTER](../commands/set-current-printer), [Get current printer](../commands/get-current-printer) returns "\_4d\_pdf\_printer" or the actual name of the PDF driver.

## Error management 

If no printer is installed, an error is generated.

## See also 

[PRINTERS LIST](../commands/printers-list)  
[SET CURRENT PRINTER](../commands/set-current-printer)  

## Properties

|  |  |
| --- | --- |
| Command number | 788 |
| Thread safe | no |


