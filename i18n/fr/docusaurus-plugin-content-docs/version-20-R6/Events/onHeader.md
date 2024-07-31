---
id: onHeader
title: Sur entête
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Définition                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| 5    | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form (list form only) - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | La zone d'en-tête du formulaire est sur le point d'être imprimée ou affichée. |

## Description

L'événement `On Header` est appelé lorsqu'un enregistrement est sur le point d'être affiché dans un formulaire liste affiché via `DISPLAY SELECTION` et `MODIFY SELECTION`.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

Dans ce contexte, la séquence d'appels de méthodes et d'événements de formulaire suivante est déclenchée :

- Pour chaque objet de la zone d'en-tête :
  - Méthode objet avec l'événement `On Header`
  - Méthode formulaire avec l'événement `On Header`

> Printed records are handled using the [`On Display Detail`](onDisplayDetail.md) event.

L'appel d'une commande 4D qui affiche une boîte de dialogue à partir de l'événement `On Header` n'est pas autorisé et générera une erreur de syntaxe. Plus particulièrement, les commandes concernées sont : `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, et `MODIFY SELECTION`.
