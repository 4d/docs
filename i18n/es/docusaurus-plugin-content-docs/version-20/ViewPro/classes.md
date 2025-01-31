---
id: classes
title: Clases
---

Las siguientes clases pueden utilizarse en 4D View Pro.


## LineBorder

### .color

<!-- REF #LineBorder.color.Syntax -->
**.color** : Text<!-- END REF -->

La propiedad `.color` es el <!-- REF #LineBorder.color.Summary -->[color](configuring.md#borders) del borde<!-- END REF -->. Por defecto = black.


### .style

<!-- REF #LineBorder.style.Syntax -->
**.style** : Integer<!-- END REF -->

La propiedad `.style` es el <!-- REF #LineBorder.style.Summary -->[estilo](configuring.md#borders) del borde<!-- END REF -->. Por defecto = empty.


## TableColumn

### .dataField

<!-- REF #TableColumn.dataField.Syntax -->
**.dataField**: Text<!-- END REF -->

La propiedad `.dataField` <!-- REF #TableColumn.dataField.Summary -->contiene el nombre de la propiedad de la columna de la tabla en el contexto de datos<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->
**.formatter**: Text<!-- END REF -->

La propiedad `.formatter` <!-- REF #TableColumn.formatter.Summary -->contiene el formateador de la columna de la tabla<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->
**.name** : Text<!-- END REF -->

La propiedad `.name` <!-- REF #TableColumn.name.Summary -->contiene el nombre de la columna de la tabla<!-- END REF --> (obligatorio).




## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->
**.allowAutoExpand**: Boolean<!-- END REF -->

La propiedad `.allowAutoExpand` <!-- REF #TableOptions.allowAutoExpand.Summary -->indica si se amplian las columnas o líneas de la tabla cuando se añaden valores en las celdas adyacentes vacías<!-- END REF -->. Por defecto = True


### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

La propiedad `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary -->indica si se debe mostrar un estilo de columna alterna<!-- END REF -->. Por defecto = False


### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

La propiedad `.bandRows` <!-- REF #TableOptions.bandRows.Summary -->indica si se debe mostrar un estilo de líneas alternas<!-- END REF -->. Por defecto = True


### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->
**.highlightLastColumn**: Boolean<!-- END REF -->

La propiedad `.highlightLastColumn` <!-- REF #TableOptions.highlightLastColumn.Summary -->indica si se debe resaltar la última columna<!-- END REF -->. Por defecto = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->
**.highlightFirstColumn**: Boolean<!-- END REF -->

La propiedad `.highlightFirstColumn` <!-- REF #TableOptions.highlightFirstColumn.Summary -->indica si se debe resaltar la primera columna<!-- END REF -->. Por defecto = False


### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->
**.showFooter**: Boolean<!-- END REF -->

La propiedad `.showFooter` <!-- REF #TableOptions.showFooter.Summary -->indica si se debe mostrar un pie de página<!-- END REF -->. Por defecto = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->
**.showHeader**: Boolean<!-- END REF -->

La propiedad `.showHeader` <!-- REF #TableOptions.showHeader.Summary -->indica si se debe mostrar un encabezado<!-- END REF -->. Por defecto = True

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->
**.showResizeHandle**: Boolean<!-- END REF -->

La propiedad `.showResizeHandle` <!-- REF #TableOptions.showResizeHandle.Summary -->indica si se debe mostrar el manejador de redimensionamiento para las tablas que no tienen una *source*<!-- END REF -->. Por defecto = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->
**.tableColumns**: Collection<!-- END REF -->

La propiedad `.tableColumns` <!-- REF #TableOptions.tableColumns.Summary -->es una colección de objetos [cs.ViewPro.TableColumn](#tablecolumn) utilizados para crear las columnas de la tabla<!-- END REF -->.



### .theme

<!-- REF #TableOptions.theme.Syntax -->
**.theme**: [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->


La propiedad `.theme` <!-- REF #TableOptions.theme.Summary -->define el tema de una tabla. También puede ser un texto (nombre de un tema nativo SpreadJS)<!-- END REF -->.

Consulte los[ temas nativos de SpreadJS](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).


### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->
**.useFooterDropDownList**: Boolean<!-- END REF -->

La propiedad `.useFooterDropDownList` <!-- REF #TableOptions.useFooterDropDownList.Summary -->indica si se debe utilizar una lista desplegable en las celdas de pie de página que calculan el valor total de una columna<!-- END REF -->. Por defecto = False



## TableStyle

### .backColor

<!-- REF #TableStyle.backColor.Syntax -->
**.backColor**: Text<!-- END REF -->

La propiedad `.backColor` es el <!-- REF #TableStyle.backColor.Summary -->[background color](configuring.md#background--foreground) of the table<!-- END REF -->.


### .forecolor

<!-- REF #TableStyle.forecolor.Syntax -->
**.forecolor**: Text<!-- END REF -->

La propiedad `.forecolor` es el <!-- REF #TableStyle.forecolor.Summary -->[foreground color](configuring.md#background--foreground) of the table<!-- END REF -->.



### .font

<!-- REF #TableStyle.font.Syntax -->
**.font**: Text<!-- END REF -->

La propiedad `.font` es el <!-- REF #TableStyle.font.Summary -->font name (see [**Fonts and text**](configuring.md#fonts-and-text)) of the table<!-- END REF -->.



### .textDecoration

<!-- REF #TableStyle.textDecoration.Syntax -->
**.textDecoration**: Integer<!-- END REF -->

La propiedad `.textDecoration` es la <!-- REF #TableStyle.textDecoration.Summary -->text decoration of the table (see [**Fonts and text**](configuring.md#fonts-and-text))<!-- END REF -->.


### .borderLeft

<!-- REF #TableStyle.borderLeft.Syntax -->
**.borderLeft**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderLeft` es la <!-- REF #TableStyle.borderLeft.Summary -->línea del borde izquierdo de la tabla <!-- END REF -->.


### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->
**.borderRight**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderRight` es la <!-- REF #TableStyle.borderRight.Summary -->línea del borde derecho de la tabla <!-- END REF -->.


### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->
**.borderBottom**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderBottom` es el <!-- REF #TableStyle.borderBottom.Summary -->límite inferior de la tabla <!-- END REF -->.




### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderHorizontal` es el <!-- REF #TableStyle.borderHorizontal.Summary -->límite horizontal de la tabla <!-- END REF -->.


### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->
**.borderVertical**: [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderVertical` es la <!-- REF #TableStyle.borderVertical.Summary -->línea de borde vertical de la tabla <!-- END REF -->.




## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->
**.bandRows**: Boolean<!-- END REF -->

La propiedad `.bandRows` <!-- REF #TableTheme.bandRows.Summary -->indica si se debe mostrar un estilo de líneas alternas<!-- END REF -->.


### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->
**.bandColumns**: Boolean<!-- END REF -->

La propiedad `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary -->indica si se debe mostrar un estilo de columna alterna<!-- END REF -->.


### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->
**.highlightLastColumn**: Boolean<!-- END REF -->

La propiedad `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary -->indica si se debe resaltar la última columna<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->
**.highlightFirstColumn**: Boolean<!-- END REF -->

La propiedad `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indica si se debe resaltar la primera columna<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->
**.theme**: [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme**: Text<!-- END REF -->


La propiedad `.theme` <!-- REF #TableTheme.theme.Summary -->define el tema de una tabla<!-- END REF -->. Si Text: nombre de un [tema nativo SpreadJS](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).




## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->
**.firstColumnStripSize**: Integer<!-- END REF -->

La propiedad `.firstColumnStripSize` es el <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->tamaño de la primera columna alterna<!-- END REF -->. Por defecto=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->
**.firstColumnStripStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstColumnStripStyle` es el <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->estilo de la primera columna alterna<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->
**.firstFooterCellStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstFooterCellStyle` es el <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->estilo de la primera celda del pie de página<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->
**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstHeaderCellStyle` es la propiedad <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->estilo de la primera celda del encabezado<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->
**.firstRowStripSize**: Integer<!-- END REF -->

La propiedad `.firstRowStripSize` es el <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->tamaño de la primera columna alterna<!-- END REF -->. Por defecto=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->
**.firstRowStripStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstRowStripStyle` es la propiedad <!-- REF #TableThemeOptions.firstRowStripStyle.Summary -->primer estilo de línea alterna<!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->
**.footerRowStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.footerRowStyle` es el <!-- REF #TableThemeOptions.footerRowStyle.Summary -->estilo por defecto del área de pie de página<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->
**.headerRowStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.headerRowStyle` es el <!-- REF #TableThemeOptions.headerRowStyle.Summary -->estilo por defecto del área de encabezado<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->
**.highlightFirstColumnStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.highlightFirstColumnStyle` es la propiedad <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->estilo de la primera columna<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->
**.highlightLastColumnStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.highlightLastColumnStyle` es la propiedad <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->estilo de la última columna<!-- END REF -->. "highlightLastColumn" debe ser true.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->
**.lastFooterCellStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.lastFooterCellStyle` es la propiedad <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->estilo de la última celda del pie de página<!-- END REF -->. "highlightLastColumn" debe ser true.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->
**.lastHeaderCellStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.lastHeaderCellStyle` es la <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->estilo de la última celda del encabezado<!-- END REF -->. "highlightLastColumn" debe ser true.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->
**.name** : Text<!-- END REF -->

La propiedad `.name` es el <!-- REF #TableThemeOptions.name.Summary -->nombre de un [tema SpreadJS nativo ](https://www.grapecity.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->
**.secondColumnStripSize**: Integer<!-- END REF -->

La propiedad `.secondColumnStripSize` es el <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->tamaño de la segunda columna alterna<!-- END REF -->. Por defecto=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->
**.secondColumnStripStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.secondColumnStripStyle` es la <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->estilo de la segunda columna alterna<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->
**.secondRowStripSize**: Integer<!-- END REF -->

La propiedad `.secondRowStripSize` es el <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->tamaño de la segunda columna alterna<!-- END REF -->. Por defecto=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->
**.secondRowStripStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.secondRowStripStyle` es el <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->segundo estilo de línea alterna<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->
**.wholeTableStyle**: [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.wholeTableStyle` es el <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->estilo por defecto del área de datos<!-- END REF -->.




