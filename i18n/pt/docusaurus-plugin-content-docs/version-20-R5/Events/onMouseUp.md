---
id: onMouseUp
title: On Mouse Up
---

| Code | Pode ser chamado por                                                                                       | Definição                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 2    | [Área de entrada](FormObjects/input_overview.md) de [Tipo](FormObjects/properties_Object.md#type) `imagen` | O usuário acabou de soltar o botão esquerdo do mouse em um objeto Imagem |

## Descrição

El evento `On Mouse Up` se genera cuando el usuario acaba de soltar el botón izquierdo del ratón mientras arrastra una imagen. This event is useful, for example, when you want the user to be able to move, resize or draw objects in a SVG area.

Cuando se genera el evento `On Mouse Up`, puede obtener las coordenadas locales donde se soltó el botón del ratón. Estas coordenadas se devuelven en las variables sistema `MouseX` y `MouseY`. As coordenadas são expressas em píxeis em relação ao canto superior esquerdo da imagem (0,0).

Cuando se utiliza este evento, también hay que utilizar el comando `Is waiting mouse up` para manejar los casos en los que el "gestor de estado" del formulario está desincronizado, es decir, cuando el evento `On Mouse Up` no se recibe después de un clic. This is the case for example when an alert dialog box is displayed above the form while the mouse button has not been released. Para más información y un ejemplo de uso del evento `On Mouse Up`, consulte la descripción del comando `Is waiting mouse up`.

> Si la opción [Draggable](FormObjects/properties_Action.md#draggable) está activada para el objeto imagen, el evento `On Mouse Up` nunca se genera.
