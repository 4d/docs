---
id: vp-remove-span
title: VP REMOVE SPAN
---

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->

**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP REMOVE SPAN` コマンドは、<!-- REF #_method_.VP REMOVE SPAN.Summary -->*rangeObj* で指定したレンジ内のセル結合を解除します<!-- END REF -->。

*rangeObj* には、セル結合しているレンジのオブジェクトを渡します。 レンジ内の結合セルは個別セルに分割されます。

#### 例題

ドキュメントのセル結合をすべて解除します:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 // すべてのセル結合を探します
 $span:=VP Get spans(VP All("ViewProArea"))


  // すべてのセル結合を解除します
 VP REMOVE SPAN($span)
```

結果:

![](../../assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### 参照

[VP ADD SPAN](vp-add-span.md)<br/>
[VP Get spans](vp-get-spans.md)
