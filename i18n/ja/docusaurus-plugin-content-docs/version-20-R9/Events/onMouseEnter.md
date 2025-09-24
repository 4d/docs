---
id: onMouseEnter
title: On Mouse Enter
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | 定義                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 35  | [4D Write Pro エリア](FormObjects/writeProArea_overview.md) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [コンボボックス](FormObjects/comboBox_overview.md) -[ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | マウスカーソルがオブジェクトの描画エリア内に入った |

## 説明

このイベントは、マウスカーソルがフォームオブジェクトの描画エリアに入ったときに一度だけ発生します。

`On Mouse Enter` イベントは、*MouseX* および *MouseY* システム変数を更新します。

Objects that are made invisible using the [`OBJECT SET VISIBLE`](../commands/object-set-visible) command or the [Visibility](FormObjects/properties_Display.md#visibility) property do not generate this event.

### コールスタック

`On Mouse Enter` イベントがフォームにおいてチェックされている場合、各フォームオブジェクトに対してイベントが生成されます。  あるオブジェクトにおいてチェックされている場合は、そのオブジェクトに対してのみ生成されます。 重なったオブジェクトがある場合はトップレベルから順に、イベントを処理することができる最初のオブジェクトによって生成されます。

### 参照

- [`On Mouse Move`](onMouseMove.md)
- [`On Mouse Leave`](onMouseLeave.md)