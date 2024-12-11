---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( *preview* )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| preview | Boolean | &#8594;  | Preview on screen (TRUE), or No preview (FALSE) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** allows you to programmatically check or uncheck the Preview on Screen option of the Print dialog box.<!-- END REF--> If you pass TRUE in *preview*, Preview on Screen will be checked, if you pass FALSE in *preview*, Preview on Screen will be unchecked. This setting is local to a process and does not affect the printing of other processes or users.

**Note:** On Windows, you can define the print preview format using the [SET PRINT OPTION](set-print-option.md) command.

#### Example 

The following example turns on the Preview on Screen option to display the results of a query on screen, and then turns it off.

```4d
 QUERY([Customers])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Customers] ;*)
    SET PRINT PREVIEW(False)
 End if
```

#### See also 

[Get print preview](get-print-preview.md)  
[Is in print preview](is-in-print-preview.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 364 |
| Thread safe | &check; |
| Forbidden on the server ||


