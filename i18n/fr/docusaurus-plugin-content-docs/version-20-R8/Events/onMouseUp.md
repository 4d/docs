---
id: onMouseUp
title: On Mouse Up
---

| Code | Peut être appelé par                                                                                     | Définition                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 2    | [Zone de saisie](FormObjects/input_overview.md) de [type](FormObjects/properties_Object.md#type) `image` | L'utilisateur vient de relâcher le bouton gauche de la souris dans un objet Image |

## Description

L'événement `On Mouse Up` est généré lorsque l'utilisateur vient de relâcher le bouton gauche de la souris tout en faisant glisser une image. Cet événement est utile, par exemple, lorsque vous souhaitez que l'utilisateur puisse déplacer, redimensionner ou dessiner des objets dans une zone SVG.

Lorsque l'événement `On Mouse Up` est généré, vous pouvez obtenir les coordonnées locales où le bouton de la souris a été relâché. Ces coordonnées sont retournées dans les variables système `MouseX` et `MouseY`. Les coordonnées sont exprimées en pixels par rapport à l'angle supérieur gauche de l'image (0,0).

Lorsque vous utilisez cet événement, vous devez également utiliser la commande `Is waiting mouse up` pour gérer les cas où le "gestionnaire d'état" du formulaire est désynchronisé, c'est-à-dire lorsque l'événement `On Mouse Up` n'est pas reçu après un cli C'est le cas par exemple lorsqu'une boîte de dialogue d'alerte s'affiche au-dessus du formulaire alors que le bouton de la souris n'a pas été relâché. Pour plus d'informations et pour voir un exemple d'utilisation de l'événement `On Mouse Up`, veuillez vous référer à la description de la commande `Is waiting mouse up`.

> Si l'option [Draggable](FormObjects/properties_Action.md#draggable) est activée pour l'objet image, l'événement `On Mouse Up` n'est jamais généré.
