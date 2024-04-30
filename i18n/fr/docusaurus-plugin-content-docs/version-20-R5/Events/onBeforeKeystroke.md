---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                                                      |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` returns the object's text **without** this character. |

<details><summary>Historique</summary>

| Release | Modifications                                                                           |
| ------- | --------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes - The event is now triggered after IME validation |

</details>

## Description

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). Within the `On Before Keystroke` event, the `FILTER KEYSTROKE` command can be used to filter typed chars.

> These events are also activated by language commands that simulate a user action like `POST KEY`.

The `On Before Keystroke` event is not generated:

- in a [list box column](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Objets non saisissables

The `On Before Keystroke` event can be generated in non-enterable objects, e.g. in a list box even if the list box cells are not enterable, or rows are not selectable. Cela vous permet de créer des interfaces dans lesquelles l'utilisateur peut faire défiler dynamiquement jusqu'à une ligne spécifique dans une list box en saisissant les premières lettres d'une valeur. In case where the list box cells are enterable, you can use the `Is editing text` command to know if the user is actually entering text in a cell or is using the type-ahead feature and then, execute appropriate code.

### Séquence de frappe

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- lorsqu'un IME (Input method editor) affiche une boîte de dialogue intermédiaire où l'utilisateur peut saisir une combinaison de caractères : les événements sont générés uniquement lorsque la boîte de dialogue IME est validée.

### Voir également

[On After Keystroke](onAfterKeystroke.md).
