---
id: vp-column
title: VP Column
---

<!-- REF #_method_.VP Column.Syntax -->

**VP Column** ( _vpAreaName_ : Text ; _column_: Integer ; _columnCount_ : Integer { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Column.Params -->

| 引数          | 型       |    | 説明                                             |                  |
| ----------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| column      | Integer | -> | カラムのインデックス                                     |                  |
| columnCount | Integer | -> | カラム数                                           |                  |
| sheet       | Integer | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値         | Object  | <- | 複数セルのレンジオブジェクト                                 | <!-- END REF --> |

#### 説明

`VP Column` コマンドは、<!-- REF #_method_.VP Column.Summary -->特定のカラム、あるいは複数のカラムを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_column_ 引数で、カラムレンジの先頭カラムを指定します。 この引数としてカラムのインデックス (0 起点) を渡します。 レンジが複数カラムにわたる場合には、任意の _columnCount_ 引数も併せて使用します。

任意の _columnCount_ には、レンジに含まれるカラム数を指定することができます。 _columnCount_ 引数は 0 より大きい値でなくてはなりません。 省略時、デフォルトで値は 1 に設定され、カラム型のレンジが作成されます。

任意の _sheet_ 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

以下に表示されている (カレントスプレッドシートの) カラムに対するレンジオブジェクトを定義します:

![](../../assets/en/ViewPro/cmd_vpColumn.PNG)

以下のようにコードを書くことができます:

```4d
 $column:=VP Column("ViewProArea";3) // カラム D
```

#### 参照

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)
