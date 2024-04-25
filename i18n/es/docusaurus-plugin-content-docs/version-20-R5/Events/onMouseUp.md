---
id: onMouseUp
title: On Mouse Up
---

| Code | Puede ser llamado por                                                                                 | Definición                                                                  |
| ---- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| 2    | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) | El usuario acaba de soltar el botón izquierdo del ratón en un objeto Imagen |

## Descripción

The `On Mouse Up` event is generated when the user has just released the left mouse button while dragging in a picture input. Este evento es útil, por ejemplo, cuando se desea que el usuario pueda mover, redimensionar o dibujar objetos en un área SVG.

When the `On Mouse Up` event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the `MouseX` and `MouseY` System variables. Las coordenadas se expresan en píxeles con respecto a la esquina superior izquierda de la imagen (0,0).

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. Este es el caso, por ejemplo, cuando se muestra una caja de diálogo de alerta sobre el formulario mientras no se ha soltado el botón del ratón. For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated.
