---
id: onDoubleClicked
title: On Double Clicked
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Définition                                 |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 13   | [Zone 4D View Pro](FormObjects/viewProArea_overview.md) - [Zone 4D Write Pro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) - Formulaire - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne de List Box](FormObjects/listbox_overview.md#list-box-columns) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) -[Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | Un double-clic a été effectué sur un objet |


## Description

L'événement `On Double Clicked` est généré lorsque l'utilisateur double-clique sur un objet. La durée maximale séparant un double-clic est définie dans les préférences système.

Si la propriété d'événement d'objet [`On Clicked`](onClicked.md) ou `On Double Clicked` est sélectionnée pour un objet, vous pouvez détecter et gérer les clics dans ou sur l'objet, à l'aide de la commande `FORM event` qui retourne [`On Clicked`](onClicked.md) ou `On Double Clicked`, selon le cas.

Si les deux événements sont sélectionnés pour un objet, les événements `On Clicked` puis `On Double Clicked` seront générés lorsque l'utilisateur double-clique sur l'objet.

### 4D View Pro

Cet événement est généré lorsque l'utilisateur double-clique n'importe où dans un document 4D View Pro. Dans ce contexte, l'[objet événement](overview.md#event-object) retourné par la commande `FORM Event` contient :

| Propriété   | Type        | Description                      |
| ----------- | ----------- | -------------------------------- |
| code        | entier long | 13                               |
| Description | text        | "On Double Clicked"              |
| objectName  | text        | Nom de la zone 4D View Pro       |
| sheetName   | text        | Nom de la feuille de l'événement |
| range       | object      | Plage de cellule                 |

#### Exemple

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```