---
id: onAfterKeystroke
title: Sue après frappe clavier
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                       | Définition                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| 28   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Combo Box](FormObjects/comboBox_overview.md) - Form - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | Un caractère est sur le point d'être saisi dans l'objet qui a le focus. `Get edited text` retourne le texte de l'objet, **y compris** ce caractère. |


<details><summary>Historique</summary>

| Version | Modifications                         |
| ------- | ------------------------------------- |
| v18 R5  | - Support in non-enterable list boxes |


<

p>- The event is now triggered after IME validation </details>

## Description

> L'événement `On After Keystroke` peut généralement être remplacé par l'événement On After Edit</code> (voir ci-dessous).</p> </blockquote> 
> 
> Après avoir sélectionné les propriétés d'événement [`On Before Keystroke`](onBeforeKeystroke.md) et `On After Keystroke` pour un objet, vous pouvez détecter et gérer les frappes au sein de l'objet, en utilisant la commande `FORM event` qui renverra `On Before Keystroke` puis `On After Keystroke` (pour plus d'informations, veuillez reportez-vous à la description de la commande `Get edited text`).
> 
> > Ces événements sont également activés par des commandes de langage qui simulent une action utilisateur telle que `POST KEY`.
> 
> The `On After Keystroke` event is not generated:
> 
> - in [list box columns](FormObjects/listbox_overview.md#list-box-columns) method except when a cell is being edited (however it is generated in any cases in the [list box](FormObjects/listbox_overview.md) method),
> - when user modifications are not carried out using the keyboard (paste, drag-and-drop, checkbox, drop down list, combo box). Pour traiter ces événements, vous devez utiliser [`On After Edit`](onAfterEdit.md).
> 
> ### Keystroke sequence
> 
> When an entry requires a sequence of keystrokes, the [`On Before Keystroke`](onBeforeKeystroke.md) and [`On After Keystroke event`] events are generated only when the entry is fully validaded by the user. The `Keystroke` command returns the validated character. This case mainly occurs:
> 
> - when using "dead" keys such as ^ or ~: events are generated only when the extended character is eventuelly entered (e.g. "ê" or ñ),
> - when an IME (Input method editor) displays an intermediary dialog box where the user can enter a combination of characters: events are generated only when the IME dialog is validated. 
> 
> ### Voir également
> 
> [On Before Keystroke](onBeforeKeystroke.md).