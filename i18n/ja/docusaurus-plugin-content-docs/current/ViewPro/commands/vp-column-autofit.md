---
id: vp-column-autofit
title: VP COLUMN AUTOFIT
---

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->

**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト | <!-- END REF --> |

#### 説明

`VP COLUMN AUTOFIT` コマンドは、<!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->*rangeObj* 引数のレンジ内にあるカラムを、そのコンテンツに応じて自動的にリサイズします<!-- END REF -->。

*rangeObj* 引数として、サイズを自動調整したいカラムを格納しているレンジオブジェクトを渡します。

#### 例題

以下のカラムはすべて同じサイズで、一部のテキストが表示しきれていません:

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

カラムを選択して、以下のコードを実行すると:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... コンテンツに合うようにカラムがリサイズされます:

![](../../assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### 参照

[VP ROW AUTOFIT](vp-row-autofit.md)
