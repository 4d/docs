---
id: onLosingFocus
title: On Losing focus
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 定義                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| 14  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [4D Write Pro エリア](FormObjects/writeProArea_overview.md) - [ボタン](FormObjects/button_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [プラグインエリア](FormObjects/pluginArea_overview.md) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [ステッパー](FormObjects/stepper.md) - [サブフォーム](FormObjects/subform_overview.md) - [Web エリア](FormObjects/webArea_overview.md) | フォームオブジェクトがフォーカスを失った |

## 説明

`On Losing Focus` イベントや [`On Getting Focus`](onGettingFocus.md) イベントを使って、[フォーカス可](FormObjects/properties_Entry.md#フォーカス可) オブジェクトのフォーカスの変更を処理できます。

[サブフォームオブジェクト](FormObjects/subform_overview.md) の場合、このイベントがプロパティリスト中でチェックされていれば、サブフォームオブジェクトのメソッド内で生成されます。  これによってたとえば、フォーカスに応じてサブフォーム中のナビゲーションボタンの表示を管理できます。 サブフォームオブジェクトは、それ自体がフォーカスを持つ点に留意してください。
