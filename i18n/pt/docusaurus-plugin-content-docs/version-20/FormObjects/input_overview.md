---
id: inputOverview
title: Entrada
---


As entradas permitem-lhe adicionar expressões editáveis ou não, tais como campos de base de dados [](Concepts/identifiers.md#fields) e [variáveis](Concepts/variables.md) aos seus formulários. As entradas podem tratar de dados baseados em caracteres (texto, datas, números...) ou imagens:

![](../assets/en/FormObjects/input.png)

As entradas podem conter [expressões atribuíveis ou não atribuíveis](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Além disso, as entradas podem ser [editáveis ou não](properties_Entry.md#enterable). Uma entrada digitável aceita dados. Pode definir controles de entrada de dados para o objecto. Uma entrada não centralizável só pode exibir valores mas não pode ser editada pelo utilizador.

Pode gerir os dados com objectos ou formulários [métodos](Concepts/methods.md).


### Exemplo JSON:

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

<details><summary>Histórico</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 18 R6   | Suporte da propriedade Raio de canto |

</details>

[Permitir seletor de fonte/cor](properties_Text.md#allow-fontcolor-picker) - [Formato alfa](properties_Display.md#alpha-format) - [Verificação ortográfica automática](properties_Entry.md#auto-spellcheck) - [Cor de fundo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrito](properties_Text.md#bold) - [Formato booleano](properties_Display.md#text-when-falsetext-when-true) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Menu de contexto](properties_Entry.md#context-menu) - [Raio de canto](properties_CoordinatesAndSizing.md#corner-radius) - [Formato de data](properties_Display.md#date-format) - [Valor padrão](properties_RangeOfValues.md#default-value) - [Arrastável](properties_Action.md#draggable) - [Descartável](properties_Action.md#droppable) - [Entrável](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de excluídos](properties_RangeOfValues.md#excluded-list) - [Tipo de expressão](properties_Object.md#expression-type) - [Cor de preenchimento](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar retângulo de foco](properties_Appearance.md#hide-focus-rectangle) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Barra de rolagem horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Multilinha](properties_Entry.md#multiline) - [Multi-estilo](properties_Text.md#multi-style) - [Formato de número](properties_Display.md#number-format) - [Nome do objeto](properties_Object.md#object-name) - [Orientação](properties_Text.md#orientation) - [Formato de imagem](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Quadro de impressão](properties_Print.md#print-frame) - [Lista obrigatória](properties_RangeOfValues.md#required-list) - [Direita](properties_CoordinatesAndSizing.md#right) - [Seleção sempre visível](properties_Entry.md#selection-always-visible) - [Armazenar com tags de estilo padrão](properties_Text.md#store-with-default-style-tags) - [Texto quando falso/Texto quando verdadeiro](properties_Display.md#text-when-falsetext-when-true) - [Formato de hora](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Barra de rolagem vertical](properties_Appearance.md#vertical-scroll-bar) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) - [Envolvimento de palavras](properties_Display.md#wordwrap)


---
## Alternativas

Também pode representar expressões de campo e variáveis nos seus formulários utilizando objectos alternativos, mais particularmente:

*   Pode exibir e introduzir dados de campos de bases de dados directamente em colunas de [tipo List box](listbox_overview.md).
*   Pode representar um campo ou variável de lista directamente num formulário usando [Menus Pop-up/Drop-down Lists](popupMenuDropdownList_overview) e [Combo Boxes](comboBox_overview.md) objectos.
*   Pode representar uma expressão booleana como um [caixa de verificação](checkbox_overview.md) ou como um objecto de rádio [](radio_overview.md).