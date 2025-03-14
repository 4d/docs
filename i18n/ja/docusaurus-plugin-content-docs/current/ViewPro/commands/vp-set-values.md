---
id: vp-set-values
title: VP SET VALUES
---

<!-- REF #_method_.VP SET VALUES.Syntax -->

**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->

<!-- REF #_method_.VP SET VALUES.Params -->

| 引数        | 型          |    | 説明        |                  |
| --------- | ---------- | -- | --------- | ---------------- |
| rangeObj  | Object     | -> | レンジオブジェクト |                  |
| valuesCol | Collection | -> | 値のコレクション  | <!-- END REF --> |

#### 説明

`VP SET VALUES` コマンドは、<!-- REF #_method_.VP SET VALUES.Summary -->指定のセルレンジから開始して値のコレクションを割り当てていきます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](vp-cell.md) あるいは [`VP Column`](vp-column.md) で作成されたレンジ) を渡します。 *rangeObj* 引数で定義されたセルは、開始ポイントを決定します。

> - *rangeObj* がセルレンジではない場合、レンジの最初のセルが使用されます。
> - *rangeObj* のレンジが複数レンジを指定している場合、最初のレンジの先頭セルのみが使用されます。

*valuesCol* 引数は 2次元構造のコレクションです:

- 第1レベルのコレクションは、値のサブコレクションを格納しています。 それぞれのサブコレクションは行を定義します。 行をスキップするには空のコレクションを渡します。
- それぞれのサブコレクションは行におけるセルの値を定義します。 値は整数、実数、ブール、テキスト、日付、Null、オブジェクトのいずれかです。 値がオブジェクトの場合、以下のプロパティを持つことができます:

| プロパティ | 型                                        | 説明                                |
| ----- | ---------------------------------------- | --------------------------------- |
| value | Integer, Real, Boolean, Text, Date, Null | セルの値 (時間部分を除く) |
| time  | Real                                     | 時間値 (秒単位)      |

#### 例題

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) // 1行目用に 4つの値を設定します
$param.push(New collection) // 2行目は空行です
$param.push(New collection(4;5;Null;"hello";"world")) // 3行目用に 5つの値を設定します
$param.push(New collection(6;7;8;9)) // 4行目用に 4つの値を設定します
$param.push(New collection(Null;New object("value";Current date;"time";42))) // 5行目用に 1つの値を設定します

VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](../../assets/en/ViewPro/cmd_vpSetValues.PNG)

#### 参照

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP Get Values](vp-get-values.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUE](vp-set-value.md)
