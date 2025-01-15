---
id: classes
title: Classes
---

As seguintes classes podem ser usadas no 4D View Pro.

## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->

**.color** : Text<!-- END REF -->

The `.color` property is the <!-- REF #LineBorder.color.Summary -->[color](configuring.md#borders) of the border<!-- END REF -->. Predefinição = black.

### .style

<!-- REF #LineBorder.style.Syntax -->

**.style** : Integer<!-- END REF -->

The `.style` property is the <!-- REF #LineBorder.style.Summary -->[style](configuring.md#borders) of the border<!-- END REF -->. Predefinição = vazio.

## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->

**.dataField** : Text<!-- END REF -->

The `.dataField` property <!-- REF #TableColumn.dataField.Summary -->contains the table column's property name in the data context<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->

**.formatter** : Text<!-- END REF -->

The `.formatter` property <!-- REF #TableColumn.formatter.Summary -->contains the table column's formatter<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->

**.name** : Text<!-- END REF -->

The `.name` property <!-- REF #TableColumn.name.Summary -->contains the table column's name<!-- END REF --> (mandatory).

## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->

**.allowAutoExpand** : Boolean<!-- END REF -->

The `.allowAutoExpand` property <!-- REF #TableOptions.allowAutoExpand.Summary -->indicates whether to expand columns or rows of the table when values are added in empty adjacent cells<!-- END REF -->. Padrão = True

### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

The `.bandColumns` property <!-- REF #TableOptions.bandColumns.Summary -->indicates whether to display an alternating column style<!-- END REF -->. Padrão = False

### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

The `.bandRows` property <!-- REF #TableOptions.bandRows.Summary -->indicates whether to display an alternating row style<!-- END REF -->. Padrão = True

### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

The `.highlightLastColumn` property <!-- REF #TableOptions.highlightLastColumn.Summary -->indicates whether to highlight the last column<!-- END REF -->. Padrão = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

The `.highlightFirstColumn` property <!-- REF #TableOptions.highlightFirstColumn.Summary -->indicates whether to highlight the first column<!-- END REF -->. Padrão = False

### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->

**.showFooter** : Boolean<!-- END REF -->

The `.showFooter` property <!-- REF #TableOptions.showFooter.Summary -->indicates whether to display a footer<!-- END REF -->. Padrão = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->

**.showHeader** : Boolean<!-- END REF -->

The `.showHeader` property <!-- REF #TableOptions.showHeader.Summary -->indicates whether to display a header<!-- END REF -->. Padrão = True

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->

**.showResizeHandle** : Boolean<!-- END REF -->

The `.showResizeHandle` property <!-- REF #TableOptions.showResizeHandle.Summary -->indicates whether to display the resize handle for tables that don't have a *source*<!-- END REF -->. Padrão = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->

**.tableColumns** : Collection<!-- END REF -->

The `.tableColumns` property <!-- REF #TableOptions.tableColumns.Summary -->is a collection of [cs.ViewPro.TableColumn](#tablecolumn) objects used to create the table's columns<!-- END REF -->.

### .theme

<!-- REF #TableOptions.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->

The `.theme` property <!-- REF #TableOptions.theme.Summary -->defines a table theme. Também pode ser um texto (nome de um tema nativo SpreadJS)<!-- END REF -->.

