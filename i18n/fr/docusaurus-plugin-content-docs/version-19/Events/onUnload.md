---
id: onUnload
title: On Unload
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Définition                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| 24   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Subform](FormObjects/subform_overview.md) - [Tab control](FormObjects/tabControl.md) - [Web Area](FormObjects/webArea_overview.md) | Le formulaire est sur le point d'être quitté et généré |


## Description

Cet événement est déclenché lorsque le formulaire est généré.

Tous les objets du formulaire (de n'importe quelle page) dont la propriété d'événement `On Unload` est sélectionnée verront leur méthode objet appelée. Ensuite, si la propriété d'événement formulaire `On Unload` est sélectionnée, la méthode formulaire sera appelée.

> Les événements [`On Load`](onLoad.md) et [`On Unload`] sont générés pour les objets s'ils sont activés à la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les événements sont activés pour les objets uniquement, ils ne se produiront pas; ces deux événements doivent également être activés au niveau du formulaire.



### Sous-formulaire

L'événement `On Unload` est généré à la fermeture du sous-formulaire (cet événement doit également avoir été activé au niveau du formulaire parent pour être pris en compte). L'événement est généré avant ceux du formulaire parent. Notez également que, conformément aux principes de fonctionnement des événements de formulaire, si le sous-formulaire est placé sur une page autre que la page 0 ou 1, cet événement ne sera généré que lorsque cette page sera fermée (et non lorsque le formulaire sera fermé).


### Voir également

[`On Load`](onLoad.md)