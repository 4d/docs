---
id: onAlternativeClick
title: Sur clic alternatif
---

| Code | Peut être appelé par                                                                                                                                             | Définition                                         |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 38   | [Bouton](FormObjects/button_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) | <li>Boutons : la zone "flèche" d'un bouton est cliquée</li><li>List box : dans une colonne d'un tableau, un bouton de sélection (attribut "alternateButton") est cliqué</li> |

## Description

### Boutons

Certains styles de boutons peuvent être [liés à un menu contextuel](FormObjects/properties_TextAndPicture.md#with-pop-up-menu) et afficher un triangle. En cliquant sur ce triangle, une fenêtre contextuelle de sélection apparait et fournit un ensemble d'actions alternatives en relation avec l'action du bouton principal.

4D vous permet de gérer ce type de bouton à l'aide de l'événement `On Alternative Click`. Cet événement est généré lorsque l'utilisateur clique sur le triangle (dès que le bouton de la souris est maintenu enfoncé) :

- Si le menu pop-up est **séparé**, l'événement n'est généré que lorsqu'un clic se produit sur la partie du bouton avec la flèche.
- Si le pop-up menu est **lié**, l'événement est généré lorsqu'un clic se produit sur n'importe quelle partie du bouton. A noter que l'événement [`On Long Click`](onLongClick.md) ne peut pas être généré avec ce type de bouton.

![](../assets/en/Events/clickevents.png)

### List box

Cet événement est généré dans des colonnes de [list box de type tableau objets](FormObjects/listbox_overview.md#object-arrays-in-columns-4d-view-pro), lorsque l'utilisateur clique sur un bouton de sélection de widget (attribut "AlternateButton").

![](../assets/en/FormObjects/listbox_column_objectArray_alternateButton.png)

Voir la [description de l'attribut "alternateButton"](FormObjects/listbox_overview.md#alternatebutton).