Consulte los[ temas nativos de SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->

**.useFooterDropDownList** : Boolean<!-- END REF -->

The `.useFooterDropDownList` property <!-- REF #TableOptions.useFooterDropDownList.Summary -->indicates whether to use a dropdown list in footer cells that calculate the total value of a column<!-- END REF -->. Padrão = False

## TableStyle

### .backColor

<!-- REF #TableStyle.backColor.Syntax -->

**.backColor** : Text<!-- END REF -->

The `.backColor` property is the <!-- REF #TableStyle.backColor.Summary -->[background color](configuring.md#background--foreground) of the table<!-- END REF -->.

### .forecolor

<!-- REF #TableStyle.forecolor.Syntax -->

**.forecolor** : Text<!-- END REF -->

The `.forecolor` property is the <!-- REF #TableStyle.forecolor.Summary -->[foreground color](configuring.md#background--foreground) of the table<!-- END REF -->.

### .font

<!-- REF #TableStyle.font.Syntax -->

**.font** : Text<!-- END REF -->

The `.font` property is the <!-- REF #TableStyle.font.Summary -->font name (see [**Fonts and text**](configuring.md#fonts-and-text)) of the table<!-- END REF -->.

### .textDecoration

<!-- REF #TableStyle.textDecoration.Syntax -->

**.textDecoration** : Integer<!-- END REF -->

The `.textDecoration` property is the <!-- REF #TableStyle.textDecoration.Summary -->text decoration of the table (see [**Fonts and text**](configuring.md#fonts-and-text))<!-- END REF -->.

### .borderLeft

<!-- REF #TableStyle.borderLeft.Syntax -->

**.borderLeft** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderLeft` property is the <!-- REF #TableStyle.borderLeft.Summary -->left border line of the table <!-- END REF -->.

### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->

**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderRight` property is the <!-- REF #TableStyle.borderRight.Summary -->right border line of the table <!-- END REF -->.

### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->

**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderBottom` property is the <!-- REF #TableStyle.borderBottom.Summary -->bottom border line of the table <!-- END REF -->.

### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderHorizontal` property is the <!-- REF #TableStyle.borderHorizontal.Summary -->horizontal border line of the table <!-- END REF -->.

### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->

**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderVertical` property is the <!-- REF #TableStyle.borderVertical.Summary -->vertical border line of the table <!-- END REF -->.

## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

The `.bandRows` property <!-- REF #TableTheme.bandRows.Summary -->indicates whether to display an alternating row style<!-- END REF -->.

### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

The `.bandColumns` property <!-- REF #TableTheme.bandColumns.Summary -->indicates whether to display an alternating column style<!-- END REF -->.

### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

The `.highlightLastColumn` property <!-- REF #TableTheme.highlightLastColumn.Summary -->indicates whether to highlight the last column<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

The `.highlightFirstColumn` property <!-- REF #TableTheme.highlightFirstColumn.Summary -->indicates whether to highlight the first column<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->

The `.theme` property <!-- REF #TableTheme.theme.Summary -->defines a table theme<!-- END REF -->.
Si Text: nombre de un [tema nativo SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->

**.firstColumnStripSize** : Integer<!-- END REF -->

The `.firstColumnStripSize` property is the <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->size of the first alternating column<!-- END REF -->. O padrão=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->

**.firstColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstColumnStripStyle` property is the <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->style of the first alternating column<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->

**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstFooterCellStyle` property is the <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->style of the first footer cell<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->

**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstHeaderCellStyle` property is the <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->style of the first header cell<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->

**.firstRowStripSize** : Integer<!-- END REF -->

The `.firstRowStripSize` property is the <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->size of the first alternating column<!-- END REF -->. O padrão=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->

**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstRowStripStyle` property is the <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->first alternating row style<!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->

**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.footerRowStyle` property is the <!-- REF #TableThemeOptions.footerRowStyle.Summary -->default style of the footer area<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->

**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.headerRowStyle` property is the <!-- REF #TableThemeOptions.headerRowStyle.Summary -->default style of the header area<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->

**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.highlightFirstColumnStyle` property is the <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->style of the first column<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->

**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.highlightLastColumnStyle` property is the <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->style of the last column<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->

**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.lastFooterCellStyle` property is the <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->style of the last footer cell<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->

**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.lastHeaderCellStyle` property is the <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->style of the last header cell<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->

**.name** : Text<!-- END REF -->

The `.name` property is the <!-- REF #TableThemeOptions.name.Summary -->name of a [native SpreadJS theme](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->

**.secondColumnStripSize** : Integer<!-- END REF -->

The `.secondColumnStripSize` property is the <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->size of the second alternating column<!-- END REF -->. O padrão=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->

**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.secondColumnStripStyle` property is the <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->style of the second alternating column<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->

**.secondRowStripSize** : Integer<!-- END REF -->

The `.secondRowStripSize` property is the <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->size of the second alternating column<!-- END REF -->. O padrão=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->

**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.secondRowStripStyle` property is the <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->second alternating row style<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->

**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.wholeTableStyle` property is the <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->default style of the data area<!-- END REF -->.
