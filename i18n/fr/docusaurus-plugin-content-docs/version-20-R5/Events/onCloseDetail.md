---
id: onCloseDetail
title: On Close Detail
---

| Code | Peut être appelé par                                     | Définition                                                                        |
| ---- | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 26   | Formulaire - [List Box](FormObjects/listbox_overview.md) | Vous avez quitté le formulaire détaillé et vous retournez au formulaire de sortie |

## Description

L'événement `On Close Detail` peut être utilisé dans les contextes suivants :

- **Formulaires de sortie** : le formulaire détaillé est fermé et l'utilisateur retourne au formulaire liste. Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record displayed in the [detail form](FormObjects/properties_ListBox.md#detail-form-name) associated with a selection type list box is about to be closed (regardless of whether or not the record was modified).
