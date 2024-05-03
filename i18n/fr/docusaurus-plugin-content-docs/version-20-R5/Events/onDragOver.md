---
id: onDragOver
title: On Drag Over
---

| Code | Peut être appelé par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Définition                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| 21   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | Les données peuvent être déposées sur un objet |

## Description

The `On Drag Over` event is repeatedly sent to the destination object when the mouse pointer is moved over the object. Généralement, en réponse à cet événement :

- Get the data and signatures found in the pasteboard (via the `GET PASTEBOARD DATA` command).
- Depending on the nature and type of data in the pasteboard, you **accept** or **reject** the drag and drop.

To **accept** the drag, the destination object method must return 0 (zero), so you write `$0:=0`.
To **reject** the drag, the object method must return -1 (minus one), so you write `$0:=-1`.
During an `On Drag Over` event, 4D treats the object method as a function. Si aucun résultat n'est retourné, 4D suppose que le glissement est accepté.

Si vous acceptez le glissement, l'objet de destination est mis en surbrillance. Si vous refusez le glissement, la destination n'est pas mise en surbrillance. Accepter le glissement ne signifie pas que les données déplacées vont être insérées dans l'objet de destination. It only means that if the mouse button was released at this point, the destination object would accept the dragged data and the [`On Drop`](onDrop.md) event would be fired.

If you do not process the `On Drag Over` event for a droppable object, that object will be highlighted for all drag over operations, no matter what the nature and type of the dragged data.

The `On Drag Over` event is the means by which you control the first phase of a drag-and-drop operation. Vous pouvez non seulement tester si les données déplacées sont d'un type compatible avec l'objet de destination, puis accepter ou rejeter le glissement; vous pouvez simultanément avertir l'utilisateur de ce fait, car 4D met en évidence (ou non) l'objet de destination, en fonction de votre décision.

The code handling an `On Drag Over` event should be short and execute quickly, because that event is sent repeatedly to the current destination object, due to the movements of the mouse.

#### Voir également

[`On Begin Drag Over`](onBeginDragOver.md)
