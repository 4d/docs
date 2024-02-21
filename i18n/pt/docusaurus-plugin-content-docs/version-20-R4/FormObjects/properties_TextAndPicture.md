---
id: propertiesTextAndPicture
title: Text and Picture
---


## Rota de acesso ao Fundo

Define o caminho da imagem que será desenhada no fundo do objeto. Se o objeto utilizar um [ícone ](#picture-pathname) com [estados diferentes](#number-of-states), a imagem de fundo suportará automaticamente o mesmo número de estados.

O nome do caminho a introduzir é semelhante ao [da propriedade Caminho para imagens estáticas](properties_Picture.md#pathname).

#### Gramática JSON

| Nome                    | Tipo de dados | Valores possíveis                                                                                                     |
| ----------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------- |
| customBackgroundPicture | string        | Caminho relativo na sintaxe POSIX. Deve ser utilizado em conjunto com a opção "Personalizado" da propriedade "Style". |

#### Objectos suportados

[Botão personalizado](button_overview.md#custom) - [Caixa de verificação personalizada](checkbox_overview.md#custom) - [Botão rádio personalizado](radio_overview.md#custom)

---

## Estilo de botão

Aspeto geral do botão. O estilo do botão também desempenha um papel na disponibilidade de determinadas opções.

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis                                                                                                                                                  |
|:-----:|:-------------:| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| style |     text      | "regular", "flat", "toolbar", "bevel", "roundedBevel", "gradientBevel", "texturedBevel", "office", "help", "circular", "disclosure", "roundedDisclosure", "custom" |

#### Objectos suportados

[Botão](button_overview.md) - [Botão rádio](radio_overview.md) - [Caixa de verificação](checkbox_overview.md) - [Botão rádio](radio_overview.md)

---

## Margem horizontal

Esta propriedade permite definir o tamanho (em píxeis) das margens horizontais do botão. Esta margem delimita a área que o ícone e o título do botão não devem ultrapassar.

Este parâmetro é útil, por exemplo, quando a imagem de fundo contém contornos:

| Com / Sem               | Exemplo                                                      |
| ----------------------- | ------------------------------------------------------------ |
| Sem margem              | ![](../assets/en/FormObjects/property_horizontalMargin1.png) |
| Com margem de 13 píxeis | ![](../assets/en/FormObjects/property_horizontalMargin2.png) |
> Esta propriedade funciona em conjunto com a propriedade [Margem vertical](#vertical-margin).

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                     |
| ------------- | ------------- | ----------------------------------------------------- |
| customBorderX | number        | Para utilizar com o estilo "personalizado". Mínimo: 0 |

#### Objectos suportados

[Botão personalizado](button_overview.md#custom) - [Caixa de verificação personalizada](checkbox_overview.md#custom) - [Botão rádio personalizado](radio_overview.md#custom)

---

## Localização do ícone

Designa a colocação de um ícone em relação ao objeto formulário.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis       |
| ------------- | ------------- | ----------------------- |
| iconPlacement | string        | "none", "left", "right" |

#### Objectos suportados

[Cabeçalho do List Box](listbox_overview.md#list-box-headers)

---

## Offset do ícone

Define um valor de desvio personalizado em pixeis, que será utilizado quando se clica no botão

O título do botão será deslocado para a direita e para baixo em função do número de pixeis introduzidos. Isto permite aplicar um efeito 3D personalizado quando o botão é clicado.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis |
| ------------ | ------------- | ----------------- |
| customOffset | number        | mínimo: 0         |

#### Objectos suportados

[Botão personalizado](button_overview.md#custom) - [Caixa de verificação personalizada](checkbox_overview.md#custom) - [Botão rádio personalizado](radio_overview.md#custom)

---

## Número de estados

Esta propriedade define o número exato de estados presentes na imagem utilizada como ícone para um [botão com ícone](button_overview.md), uma [caixa de verificação](checkbox_overview.md) ou um [botão radio](radio_overview.md) personalizado.

A imagem pode conter de 2 a 6 estados.

- 2 estados: false, true
- 3 estados: false, true, rollover,
- 4 estados: false, true, rollover, desativado,
- 5 estados (apenas para caixas de verificação e botões rádio): false, true, false rollover, true rollover, desativado
- 6 estados (apenas para caixas de verificação e botões rádio): false, true, false rollover, true rollover, false desativado, true disable.

:::note

- button not clicked / check box unchecked (variable value=0)
- button clicked / check box checked (variable value=1)

:::

Cada estado é representado por uma imagem diferente. Na imagem de origem, os estados devem ser empilhados verticalmente:

![](../assets/en/FormObjects/six-states.png)



#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis                               |
| ---------- | ------------- | ----------------------------------------------- |
| iconFrames | number        | Número de estados na imagem do ícone. Mínimo: 1 |

#### Objectos suportados

[Botão](button_overview.md) (todos os estilos exceto [Ajuda](button_overview.md#help)) - [Caixa de verificação](checkbox_overview.md) - [Botão rádio](radio_overview.md)

---

## Caminho da imagem

Define o caminho da imagem que será utilizada como ícone para o objeto.

O nome do caminho a introduzir é semelhante ao [da propriedade Caminho para imagens estáticas](properties_Picture.md#pathname).

> Quando utilizada como ícone para objetos ativos, a imagem deve ser concebida para suportar [um número de estados](#number-of-states) variável.

#### Gramática JSON

| Nome | Tipo de dados | Valores possíveis                                |
| ---- | ------------- | ------------------------------------------------ |
| icon | picture       | Caminho relativo ou filesystem na sintaxe POSIX. |

#### Objectos suportados

[Botão](button_overview.md) (todos os estilos exceto [Ajuda](button_overview.md#help)) - [Caixa de verificação](checkbox_overview.md) - [Cabeçalho da caixa de listagem](listbox_overview.md#list-box-headers) - [Botão rádio](radio_overview.md)

---

## Posição título/Imagem

Esta propriedade permite modificar a localização relativa do título do botão em relação ao ícone associado. Esta propriedade não tem efeito quando o botão contém apenas um título (sem imagem associada) ou uma imagem (sem título). Por predefinição, quando um botão contém um título e uma imagem, o texto é colocado por baixo da imagem.

Aqui estão os resultados utilizando as várias opções para esta propriedade:

| Opção        | Descrição                                                                                                                             | Exemplo                                                           |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **Direita**  | O texto é colocado à esquerda do ícone. O conteúdo do botão é alinhado à direita.                                                     | ![](../assets/en/FormObjects/property_titlePosition_left.en.png)  |
| **Topo**     | O texto é colocado por cima do ícone. O conteúdo do botão é centrado.                                                                 | ![](../assets/en/FormObjects/property_titlePosition_top.png)      |
| **Esquerda** | O texto é colocado à direita do ícone. O conteúdo do botão é alinhado à esquerda.                                                     | ![](../assets/en/FormObjects/property_titlePosition_right.png)    |
| **Fundo**    | O texto é colocado por baixo do ícone. O conteúdo do botão é centrado.                                                                | ![](../assets/en/FormObjects/property_titlePosition_bottom.png)   |
| **Centrado** | O texto do ícone é centrado vertical e horizontalmente no botão. Este parâmetro é útil, por exemplo, para o texto incluído num ícone. | ![](../assets/en/FormObjects/property_titlePosition_centered.png) |

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                          |
| ------------- | ------------- | ------------------------------------------ |
| textPlacement | string        | "left", "top", "right", "bottom", "center" |

#### Objectos suportados

[Botão](button_overview.md) (todos os estilos exceto [Ajuda](button_overview.md#help)) - [Caixa de verificação](checkbox_overview.md) - [Botão rádio](radio_overview.md)

---

## Image hugs title

Esta propriedade permite-lhe definir se o título e a imagem do botão devem ser visualmente adjacentes ou separados, conforme as propriedades [Posição do título/da imagem](#titlepicture-position) e [Alinhamento horizontal](#horizontal-alignment).

Esta propriedade não tem efeito quando o botão contém apenas um título (sem imagem associada) ou uma imagem (sem título).

By default, when a button contains a title and a picture, the elements are joined. The following graphic shows the effect of the `imageHugsTitle` property (true when property is enabled) with different button alignments:

![](../assets/en/FormObjects/hugs.png)


#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis    |
| -------------- | ------------- | -------------------- |
| imageHugsTitle | boolean       | true (padrão), false |

#### Objectos suportados

[Button](button_overview.md) (all styles except Help) - [Check Box](checkbox_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand) - [Radio Button](radio_overview.md) (all styles except Regular, Flat, Disclosure and Collapse/Expand).

---

## Margem vertical

This property allows setting the size (in pixels) of the vertical margins of the button. Esta margem delimita a área que o ícone e o título do botão não devem ultrapassar.

Este parâmetro é útil, por exemplo, quando a imagem de fundo contém contornos.

> This property works in conjunction with the [Horizontal Margin](#horizontal-margin) property.

#### Gramática JSON

| Nome          | Tipo de dados | Valores possíveis                                     |
| ------------- | ------------- | ----------------------------------------------------- |
| customBorderY | number        | Para utilizar com o estilo "personalizado". Mínimo: 0 |

#### Objectos suportados

[Botão personalizado](button_overview.md#custom) - [Caixa de verificação personalizada](checkbox_overview.md#custom) - [Botão rádio personalizado](radio_overview.md#custom)

---

## Com menu pop-up

This property allows displaying a symbol that appears as a triangle in the button to indicate the presence of an attached pop-up menu:

![](../assets/en/FormObjects/property_popup.png)

The appearance and location of this symbol depends on the button style and the current platform.

### Ligados e Separados

To attach a pop-up menu symbol to a button, there are two display options available:

|                         Linked                          |                          Separado                          |
|:-------------------------------------------------------:|:----------------------------------------------------------:|
| ![](../assets/en/FormObjects/property_popup_linked.png) | ![](../assets/en/FormObjects/property_popup_separated.png) |
> The actual availability of a "separated" mode depends on the style of the button and the platform.

Each option specifies the relation between the button and the attached pop-up menu:

- When the pop-up menu is **separated**, clicking on the left part of the button directly executes the current action of the button; this action can be modified using the pop-up menu accessible in the right part of the button.
- When the pop-up menu is **linked**, a simple click on the button only displays the pop-up menu. Only the selection of the action in the pop-up menu causes its execution.

:::info

Refer to the [`On Alternative Click` event description](../Events/onAlternativeClick.md) for more information on the handling of events in this case.

:::

### Gerir o menu pop-up

It is important to note that the "With Pop-up Menu" property only manages the graphic aspect of the button. The display of the pop-up menu and its values must be handled entirely by the developer, more particularly using `form events` and the **[Dynamic pop up menu](https://doc.4d.com/4Dv18/4D/18/Dynamic-pop-up-menu.301-4505524.en.html)** and **[Pop up menu](https://doc.4d.com/4Dv17R5/4D/17-R5/Pop-up-menu.301-4127438.en.html)** commands.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                                           |
|:-------------- | ------------- | --------------------------------------------------------------------------- |
| popupPlacement | string        | <li>"none"</li><li>"linked"</li><li>"separated"</li> |

#### Objectos suportados

[Toolbar Button](button_overview.md#toolbar) - [Bevel Button](button_overview.md#bevel) - [Rounded Bevel Button](button_overview.md#Rounded-bevel) - [OS X Gradient Button](button_overview.md#os-x-gradient) - [OS X Textured Button](button_overview.md#os-x-textured) - [Office XP Button](button_overview.md#office-XP) - [Circle Button](button_overview.md#circle) - [Custom](button_overview.md#custom)
