---
id: propertiesAnimation
title: Animation
---

## Repetir a sequência

As imagens são apresentadas num ciclo contínuo. When the user reaches the last picture and clicks again, the first picture appears, and so forth.

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis |
| -------------------- | ------------- | ----------------- |
| loopBackToFirstFrame | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Mudar de volta quando liberado

Displays the first picture all the time except when the user clicks the button. Apresenta a segunda imagem até que o botão do rato seja libertado. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
| ---------------------- | ------------- | ----------------- |
| switchBackWhenReleased | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Alternar continuamente em cliques

Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchContinuously | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Mudar a cada x ticks

Enables cycling through the contents of the picture button at the specified speed (in ticks). Neste modo, todas as outras opções são ignoradas.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| frameDelay | integer       | mínimo: 0         |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Alternar quando rolar sobre

Modifies the contents of the picture button when the mouse cursor passes over it. A imagem inicial é exibida quando o cursor sai da área do botão.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchWhenRollover | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Utilizar o último marco como desativado

Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
|:---------------------- | ------------- | ----------------- |
| useLastFrameAsDisabled | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)
