---
id: vp-get-value
title: VP Get value
---

<!-- REF #_method_.VP Get value.Syntax -->

**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get value.Params -->

| 引数       | 型      |    | 説明              |                  |
| -------- | ------ | -- | --------------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト       |                  |
| 戻り値      | オブジェクト | <- | セルの値を格納したオブジェクト | <!-- END REF --> |

#### 説明

`VP Get value` コマンドは、<!-- REF #_method_.VP Get value.Summary -->指定されたセルレンジからセルの値を取得します<!-- END REF -->。

*rangeObj* 引数で、値を取得したいレンジを指定します。

#### 返されるオブジェクト

返されるオブジェクトには `value` プロパティと、JS日付値の場合に返される `time` プロパティが格納されます:

| プロパティ | 型                                          | 説明                                              |
| ----- | ------------------------------------------ | ----------------------------------------------- |
| value | Integer, Real, Boolean, Text, Date, Object | *rangeObj* レンジの値 (ただし時間型を除く) |
| time  | 実数                                         | 値が js 日付型の場合、時間値 (秒単位)       |

返されるオブジェクトに日付または時間が含まれている場合、これは "日付時間"として扱われ、以下のように補完されます:

- 時間値 - 日付部分は DD/MM/YYYY フォーマットの、1899年12月30日 (30/12/1899) として補完されます。
- 日付値 - 時間部分は HH:MM:SS フォーマットの、真夜中 (00:00:00) として補完されます。

*rangeObj* のレンジが複数セルあるいは複数レンジを含んでいる場合、最初のセルの値が返されます。 セルが空の場合には、コマンドは null オブジェクトを返します。

#### 例題

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET VALUE($cell;New object("value";Uppercase($value.value)))
End if
```

#### 参照

[VP Get values](vp-get-values.md)<br/>
[VP SET VALUE](vp-set-value.md)<br/>
[VP SET VALUES](vp-set-values.md)
