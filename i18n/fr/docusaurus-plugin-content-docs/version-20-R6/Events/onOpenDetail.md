---
id: onOpenDetail
title: On Open Detail
---

| Code | Peut être appelé par                                     | Définition                                                                                                              |
| ---- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 25   | Formulaire - [List Box](FormObjects/listbox_overview.md) | Le formulaire détaillé associé au formulaire de sortie ou à la list box est sur le point d'être ouvert. |

## Description

L'événement `On Open Detail` peut être utilisé dans les contextes suivants :

- **Formulaires de sortie** : un enregistrement est sur le point d'être affiché dans le formulaire détaillé associé au formulaire de sortie. Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).

### Numéro de ligne affiché

La commande 4D `Displayed line number` fonctionne avec l'événement formulaire `On Open Detail`. Elle retourne le numéro de la ligne en cours de traitement tandis qu'une liste d'enregistrements ou de lignes de list box s'affiche à l'écran.
