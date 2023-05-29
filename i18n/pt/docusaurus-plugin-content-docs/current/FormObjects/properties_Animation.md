---
id: propertiesAnimation
title: Animação
---

## Loop back to first frame

Pictures are displayed in a continuous loop. When the user reaches the last picture and clicks again, the first picture appears, and so forth.

#### Gramática JSON

| Nome                 | Tipo de dados | Valores possíveis |
| -------------------- | ------------- | ----------------- |
| loopBackToFirstFrame | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Switch back when released

Displays the first picture all the time except when the user clicks the button. Displays the second picture until the mouse button is released. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
| ---------------------- | ------------- | ----------------- |
| switchBackWhenReleased | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Switch continuously on clicks

Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchContinuously | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Mudar a cada x ticks

Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored.

#### Gramática JSON

| Nome       | Tipo de dados | Valores possíveis |
| ---------- | ------------- | ----------------- |
| frameDelay | integer       | mínimo: 0         |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Switch when roll over

Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.

#### Gramática JSON

| Nome               | Tipo de dados | Valores possíveis |
| ------------------ | ------------- | ----------------- |
| switchWhenRollover | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)

---

## Use Last frame as disabled

Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.

#### Gramática JSON

| Nome                   | Tipo de dados | Valores possíveis |
|:---------------------- | ------------- | ----------------- |
| useLastFrameAsDisabled | boolean       | true, false       |

#### Objectos suportados

[Botão imagem](pictureButton_overview.md)
