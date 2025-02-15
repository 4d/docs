---
id: tabControl
title: Controles Abas
---

Uma guia cria um objeto que permite que o usuário escolha entre várias telas virtuais exibidas nos limites da guia. O usuário acessa cada tela clicando na guia correspondente.

O seguinte formulário de várias páginas utiliza um objeto de controlo de pestanas:

![](../assets/en/FormObjects/tabControl1.png)

Para passar de uma tela para outra, o usuário simplesmente clica na guia correspondente.

As telas podem representar páginas em um formulário de várias páginas ou um objeto que muda quando o usuário clica em uma guia. Se o controle de tabulação for usado como uma ferramenta de navegação de página, o comando [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) ou a ação padrão `gotoPage` será usada quando um usuário clicar em uma tabulação.

Outra utilização do controlo de separadores consiste em controlar os dados apresentados num subformulário. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. As guias mostrariam as letras do alfabeto e a ação do controle do guia seria carregar os dados correspondentes à letra que o usuário clicou.

Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno ícone. Se incluir ícones, estes aparecem à esquerda de cada etiqueta. Aqui está um exemplo de um controlo de pestanas que utiliza ícones:

![](../assets/en/FormObjects/tabControl2.png)

Quando você cria um controle de abas, 4D gerencia o espaçamento e posicionamento das abas. Você só precisa fornecer as etiquetas na forma de um array, ou os ícones e etiquetas na forma de uma lista hierárquica.

Se o controle de tabulações é largo o suficiente para exibir todas as abas com rótulos e ícones, isso exibe ambos. Se o controle de guias não for suficientemente amplo para exibir ambos os rótulos e ícones, 4D exibe apenas os ícones. Se ele não serve todos os ícones, coloca as setas de rolagem à direita da última aba visível. As setas de deslocamento permitem ao usuário deslocar os ícones para a esquerda ou para a direita.

No macOS, além da posição padrão (superior), os controles de aba também podem ser alinhados ao fundo.


### Exemplo JSON:

```4d
    "myTab": {
  "type": "tab",
   "left": 60, 
  "top": 160,  
  "width": 100, 
  "height": 20, 
  "labelsPlacement": "bottom" //define the direction
 }
```



## Adicionando etiquetas a um controle de tabulação

Para fornecer as etiquetas para o controle de abas, você pode usar:

- um objeto
- uma lista de escolha
- um array

### Utilização de um objecto

You can assign an [object](Concepts/dt_object.md) encapsulating a [collection](Concepts/dt_collection) as the [data source](properties_Object.md#variable-or-expression) of the tab control. O objeto deve conter as seguintes propriedades:

| Propriedade    | Tipo       | Descrição                                                                                                                                                  |
| -------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | Collection | Obrigatório - Coleção de valores escalares. Só são suportados valores cadeia. Se for inválido, vazio ou não definido, o controle de tabulação estará vazio |
| `index`        | number     | Índice da página de controle de guia atualmente (valor entre 0 e `collection.length-1`)                                                                    |
| `currentValue` | Text       | Valor atual selecionado                                                                                                                                    |

O código de inicialização deve ser executado antes que o formulário seja apresentado ao usuário.

No exemplo a seguir, `Form.tabControl` foi definido como [expressão](properties_Object.md#variable-or-expression) de controle de tabulação. Você pode associar a ação padrão [`gotoPage`](#goto-page-action) ao objeto formulário:

```4d
Form.tabControl:=New object Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //start on page 3
```


### Utilizar uma lista de seleção

Você pode atribuir uma [lista de valores](properties_DataSource.md#choice-list-static-list) ao controle de abas através de uma coleção (lista estática) ou um ponteiro JSON ("$ref") para uma lista de json"). Icons associated with list items in the Lists editor will be displayed in the tob control.

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

Você pode usar o [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) no método do controle de tabulação:

```4d
FORM GOTO PAGE(arrPages)
```

O comando é executado quando o botão [`On Clicked`](Events/onClicked.md) ocorre. Em seguida, você deve excluir o array quando ocorrer o evento [`On Unload`](Events/onUnload.md).

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

Quando você atribuir a [ação padrão](properties_Action.md#standard-action) `gotoPage` para um objeto do tipo Tab, 4D irá exibir automaticamente a página do formulário que corresponde ao número da guia selecionada.

Por exemplo, se o usuário selecionar a terceira aba, 4D exibirá a terceira página do formulário atual (se existir).



## Propriedades compatíveis

[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opções](properties_DataSource.md#choice-list-static-list) - [Classe](properties_Object.md#css-class) - [Tipo de expressão](properties_Object.md#expression-type) - [Fonte](properties_Text.md#font) - [Tamanho de fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensagem de ajuda](properties_Help.md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome de objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Ação padrão](properties_Action.md#standard-action) - [Direção de controle aba](properties_Appearance.md#tab-control-direction) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Tamanho vertical](properties_ResizingOptions.md#vertical-sizing) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width) 
