---
id: inputOverview
title: Entrada
---

## Visão Geral

As entradas permitem-lhe adicionar expressões editáveis ou não, tais como campos de base de dados [](Concepts/identifiers.md#fields) e [variáveis](Concepts/variables.md) aos seus formulários. As entradas podem tratar de dados baseados em caracteres (texto, datas, números...) ou imagens:

![](../assets/en/FormObjects/input.png)

As entradas podem conter [expressões atribuíveis ou não atribuíveis](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Além disso, as entradas podem ser [editáveis ou não](properties_Entry.md#enterable). Uma entrada digitável aceita dados. Pode definir controles de entrada de dados para o objecto. Uma entrada não centralizável só pode exibir valores mas não pode ser editada pelo utilizador.

Pode gerir os dados com objectos ou formulários [métodos](Concepts/methods.md).

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

[Formato alfa](properties_Display.md#alpha-format) - [Verificação ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrito](properties_Text.md#bold) - [Texto quando False/Texto quando True](properties_Display.md#text-when-falsetext-when-true) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Menu de contexto](properties_Entry.md#context-menu) - [Formato Data](properties_Display.md#date-format) - [Valor padrão](properties_RangeOfValues.md#default-value) - [Arrastável](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Entrável](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de excluídos](properties_RangeOfValues.md#excluded-list) - [Tipo de expressão](properties_Object.md#expression-type) - [Cor de preenchimento](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar retângulo de foco](properties_Appearance.md#hide-focus-rectangle) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Barra de rolagem horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Largura da linha](properties_BackgroundAndBorder.md#line-width) - [Multilinha](properties_Entry.md#multiline) - [Multi-estilo](properties_Text.md#multi-style) - [Formato do número](properties_Display.md#number-format) - [Nome do objeto](properties_Object.md#object-name) - [Orientação](properties_Text.md#orientation) - [Formato Imagem](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Print Frame](properties_Print.md#print-frame) - [Required List](properties_RangeOfValues.md#required-list) - [Right](properties_CoordinatesAndSizing.md#right) - [Save as](properties_DataSource.md#save-as) - [Selection always visible](properties_Entry.md#selection-always-visible) - [Store with default style tags](properties_Text.md#store-with-default-style-tags) - [Text when False/Text when True](properties_Display.md#text-when-falsetext-when-true) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

---

## Alternativas

Também pode representar expressões de campo e variáveis nos seus formulários utilizando objectos alternativos, mais particularmente:

* Pode exibir e introduzir dados de campos de bases de dados directamente em colunas de [tipo List box](listbox_overview.md).
* You can represent a list field or variable directly in a form using [Pop-up Menus/Drop-down Lists](dropdownList_Overview.md) and [Combo Boxes](comboBox_overview.md) objects.
* Pode representar uma expressão booleana como um [caixa de verificação](checkbox_overview.md) ou como um objecto de rádio [](radio_overview.md).
