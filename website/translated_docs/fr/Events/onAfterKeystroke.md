---
id: onAfterKeystroke
title: Sue après frappe clavier
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` returns the object's text **including** this character. |


## Description

> L'événement `On After Keystroke` peut généralement être remplacé par l'événement On After Edit</code> (voir ci-dessous).

Après avoir sélectionné les propriétés d'événement [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `FORM event` qui renverra `On Before Keystroke` puis `On After Keystroke` (pour plus d'informations, veuillez reportez-vous à la description de la commande `Get edited text`).

Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

Gardez à l'esprit que les modifications utilisateur qui ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, etc.) ne sont pas prises en compte. Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).

> Les événements [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` ne sont pas générés lors de l'utilisation d'une méthode de saisie. Une méthode de saisie (ou IME, Input Method Editor) est un programme ou un composant système qui peut être utilisé pour saisir des caractères ou des symboles complexes (par exemple, du japonais ou du chinois) à l'aide d'un clavier occidental.

### Voir également
[On Before Keystroke](onBeforeKeystroke.md).