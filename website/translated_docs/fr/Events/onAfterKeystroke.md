---
id: onAfterKeystroke
title: Sue après frappe clavier
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | A character is about to be entered in the object that has the focus. `Get edited text` returns the object's text **including** this character. |


## Description

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

Gardez à l'esprit que les modifications utilisateur qui ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, etc.) ne sont pas prises en compte. Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).

> Les événements [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` ne sont pas générés lors de l'utilisation d'une méthode de saisie. Une méthode de saisie (ou IME, Input Method Editor) est un programme ou un composant système qui peut être utilisé pour saisir des caractères ou des symboles complexes (par exemple, du japonais ou du chinois) à l'aide d'un clavier occidental.

### See also

[On Before Keystroke](onBeforeKeystroke.md).