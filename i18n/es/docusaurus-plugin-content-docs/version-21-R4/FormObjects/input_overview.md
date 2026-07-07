---
id: inputOverview
title: Entrada
---

Las entradas permiten añadir expresiones editables o no editables, como campos de base de datos y [variables](Concepts/variables.md) a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, números...) o imágenes:

![](../assets/en/FormObjects/input.png)

Las entradas pueden contener [expresiones asignables o no asignables](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Además, las entradas pueden ser [editables o no editables](properties_Entry.md#enterable). Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable sólo puede mostrar valores, pero no puede ser editada por el usuario.

Puede gestionar los datos con los [métodos](Concepts/methods.md) objeto o formulario.

:::note

Por razones de seguridad, en las áreas de entrada [multiestilo](./properties_Text.md#multi-style), cuando se pegan fórmulas desde una aplicación 4D diferente o un entorno externo, solo se pegan los *valores calculados* (texto o imágenes) disponibles en el momento de la copia. Si no hay ningún valor disponible (por ejemplo, la fórmula nunca se calculó), 4D pega la fuente de la fórmula como texto sin formato.

:::

### Ejemplo JSON:

```4d
	"myText": {
		"type": "input",	//definir el tipo de objeto
		"spellcheck": true,	//activar la verificación ortográfica
		"left": 60,			//posición izquierda en el formulario
		"top": 160,			//posición superior en el formulario	
		"width": 100,		//ancho del objeto
		"height": 20		//altura del objeto
		}
```

## Propiedades soportadas

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                           |
| ----------- | ---------------------------------------- |
| 20 R4       | Support of Writing Tools property        |
| 19 R7       | Soporte de la propiedad Radio de esquina |

</details>

[Permitir selector de fuente/color](properties_Text.md#allow-fontcolor-picker) - [Formato alfa](properties_Display.md#alpha-format) - [Corrección ortográfica automática](properties_Entry.md#auto-spellcheck) - [Color de fondo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrita](properties_Text.md#bold) - [Formato booleano](properties_Display.md#text-when-falsetext-when-true) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Radio de las esquinas](properties_CoordinatesAndSizing.md#corner-radius) - [Formato de fecha](properties_Display.md#date-format) - [Valor por defecto](properties_RangeOfValues.md#default-value) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Editable](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de exclusiones](properties_RangeOfValues.md#excluded-list) - [Tipo de expresión](properties_Object.md#expression-type) - [Color de relleno](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar rectángulo de foco](properties_Appearance.md#hide-focus-rectangle) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Ajuste horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Cursiva](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Multilínea](properties_Entry.md#multiline) - [Estilo múltiple](properties_Text.md#multi-style) - [Formato de números](properties_Display.md#number-format) - [Nombre del objeto](properties_Object.md#object-name) - [Orientación](properties_Text.md#orientation) - [Formato de imagen](properties_Display.md#picture-format) - [Marcador de posición](properties_Entry.md#placeholder) - [Marco de impresión](properties_Print.md#print-frame) - [Lista obligatoria](properties_RangeOfValues.md#required-list) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Selección siempre visible](properties_Entry.md#selection-always-visible) - [Guardar con etiquetas de estilo predeterminadas](properties_Text.md#store-with-default-style-tags) - [Texto cuando es False/Texto cuando es True](properties_Display.md#text-when-falsetext-when-true) - [Formato de hora](properties_Display.md#time-format) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Ajustar al ancho](properties_Display.md#wordwrap) - [Herramientas de escritura](properties_Entry.md#writing-tools)

## Eventos soportados

[On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Mouse Up ](../Events/onMouseUp.md)(Picture type only)-  [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Scroll](../Events/onScroll.md)(Picture type only) - [On Selection Change](../Events/onSelectionChange.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)

## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

- Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
- Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos [Menús desplegables/Listas desplegables](dropdownList_Overview.md) y [Combo Box](comboBox_overview.md).
- Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).


