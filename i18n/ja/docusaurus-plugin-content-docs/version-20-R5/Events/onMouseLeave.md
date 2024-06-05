---
id: onMouseLeave
title: On Mouse Leave
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 定義                       |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| 36  | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) -[ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | マウスカーソルがオブジェクトの描画エリアから出た |

## 説明

このイベントは、マウスカーソルがフォームオブジェクトの描画エリアから出たときに一度だけ発生します。

`On Mouse Leave` イベントは、_MouseX_ および _MouseY_ システム変数を更新します。

`OBJECT SET VISIBLE` コマンドの使用や、[表示状態](FormObjects/properties_Display.md#表示状態) プロパティの設定によって非表示にされたオブジェクトでは、このイベントは生成されません。

### コールスタック

`On Mouse Leave` イベントがフォームにおいてチェックされている場合、各フォームオブジェクトに対してイベントが生成されます。 あるオブジェクトにおいてチェックされている場合は、そのオブジェクトに対してのみ生成されます。 重なったオブジェクトがある場合はトップレベルから順に、イベントを処理することができる最初のオブジェクトによって生成されます。

### 参照

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)
