---
id: print-option-values
title: PRINT OPTION VALUES
slug: /commands/print-option-values
displayed_sidebar: docs
---

<!--REF #_command_.PRINT OPTION VALUES.Syntax-->**PRINT OPTION VALUES** ( *option* ; *namesArray* {; *info1Array* {; *info2Array*}} )<!-- END REF-->
<!--REF #_command_.PRINT OPTION VALUES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Option number |
| namesArray | Text array | &#8592; | Names of values |
| info1Array | Array integer | &#8592; | Values (1) of the option |
| info2Array | Array integer | &#8592; | Values (2) of the option |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINT OPTION VALUES.Summary-->The **PRINT OPTION VALUES** command returns in *namesArray* a list of names available for the print *option* defined.<!-- END REF--> Optionally, you can retrieve additional information for each name in *info1Array* and *info2Array*. 

**Note:** The **PRINT OPTION VALUES** command only operates with PostScript printers.

The *option* parameter allows you to specify the values to get. You must pass one of the following constants of the “*Print Options*” theme:

* Paper option
* Paper source option

***option* \= Paper option (1)**

If you pass Paper option in the *option* parameter, the command will return the following information:

* in *namesArray*, the names of the available paper formats;
* in *info1Array*, the heights of each paper format;
* in *info2Array*, the widths of each paper format.

**Note:** In order to obtain this information, the print driver must have access to a valid PPD (PostScript Printer Description) file for the printer.

To apply a specific paper format using the [SET PRINT OPTION](set-print-option.md) command, you can either pass one of the values of *namesArray*, or the corresponding values of *info1Array* and *info2Array*.

***option* \= Paper source option (5)**

**Note:** This option can only be used under Windows.

If you pass Paper source option in the *option* parameter, the command returns the names of the different trays available in *namesArray*, and their internal Windows ID numbers in *info1Array* (*info2Array* remains empty). The order of the values in the arrays is defined by the print driver. To indicate a tray using the [SET PRINT OPTION](set-print-option.md) command, you must pass the index, as found in the *namesArray* or *info1Array* arrays, of the element desired.

For more information on the different print options, refer to the description of the [SET PRINT OPTION](set-print-option.md) and [GET PRINT OPTION](get-print-option.md) commands.

All the information returned by these commands is supplied by the operating system. Refer to the documentation of your system for more details about specific options.

#### See also 

[GET PRINT OPTION](get-print-option.md)  
[SET PRINT OPTION](set-print-option.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 785 |
| Thread safe | &check; |
| Forbidden on the server ||


