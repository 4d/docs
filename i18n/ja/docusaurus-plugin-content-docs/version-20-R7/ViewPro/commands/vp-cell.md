---
id: vp-cell
title: VP Cell
---

<!-- REF #_method_.VP Cell.Syntax -->

**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->

<!-- REF #_method_.VP Cell.Params -->

| 引数         | 型       |                             | 説明                                             |
| ---------- | ------- | --------------------------- | ---------------------------------------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名                        |
| column     | Integer | ->                          | カラムのインデックス                                     |
| row        | Integer | ->                          | 行のインデックス                                       |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | Object  | <- | 単一セルのレンジオブジェクト                                 |

<!-- END REF -->

#### 説明

`VP Cell` コマンドは、<!-- REF #_method_.VP Cell.Summary -->特定のセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

> このコマンドは単一セルのレンジを想定しています。 複数セルに対するレンジオブジェクトを作成するには、[VP Cells](vp-cells.md) コマンドを使用します。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*column* 引数で、セルレンジの位置のカラムを定義します。 この引数としてカラムのインデックスを渡します。

*row* 引数で、セルレンジの位置をの行を定義します。 この引数として行のインデックスを渡します。

任意の *sheet* 引数で、レンジが定義されるシートのインデックスを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

> インデックスは 0 起点です。

#### 例題

以下に表示されている (カレントスプレッドシートの) セルに対するレンジオブジェクトを定義します:

![vp-cell](../../assets/en/ViewPro/cmd_vpCell.png)

以下のようにコードを書くことができます:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### 参照

[VP All](vp-all.md)<br/>
[VP Cells](vp-cells.md)<br/>
[VP Column](vp-column.md)<br/>
[VP Combine ranges](vp-combine-ranges.md)<br/>
[VP Name](vp-name.md)<br/>
[VP Row](vp-row.md)
