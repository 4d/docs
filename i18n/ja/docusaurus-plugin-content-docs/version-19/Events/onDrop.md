---
id: onDrop
title: On Drop
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 定義                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 16  | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | データがオブジェクトにドロップされた |


## 説明

`On Drop` イベントはマウスポインターがドロップ先オブジェクト上でリリースされたときにそのオブジェクトに一度送られます。 このイベントはドラッグ＆ドロップ処理の第2段階であり、ユーザーアクションの応答として処理を実行します。

このイベントは、[`On Drag Over`](onDragOver.md) イベント中にドラッグが受け付けられなかった場合には、オブジェクトに送られません。 オブジェクトに対して `On Drag Over` イベントを処理し、ドラッグを拒否した場合には、`On Drop` イベントは発生しません。 つまり、`On Drag Over` イベント中にソースオブジェクトとドロップ先オブジェクト間のデータタイプの互換性をテストして、有効なドロップを受け付けた場合には、`On Drop` 中にデータの再テストをする必要はありません。 データがドロップ先オブジェクトに対して適切であることは既にわかっているためです。



#### 参照
[`On Begin Drag Over`](onBeginDragOver.md)