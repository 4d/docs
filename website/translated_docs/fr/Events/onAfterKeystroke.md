---
id: onAfterKeystroke
title: Sue après frappe clavier
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` returns the object's text **including** this character. |

<details><summary>Historique</summary>

| Version | Modifications                                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------------------------- |
| v18 R5  | - Support in non-enterable list boxes<p>- The event is now triggered after IME validation |
</details>


## Description

> L'événement `On After Keystroke` peut généralement être remplacé par l'événement On After Edit</code> (voir ci-dessous).

Après avoir sélectionné les propriétés d'événement [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `FORM event` qui renverra `On Before Keystroke` puis `On After Keystroke` (pour plus d'informations, veuillez reportez-vous à la description de la commande `Get edited text`).

> Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

L'événement `On After Keystroke` n'est pas généré :

- dans la méthode [des colonnes de list box](FormObjects/listbox_overview.md#list-box-columns), sauf lorsqu'une cellule est en cours d'édition (cependant elle est générée dans tous les cas dans la méthode de [list box](FormObjects/listbox_overview.md)),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).


### Séquence de frappe

Lorsqu'une entrée nécessite une séquence de frappes clavier, les événements [`On Before Keystroke`](onBeforeKeystroke.md) et [`On After Keystroke event`] sont générés uniquement lorsque l'entrée est entièrement validée par l'utilisateur. La commande `Keystroke` retourne le caractère validé. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- when an IME (Input Code Editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated.


### Voir aussi
[On Before Keystroke](onBeforeKeystroke.md).