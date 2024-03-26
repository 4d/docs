---
id: vp-cells
title: VP Cells
---

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( _vpAreaName_ : Text ; _column_: Integer ; _row_: Integer ; _columnCount_ : Integer ; _rowCount_ : Integer { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #_method_.VP Cells.Params -->

| 引数          | タイプ     |    | 説明                                             |                  |
| ----------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName  | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| column      | Integer | -> | カラムのインデックス                                     |                  |
| row         | Integer | -> | 行のインデックス                                       |                  |
| columnCount | Integer | -> | カラム数                                           |                  |
| rowCount    | Integer | -> | 行数                                             |                  |
| sheet       | Integer | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値         | Object  | <- | 複数セルのレンジオブジェクト                                 | <!-- END REF --> |

#### 説明

`VP Cells` コマンドは、<!-- REF #_method_.VP Cells.Summary -->指定された複数のセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_column_ 引数で、セルレンジの先頭カラムを指定します。 この引数としてカラムのインデックス (0 起点) を渡します。 レンジが複数カラムにわたる場合、_columnCount_ 引数も併せて使用します。

_row_ 引数で、セルレンジの位置を決める行を指定します。 この引数として行のインデックス (0 起点) を渡します。 レンジが複数行にわたる場合、_rowCount_ 引数も併せて使用します。

_columnCount_ には、レンジに含まれるカラム数を指定することができます。 _columnCount_ 引数は 0 より大きい値でなくてはなりません。

_rowCount_ には、レンジに含まれる行数を指定することができます。 _rowCount_ 引数は 0 より大きい値でなくてはなりません。

任意の _sheet_ 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

(カレントシートにおいて) 以下のセルのレンジオブジェクトを定義します:

![](../../assets/en/ViewPro/vp-cells.png)

以下のようにコードを書くことができます:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 から D7
```

#### 参照

[VP All](vp-all.md)<br/>
[VP Cell](vp-cell.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
