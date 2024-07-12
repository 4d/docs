---
id: vp-set-workbook-options
title: VP SET WORKBOOK OPTIONS
---


<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->
**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->
|Parameter|Type||Description|
|---|---|---|---|
|vpAreaName  |Text|->|4D View Pro area form object name|
|optionObj |Object|->|Object containing the workbook options to be set|<!-- END REF -->

#### Description

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
sets the workbook options in *vpAreaName*<!-- END REF -->.

In *vpAreaName*, pass the name of the 4D View Pro area.

In *optionObj*, pass the workbook options to apply to *vpAreaName*.

If *optionObj* is empty, the command does nothing.

Modified workbook options are saved with the document.

The following table lists the available workbook options:

|Property|Type|Description|
|---|---|---|
| allowUserDragMerge | boolean | The drag merge operation is allowed (select cells and drag the selection to merge cells)
| allowAutoCreateHyperlink | boolean | Enables automatic creation of hyperlinks in the spreadsheet. |
| allowContextMenu | boolean | The built-in context menu can be opened. |
| allowCopyPasteExcelStyle | boolean | Styles from a spreadsheet can be copied and pasted to Excel, and vice-versa.|
| allowDynamicArray|boolean| Enables dynamic arrays in worksheets|
| allowExtendPasteRange| boolean | Extends the pasted range if the pasted range is not enough for the pasted data |
| allowSheetReorder | boolean | Sheet reordering is allowed |
| allowUndo | boolean | Undoing edits is allowed. |
| allowUserDeselect | boolean | Deselecting specific cells from a selection is allowed. |
| allowUserDragDrop | boolean | Drag and drop of range data is allowed |
| allowUserDragFill | boolean | Drag fill is allowed |
| allowUserEditFormula | boolean | Formulas can be entered in cells  |
| allowUserResize | boolean | Columns and rows can be resized |
| allowUserZoom | boolean | Zooming (ctrl + mouse wheel) is allowed |
| autoFitType | number | Content is formatted to fit in cells, or cells and headers. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk auto fit type cell </td><td>0</td><td> The content autofits cells</td></tr><tr><td> vk auto fit type cell with header </td><td>1</td><td> The content autofits cells and headers</td></tr></table> |
| backColor | string | A color string used to represent the background color of the area, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5". The initial backgroundcolor is hidden when a backgroundImage is set. |
| backgroundImage | string / picture / file | Background image for the area. |
| backgroundImageLayout | number | How the background image is displayed. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk image layout center </td><td>1</td><td> In the center of the area.</td></tr><tr><td> vk image layout none </td><td>3</td><td> In the upper left corner of the area with its original size.</td></tr><tr><td> vk image layout stretch </td><td>0</td><td> Fills the area.</td></tr><tr><td> vk image layout zoom </td><td>2</td><td> Displayed with its original aspect ratio.</td></tr></table> |
| calcOnDemand | boolean | Formulas are calculated only when they are demanded. |
| columnResizeMode | number | Resize mode for columns. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk resize mode normal </td><td>0</td><td> Use normal resize mode (i.e remaining columns are affected)</td></tr><tr><td> vk resize mode split </td><td>1</td><td> Use split mode (i.e remaining columns are not affected)</td></tr></table>|
| copyPasteHeaderOptions | number | Headers to include when data is copied to or pasted. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk copy paste header options all headers</td><td>3</td><td> Includes selected headers when data is copied; overwrites selected headers when data is pasted.</td></tr><tr><td> vk copy paste header options column headers </td><td>2</td><td> Includes selected column headers when data is copied; overwrites selected column headers when data is pasted.</td></tr><tr><td> vk copy paste header options no headers</td><td>0</td><td> Column and row headers are not included when data is copied; does not overwrite selected column or row headers when data is pasted.</td></tr><tr><td> vk copy paste header options row headers</td><td>1</td><td>  Includes selected row headers when data is copied; overwrites selected row headers when data is pasted.</td></tr></table> |
| customList | collection | The list for users to customize drag fill, prioritize matching this list in each fill. Each collection item is a collection of strings. See on [SpreadJS docs](https://developer.mescius.com/spreadjs/docs/features/cells/AutoFillData/AutoFillLists).|
| cutCopyIndicatorBorderColor | string | Border color for the indicator displayed when the user cuts or copies the selection. |
| cutCopyIndicatorVisible | boolean | Display an indicator when copying or cutting the selected item. |
| defaultDragFillType | number | The default drag fill type. Available values : <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Automatically fills cells. </td></tr><tr><td> vk auto fill type clear values </td><td>4</td><td> Clears cell values.</td></tr><tr><td> vk auto fill type copycells </td><td>0</td><td> Fills cells with all data objects, including values, formatting, and formulas.</td></tr><tr><td> vk auto fill type fill formatting only </td><td>2</td><td> Fills cells only with formatting.</td></tr><tr><td> vk auto fill type fill series </td><td>1</td><td> Fills cells with series. </td></tr><tr><td> vk auto fill type fill without formatting </td><td>3</td><td> Fills cells with values and not formatting. </td></tr></table> |
| enableAccessibility | boolean | Accessibility support is enabled in the spreadsheet. |
| enableFormulaTextbox | boolean | The formula text box is enabled. |
| grayAreaBackColor | string | A color string used to represent the background color of the gray area , such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on. |
| highlightInvalidData | boolean | Invalid data is highlighted. |
| iterativeCalculation | boolean | Enables iterative calculation. See on [SpreadJS docs](https://developer.mescius.com/spreadjs/docs/formulareference/formulaoverview/calculating-iterative). |
| iterativeCalculationMaximumChange | numeric | Maximum amount of change between two calculation values. |
| iterativeCalculationMaximumIterations | numeric | Number of times the formula should recalculate. |
| newTabVisible | boolean | Display a special tab to let users insert new sheets. |
| numbersFitMode | number | Changes display mode when date/number data width is longer than column width. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk numbers fit mode mask</td><td>0</td><td> Replace data content with "###" and shows tip</td></tr><tr><td> vk numbers fit mode overflow </td><td>1</td><td> Display data content as a string. If next cell is empty, overflow the content.</td></tr></table>|
| pasteSkipInvisibleRange | boolean | Paste or skip pasting data in invisible ranges: <ul><li>False (default): paste data</li><li>True: Skip pasting in invisible ranges</li></ul>See [SpreadJS docs](https://developer.mescius.com/spreadjs/docs/features/rows-columns/paste-skip-data-invisible-range) for more information on invisible ranges.|
| referenceStyle | number | Style for cell and range references in cell formulas. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk reference style A1 </td><td>0</td><td> Use A1 style.</td></tr><tr><td> vk reference style R1C1 </td><td>1</td><td> Use R1C1 style</td></tr></table> |
| resizeZeroIndicator | number | Drawing policy when the row or column is resized to zero. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk resize zero indicator default </td><td>0</td><td> Uses the current drawing policy when the row or column is resized to zero.</td></tr><tr><td> vk resize zero indicator enhanced </td><td>1</td><td> Draws two short lines when the row or column is resized to zero.</td></tr></table> |
| rowResizeMode | number | The way rows are resized. Available values are the same as columnResizeMode |
| scrollbarAppearance | number | Scrollbar appearance. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Mobile scrollbar appearance.</td></tr><tr><td> vk scrollbar appearance skin (default)</td><td>0</td><td> Excel-like classic scrollbar appearance.</td></tr></table>|
| scrollbarMaxAlign | boolean | The scroll bar aligns with the last row and column of the active sheet. |
| scrollbarShowMax | boolean | The displayed scroll bars are based on the entire number of columns and rows in the sheet. |
| scrollByPixel | boolean | Enable precision scrolling by pixel. |
| scrollIgnoreHidden | boolean | The scroll bar ignores hidden rows or columns. |
| scrollPixel | integer | Decides scrolling by that number of pixels at a time when scrollByPixel is true. The final scrolling pixels are the result of `scrolling delta * scrollPixel`. For example: scrolling delta is 3, scrollPixel is 5, the final scrolling pixels are 15. |
| showDragDropTip | boolean | Display the drag-drop tip. |
| showDragFillSmartTag | boolean | Display the drag fill dialog. |
| showDragFillTip | boolean | Display the drag-fill tip. |
| showHorizontalScrollbar | boolean | Display the horizontal scroll bar. |
| showResizeTip | number | How to display the resize tip. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk show resize tip both </td><td>3</td><td> Horizontal and vertical resize tips are displayed.</td></tr><tr><td> vk show resize tip column </td><td>1</td><td> Only the horizontal resize tip is displayed.</td></tr><tr><td> vk show resize tip none </td><td>0</td><td> No resize tip is displayed.</td></tr><tr><td> vk show resize tip row </td><td>2</td><td> Only the vertical resize tip is displayed.</td></tr></table>|
| showScrollTip | number | How to display the scroll tip. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk show scroll tip both </td><td>3</td><td> Horizontal and vertical scroll tips are displayed.</td></tr><tr><td> vk show scroll tip horizontal </td><td>1</td><td> Only the horizontal scroll tip is displayed.</td></tr><tr><td> vk show scroll tip none </td><td> No scroll tip is displayed.</td></tr><tr><td> vk show scroll tip vertical </td><td>2</td><td> Only the vertical scroll tip is displayed.</td></tr></table> |
| showVerticalScrollbar | boolean | Display the vertical scroll bar. |
| tabEditable | boolean | The sheet tab strip can be edited. |
| tabNavigationVisible | boolean | Display the sheet tab navigation. |
| tabStripPosition | number | Position of the tab strip. Available values: <table><tr><th>Constant</th><th>Value</th><th>Description</th></tr><tr><td> vk tab strip position bottom </td><td>0</td><td> Tab strip position is relative to the bottom of the workbook.</td></tr><tr><td> vk tab strip position left </td><td>2</td><td> Tab strip position is relative to the left of the workbook.</td></tr><tr><td> vk tab strip position right </td><td>3</td><td> Tab strip position is relative to the right of the workbook.</td></tr><tr><td> vk tab strip position top </td><td>1</td><td> Tab strip position is relative to the top of the workbook.</td></tr></table>|
| tabStripRatio | number | Percentage value (0.x) that specifies how much of the horizontal space will be allocated to the tab strip. The rest of the horizontal area (1 - 0.x) will allocated to the horizontal scrollbar. |
| tabStripVisible | boolean | Display the sheet tab strip. |
| tabStripWidth | number | Width of the tab strip when position is left or right. Default and minimum is 80. |
| useTouchLayout | boolean | Whether to use touch layout to present the Spread component. |

#### Example

To set the allowExtendpasteRange option in "ViewProArea":

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

#### See also

[VP Get workbook options](vp-get-workbook-options.md)


