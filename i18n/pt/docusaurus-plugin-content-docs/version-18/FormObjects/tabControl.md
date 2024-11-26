---
id: tabControl
title: Controles Abas
---

Uma guia cria um objeto que permite que o usuário escolha entre várias telas virtuais exibidas nos limites da guia. O usuário acessa cada tela clicando na guia correspondente.

O seguinte formulário de várias páginas utiliza um objeto de controlo de pestanas:

![](../assets/en/FormObjects/tabControl1.png)

Para passar de uma tela para outra, o usuário simplesmente clica na guia correspondente.

As telas podem representar páginas em um formulário de várias páginas ou um objeto que muda quando o usuário clica em uma guia. If the tab control is used as a page navigation tool, then the [FORM GOTO PAGE](https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html) command or the `gotoPage` standard action would be used when a user clicks a tab.

Outra utilização do controlo de separadores consiste em controlar os dados apresentados num subformulário. Por exemplo, um Rolodex pode ser implementado utilizando um controlo de pestanas. The tabs would display the letters of the alphabet and the tab control’s action would be to load the data corresponding to the letter that the user clicked.

Cada pestana pode apresentar etiquetas ou etiquetas e um pequeno ícone. Se incluir ícones, estes aparecem à esquerda de cada etiqueta. Aqui está um exemplo de um controlo de pestanas que utiliza ícones:

![](../assets/en/FormObjects/tabControl2.png)

When you create a tab control, 4D manages the spacing and placement of the tabs. You only need to supply the labels in the form of an array, or the icons and labels in the form of a hierarchical list.

If the tab control is wide enough to display all the tabs with both the labels and icons, it displays both. If the tab control is not wide enough to display both the labels and icons, 4D displays the icons only. If it can’t fit all the icons, it places scroll arrows to the right of the last visible tab. As setas de deslocamento permitem ao usuário deslocar os ícones para a esquerda ou para a direita.

Under macOS, in addition to the standard position (top), the tab controls can also be aligned to the bottom.

### JSON Exemplo

```4d
 "myTab": {
  "type": "tab",
   "left": 60, 
  "top": 160,  
  "width": 100, 
  "height": 20, 
  "labelsPlacement": "bottom" //define a direção
}
```

## Adicionando etiquetas a um controle de tabulação

Há várias maneiras de fornecer as etiquetas para um controle de tabulação:

* Você pode atribuir uma [lista de valores](properties_DataSource.md#choice-list-static-list) ao controle de abas através de uma coleção (lista estática) ou um ponteiro JSON ("$ref") para uma lista de json. Os ícones associados aos itens da lista no editor de listas serão apresentados no controle de pestanas.
* Você pode criar um array Text que contenha os nomes de cada página do formulário. Este código deve ser executado antes de o formulário ser apresentado ao usuário. Por exemplo, você poderia colocar o código no método objeto do controle de guia e executá-lo quando o evento `On Load` ocorrer.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```
> Você também pode armazenar os nomes das páginas em uma lista hierárquica e usar o comando `Load list` para carregar os valores no array.

## Gerenciamento programada das abas

### Comando FORM GOTO PAGE

Você pode usar o comando [FORM GOTO PAGE](https://doc.4d.com/4Dv17R5/4D/17-R5/FORM-GOTO-PAGE.301-4128536.en.html) no método do controle da aba:

```4d
FORM GOTO PAGE(arrPages)
```

O comando é executado quando ocorre o evento `On Clicked`. Em seguida, você deve excluir o array quando ocorrer o evento `On Unload`.

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

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list-static-list) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Size](properties_Text.md#font-size)  - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Tab Control Direction](properties_Appearance.md#tab-control-direction) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
