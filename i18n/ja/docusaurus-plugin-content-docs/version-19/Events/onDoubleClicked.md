---
id: onDoubleClicked
title: On Double Clicked
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | 定義                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------ |
| 13  | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) | オブジェクト上でダブルクリックされた |


## 説明

`On Double Clicked` イベントは、ユーザーがオブジェクトをダブルクリックしたときに発生します。 ダブルクリック間隔の最大時間は、システム環境設定で定義されています。

[`On Clicked`](onClicked.md) や `On Double Clicked` オブジェクトイベントプロパティを選択したのち、`FORM Event` コマンドを使用してオブジェクト上でのクリックを検知し処理することができます。 `FORM Event` コマンドはユーザーアクションに応じ、[`On Clicked`](onClicked.md) または `On Double Clicked` を返します。

両イベントがオブジェクトに対し選択されている場合、ダブルクリックがおこなわれるとまず `On Clicked` が、そして `On Double Clicked` イベントが生成されます。

### 4D View Pro

このイベントは、4D View Pro ドキュメント上でダブルクリックが発生したときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | 型       | 説明                  |
| ----------- | ------- | ------------------- |
| code        | longint | 13                  |
| description | テキスト    | "On Double Clicked" |
| objectName  | テキスト    | 4D View Pro エリア名    |
| sheetName   | テキスト    | イベントが発生したシート名       |
| range       | object  | セルのレンジ              |

#### 例題

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```