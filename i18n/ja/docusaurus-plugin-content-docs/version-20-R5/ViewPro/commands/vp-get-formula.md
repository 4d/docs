---
id: vp-get-formula
title: VP Get formula
---

<!-- REF #_method_.VP Get formula.Syntax -->

**VP Get formula** ( _rangeObj_ : Object) : Text<!-- END REF -->

<!-- REF #_method_.VP Get formula.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト |                  |
| 戻り値      | Text   | <- | Formula   | <!-- END REF --> |

#### 説明

`VP Get formula` コマンドは、<!-- REF #_method_.VP Get formula.Summary -->指定したセルレンジのフォーミュラを取得します<!-- END REF -->。

_rangeObj_ 引数で、フォーミュラを取得したいレンジを指定します。 _rangeObj_ 引数のレンジが複数セルあるいは複数レンジを指定している場合、最初のセルのフォーミュラが返されます。 _rangeObj_ 引数がフォーミュラのないセルを指定している場合、コマンドは空の文字列を返します。

#### 例題

```4d
  // フォーミュラを設定します
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")

$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```

#### 参照

[VP Get formulas](vp-get-formulas.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET ROW COUNT](vp-set-row-count.md)
