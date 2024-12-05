---
id: dropdownListOverview
title: Lista suspensa ou drop down
---

## Visão Geral

As listas drop-down são objetos que permitem que o usuário selecione de uma lista. You manage the items displayed in the drop-down list using an array, a choice list, or a standard action.

Em macOS, listas drop down são também chamadas de "menu pop up" Ambos os nomes referem aos mesmos objetos. Ambos os nomes referem aos mesmos objetos. Como no exemplo abaixo, a aparência desses objetos podem diferenciar levemente de acordo com a plataforma:

![](../assets/en/FormObjects/popupDropdown_appearance.png)

## Usar um array

Um [array](Concepts/arrays.md) é uma lista de valores na memória que são referenciados pelo nome do array. A drop-down list displays an array as a list of values when you click on it.

Drop-down list objects are initialized by loading a list of values into an array. Isto pode ser feito de várias formas:

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

Deve selecionar cada [evento] que você testa em sua instrução Case. Os arrays sempre contém um número finito de elementos. A lista de elementos é dinâmica e pode ser modificada por um método. Itens em um array podem ser modificados, ordenados e terem itens adicionados.

## Utilizar uma lista de seleção

If you want to use a drop-down list to manage the values of a listed field or variable, 4D lets you reference the field or variable directly as the object's data source. Isso facilita gerenciar variáveis/campos listados.
> Se usar uma lista hierárquica, só o primeiro nível é mostrado e pode ser selecionado.

For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is now possible to create a list containing these values and associate it with a pop-up menu object that references the 4D "Color" field. 4D então se encarrega automaticamente de gerenciar o input e exibir os valores atuais no formulário.

To associate a pop-up menu/drop-down list or a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the object in the Property List.

When the form is executed, 4D automatically manages the pop-up menu or combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the pop-up menu when the form is displayed:

![](../assets/en/FormObjects/popupDropdown_choiceList.png)
> Não é possível combinar este princípio com a utilização de um array para inicializar o objeto. If you enter a field name in the Variable Name area, then you must use a choice list.

### Salvar como

When you have associated a pop-up menu/drop-down list with a choice list and with a field, you can use the [Save as Value/Reference property](properties_DataSource.md#save-as). Essa opção permite otimizar o tamanho dos dados salvos.

## Usar uma ação padrão

Você pode atribuir uma ação padrão a um objeto pop-up menu/lista suspensa (tema [Ação](properties_Action.md#standard-action) da Lista de propriedades). Only actions that display a sublist of items (except the goto page action) are supported by this object. For example, if you select the `backgroundColor` standard action, at runtime the object will display an automatic list of background colors. You can can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action.

For more information, please refer to the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section.

## Propriedades compatíveis

[Formato alfa](properties_Display.md#alpha-format) - [Negrito](properties_Text.md#bold) - [Parte inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botão](properties_TextAndPicture.md#button-style) - [Lista de opções](properties_DataSource.md#choice-list) - [Classe](properties_Object.md#css-class) - [Formato de data](properties_Display.md#date-format) - [Tipo de expressão](properties_Object.md#expression-type) - [Foco](properties_Entry.md#focusable) - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Não renderizado](properties_Display.md#not-rendered) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Ação padrão](properties_Action.md#standard-action) - [Salvar como](properties_DataSource.md#save-as) - [Formato de hora](properties_Display.md#time-format) - [Parte superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
