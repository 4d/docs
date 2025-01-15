---
id: comboBoxOverview
title: Combo Box
---

Um combo box é parecido com uma lista [drop-down](dropdownList_Overview.md#overview), exceto que aceita texto digitado do teclado e tem opções adicionais.

![](../assets/en/FormObjects/combo_box.png)

Em outros aspectos, você deve tratar uma combo box como uma área editável que usa seu array ou uma lista de escolha como um conjunto de valores padrão.

## Gestão do combo boxes

Use o evento `On Data Change` para gerenciar entradas em uma área editável, como faria em qualquer objeto área editável.

Você inicializa um combo box exatamente da mesma forma que uma [lista suspensa](dropdownList_Overview.md#overview): usando um objeto, um array ou uma lista de opções.

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection.md) can be used as the data source of a combo box. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                                     |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:<li>strings</li><li>números</li><li>datas</li><li>horas</li>Se estiver vazia ou não for definida, a caixa combinada está vazia |
| `currentValue` | igual a Colecção | Texto introduzido pelo usuário                                                                                                                                                                                                                                                |

Se o objeto contiver outras propriedades, estas são ignoradas.

Quando o usuário insere um texto na caixa de combinação, a propriedade `currentValue` do objeto obtém o texto inserido.

### Usar um array

Consulte **Usando um array** na [página lista suspensa](dropdownList_Overview.md#using-an-array) para obter informações sobre como inicializar o array.

Um combo box é iniciado em exatamente da mesma forma que uma lista drop down Se o usuário digitar texto em uma combo box, preenche o 0imo elemento do array.

### Utilizar uma lista de seleção

Se quiser usar uma caixa de combinação para gerenciar os valores de uma área de entrada (campo listado ou variável), 4D permite referenciar o campo ou a variável diretamente como a fonte de dados do objeto formulário. Isso facilita gerenciar variáveis/campos listados.
> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Para associar uma combo box a um campo ou variável, basta digitar o nome do campo ou da variável diretamente em [Variável ou Expressão](properties_Object.md#variable-or-expression) do objeto formulário na Lista de propriedades.

Quando o formulário é executado, 4D gerencia automaticamente a caixa de combinação durante a entrada ou exibição: quando um usuário escolhe um valor, ele é salvo no campo; esse valor de campo é mostrado na caixa de combinação quando o formulário é exibido:

Consulte **Usando uma opção** na [página da lista suspensa](dropdownList_Overview.md#using-a-choice-list) para obter mais informações.

## Opções

Objetos do tipo combo box aceitam duas opções específicas referentes a listas de escolhas associadas com elas:

- [Inserção automática](properties_DataSource.md#automatic-insertion): permite adicionar um valor automaticamente a uma lista armazenada na memória quando um usuário digitar um valor que não é encontraddo na lista de escolhas associadas com uma combo box.
- [Excluded List](properties_RangeOfValues.md#excluded-list) (lista de valores excluídos): permite estabelecer uma lista cujos valores não podem ser digitados na combo box. Se um valor excluído for digitado, não será aceito e uma mensagem de erro é exibido.
> > > Associating a [list of required values](properties_RangeOfValues.md#required-list) is not available for combo boxes. Em uma interface, se um objeto precisar propor uma lista finita de valores exigidos, então deve usar um objeto  [do tipo menu Pop-up](dropdownList_Overview.md#overview) .

## Propriedades compatíveis

[Formato alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - [Tipo de expressão](properties_Object.md#expression-type) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Formato de hora](properties_Display.md#time-format) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
