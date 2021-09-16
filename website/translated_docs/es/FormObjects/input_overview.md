---
id: inputOverview
title: Entrada
---

## Generalidades

Inputs allow you to add enterable or non-enterable expressions such as database [fields](Concepts/identifiers.md#fields) and [variables](Concepts/variables.md) to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:

![](assets/en/FormObjects/input.png)

Inputs can contain [assignable or non-assignable expressions](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

In addition, inputs can be [enterable or non-enterable](properties_Entry.md#enterable). An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user.

You can manage the data with object or form [methods](Concepts/methods.md).


### Ejemplo JSON:

```4d
    "miTexto": {
        "tipo": "input", //define el tipo de objeto
        "spellcheck": true, //activa la verificación ortográfica
        "left": 60, //posición izquierda en el formulario  
        "top": 160, //posición superior en el formulario
        "width": 100, //ancho del objeto
        "height": 20 //altura del objeto
        }
```


## Propiedades soportadas
[Formato Alfa](properties_Display.md#alpha-format) - [Comprobación ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrita](properties_Text.md#bold) - [Formato booleano](properties_Display. md#boolean-format) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource. md#choice-list) - [Clase](properties_Object.md#css-class) - [Menú de contexto](properties_Entry.md#context-menu) - [Formato de fecha](properties_Display. md#date-format) - [Valor por defecto](properties_RangeOfValues.md#default-value) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Editable](properties_Entry. md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de exclusión](properties_RangeOfValues.md#excluded-list) - [Tipo de expresión](properties_Object. md#expression-type) - [Color de relleno](properties_BackgroundAndBorder.md#fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de la fuente](properties_Text. md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - [Alineación horizontal](properties_Text. md#horizontal-alignment) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text. md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Ancho de línea](properties_BackgroundAndBorder.md#line-width) - [Multiline](properties_Entry.md#multiline) - [Multi-estilo](properties_Text. md#multi-style) - [Formato numérico](properties_Display.md#number-format) - [Nombre del objeto](properties_Object.md#object-name) - [Orientación](properties_Text. md#orientation) - [Formato de imagen](properties_Display.md#picture-format) - [Titular](properties_Entry.md#placeholder) - [Marco de impresión](properties_Print. md#print-frame) - [Lista requerida](properties_RangeOfValues.md#required-list) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Guardar como](properties_DataSource.md#save-as) - [Selección siempre visible](properties_Entry. md#selection-always-visible) - [Guardar con etiquetas de estilo por defecto](properties_Text.md#store-with-default-style-tags) - [Texto cuando es falso/Texto cuando es verdadero](properties_Display. md#text-when-false-text-when-true) - [Formato de tiempo](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Subrayado](properties_Text. md#underline) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar) - [Tamaño vertical](properties_ResizingOptions. md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)


---
## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

*   Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
*   Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos [Menús desplegables/Listas desplegables](popupMenuDropdownList_overview) y [Combo Box](comboBox_overview.md).
*   Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).
