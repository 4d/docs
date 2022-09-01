---
id: onBeginDragOver
title: Sur début survol
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Définition                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 17   | [Zone 4D WritePro](FormObjects/writeProArea_overview) - [Bouton](FormObjects/button_overview.md) - [Grille de boutons](FormObjects/buttonGrid_overview.md) - [Case à cocher](FormObjects/checkbox_overview.md) - [Liste déroulante](FormObjects/dropdownList_Overview.md) - Formulaire - [Liste hiérarchique](FormObjects/list_overview.md#overview) - [Zone de saisie](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [Colonne List Box](FormObjects/listbox_overview.md#list-box-columns) - [Bouton image](FormObjects/pictureButton_overview.md) - [Pop up menu image](FormObjects/picturePopupMenu_overview.md) - [Zone de plug-in](FormObjects/pluginArea_overview.md#overview) - [Indicateur de progression](FormObjects/progressIndicator.md) - [Bouton radio](FormObjects/radio_overview.md) - [Règle](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Onglet](FormObjects/tabControl.md) | Un objet est en cours de déplacement |


## Description

L'événement de formulaire `On Begin Drag Over` peut être sélectionné pour tous les objets formulaire pouvant être déplacés. Il est généré dans tous les cas où l'objet a la propriété [Draggable](FormObjects/properties_Action.md#draggable). Il peut être appelé à partir de la méthode de l'objet source ou de la méthode formulaire de l'objet source.

> Contrairement à l'événement de formulaire [`On Drag Over`](onDragOver.md), `On Begin Drag Over` est appelé dans le contexte de l'**objet source** de l'action de glisser.

L'événement `On Begin Drag Over` est utile pour préparer l'action de glisser. Il peut être utilisé pour :

- Ajouter des données et des signatures au conteneur (via la commande `APPEND DATA TO PASTEBOARD`).
- Utiliser une icône personnalisée pendant l'action de glissement (via la commande `SET DRAG ICON`).
- Accepter ou refuser le glissement via $0 dans la méthode de l'objet glissé.
    - Pour indiquer que les actions de glissement sont acceptées, la méthode de l'objet source doit retourner 0 (zéro); vous devez donc exécuter `$0:=0`.
    - Pour indiquer que les actions de glissement sont refusées, la méthode de l'objet source doit retourner -1 (moins un); vous devez donc exécuter `$0:=-1`.
    - Si aucun résultat n'est retourné, 4D considère que les actions de glissement sont acceptées.

Les données 4D sont placées dans le presse-papiers avant d'appeler l'événement. Par exemple, dans le cas d'un glissement sans l'action de **glissement automatique**, le texte glissé se trouve déjà dans le conteneur lorsque l'événement est appelé.