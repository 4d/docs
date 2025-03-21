---
id: picturePopupMenuOverview
title: Menu pop-up imagem
---

Um menu pop-up imagem é um menu pop-up que exibe um array de imagens bidimensional. Um menu pop-up imagem pode ser usado em vez de um [botão imagem](pictureButton_overview.md). A criação da imagem a ser usada com um menu pop-up imagem é semelhante à criação de uma imagem para um botão imagem. O conceito é o mesmo das [grades de botões](buttonGrid_overview.md), exceto pelo fato de que o gráfico é usado como um menu pop-up em vez de um objeto do formulário.


## Utilizar os menus emergentes de imagens

Para criar um menu pop-up imagem, você precisa [fazer referência a uma imagem](properties_Picture.md#pathname). O exemplo a seguir permite que você selecione o idioma da interface selecionando-o em um menu pop-up imagem. Cada língua é representada pela bandeira correspondente:

![](../assets/en/FormObjects/picturePopupMenu_example.png)

### Programação

Pode gerir os menus pop-up de imagens utilizando métodos. Como as [grades dos botões](buttonGrid_overview.md), variáveis associadas aos menus imagem são definidas com o valor do elemento selecionado no menu pop-up imagem. Se nenhum elemento for seleccionado, o valor é 0. Os elementos são numerados, linha a linha, da esquerda para a direita, começando pela linha superior.


### Ir para página

Você pode atribuir a [ação padrão](https://doc.4d.com/4Dv19R4/4D/19-R4/Standard-actions.300-5736871.en.html) `gotoPage` para um menu pop-up imagem. Quando essa ação for selecionada, 4D exibirá automaticamente a página do formulário que corresponde à posição da imagem selecionada na array de imagens. Os elementos são numerados da esquerda para a direita e de cima para baixo, começando pelo canto superior esquerdo.

Por exemplo, se o usuário selecionar o terceiro elemento, 4D exibirá a terceira página do formulário atual (se existir). Se quiser gerenciar você mesmo o efeito de um clique, selecione `Nenhuma ação`.




## Propriedades compatíveis
[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) -[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows)- [Standard action](properties_Action.md#standard-action) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  