---
id: onOpenDetail
title: On Open Detail
---

| Code | Peut être appelé par                               | Définition                                                                                                              |
| ---- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 25   | Form - [List Box](FormObjects/listbox_overview.md) | Le formulaire détaillé associé au formulaire de sortie ou à la list box est sur le point d'être ouvert. |

## Description

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with **table forms**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).

### Numéro de ligne affiché

The `Displayed line number` 4D command works with the `On Open Detail` form event. Elle retourne le numéro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche à l'écran.
