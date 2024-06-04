---
id: onMouseMove
title: On Mouse Move
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Définition                                                                                                                                            |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 37   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Le curseur de la souris se déplace d'au moins un pixel OU une touche de modification (Shift, Alt/Option, Shift Lock) a été pressée |

## Description

Cet événement est généré :

- lorsque le curseur de la souris se déplace d'au moins un pixel
- OU lorsque l'on presse sur une touche de modification (**Ctrl**, **Alt/Option**, **Verr Maj**). Cela permet de gérer les opérations de glisser-déposer de type copier ou déplacer.

Si l'événement est coché pour un objet uniquement, il est généré uniquement lorsque le curseur se trouve dans la zone graphique de l'objet.

L'événement `On Mouse Move` met à jour les variables système _MouseX_ et _MouseY_.

Les objets rendus invisibles à l'aide de la commande `OBJECT SET VISIBLE` ou de la propriété [Visibility](FormObjects/properties_Display.md#visibility) ne génèrent pas cet événement.

### Appeler la pile

Si l'événement `On Mouse Move` a été coché pour le formulaire, il est généré pour chaque objet de formulaire. S'il est vérifié pour un objet, il n'est généré que pour cet objet. Lorsqu'il existe des objets superposés, l'événement est généré par le premier objet capable de le gérer qui se trouve en allant de haut en bas.

### Voir également

- [`On Mouse Enter`](onMouseEnter.md)
- [`On Mouse Leave`](onMouseLeave.md)
