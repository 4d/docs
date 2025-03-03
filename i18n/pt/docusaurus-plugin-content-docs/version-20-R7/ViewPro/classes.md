---
id: classes
title: Classes
---

As seguintes classes podem ser usadas no 4D View Pro.

## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->

**.color** : Text<!-- END REF -->

A propriedade `.color` é a <!-- REF #LineBorder.color.Summary -->[color](configuring.md#borders) da borda<!-- END REF -->. Predefinição = black.

### .style

<!-- REF #LineBorder.style.Syntax -->

**.style** : Integer<!-- END REF -->

A propriedade `.style` é a <!-- REF #LineBorder.style.Summary -->[style](configuring.md#borders) da borda<!-- END REF -->. Predefinição = vazio.

## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->

**.dataField** : Text<!-- END REF -->

A propriedade `.dataField` <!-- REF #TableColumn.dataField.Summary -->contém o nome da propriedade da coluna da tabela no contexto de dados<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->

**.formatter** : Text<!-- END REF -->

A propriedade `.formatter` <!-- REF #TableColumn.formatter.Summary -->contém o formato da coluna da tabela<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->

**.name** : Text<!-- END REF -->

A propriedade `.name` <!-- REF #TableColumn.name.Summary -->contém o nome da coluna da tabela <!-- END REF --> (obrigatório).

## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->

**.allowAutoExpand** : Boolean<!-- END REF -->

The `.allowAutoExpand` property <!-- REF #TableOptions.allowAutoExpand.Summary -->indicates whether to expand columns or rows of the table when values are added in empty adjacent cells<!-- END REF -->. Padrão = True

### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary --> indica se deve exibir um estilo de coluna alternativo<!-- END REF -->. Padrão = False

### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableOptions.bandRows.Summary --> indica se deve exibir um estilo de linha alternativo<!-- END REF -->. Padrão = True

### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

A propriedade `.highlightLastColumn` <!-- REF #TableOptions.highlightLastColumn.Summary --> indica se deve destacar a última coluna<!-- END REF -->. Padrão = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

The `.highlightFirstColumn` property <!-- REF #TableOptions.highlightFirstColumn.Summary -->indicates whether to highlight the first column<!-- END REF -->. Padrão = False

### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->

**.showFooter** : Boolean<!-- END REF -->

A propriedade `.showFooter` <!-- REF #TableOptions.showFooter.Summary --> indica se deve exibir um pied de page<!-- END REF -->. Padrão = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->

**.showHeader** : Boolean<!-- END REF -->

A propriedade `.showHeader` <!-- REF #TableOptions.showHeader.Summary -->indica se deve exibir um cabeçalho<!-- END REF -->. Padrão = True

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

A propriedade `.theme` <!-- REF #TableOptions.theme.Summary -->define um tema de tabela. Também pode ser um texto (nome de um tema nativo SpreadJS)<!-- END REF -->.

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

A propriedade `.borderLeft` é a <!-- REF #TableStyle.borderLeft.Summary -->linha de borda esquerda da tabela <!-- END REF -->.

### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->

**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderRight` é a <!-- REF #TableStyle.borderRight.Summary -->linha de borda direita da tabela <!-- END REF -->.

### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->

**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderBottom` é a <!-- REF #TableStyle.borderBottom.Summary -->linha inferior da borda da tabela<!-- END REF -->.

### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderHorizontal` é a <!-- REF #TableStyle.borderHorizontal.Summary -->linha horizontal de borda da tabela<!-- END REF -->.

### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->

**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderVertical` é a <!-- REF #TableStyle.borderVertical.Summary -->linha de borda vertical da tabela<!-- END REF -->.

## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableTheme.bandRows.Summary --> indica se deve exibir um estilo de linha alternativo<!-- END REF -->.

### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary --> indica se deve exibir um estilo de coluna alternativo<!-- END REF -->.

### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

A propriedade `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary --> indica se deve destacar a última coluna<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

A propriedade `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indica se a primeira coluna deve destacar<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->

A propriedade `.theme` <!-- REF #TableTheme.theme.Summary -->define um tema de tabela<!-- END REF -->.
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

A propriedade `.firstFooterCellStyle` é o <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary --> estilo da primeira célula de rodapé<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->

**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstHeaderCellStyle` é o <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary --> estilo da primeira célula de cabeçalho<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->

**.firstRowStripSize** : Integer<!-- END REF -->

A propriedade `.firstRowStripSize` é o <!-- REF #TableThemeOptions.firstRowStripSize.Summary --> tamanho da primeira coluna alternativa<!-- END REF -->. O padrão=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->

**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstRowStripStyle` é o <!-- REF #TableThemeOptions.firstRowStripStyle.Summary --> estilo da primeira linha alternativa<!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->

**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.footerRowStyle` é o <!-- REF #TableThemeOptions.footerRowStyle.Summary --> estilo padrão da área de rodapé<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->

**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.headerRowStyle` é a <!-- REF #TableThemeOptions.headerRowStyle.Summary --> estilo padrão da área de cabeçalho<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->

**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.highlightFirstColumnStyle` property is the <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->style of the first column<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->

**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.highlightLastColumnStyle` é o <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary --> estilo da última coluna<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

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

A propriedade `.secondRowStripStyle` é a <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->segundo estilo de linha alternativo<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->

**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade`.wholeTableStyle` é a <!-- REF #TableThemeOptions.inteTableStyle.Summary --> estilo padrão da área de dados<!-- END REF -->.




