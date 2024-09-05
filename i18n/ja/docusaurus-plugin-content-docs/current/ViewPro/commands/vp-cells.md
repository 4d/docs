---
id: vp-cells
title: VP Cells
---

<!-- REF #_method_.VP Cells.Syntax -->

**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #_method_.VP Cells.Params -->

| 引数          | 型      |    | 説明                                             |                  |
| ----------- | ------ | -- | ---------------------------------------------- | ---------------- |
| vpAreaName  | テキスト   | -> | 4D View Pro フォームオブジェクト名                        |                  |
| column      | 整数     | -> | カラムのインデックス                                     |                  |
| row         | 整数     | -> | 行のインデックス                                       |                  |
| columnCount | 整数     | -> | カラム数                                           |                  |
| rowCount    | 整数     | -> | 行数                                             |                  |
| sheet       | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値         | オブジェクト | <- | 複数セルのレンジオブジェクト                                 | <!-- END REF --> |

#### 説明

`VP Cells` コマンドは、<!-- REF #_method_.VP Cells.Summary -->指定された複数のセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*column* 引数で、セルレンジの先頭カラムを指定します。 この引数としてカラムのインデックス (0 起点) を渡します。 レンジが複数カラムにわたる場合、*columnCount* 引数も併せて使用します。

*row* 引数で、セルレンジの位置を決める行を指定します。 この引数として行のインデックス (0 起点) を渡します。 レンジが複数行にわたる場合、*rowCount* 引数も併せて使用します。

*columnCount* には、レンジに含まれるカラム数を指定することができます。 *columnCount* 引数は 0 より大きい値でなくてはなりません。

*rowCount* には、レンジに含まれる行数を指定することができます。 *rowCount* 引数は 0 より大きい値でなくてはなりません。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

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
