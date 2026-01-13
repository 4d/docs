---
id: onMouseUp
title: On Mouse Up
---

| Code | Puede ser llamado por                                                                                      | Definición                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 2    | [Área de entrada](FormObjects/input_overview.md) de [Tipo](FormObjects/properties_Object.md#type) `imagen` | El usuario acaba de soltar el botón izquierdo del ratón en un objeto Imagen |

## Descripción

El evento `On Mouse Up` se genera cuando el usuario acaba de soltar el botón izquierdo del ratón mientras arrastra una imagen. Este evento es útil, por ejemplo, cuando se desea que el usuario pueda mover, redimensionar o dibujar objetos en un área SVG.

Cuando se genera el evento `On Mouse Up`, puede obtener las coordenadas locales donde se soltó el botón del ratón. Estas coordenadas se devuelven en las variables sistema `MouseX` y `MouseY`. Las coordenadas se expresan en píxeles con respecto a la esquina superior izquierda de la imagen (0,0).

Cuando se utiliza este evento, también hay que utilizar el comando `Is waiting mouse up` para manejar los casos en los que el "gestor de estado" del formulario está desincronizado, es decir, cuando el evento `On Mouse Up` no se recibe después de un clic. Este es el caso, por ejemplo, cuando se muestra una caja de diálogo de alerta sobre el formulario mientras no se ha soltado el botón del ratón. Para más información y un ejemplo de uso del evento `On Mouse Up`, consulte la descripción del comando `Is waiting mouse up`.

> Si la opción [Draggable](FormObjects/properties_Action.md#draggable) está activada para el objeto imagen, el evento `On Mouse Up` nunca se genera.
