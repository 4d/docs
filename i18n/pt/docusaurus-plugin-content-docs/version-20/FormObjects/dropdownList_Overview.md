---
id: dropdownListOverview
title: Lista suspensa ou drop down
---

Listas drop-down são objetos que permitem que os usuários selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma ação padrão.

Em macOS, listas drop down são também chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a aparência desses objetos podem diferenciar levemente de acordo com a plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Tipos de listas pendentes

Pode criar diferentes tipos de listas pendentes com diferentes funcionalidades. Para definir um tipo, selecione os valores adequados **Tipo de expressão** e ** Tipo de dados** na lista Propriedade ou utilize o seu equivalente JSON.

| Tipo                                | Funcionalidades                                                      | Tipo de expressão | Tipo de dados                         | Definição JSON                                                                                                                                                |
| ----------------------------------- | -------------------------------------------------------------------- | ----------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Object                              | Construído sobre uma colecção                                        | Object            | Numeric, Text, Date, ou Time          | `dataSourceTypeHint: object` + `numberFormat: <format>` or `textFormat: <format>` ou `dateFormat: <format>` or `timeFormat: <format>` |
| Array                               | Construído sobre um array                                            | Array             | Numeric, Text, Date, ou Time          | `dataSourceTypeHint: arrayNumber` ou `arrayText` ou `arrayDate` ou `arrayTime`                                                                                |
| Lista de opções guardada como valor | Construído com base numa lista de opções (“padrão”)                  | Lista             | Valor do item seleccionado            | `dataSourceTypeHint: text` + `saveAs: value`                                                                                                                  |
| Salvar como                         | Construído sobre numa lista de escolha. A posição do item é guardada | Lista             | Referência do item seleccionado       | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                                           |
| Lista de seleção hierárquica        | Pode apresentar conteúdos hierárquicos                               | Lista             | Referência da lista                   | `dataSourceTypeHint: integer`                                                                                                                                 |
| Ação padrão                         | Criado automaticamente pela ação                                     | *any*             | *qualquer exceto referência de lista* | qualquer definição + `action:<action>` (+ `focusable: false` para ações que se aplicam a outras áreas)                                                  |

## Manuseamento de listas pendentes

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection.md) can be used as the data source of a drop-down list. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                                    |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:<li>strings</li><li>números</li><li>datas</li><li>horas</li>Se estiver vazia ou não for definida, a lista pendente está vazia |
| `index`        | number           | Índice do item selecionado no momento (valor entre 0 e `collection.length-1`). Se -1 for definido, `currentValue` será exibido como uma cadeia de caracteres de marcador de posição                                                                                          |
| `currentValue` | igual a Colecção | Item atualmente selecionado (utilizado como valor de marcador de posição se definido por código)                                                                                                                                                                             |

Se o objeto contiver outras propriedades, estas são ignoradas.

Objetos lista drop down são iniciados ao carregar uma lista de valores em um array. Pode fazer isso de várias maneiras:

* Insira uma lista de valores padrão nas propriedades do objeto selecionando `\&#060;Static List&#062;` no tema [Fonte de dados](properties_DataSource.md) da Lista de propriedades. Os valores por defeito são carregados automaticamente para um objeto.

* Executar código que cria o objeto e as suas propriedades. Por exemplo, se "myList" for a [variable](properties_Object.md#variable-or-expression) associada à lista suspensa, você poderá escrever no evento de formulário [On Load](Events/onLoad.md):

```4d
// Form.myDrop é a datasource do objeto do formulário

Form.myDrop:=New object
Form.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
Form.myDrop.index:=-1 //currentValue é um placeholder
Form.myDrop.currentValue:="Select a fruit" 
```

A lista suspensa é exibida com a string de placeholder:

![](../assets/en/FormObjects/fruits2.png)

Depois de o utilizador selecionar um valor:

![](../assets/en/FormObjects/fruits3.png)

```4d
Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]
Form.myDrop.currentValue //"oranges" Form.myDrop.index //3
```

### Usar um array

Um [array](Concepts/arrays.md) é uma lista de valores na memória que são referenciados pelo nome do array. Uma lista drop down exibe um array como lista de valores quando clicar nela.

Para inicializar o array associado à lista pendente, pode:

* Insira uma lista de valores padrão nas propriedades do objeto selecionando `\&#060;Static List&#062;` no tema [Fonte de dados](properties_DataSource.md) da Lista de propriedades. Os valores padrão são carregados em um array automático. Pode fazer uma referência ao array usando o nome da variável associado com o objeto.

* Antes que o objeto seja exibido, execute um código que atribua valores aos elementos do array. Por exemplo:

```4d
  ARRAY TEXT($aCities;6)
  $aCities{1}:="Philadelphia"
  $aCities{2}:="Pittsburg"
  $aCities{3}:="Grand Blanc"
  $aCities{4}:="Bad Axe"
  $aCities{5}:="Frostbite Falls"
  $aCities{6}:="Green Bay" 
```

Neste caso, o nome da variável associada ao objeto de formulário deve ser *$aCities*. Esse código pode ser colocado no método formulário e executado quando o evento de formulário `On Load` acontecer.

* Antes que o objeto seja exibido, carregue os valores para uma lista em um array usando o comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html). Por exemplo:

