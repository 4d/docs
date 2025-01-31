---
id: inputOverview
title: Entrada
---

## Generalidades

Las entradas le permiten añadir expresiones editables o no editables como [campos](Concepts/identifiers.md#fields) y [variables](Concepts/variables.md) de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, números...) o imágenes:

![](../assets/en/FormObjects/input.png)

Las entradas pueden contener [expresiones asignables o no asignables](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Además, las entradas pueden ser [editables o no editables](properties_Entry.md#enterable). Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable sólo puede mostrar valores, pero no puede ser editada por el usuario.

Puedes gestionar los datos con los [métodos](Concepts/methods.md) objeto o formulario.

### Ejemplo JSON

```4d
 "myText": {
  "type": "input", //definir el tipo de objeto
  "spellcheck": true, //activar la verificación ortográfica
  "left": 60,   //posición izquierda en el formulario  
  "top": 160,   //posición superior en el formulario
  "width": 100,  //ancho del objeto
  "height": 20  //altura del objeto
  }
```

## Propiedades soportadas

[Formato alfa](properties_Display.md#alpha-format) - [Corrección ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrita](properties_Text.md#bold) - [Texto cuando es False/Texto cuando es True](properties_Display.md#text-when-falsetext-when-true) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Menú contextual](properties_Entry.md#context-menu) - [Formato de fecha](properties_Display.md#date-format) - [Valor predeterminado](properties_RangeOfValues.md#default-value) - [Arrastrable](properties_Action.md#draggable) - [Desplegable](properties_Action.md#droppable) - [Inscribible](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista excluida](properties_RangeOfValues.md#excluded-list) - [Tipo de expresión](properties_Object.md#expression-type) - [Color de relleno](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Cursiva](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Ancho de línea](properties_BackgroundAndBorder.md#line-width) - [Multilínea](properties_Entry.md#multiline) - [Multiestilo](properties_Text.md#multi-style) - [Formato de número](properties_Display.md#number-format) - [Nombre de objeto](properties_Object.md#object-name) - [Orientación](properties_Text.md#orientation) - [Formato de imagen](properties_Display.md#picture-format) - [Marcador de posición](properties_Entry.md#placeholder) - [Marco de impresión](properties_Print.md#print-frame) - [Lista obligatoria](properties_RangeOfValues.md#required-list) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Guardar como](properties_DataSource.md#save-as) - [Selección siempre visible](properties_Entry.md#selection-always-visible) - [Guardar con etiquetas de estilo predeterminadas](properties_Text.md#store-with-default-style-tags) - [Texto en False/Texto en True](properties_Display.md#text-when-falsetext-when-true) - [Formato de hora](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Ajuste de palabras](properties_Display.md#wordwrap)

---

## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

* Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
* Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos [Menús desplegables/Listas desplegables](dropdownList_Overview.md) y [Combo Box](comboBox_overview.md).
* Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).
