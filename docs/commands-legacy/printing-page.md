---
id: printing-page
title: Printing page
slug: /commands/printing-page
displayed_sidebar: docs
---

<!--REF #_command_.Printing page.Syntax-->**Printing page**  : Integer<!-- END REF-->
<!--REF #_command_.Printing page.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Page number of page currently being printed |

<!-- END REF-->

#### Description 

<!--REF #_command_.Printing page.Summary-->**Printing page** returns the printing page number.<!-- END REF--> It can be used only when you are printing with [PRINT SELECTION](print-selection.md) or the Print menu in the Design environment.

#### Example 

The following example changes the position of the page numbers on a report so that the report can be reproduced in a double-sided format. The form for the report has two variables that display page numbers. A variable in the lower-left corner (*vLeftPageNum*) will print the even page numbers. A variable in the lower-right corner (*vRightPageNum*) will print the odd page numbers. The example tests for even pages, then clears and sets the appropriate variables:

```4d
 Case of
    :(FORM Event=On Printing Footer)
       If((Printing page% 2)=0) // Modulo is 0, it is an even page
          vLeftPageNum:=String(Printing page) // Set the left page number
          vRightPageNum:="" // Clear the right page number
       Else // Otherwise it is an odd page
          vLeftPageNum:="" // Clear the left page number
          vRightPageNum:=String(Printing page) // Set the right page number
       End if
 End case
```

#### See also 

[PRINT SELECTION](print-selection.md)  

#### Properties

|  |  |
| --- | --- |
| Command number | 275 |
| Thread safe | &cross; |


