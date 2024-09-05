---
id: vp-set-value
title: VP SET VALUE
---

<!-- REF #_method_.VP SET VALUE.Syntax -->

**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUE.Params -->

| 引数       | 型      |    | 説明               |                  |
| -------- | ------ | -- | ---------------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト        |                  |
| valueObj | オブジェクト | -> | セルの値とフォーマットオプション | <!-- END REF --> |

#### 説明

`VP SET VALUE` コマンドは、<!-- REF #_method_.VP SET VALUE.Summary -->指定されたセルレンジに値を割り当てます<!-- END REF -->。

このコマンドを使用すると、汎用的なコードで *rangeObj* のレンジに様々な型の値とそのフォーマットを設定できます。それに対して [`VP SET TEXT VALUE`](vp-set-text-value.md) や [`VP SET NUM VALUE`](vp-set-num-value.md) などの他のコマンドは、設定する値の型が限定されています。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*valueObj* 引数は、*rangeObj* のレンジに対して割り当てたい値と[フォーマット](../configuring.md#セルフォーマット) のプロパティを格納しているオブジェクトです。 このオブジェクトには以下のプロパティを含めることができます:

| プロパティ  | 型                                        | 説明                                                                                                        |
| ------ | ---------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| value  | Integer, Real, Boolean, Text, Date, Null | *rangeObj* のレンジに対して割り当てる値 (時間型を除く)。 セルの中身を消去するためには Null を渡します。                         |
| time   | 実数                                       | *rangeObj* のレンジに対して割り当てる時間 (秒単位)                                                       |
| format | テキスト                                     | 値や日時に対するパターン 値や日時に対するパターン パターンおよびフォーマット文字に関しての情報については、[セルフォーマット](../configuring.md#セルフォーマット) の章を参照してください。 |

#### 例題

```4d
// セルの値を False に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))
 
// セルの値を 2 に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))
 
// セルの値を $125,571.35 に設定します
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))
 
// セルの値を Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))
 
// セルの値を現在の日付に設定します
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))
 
// セルの値を現在の時間に設定します
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))
 
// セルの値を特定の日付と時間に設定します
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))
 
// セルの中身を消去します
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```

#### 参照

[セルフォーマット](../configuring.md#セルフォーマット)<br/>
[VP Get values](vp-get-value.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET BOOLEAN VALUE](vp-set-boolean-value.md)<br/>
[VP SET DATE TIME VALUE](vp-set-date-time-value.md)<br/>
[VP SET FIELD](vp-set-field.md)<br/>
[VP SET FORMULA](vp-set-formula.md)<br/>
[VP SET NUM VALUE](vp-set-num-value.md)<br/>
[VP SET TEXT VALUE](vp-set-text-value.md)<br/>
[VP SET TIME VALUE](vp-set-time-value.md)
