---
id: onDisplayDetail
title: On Display Detail
---

| Code | Peut être appelé par                               | Définition                                                                                                                                                       |
| ---- | -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 8    | Form - [List Box](FormObjects/listbox_overview.md) | Un enregistrement est sur le point d'être affiché dans un formulaire liste ou bien une ligne est sur le point d'être affichée dans une list box. |

## Description

The `On Display Detail` event can be used in the following contexts:

### Formulaire de sortie

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> This event cannot be selected for project forms, it is only available with **table forms**.

Dans ce contexte, la séquence d'appels de méthodes et d'événements de formulaire suivante est déclenchée :

- Pour chaque enregistrement :
  - Pour chaque objet de la zone détaillée :
    - Object method with `On Display Detail` event
  - Form method with `On Display Detail` event

> The header area is handled using the [`On Header`](onHeader.md) event.

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.

### Liste box sélection

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.

### Numéro de ligne affiché

The `Displayed line number` 4D command works with the `On Display Detail` form event. Elle retourne le numéro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche à l'écran.
