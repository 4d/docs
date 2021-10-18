---
id: propertiesAnimation
title: Animación
---

---
## Vuelve a la primera secuencia

Las imágenes se muestran en un bucle continuo. Cuando el usuario llega a la última imagen y vuelve a hacer clic, aparece la primera imagen, y así sucesivamente.


#### Gramática JSON

| Nombre               | Tipos de datos | Valores posibles |
| -------------------- | -------------- | ---------------- |
| loopBackToFirstFrame | booleano       | true, false      |

#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)



---
## Retorna cuando se libera

Muestra la primera imagen todo el tiempo, excepto cuando el usuario hace clic en el botón. Muestra la segunda imagen hasta que se suelta el botón del ratón. This mode allows you to create an action button with a different picture for each state (idle and clicked). You can use this mode to create a 3D effect or display any picture that depicts the action of the button.


#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles |
| ---------------------- | -------------- | ---------------- |
| switchBackWhenReleased | booleano       | true, false      |

#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)





---
## Desplazamiento continuo en clics

Allows the user to hold down the mouse button to display the pictures continuously (i.e., as an animation). When the user reaches the last picture, the object does not cycle back to the first picture.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| switchContinuously | booleano       | true, false      |

#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)




---
## Cambiar cada x ticks

Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles |
| ---------- | -------------- | ---------------- |
| frameDelay | integer        | mínimo: 0        |

#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)





---
## Cambiar cuando se pasa por encima el cursor

Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| switchWhenRollover | booleano       | true, false      |

#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)






---
## Utilizar el último cuadro como desactivado

Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.


#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles |
|:---------------------- | -------------- | ---------------- |
| useLastFrameAsDisabled | booleano       | true, false      |


#### Objetos soportados

[Botón Imagen](pictureButton_overview.md)






