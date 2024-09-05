---
id: vp-get-column-attributes
title: VP Get column attributes
---

<!-- REF #_method_.VP Get column attributes.Syntax -->

**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get column attributes.Params -->

| 引数       | 型      |    | 説明              |                  |
| -------- | ------ | -- | --------------- | ---------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト       |                  |
| 戻り値      | コレクション | <- | カラムプロパティのコレクション | <!-- END REF --> |

#### 説明

`VP Get column attributes` コマンドは、<!-- REF #_method_.VP Get column attributes.Summary -->*rangeObj* 引数で指定したレンジ内にあるカラムのプロパティのコレクションを返します<!-- END REF -->。

*rangeObj* 引数には、属性を取得したいカラムのレンジを格納しているオブジェクトを渡します。

[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md) コマンドを使用して属性を設定してる/いないに関わらず、返されるコレクションにはカラムの属性がすべて返されます。

#### 例題

以下のコードは:

```4d
C_OBJECT($range)
C_COLLECTION($attr)
 
$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... 渡したレンジ内の属性のコレクションを返します:

![](../../assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### 参照

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET COLUMN ATTRIBUTES](vp-set-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
