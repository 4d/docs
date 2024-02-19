---
id: onLoad
title: On Load
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Définition                                               |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 1    | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) - Formulaire - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) -[List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Sous-formulaire](FormObjects/subform_overview.md) - [Onglet](FormObjects/tabControl.md) - [Zone Web](FormObjects/webArea_overview.md) | Le formulaire est sur le point d'être affiché ou imprimé |


## Description

Cet événement est déclenché lorsque le formulaire est en cours de chargement ou d'impression.

Tous les objets du formulaire (de n'importe quelle page) dont la propriété d'événement `On Load` est sélectionnée verront leur méthode objet appelée. Ensuite, si la propriété d'événement formulaire `On Load` est sélectionnée, la méthode formulaire sera appelée.

> Les événements `On Load` et [`On Unload`](onUnload.md) sont générés pour les objets s'ils sont activés à la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les événements sont activés pour les objets uniquement, ils ne se produiront pas; ces deux événements doivent également être activés au niveau du formulaire.


### Sous-formulaire

L'événement `On Load` est généré à l'ouverture du sous-formulaire (cet événement doit également avoir été activé au niveau du formulaire parent pour être pris en compte). L'événement est généré avant ceux du formulaire parent. A noter également que, conformément aux principes de fonctionnement des événements de formulaire, si le sous-formulaire est placé sur une page autre que la page 0 ou 1, cet événement ne sera généré que lorsque cette page sera affichée (et non lorsque le formulaire sera affiché).


### Voir également

[`On Unload`](onUnload.md)