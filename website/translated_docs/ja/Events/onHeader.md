---
id: onHeader
title: On Header
---

| コード | 呼び出し元                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | 定義                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 5   | [4D Write Pro area](FormObjects/writeProArea_overview) - [Button](FormObjects/button_overview.md) - [Button Grid](FormObjects/buttonGrid_overview.md) - [Check Box](FormObjects/checkbox_overview.md) - [Dropdown list](FormObjects/dropdownList_Overview.md) - Form (list form only) - [Hierarchical List](FormObjects/list_overview.md#overview) - [Input](FormObjects/input_overview.md) - [Picture Button](FormObjects/pictureButton_overview.md) - [Picture Pop up menu](FormObjects/picturePopupMenu_overview.md) - [Plug-in Area](FormObjects/pluginArea_overview.md#overview) - [Progress Indicators](FormObjects/progressIndicator.md) - [Radio Button](FormObjects/radio_overview.md) - [Ruler](FormObjects/ruler.md) - [Spinner](FormObjects/spinner.md) - [Splitter](FormObjects/splitters.md) - [Stepper](FormObjects/stepper.md) - [Tab control](FormObjects/tabControl.md) | The form's header area is about to be printed or displayed. |


## 説明

The `On Header` event is called when a record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- For each object in the header area:
    - Object method with `On Header` event
    - Form method with `On Header` event

> Printed records are handled using the [`On Display Detail`](onDisplayDetail.md) event.

Calling a 4D command that displays a dialog box from the `On Header` event is not allowed and will cause a syntax error to occur. 以下のコマンドが該当します: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, `MODIFY SELECTION`。