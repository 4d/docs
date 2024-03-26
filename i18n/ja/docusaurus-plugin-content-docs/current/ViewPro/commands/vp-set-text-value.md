---
id: vp-set-text-value
title: VP SET TEXT VALUE
---

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( _rangeObj_ : Object ; _textValue_ : Text { ; _formatPattern_ : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| 引数            | タイプ    |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | Object | -> | レンジオブジェクト |                  |
| textValue     | Text   | -> | 設定するテキスト値 |                  |
| formatPattern | Text   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET TEXT VALUE` コマンドは、<!-- REF #_method_.VP SET TEXT VALUE.Summary -->指定されたセルレンジにテキスト値を割り当てます<!-- END REF -->。

_rangeObj_ には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 _rangeObj_ 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

_textValue_ 引数には、_rangeObj_ 引数のレンジに割り当てたいテキスト値を指定します。

任意の _formatPattern_ 引数は、_textValue_ に対する [パターン](../configuring.md#セルフォーマット) を定義します。

#### 例題

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### 参照

[セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET VALUE](vp-set-value.md)
