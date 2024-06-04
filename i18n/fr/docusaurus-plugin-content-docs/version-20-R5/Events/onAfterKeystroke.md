---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` retourne le texte de l'objet, **y compris** ce caractère. |

<details><summary>Historique</summary>

| Release | Modifications                                                                           |
| ------- | --------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes - The event is now triggered after IME validation |

</details>

## Description

> The `On After Keystroke` event can generally be replaced by the [`On After Edit`](onAfterEdit.md) event (see below).

After the [`On Before Keystroke`](onBeforeKeystroke.md) and `On After Keystroke` event properties are selected for an object, you can detect and handle the keystrokes within the object, using the `FORM event` command that will return `On Before Keystroke` and then `On After Keystroke` (for more information, please refer to the description of the `Get edited text` command).

> Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

L'événement `On After Keystroke` n'est pas généré :

- dans la méthode [des colonnes de list box](FormObjects/listbox_overview.md#list-box-columns), sauf lorsqu'une cellule est en cours d'édition (cependant elle est générée dans tous les cas dans la méthode de [list box](FormObjects/listbox_overview.md)),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Séquence de frappe

When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. La commande `Keystroke` retourne le caractère validé. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- lorsqu'un IME (Input method editor) affiche une boîte de dialogue intermédiaire où l'utilisateur peut saisir une combinaison de caractères : les événements sont générés uniquement lorsque la boîte de dialogue IME est validée.

### Voir également

[On Before Keystroke](onBeforeKeystroke.md).
