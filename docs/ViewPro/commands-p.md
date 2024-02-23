---
id: commands-p
title: P
---

> **Warning**: The commands on this page are not thread-safe.



### VP PASTE FROM OBJECT

<details><summary>History</summary>

|Version|Changes|
|---|---|
|v19 R4|Added
</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->
**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )<!-- END REF -->

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|rangeObj|Object|->|Cell range object|
|dataObject|Object|->|Object containing the data to be pasted|
|options|Longint|->|Specifies what is pasted|<!-- END REF -->

#### Description

The `VP PASTE FROM OBJECT` command <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pastes the contents, style and formulas stored in *dataObject* to the *rangeObj* object<!-- END REF -->.

In *rangeObj*, pass the cell range object where the values, formatting, and/or formula cells will be pasted. If *rangeObj* refers to more than one cell, only the first one is used.

In *dataObject*, pass the object that contains the cell data, formatting, and formulas to be pasted.

In the optional *options* parameter, you can specify what to paste in the cell range. Possible values:

|Constant|Description|
|---|---|---|
|`vk clipboard options all`|Pastes all data objects, including values, formatting, and formulas.|
|`vk clipboard options formatting`|Pastes only the formatting.|
|`vk clipboard options formulas`|Pastes only the formulas.|
|`vk clipboard options formulas and formatting`|Pastes formulas and formatting.|
|`vk clipboard options values`|Pastes only values.|
|`vk clipboard options value and formatting`|Pastes values and formatting.|

The paste options defined in the [workbook options](#vp-set-workbook-options) are taken into account.

If *options* refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

#### Example

See example the example from [VP Copy to object](#vp-copy-to-object)

#### See also

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT

<!-- REF #_method_.VP PRINT.Syntax -->
**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP PRINT.Params -->

|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName   |Text|->|4D View Pro area form object name|
|sheet   |Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP PRINT` command <!-- REF #_method_.VP PRINT.Summary -->opens a print dialog window to print *vpAreaName*<!-- END REF -->.

Pass the 4D View Pro area to be printed in *vpAreaName*. The command will open the system print dialog window where the printer can be specified and the page properties can be defined.

>The properties defined in the print dialog window are for the printer paper, they are not the printing properties for the 4D View Pro area. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](#vp-set-print-info) command. It is highly recommended that the properties for both the printer and the 4D View Pro area match, otherwise the printed document may not correspond to your expectations.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current sheet is used by default. You can explicitly select the current spreadsheet or entire workbook with the following constants:

* `vk current sheet`
* `vk workbook`  

> * 4D View Pro areas can only be printed with the `VP PRINT` command.
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * This command is intended for individual printing by the final end user. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](#vp-export-document) method.

#### Example

The following code:

```4d
 VP PRINT("myVPArea")
```

... will open a print dialog window:

![](../assets/en/ViewPro/cmd_vpPrint.PNG)

#### See also

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)
