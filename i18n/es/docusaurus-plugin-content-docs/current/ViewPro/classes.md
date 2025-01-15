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

**.dataField** : Text<!-- END REF -->

La propiedad `.dataField` <!-- REF #TableColumn.dataField.Summary -->contiene el nombre de la propiedad de la columna de la tabla en el contexto de datos<!-- END REF -->.

### .formatter

<!-- REF #TableColumn.formatter.Syntax -->

**.formatter** : Text<!-- END REF -->

La propiedad `.formatter` <!-- REF #TableColumn.formatter.Summary -->contiene el formateador de la columna de la tabla<!-- END REF -->.

### .name

<!-- REF #TableColumn.name.Syntax -->

**.name** : Text<!-- END REF -->

La propiedad `.name` <!-- REF #TableColumn.name.Summary -->contiene el nombre de la columna de la tabla<!-- END REF --> (obligatorio).

## TableOptions

### .allowAutoExpand

<!-- REF #TableOptions.allowAutoExpand.Syntax -->

**.allowAutoExpand** : Boolean<!-- END REF -->

La propiedad `.allowAutoExpand` <!-- REF #TableOptions.allowAutoExpand.Summary -->indica si se expanden las columnas o filas de la tabla cuando se añaden valores en celdas vacías adyacentes<!-- END REF -->. Por defecto = True

### .bandColumns

<!-- REF #TableOptions.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

La propiedad `.bandColumns` <!-- REF #TableOptions.bandColumns.Summary -->indica si se muestra un estilo de columnas alternas<!-- END REF -->. Por defecto = False

### .bandRows

<!-- REF #TableOptions.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

La propiedad `.bandRows` <!-- REF #TableOptions.bandRows.Summary -->indica si se muestra un estilo de línea alterna<!-- END REF -->. Por defecto = True

### .highlightLastColumn

<!-- REF #TableOptions.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

La propiedad `.highlightLastColumn` <!-- REF #TableOptions.highlightLastColumn.Summary -->indica si se debe resaltar la última columna<!-- END REF -->. Por defecto = False

### .highlightFirstColumn

<!-- REF #TableOptions.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

La propiedad `.highlightFirstColumn` <!-- REF #TableOptions.highlightFirstColumn.Summary -->indica si se debe resaltar la primera columna<!-- END REF -->. Por defecto = False

### .showFooter

<!-- REF #TableOptions.showFooter.Syntax -->

**.showFooter** : Boolean<!-- END REF -->

La propiedad `.showFooter` <!-- REF #TableOptions.showFooter.Summary -->indica si se debe mostrar un pie de página<!-- END REF -->. Por defecto = False

### .showHeader

<!-- REF #TableOptions.showHeader.Syntax -->

**.showHeader** : Boolean<!-- END REF -->

La propiedad `.showHeader` <!-- REF #TableOptions.showHeader.Summary -->indica si se debe mostrar un encabezado<!-- END REF -->. Por defecto = True

### .showResizeHandle

<!-- REF #TableOptions.showResizeHandle.Syntax -->

**.showResizeHandle** : Boolean<!-- END REF -->

La propiedad `.showResizeHandle` <!-- REF #TableOptions.showResizeHandle.Summary -->indica si se debe mostrar el manejador de redimensionamiento para las tablas que no tienen un _source_<!-- END REF -->. Por defecto = False

### .tableColumns

<!-- REF #TableOptions.tableColumns.Syntax -->

**.tableColumns** : Collection<!-- END REF -->

La propiedad `.tableColumns` <!-- REF #TableOptions.tableColumns.Summary -->es una colección de objetos [cs.ViewPro.TableColumn](#tablecolumn) utilizados para crear las columnas de la tabla<!-- END REF -->.

### .theme

<!-- REF #TableOptions.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<!-- END REF -->

La propiedad `.theme` <!-- REF #TableOptions.theme.Summary -->define el tema de una tabla. También puede ser un texto (nombre de un tema nativo SpreadJS)<!-- END REF -->.

