---
id: vp-get-sheet-count
title: VP Get sheet count
---

<!-- REF #_method_.VP Get sheet count.Syntax -->

**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF -->

<!-- REF #_method_.VP Get sheet count.Params -->

| 引数         | 型    |    | 説明                      |                  |
| ---------- | ---- | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |                  |
| 戻り値        | 整数   | <- | シートの数                   | <!-- END REF --> |

#### 説明

`VP Get sheet count` コマンドは、 <!-- REF #_method_.VP Get sheet count.Summary -->*vpAreaName* で指定したエリアにロードされているドキュメント内にあるシート数を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

#### 例題

以下のドキュメントにおいて:

![](../../assets/en/ViewPro/vp-sheet-3.png)

シート数を取得し、最後のシートをカレントシートに設定します:

```4d
 $count:=VP Get sheet count("ViewProArea")
  // 最後のシートをカレントシートに設定します (0 起点)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](../../assets/en/ViewPro/vp-sheet-3-select.png)

#### 参照

[VP Get sheet index](vp-get-sheet-index.md)<br/>
[VP SET SHEET COUNT](vp-set-sheet-count.md)
