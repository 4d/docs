---
id: vp-set-date-time-value
title: VP SET DATE TIME VALUE
---

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->

**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| 引数            | 型      |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト |                  |
| dateValue     | 日付     | -> | 設定する日付値   |                  |
| timeValue     | 時間     | -> | 設定する時間値   |                  |
| formatPattern | テキスト   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET DATE TIME VALUE` コマンドは、<!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->指定されたセルレンジに日付・時間値を割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*dateValue* 引数に、*rangeObj* 引数のレンジに割り当てたい日付値を指定します。

*timeValue* 引数に、*rangeObj* 引数のレンジに割り当てたい時間値 (秒単位) を指定します。

任意の *formatPattern* 引数は、*dateValue* および *timeValue* 引数に対するパターンを定義します。 パターンおよびフォーマット文字に関しての情報については、[日付と時間のフォーマット](../configuring.md#日付と時間のフォーマット) の章を参照してください。

#### 例題

```4d
// セルの値をカレントの日付と時間に設定

VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)

// セルの値を 12月18日に設定
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### 参照

[4D View Pro セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET DATE VALUE](vp-set-date-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
