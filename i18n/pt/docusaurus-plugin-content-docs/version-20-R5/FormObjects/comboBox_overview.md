---
id: comboBoxOverview
title: Combo Box
---

A combo box is similar to a [drop-down list](dropdownList_Overview.md#overview), except that it accepts text entered from the keyboard and has additional options.

![](../assets/en/FormObjects/combo_box.png)

Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

## Gestão do combo boxes

Use the [`On Data Change`](Events/onDataChange.md) event to manage entries into the enterable area, as you would for any input form object.

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md#overview): using an object, an array, or a choice list.

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](../Concepts/dt_collection.md) can be used as the data source of a combo box. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                         |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Supported types:<li>strings</li><li>numbers</li><li>dates</li><li>times</li>If empty or not defined, the combo box is empty |
| `currentValue` | igual a Colecção | Texto introduzido pelo usuário                                                                                                                                                                                                                                    |

Se o objeto contiver outras propriedades, estas são ignoradas.

When the user enters text into the combo box, the `currentValue` property of the object gets the entered text.

### Usar um array

Please refer to **Using an array** in the [drop-down list page](dropdownList_Overview.md#using-an-array) for information about how to initialize the array.

Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array.

### Utilizar uma lista de seleção

If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. Isso facilita gerenciar variáveis/campos listados.

> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the form object in the Property List.

When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:

Please refer to **Using a choice** in the [drop-down list page](dropdownList_Overview.md#using-a-choice-list) for more information.

## Opções

Objetos do tipo combo box aceitam duas opções específicas referentes a listas de escolhas associadas com elas:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (list of excluded values): allows setting a list whose values cannot be entered in the combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md#overview) object.

## Propriedades compatíveis

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
