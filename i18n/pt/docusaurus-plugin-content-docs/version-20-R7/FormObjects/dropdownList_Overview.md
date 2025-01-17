---
id: dropdownListOverview
title: Lista suspensa ou drop down
---

Listas drop-down são objetos que permitem que os usuários selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma ação padrão.

Em macOS, listas drop down são também chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a aparência desses objetos podem diferenciar levemente de acordo com a plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Tipos de listas pendentes

Pode criar diferentes tipos de listas pendentes com diferentes funcionalidades. Para definir un tipo, seleccione los valores apropiados **Tipo de expresión** y **Tipo de datos** en la lista Propiedades o utilice su equivalente JSON.

| Tipo                                | Funcionalidades                                                                      | Tipo de expressão | Tipo de dados                         | Definição JSON                                                                                                                      |
| ----------------------------------- | ------------------------------------------------------------------------------------ | ----------------- | ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Object                              | Construído sobre uma colecção                                                        | Object            | Numeric, Text, Date, ou Time          | `dataSourceTypeHint: object` + `numberFormat: <format>` or `textFormat: <format>` o `dateFormat: <format>` o `timeFormat: <format>` |
| Array                               | Construído sobre um array                                                            | Array             | Numeric, Text, Date, ou Time          | `dataSourceTypeHint: arrayNumber` o `arrayText` o `arrayDate` o `arrayTime`                                                         |
| Lista de opções guardada como valor | Construído com base numa lista de opções (“padrão”)               | Lista             | Valor do item seleccionado            | `dataSourceTypeHint: text` + `saveAs: value`                                                                                        |
| Salvar como                         | Construído sobre numa lista de escolha. A posição do item é guardada | Lista             | Referência do item seleccionado       | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                 |
| Lista de seleção hierárquica        | Pode apresentar conteúdos hierárquicos                                               | Lista             | Referência da lista                   | `dataSourceTypeHint: integer`                                                                                                       |
| Ação padrão                         | Criado automaticamente pela ação                                                     | *qualquer*        | *qualquer exceto referência de lista* | toda definición + `action: <action>` (+ `focusable: false` para acciones que se aplican a otras áreas)           |

## Manuseamento de listas pendentes

### Utilização de um objecto

> Esta funcionalidade só está disponível em projectos 4D.

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection.md) can be used as the data source of a drop-down list. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                               |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:<li>cadeias</li><li>números</li><li>datas</li><li>horas</li>se estiver vazio ou não, a lista suspensa está vazia |
| `index`        | number           | Índice do item selecionado no momento (valor entre 0 e `collection.length-1`). Se você definir -1, `currentValue` será exibido como uma cadeia de caracteres de espaço reservado                                                     |
| `currentValue` | igual a Colecção | Item atualmente selecionado (utilizado como valor de marcador de posição se definido por código)                                                                                                                                                     |

Se o objeto contiver outras propriedades, estas são ignoradas.

Objetos lista drop down são iniciados ao carregar uma lista de valores em um array. Pode fazer isso de várias maneiras:

- Insira uma lista de valores padrão nas propriedades do objeto selecionando `\<Static List>` no tema [Data Source] (properties_DataSource.md) da Property List. Os valores por defeito são carregados automaticamente para um objeto.

- Executar código que cria o objeto e as suas propriedades. Por exemplo, se "myList" for a [variable](properties_Object.md#variable-or-expression) associada à lista suspensa, você poderá escrever no evento de formulário [On Load](Events/onLoad.md):

```4d
// Form.myDrop é a datasource do objeto formulário
 
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

Uma [matriz] (Concepts/arrays.md) é uma lista de valores na memória que é referenciada pelo nome da matriz. Uma lista drop down exibe um array como lista de valores quando clicar nela.

Para inicializar o array associado à lista pendente, pode:

- Insira uma lista de valores padrão nas propriedades do objeto selecionando `\<Static List>` no tema [Data Source] (properties_DataSource.md) da Property List. Os valores padrão são carregados em um array automático. Pode fazer uma referência ao array usando o nome da variável associado com o objeto.

- Antes que o objeto seja exibido, execute um código que atribua valores aos elementos do array. Por exemplo:

```4d
  ARRAY TEXT($aCities;6)
  $aCities{1}:="Philadelphia"
  $aCities{2}:="Pittsburg"
  $aCities{3}:="Grand Blanc"
  $aCities{4}:="Bad Axe"
  $aCities{5}:="Frostbite Falls"
  $aCities{6}:="Green Bay" 
```

Nesse caso, o nome da [variável] (properties_Object.md#variable-or-expression) associada ao objeto no formulário deve ser `aCities`. Esse código pode ser colocado no método do formulário e ser executado quando o evento `On Load` do formulário for executado.

- Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html). Por exemplo:

```4d
   LIST TO ARRAY("Cities";$aCities)
```

Nesse caso também, o nome da [variável](properties_Object.md#variable-or-expression) associada ao objeto no formulário deve ser `aCities`. Este código pode ser executado ao invés das sentenças de atribuição mostradas anteriormente.

Se precisar salvar as escolhas do usuário em um campo, precisa usar uma declaração de atribuição que rode depois que o registro seja aceito. O código poderia ser assim:

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) `new record
          aCities:=3 `display a default value
       Else `existing record, display stored value
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) `user modified selection
       City:=aCities{aCities} `field gets new value
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

