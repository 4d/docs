---
id: propertiesAnimation
title: Animación
---

## Vuelve a la primera secuencia

Las imágenes se muestran en un bucle continuo. Cuando el usuario llega a la última imagen y vuelve a hacer clic, aparece la primera imagen, y así sucesivamente.

#### Gramática JSON

| Nombre               | Tipos de datos | Valores posibles |
| -------------------- | -------------- | ---------------- |
| loopBackToFirstFrame | boolean        | true, false      |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)

---

## Retorna cuando se libera

Muestra la primera imagen todo el tiempo, excepto cuando el usuario hace clic en el botón. Muestra la segunda imagen hasta que se suelta el botón del ratón. Este modo le permite crear un botón de acción con una imagen diferente para cada estado (inactivo y pulsado). Puede utilizar este modo para crear un efecto 3D o mostrar cualquier imagen que represente la acción del botón.

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles |
| ---------------------- | -------------- | ---------------- |
| switchBackWhenReleased | boolean        | true, false      |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)

---

## Desplazamiento continuo en clics

Permite al usuario mantener pulsado el botón del ratón para mostrar las imágenes de forma continua (es decir, como una animación). Cuando el usuario llega a la última imagen, el objeto no vuelve a la primera imagen.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| switchContinuously | boolean        | true, false      |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)

---

## Cambiar cada x ticks

Permite recorrer el contenido del botón de imagen a la velocidad especificada (en ticks). En este modo, se ignoran todas las demás opciones.

#### Gramática JSON

| Nombre     | Tipos de datos | Valores posibles          |
| ---------- | -------------- | ------------------------- |
| frameDelay | integer        | mínimo: 0 |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)

---

## Cambiar cuando se pasa por encima el cursor

Modifica el contenido del botón de la imagen cuando el cursor del ratón pasa por encima. La imagen inicial se muestra cuando el cursor sale del área del botón.

#### Gramática JSON

| Nombre             | Tipos de datos | Valores posibles |
| ------------------ | -------------- | ---------------- |
| switchWhenRollover | boolean        | true, false      |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)

---

## Utilizar el Último cuadro como Desactivado

Permite definir la última miniatura como la que se mostrará cuando el botón esté desactivado. La imagen en miniatura utilizada cuando el botón está desactivado es procesada por separado por 4D: cuando se combina esta opción con "Cambiar continuamente" y "Retroceder en bucle a la primera imagen", la última imagen se excluye de la secuencia asociada al botón y sólo aparece cuando está desactivado.

#### Gramática JSON

| Nombre                 | Tipos de datos | Valores posibles |
| :--------------------- | -------------- | ---------------- |
| useLastFrameAsDisabled | boolean        | true, false      |

#### Objetos soportados

[Botón imagen](pictureButton_overview.md)
