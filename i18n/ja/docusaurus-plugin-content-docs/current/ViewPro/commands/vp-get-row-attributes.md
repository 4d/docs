---
id: vp-get-row-attributes
title: VP Get row attributes
---

<!-- REF #_method_.VP Get row attributes.Syntax -->

**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get row attributes.Params -->

| 引数       | 型      |    | 説明            |                  |
| -------- | ------ | -- | ------------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト     |                  |
| 戻り値      | コレクション | <- | 行プロパティのコレクション | <!-- END REF --> |

#### 説明

`VP Get row attributes` コマンドは、<!-- REF #_method_.VP Get row attributes.Summary -->*rangeObj* 引数で指定したレンジ内にある行のプロパティのコレクションを返します<!-- END REF -->。

*rangeObj* 引数には、属性を取得したい行のレンジを格納しているオブジェクトを渡します。

[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md) コマンドを使用して属性を設定してる/いないに関わらず、返されるコレクションには行の属性がすべて返されます。

#### 例題

以下のコードは、指定したレンジ内の行属性のコレクションを返します:

```4d
var $range : Object
var $attr : Collection
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```

![](../../assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### 参照

[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
