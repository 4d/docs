---
id: onClicked
title: On Clicked
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 定義              |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| 4   | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Combo Box](FormObjects/comboBox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | オブジェクト上でクリックされた |

## 説明

`On Clicked` イベントは、ユーザーがオブジェクト上でクリックしたときに発生します。

> いくつかのフォームオブジェクトはキーボードからも操作可能です。 たとえば、チェックボックスがフォーカスを得ると、スペースバーでオン/オフを切り替えることができます。 この場合でも `On Clicked` イベントは生成されます。

`On Clicked` イベントは通常、マウスボタンが離されたときに生成されます。 しかし、いくつか例外があります: しかし、いくつか例外があります: しかし、いくつか例外があります: しかし、いくつか例外があります:

- [非表示ボタン](FormObjects/properties_Display.md#レンダリングしない): マウスがクリックされると、ボタンが離されるのを待たずに `On Clicked` イベントが生成されます。
- [ルーラー](FormObjects/ruler.md): [オブジェクトメソッド実行](FormObjects/properties_Action.md#オブジェクトメソッド実行) オプションが **true** に設定されていると、`On Clicked` イベントはクリックがおこなわれるとすぐに生成されます。
- [コンボボックス](FormObjects/comboBox_overview.md): `On Clicked`イベントは、割り当てられたメニューでユーザーが別の値を選択した場合にのみ発生します。 [コンボボックス](FormObjects/comboBox_overview.md) は、割り当てられたドロップダウンリストにデフォルト値が提供された、入力可能なテキストエリアとして扱われます。 つまり、コンボボックス内におけるデータ入力処理は、`On Before Keystroke` や `On After Keystroke`、`On Data Change` イベントを使用しておこなう必要があります。 [コンボボックス](FormObjects/comboBox_overview.md) は、割り当てられたドロップダウンリストにデフォルト値が提供された、入力可能なテキストエリアとして扱われます。 つまり、コンボボックス内におけるデータ入力処理は、`On Before Keystroke` や `On After Keystroke`、`On Data Change` イベントを使用しておこなう必要があります。
- [ドロップダウンリスト](FormObjects/dropdownList_Overview.md): `On Clicked` イベントは、ユーザーがメニューで別の値を選択した場合にのみ発生します。 `On Data Change` イベントは、現在の値とは異なる値が選択されたときに、オブジェクトが操作されたことを検出することができます。 `On Data Change` イベントは、現在の値とは異なる値が選択されたときに、オブジェクトが操作されたことを検出することができます。 `On Data Change` イベントは、現在の値とは異なる値が選択されたときに、オブジェクトが操作されたことを検出することができます。 `On Data Change` イベントは、現在の値とは異なる値が選択されたときに、オブジェクトが操作されたことを検出することができます。
- リストボックスの入力セルが [編集中](FormObjects/listbox_overview.md#入力の管理) のとき、マウスボタンが押されると `On Clicked` イベントが発生するので、`Contextual click` コマンドなどを使用することができます。

`On Clicked` イベントのコンテキストにおいては `Clickcount` コマンドを使うことによってユーザーがおこなったクリック数をテストすることができます。

### On Clicked と On Double Clicked

`On Clicked` や [`On Double Clicked`](onDoubleClicked.md) オブジェクトイベントプロパティを選択したのち、`FORM Event` コマンドを使用してオブジェクト上でのクリックを検知し処理することができます。 `FORM Event` コマンドはユーザーアクションに応じ、`On Clicked` または [`On Double Clicked`](onDoubleClicked.md) を返します。

両イベントがオブジェクトに対し選択されている場合、ダブルクリックがおこなわれるとまず `On Clicked` が、そして `On Double Clicked` イベントが生成されます。

### 4D View Pro

このイベントは、4D View Pro ドキュメント上でクリックが発生したときに生成されます。 このイベントは、4D View Pro ドキュメント上でクリックが発生したときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | 型       | 説明               |
| ----------- | ------- | ---------------- |
| code        | longint | On Clicked       |
| description | テキスト    | "On Clicked"     |
| objectName  | テキスト    | 4D View Pro エリア名 |
| sheetName   | テキスト    | イベントが発生したシート名    |
| range       | object  | セルのレンジ           |

#### 例題

```4d
 If(FORM Event.code=On Clicked)
    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))
 End if
```