```4d
   LIST TO ARRAY("Cities";$aCities)
```

Neste caso também o nome da variável asociada al objeto del formulario debe ser *$aCities*. Este código pode ser executado ao invés das sentenças de atribuição mostradas anteriormente.

Se precisar salvar as escolhas do usuário em um campo, precisa usar uma declaração de atribuição que rode depois que o registro seja aceito. O código poderia ser assim:

```4d
  Caso de
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) `novo registo
          aCities:=3 `apresentar um valor predefinido
       Else `registo existente, apresentar valor armazenado
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) `o utilizador modificou a selecção
       City:=aCities{aCities} `o campo recebe um novo valor
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

Deve selecionar cada event que teste nas estruturas Case. Os arrays sempre contém um número finito de elementos. A lista de elementos é dinâmica e pode ser modificada por um método. Itens em um array podem ser modificados, ordenados e terem itens adicionados.

### Utilizar uma lista de seleção

Se quiser usar uma lista drop down para gerenciar os valores de um campo ou lista variável, 4D permite referir o campo ou variável diretamente como fonte de dados do objeto. Isso facilita gerenciar variáveis/campos listados.

Por exemplo, no caso de um campo "Cor" que só possa conter os valores "White", "Blue", "Green" ou "Red", agora é possível criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que faça referência ao campo "Color". 4D então se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formulário.
> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado. Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Para associar um menu pop up/lista drop down ou um combo box com um campo ou variável, pode digitar o nome do campo ou variável diretamente no campo [Variável ou Expressão](properties_Object.md#variable-or-expression) do objeto na Lista Propriedade.
> Não é possível combinar esse princípio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na área Nome da variável, deve usar uma lista de seleção.

Quando o formulário for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualização: quando um usuário escolher um valor, é salvo no campo; esse valor de campo é mostrado no menu pop up quando o formulário for exibido:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)

#### Valor do item selecionado ou Referência do item selecionado

Quando associar um menu pop up/lista drop down com uma lista de escolhas e com um campo, pode usar a propriedade [Save as Value/Reference](properties_DataSource.md#save-as). Essa opção permite otimizar o tamanho dos dados salvos.

### Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Uma lista suspensa hierárquica tem uma sub-lista associada a cada item da lista. Eis um exemplo de uma lista pendente hierárquica:

![](../assets/en/FormObjects/popupDropdown_hierar.png)

> Nos formulários, as listas pendentes hierárquicas estão limitadas a dois níveis.

Você pode atribuir a lista de opções hierárquicas para o objeto da lista suspensa usando o campo [Lista de opções](properties_DataSource.md#choice-list) da Lista de Propriedades.

Pode gerenciar as listas suspensas hierárquicas usando os comandos **listas hierárquicas** da linguagem 4D. Todos os comandos que suportam a sintaxe `(*; "name")` podem ser utilizados com listas pendentes hierárquicas, por exemplo, [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).

### Usar uma ação padrão

Pode atribuir uma ação padrão a menu pop up ou lista drop down ([Action](properties_Action.md#standard-action) tema da Lista de Propriedades). Esta funcionalidade é suportada nos seguintes contextos:

* Utilização da ação padrão `gotoPage`. Nesse caso, 4D exibirá automaticamente a [página do formulário](FormEditor/forms.md#form-pages) que corresponde ao número do item selecionado. Por exemplo, se o usuário selecionar o terceiro item, 4D exibirá a terceira página do formulário atual (se existir). No tempo de execução, por padrão a lista suspensa exibe os números de página (1, 2...).

* Por exemplo, se selecionar a ação padrão `backgroundColor`, no tempo de execução o objeto mostrará uma lista automática de cores de fundo. Essa funcionalidade exige que:
  * uma área de texto com estilo ([area 4D Write Pro](writeProArea_overview.md) ou [entrada](input_overview.md) com a propriedade [multistyle](properties_Text.md#multi-style)) está presente no formulário como o alvo da ação padrão.
  * a propriedade [focusable](properties_Entry.md#focusable) não esteja definida para a lista suspensa. Em tempo de execução, a lista suspensa exibirá uma lista automática de valores, por exemplo, cores de fundo. Pode substituir esta lista automática atribuindo além disso uma lista de seleção na qual cada elemento tenha atribuída uma ação padrão personalizada.

> Esta funcionalidade não pode ser utilizada com uma lista pendente hierárquica.

## Propriedades compatíveis

[Formato alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botão](properties_TextAndPicture.md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Tipo de dados (tipo de expressão)](properties_DataSource.md#data-type-expression-type) - [Tipo de dados (lista)](properties_DataSource.md#data-type-list) - [Formato de data](properties_Display.md#date-format) - [Tipo de expressão](properties_Object.md#expression-type) - [Foco](properties_Entry.md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Ação padrão](properties_Action.md#standard-action) - [Salvar valor](properties_Object.md#save-value) - [Formato de hora](properties_Display.md#time-format) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
