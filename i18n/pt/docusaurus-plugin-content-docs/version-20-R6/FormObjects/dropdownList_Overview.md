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

An [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) can be used as the data source of a drop-down list. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo             | Descrição                                                                                                                                                                                                                                                               |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection       | Obrigatório - Coleção de valores escalares. Todos os valores devem ser do mesmo tipo. Tipos suportados:<li>cadeias</li><li>números</li><li>datas</li><li>horas</li>se estiver vazio ou não, a lista suspensa está vazia |
| `index`        | number           | Índice del elemento seleccionado actualmente (valor comprendido entre 0 y `collection.length-1`). Si se establece -1, `currentValue` se muestra como una cadena de marcador de posición                                              |
| `currentValue` | igual a Colecção | Item atualmente selecionado (utilizado como valor de marcador de posição se definido por código)                                                                                                                                                     |

Se o objeto contiver outras propriedades, estas são ignoradas.

Objetos lista drop down são iniciados ao carregar uma lista de valores em um array. Pode fazer isso de várias maneiras:

- Enter a list of default values in the object properties by selecting `\<Static List>` in the [Data Source](properties_DataSource.md) theme of the Property List. Os valores por defeito são carregados automaticamente para um objeto.

- Executar código que cria o objeto e as suas propriedades. Por ejemplo, si "myList" es la variable  asociada a la lista desplegable, puede escribir en el evento de formulario [On Load](Events/onLoad.md):

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

An [array](Concepts/arrays.md) is a list of values in memory that is referenced by the name of the array. Uma lista drop down exibe um array como lista de valores quando clicar nela.

Para inicializar o array associado à lista pendente, pode:

- Enter a list of default values in the object properties by selecting `\<Static List>` in the [Data Source](properties_DataSource.md) theme of the Property List. Os valores padrão são carregados em um array automático. Pode fazer uma referência ao array usando o nome da variável associado com o objeto.

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

En este caso, el nombre de la [variable](properties_Object.md#variable-or-expression) asociada al objeto en el formulario debe ser `aCities`. Este código podría colocarse en el método formulario y ejecutarse cuando se ejecute el evento formulario `On Load`.

- Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html). Por exemplo:

```4d
   LIST TO ARRAY("Cities";$aCities)
```

In this case also, the name of the [variable](properties_Object.md#variable-or-expression) associated with the object in the form must be `aCities`. Este código pode ser executado ao invés das sentenças de atribuição mostradas anteriormente.

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

Si desea utilizar una lista desplegable para gestionar los valores de un área de entrada (campo listado o variable), 4D le permite hacer referencia al campo o variable directamente como [fuente de datos](properties_Object.md#variable-or-expression) de la  Isso facilita gerenciar variáveis/campos listados.

Por exemplo, no caso de um campo "Cor" que só possa conter os valores "White", "Blue", "Green" ou "Red", agora é possível criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que faça referência ao campo "Color". 4D então se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formulário.

> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado. If you use a hierarchical list, only the first level is displayed and can be selected.

To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the [Variable or Expression](properties_Object.md#variable-or-expression) field of the drop-down list in the Property List.

> Não é possível combinar esse princípio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na área Nome da variável, deve usar uma lista de seleção.

Quando o formulário for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualização: quando um usuário escolher um valor, é salvo no campo; esse valor de campo é mostrado no menu pop up quando o formulário for exibido:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)

#### Valor do item selecionado ou Referência do item selecionado

When you have associated a drop-down list with a choice list and with a field or a variable, you can set the [**Data Type**](properties_DataSource.md#data-type) property to **Selected item value** or **Selected item reference**. Essa opção permite otimizar o tamanho dos dados salvos.

### Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

A hierarchical drop-down list has a sublist associated with each item in the list. Eis um exemplo de uma lista pendente hierárquica:

![](../assets/en/FormObjects/popupDropdown_hierar.png)

> Nos formulários, as listas pendentes hierárquicas estão limitadas a dois níveis.

Puede asignar la lista de selección jerárquica al objeto de lista desplegable utilizando el campo [Lista de selección](properties_DataSource.md#choice-list) de la Lista de propiedades.

You manage hierarchical drop-down lists using the **Hierarchical Lists** commands of the 4D Language. All commands that support the `(*; "name")` syntax can be used with hierarchical  drop-down lists, e.g. [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).

### Usar uma ação padrão

Puede crear automáticamente una lista desplegable utilizando una acción estándar . Esta funcionalidade é suportada nos seguintes contextos:

- Uso da ação padrão `gotoPage`. En este caso, 4D mostrará automáticamente la [página del formulario](FormEditor/forms.md#form-pages) que corresponda al número del elemento seleccionado. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).

- Uso de uma ação padrão que exibe uma sub-lista de itens, por exemplo, `backgroundColor`. Essa funcionalidade exige que:
  - a styled text area ([4D Write Pro area](writeProArea_overview.md) or [input](input_overview.md) with [multistyle](properties_Text.md#multi-style) property) is present in the form as the standard action target.
  - la propiedad [focusable](properties_Entry.md#focusable) no está definida en la lista desplegable.
    At runtime the drop-down list will display an automatic list of values, e.g. background colors. Pode substituir esta lista automática atribuindo além disso uma lista de seleção na qual cada elemento tenha atribuída uma ação padrão personalizada.

> Esta funcionalidade não pode ser utilizada com uma lista pendente hierárquica.

## Propriedades compatíveis

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (expression type)](properties_DataSource.md#data-type-expression-type) - [Data Type (list)](properties_DataSource.md#data-type-list) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
