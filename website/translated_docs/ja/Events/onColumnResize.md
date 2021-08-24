---
id: onColumnResize
title: On Column Resize
---

| コード | 呼び出し元                                                                                                                                                                       | 定義                                                                                             |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| 33  | [4D View Pro Area](FormObjects/viewProArea_overview.md) - [List Box](FormObjects/listbox_overview.md) - [List Box Column](FormObjects/listbox_overview.md#list-box-columns) | The width of a column is modified directly by the user or consequently to a form window resize |


## 説明

### リストボックス

This event is generated when the width of a column in the list box is modified by a user. The event is triggered "live", *i.e.*, sent continuously during the event, for as long as the list box or column concerned is being resized. This resizing is performed manually by a user, or may occur as a result of the list box and its column(s) being resized along with the form window itself (whether the form is resized manually or using the `RESIZE FORM WINDOW` command).

> The `On Column Resize` event is not triggered when a [fake column](FormObjects/propertiesResizingOptions.html#about-the-fake-blank-column) is resized.

### 4D View Pro

This event is generated when the width of a column is modified by a user. このコンテキストにおいて、`FORM Event` コマンドによって返される [イベントオブジェクト](overview.md#イベントオブジェクト) には以下のプロパティが含まれています:

| プロパティ       | タイプ     | 説明                                                                  |
| ----------- | ------- | ------------------------------------------------------------------- |
| code        | 倍長整数    | On Column Resize                                                    |
| description | text    | "On Column Resize"                                                  |
| objectName  | text    | 4D View Pro エリア名                                                    |
| sheetName   | text    | イベントが発生したシート名                                                       |
| range       | object  | Cell range of the columns whose widths have changed                 |
| header      | boolean | True if the row header column (first column) is resized, else false |

#### 例題

```4d
 If(FORM Event.code=On Column Resize)
    VP SET CELL STYLE(FORM Event.range;New object("hAlign";vk horizontal align right))
 End if
```