Consulte los[ temas nativos de SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

### .useFooterDropDownList

<!-- REF #TableOptions.useFooterDropDownList.Syntax -->

**.useFooterDropDownList** : Boolean<!-- END REF -->

La propiedad `.useFooterDropDownList` <!-- REF #TableOptions.useFooterDropDownList.Summary -->indica si se debe utilizar una lista desplegable en las celdas de pie de página que calculan el valor total de una columna<!-- END REF -->. Por defecto = False

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

La propiedad `.borderLeft` es la línea del borde izquierdo de la tabla <!-- REF #TableStyle.borderLeft.Summary --> <!-- END REF -->.

### .borderRight

<!-- REF #TableStyle.borderRight.Syntax -->

**.borderRight** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderrightt` es la <!-- REF #TableStyle.borderrightt.Summary -->línea de borde derecho de la tabla <!-- END REF -->.

### .borderBottom

<!-- REF #TableStyle.borderBottom.Syntax -->

**.borderBottom** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderBottom` es la <!-- REF #TableStyle.borderBottom.Summary -->línea del borde inferior de la tabla<!-- END REF -->.

### .borderHorizontal

<!-- REF #TableStyle.borderHorizontal.Syntax -->

**.borderHorizontal** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderHorizontal` es la <!-- REF #TableStyle.borderHorizontal.Summary -->línea de borde horizontal de la tabla <!-- END REF -->.

### .borderVertical

<!-- REF #TableStyle.borderVertical.Syntax -->

**.borderVertical** : [cs.ViewPro.LineBorder](#lineborder)<!-- END REF -->

La propiedad `.borderVertical` es la <!-- REF #TableStyle.borderVertical.Summary -->línea de borde vertical de la tabla <!-- END REF -->.

## TableTheme

### .bandRows

<!-- REF #TableTheme.bandRows.Syntax -->

**.bandRows** : Boolean<!-- END REF -->

La propiedad `.bandRows` <!-- REF #TableTheme.bandRows.Summary -->indica si se muestra un estilo de líneas alternas<!-- END REF -->.

### .bandColumns

<!-- REF #TableTheme.bandColumns.Syntax -->

**.bandColumns** : Boolean<!-- END REF -->

La propiedad `.bandColumns` <!-- REF #TableTheme.bandColumns.Summary -->indica si se muestra un estilo de columnas alternas<!-- END REF -->.

### .highlightLastColumn

<!-- REF #TableTheme.highlightLastColumn.Syntax -->

**.highlightLastColumn** : Boolean<!-- END REF -->

La propiedad `.highlightLastColumn` <!-- REF #TableTheme.highlightLastColumn.Summary -->indica si se debe resaltar la última columna<!-- END REF -->.

### .highlightFirstColumn

<!-- REF #TableTheme.highlightFirstColumn.Syntax -->

**.highlightFirstColumn** : Boolean<!-- END REF -->

La propiedad `.highlightFirstColumn` <!-- REF #TableTheme.highlightFirstColumn.Summary -->indica si se debe resaltar la primera columna<!-- END REF -->.

### .theme

<!-- REF #TableTheme.theme.Syntax -->

**.theme** : [cs.ViewPro.TableThemeOptions](#tablethemeoptions)<br/>**.theme** : Text<!-- END REF -->

La propiedad `.theme` <!-- REF #TableTheme.theme.Summary -->define un tema de tabla<!-- END REF -->.
Si Text: nombre de un [tema nativo SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes).

## TableThemeOptions

### .firstColumnStripSize

<!-- REF #TableThemeOptions.firstColumnStripSize.Syntax -->

**.firstColumnStripSize** : Integer<!-- END REF -->

La propiedad `.firstColumnStripSize` es el tamaño <!-- REF #TableThemeOptions.firstColumnStripSize.Summary -->de la primera columna alterna<!-- END REF -->. Por defecto=1

### .firstColumnStripStyle

<!-- REF #TableThemeOptions.firstColumnStripStyle.Syntax -->

**.firstColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstColumnStripStyle` es el estilo <!-- REF #TableThemeOptions.firstColumnStripStyle.Summary -->de la primera columna alterna<!-- END REF -->.

### .firstFooterCellStyle

<!-- REF #TableThemeOptions.firstFooterCellStyle.Syntax -->

**.firstFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstFooterCellStyle` es el estilo <!-- REF #TableThemeOptions.firstFooterCellStyle.Summary -->de la primera celda del pie de página<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .firstHeaderCellStyle

<!-- REF #TableThemeOptions.firstHeaderCellStyle.Syntax -->

**.firstHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstHeaderCellStyle` es el estilo <!-- REF #TableThemeOptions.firstHeaderCellStyle.Summary -->de la primera celda del encabezado<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .firstRowStripSize

<!-- REF #TableThemeOptions.firstRowStripSize.Syntax -->

**.firstRowStripSize** : Integer<!-- END REF -->

La propiedad `.firstRowStripSize` es el tamaño <!-- REF #TableThemeOptions.firstRowStripSize.Summary -->de la primera columna alterna<!-- END REF -->. Por defecto=1.

### .firstRowStripStyle

<!-- REF #TableThemeOptions.firstRowStripStyle.Syntax -->

**.firstRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.firstRowStripStyle` es el estilo de la primera fila alterna <!-- REF #TableThemeOptions.firstRowStripStyle.Summary --><!-- END REF -->.

### .footerRowStyle

<!-- REF #TableThemeOptions.footerRowStyle.Syntax -->

**.footerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.footerRowStyle` es el <!-- REF #TableThemeOptions.footerRowStyle.Summary -->estilo predeterminado del área del pie de página<!-- END REF -->.

### .headerRowStyle

<!-- REF #TableThemeOptions.headerRowStyle.Syntax -->

**.headerRowStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.headerRowStyle` es el estilo predeterminado<!-- REF #TableThemeOptions.headerRowStyle.Summary --> del área de encabezado<!-- END REF -->.

### .highlightFirstColumnStyle

<!-- REF #TableThemeOptions.highlightFirstColumnStyle.Syntax -->

**.highlightFirstColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.highlightFirstColumnStyle` es el estilo <!-- REF #TableThemeOptions.highlightFirstColumnStyle.Summary -->de la primera columna<!-- END REF -->. "highlightFirstColumn" debe ser true.

### .highlightLastColumnStyle

<!-- REF #TableThemeOptions.highlightLastColumnStyle.Syntax -->

**.highlightLastColumnStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.highlightLastColumnStyle` es el estilo <!-- REF #TableThemeOptions.highlightLastColumnStyle.Summary -->de la última columna<!-- END REF -->. "highlightLastColumn" debe ser true.

### .lastFooterCellStyle

<!-- REF #TableThemeOptions.lastFooterCellStyle.Syntax -->

**.lastFooterCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.lastFooterCellStyle` es el estilo <!-- REF #TableThemeOptions.lastFooterCellStyle.Summary -->de la última celda del pie de página<!-- END REF -->. "highlightLastColumn" debe ser true.

### .lastHeaderCellStyle

<!-- REF #TableThemeOptions.lastHeaderCellStyle.Syntax -->

**.lastHeaderCellStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.lastHeaderCellStyle` es el estilo <!-- REF #TableThemeOptions.lastHeaderCellStyle.Summary -->de la última celda de encabezado<!-- END REF -->. "highlightLastColumn" debe ser true.

### .name

<!-- REF #TableThemeOptions.name.Syntax -->

**.name** : Text<!-- END REF -->

La propiedad `.name` es el <!-- REF #TableThemeOptions.name.Summary -->nombre de un [tema nativo SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes)<!-- END REF -->.

### .secondColumnStripSize

<!-- REF #TableThemeOptions.secondColumnStripSize.Syntax -->

**.secondColumnStripSize** : Integer<!-- END REF -->

La propiedad `.secondColumnStripSize` es el tamaño <!-- REF #TableThemeOptions.secondColumnStripSize.Summary -->de la segunda columna alterna<!-- END REF -->. Por defecto=1

### .secondColumnStripStyle

<!-- REF #TableThemeOptions.secondColumnStripStyle.Syntax -->

**.secondColumnStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.secondColumnStripStyle` es el <!-- REF #TableThemeOptions.secondColumnStripStyle.Summary -->estilo de la segunda columna alterna<!-- END REF -->.

### .secondRowStripSize

<!-- REF #TableThemeOptions.secondRowStripSize.Syntax -->

**.secondRowStripSize** : Integer<!-- END REF -->

La propiedad `.secondRowStripSize` es el tamaño <!-- REF #TableThemeOptions.secondRowStripSize.Summary -->de la segunda columna alterna<!-- END REF -->. Por defecto=1.

### .secondRowStripStyle

<!-- REF #TableThemeOptions.secondRowStripStyle.Syntax -->

**.secondRowStripStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.secondRowStripStyle` es el estilo de la <!-- REF #TableThemeOptions.secondRowStripStyle.Summary -->segunda fila alterna<!-- END REF -->.

### .wholeTableStyle

<!-- REF #TableThemeOptions.wholeTableStyle.Syntax -->

**.wholeTableStyle** : [cs.ViewPro.TableStyle](#tablestyle)<!-- END REF -->

La propiedad `.wholeTableStyle` es el <!-- REF #TableThemeOptions.wholeTableStyle.Summary -->estilo predeterminado del área de datos<!-- END REF -->.
