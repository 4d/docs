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
  "type": "input", //define o tipo de objeto
  "spellcheck": true, //ativa verificação ortografia
  "left": 60,   //posição esquerda no formulário  
  "top": 160,   //posição superior no formulário
  "width": 100,  //largura do objeto
  "height": 20  //altura do objeto
  }
```

## Propriedades compatíveis

[Formato Alfa](properties_Display.md#alpha-format) - [Comprovação ortográfica automática](properties_Entry.md#auto-spellcheck) - [Negrita](properties_Text.md#bold) - \[Formato booleano\](properties_Display. md#boolean-format) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Fundo](properties_CoordinatesAndSizing.md#bottom) - \[Lista de opções\](properties_DataSource. md#choice-list) - [Classe](properties_Object.md#css-class) - [Menú de contexto](properties_Entry.md#context-menu) - \[Formato de data\](properties_Display. md#date-format) - [Valor por padrão](properties_RangeOfValues.md#default-value) - [Arrastável](properties_Action.md#draggable) - [Soltável](properties_Action.md#droppable) - \[Editável\](properties_Entry. md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de exclusão](properties_RangeOfValues.md#excluded-list) - \[Tipo de expressão\](properties_Object. md#expression-type) - [Cor de preenchimento](properties_BackgroundAndBorder.md#fill-color) - [Fonte](properties_Text.md#font) - [Cor de fonte](properties_Text.md#font-color) - \[Tamanho da fonte\](properties_Text. md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar retângulo de enfoque](properties_Appearance.md#hide-focus-rectangle) - \[Alinhamento horizontal\](properties_Text. md#horizontal-alignment) - [Barra de deslocamento horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Itálica\](properties_Text. md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Largura de linha](properties_BackgroundAndBorder.md#line-width) - [Multiline](properties_Entry.md#multiline) - \[Multi-estilo\](properties_Text. md#multi-style) - [Formato numérico](properties_Display.md#number-format) - [Nome de objeto](properties_Object.md#object-name) - \[Orientação\](properties_Text. md#orientation) - [Formato de imagem](properties_Display.md#picture-format) - [Titular](properties_Entry.md#placeholder) - \[Marco de impressão\](properties_Print. md#print-frame) - [Lista requerida](properties_RangeOfValues.md#required-list) - [Direita](properties_CoordinatesAndSizing.md#right) - [Salvar como](properties_DataSource.md#save-as) - \[Seleção sempre visível\](properties_Entry. md#selection-always-visible) - [Salvar com etiquetas de estilo por padrão](properties_Text.md#store-with-default-style-tags) - \[Texto quando for falso/Texto quando for verdadeiro\](properties_Display. md#text-when-false-text-when-true) - [Formato de tempo](properties_Display.md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - \[Sublinhado\](properties_Text. md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Barra de deslocamento vertical](properties_Appearance.md#vertical-scroll-bar) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

---

## Alternativas

Também pode representar expressões de campo e variáveis nos seus formulários utilizando objectos alternativos, mais particularmente:

* Pode exibir e introduzir dados de campos de bases de dados directamente em colunas de [tipo de selecção Caixas de listagem](listbox_overview.md).
* Pode representar um campo ou variável de lista directamente num formulário usando [Menus Pop-up/Drop-down Lists](popupMenuDropdownList_overview) e [Combo Boxes](comboBox_overview.md) objectos.
* Pode representar uma expressão booleana como um [caixa de verificação](checkbox_overview.md) ou como um objecto de rádio [](radio_overview.md).
