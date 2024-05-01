---
id: vp-get-sheet-index
title: VP Get sheet index
---

<!-- REF #_method_.VP Get sheet index.Syntax -->

**VP Get sheet index** ( _vpAreaName_ : Text ; _name_ : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet index.Params -->

| 引数         | タイプ     |    | 説明                      |                  |
| ---------- | ------- | -- | ----------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名 |                  |
| name       | Text    | -> | シート名                    |                  |
| 戻り値        | Integer | <- | シートのインデックス              | <!-- END REF --> |

#### 説明

`VP Get sheet index` コマンドは、<!-- REF #_method_.VP Get sheet index.Summary -->_vpAreaName_ 引数で指定したエリア内の、シート名で指定したシートのインデックスを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。

_name_ には、インデックスを返して欲しいシートの名前を渡します。 _name_ 引数のシート名がドキュメント内に見つからない場合、コマンドは -1 を返します。

> インデックスは 0 起点です。

#### 例題

以下のドキュメントにおいて:

![](../../assets/en/ViewPro/vp-sheet-index-name.png)

"Total first quarter" という名前のシートのインデックスを取得します:

```4d
$index:=VP Get sheet index("ViewProArea";"Total first quarter") // 2 を返します
```

#### 参照

[VP Get sheet count](vp-get-sheet-count.md)<br/>
[VP Get sheet name](vp-get-sheet-name.md)
