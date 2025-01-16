---
id: classes
title: クラス
---

4D View Pro では、以下のクラスを使用することができます。

## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->

**.color** : Text<!-- END REF -->

`.color` プロパティは、 <!-- REF #LineBorder.color.Summary -->境界線の [色](configuring.md#境界線) を指定します<!-- END REF -->。 デフォルト = black

### .style

<!-- REF #LineBorder.style.Syntax -->

**.style** : Integer<!-- END REF -->

`.style` プロパティは、 <!-- REF #LineBorder.style.Summary -->境界線の [スタイル](configuring.md#境界線) を指定します<!-- END REF -->。 デフォルト = empty。

## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->

**.dataField** : Text<!-- END REF -->

`.dataField` プロパティは、 <!-- REF #TableColumn.dataField.Summary -->データコンテキストにおける、表の列のプロパティ名を格納します<!-- END REF -->。

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->

**.formatter** : Text<!-- END REF -->

`.formatter` プロパティは、 <!-- REF #TableColumn.formatter.Summary -->表の列のフォーマッターを格納します<!-- END REF -->。

### .name

<!-- REF #TableColumn.name.Syntax -->

**.name** : Text<!-- END REF -->

`.name` プロパティは、 <!-- REF #TableColumn.name.Summary -->表の列の名前を格納します<!-- END REF --> (必須)。

## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->

**.allowAutoExpand** : Boolean<!-- END REF -->

`.allowAutoExpand` プロパティは、 <!-- REF #TableOptions.allowAutoExpand.Summary -->隣接する空のセルに値が追加されたとき、表の列または行を拡張するかどうかを示します<!-- END REF -->。 デフォルト = true

### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

`.bandColumns` プロパティは、 <!-- REF #TableOptions.bandColumns.Summary -->列において交互のスタイルを表示するかどうかを示します<!-- END REF -->。 デフォルト = false

### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

`.bandRows` プロパティは、 <!-- REF #TableOptions.bandRows.Summary -->行において交互のスタイルを表示するかどうかを示します<!-- END REF -->。 デフォルト = true

### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

`.highlightLastColumn` プロパティは、 <!-- REF #TableOptions.highlightLastColumn.Summary -->最後の列をハイライト表示するかどうかを示します<!-- END REF -->。 デフォルト = false

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

`.highlightFirstColumn` プロパティは、 <!-- REF #TableOptions.highlightFirstColumn.Summary -->先頭の列をハイライト表示するかどうかを示します<!-- END REF -->。 デフォルト = false

### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->

**.showFooter** : Boolean<!-- END REF -->

`.showFooter` プロパティは、 <!-- REF #TableOptions.showFooter.Summary -->フッターを表示するかどうかを示します<!-- END REF -->。 デフォルト = false

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->

**.showHeader** : Boolean<!-- END REF -->

`.showHeader` プロパティは、 <!-- REF #TableOptions.showHeader.Summary -->ヘッダーを表示するかどうかを示します<!-- END REF -->。 デフォルト = true

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->

**.showResizeHandle** : Boolean<!-- END REF -->

`.showResizeHandle` プロパティは、 <!-- REF #TableOptions.showResizeHandle.Summary -->*source* を持たない表において、リサイズハンドルを表示するかどうかを示します<!-- END REF -->。 デフォルト = false

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->

**.tableColumns** : Collection<!-- END REF -->

`.tableColumns` プロパティは、 <!-- REF #TableOptions.tableColumns.Summary -->表の列を作成するのに使用される [cs.ViewPro.TableColumn](#tablecolumn) オブジェクトのコレクションです<!-- END REF -->。

### .theme

<!-- REF #TableOptions.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->

`.theme` プロパティは、 <!-- REF #TableOptions.theme.Summary -->表のテーマを定義します   (SpreadJS のネイティブテーマ名のテキスト値も可)<!-- END REF -->。

[ネイティブSpreadJSテーマ](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) を参照ください。

### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->

**.useFooterDropDownList** : Boolean<!-- END REF -->

`.useFooterDropDownList` プロパティは、 <!-- REF #TableOptions.useFooterDropDownList.Summary -->列の合計値を計算するフッターセルでドロップダウンリストを使用するかを示します<!-- END REF -->。 デフォルト = false

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

`.borderLeft` プロパティは、 <!-- REF #TableStyle.borderLeft.Summary -->表の左の外枠線を定義します <!-- END REF -->。

### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->

**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

`.borderRight` プロパティは、 <!-- REF #TableStyle.borderRight.Summary -->表の右の外枠線を定義します <!-- END REF -->。

### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->

**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

`.borderBottom` プロパティは、 <!-- REF #TableStyle.borderBottom.Summary -->表の下の外枠線を定義します <!-- END REF -->。

### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

