---
id: onValidate
title: On Validate
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | 定義                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| 3   | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) -[ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [サブフォーム](FormObjects/subform_overview.md) - [タブコントロール](FormObjects/tabControl.md) | レコードのデータ入力が受け入れられた |

## 説明

このイベントは、`SAVE RECORD` コマンドコールや `accept` [標準アクションの後](FormObjects/properties_Action.md#標準アクション) など、レコードデータの入力が受け入れられたときにトリガーされます。

### サブフォーム

`On Validate` イベントは、サブフォーム中でデータの受け入れをおこなう際に発生します。
