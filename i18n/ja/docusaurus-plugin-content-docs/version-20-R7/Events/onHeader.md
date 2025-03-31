---
id: onHeader
title: On Header
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | 定義                             |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 5   | [4D Write Pro area](FormObjects/writeProArea_overview.md) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form (list form only) - [Hierarchical List](FormObjects/list_overview.md) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | フォームのヘッダーエリアが印刷あるいは表示されようとしている |

## 説明

`On Header` イベントは、`DISPLAY SELECTION` や `MODIFY SELECTION` によって、リストフォームでレコードを表示されようとしているときに呼び出されます。

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- ヘッダーエリアのオブジェクトごとに:
    - オブジェクトメソッドの `On Header` イベント
    - フォームメソッドの `On Header` イベント

> 印刷されるレコードは、[`On Display Detail`](onDisplayDetail.md) イベントで処理されます。

`On Header` イベントから、ダイアログボックスを表示する 4Dコマンドを呼び出すことはできません。これはシンタックスエラーを起こします。  以下のコマンドが該当します: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, `MODIFY SELECTION`。