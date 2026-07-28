---
id: get-printable-area
title: GET PRINTABLE AREA
slug: /commands/get-printable-area
displayed_sidebar: docs
---

<!--REF #_command_.GET PRINTABLE AREA.Syntax-->**GET PRINTABLE AREA** ( *height* : Integer {; *width* : Integer} )<!-- END REF-->
<!--REF #_command_.GET PRINTABLE AREA.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| height | Integer | &#8592; | Height of printable area |
| width | Integer | &#8592; | Width of printable area |
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

<!--REF #_command_.GET PRINTABLE AREA.Summary-->The **GET PRINTABLE AREA** command returns the size, in pixels, of the *height* and *width* parameters of the printable area.<!-- END REF--> This size depends on the current printing parameters, the paper orientation, etc. 

The sizes returned do not vary from one page to another (after a page break, for instance). 

Associated with the [Get printed height](../commands/get-printed-height) command, this command is useful for knowing the number of pixels available for printing or for centering an object on the page. 

**Note:** For more information regarding Printing management and terminology in 4D, refer to the [GET PRINTABLE MARGIN](../commands/get-printable-margin) command description. 

To know the total size of the page, you can:

* either add the margins supplied by the [GET PRINTABLE MARGIN](../commands/get-printable-margin) command to the values returned by this command.
* or use the following syntax:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) // Set the paper margin
 GET PRINTABLE AREA(hPaper;wPaper) // Paper size
```

## See also 

[GET PRINTABLE MARGIN](../commands/get-printable-margin)  
[Print form](../commands/print-form)  

## Properties

|  |  |
| --- | --- |
| Command number | 703 |
| Thread safe | no |



