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

[Permitir selector de fuente/color](properties_Text.md#allow-font-color-picker) - [Formato Alfa](properties_Display.md#alpha-format) - [Comprobación ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrita](properties_Text.md#bold) - [Probar cuando False/Text cuando True](properties_Display.md#text-when-false-text-when-true) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Abajo](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Menú de contexto](properties_Entry.md#context-menu) - [Formato de fecha](properties_Display.md#date-format) - [Valor por defecto](properties_RangeOfValues.md#default-value) - [Arrastrable](properties_Action.md#draggable) - [Soltable](properties_Action.md#droppable) - [Editable](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de excluidos](properties_RangeOfValues.md#excluded-list) - [Tipo de expresión](properties_Object.md#expression-type) - [Color de relleno](properties_BackgroundAndBorder.md#fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar rectángulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Barra de desplazamiento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Multilínea](properties_Entry.md#multiline) - [Multiestilo](properties_Text.md#multi-style) - [Formato numérico](properties_Display.md#number-format) - [Nombre del objeto](properties_Object.md#object-name) - [Orientación](properties_Text.md#orientation) - [Formato de imagen](properties_Display.md#picture-format) - [Titular](properties_Entry.md#placeholder) - [Marco de impresión](properties_Print.md#print-frame) - [Lista requerida](properties_RangeOfValues.md#required-list) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Selección siempre visible](properties_Entry.md#selection-always-visible) - [Almacenar con etiquetas de estilo por defecto](properties_Text.md#store-with-default-style-tags) - [Texto cuando False/Text cuando True](properties_Display.md#text-when-false-text-when-true) - [Formato de tiempo](properties_Display.md#time-format) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Barra de desplazamiento vertical](properties_Appearance.md#vertical-scroll-bar) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width) - [Ajuste de texto](properties_Display.md#wordwrap)


---
## Alternativas

También puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, más concretamente:

*   Puede mostrar e introducir datos de los campos de la base directamente en las columnas [de tipo List box](listbox_overview.md).
*   You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](dropdownList_Overview.md) and [Combo Boxes](comboBox_overview.md) objects.
*   Puede representar una expresión booleana como una [casilla de selección](checkbox_overview.md) o como un objeto [botón radio](radio_overview.md).