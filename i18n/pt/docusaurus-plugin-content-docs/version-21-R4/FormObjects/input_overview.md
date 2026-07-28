---
id: inputOverview
title: Entrada
---

As entradas permitem adicionar expressões acessíveis ou não entráveis como campos de banco de dados e [variables](Concepts/variables.md) aos seus formulários. As entradas podem manipular dados baseados em caracteres (texto, datas, números...) ou imagens:

![](../assets/en/FormObjects/input.png)

As entradas podem conter [expressões atribuíveis ou não atribuíveis](Concepts/quick-tour.md#assignable-vs-non-assignable-expressions).

Além disso, as entradas podem ser [inserível ou não inserível](properties_Entry.md#enterable). Uma entrada digitável aceita dados. Pode definir controles de entrada de dados para o objecto. Uma entrada não centralizável só pode exibir valores mas não pode ser editada pelo utilizador.

Você pode gerenciar os dados com os [métodos](Concepts/methods.md) objeto ou formulário.

:::note

For security reasons, in [multi-style](./properties_Text.md#multi-style) input areas, when formulas are pasted from a different 4D application or an external environment, only the *computed values* (text or images) available at the time of copying are pasted. If no value was available (e.g., the formula was never computed), 4D pastes the formula source as plain text.

:::

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
| 20 R4   | Support of Writing Tools property    |
| 18 R6   | Suporte da propriedade Raio de canto |

</details>

[Allow font/color picker](properties_Text.md#allow-fontcolor-picker) - [Alpha Format](properties_Display.md#alpha-format) - [Auto Spellcheck](properties_Entry.md#auto-spellcheck) - [Background Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Bold](properties_Text.md#bold) - [Boolean format](properties_Display.md#text-when-falsetext-when-true) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Context Menu](properties_Entry.md#context-menu) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Date Format](properties_Display.md#date-format) - [Default value](properties_RangeOfValues.md#default-value) - [Draggable](properties_Action.md#draggable) - [Droppable](properties_Action.md#droppable) - [Enterable](properties_Entry.md#enterable) - [Entry Filter](properties_Entry.md#entry-filter) - [Excluded List](properties_RangeOfValues.md#excluded-list) - [Expression type](properties_Object.md#expression-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color--fill-color) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Scroll Bar](properties_Appearance.md#horizontal-scroll-bar) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Multiline](properties_Entry.md#multiline) - [Multi-style](properties_Text.md#multi-style) - [Number Format](properties_Display.md#number-format) - [Object Name](properties_Object.md#object-name) - [Orientation](properties_Text.md#orientation) - [Picture Format](properties_Display.md#picture-format) - [Placeholder](properties_Entry.md#placeholder) - [Print Frame](properties_Print.md#print-frame) - [Required List](properties_RangeOfValues.md#required-list) - [Right](properties_CoordinatesAndSizing.md#right) - [Selection always visible](properties_Entry.md#selection-always-visible) - [Store with default style tags](properties_Text.md#store-with-default-style-tags) - [Text when False/Text when True](properties_Display.md#text-when-falsetext-when-true) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Scroll Bar](properties_Appearance.md#vertical-scroll-bar) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [Wordwrap](properties_Display.md#wordwrap) - [Writing Tools](properties_Entry.md#writing-tools)

## Supported Events

[On After Edit](../Events/onAfterEdit.md) - [On After Keystroke](../Events/onAfterKeystroke.md) - [On Before Keystroke](../Events/onBeforeKeystroke.md) - [On Begin Drag Over](../Events/onBeginDragOver.md) - [On Clicked](../Events/onClicked.md) - [On Data Change](../Events/onDataChange.md) - [On Double Clicked](../Events/onDoubleClicked.md) - [On Drag Over](../Events/onDragOver.md) - [On Drop](../Events/onDrop.md) - [On Getting focus](../Events/onGettingFocus.md) - [On Header](../Events/onHeader.md) - [On Load](../Events/onLoad.md) - [On Losing focus](../Events/onLosingFocus.md) - [On Mouse Enter](../Events/onMouseEnter.md) - [On Mouse Leave](../Events/onMouseLeave.md) - [On Mouse Move](../Events/onMouseMove.md) - [On Mouse Up ](../Events/onMouseUp.md)(Picture type only)-  [On Printing Break](../Events/onPrintingBreak.md) - [On Printing Detail](../Events/onPrintingDetail.md) - [On Printing Footer](../Events/onPrintingFooter.md) - [On Scroll](../Events/onScroll.md)(Picture type only) - [On Selection Change](../Events/onSelectionChange.md) - [On Unload](../Events/onUnload.md) - [On Validate](../Events/onValidate.md)

## Alternativas

Também pode representar expressões de campo e variáveis nos seus formulários utilizando objectos alternativos, mais particularmente:

- Você pode exibir e inserir dados dos campos do banco de dados diretamente nas colunas das [List boxes do tipo de seleção](listbox_overview.md).
- Você pode representar um campo de lista ou variável diretamente em um formulário usando objetos [Popup Menus/Listas suspensas](dropdownList_Overview.md) e [Combo Boxes](comboBox_overview.md).
- Você pode representar uma expressão booleana como um [objeto de seleção](checkbox_overview.md) ou como um [botão de opção](radio_overview.md).


