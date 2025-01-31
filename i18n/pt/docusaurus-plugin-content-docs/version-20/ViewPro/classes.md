---
id: classes
title: Classes
---

As seguintes classes podem ser usadas no 4D View Pro.


## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->
**.color**: Texto<!-- END REF -->

A propriedade `.color` é a <!-- REF #LineBorder.color.Summary -->[cor](configuring.md#borders) da margem<!-- END REF -->. Predefinição = black.


### .style

<!-- REF #LineBorder.style.Syntax -->
**.style** : Integer<!-- END REF -->

A propriedade `.style` é o <!-- REF #LineBorder.style.Summary -->[estilo](configuring.md#borders) da margem<!-- END REF -->. Predefinição = vazio.


## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->
**.dataField**: Texto<!-- END REF -->

A propriedade `.dataField` <!-- REF #TableColumn.dataField.Summary -->contém o nome da propriedade da coluna da tabela no contexto de dados<!-- END REF -->.

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

A propriedade `.allowAutoExpand` <!-- REF #TableOptions.allowAutoExpand.Summary -->indica se as colunas ou linhas da tabela devem ser expandidas quando são adicionados valores em células adjacentes vazias<!-- END REF -->. Padrão = True


### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary -->indica se deve ser apresentado um estilo de coluna alternada<!-- END REF -->. Padrão = False


### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableOptions.bandRows.Summary -->indica se deve ser apresentado um estilo de linha alternada<!-- END REF -->. Padrão = True


### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->
**.highlightLastColumn**: Boolean<!-- END REF -->

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
**.showResizeHandle**: Boolean<!-- END REF -->

A propriedade `.showResizeHandle` <!-- REF #TableOptions.showResizeHandle.Summary -->indica se deve ser apresentado o identificador de redimensionamento para tabelas que não têm uma *source*<!-- END REF -->. Padrão = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->
**.tableColumns** : Collection<!-- END REF -->

A propriedade `tableColumns` <!-- REF #TableOptions.tableColumns.Summary -->é uma coleção de objetos [cs.ViewPro.TableColumn](#tablecolumn) utilizados para criar as colunas da tabela<!-- END REF -->.



### .theme

<!-- REF #TableOptions.theme.Syntax -->
**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->


A propriedade `.theme` <!-- REF #TableOptions.theme.Summary -->define um tema de tabela. Pode também ser um texto (nome de um tema SpreadJS nativo)<!-- END REF -->.

Ver os temas [nativos do SpreadJS](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).


### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->
**.useFooterDropDownList**: Boolean<!-- END REF -->

A propriedade `.useFooterDropDownList` <!-- REF #TableOptions.useFooterDropDownList.Summary -->indica se deve ser utilizada uma lista pendente nas células de rodapé que calculam o valor total de uma coluna<!-- END REF -->. Padrão = False



## TableStyle

### .backColor

<!-- REF #TableStyle.backColor.Syntax -->
**.backColor**: Text<!-- END REF -->

A propriedade `.backColor` é o <!-- REF #TableStyle.backColor.Summary -->[background color](configuring.md#background--foreground) of the table<!-- END REF -->.


### .forecolor

<!-- REF #TableStyle.forecolor.Syntax -->
**.forecolor**: Text<!-- END REF -->

A propriedade `.forecolor` é o <!-- REF #TableStyle.forecolor.Summary -->[foreground color](configuring.md#background--foreground) of the table<!-- END REF -->.



### .font

<!-- REF #TableStyle.font.Syntax -->
**.font**: Text<!-- END REF -->

A propriedade `.font` é o <!-- REF #TableStyle.font.Summary -->font name (see [**Fonts and text**](configuring.md#fonts-and-text)) of the table<!-- END REF -->.



### .textDecoration

<!-- REF #TableStyle.textDecoration.Syntax -->
**.textDecoration** : Integer<!-- END REF -->

A propriedade `.textDecoration` é a <!-- REF #TableStyle.textDecoration.Summary -->text decoration of the table (see [**Fonts and text**](configuring.md#fonts-and-text))<!-- END REF -->.


