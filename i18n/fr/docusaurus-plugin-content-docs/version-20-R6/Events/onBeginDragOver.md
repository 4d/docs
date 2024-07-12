---
id: onBeginDragOver
title: On Begin Drag Over
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Définition                           |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 17   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Un objet est en cours de déplacement |

## Description

L'événement de formulaire `On Begin Drag Over` peut être sélectionné pour tous les objets formulaire pouvant être déplacés. Il est généré dans tous les cas où l'objet a la propriété [Draggable](FormObjects/properties_Action.md#draggable). Il peut être appelé à partir de la méthode de l'objet source ou de la méthode formulaire de l'objet source.

> Unlike the [`On Drag Over`](onDragOver.md) form event, `On Begin Drag Over` is called within the context of the **source object** of the drag action.

L'événement `On Begin Drag Over` est utile pour préparer l'action de glisser. Il peut être utilisé pour :

- Ajouter des données et des signatures au conteneur (via la commande `APPEND DATA TO PASTEBOARD`).
- Utiliser une icône personnalisée pendant l'action de glissement (via la commande `SET DRAG ICON`).
- Accepter ou refuser le glissement via $0 dans la méthode de l'objet glissé.
  - Pour indiquer que les actions de glissement sont acceptées, la méthode de l'objet source doit retourner 0 (zéro); vous devez donc exécuter `$0:=0`.
  - Pour indiquer que les actions de glissement sont refusées, la méthode de l'objet source doit retourner -1 (moins un); vous devez donc exécuter `$0:=-1`.
  - Si aucun résultat n'est retourné, 4D considère que les actions de glissement sont acceptées.

Les données 4D sont placées dans le presse-papiers avant d'appeler l'événement. Par exemple, dans le cas d'un glissement sans l'action de **glissement automatique**, le texte glissé se trouve déjà dans le conteneur lorsque l'événement est appelé.
