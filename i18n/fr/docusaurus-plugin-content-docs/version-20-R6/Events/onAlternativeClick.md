---
id: onAlternativeClick
title: On Alternative Click
---

| Code | Peut être appelé par                                                                                                                                             | Définition                                                                                                                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 38   | [Bouton](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | <li>Buttons: The "arrow" area of a button is clicked</li><li>List boxes: In a column of an object array, an ellipsis button ("alternateButton" attribute) is clicked</li> |

## Description

### Boutons

Certains styles de boutons peuvent être [liés à un menu contextuel](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) et afficher un triangle. En cliquant sur ce triangle, une fenêtre contextuelle de sélection apparait et fournit un ensemble d'actions alternatives en relation avec l'action du bouton principal.

4D vous permet de gérer ce type de bouton à l'aide de l'événement `On Alternative Click`. Cet événement est généré lorsque l'utilisateur clique sur le triangle (dès que le bouton de la souris est maintenu enfoncé) :

- If the pop-up menu is **separated**, the event is only generated when a click occurs on the portion of the button with the arrow. Note that the [standard action](https://doc.4d.com/4Dv19R7/4D/19-R7/Standard-actions.300-6013479.en.html) assigned to the button (if any) is not executed in this case.
- Si le pop-up menu est **lié**, l'événement est généré lorsqu'un clic se produit sur n'importe quelle partie du bouton. Note that the [`On Long Click`](onLongClick.md) event cannot be generated with this type of button.

![](../assets/en/Events/clickevents.png)

### List box

Cet événement est généré dans des colonnes de [list box de type tableau objets](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), lorsque l'utilisateur clique sur un bouton de sélection de widget (attribut "AlternateButton").

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Voir la [description de l'attribut "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
