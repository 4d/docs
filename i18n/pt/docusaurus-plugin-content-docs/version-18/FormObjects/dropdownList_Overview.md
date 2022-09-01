---
id: dropdownListOverview
title: Lista suspensa ou drop down
---

## Visão Geral

Listas drop-down são objetos que permitem que os usuários selecionem de uma lista. Gerenciar os itens exibidos na lista drop down usando um array, uma lista de escolha ou uma ação padrão.

Em macOS, listas drop down são também chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a aparência desses objetos podem diferenciar levemente de acordo com a plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Usar um array

Um [array](Concepts/arrays.md) é uma lista de valores na memória que são referenciados pelo nome do array. Uma lista drop down exibe um array como lista de valores quando clicar nela.

Objetos lista drop down são iniciados ao carregar uma lista de valores em um array. Pode fazer isso de várias maneiras:

* Enter a list of default values in the object properties by selecting `"\&#060;Static List&#062;"` in the [Data Source](properties_DataSource.md) theme of the Property List. Os valores padrão são carregados em um array automático. Pode fazer uma referência ao array usando o nome da variável associado com o objeto.

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

* Antes que o objeto seja exibido, carregue os valores para uma lista em um array usando o comando [LIST TO ARRAY](https://doc.4d.com/4Dv17R5/4D/17-R5/LIST-TO-ARRAY.301-4127385.en.html). Por exemplo:

```4d
   LIST TO ARRAY("Cities";$aCities)
```

 Neste caso também o nome da variável asociada al objeto del formulario debe ser *$aCities*. Este código pode ser executado ao invés das sentenças de atribuição mostradas anteriormente.

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

Deve selecionar cada [event] que teste nas estruturas "For" de seu código. Os arrays sempre contém um número finito de elementos. A lista de elementos é dinâmica e pode ser modificada por um método. Itens em um array podem ser modificados, ordenados e terem itens adicionados.

## Utilizar uma lista de seleção

Se quiser usar uma lista drop down para gerenciar os valores de um campo ou lista variável, 4D permite referir o campo ou variável diretamente como fonte de dados do objeto. Isso facilita gerenciar variáveis/campos listados.
> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

Por exemplo, no caso de um campo "Cor" que só possa conter os valores "White", "Blue", "Green" ou "Red", agora é possível criar uma lista que contenha esses valores e associe-os a um objeto emergente menu que faça referência ao campo "Color". 4D então se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formulário.

Para associar um menu pop up/lista drop down ou um combo box com um campo ou variável, pode digitar o nome do campo ou variável diretamente no campo [Variável ou Expressão](properties_Object.md#variable-or-expression) do objeto na Lista Propriedade.

Quando o formulário for executado, 4D automaticamente gerencia o menu pop up ou com box durante a entrada ou a visualização: quando um usuário escolher um valor, é salvo no campo; esse valor de campo é mostrado no menu pop up quando o formulário for exibido:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)
> Não é possível combinar esse princípio com o uso de um array para iniciar o objeto. Se digitar um nome de campo na área Nome da variável, deve usar uma lista de seleção.

### Salvar como

Quando associar um menu pop up/lista drop down com uma lista de escolhas e com um campo, pode usar a propriedade [Save as Value/Reference](properties_DataSource.md#save-as). Essa opção permite otimizar o tamanho dos dados salvos.

## Usar uma ação padrão

Pode atribuir uma ação padrão a menu pop up ou lista drop down ([Action](properties_Action.md#standard-action) tema da Lista de Propriedades). Só as ações que exibam uma sublista de itens (exceto a ação de Ir para Página) são compatíveis com esse tipo de objeto. Por exemplo, se selecionar a ação padrão `backgroundColor`, no tempo de execução o objeto mostrará uma lista automática de cores de fundo. Pode substituir esta lista automática atribuindo além disso uma lista de seleção na qual cada elemento tenha atribuída uma ação padrão personalizada.

Para saber mais veja [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html)

## Propriedades compatíveis

[Formato Alfa](properties_Display.md#alpha-format) - [Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - \[Estilo del botón\](properties_TextAndPicture. md#button-style) - [Lista de opciones](properties_DataSource.md#choice-list) - [Clase](properties_Object.md#css-class) - [Formato de fecha](properties_Display.md#date-format) - \[Tipo de expresión\](properties_Object. md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de la fuente](properties_Text.md#font-color) - \[Tamaño de la fuente\](properties_Text. md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Consejo de ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - \[Italic\](properties_Text. md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [No renderizado](properties_Display.md#not-rendered) - \[Nombre del objeto\](properties_Object. md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Acción estándar](properties_Action.md#standard-action) - [Guardar como](properties_DataSource.md#save-as) - \[Formato de tiempo\](properties_Display. md#time-format) - [Superior](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - \[Variable o expresión\](properties_Object. md#variable-or-expression) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)  
