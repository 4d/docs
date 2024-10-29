---
id: vp-set-date-value
title: VP SET DATE VALUE
---

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->

**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| 引数            | 型      |    | 説明        |                  |
| ------------- | ------ | -- | --------- | ---------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト |                  |
| dateValue     | 日付     | -> | 設定する日付値   |                  |
| formatPattern | テキスト   | -> | 値のフォーマット  | <!-- END REF --> |

#### 説明

`VP SET DATE VALUE` コマンドは、<!-- REF #_method_.VP SET DATE VALUE.Summary -->指定されたセルレンジに日付値を割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジを渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*dateValue* 引数に、*rangeObj* 引数のレンジに割り当てたい日付値を指定します。

任意の *formatPattern* 引数は、*dateValue* 引数に対するパターンを定義します。 カスタムのフォーマット、または以下の定数のいずれかを渡します:

| 定数                      | 説明                       | デフォルト US パターン        |
| ----------------------- | ------------------------ | -------------------- |
| `vk pattern long date`  | ISO 8601 フォーマットの完全な日付。   | "dddd, dd MMMM yyyy" |
| `vk pattern month day`  | ISO 8601 フォーマットの月と日付。    | "MMMM dd"            |
| `vk pattern short date` | 省略形の ISO 8601 フォーマットの日付。 | "MM/dd/yyyy"         |
| `vk pattern year month` | ISO 8601 フォーマットの年と月。     | "yyyy MMMM"          |

パターンおよびフォーマット文字に関しての情報については、[日付と時間のフォーマット](../configuring.md#日付と時間のフォーマット) の章を参照してください。

#### 例題

```4d
// セルの日付をカレントの日付に設定します
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))

// セルの値を、指定されたフォーマットの特定の日付に設定します
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### 参照

[4D View Pro セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET VALUE](vp-set-value.md)