Deve selecionar cada event que teste nas estruturas Case. Os arrays sempre contém um número finito de elementos. A lista de elementos é dinâmica e pode ser modificada por um método. Itens em um array podem ser modificados, ordenados e terem itens adicionados.

### Utilizar uma lista de seleção

Se quiser usar uma lista suspensa para gerenciar os valores de uma área de entrada (campo ou variável listada), 4D permite que você faça referência ao campo ou à variável diretamente como [fonte de dados] da lista suspensa (properties_Object.md#variable-or-expression). Isso facilita gerenciar variáveis/campos listados.

Por exemplo, no caso de um campo "Cor" que só possa conter os valores "White", "Blue", "Green" ou "Red", agora é possível criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que faça referência ao campo "Color". 4D então se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formulário.

> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado. Se quiser exibir conteúdos hierárquicos, você precisará usar uma [lista de opções hierárquicas] (#using-a-hierarchical-choice-list).

Para associar uma lista suspensa a um campo ou variável, digite o nome do campo ou da variável diretamente como o campo [Variable or Expression](properties_Object.md#variable-or-expression) da lista suspensa na Lista de propriedades.

> Não é possível combinar esse princípio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na área Nome da variável, deve usar uma lista de seleção.

Quando o formulário for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualização: quando um usuário escolher um valor, é salvo no campo; esse valor de campo é mostrado no menu pop up quando o formulário for exibido:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)

#### Valor do item selecionado ou Referência do item selecionado

Quando você tiver associado uma lista suspensa a uma lista de opções e a um campo ou variável, poderá definir a propriedade [**Data Type**] (properties_DataSource.md#data-type) como **Selected item value** ou **Selected item reference**. Essa opção permite otimizar o tamanho dos dados salvos.

### Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Uma lista suspensa hierárquica tem uma sub-lista associada a cada item da lista. Eis um exemplo de uma lista pendente hierárquica:

![](../assets/en/FormObjects/popupDropdown_hierar.png)

> Nos formulários, as listas pendentes hierárquicas estão limitadas a dois níveis.

Você pode atribuir a lista de opções hierárquicas ao objeto de lista suspensa usando o campo [Choice List](properties_DataSource.md#choice-list) da Lista de propriedades.

Pode gerenciar as listas suspensas hierárquicas usando os comandos **listas hierárquicas** do idioma 4D. Todos os comandos compatíveis com a sintaxe `(*; "name")` podem ser usados com listas suspensas hierárquicas, por exemplo, [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).

### Usar uma ação padrão

Você pode criar automaticamente uma lista suspensa usando uma [ação padrão] (properties_Action.md#standard-action). Esta funcionalidade é suportada nos seguintes contextos:

- Uso da ação padrão `gotoPage`. Nesse caso, o 4D exibirá automaticamente a [página do formulário] (FormEditor/forms.md#form-pages) que corresponde ao número do item selecionado. Por exemplo, se o usuário selecionar o terceiro item, 4D exibirá a terceira página do formulário atual (se existir). No tempo de execução, por padrão a lista suspensa exibe os números de página (1, 2...).

- Uso de uma ação padrão que exibe uma sub-lista de itens, por exemplo, `backgroundColor`. Essa funcionalidade exige que:
  - uma área de texto com estilo ([4D Write Pro area](writeProArea_overview.md) ou [input](input_overview.md) com a propriedade [multistyle](properties_Text.md#multi-style)) está presente no formulário como o alvo da ação padrão.
  - A propriedade [focusable](properties_Entry.md#focusable) não esteja definida para a lista suspensa.
    Em tempo de execução, a lista suspensa exibirá uma lista automática de valores, por exemplo, cores de fundo. Pode substituir esta lista automática atribuindo além disso uma lista de seleção na qual cada elemento tenha atribuída uma ação padrão personalizada.

> Esta funcionalidade não pode ser utilizada com uma lista pendente hierárquica.

## Propriedades compatíveis

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (expression type)](properties_DataSource.md#data-type-expression-type) - [Data Type (list)](properties_DataSource.md#data-type-list) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
