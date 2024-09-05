---
id: vp-row-autofit
title: VP ROW AUTOFIT
---

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->

**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP ROW AUTOFIT` コマンドは、<!-- REF #_method_.VP ROW AUTOFIT.Summary -->*rangeObj* 引数のレンジ内にある行を、そのコンテンツに応じて自動的にリサイズします<!-- END REF -->。

*rangeObj* 引数として、サイズを自動調整したい行を格納しているレンジオブジェクトを渡します。

#### 例題

以下の行では、テキストを正しく表示できていません:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)

```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

結果:

![](../../assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### 参照

[VP Column autofit](vp-column-autofit.md)
