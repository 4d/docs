---
id: comboBoxOverview
title: Combo Box
---

## Visão Geral

A combo box is similar to a [drop-down list](dropdownList_Overview.md#overview), except that it accepts text entered from the keyboard and has additional options.

![](assets/en/FormObjects/combo_box.png)

You initialize a combo box in exactly the same way as a drop-down list. If the user enters text into the combo box, it fills the 0th element of the array. In other respects, you treat a combo box as an enterable area that uses its array or a choice list as the set of default values.

Use the `On Data Change` event to manage entries into the enterable area, as you would for any enterable area object. Para saber mais, vej a descrição do comando of the [Form event](https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html) no manual de*4D Language Reference* .

## Opções de combo box

Combo box type objects accept two specific options concerning choice lists associated with them:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to a list stored in memory when a user enters a value that is not found in the choice list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (list of excluded values): allows setting a list whose values cannot be entered in the combo box. If an excluded value is entered, it is not accepted and an error message is displayed.
> Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [Pop-up menu type](dropdownList_Overview.md#overview) object.

## Supported Properties
[Formato Alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botão](properties_TextAndPicture. md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - [Focável](properties_Entry. md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing. md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text. md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome de objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing. md#right) - [Ação padrão](properties_Action.md#standard-action) - [Formato de hora](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - [Tamanho vertical](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
