---
id: vp-set-sheet-name
title: VP SET SHEET NAME
---

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->

**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; *sheet*: Integer} )<!-- END REF -->

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |                  |
| name       | テキスト | -> | シートの新しい名称               |                  |
| sheet      | 整数   | -> | 名称変更するシートのインデックス        | <!-- END REF --> |

#### 説明

`VP SET SHEET NAME` コマンドは、<!-- REF #_method_.VP SET SHEET NAME.Summary -->*vpAreaName* 引数で指定した View Pro エリア内にロードされているドキュメント内のシート名を変更します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*name* 引数として、シートの新しい名前を渡します。

*sheet* 引数には、名称変更するシートのインデックスを渡します。

> インデックスは 0 起点です。

*sheet* が省略された場合、コマンドはカレントシートを名称変更します。

新しい名前には、次の文字を含めることはできません: `*, :, [, ], ?,\,/`

このコマンドは、以下の場合には何もしません:

- 新しい名前に禁止文字が含まれている
- 新しい名前が空の文字列である
- 新しい名前が既に存在している
- *sheet* に渡したインデックスが存在しない

#### 例題

3つ目のシートの名前を "Total first quarter" に変更します:

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](../../assets/en/ViewPro/vp-sheet-index-name.png)
