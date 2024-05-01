---
id: vp-set-num-value
title: VP SET NUM VALUE
---

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->

**VP SET NUM VALUE** ( _rangeObj_ : Object ; _numberValue_ : Number { ; _formatPattern_ : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| 引数            | タイプ    |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | Object | -> | レンジオブジェクト |                  |
| numberValue   | Number | -> | 設定する数値    |                  |
| formatPattern | Text   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET NUM VALUE` コマンドは、<!-- REF #_method_.VP SET NUM VALUE.Summary -->指定のセルレンジに数値を割り当てます<!-- END REF -->。

_rangeObj_ には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 _rangeObj_ 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

_numberValue_ 引数に、_rangeObj_ 引数のレンジに割り当てたい数値を指定します。

任意の _formatPattern_ 引数は、_numberValue_ に対する [パターン](../configuring.md#セルフォーマット) を定義します。

#### 例題

```4d
// セルに2という値を設定します
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)

// セルの値を設定し、フォーマットをドル表記に設定します
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### 参照

[セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET VALUE](vp-set-value.md)
