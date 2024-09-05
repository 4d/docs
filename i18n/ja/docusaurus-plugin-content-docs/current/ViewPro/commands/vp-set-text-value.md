---
id: vp-set-text-value
title: VP SET TEXT VALUE
---

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->

**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| 引数            | 型      |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト |                  |
| textValue     | テキスト   | -> | 設定するテキスト値 |                  |
| formatPattern | テキスト   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET TEXT VALUE` コマンドは、<!-- REF #_method_.VP SET TEXT VALUE.Summary -->指定されたセルレンジにテキスト値を割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*textValue* 引数には、*rangeObj* 引数のレンジに割り当てたいテキスト値を指定します。

任意の *formatPattern* 引数は、*textValue* に対する [パターン](../configuring.md#セルフォーマット) を定義します。

#### 例題

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### 参照

[セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET VALUE](vp-set-value.md)