### .borderLeft

<!-- REF #TableStyle.borderLeft.Syntax -->
**.borderLeft** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderLeft` é a <!-- REF #TableStyle.borderLeft.Summary -->linha de fronteira esquerda da tabela <!-- END REF -->.


### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->
**.borderRight**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderRight` é a <!-- REF #TableStyle.borderRight.Summary -->linha de fronteira direita da tabela <!-- END REF -->.


### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->
**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderBottom` é o <!-- REF #TableStyle.borderBottom.Summary -->linha de fronteira inferior da tabela <!-- END REF -->.




### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderHorizontal` é o <!-- REF #TableStyle.borderHorizontal.Summary -->limite horizontal da tabela <!-- END REF -->.


### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->
**.borderVertical**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

A propriedade `.borderVertical` é a <!-- REF #TableStyle.borderVertical.Summary -->linha de fronteira vertical da tabela <!-- END REF -->.




## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

A propriedade `.bandRows` <!-- REF #TableTheme.bandRows.Summary -->indica se deve ser apresentado um estilo de linha alternada<!-- END REF -->.


### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

A propriedade `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary -->indica se deve ser apresentado um estilo de coluna alternada<!-- END REF -->.


### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->
**.highlightLastColumn**: Boolean<!-- END REF -->

A propriedade `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary -->indica se a última coluna deve ser realçada<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->
**.highlightFirstColumn** : Boolean<!-- END REF -->

A propriedade `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indica se a primeira coluna deve ser realçada<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->
**.theme**: [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme**: Text<!-- END REF -->


A propriedade `.theme` <!-- REF #TableTheme.theme.Summary -->define um tema de tabela<!-- END REF -->. Se Text: nome de um tema [nativo SpreadJS](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).




## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->
**.firstColumnStripSize** : Integer<!-- END REF -->

A propriedade `.firstColumnStripSize` é o <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->tamanho da primeira coluna alternada<!-- END REF -->. O padrão=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->
**.firstColumnStripStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstColumnStripStyle` é o <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->estilo da primeira coluna alternada<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->
**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstFooterCellStyle` é o <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->estilo da primeira célula do rodapé<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->
**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstHeaderCellStyle` é o <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->estilo da primeira célula do cabeçalho<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->
**.firstRowStripSize** : Integer<!-- END REF -->

A propriedade `.firstRowStripSize` é o <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->tamanho da primeira coluna alternada<!-- END REF -->. O padrão=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->
**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.firstRowStripStyle` é o <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->primeiro estilo de linha alternada<!-- END REF -->.

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

A propriedade `.highlightFirstColumnStyle` é o <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->estilo da primeira coluna<!-- END REF -->. "highlightFirstColumn" tem de ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->
**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.highlightLastColumnStyle` é a <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->estilo de la última columna<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->
**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.lastFooterCellStyle` é o <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->estilo da última célula do rodapé<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->
**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.lastHeaderCellStyle` é o <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->estilo da última célula de cabeçalho<!-- END REF -->. "highlightLastColumn" tem de ser verdadeiro.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->
**.name** : Text<!-- END REF -->

A propriedade `.name` é o <!-- REF #TableThemeOptions.name.Summary -->name of a [native SpreadJS theme](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->
**.secondColumnStripSize** : Integer<!-- END REF -->

A propriedade `.secondColumnStripSize` é a <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->tamanho da segunda coluna alternada<!-- END REF -->. O padrão=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->
**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.secondColumnStripStyle` é o <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->estilo da segunda coluna alternada<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->
**.secondRowStripSize** : Integer<!-- END REF -->

A propriedade `.secondRowStripSize` é o <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->tamanho da segunda coluna alternada<!-- END REF -->. O padrão=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->
**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.secondRowStripStyle` é o <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->segundo estilo de linha alternada<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->
**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

A propriedade `.wholeTableStyle` é o <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->estilo padra-o da área de dados<!-- END REF -->.




