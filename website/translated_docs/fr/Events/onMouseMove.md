---
id: onMouseMove
title: Sur survol
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Définition                                                                                              |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| 37   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) -Formulaire - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt/Option, Shift Lock) was pressed |


## Description

This event is generated:

- when the mouse cursor moves at least one pixel
- OR when a modifier key (**Shift**, **Alt/Option**, **Shift Lock**) was pressed. This makes it possible to manage copy- or move-type drag-and-drop operations.

If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object.

The `On Mouse Move` event updates the *MouseX* and *MouseY* system variables.

Les objets rendus invisibles à l'aide de la commande `OBJECT SET VISIBLE` ou de la propriété [Visibility](FormObjects/properties_Display.md#visibility) ne génèrent pas cet événement.


### Appeler la pile

If the `On Mouse Move` event has been checked for the form, it is generated for each form object. S'il est vérifié pour un objet, il n'est généré que pour cet objet. Lorsqu'il existe des objets superposés, l'événement est généré par le premier objet capable de le gérer qui se trouve en allant de haut en bas.

### Voir également

- [`Sur début survol`](onMouseEnter.md)
- [`Sur fin survol`](onMouseLeave.md)