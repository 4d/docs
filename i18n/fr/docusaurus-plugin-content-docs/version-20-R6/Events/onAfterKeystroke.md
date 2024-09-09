---
id: onAfterKeystroke
title: On After Keystroke
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` retourne le texte de l'objet, **y compris** ce caractère. |

<details><summary>Historique</summary>

| Release | Modifications                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| 18 R5   | - Prise en charge dans les list box non saisissables - L'événement est désormais déclenché après la validation IME |

</details>

## Description

> L'événement `On After Keystroke` peut généralement être remplacé par l'événement [`On After Edit`](onAfterEdit.md) (voir ci-dessous).

Après avoir sélectionné les propriétés d'événement [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `FORM event` qui retournera `On Before Keystroke` puis `On After Keystroke` (pour plus d'informations, veuillez vous reporter à la description de la commande `Get edited text`).

> Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

L'événement `On After Keystroke` n'est pas généré :

- dans la méthode [des colonnes de list box](FormObjects/listbox_overview.md#list-box-columns), sauf lorsqu'une cellule est en cours d'édition (cependant elle est générée dans tous les cas dans la méthode de [list box](FormObjects/listbox_overview.md)),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).

### Séquence d'entrée

Lorsqu'une saisie nécessite une séquence de frappes clavier, les événements [`On Before Keystroke`](onBeforeKeystroke.md) et les événements [`On After Keystroke`] sont générés uniquement lorsque la saisie est entièrement validée par l'utilisateur. La commande `Keystroke` retourne le caractère validé. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- lorsqu'un IME (Input method editor) affiche une boîte de dialogue intermédiaire où l'utilisateur peut saisir une combinaison de caractères : les événements sont générés uniquement lorsque la boîte de dialogue IME est validée.

### Voir également

[On Before Keystroke](onBeforeKeystroke.md).
