---
id: pictureButtonOverview
title: Botão imagem
---

Um botão imagem é como um [botão padrão](button_overview.md). Entretanto, diferentemente de um botão padrão (que aceita três estados: ativado, desativado e clicado), um botão imagem tem uma imagem diferente para representar cada estado.

Os botões imagem podem ser utilizados de duas formas:

* Como botões de comando num formulário. Nesse caso, o botão de imagem geralmente inclui quatro estados diferentes: ativado, desativado, clicado e rolado.      
  Por exemplo, uma tabela de miniaturas que tem uma linha de quatro colunas, cada miniatura corresponde aos estados Padrão, Clicado, Rolar e Desativado.

  | Propriedade                | Nome JSON              | Valor |
  | -------------------------- | ---------------------- | ----- |
  | Linhas                     | rowCount               | 1     |
  | Colunas                    | columnCount            | 4     |
  | Switch back when Released  | switchBackWhenReleased | true  |
  | Switch when Roll Over      | switchWhenRollover     | true  |
  | Use Last Frame as Disabled | useLastFrameAsDisabled | true  |

* Como botão de imagem que permite ao usuário escolher entre várias opções. Neste caso, pode ser utilizado um botão de imagem em vez de um menu pop-up de imagem. Com [Imagens Menus](picturePopupMenu_overview.md), todas as opções são exibidas simultaneamente (como os itens no menu pop-up), enquanto o botão de imagem mostra as opções consecutivas (como o usuário clica no botão).   
  Aqui está um exemplo de um botão de imagem. Suponha que você deseja dar aos usuários de um aplicativo personalizado a oportunidade de escolher o idioma da interface da aplicação. Você implementa a opção como um botão imagem em uma caixa de diálogo de propriedades personalizadas:

![](../assets/en/FormObjects/button_pictureButton.png)

Clicar no objeto altera a imagem.


## Usar os botões imagem

É possível implementar um botão imagem da seguinte forma:

1. Primeiro, prepare um único gráfico onde a série de imagens esteja organizada em uma linha, uma coluna ou uma grade de linha por coluna.

   ![](../assets/en/FormObjects/pictureButton_grid.png)

Você pode organizar as imagens em colunas, linhas ou em uma grade de linha por coluna (como mostrado acima). Ao organizar as imagens em uma grade, elas são numeradas da esquerda para a direita, linha por linha, começando com 0. Por exemplo, a segunda imagem da segunda linha de uma grade que consiste em duas linhas e três colunas é numerada como 4 (a bandeira do Reino Unido no exemplo acima).

2. Em seguida, certifique-se de que a imagem esteja nos recursos do seu projeto e insira o caminho na propriedade [Nome do caminho](properties_TextAndPicture.md#picture-pathname).

3. Definir as propriedades de [linhas e colunas](properties_Crop.md) do gráfico.

4. Especifique quando as imagens mudam selecionando as propriedades [animation](properties_Animation.md) adequadas.


## Animação

Além do posicionamento padrão e configurações de aparência, você pode definir algumas propriedades específicas para botões de imagem, especialmente no que diz respeito a como e quando as imagens são exibidas. Estas opções de propriedade podem ser combinadas para melhorar seus botões de imagem.

- Por padrão (quando nenhuma [opção de animação](properties_Animation.md) é selecionada), um botão de uma imagem exibe a imagem seguinte na série quando o usuário clica; mostra a imagem anterior na série quando o usuário mantém pressionada a tecla **Shift** e clica. Quando o usuário chega à última imagem da série, a imagem não muda quando o usuário clica novamente. Por outras palavras, não regressa à primeira imagem da série.

Estão disponíveis os seguintes outros modos:
- [Repetir a sequência](properties_Animation.md#loop-back-to-first-frame)
- [Switch back when Released](properties_Animation.md#switch-back-when-released)
- [Switch when Roll Over](properties_Animation.md#switch-when-roll-over)
- [Alternar continuamente em cliques](properties_Animation.md#switch-continuously-on-clicks)
- [Utilizar o último marco como desativado](properties_Animation.md#use-last-frame-as-disabled)
- [Switch every x seconds](./properties_Animation.md#switch-every-x-seconds)
> [Switch every x seconds](./properties_Animation.md#switch-every-x-seconds) > [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) > [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) > The [associated variable](properties_Object.md#variable-or-expression) of the picture button returns the index number, in the thumbnail table, of the current picture displayed. A numeração das imagens no quadro começa com 0.

## Propriedades compatíveis

[Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Columns](properties_Crop.md#columns) - [Focusable](properties_Entry.md#focusable) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Loop back to first frame](properties_Animation.md#loop-back-to-first-frame) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Rows](properties_Crop.md#rows) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Switch back when released](properties_Animation.md#switch-back-when-released) - [Switch continuously on clicks](properties_Animation.md#switch-continuously-on-clicks) - [Switch every x seconds](properties_Animation.md#switch-every-x-seconds) - [Title](properties_Object.md#title) - [Switch when roll over](properties_Animation.md#switch-when-roll-over) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Use Last frame as disabled](properties_Animation.md#use-last-frame-as-disabled) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  
