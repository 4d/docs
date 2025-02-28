---
id: pictureButtonOverview
title: Botão imagem
---

Um botão de imagem é semelhante a um [botão padrão](button_overview.md). Entretanto, diferentemente de um botão padrão (que aceita três estados: ativado, desativado e clicado), um botão imagem tem uma imagem diferente para representar cada estado.

Os botões imagem podem ser utilizados de duas formas:

- Como botões de comando num formulário. In this case, the picture button generally includes four different states: enabled, disabled, clicked and rolled over.\
  For example, a table of thumbnails that has one row of four columns, each thumbnail corresponds to the Default, Clicked, Roll over, and Disabled states.

  | Propriedade                | Nome JSON              | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Linhas                     | rowCount               | 1     |
  | Colunas                    | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

- Como botão de imagem que permite ao usuário escolher entre várias opções. Neste caso, pode ser utilizado um botão de imagem em vez de um menu pop-up de imagem. Com [Menu pop-up de imagem](picturePopupMenu_overview.md), todas as escolhas são exibidas simultaneamente (como os itens no menu pop-up), enquanto o botão imagem mostra as opções consecutivas (como o usuário clica no botão).\
  Aqui está um exemplo de um botão imagem. Suponha que você deseja dar aos usuários de um aplicativo personalizado a oportunidade de escolher o idioma da interface da aplicação. Você implementa a opção como um botão imagem em uma caixa de diálogo de propriedades personalizadas:

![](../assets/en/FormObjects/button_pictureButton.png)

Clicar no objeto altera a imagem.

## Usar os botões imagem

É possível implementar um botão imagem da seguinte forma:

1. Primeiro, prepare um único gráfico onde a série de imagens esteja organizada em uma linha, uma coluna ou uma grade de linha por coluna.

  ![](../assets/en/FormObjects/pictureButton_grid.png)

Você pode organizar as imagens em colunas, linhas ou em uma grade de linha por coluna (como mostrado acima). Ao organizar as imagens em uma grade, elas são numeradas da esquerda para a direita, linha por linha, começando com 0. Por exemplo, a segunda imagem da segunda linha de uma grade que consiste em duas linhas e três colunas é numerada como 4 (a bandeira do Reino Unido no exemplo acima).

2. Em seguida, certifique-se de que a imagem esteja nos Recursos do seu projeto e insira o caminho na propriedade [Pathname](properties_TextAndPicture.md#picture-pathname).

3. Defina as propriedades [Rows and Columns] (properties_Crop.md) do gráfico.

4. Especifique quando as imagens mudam selecionando as propriedades [animation](properties_Animation.md) apropriadas.

## Animação

Além do posicionamento padrão e configurações de aparência, você pode definir algumas propriedades específicas para botões de imagem, especialmente no que diz respeito a como e quando as imagens são exibidas. Estas opções de propriedade podem ser combinadas para melhorar seus botões de imagem.

- Por padrão (quando nenhuma [opção de animação] (properties_Animation.md) está selecionada), um botão de imagem exibe a próxima imagem da série quando o usuário clica; ele exibe a imagem anterior da série quando o usuário mantém pressionada a tecla **Shift** e clica. Quando o usuário chega à última imagem da série, a imagem não muda quando o usuário clica novamente. Por outras palavras, não regressa à primeira imagem da série.

Estão disponíveis os seguintes outros modos:

- [Loop de volta ao primeiro quadro](properties_Animation.md#loop-back-to-first-frame)
- [Volte quando lançado](properties_Animation.md#switch-back-when-released)
- [Alterne quando Roll Over] (properties_Animation.md#switch-when-roll-over)
- [Alterne continuamente nos cliques](properties_Animation.md#switch-continuously-on-clicks)
- [Use Last frame as disabled] (properties_Animation.md#use-last-frame-as-disabled)
- [Mudar cada x ticks](./properties_Animation.md#switch-every-x-ticks)

> A [variável associada](properties_Object.md#variable-or-expression) do botão de imagem retorna o número de índice, na tabela de miniaturas, da imagem atual exibida. A numeração das imagens no quadro começa com 0.

## Propriedades compatíveis

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loop-back-to-first-frame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switch-back-when-released) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x ticks](properties_Animation.md#switch-every-x-ticks) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switch-when-roll-over) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
