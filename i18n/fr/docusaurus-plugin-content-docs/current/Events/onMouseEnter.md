---
id: onMouseEnter
title: Sur début survol
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Définition                                                      |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| 35   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) -Formulaire - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | Le curseur de la souris entre dans la zone graphique d'un objet |


## Description

Cet événement est généré une fois, lorsque le curseur de la souris entre dans la zone graphique d'un objet du formulaire.

L'événement `On Mouse Enter` met à jour les variables système *MouseX* et *MouseY*.

Les objets rendus invisibles à l'aide de la commande `OBJECT SET VISIBLE` ou de la propriété [Visibility](FormObjects/properties_Display.md#visibility) ne génèrent pas cet événement.


### Appeler la pile

Si l'événement `On Mouse Enter` a été coché pour le formulaire, il est généré pour chaque objet de formulaire. S'il est vérifié pour un objet, il n'est généré que pour cet objet. Lorsqu'il existe des objets superposés, l'événement est généré par le premier objet capable de le gérer qui se trouve en allant de haut en bas.

### Voir également

- [`Sur survol`](onMouseMove.md)
- [`Sur fin survol`](onMouseLeave.md)