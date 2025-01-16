---
id: inputOverview
title: Entrada
---

Las entradas le permiten añadir expresiones editables o no editables como [campos](Concepts/identifiers.md#fields) y [variables](Concepts/variables.md) de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, números...) o imágenes:

![](../assets/en/FormObjects/input.png)

Las entradas pueden contener [expresiones asignables o no asignables](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Además, las entradas pueden ser [editables o no editables](properties_Entry.md#enterable). Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable sólo puede mostrar valores, pero no puede ser editada por el usuario.

Puede gestionar los datos con los [métodos](Concepts/methods.md) objeto o formulario.

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
| 19 R7       | Soporte de la propiedad Radio de esquina |

</details>

[Permitir selector de fuente/color](properties_Text.md#allow-fontcolor-picker) - [Formato alfa](properties_Display.md#alpha-format) - [Corrección ortográfica automática](properties_Entry.md#auto-spellcheck) - [Color de fondo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrita](properties_Text.md#bold) - [Formato booleano](properties_Display.md#text-when-falsetext-when-true) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Radio de esquina](properties_CoordinatesAndSizing.md#corner-radius) - [Formato Fecha](properties_Display.md#date-format) - [Valor por defecto](properties_RangeOfValues.md#default-value) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista excluida](properties_RangeOfValues.md#excluded-list) - [Tipo de expresión](properties_Object.md#expression-type) - [Color de relleno](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Alto](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Cursiva](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Multilínea](properties_Entry.md#multiline) - [Multiestilo](properties_Text.md#multi-style) - [Formato numérico](properties_Display.md#formato-numérico) - [Nombre de objeto](properties_Object.md#nombre-de-objeto) - [Orientación](properties_Text.md#orientación) - [Formato de imagen](properties_Display.md#formato-de-imagen) - [Marcador de posición](properties_Entry.md#placeholder) - [Marco de impresión](properties_Print.md#print-frame) - [Lista obligatoria](properties_RangeOfValues.md#required-list) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Selección siempre visible](properties_Entry.md#selection-always-visible) - [Almacenar con etiquetas de estilo predeterminadas](properties_Text.md#store-with-default-style-tags) - [Texto cuando False/Texto cuando True](properties_Display.md#text-when-falsetext-when-true) - [Formato de tiempo](properties_Display.md#formato-de-tiempo) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Barra de desplazamiento vertical](properties_Appearance.md#barra-de-desplazamiento-vertical) - [Tamaño vertical](properties_ResizingOptions.md#tamaño-vertical) - [Visibilidad](properties_Display.md#visibilidad) - [Ancho](properties_CoordinatesAndSizing.md#ancho) - [Ajuste de palabras](properties_Display.md#wordwrap)

---

## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

- Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
- Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos [Menús desplegables/Listas desplegables](dropdownList_Overview.md) y [Combo Box](comboBox_overview.md).
- Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).
