---
id: vp-set-formula
title: VP SET FORMULA
---

<!-- REF #_method_.VP SET FORMULA.Syntax -->

**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET FORMULA.Params -->

| 引数            | 型      |    | 説明               |                  |
| ------------- | ------ | -- | ---------------- | ---------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト        |                  |
| formula       | テキスト   | -> | フォーミュラまたは 4Dメソッド |                  |
| formatPattern | テキスト   | -> | フィールドのフォーマット     | <!-- END REF --> |

#### 説明

`VP SET FORMULA` コマンドは、<!-- REF #_method_.VP SET FORMULA.Summary -->指定されたセルレンジにフォーミュラまたは 4Dメソッドを割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定されたフォーミュラはそれぞれのセルに対して繰り返し割り当てられます。

*formula* 引数に、*rangeObj* 引数のレンジに割り当てたいフォーミュラまたは 4Dメソッド名を指定します。

> *formula* が文字列の場合、数値の区切り文字にピリオド `.` そして引数の区切り文字にカンマ `,` を使用します。
> 4Dメソッドを使用する場合、そのメソッドは [`SET ALLOWED METHODS`](vp-set-allowed-method.md) コマンドで許可されている必要があります。

任意の *formatPattern* 引数は、*formula* に対する [パターン](../configuring.md#セルフォーマット) を定義します。

*rangeObj* 内のフォーミュラは、空の文字列 ("") で置き換えることで削除することができます。

#### 例題 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### 例題 2

フォーミュラを削除します:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### 例題 3

```4d
VP SET FORMULA($range;"SUM(A1,B7,C11)") // 引数の区切り文字に ","
```

#### 参照

[Cell format](../configuring.md#cell-format)<br/>
[VP Get Formula](vp-get-formula.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
