---
id: vp-row
title: VP Row
---

<!-- REF #_method_.VP Row.Syntax -->

**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->

<!-- REF #_method_.VP Row.Params -->

| 引数         | 型       |                             | 説明                                             |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                        |                  |
| row        | Integer | ->                          | 行のインデックス                                       |                  |
| rowCount   | Integer | ->                          | 行数                                             |                  |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Object  | <- | Range object of row(s)      | <!-- END REF --> |

#### 説明

`VP Row` コマンドは、<!-- REF #_method_.VP Row.Summary -->特定の行、あるいは複数の行を参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*row* 引数で、セルレンジの先頭行を指定します。 この引数として行のインデックス (0 起点) を渡します。 レンジが複数行にわたる場合には、任意の *rowCount* 引数も併せて使用します。

任意の *rowCount* には、レンジに含まれる行数を指定することができます。 *rowCount* 引数は 0 より大きい値でなくてはなりません。 省略時、デフォルトで値は 1 に設定されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

以下に表示されている (カレントスプレッドシートの) 行に対するレンジオブジェクトを定義します:

![](../../assets/en/ViewPro/cmd_vpRow.PNG)

以下のように書くことができます:

```4d
$row:=VP Row("ViewProArea";9) // 10行目
```

#### 参照

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)
