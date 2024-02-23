---
id: commands-a
title: A
---
> **Warning**: The commands on this page are not thread-safe.

### VP ADD FORMULA NAME

<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->

**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|vpFormula|Text|-> |4D View Pro formula
|name|Text|->|Name for the formula|
|options|Object|->|Options for the named formula|<!-- END REF -->

#### Description

The `VP ADD FORMULA NAME` command <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->creates or modifies a named formula in the open document<!-- END REF -->.

>Named formulas created by this command are saved with the document.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

Pass the 4D View Pro formula that you want to name in *vpFormula*. For detailed information about formula syntax, see [Formulas and Functions](formulas.md) page.

Pass the new name for the formula in *name*. If the name is already used within the same scope, the new named formula replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named formula in *options*. The following properties are supported:

|Property |Type|Description|
|---|---|---|
|scope| Number| Scope for the formula. You can pass the sheet index (counting begins at 0) or use the following constants: <li>`vk current sheet`</li><li>`vk workbook`</li>The scope determines whether a formula name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named formula

#### Example  

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### See also

[Cell references](formulas.md#cell-references)<br/>
[VP Get formula by name](commands-g.md#vp-get-formula-by-name)<br/>
[VP Get names](commands-g.md#vp-get-names)

### VP ADD RANGE NAME

<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->

**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object |
|name|Text|->|Name for the fomula|
|options|Object|->|Options for the named formula|<!-- END REF -->

#### Description

The `VP ADD RANGE NAME` command <!-- REF #_method_.VP ADD RANGE NAME.Summary -->creates or modifies a named range in the open document<!-- END REF -->.

>Named ranges created by this command are saved with the document.

In *rangeObj*, pass the range that you want to name and in *name*, pass the new name for the range. If the name is already used within the same scope, the new named range replaces the existing one. Note that you can use the same name for different scopes (see below).

You can pass an object with additional properties for the named range in *options*. The following properties are supported:

|Property |Type|Description|
|---|---|---|
|scope| Number| Scope for the range. You can pass the sheet index (counting begins at 0) or use the following constants: <li>`vk current sheet`</li><li>`vk workbook`</li>The scope determines whether a range name is local to a given worksheet (*scope*=sheet index or `vk current sheet`), or global across the entire workbook (*scope*=`vk workbook`).|
|comment|Text|Comment associated to named range|

>* A named range is actually a named formula containing coordinates. `VP ADD RANGE NAME` facilitates the creation of named ranges, but you can also use the [`VP ADD FORMULA NAME`](#vp-add-formula-name) method to create named ranges.
> * Formulas defining named ranges can be retrieved with the [`VP Get formula by name`](#vp-get-formula-by-name) method.

#### Example  

You want to create a named range for a cell range:

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### See also

[VP Get names](commands-g.md#vp-get-names)<br/>
[VP Name](commands-n.md#vp-name)

### VP ADD SELECTION

<!-- REF #_method_.VP ADD SELECTION.Syntax -->

**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SELECTION.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Text|->|Range object |<!-- END REF -->

#### Description

The `VP ADD SELECTION` command <!-- REF #_method_.VP ADD SELECTION.Summary -->adds the specified cells to the currently selected cells<!-- END REF -->.

In *rangeObj*, pass a range object of cells to add to the current selection.

>The active cell is not modified.

#### Example  

You have cells currently selected:

![](../assets/en/ViewPro/cmd_vpAddSelection1.PNG)

The following code will add cells to your selection:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

Result:

![](../assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### See also

[VP Get active cell](commands-g.md#vp-get-active-cell)<br/>
[VP Get selection](commands-g.md#vp-get-selection)<br/>
[VP RESET SELECTION](commands-r.md#vp-reset-selection)<br/>
[VP SET ACTIVE CELL](commands-s.md#vp-set-active-cell)<br/>
[VP SET SELECTION](commands-s.md#vp-set-selection)<br/>
[VP SHOW CELL](commands-s.md#vp-show-cell)

### VP ADD SHEET

<!-- REF #_method_.VP ADD SHEET.Syntax -->
**VP ADD SHEET** ( *vpAreaName* : Text )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br/>**VP ADD SHEET** ( *vpAreaName* : Text ; *sheet* : Integer ; *name* : Text )<!-- END REF -->

<!-- REF #_method_.VP ADD SHEET.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|sheet|Integer|-> |Index of the new sheet|
|name|Text|->|Sheet name|<!-- END REF -->

#### Description

The `VP ADD SHEET` command <!-- REF #_method_.VP ADD SHEET.Summary -->inserts a sheet in the document loaded in *vpAreaName*.<!-- END REF -->

In *vpAreaName*, pass the name of the 4D View Pro area.

In *sheet*, you can pass an index for the new sheet. If the passed *index* is inferior to or equal to 0, the command inserts the new sheet at the beginning. If *index* exceeds the number of sheets, the command inserts the new sheet after the existing ones.

>Indexing starts at 0.

In *name*, you can pass a name for the new sheet. The new name cannot contain the following characters: `*, :, [, ], ?,\,/`

#### Example

The document currently has 3 sheets:

![vp-document-with-3-sheets](../assets/en/ViewPro/vp-sheet-3.png)

To insert a sheet at the third position (index 2) and name it "March":

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](../assets/en/ViewPro/vp-add-sheet.png)

#### See also

[VP REMOVE SHEET](commands-r.md#vp-remove-sheet)

### VP ADD SPAN

<!-- REF #_method_.VP ADD SPAN.Syntax -->
**VP ADD SPAN** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP ADD SPAN.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|rangeObj| Object|->|Range object|<!-- END REF -->

#### Description

The `VP ADD SPAN` command combines the cells in *rangeObj* as a single span of cells.

In *rangeObj*, pass a range object of cells. The cells in the range are joined to create a larger cell extending across multiple columns and/or rows. You can pass multiple cell ranges to create several spans at the same time. Note that if cell ranges overlap, only the first cell range is used.

> * Only the data in the upper-left cell is displayed. Data in the other combined cells is hidden until the span is removed.
> * Hidden data in spanned cells is accessible via formulas (beginning with the upper-left cell).

#### Example

To span the First quarter and Second quarter cells across the two cells beside them, and the South area cell across the two rows below it:

![initial-document](../assets/en/ViewPro/vp-add-span.png)

```4d
 // First quarter range
 $q1:=VP Cells("ViewProArea";2;3;3;1)
 
  // Second quarter range
 $q2:=VP Cells("ViewProArea";5;3;3;1)
 
  // South area range
 $south:=VP Cells("ViewProArea";0;5;1;3)
 
 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](../assets/en/ViewPro/vp-add-span-2.png)

#### See also

[4D View Pro Range Object Properties](getting-started.md#using-range-objects)<br/>
[VP Get spans](commands-g.md#vp-get-spans)<br/>
[VP REMOVE SPAN](commands-r.md#vp-remove-span)

### VP ADD STYLESHEET

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->
**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|styleName|Text|-> |Name of style|
|styleObj|Object|->|Object defining attribute settings|
|sheet|Integer|->|Sheet index (current sheet if omitted)|<!-- END REF -->

#### Description

The `VP ADD STYLESHEET` command <!-- REF #_method_.VP ADD STYLESHEET.Summary -->creates or modifies the *styleName* style sheet based upon the combination of the properties specified in *styleObj* in the open document<!-- END REF -->. If a style sheet with the same name and index already exists in the document, this command will overwrite it with the new values.

> Style sheets created by this command are saved with the document.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

The *styleName* parameter lets you assign a name to the style sheet. If the name is already used within the same scope, the new style sheet replaces the existing one. Note that you can use the same name for different scopes (see below).

Within the *styleObj*, designate the settings for the style sheet (e.g., font, text decoration, alignment, borders, etc.). For the full list of style properties, see [Style object properties](configuring.md#style-object-properties).

You can designate where to define the style sheet in the optional *sheet* parameter using the sheet index (indexing starts at 0) or with the following constants:

* `vk current sheet`
* `vk workbook`

If a *styleName* style sheet is defined at the workbook level and at a sheet level, the sheet level has priority over the workbook level when the style sheet is set.

To apply the style sheet, use the [VP SET DEFAULT STYLE](#vp-set-default-style) or [VP SET CELL STYLE](#vp-set-cell-style) commands.

#### Example  

The following code:

```4d
$styles:=New object
$styles.backColor:="green"
 
//Line Border Object
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)
 
//To apply the style
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

will create and apply the following style object named *GreenDashDotStyle*:

```
{
 backColor:green,
 borderBottom:{color:green,style:10},
 borderLeft:{color:green,style:10},
 borderRight:{color:green,style:10},
 borderTop:{color:green,style:10}
}
```

#### See also

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>
[VP Get stylesheet](commands-g.md#vp-get-stylesheet)<br/>
[VP Get stylesheets](commands-g.md#vp-get-stylesheets)<br/>
[VP REMOVE STYLESHEET](commands-r.md#vp-remove-stylesheet)<br/>
[VP SET CELL STYLE](commands-s.md#vp-set-cell-style)<br/>
[VP SET DEFAULT STYLE](commands-s.md#vp-set-default-style)

### VP All

<!-- REF #_method_.VP All.Syntax -->
**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP All.Params -->

|Parameter|Type| |Description|
|---|---|---|---|
|vpAreaName| Text|->|4D View Pro area form object name|
|sheet|Integer|->|Sheet index (current sheet if omitted)|
|Result|Object|<-|Range object of all cells|<!-- END REF -->

#### Description

The `VP ALL` command <!-- REF #_method_.VP All.Summary -->returns a new range object referencing all cells<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used.

#### Example  

You want to define a range object for all of the cells of the current spreadsheet:

```4d
$all:=VP All("ViewProArea") // all cells of the current sheet
```

#### See also

[VP Cell](commands-c.md#vp-cell)<br/>
[VP Cells](commands-c.md#vp-cells)<br/>
[VP Column](commands-c.md#vp-column)<br/>
[VP Combine ranges](commands-c.md#vp-combine-ranges)<br/>
[VP Name](commands-n.md#vp-name)<br/>
[VP Row](commands-r.md#vp-row)
