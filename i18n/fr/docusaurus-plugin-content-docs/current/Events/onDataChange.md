---
id: onDataChange
title: Sur données modifiées
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Définition                |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 20   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Liste déroulante](FormObjects/dropdownList_Overview.md) - Formulaire - [Liste hiérarchique](FormObjects/list_overview.md) - [Zone de saisie](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) - [Zone de Plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Règle](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Stepper](FormObjects/stepper.md) - [Sous-formulaire](FormObjects/subform_overview.md) | Une donnée a été modifiée |


## Description

Lorsque la propriété d'événement `On Data Change` est sélectionnée pour un objet, vous pouvez détecter et gérer la modification de la valeur de la source de données à l'aide de la commande `FORM Event`.

L'événement est généré dès que la variable associée à l'objet est mise à jour en interne par 4D (c'est-à-dire, en général, lorsque la zone de saisie de l'objet perd le focus).

> Avec les [sous-formulaires](FormObjects/subform_overview.md), l'événement `On Data Change` est déclenché lorsque la valeur de la variable de l'objet sous-formulaire a été modifiée.

