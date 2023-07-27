---
id: classes
title: Classes
---

As seguintes classes podem ser usadas no 4D View Pro.


## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->
**.color**: Texto<!-- END REF -->

A propriedade `.color` é a <!-- REF #LineBorder.color.Summary -->[color](configuring.md#borders) of the border<!-- END REF -->. Predefinição = black.


### .style

<!-- REF #LineBorder.style.Syntax -->
**.style** : Integer<!-- END REF -->

A propriedade `.style` é o <!-- REF #LineBorder.style.Summary -->[style](configuring.md#borders) of the border<!-- END REF -->. Predefinição = vazio.


## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->
**.dataField**: Texto<!-- END REF -->

A propriedade `.dataField` <!-- REF #TableColumn.dataField.Summary -->contains the table column's property name in the data context<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->
**.formatter**: Text<!-- END REF -->

A propriedade `.formatter` <!-- REF #TableColumn.formatter.Summary -->contém o formatador da coluna da tabela<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->
**.name** : Text<!-- END REF -->

A propriedade `.name` <!-- REF #TableColumn.name.Summary -->contém o nome da coluna da tabela<!-- END REF --> (obrigatório).




## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->
**.allowAutoExpand** : Boolean<!-- END REF -->

A propriedade `.allowAutoExpand` <!-- REF #TableOptions.allowAutoExpand.Summary -->indicates whether to expand columns or rows of the table when values are added in empty adjacent cells<!-- END REF -->. Padrão = True


### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary -->indicates whether to display an alternating column style<!-- END REF -->. Padrão = False


### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableOptions.bandRows.Summary -->indicates whether to display an alternating row style<!-- END REF -->. Padrão = True


### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->
**.highlightLastColumn** : Boolean<!-- END REF -->

A propriedade `.highlightLastColumn` <!-- REF #TableOptions.highlightLastColumn.Summary -->indica se a última coluna deve ser realçada<!-- END REF -->. Padrão = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->
**.highlightFirstColumn** : Boolean<!-- END REF -->

A propriedade `.highlightFirstColumn` <!-- REF #TableOptions.highlightFirstColumn.Summary -->indica se a primeira coluna deve ser realçada<!-- END REF -->. Padrão = False


### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->
**.showFooter** : Boolean<!-- END REF -->

A propriedade `.showFooter` <!-- REF #TableOptions.showFooter.Summary -->indica se deve ser mostrado um rodapé<!-- END REF -->. Padrão = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->
**.showHeader** : Boolean<!-- END REF -->

A propriedade `.showHeader` <!-- REF #TableOptions.showHeader.Summary -->indica se deve ser mostrado um cabeçalho<!-- END REF -->. Padrão = True

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->
**.showResizeHandle** : Boolean<!-- END REF -->

A propriedade `.showResizeHandle` <!-- REF #TableOptions.showResizeHandle.Summary -->indicates whether to display the resize handle for tables that don't have a *source*<!-- END REF -->. Padrão = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->
**.tableColumns** : Collection<!-- END REF -->

A propriedade `tableColumns` <!-- REF #TableOptions.tableColumns.Summary -->is a collection of [cs.ViewPro.TableColumn](#tablecolumn) objects used to create the table's columns<!-- END REF -->.



### .theme

<!-- REF #TableTheme.theme.Syntax -->
**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->


A propriedade `.theme` <!-- REF #TableTheme.theme.Summary -->define um tema de tabela. Can also be a text (name of a native SpreadJS theme)<!-- END REF -->.

See the [native SpreadJS themes](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).


### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->
**.useFooterDropDownList** : Boolean<!-- END REF -->

A propriedade `.useFooterDropDownList` <!-- REF #TableOptions.useFooterDropDownList.Summary -->indicates whether to use a dropdown list in footer cells that calculate the total value of a column<!-- END REF -->. Padrão = False



## TableStyle

### .backColor

<!-- REF #TableStyle.backColor.Syntax -->
**.backColor**: Text<!-- END REF -->

A propriedade `.backColor` é o <!-- REF #TableStyle.backColor.Summary -->[background color](configuring.md/#background--foreground) of the table<!-- END REF -->.


### .forecolor

<!-- REF #TableStyle.forecolor.Syntax -->
**.forecolor**: Text<!-- END REF -->

A propriedade `.forecolor` é o <!-- REF #TableStyle.forecolor.Summary -->[foreground color](configuring.md/#background--foreground) of the table<!-- END REF -->.



