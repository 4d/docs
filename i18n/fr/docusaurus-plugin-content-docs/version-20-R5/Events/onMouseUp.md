---
id: onMouseUp
title: On Mouse Up
---

| Code | Peut être appelé par                                                                                  | Définition                                                                        |
| ---- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 2    | [Input](FormObjects/input_overview.md) of the `picture` [Type](FormObjects/properties_Object.md#type) | L'utilisateur vient de relâcher le bouton gauche de la souris dans un objet Image |

## Description

The `On Mouse Up` event is generated when the user has just released the left mouse button while dragging in a picture input. Cet événement est utile, par exemple, lorsque vous souhaitez que l'utilisateur puisse déplacer, redimensionner ou dessiner des objets dans une zone SVG.

When the `On Mouse Up` event is generated, you can get the local coordinates where the mouse button was released. These coordinates are returned in the `MouseX` and `MouseY` System variables. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0).

When using this event, you must also use the `Is waiting mouse up` command to handle cases where the "state manager" of the form is desynchronized, i.e. when the `On Mouse Up` event is not received after a click. C'est le cas par exemple lorsqu'une boîte de dialogue d'alerte s'affiche au-dessus du formulaire alors que le bouton de la souris n'a pas été relâché. For more information and an example of use of the `On Mouse Up` event, please refer to the description of the `Is waiting mouse up` command.

> If the [Draggable](FormObjects/properties_Action.md#draggable) option is enabled for the picture object, the `On Mouse Up` event is never generated.
