---
id: vp-set-workbook-options
title: VP SET WORKBOOK OPTIONS
---

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->

**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->

<div class="no-index">

| Parámetros | Tipo   |    | Descripción                                                     |
| ---------- | ------ | -- | --------------------------------------------------------------- |
| vpAreaName | Text   | -> | Nombre de objeto formulario área 4D View Pro                    |
| optionObj  | Object | -> | Objeto que contiene las opciones del libro de trabajo a definir |

</div>
<!-- END REF -->

## Descripción

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
define las opciones del libro de trabajo en *vpAreaName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro.

En *optionObj*, pase las opciones del libro de trabajo a aplicar a *vpAreaName*.

Si *optionObj* está vacío, el comando no hace nada.

Las opciones modificadas del libro de trabajo se guardan con el documento.

En la siguiente tabla se listan las opciones de libros de trabajo disponibles:

| Propiedad                             | Tipo                    | Descripción |
| ------------------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| allowUserDragMerge                    | boolean                 | Se permite la operación de fusión por arrastre (seleccionar celdas y arrastrar la selección para fusionar celdas) |
| allowAutoCreateHyperlink              | boolean                 | Permite la creación automática de hipervínculos en la hoja de cálculo. |
| allowContextMenu                      | boolean                 | Se puede abrir el menú contextual integrado. |
| allowCopyPasteExcelStyle              | boolean                 | Los estilos de una hoja de cálculo pueden copiarse y pegarse en Excel, y viceversa. |
| allowDynamicArray                     | boolean                 | Permite arrays dinámicos en hojas de cálculo |
| allowExtendPasteRange                 | boolean                 | Amplía el rango pegado si éste no es suficiente para los datos pegados |
| allowSheetReorder                     | boolean                 | Se permite reordenar la hoja |
| allowUndo                             | boolean                 | Deshacer ediciones está permitido. |
| allowUserDeselect                     | boolean                 | Se permite desmarcar celdas específicas de una selección. |
| allowUserDragDrop                     | boolean                 | Se permite arrastrar y soltar los datos del rango |
| allowUserDragFill                     | boolean                 | Se permite el relleno por arrastre |
| allowUserEditFormula                  | boolean                 | Las fórmulas pueden introducirse en las celdas |
| allowUserResize                       | boolean                 | Columnas y filas redimensionables |
| allowUserZoom                         | boolean                 | Se permite hacer zoom (ctrl + rueda del ratón) |
| autoFitType                           | number                  | El contenido se formatea para que se ajuste en las celdas, o en las celdas y los encabezados. |
| backColor                             | string                  | Una cadena de color utilizada para representar el color de fondo del área. |
| backgroundImage                       | string / picture / file | Imagen de fondo para el área. |
| backgroundImageLayout                 | number                  | Cómo se muestra la imagen de fondo. |
| calcOnDemand                          | boolean                 | Las fórmulas se calculan sólo cuando se piden. |
| columnResizeMode                      | number                  | Redimensiona modo para columnas. |
| copyPasteHeaderOptions                | number                  | Encabezados para incluir cuando se copian o pegan datos. |
| customList                            | collection              | Lista personalizada para relleno por arrastre. |
| cutCopyIndicatorBorderColor           | string                  | Color del borde del indicador al cortar/copiar. |
| cutCopyIndicatorVisible               | boolean                 | Muestra indicador al copiar/cortar. |
| defaultDragFillType                   | number                  | Tipo de relleno por arrastre por defecto. |
| enableAccessibility                   | boolean                 | Soporte de accesibilidad activado. |
| enableFormulaTextbox                  | boolean                 | Activa la caja de texto de fórmula. |
| grayAreaBackColor                     | string                  | Color de fondo del área gris. |
| highlightInvalidData                  | boolean                 | Resalta datos inválidos. |
| iterativeCalculation                  | boolean                 | Activa cálculo iterativo. |
| iterativeCalculationMaximumChange     | numeric                 | Cambio máximo entre dos cálculos. |
| iterativeCalculationMaximumIterations | numeric                 | Número de iteraciones de recálculo. |
| newTabVisible                         | boolean                 | Muestra pestaña para insertar nuevas hojas. |
| numbersFitMode                        | number                  | Modo de visualización para números/fechas en columnas estrechas. |
| pasteSkipInvisibleRange               | boolean                 | Permite omitir pegado en rangos invisibles. |
| referenceStyle                        | number                  | Estilo de referencia de celdas/rangos. |
| resizeZeroIndicator                   | number                  | Política de dibujo al redimensionar a 0. |
| rowResizeMode                         | number                  | Modo de redimensionamiento de líneas. |
| scrollbarAppearance                   | number                  | Apariencia de barra de desplazamiento. |
| scrollbarMaxAlign                     | boolean                 | Alinea scroll con última fila/columna activa. |
| scrollbarShowMax                      | boolean                 | Scroll basado en total de filas/columnas. |
| scrollByPixel                         | boolean                 | Activa desplazamiento por píxel. |
| scrollIgnoreHidden                    | boolean                 | Ignora filas/columnas ocultas al desplazar. |
| scrollPixel                           | integer                 | Número de píxeles por delta de scroll. |
| showDragDropTip                       | boolean                 | Muestra sugerencia de arrastrar y soltar. |
| showDragFillSmartTag                  | boolean                 | Muestra diálogo de drag fill. |
| showDragFillTip                       | boolean                 | Muestra sugerencia de drag fill. |
| showHorizontalScrollbar               | boolean                 | Muestra barra horizontal. |
| showResizeTip                         | number                  | Cómo mostrar sugerencias de redimensionamiento. |
| showScrollTip                         | number                  | Cómo mostrar sugerencias de desplazamiento. |
| showVerticalScrollbar                 | boolean                 | Muestra barra vertical. |
| tabEditable                           | boolean                 | Permite editar pestañas de hoja. |
| tabNavigationVisible                  | boolean                 | Muestra navegación por pestañas. |
| tabStripPosition                      | number                  | Posición de barra de pestañas. |
| tabStripRatio                         | number                  | Proporción horizontal dedicada a pestañas. |
| tabStripVisible                       | boolean                 | Muestra barra de pestañas. |
| tabStripWidth                         | number                  | Ancho de etiqueta con posición izquierda/derecha. |
| useTouchLayout                        | boolean                 | Usa diseño táctil para el componente Spread. |

## Ejemplo

Para definir la opción allowExtendpasteRange en "ViewProArea":

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

## Ver también

[VP Get workbook options](vp-get-workbook-options.md)