### .font

<!-- REF #TableStyle.font.Syntax -->
**.font**: Text<!-- END REF -->

A propriedade `.font` é o <!-- REF #TableStyle.font.Summary -->font name (see [**Fonts and text**](configuring.md/#fonts-and-text)) of the table<!-- END REF -->.



### .textDecoration

<!-- REF #TableStyle.textDecoration.Syntax -->
**.textDecoration** : Integer<!-- END REF -->

A propriedade `.textDecoration` é a <!-- REF #TableStyle.textDecoration.Summary -->text decoration of the table (see [**Fonts and text**](configuring.md/#fonts-and-text))<!-- END REF -->.


### .borderLeft

<!-- REF #TableStyle.borderLeft.Syntax -->
**.borderLeft** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderLeft` é a <!-- REF #TableStyle.borderLeft.Summary -->linha de fronteira esquerda da tabela <!-- END REF -->.


### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->
**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderRight` é a <!-- REF #TableStyle.borderRight.Summary -->linha de fronteira direita da tabela <!-- END REF -->.


### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->
**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderBottom` é o <!-- REF #TableStyle.borderBottom.Summary -->linha de fronteira inferior da tabela <!-- END REF -->.




### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

The `.borderHorizontal` property is the <!-- REF #TableStyle.borderHorizontal.Summary -->horizontal border line of the table <!-- END REF -->.


### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->
**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderVertical` é a <!-- REF #TableStyle.borderVertical.Summary -->linha de fronteira vertical da tabela <!-- END REF -->.




## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableTheme.bandRows.Summary -->indicates whether to display an alternating row style<!-- END REF -->.


### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary -->indicates whether to display an alternating column style<!-- END REF -->.


### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->
**.highlightLastColumn** : Boolean<!-- END REF -->

A propriedade `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary -->indica se a última coluna deve ser realçada<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->
**.highlightFirstColumn** : Boolean<!-- END REF -->

A propriedade `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indica se a primeira coluna deve ser realçada<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->
**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->


A propriedade `.theme` <!-- REF #TableTheme.theme.Summary -->define um tema de tabela<!-- END REF -->. If Text: name of a [native SpreadJS theme](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).




## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->
**.firstColumnStripSize** : Integer<!-- END REF -->

The `.firstColumnStripSize` property is the <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->tamanho da primeira coluna alternada<!-- END REF -->. O padrão=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->
**.firstColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstColumnStripStyle` property is the <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->estilo da primeira coluna alternada<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->
**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstFooterCellStyle` property is the <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->estilo da primeira célula do rodapé<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->
**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstHeaderCellStyle` property is the <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->estilo da primeira célula do cabeçalho<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->
**.firstRowStripSize** : Integer<!-- END REF -->

The `.firstRowStripSize` property is the <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->tamanho da primeira coluna alternada<!-- END REF -->. O padrão=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->
**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.firstRowStripStyle` property is the <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->primeiro estilo de linha alternada<!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->
**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.footerRowStyle` é o <!-- REF #TableThemeOptions.footerRowStyle.Summary -->estilo predefinido da área de rodapé<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->
**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.headerRowStyle` é o <!-- REF #TableThemeOptions.headerRowStyle.Summary -->estilo padrão da área do cabeçalho<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->
**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.highlightFirstColumnStyle` property is the <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->style of the first column<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->
**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.highlightLastColumnStyle` property is the <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->estilo de la última columna<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->
**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.lastFooterCellStyle` property is the <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->estilo da última célula do rodapé<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->
**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.lastHeaderCellStyle` property is the <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->estilo da última célula de cabeçalho<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->
**.name** : Text<!-- END REF -->

A propriedade `.name` é o <!-- REF #TableThemeOptions.name.Summary -->name of a [native SpreadJS theme](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->
**.secondColumnStripSize** : Integer<!-- END REF -->

The `.secondColumnStripSize` property is the <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->tamanho da segunda coluna alternada<!-- END REF -->. O padrão=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->
**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.secondColumnStripStyle` property is the <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->estilo da segunda coluna alternada<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->
**.secondRowStripSize** : Integer<!-- END REF -->

The `.secondRowStripSize` property is the <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->tamanho da segunda coluna alternada<!-- END REF -->. O padrão=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->
**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.secondRowStripStyle` property is the <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->segundo estilo de linha alternada<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->
**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

The `.wholeTableStyle` property is the <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->estilo padra-o da área de dados<!-- END REF -->.




