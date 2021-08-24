---
id: onDisplayDetail
title: On Display Detail
---

| コード | 呼び出し元                                             | 定義                                                                                                |
| --- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 8   | フォーム - [リストボックス](FormObjects/listbox_overview.md) | A record is about to be displayed in a list form or a row is about to be displayed in a list box. |


## 説明

The `On Display Detail` event can be used in the following contexts:

### Output form

A record is about to be displayed in a list form displayed via `DISPLAY SELECTION` and `MODIFY SELECTION`.

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

In this context, the following sequence of calls to methods and form events is triggered:

- For each record:
    - For each object in the detail area:
        - Object method with `On Display Detail` event
    - Form method with `On Display Detail` event

> The header area is handled using the [`On Header`](onHeader.md) event.

Calling a 4D command that displays a dialog box from the `On Display Detail` event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, and `MODIFY SELECTION`.


### セレクションリストボックス

This event is generated when a row of a [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes) list box is displayed.


### Displayed line number

The `Displayed line number` 4D command works with the `On Display Detail` form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen.
