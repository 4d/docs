---
id: onOpenDetail
title: On Open Detail
---

| コード | 呼び出し元                                             | 定義                                                                                          |
| --- | ------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| 25  | フォーム - [リストボックス](FormObjects/listbox_overview.md) | The detail form associated with the output form or with the list box is about to be opened. |


## 説明

The `On Open Detail` event can be used in the following contexts:

- **Output forms**: A record is about to be displayed in the detail form associated with the output form. このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。
- List box of the [**selection type**](FormObjects/listbox_overview.md#selection-list-boxes): This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened).


### Displayed line number

The `Displayed line number` 4D command works with the `On Open Detail` form event. このコマンドは、レコードのリストまたはリストボックスの行が画面に表示されるときに処理されている行の番号を返します。
