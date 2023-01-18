---
id: onPrintingDetail
title: On Printing Detail
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Définition                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 23   | [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) -Formulaire - [Liste hiérarchique](FormObjects/list_overview.md) - [Zone de saisie](FormObjects/input_overview.md) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | La zone détaillée du formulaire est sur le point d’être imprimée |


## Description

L'événement `On Printing Detail` ne peut être utilisé que dans le contexte d'un **formulaire de sortie**. Il est déclenché lorsque la zone de détail du formulaire de sortie est sur le point d'être imprimée, par exemple suite à un appel à la commande `Print form`.

La commande `Print form` génère un seul événement `On Printing Detail` pour la méthode formulaire.

> Cet événement ne peut pas être sélectionné pour les formulaires projet, il est uniquement disponible avec les **formulaires table**.

