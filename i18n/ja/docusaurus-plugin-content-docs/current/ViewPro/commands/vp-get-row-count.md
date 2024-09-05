---
id: vp-get-row-count
title: VP Get row count
---

<!-- REF #_method_.VP Get row count.Syntax -->

**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get row count.Params -->

| 引数         | 型    |    | 説明                                             |                  |
| ---------- | ---- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名                     |                  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | 整数   | <- | 行の総数                                           | <!-- END REF --> |

#### 説明

`VP Get row count` コマンドは、<!-- REF #_method_.VP Get row count.Summary -->*sheet* 引数で指定したシートにおける行の総数を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートの行数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

以下のコードを実行すると、4D View Pro エリア内の行の数が返されます:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### 参照

[VP Get column count](vp-get-column-count.md)<br/>
[VP SET COLUMN COUNT](vp-set-column-count.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
