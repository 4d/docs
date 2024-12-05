---
id: vp-set-table-theme
title: VP SET TABLE THEME
---


<details><summary>History</summary>

|Release|Changes|
|---|---|
|19 R8|Added
</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->
**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName |Text|->|4D View Pro area form object name|
|tableName|Text|->|Table name|
|options|[cs.ViewPro.TableTheme](../classes.md#tabletheme)|->|Table theme properties to modify|
|sheet   |Integer|->|Sheet index (current sheet if omitted)|
<!-- END REF -->


#### Description

The `VP SET TABLE THEME` command <!-- REF #_method_.VP SET TABLE THEME.Summary -->modifies the current theme of the *tableName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area and in *tableName*, the name of the table to modify. 

In the *options* parameter, pass an object of the [`cs.ViewPro.TableTheme` class](../classes.md#tabletheme) that contains the theme properties to modify. 

In *sheet*, pass the index of the target sheet. If no index is specified or if you pass -1, the command applies to the current sheet.

#### Example 1

You want to set a predefined theme to a table:

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

#### Example 2

You want to have this alternate column rendering:

![](../../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// Enable the band column rendering
$param.bandColumns:=True
$param.bandRows:=False

// Create the theme object with header and column styles
$param.theme:=cs.ViewPro.TableThemeOptions.new()

var $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle

$styleHeader:=cs.ViewPro.TableStyle.new()
$styleHeader.backColor:="Gold"
$styleHeader.foreColor:="#03045E"
$param.theme.headerRowStyle:=$styleHeader

$styleColumn1:=cs.ViewPro.TableStyle.new()
$styleColumn1.backColor:="SkyBlue"
$styleColumn1.foreColor:="#03045E"
$param.theme.firstColumnStripStyle:=$styleColumn1

$styleColumn2:=cs.ViewPro.TableStyle.new()
$styleColumn2.backColor:="LightCyan"
$styleColumn2.foreColor:="#03045E"
$param.theme.secondColumnStripStyle:=$styleColumn2

VP SET TABLE THEME("ViewProArea"; "myTable"; $param)

```


#### See also

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table theme](vp-get-table-theme.md)
