---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` retourne le texte de l'objet, **sans** ce caractère. |

<details><summary>Historique</summary>

| Release | Modifications                                                                           |
| ------- | --------------------------------------------------------------------------------------- |
| 18 R5   | - Support in non-enterable list boxes - The event is now triggered after IME validation |

</details>

## Description

After the `On Before Keystroke` and [`On After Keystroke event`](onAfterKeystroke.md) events are selected for an object, you can detect and handle the keystrokes within the object, using the `Form event code` command that will return `On Before Keystroke` and then [`On After Keystroke event`](onAfterKeystroke.md) (for more information, please refer to the description of the `Get edited text` command). Dans l'événement `On Before Keystroke`, la commande `FILTER KEYSTROKE` peut être utilisée pour filtrer les caractères typés.

> Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

L'événement `On Before Keystroke` n'est pas généré :

- dans une méthode [colonnes de list box](FormObjects/listbox_overview.md#list-box-columns), sauf lorsqu'une cellule est en cours d'édition (cependant elle est générée dans tous les cas dans la méthode de [list box](FormObjects/listbox_overview.md)),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). To process these events, you must use [`On After Edit`](onAfterEdit.md).

### Objets non saisissables

L'événement `On Before Keystroke` peut être généré dans des objets non saisissables, par exemple dans une list box même si les cellules de la list box ne sont pas saisissables ou si les lignes ne peuvent pas être sélectionnées. Cela vous permet de créer des interfaces dans lesquelles l'utilisateur peut faire défiler dynamiquement jusqu'à une ligne spécifique dans une list box en saisissant les premières lettres d'une valeur. Dans le cas où les cellules de la list box sont saisissables, vous pouvez utiliser la commande `Is editing text` pour savoir si l'utilisateur saisit réellement du texte dans une cellule ou s'il utilise la fonction de saisie prédictive, puis exécutez le co

### Séquence de frappe

When an entry requires a sequence of keystrokes, the `On Before Keystroke` and [`On After Keystroke`](onAfterKeystroke.md) events are generated only when the entry is fully validaded by the user. La commande `Keystroke` retourne le caractère validé. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- lorsqu'un IME (Input method editor) affiche une boîte de dialogue intermédiaire où l'utilisateur peut saisir une combinaison de caractères : les événements sont générés uniquement lorsque la boîte de dialogue IME est validée.

### Voir également

[On After Keystroke](onAfterKeystroke.md).
