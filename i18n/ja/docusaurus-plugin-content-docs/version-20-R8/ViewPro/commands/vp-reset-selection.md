---
id: vp-reset-selection
title: VP RESET SELECTION
---

<!-- REF #_method_.VP RESET SELECTION.Syntax -->

**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->

<!-- REF #_method_.VP RESET SELECTION.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP RESET SELECTION` コマンドは、<!-- REF #_method_.VP RESET SELECTION.Summary -->すべてのセル選択を解除し、その結果カレントセレクション (またはアクティブセル) がなくなります<!-- END REF -->。

> 4D View Pro コマンドに対して定義されているデフォルトのアクティブセル (A1 セル) は残ります。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

セル選択 (アクティブセルと選択セル) をすべて解除します:

```4d
VP RESET SELECTION("myVPArea")
```

#### 参照

[VP ADD SELECTION](vp-add-selection.md)<br/>
[VP Get active cell](vp-get-active-cell.md)<br/>
[VP Get selection](vp-get-selection.md)<br/>
[VP SET ACTIVE CELL](vp-set-active-cell.md)<br/>
[VP SET SELECTION](vp-set-selection.md)<br/>
[VP SHOW CELL](vp-show-cell.md)
