---
id: onBeforeKeystroke
title: On Before Keystroke
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` retourne le texte de l'objet, **sans** ce caractère. |

<details><summary>Historique</summary>

| Release | Modifications                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| 18 R5   | - Prise en charge dans les list box non saisissables - L'événement est désormais déclenché après la validation IME |
</details>

## Description

Après avoir sélectionné les événements `On Before Keystroke` et [`On After Keystroke event`](onAfterKeystroke.md) pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `Form event` qui retournera `On Before Keystroke` puis [`On After Keystroke`](onAfterKeystroke.md) (pour plus d'informations, veuillez vous reporter à la description de la commande `Get edited text`). Dans l'événement `On Before Keystroke`, la commande `FILTER KEYSTROKE` peut être utilisée pour filtrer les caractères typés.

> Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.

L'événement `On Before Keystroke` n'est pas généré :

- dans une méthode [colonnes de list box](FormObjects/listbox_overview.md#list-box-columns), sauf lorsqu'une cellule est en cours d'édition (cependant elle est générée dans tous les cas dans la méthode de [list box](FormObjects/listbox_overview.md)),
- lorsque les modifications utilisateur ne sont pas effectuées à l'aide du clavier (coller, glisser-déposer, case à cocher, liste déroulante, combo box). Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).

### Objets non saisissables

L'événement `On Before Keystroke` peut être généré dans des objets non saisissables, par exemple dans une list box même si les cellules de la list box ne sont pas saisissables ou si les lignes ne peuvent pas être sélectionnées. Cela vous permet de créer des interfaces dans lesquelles l'utilisateur peut faire défiler dynamiquement jusqu'à une ligne spécifique dans une list box en saisissant les premières lettres d'une valeur. Dans le cas où les cellules de la list box sont saisissables, vous pouvez utiliser la commande `Is editing text` pour savoir si l'utilisateur saisit réellement du texte dans une cellule ou s'il utilise la fonction de saisie prédictive, puis exécutez le code approprié.

### Séquence d'entrée

Lorsqu'une entrée nécessite une séquence de frappes clavier, les événements ``On Before Keystroke[`et [`On After Keystroke](onAfterKeystroke.md)] sont générés uniquement lorsque la saisie est entièrement validée par l'utilisateur. La commande `Keystroke` retourne le caractère validé. Ce cas se produit principalement :

- lors de l'utilisation de touches "mortes" telles que ^ ou ~: les événements ne sont générés que lorsque le caractère étendu est éventuellement saisi (par exemple "ê" ou ñ),
- lorsqu'un IME (Input method editor) affiche une boîte de dialogue intermédiaire où l'utilisateur peut saisir une combinaison de caractères : les événements sont générés uniquement lorsque la boîte de dialogue IME est validée.

### Voir également

[On After Keystroke](onAfterKeystroke.md).
