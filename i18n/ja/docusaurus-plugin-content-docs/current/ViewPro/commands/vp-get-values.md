---
id: vp-get-values
title: VP Get values
---

<!-- REF #_method_.VP Get values.Syntax -->

**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get values.Params -->

| 引数       | 型      |    | 説明        |                  |
| -------- | ------ | -- | --------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |                  |
| 戻り値      | コレクション | <- | 値のコレクション  | <!-- END REF --> |

#### 説明

`VP Get values` コマンドは、<!-- REF #_method_.VP Get values.Summary --> *rangeObj* で指定したレンジの値をすべて取得します<!-- END REF -->。

*rangeObj* 引数で、値を取得したいレンジを指定します。 *rangeObj* のレンジが複数レンジを指定している場合、最初のレンジのみが使用されます。

`VP Get values` によって返されるコレクションは、2次元構造のコレクションです:

- 第1レベルのコレクションの各要素は行を表し、値のサブコレクションを格納しています。
- 各サブコレクションはその行のセル値を格納しています。 値は整数、実数、ブール、テキスト、オブジェクト、Null のいずれかです。 値が日付または時間の場合には、以下のプロパティを持つオブジェクトとして返されます:

| プロパティ | 型  | 説明                                        |
| ----- | -- | ----------------------------------------- |
| value | 日付 | セルの値 (時間部分を除く)         |
| time  | 実数 | 値が js 日付型の場合、時間値 (秒単位) |

日付または時間は 日付時間 (datetime) として扱われ、以下のように補完されます:

- 時間値 - 日付部分は 1899年12月30日として補完されます。
- 日付値 - 時間部分は真夜中 (00:00:00:000) として補完されます。

#### 例題

C4 から G6 までの値を取得します:

![](../../assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### 参照

[VP Get formulas](vp-get-formulas.md)<br/>
[VP Get value](vp-get-value.md)<br/>
[VP SET FORMULAS](vp-set-formulas.md)<br/>
[VP SET VALUES](vp-set-values.md)
