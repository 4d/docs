---
id: inputOverview
title: Entrada
---


Las entradas le permiten añadir expresiones editables o no editables como [campos](Concepts/identifiers.md#fields) y [variables](Concepts/variables.md) de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, números...) o imágenes:

![](../assets/en/FormObjects/input.png)

Las entradas pueden contener [expresiones asignables o no asignables](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Además, las entradas pueden ser [editables o no editables](properties_Entry.md#enterable). Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable sólo puede mostrar valores, pero no puede ser editada por el usuario.

Puedes gestionar los datos con los [métodos](Concepts/methods.md) objeto o formulario.


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

<details><summary>Histórico</summary>

| Versión | Modificaciones                    |
| ------- | --------------------------------- |
| v19 R7  | Support of Corner radius property |

</details>

[Allow font/color picker](properties_Text.md#allow-font-color-picker) - [Alpha Format](properties_Display.md#alpha-format) - [Auto Spellcheck](properties_Entry.md#auto-spellcheck) - [Bold](properties_Text.md#bold) - [Test when False/Text when True](properties_Display.md#text-when-false-text-when-true) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Date Format](properties_Display.md#date-format) - [Default value](properties_RangeOfValues.md#default-value) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression type](properties_Object.md#expression-type) - [Fill Color](properties_BackgroundAndBorder.md#fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multiline](properties_Entry.md#multiline) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Picture Format](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Print Frame](properties_Print.md#print-frame) - [Required List](properties_RangeOfValues.md#required-list) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection always visible](properties_Entry.md#selection-always-visible) - [Store with default style tags](properties_Text.md#store-with-default-style-tags) - [Text when False/Text when True](properties_Display.md#text-when-false-text-when-true) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)


---
## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

*   Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
*   You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](dropdownList_Overview.md) and [Combo Boxes](comboBox_overview.md) objects.
*   Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).