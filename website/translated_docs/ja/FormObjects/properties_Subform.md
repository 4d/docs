---
id: propertiesSubform
title: サブフォーム
---

---
## 削除を許可

リストサブフォーム内でユーザーがサブレコードを削除できるかどうかを指定します。

#### JSON 文法

| 名               | データタイプ  | とりうる値                     |
| --------------- | ------- | ------------------------- |
| deletableInList | boolean | true, false (デフォルトは true) |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)


---
## 詳細フォーム

このプロパティを使用して、サブフォームで使用する詳細フォームを割り当てます。 It can be:

- a widget, i.e. a page-type subform endowed with specific functions. In this case, the [list subform](#list-form) and [Source](#source) properties must be empty or not present.   
  You can select a component form name when it is published in the component.
> You can generate [components](Concepts/components.md) providing additional functionalities through subforms.

- the detail form to associate a with the [list subform](#list-form). The detail form can be used to enter or view subrecords. It generally contains more information than the list subform. Naturally, the detail form must belong to the same table as the subform. You normally use an Output form as the list form and an Input form as the detail form. If you do not specify the form to use for full page entry, 4D automatically uses the default Input format of the table.


#### JSON 文法

| 名          | データタイプ | とりうる値                                                                                                                               |
| ---------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| detailForm | string | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)

---
## 空行をダブルクリック

Action to perform in case of a double-click on an empty line of a list subform. The following options are available:
- Do nothing: Ignores double-click.
- Add Record: Creates a new record in the subform and changes to editing mode. The record will be created directly in the list if the [Enterable in List] property is enabled. Otherwise, it will be created in page mode, in the [detail form](detail-form) associated with the subform.


#### JSON 文法

| 名                            | データタイプ | とりうる値                              |
| ---------------------------- | ------ | ---------------------------------- |
| doubleClickInEmptyAreaAction | string | "addSubrecord" or "" to do nothing |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)

#### 参照
[Double click on row](#double-click-on-row)

---
## 行をダブルクリック

`List subform`

Sets the action to be performed when a user double-clicks on a row in a list subform. 選択可能なオプションは以下の通りです:

*   **何もしない** (デフォルト): 行をダブルクリックしても自動アクションは発動しません。
*   **Edit Record**: Double-clicking a row displays the corresponding record in the [detail form defined for the list subform](#detail-form). レコードは読み書き可能モードで開かれるので、編集が可能です。
*   **レコード表示**: レコード編集と同様の挙動をしますが、レコードは読み取り専用モードで開かれるため、編集はできません。

選択されているアクションに関わらず、`On Double Clicked` フォームイベントが生成されます。

「レコード編集」「レコード表示」のアクションに関しては `On Open Detail` フォームイベントも生成されます。 リストボックスに関連付けられた詳細フォームに表示されたレコードが閉じられる際には `On Close Detail` フォームイベントが生成されます (レコードが編集されたかどうかは問いません)。

#### JSON 文法

| 名                      | データタイプ | とりうる値                               |
| ---------------------- | ------ | ----------------------------------- |
| doubleClickInRowAction | string | "editSubrecord", "displaySubrecord" |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)


#### 参照
[Double click on empty row](#double-click-on-empty-row)

---
## リスト更新可

When a list subform has this property enabled, the user can modify record data directly in the list, without having to use the [associated detail form](#detail-form).

> To do this, simply click twice on the field to be modified in order to switch it to editing mode (make sure to leave enough time between the two clicks so as not to generate a double-click).


#### JSON 文法

| 名               | データタイプ  | とりうる値       |
| --------------- | ------- | ----------- |
| enterableInList | boolean | true, false |


#### 対象オブジェクト

[サブフォーム](subform_overview.md)


---
## リストフォーム

You use this property to declare the list form to use in the subform.  A list subform lets you enter, view, and modify data in other tables.

List subforms can be used for data entry in two ways: the user can enter data directly in the subform, or enter it in an [input form](#detail-form). In this configuration, the form used as the subform is referred to as the List form. The input form is referred to as the Detail form.

You can also allow the user to enter data in the List form.

#### JSON 文法

| 名        | データタイプ | とりうる値                                                                                                                               |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| listForm | string | Name (string) of table or project form, a POSIX path (string) to a .json file describing the form, or an object describing the form |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)



---
## ソース

Specifies the table that the list subform belongs to (if any).

#### JSON 文法

| 名     | データタイプ | とりうる値                             |
| ----- | ------ | --------------------------------- |
| table | string | 4D table name, or "" if no table. |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)

---
## 選択モード

リストボックス行の選択モードを指定します:
- **なし**: 行を選択することはできません。 Clicking on the list will have no effect unless the [Enterable in list](subform_overview.md#enterable-in-list) option is enabled. ナビゲーションキーを使用しても、リストをスクロールするだけとなり、その際に `On Selection Change` フォームイベントは生成されません。
- **単一**: 一度に一行のみ選択できます。 クリックすることで、行を選択できます。 **Ctrl+クリック** (Windows) や **Command+クリック** (macOS) を使うと、対象行の選択状態 (選択・非選択) が切り替わります  
  上下キーを使うとリストの前後の行が選択されます。 その他のナビゲーションキーはリストをスクロールします。 カレントの行が変更されるたびに、`On Selection Change` フォームイベントが生成されます。
- **複数**: 標準のショートカットを使用して複数行を同時に選択できます。
    - The selected subrecords are returned by the `GET HIGHLIGHTED RECORDS` command.
    - Clicking on the record will select it, but it does not modify the current record.
    - A **Ctrl+click** (Windows) or **Command+click** (macOS) on a record toggles its state (between selected or not). The Up and Down arrow keys select the previous/next record in the list. その他のナビゲーションキーはリストをスクロールします。 The `On Selection Change` form event is generated every time the selected record is changed.


#### JSON 文法

| 名             | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| selectionMode | string | "multiple", "single", "none" |

#### 対象オブジェクト

[サブフォーム](subform_overview.md)
