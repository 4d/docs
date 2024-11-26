---
id: comboBoxOverview
title: Combo Box
---

## Visão Geral

Um combo box é parecido com uma lista [drop-down](dropdownList_Overview.md#overview), exceto que aceita texto digitado do teclado e tem opções adicionais.

![](../assets/en/FormObjects/combo_box.png)

Você inicializa um combo box da mesma forma que uma lista suspensa. If the user enters text into the combo box, it fills the 0th element of the array. In other respects, you treat a combo box as an enterable area that uses its array or a choice list as the set of default values.

Use the `On Data Change` event to manage entries into the enterable area, as you would for any enterable area object. For more information, refer to the description of the [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) command in the *4D Language Reference* manual.

## Opções para combo boxes

Combo box type objects accept two specific options concerning choice lists associated with them:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (lista de valores excluídos): permite estabelecer uma lista cujos valores não podem ser digitados na combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.
> > > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [Pop-up menu type](dropdownList_Overview.md#overview) object.

## Propriedades compatíveis

[Formato alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botão](properties_TextAndPicture.md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - [Foco](properties_Entry.md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Ação padrão](properties_Action.md#standard-action) - [Formato de hora](properties_Display.md#time-format) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
