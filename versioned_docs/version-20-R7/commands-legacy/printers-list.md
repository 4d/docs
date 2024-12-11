---
id: printers-list
title: PRINTERS LIST
slug: /commands/printers-list
displayed_sidebar: docs
---

<!--REF #_command_.PRINTERS LIST.Syntax-->**PRINTERS LIST** ( *namesArray* {; *altNamesArray* {; *modelsArray*}} )<!-- END REF-->
<!--REF #_command_.PRINTERS LIST.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| namesArray | Text array | &#8592; | Printer names |
| altNamesArray | Text array | &#8592; | Windows: Printer locations, macOS: Custom printer names |
| modelsArray | Text array | &#8592; | Printer models |

<!-- END REF-->

#### Description 

<!--REF #_command_.PRINTERS LIST.Summary-->The **PRINTERS LIST** command fills in the array(s) passed as parameter(s) with the names as well as, optionally, the locations or custom names and models of the available printers for the machine.<!-- END REF--> 

**Note:** If the printers are managed using a print server (spooler), the complete access path (under Windows) or the name of the spooler (under macOS) is returned.

Pass the name of a text array in the *namesArray* parameter. After command execution, this array will contain the names of available printers. Under macOS, this will be the fixed “system” names.

You can pass a second optional array, *altNamesArray*. The contents of this array will depend on the platform:

* Under Windows, for each printer, you get its network location (or local port).
* Under macOS, for each printer, you get its custom name, which can be modified by the user. This name can be used, for example, in dialog boxes.

The optional *modelsArray* parameter is used to get the model of each printer. 

Use the [SET CURRENT PRINTER](set-current-printer.md) and [Get current printer](get-current-printer.md) commands to modify or get the selected printer in 4D. You must pass them the names returned in the first array (*namesArray*)

Under Windows, the name of a printer can be modified manually at the operating system level. On the other hand, its location and model type are linked to its physical characteristics. Therefore, you can use the optional array values to check the characteristics of the selected printer — typically, you can check that all the client machines use the same printer.

Under macOS, this check can be carried out using the name of the printer (name of the print server), which is the same for each machine that is connected.

#### System variables and sets 

The system variable OK is set to 1 if the command has been executed correctly; otherwise, it is set to 0 and the arrays are returned empty. 

#### See also 

[Get current printer](get-current-printer.md)  
[SET CURRENT PRINTER](set-current-printer.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 789 |
| Thread safe | &check; |
| Modifies variables | OK |
| Forbidden on the server ||


