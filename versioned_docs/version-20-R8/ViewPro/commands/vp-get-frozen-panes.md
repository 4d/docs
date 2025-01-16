---
id: vp-get-frozen-panes
title: VP Get frozen panes
---

<!-- REF #_method_.VP Get frozen panes.Syntax -->
**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get frozen panes.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|sheet  |Integer|->|Sheet index (current sheet if omitted)|
|Result  |Object|<-|Object containing frozen column and row information|<!-- END REF -->

#### Description

The `VP Get frozen panes` command <!-- REF #_method_.VP Get frozen panes.Summary -->returns an object with information about the frozen columns and rows in *vpAreaName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used.

##### Returned object

The command returns an object describing the frozen columns and rows. This object can contain the following properties:

|Property|  Type|  Description|
|---|---|---|
|columnCount|  Integer|  The number of frozen columns on the left of the sheet|
|trailingColumnCount| Integer|  The number of frozen columns on the right of the sheet|
|rowCount|  Integer|   The number of frozen rows on the top of the sheet|
|trailingRowCount|  Integer|   The number of frozen rows on the bottom of the sheet|

#### Example

You want to retrieve information about the number of frozen columns and rows:

```4d
var $panesObj : Object

 
$panesObj:=VP Get frozen panes("ViewProArea")
```

The returned object contains, for example:

![](../../assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### See also

[VP SET FROZEN PANES](vp-set-frozen-panes.md)
