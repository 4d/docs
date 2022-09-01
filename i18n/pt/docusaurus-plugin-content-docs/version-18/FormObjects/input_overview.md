---
id: inputOverview
title: Entrada
---

## Visão Geral

Inputs allow you to add enterable or non-enterable expressions such as database [fields](Concepts/identifiers.md#fields) and [variables](Concepts/variables.md) to your forms. Inputs can handle character-based data (text, dates, numbers...) or pictures:

![](../assets/en/FormObjects/input.png)

Inputs can contain [assignable or non-assignable expressions](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

In addition, inputs can be [enterable or non-enterable](properties_Entry.md#enterable). An enterable input accepts data. You can set data entry controls for the object. A non-enterable input can only display values but cannot be edited by the user.

You can manage the data with object or form [methods](Concepts/methods.md).

### JSON Exemplo

```4d
 "myText": {
  "type": "input", //define the type of object
  "spellcheck": true, //enable spelling verification
  "left": 60,   //left position on the form  
  "top": 160,   //top position on the form
  "width": 100,  //width of the object
  "height": 20  //height of the object
  }
```

## Propriedades compatíveis

[Formato Alfa](properties_Display.md#alpha-format) - [Comprovação ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrita](properties_Text.md#bold) - \[Formato booleano\](properties_Display. md#boolean-format) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Fundo](properties_CoordinatesAndSizing.md#bottom) - \[Lista de opções\](properties_DataSource. md#choice-list) - [Classe](properties_Object.md#css-class) - [Menú de contexto](properties_Entry.md#context-menu) - \[Formato de data\](properties_Display. md#date-format) - [Valor por padrão](properties_RangeOfValues.md#default-value) - [Arrastável](properties_Action.md#draggable) - [Soltável](properties_Action.md#droppable) - \[Editável\](properties_Entry. md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de exclusão](properties_RangeOfValues.md#excluded-list) - \[Tipo de expressão\](properties_Object. md#expression-type) - [Cor de preenchimento](properties_BackgroundAndBorder.md#fill-color) - [Fonte](properties_Text.md#font) - [Cor de fonte](properties_Text.md#font-color) - \[Tamanho da fonte\](properties_Text. md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar retângulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - \[Alinhamento horizontal\](properties_Text. md#horizontal-alignment) - [Barra de deslocamento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Itálica\](properties_Text. md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Largura de linha](properties_BackgroundAndBorder.md#line-width) - [Multiline](properties_Entry.md#multiline) - \[Multi-estilo\](properties_Text. md#multi-style) - [Formato numérico](properties_Display.md#number-format) - [Nome de objeto](properties_Object.md#object-name) - \[Orientação\](properties_Text. md#orientation) - [Formato de imagem](properties_Display.md#picture-format) - [Titular](properties_Entry.md#placeholder) - \[Marco de impressão\](properties_Print. md#print-frame) - [Lista requerida](properties_RangeOfValues.md#required-list) - [Direita](properties_CoordinatesAndSizing.md#right) - [Salvar como](properties_DataSource.md#save-as) - \[Seleção sempre visível\](properties_Entry. md#selection-always-visible) - [Salvar com etiquetas de estilo por padrão](properties_Text.md#store-with-default-style-tags) - \[Texto quando for falso/Texto quando for verdadeiro\](properties_Display. md#text-when-false-text-when-true) - [Formato de tempo](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - \[Sublinhado\](properties_Text. md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Barra de deslocamento vertical](properties_Appearance.md#vertical-scroll-bar) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

---

## Alternativas

You can also represent field and variable expressions in your forms using alternative objects, more particularly:

* You can display and enter data from database fields directly in columns of [selection type List boxes](listbox_overview.md).
* You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](popupMenuDropdownList_overview) and [Combo Boxes](comboBox_overview.md) objects.
* You can represent a boolean expression as a [check box](checkbox_overview.md) or as a [radio button](radio_overview.md) object.
