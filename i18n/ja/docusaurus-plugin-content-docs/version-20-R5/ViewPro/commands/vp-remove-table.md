---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R6 | 追加 |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( _vpAreaName_ : Object; _tableName_ : Text {; _options_ : Integer} {; _sheet_ : Integer}} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro エリア名                               |                  |
| tableName  | Text    | -> | 削除する表組みの名称                                     |                  |
| options    | Integer | -> | 追加のオプション                                       |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP REMOVE TABLE` コマンドは、<!-- REF #_method_.VP REMOVE TABLE.Summary -->表組みを削除します<!-- END REF --> ([VP CREATE TABLE](vp-create-table.md) で作成した表組み)。

_vpAreaName_ には、削除したい表組みが置かれている 4D View Pro エリアの名前を渡します。

_tableName_ には、削除する表組みの名称を渡します。

_options_ には、追加のオプションを指定できます。 とりうる値:

| 定数                    | 値 | 説明                |
| --------------------- | - | ----------------- |
| vk table remove all   | 0 | スタイルとデータを含むすべてを削除 |
| vk table remove style | 1 | スタイルを削除し、データは保持   |
| vk table remove data  | 2 | データを削除し、スタイルは維持   |

表組み名はシートのレベルで定義されます。 任意の _sheet_ 引数にシートインデックス (0 起点) を指定することで、表が置かれているシートを指定できます。

#### 例題

2番目のシートの "people" の表組みを削除し、セルのデータは保持します:

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

#### 参照

[VP CREATE TABLE](vp-create-table.md)
