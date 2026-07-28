---
id: set-printable-margin
title: SET PRINTABLE MARGIN
slug: /commands/set-printable-margin
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINTABLE MARGIN.Syntax-->**SET PRINTABLE MARGIN** ( *left* : Integer ; *top* : Integer ; *right* : Integer ; *bottom* : Integer )<!-- END REF-->
<!--REF #_command_.SET PRINTABLE MARGIN.Params-->
<div class="no-index">

| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| left | Integer | &#8594;  | Left margin |
| top | Integer | &#8594;  | Top margin |
| right | Integer | &#8594;  | Right margin |
| bottom | Integer | &#8594;  | Bottom margin |
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

<!--REF #_command_.SET PRINTABLE MARGIN.Summary-->The **SET PRINTABLE MARGIN** command sets the values of various printing margins by using the [Print form](../commands/print-form), [PRINT SELECTION](../commands/print-selection) and [PRINT RECORD](../commands/print-record) commands.<!-- END REF-->

You can pass one of the following values in the *left*, *top*, *right* and *bottom* parameters:

* 0 = use paper margins
* \-1 = use printer margins
* value > 0 = margin in pixels (remember that 1 pixel in 72 dpi represents approximately 0.4 mm)

The values of the *right* and *bottom* parameters relate to the right and bottom edges of the paper respectively. 

**Note:** For more information regarding Printing management and terminology in 4D, refer to the [GET PRINTABLE MARGIN](../commands/get-printable-margin) command description. 

By default, 4D bases its printouts on the printer margins. Once the **SET PRINTABLE MARGIN** command is executed, the modified parameters are retained in the same process for the entire session. 

## Example 1 

The following example gets the size of the dead margin: 

```4d
 SET PRINTABLE MARGIN(-1;-1;-1;-1) //Sets the printer margin
 GET PRINTABLE MARGIN($l;$t;$r;$b)
  //$l, $t, $r and $b correspond to the dead margins of the sheet
```

## Example 2 

The following example gets the paper size: 

```4d
 SET PRINTABLE MARGIN(0;0;0;0) //Sets the paper margin
 GET PRINTABLE AREA($height;$width)
  //For size A4: $height=842 ; $width=595 pixels
```

## See also 

[GET PRINTABLE MARGIN](../commands/get-printable-margin)  
[Get printed height](../commands/get-printed-height)  
[Print form](../commands/print-form)  

## Properties

|  |  |
| --- | --- |
| Command number | 710 |
| Thread safe | no |



