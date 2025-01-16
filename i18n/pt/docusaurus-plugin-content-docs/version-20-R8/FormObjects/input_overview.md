---
id: inputOverview
title: Entrada
---

As entradas permitem que você adicione expressões digitáveis ou não digitáveis, como [campos](Concepts/identifiers.md#fields) e [variáveis](Concepts/variables.md) do banco de dados aos seus formulários. As entradas podem manipular dados baseados em caracteres (texto, datas, números...) ou imagens:

![](../assets/en/FormObjects/input.png)

As entradas podem conter [expressões atribuíveis ou não atribuíveis](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Além disso, as entradas podem ser [inserível ou não inserível](properties_Entry.md#enterable). Uma entrada digitável aceita dados. Pode definir controles de entrada de dados para o objecto. Uma entrada não centralizável só pode exibir valores mas não pode ser editada pelo utilizador.

Você pode gerenciar os dados com os [métodos](Concepts/methods.md) objeto ou formulário.

### Exemplo JSON:

```4d
	"myText": {
		"type": "input", //defina o tipo de objeto
		"spellcheck": true, //ative a verificação ortográfica
		"left": 60, //posição esquerda no formulário  
		"top": 160, //posição superior no formulário 
		"width": 100, //largura do objeto
		"height": 20 //altura do objeto
}
```

## Propriedades compatíveis

<details><summary>História</summary>

| Release | Mudanças                             |
| ------- | ------------------------------------ |
| 18 R6   | Suporte da propriedade Raio de canto |

</details>

[Permitir seletor de fonte/cor](properties_Text.md#allow-fontcolor-picker) - [Formato alfa](properties_Display.md#alpha-format) - [Verificação ortográfica automática](properties_Entry.md#auto-spellcheck) - [Cor de fundo](properties_BackgroundAndBorder.md#background-color--fill-color) - [Negrito](properties_Text.md#bold) - [Formato booleano](properties_Display.md#text-when-falsetext-when-true) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Fundo](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Menu de contexto](properties_Entry.md#context-menu) - [Raio do canto](properties_CoordinatesAndSizing.md#corner-radius) - [Formato da data](properties_Display.md#date-format) - [Valor padrão](properties_RangeOfValues.md#default-value) - [Arrastável](properties_Action.md#draggable) - [Derrubável](properties_Action.md#droppable) - [Entrável](properties_Entry.md#enterable) - [Filtro de entrada](properties_Entry.md#entry-filter) - [Lista de excluídos](properties_RangeOfValues.md#excluded-list) - [Tipo de expressão](properties_Object.md#expression-type) - [Cor de preenchimento](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ocultar retângulo de foco](properties_Appearance.md#hide-focus-rectangle) - [Alinhamento horizontal](properties_Text.md#horizontal-alignment) - [Barra de rolagem horizontal](properties_Appearance.md#horizontal-scroll-bar) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Multilinha](properties_Entry.md#multiline) - [Multi-estilo](properties_Text.md#multi-style) - [Formato numérico](properties_Display.md#number-format) - [Nome do objeto](properties_Object.md#object-name) - [Orientação](properties_Text.md#orientation) - [Formato de imagem](properties_Display.md#picture-format) - [Marcador](properties_Entry.md#placeholder) - [Quadro de impressão](properties_Print.md#print-frame) - [Lista obrigatória](properties_RangeOfValues.md#required-list) - [Direito](properties_CoordinatesAndSizing.md#direita) - [Seleção sempre visível](properties_Entry.md#selection-always-visible) - [Armazenar com tags de estilo padrão](properties_Text.md#store-with-default-style-tags) - [Texto quando false/Texto quando true](properties_Display.md#text-when-falsetext-when-true) - [Formato de hora](properties_Display.md#time-format) - [Topo](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Barra de rolagem vertical](properties_Appearance.md#vertical-scroll-bar) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap)

---

## Alternativas

Também pode representar expressões de campo e variáveis nos seus formulários utilizando objectos alternativos, mais particularmente:

- Você pode exibir e inserir dados dos campos do banco de dados diretamente nas colunas das [List boxes do tipo de seleção](listbox_overview.md).
- Você pode representar um campo de lista ou variável diretamente em um formulário usando objetos [Popup Menus/Listas suspensas](dropdownList_Overview.md) e [Combo Boxes](comboBox_overview.md).
- Você pode representar uma expressão booleana como um [objeto de seleção](checkbox_overview.md) ou como um [botão de opção](radio_overview.md).
