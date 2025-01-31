---
id: comboBoxOverview
title: Combo Box
---

Uma caixa de combinação é semelhante a uma [lista suspensa] (dropdownList_Overview.md#overview), exceto pelo fato de que ela aceita texto digitado pelo teclado e tem opções adicionais.

![](../assets/en/FormObjects/combo_box.png)

Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

## Gestão do combo boxes

Use o evento [`On Data Change`] (Events/onDataChange.md) para gerenciar as entradas na área de entrada, como faria com qualquer objeto de formulário de entrada.

Você inicializa uma caixa de combinação exatamente da mesma forma que uma [lista suspensa] (dropdownList_Overview.md#overview): usando um objeto, uma matriz ou uma lista de opções.

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

Um [objeto](Concepts/dt_object.md) encapsulando uma [coleção](../Concepts/dt_collection.md) pode ser usado como a fonte de dados de uma caixa de combinação. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                                |
| -------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `valores`      | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados<li>:</li><li>stringsnumbersdatestimesSe</li>estiver vazia ou não for definida, a caixa de combinação estará vazia |
| `currentValue` | igual a Colecção | Texto introduzido pelo usuário                                                                                                                                                                                                                                           |

Se o objeto contiver outras propriedades, estas são ignoradas.

Quando o usuário insere um texto na caixa de combinação, a propriedade `currentValue` do objeto obtém o texto inserido.

### Usar um array

Consulte **Usando uma matriz** na [página da lista suspensa] (dropdownList_Overview.md#using-an-array) para obter informações sobre como inicializar a matriz.

Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array.

### Utilizar uma lista de seleção

Se quiser usar uma caixa de combinação para gerenciar os valores de uma área de entrada (campo listado ou variável), 4D permite referenciar o campo ou a variável diretamente como a fonte de dados do objeto formulário. Isso facilita gerenciar variáveis/campos listados.

> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Para associar uma caixa de combinação a um campo ou variável, basta digitar o nome do campo ou da variável diretamente em [Variable or Expression] (properties_Object.md#variable-or-expression) do objeto do formulário na Lista de propriedades.

Quando o formulário é executado, 4D gerencia automaticamente a caixa de combinação durante a entrada ou exibição: quando um usuário escolhe um valor, ele é salvo no campo; esse valor de campo é mostrado na caixa de combinação quando o formulário é exibido:

Consulte **Usando uma escolha** na página [lista suspensa] (dropdownList_Overview.md#using-a-choice-list) para obter mais informações.

## Opções

Objetos do tipo combo box aceitam duas opções específicas referentes a listas de escolhas associadas com elas:

- [Inserção automática](properties_DataSource.md#automatic-insertion): permite adicionar automaticamente um valor à fonte de dados quando um usuário insere um valor que não é encontrado na lista associada à caixa de combinação.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (lista de valores excluídos): permite definir uma lista cujos valores não podem ser inseridos na caixa de combinação. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.

> A associação de uma [lista de valores obrigatórios] (properties_RangeOfValues.md#required-list) não está disponível para caixas de combinação. Em uma interface, se um objeto precisar propor uma lista finita de valores necessários, você deverá usar um objeto [drop-down list] (dropdownList_Overview.md#overview).

## Propriedades compatíveis

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
