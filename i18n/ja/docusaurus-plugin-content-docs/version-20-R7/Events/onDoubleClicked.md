---
id: onDoubleClicked
title: On Double Clicked
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 定義                 |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 13  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) -[ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | オブジェクト上でダブルクリックされた |

## 説明

`On Double Clicked` イベントは、ユーザーがオブジェクトをダブルクリックしたときに発生します。 ダブルクリック間隔の最大時間は、システム環境設定で定義されています。

[`On Clicked`](onClicked.md) や `On Double Clicked` オブジェクトイベントプロパティを選択したのち、`FORM Event` コマンドを使用してオブジェクト上でのクリックを検知し処理することができます。`FORM Event` コマンドはユーザーアクションに応じ、[`On Clicked`](onClicked.md) または `On Double Clicked` を返します。

両イベントがオブジェクトに対し選択されている場合、ダブルクリックがおこなわれるとまず `On Clicked` が、そして `On Double Clicked` イベントが生成されます。

### 4D View Pro

このイベントは、4D View Pro ドキュメント上でダブルクリックが発生したときに生成されます。 このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | 型      | 説明                  |
| ----------- | ------ | ------------------- |
| code        | 倍長整数   | 13                  |
| description | テキスト   | "On Double Clicked" |
| objectName  | テキスト   | 4D View Pro エリア名    |
| sheetName   | テキスト   | イベントが発生したシート名       |
| range       | object | セルのレンジ              |

#### 例題

```4d
 If(FORM Event.code=On Double Clicked)
   $value:=VP Get value(FORM Event.range)
 End if
```
