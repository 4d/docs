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

[Negrito](properties_Text.md#bold) - [Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) [-Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Colunas](properties_Crop.md#columns) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Nome do caminho](properties_Picture.md#pathname) - [Direita](properties_CoordinatesAndSizing.md#right) - [Linhas -](properties_Crop.md#rows) [Ação padrão](properties_Action.md#standard-action) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)  
