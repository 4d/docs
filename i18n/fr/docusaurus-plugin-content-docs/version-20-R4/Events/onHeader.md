---
id: onHeader
title: On Header
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Définition                                                                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| 5    | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) -Formulaire (formulaire liste uniquement) - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | La zone d'en-tête du formulaire est sur le point d'être imprimée ou affichée. |


## Description

L'événement `On Header` est appelé lorsqu'un enregistrement est sur le point d'être affiché dans un formulaire liste affiché via `DISPLAY SELECTION` et `MODIFY SELECTION`.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

Dans ce contexte, la séquence d'appels de méthodes et d'événements de formulaire suivante est déclenchée :

- Pour chaque objet de la zone d'en-tête :
    - Méthode objet avec l'événement `On Header`
    - Méthode formulaire avec l'événement `On Header`

> Les enregistrements imprimés sont gérés à l'aide de l'événement [`On Display Detail`](onDisplayDetail.md).

L'appel d'une commande 4D qui affiche une boîte de dialogue à partir de l'événement `On Header` n'est pas autorisé et générera une erreur de syntaxe. Plus particulièrement, les commandes concernées sont : `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, et `MODIFY SELECTION`.