`.borderBottom` プロパティは、 <!-- REF #TableStyle.borderHorizontal.Summary -->表の横の外枠線を定義します <!-- END REF -->。

### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->

**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

`.borderVerical` プロパティは、 <!-- REF #TableStyle.borderVertical.Summary -->表の縦の外枠線を定義します <!-- END REF -->。

## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

`.bandRows` プロパティは、 <!-- REF #TableTheme.bandRows.Summary -->行において交互のスタイルを表示するかどうかを示します<!-- END REF -->。

### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

`.bandColumns` プロパティは、 <!-- REF #TableTheme.bandColumns.Summary -->列において交互のスタイルを表示するかどうかを示します<!-- END REF -->。

### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

`.highlightLastColumn` プロパティは、 <!-- REF #TableTheme.highlightLastColumn.Summary -->最後の列をハイライト表示するかどうかを示します<!-- END REF -->。

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

`.highlightFirstColumn` プロパティは、 <!-- REF #TableTheme.highlightFirstColumn.Summary -->先頭の列をハイライト表示するかどうかを示します<!-- END REF -->。

### .theme

<!-- REF #TableTheme.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->

`.theme` プロパティは、 <!-- REF #TableTheme.theme.Summary -->表のテーマを定義します<!-- END REF -->。
テキスト値の場合は、[ネイティブSpreadJSテーマ](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) の名前を使用します。

## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->

**.firstColumnStripSize** : Integer<!-- END REF -->

`.firstColumnStripSize` プロパティは、 <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->一つ目の交互の列スタイルを適用する列数を指定します<!-- END REF -->。 デフォルト = 1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->

**.firstColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.firstColumnStripStyle` プロパティは、 <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->一つ目の交互の列スタイルを指定します<!-- END REF -->。

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->

**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.firstFooterCellStyle` プロパティは、 <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->フッターの先頭セルのスタイルを指定します<!-- END REF -->。 "highlightFirstColumn" が true でなくてはなりません。

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->

**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.firstHeaderCellStyle` プロパティは、 <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->ヘッダーの先頭セルのスタイルを指定します<!-- END REF -->。 "highlightFirstColumn" が true でなくてはなりません。

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->

**.firstRowStripSize** : Integer<!-- END REF -->

`.firstRowStripSize` プロパティは、 <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->一つ目の交互の行スタイルを適用する行数を指定します<!-- END REF -->。 デフォルト = 1。

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->

**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.firstRowStripStyle` プロパティは、 <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->一つ目の交互の行スタイルを指定します<!-- END REF -->。

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->

**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.footerRowStyle` プロパティは、 <!-- REF #TableThemeOptions.footerRowStyle.Summary -->フッターエリアのデフォルトスタイルを指定します<!-- END REF -->。

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->

**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.headerRowStyle` プロパティは、 <!-- REF #TableThemeOptions.headerRowStyle.Summary -->ヘッダーエリアのデフォルトスタイルを指定します<!-- END REF -->。

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->

**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.highlightFirstColumnStyle` プロパティは、 <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->先頭列のスタイルを指定します<!-- END REF -->。 "highlightFirstColumn" が true でなくてはなりません。

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->

**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.highlightLastColumnStyle` プロパティは、 <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->最後の列のスタイルを指定します<!-- END REF -->。 "highlightLastColumn" が true でなくてはなりません。

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->

**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.lastFooterCellStyle` プロパティは、 <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->フッターの最後のセルのスタイルを指定します<!-- END REF -->。 "highlightLastColumn" が true でなくてはなりません。

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->

**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.lastHeaderCellStyle` プロパティは、 <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->ヘッダーの最後のセルのスタイルを指定します<!-- END REF -->。 "highlightLastColumn" が true でなくてはなりません。

### .name

<!-- REF #TableThemeOptions.name.Syntax -->

**.name** : Text<!-- END REF -->

`.name` プロパティは、 <!-- REF #TableThemeOptions.name.Summary -->[ネイティブSpreadJSテーマの名前](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) を指定します<!-- END REF -->。

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->

**.secondColumnStripSize** : Integer<!-- END REF -->

`.secondColumnStripSize` プロパティは、 <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->二つ目の交互の列スタイルを適用する列数を指定します<!-- END REF -->。 デフォルト = 1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->

**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.secondColumnStripStyle` プロパティは、 <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->二つ目の交互の列スタイルを指定します<!-- END REF -->。

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->

**.secondRowStripSize** : Integer<!-- END REF -->

`.secondRowStripSize` プロパティは、 <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->二つ目の交互の行スタイルを適用する行数を指定します<!-- END REF -->。 デフォルト = 1。

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->

**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.secondRowStripStyle` プロパティは、 <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->二つ目の交互の行スタイルを指定します<!-- END REF -->。

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->

**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

`.wholeTableStyle` プロパティは、 <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->データエリアのデフォルトスタイルを指定します<!-- END REF -->。
