---
id: vp-get-formulas
title: VP Get formulas
---

<!-- REF #_method_.VP Get formulas.Syntax -->

**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get formulas.Params -->

| 引数       | 型      |    | 説明             |                  |
| -------- | ------ | -- | -------------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト      |                  |
| 戻り値      | コレクション | <- | フォーミュラ値のコレクション | <!-- END REF --> |

#### 説明

`VP Get formulas` コマンドは、<!-- REF #_method_.VP Get formulas.Summary -->*rangeObj* 引数で指定したレンジからフォーミュラを取得します<!-- END REF -->。

*rangeObj* 引数で、フォーミュラを取得したいレンジを指定します。 *rangeObj* 引数のレンジが複数レンジを指定している場合、最初のレンジのフォーミュラが返されます。 *rangeObj* 引数のレンジにフォーミュラが一つも含まれていない場合には、コマンドは空の文字列を返します。

返されるコレクションは 2次元構造になっています:

- 第1レベルのコレクションは、フォーミュラのサブコレクションを格納しています。 それぞれのサブコレクションは行をあらわします。
- それぞれのサブコレクションは行におけるセルの値を定義します。 値は、セルのフォーミュラを格納しているテキスト要素です。

#### 例題

このドキュメントの総計行と平均行のフォーミュラを取得します:

![](../../assets/en/ViewPro/cmd_vpGetFormulas.PNG)

以下のコードを使用することができます:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### 参照

[VP Get formula](vp-get-formula.md)<br/>
[VP Get values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
