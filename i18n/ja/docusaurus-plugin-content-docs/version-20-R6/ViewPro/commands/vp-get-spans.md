---
id: vp-get-spans
title: VP Get spans
---

<!-- REF #_method_.VP Get spans.Syntax -->

**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get spans.Params -->

| 引数       | 型      |                             | 説明                   |                  |
| -------- | ------ | --------------------------- | -------------------- | ---------------- |
| rangeObj | Object | ->                          | レンジオブジェクト            |                  |
| 戻り値      | Object | <- | 指定レンジ内にあるセル結合のオブジェクト | <!-- END REF --> |

#### 説明

`VP Get spans` コマンドは、<!-- REF #_method_.VP Get spans.Summary -->*rangeObj* で指定したレンジ内にあるセル結合を取得します<!-- END REF -->。

*rangeObj* 引数で、セル結合を取得したいレンジを指定します。 *rangeObj* にセル結合が含まれない場合には、空のレンジが返されます。

#### 例題

ドキュメント内の結合セルにおいて、テキストを中央揃えに変更します:

![](../../assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// すべてのセル結合を検索します
$range:=VP Get spans(VP All("ViewProArea"))

// テキストを中央揃えにします
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### 参照

[VP ADD SPAN](vp-add-span.md)<br/>
[VP REMOVE SPAN](vp-remove-span.md)
