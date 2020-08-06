---
id: onRowResize
title: On Row Resize
---

| Code | Can be called by                                        | Definition                                               |
| ---- | ------------------------------------------------------- | -------------------------------------------------------- |
| 60   | [4D View Pro Area](FormObjects/viewProArea_overview.md) | The height of a row is modified by a user with the mouse |


## 説明

This event is generated when the height of a row is modified by a user in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| プロパティ       | 型      | 説明                                                               |
| ----------- | ------ | ---------------------------------------------------------------- |
| code        | 倍長整数   | 60                                                               |
| description | テキスト   | "On Row Resize"                                                  |
| objectName  | テキスト   | 4D View Pro area name                                            |
| sheetName   | テキスト   | Name of the sheet of the event                                   |
| range       | オブジェクト | Cell range of the rows whose heights have changed                |
| header      | ブール    | True if the column header row (first row) is resized, else false |

#### 例題

```4d
 If(FORM Event.code=On Row Resize)
    VP SET CELL STYLE(FORM Event.range;New object("vAlign";vk vertical align top))
 End if
```