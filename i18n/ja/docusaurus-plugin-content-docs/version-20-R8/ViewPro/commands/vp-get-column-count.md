---
id: vp-get-column-count
title: VP Get column count
---

<!-- REF #_method_.VP Get column count.Syntax -->

**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get column count.Params -->

| 引数         | 型       |                             | 説明                                             |                  |
| ---------- | ------- | --------------------------- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro エリアフォームオブジェクト名                     |                  |
| sheet      | Integer | ->                          | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Integer | <- | カラムの総数                                         | <!-- END REF --> |

#### 説明

`VP Get column count` コマンドは、<!-- REF #_method_.VP Get column count.Summary -->*sheet* 引数で指定したシートにおけるカラムの総数を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートのカラム数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

以下のコードを実行すると、4D View Pro エリア内のカラムの数が返されます:

```4d
C_INTEGER($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### 参照

[VP Get row count](vp-get-row-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
