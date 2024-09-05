---
id: vp-set-time-value
title: VP SET TIME VALUE
---

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->

**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| 引数            | 型      |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト |                  |
| timeValue     | テキスト   | -> | 設定する時間値   |                  |
| formatPattern | テキスト   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET TIME VALUE` コマンドは、<!-- REF #_method_.VP SET TIME VALUE.Summary -->指定されたセルレンジに時間値を割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*timeValue* 引数には、*rangeObj* 引数のレンジに割り当てる時間 (秒単位) を指定します。

任意の *formatPattern* 引数は、*timeValue* に対する [パターン](../configuring.md#セルフォーマット) を定義します。

#### 例題

```4d
// セルの値を現在の時間に設定します
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

// セルの値を、指定されたフォーマットの特定の時間に設定します
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### 参照

[セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
