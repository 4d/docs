---
id: is-in-print-preview
title: Is in print preview
slug: /commands/is-in-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Is in print preview.Syntax-->**Is in print preview**  -> Function result<!-- END REF-->
<!--REF #_command_.Is in print preview.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Boolean | &#8592; | True = Print preview,False = No print preview |

<!-- END REF-->

*This command is not thread-safe, it cannot be used in preemptive code.*


#### Description 

<!--REF #_command_.Is in print preview.Summary-->The **Is in print preview** command returns True if the **Preview on Screen** option is checked in the printing dialog box and False otherwise.<!-- END REF--> This setting is local to the process. 

Unlike the [Get print preview](get-print-preview.md) command, **Is in print preview** returns the final value of the option, after the dialog box is validated by the user. So this command lets you determine with certainty whether printing actually takes place in "preview" mode. 

#### Example 

This example takes all types of printing into account:

```4d
 SET PRINT PREVIEW(True) //Print preview by default
 PRINT SETTINGS
 If(OK=1)
  //The user may have changed the print destination
    If(Is in print preview) // True if preview
       FORM SET OUTPUT([Invoices];"toScreen")
    Else
       FORM SET OUTPUT([Invoices];"toPrinter"
    End if
    OPEN PRINTING JOB
    ALL RECORDS([Invoices])
    PRINT SELECTION([Invoices];>)
    CLOSE PRINTING JOB
 End if
```

#### See also 

[Get print preview](get-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  