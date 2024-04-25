---
id: onHeader
title: On Header
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | 定義                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 5   | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [ボタン](FormObjects/button_overview.md) - [ボタングリッド](FormObjects/buttonGrid_overview.md) - [チェックボックス](FormObjects/checkbox_overview.md) - [ドロップダウンリスト](FormObjects/dropdownList_Overview.md) - フォーム (リストフォームのみ) - [階層リスト](FormObjects/list_overview.md) - [入力](FormObjects/input_overview.md) - [ピクチャーボタン](FormObjects/pictureButton_overview.md) - [ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md) - [プラグインエリア](FormObjects/pluginArea_overview.md#overview) - [進捗インジケーター](FormObjects/progressIndicator.md) - [ラジオボタン](FormObjects/radio_overview.md) - [ルーラー](FormObjects/ruler.md) - [スピナー](FormObjects/spinner.md) - [スプリッター](FormObjects/splitters.md) - [ステッパー](FormObjects/stepper.md) - [タブコントロール](FormObjects/tabControl.md) | フォームのヘッダーエリアが印刷あるいは表示されようとしている |

## 説明

`On Header` イベントは、`DISPLAY SELECTION` や `MODIFY SELECTION` によって、リストフォームでレコードを表示されようとしているときに呼び出されます。

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- ヘッダーエリアのオブジェクトごとに:
  - オブジェクトメソッドの `On Header` イベント
  - フォームメソッドの `On Header` イベント

> 印刷されるレコードは、[`On Display Detail`](onDisplayDetail.md) イベントで処理されます。

`On Header` イベントから、ダイアログボックスを表示する 4Dコマンドを呼び出すことはできません。これはシンタックスエラーを起こします。 以下のコマンドが該当します: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, `MODIFY SELECTION`。
