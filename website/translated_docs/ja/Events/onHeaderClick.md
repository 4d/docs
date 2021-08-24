---
id: onHeaderClick
title: On Header Click
---

| コード | 呼び出し元                                                                                                                                                      | 定義                        |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| 42  | [4D View Pro エリア](FormObjects/viewProArea_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | リストボックスの列ヘッダーでクリックがおこなわれた |


## 説明

### リストボックス

このイベントは、リストボックスの列ヘッダーでクリックがおこなわれると生成されます。 この場合 `Self` コマンドを使用すればクリックされた列ヘッダーを知ることができます。

リストボックスで [ソート可](FormObjects/properties_Action.md#ソート可) プロパティが選択されている場合、`$0` に 0 または -1 を渡して標準の並べ替えをおこなうかどうか指定できます:

- `$0 = 0` の場合、標準の並べ替えがおこなわれます。
- If `$0` equals -1, a standard sort is not performed and the header does not display the sort arrow. The developer can still generate a column sort based on customized sort criteria using the 4D language.

If the [Sortable](FormObjects/properties_Action.md#sortable) property is not selected for the list box, the `$0` variable is not used.

### 4D View Pro

This event is generated when the user clicks on a column or row header in a 4D View Pro document. In this context, the [event object](overview.md#event-object) returned by the `FORM Event` command contains:

| プロパティ       | タイプ    | 説明                                                                                                                                  |
| ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| code        | 倍長整数   | 42                                                                                                                                  |
| description | text   | "On Header Click"                                                                                                                   |
| objectName  | text   | 4D View Pro エリア名                                                                                                                    |
| sheetName   | text   | イベントが発生したシート名                                                                                                                       |
| range       | object | セルのレンジ                                                                                                                              |
| sheetArea   | 倍長整数   | The sheet location where the event took place:<br><li>0: The crossing area between column number/letter headers (top left of the sheet)</li><li>1: The column headers (area indicating the column numbers/letters)</li><li>2: The row headers (area indicating the row numbers)</li> |

#### 例題

```4d
 If(FORM Event.code=On Header Click)
    Case of
       :(FORM Event.sheetArea=1)
          $values:=VP Get values(FORM Event.range)
       :(FORM Event.sheetArea=2)
          VP SET CELL STYLE(FORM Event.range;New object("backColor";"gray"))
       :(FORM Event.sheetArea=0)
          VP SET CELL STYLE(FORM Event.range;New object("borderBottom";\
          New object("color";"#800080";"style";vk line style thick)))
    End case
 End if
```