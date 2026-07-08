---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| Function result | Integer | &#8592; | Position of the marker |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>History</summary>

|Release|Changes|
|---|---|
|6.8.1|Created|

</details>
</div>

## Description 

<!--REF #_command_.Get printed height.Summary-->The **Get printed height** command returns the overall height (in pixels) of the section printed using the [Print form](../commands/print-form) command.<!-- END REF-->

The value returned will be included between 0 (the top edge of the page) and the overall height returned by the [GET PRINTABLE AREA](../commands/get-printable-area) command (the maximum size of the printable area). 

If you print a new section using the [Print form](../commands/print-form) command, the height of the new section is added to this value. If the printable area available is insufficient to contain this section, a new page is generated and the value returned is 0.

The right and left printable margins, unlike the top and bottom margins (which may be defined using the [SET PRINTABLE MARGIN](../commands/set-printable-margin) command), do not influence the value returned.

**Note:** For more information regarding Printing management and terminology in 4D, refer to the [GET PRINTABLE MARGIN](../commands/get-printable-margin) command description. 

## See also 

[GET PRINTABLE AREA](../commands/get-printable-area)  
[Print form](../commands/print-form)  
[SET PRINTABLE MARGIN](../commands/set-printable-margin)  

## Properties

|  |  |
| --- | --- |
| Command number | 702 |
| Thread safe | no |



