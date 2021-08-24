---
id: onDrop
title: On Drop
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 定義                                   |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 16  | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | Data has been dropped onto an object |


## 説明

The `On Drop` event is sent once to the destination object when the mouse pointer is released over the object. This event is the second phase of the drag-and-drop operation, in which you perform an operation in response to the user action.

This event is not sent to the object if the drag was not accepted during the [`On Drag Over`](onDragOver.md) events. If you process the `On Drag Over` event for an object and reject a drag, the `On Drop` event does not occur. Thus, if during the `On Drag Over` event you have tested the data type compatibility between the source and destination objects and have accepted a possible drop, you do not need to re-test the data during the `On Drop`. You already know that the data is suitable for the destination object.



#### 参照
[`On Begin Drag Over`](onBeginDragOver.md)