---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Position of the marker |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get printed height.Summary-->The **Get printed height** command returns the overall height (in pixels) of the section printed using the [Print form](../commands/print-form.md) command.<!-- END REF-->

The value returned will be included between 0 (the top edge of the page) and the overall height returned by the [GET PRINTABLE AREA](get-printable-area.md) command (the maximum size of the printable area). 

If you print a new section using the [Print form](../commands/print-form.md) command, the height of the new section is added to this value. If the printable area available is insufficient to contain this section, a new page is generated and the value returned is 0.

The right and left printable margins, unlike the top and bottom margins (which may be defined using the [SET PRINTABLE MARGIN](set-printable-margin.md) command), do not influence the value returned.

**Note:** For more information regarding Printing management and terminology in 4D, refer to the [GET PRINTABLE MARGIN](get-printable-margin.md) command description. 

#### See also 

[GET PRINTABLE AREA](get-printable-area.md)  
[Print form](../commands/print-form.md)  
[SET PRINTABLE MARGIN](set-printable-margin.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 702 |
| Thread safe | &check; |
| Forbidden on the server ||


