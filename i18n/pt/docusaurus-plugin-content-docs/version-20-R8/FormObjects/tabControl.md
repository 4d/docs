---
id: tabControl
title: Controles Abas
---

Uma guia cria um objeto que permite que o usuário escolha entre várias telas virtuais exibidas nos limites da guia. O usuário acessa cada tela clicando na guia correspondente.

O seguinte formulário de várias páginas utiliza um objeto de controlo de pestanas:

![](../assets/en/FormObjects/tabControl1.png)

Para passar de uma tela para outra, o usuário simplesmente clica na guia correspondente.

As telas podem representar páginas em um formulário de várias páginas ou um objeto que muda quando o usuário clica em uma guia. Se o controle de guias é usado como uma ferramenta de navegação de página, então o [`FORM GOTO PAGE`](https://doc.4d.comando/4dv19/help/command/en/page247.html) ou a ação padrão `gotoPage` seria usada quando um usuário clica em uma aba.

Outra utilização do controlo de separadores consiste em controlar os dados apresentados num subformulário. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control’s action would be to load the data corresponding to the letter that the user clicked.

Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno ícone. Se incluir ícones, estes aparecem à esquerda de cada etiqueta. Aqui está um exemplo de um controlo de pestanas que utiliza ícones:

![](../assets/en/FormObjects/tabControl2.png)

When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list.

If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can’t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usuário deslocar os ícones para a esquerda ou para a direita.

Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom.

### Exemplo JSON:

```4d
	"myTab": {
		"type": "tab",
 		"left": 60,	
		"top": 160,	 
		"width": 100,	
		"height": 20,	
		"labelsPlacement": "bottom"	//define a direção
	}
```

## Adicionando etiquetas a um controle de tabulação

To supply the labels for a tab control, you can use:

- um objeto
- uma lista de escolha
- um array

### Utilização de um objecto

Você pode atribuir um [objeto](Concepts/dt_object.md) encapsulando uma [collection](../Concepts/dt_collection.md) como a [fonte de dados](properties_Object.md#variable-or-expression) do controle de abas. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo       | Descrição                                                                                                                                                                                  |
| -------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `valores`      | Collection | Obrigatório - Coleção de valores escalares. Só são suportados valores cadeia. Se for inválido, vazio ou não definido, o controle de tabulação estará vazio |
| `index`        | number     | Índice da página de controle de guia atualmente (valor entre 0 e `collection.length-1`)                                                                                 |
| `currentValue` | Text       | Valor atual selecionado                                                                                                                                                                    |

The initialization code must be executed before the form is presented to the user.

En el siguiente ejemplo, `Form.tabControl` se ha definido como [expresión](properties_Object.md#variable-or-expression) del control de pestañas. Você pode associar a [ação padrão `gotoPage`](#goto-page-action) ao objeto do formulário:

```4d
Form.tabControl:=New object Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //start on page 3
```

### Utilizar uma lista de seleção

Puede asignar una [lista de opciones](properties_DataSource.md#choice-list-static-list) al control de pestañas, ya sea a través de una colección (lista estática) o un puntero JSON a una lista json ("$ref"). Icons associated with list items in the Lists editor will be displayed in the tob control.

### Utilizar um array texto

Você pode criar um array Text que contenha os nomes de cada página do formulário. Este código deve ser executado antes de o formulário ser apresentado ao usuário. Por exemplo, você poderia colocar o código no método objeto do controle de guia e executá-lo quando o evento `On Load` ocorrer.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

> Você também pode armazenar os nomes das páginas em uma lista hierárquica e usar o comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) para carregar os valores no array.

## Funcionalidades do Goto page

### Comando FORM GOTO PAGE

Você pode usar o comando [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) no método do controle de aba:

```4d
FORM GOTO PAGE(arrPages)
```

O comando é executado quando o evento [`On Clicked`](Events/onClicked.md) ocorre. Em seguida, você deve limpar o array quando o evento [`No Unload`](Events/onUnload.md) ocorrer.

Eis um exemplo de método objeto:

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### Acção Goto Page

Quando você atribuir a [ação padrão](properties_Action.md#padrao) `gotoPage` para o controle de abas, o 4D exibirá automaticamente a página do formulário que corresponde ao número da guia selecionada.

Por exemplo, se o usuário selecionar a terceira aba, 4D exibirá a terceira página do formulário atual (se existir).

## Propriedades compatíveis

[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list-static-list) - [Clase](properties_Object.md#css-class) - [Tipo de expressão](properties_Object.md#expression-type) - [Fonte](properties_Text.md#font) -  - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensagem de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Guardar valor](properties_Object.md#save-value) - [Ação padrão](properties_Action.md#standard-action) - [Direção do controle de tabulação](properties_Appearance.md#tab-control-direction) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Variable ou expressão](properties_Object.md#variable-or-expression) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)
