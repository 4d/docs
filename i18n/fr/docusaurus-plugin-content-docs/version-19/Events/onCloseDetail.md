---
id: onCloseDetail
title: Sur fermeture corps
---

| Code | Peut être appelé par                                     | Définition                                                                        |
| ---- | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| 26   | Formulaire - [List Box](FormObjects/listbox_overview.md) | Vous avez quitté le formulaire détaillé et vous retournez au formulaire de sortie |


## Description

L'événement `On Close Detail` peut être utilisé dans les contextes suivants :

- **Formulaires de sortie** : le formulaire détaillé est fermé et l'utilisateur retourne au formulaire liste. Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.
- List box [**de type sélection**](FormObjects/listbox_overview.md#selection-list-boxes) : Cet événement est généré lorsqu'un enregistrement affiché dans le [formulaire détaillé](FormObjects/properties_ListBox.md#detail-form-name) associé à une list box de type sélection est sur le point d'être fermé (que l'enregistrement ait été modifié ou non).

