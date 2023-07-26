---
id: comboBoxOverview
title: Combo Box
---

Um combo box é parecido com uma lista [drop-down](dropdownList_Overview.md#overview), exceto que aceita texto digitado do teclado e tem opções adicionais.

![](../assets/en/FormObjects/combo_box.png)

Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

## Gestão do combo boxes

Use o evento `On Data Change` para gerenciar entradas em uma área editável, como faria em qualquer objeto área editável.

You initialize a combo box in exactly the same way as a [drop-down list](dropdownList_Overview.md#overview): using an object, an array, or a choice list.

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) can be used as the data source of a combo box. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                                     |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:<li>strings</li><li>números</li><li>datas</li><li>horas</li>Se estiver vazia ou não for definida, a caixa combinada está vazia |
| `currentValue` | igual a Colecção | Texto introduzido pelo usuário                                                                                                                                                                                                                                                |

If the object contains other properties, they are ignored.

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

- [Inserção automática](properties_DataSource.md#automatic-insertion): permite adicionar um valor automaticamente a uma lista armazenada na memória quando um usuário digitar um valor que não é encontraddo na lista de escolhas associadas com uma combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (lista de valores excluídos): permite estabelecer uma lista cujos valores não podem ser digitados na combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.
> > > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. Em uma interface, se um objeto precisar propor uma lista finita de valores exigidos, então deve usar um objeto  [do tipo menu Pop-up](dropdownList_Overview.md#overview) .

## Propriedades compatíveis
[Formato Alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - \[Estilo de botão\](properties_TextAndPicture. md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - \[Focável\](properties_Entry. md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - \[Altura\](properties_CoordinatesAndSizing. md#height) - [Conselho de ajuda](properties_Help.md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Itálica\](properties_Text. md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome de objeto](properties_Object.md#object-name) - \[Direita\](properties_CoordinatesAndSizing. md#right) - [Ação padrão](properties_Action.md#standard-action) - [Formato de hora](properties_Display.md#time-format) - \[Top\](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  