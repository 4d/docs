---
id: vp-set-boolean-value
title: VP SET BOOLEAN VALUE
---

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->

**VP SET BOOLEAN VALUE** ( _rangeObj_ : Object  ; _boolValue_ : Boolean) <!-- END REF -->

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| 引数        | タイプ     |    | 説明        |                  |
| --------- | ------- | -- | --------- | ---------------- |
| rangeObj  | Object  | -> | レンジオブジェクト |                  |
| boolValue | Boolean | -> | 設定するブール値  | <!-- END REF --> |

#### 説明

`VP SET BOOLEAN VALUE` コマンドは、<!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->指定のセルレンジにブール値を割り当てます<!-- END REF -->。

_rangeObj_ には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 _rangeObj_ 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

_boolValue_ 引数には、_rangeObj_ のセルレンジに割り当てるブール値 (**true** あるいは **false**) を渡します。

#### 例題

```4d
// セルの値を false に設定
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```

#### 参照

[VP SET VALUE](vp-set-value.md)
