---
id: onBeforeKeystroke
title: Sue avant frappe clavier
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` returns the object's text **without** this character. |


## Description

Après avoir sélectionné les propriétés d'événement `On Before Keystroke` et [`On After Keystroke`](onAfterKeystroke.md) pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `Form event` qui retournera `On Before Keystroke` puis [`On After Keystroke` ](onAfterKeystroke.md)(pour plus d'informations, veuillez vous reporter à la description de la commande `Get edited text`).

Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

Gardez à l'esprit que les modifications utilisateur qui ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, etc.) ne sont pas prises en compte. Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).

> Les événements `On Before Keystroke` et `On After Keystroke` ne sont pas générés lors de l'utilisation d'une méthode de saisie. Une méthode de saisie (ou IME, Input Method Editor) est un programme ou un composant système qui peut être utilisé pour saisir des caractères ou des symboles complexes (par exemple, du japonais ou du chinois) à l'aide d'un clavier occidental.

### Voir également

[On After Keystroke](onAfterKeystroke.md).