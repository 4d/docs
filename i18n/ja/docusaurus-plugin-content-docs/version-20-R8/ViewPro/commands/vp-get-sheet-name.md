---
id: vp-get-sheet-name
title: VP Get sheet name
---

<!-- REF #_method_.VP Get sheet name.Syntax -->

**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get sheet name.Params -->

| 引数         | 型       |                             | 説明                      |                  |
| ---------- | ------- | --------------------------- | ----------------------- | ---------------- |
| vpAreaName | Text    | ->                          | 4D View Pro フォームオブジェクト名 |                  |
| sheet      | Integer | ->                          | シートのインデックス              |                  |
| 戻り値        | Text    | <- | シート名                    | <!-- END REF --> |

#### 説明

`VP Get sheet name` コマンドは、<!-- REF #_method_.VP Get sheet name.Summary -->*vpAreaName* 引数で指定したエリア内の、インデックスで指定したシートの名前を返します。<!-- END REF -->

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* には、名前を返して欲しいシートのインデックスを渡します。

渡したシートインデックスが存在しない場合、コマンドは空の文字列を返します。

> インデックスは 0 起点です。

#### 例題

ドキュメント内の 3つめのシートの名前を取得します:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### 参照

[VP Get sheet index](vp-get-sheet-index.md)
