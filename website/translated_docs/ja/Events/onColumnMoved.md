---
id: onColumnMoved
title: On Column Moved
---

| コード | 呼び出し元                                                                                             | 定義                                                       |
| --- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 32  | [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | A list box column is moved by the user via drag and drop |


## 説明

This event is generated when a column of the list box is moved by the user using drag and drop ([if allowed](FormObjects/propertiesListBox.html#locked-columns-and-static-columns)). It is not generated if the column is dragged and then dropped in its initial location.

The `LISTBOX MOVED COLUMN NUMBER` command returns the new position of the column. 