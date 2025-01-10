---
id: vp-set-column-attributes
title: VP SET COLUMN ATTRIBUTES
---

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->

**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| 引数          | 型      |    | 説明                  |                  |
| ----------- | ------ | -- | ------------------- | ---------------- |
| rangeObj    | Object | -> | レンジオブジェクト           |                  |
| propertyObj | Object | -> | カラムプロパティを格納したオブジェクト | <!-- END REF --> |

#### 説明

`VP SET COLUMN ATTRIBUTES` コマンドは、<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> *rangeObj* 引数で指定したカラムに対して *propertyObj* 引数で定義されている属性を適用します<!-- END REF -->。

*rangeObj* 引数には、レンジオブジェクトを渡します。 レンジにカラムと行の両方が格納されている場合、属性はカラムに対してのみ適用されます。

*propertyObj* 引数は、*rangeObj* 引数のレンジ内のカラムに対して適用する属性を指定します。 指定できる属性は以下の通りです:

| プロパティ     | 型      | 説明                                          |
| --------- | ------ | ------------------------------------------- |
| width     | number | カラムの幅 (ピクセル単位)           |
| pageBreak | ブール    | レンジ内の先頭カラムの前に改ページを挿入する場合には true、それ以外は false |
| visible   | ブール    | カラムが表示状態であれば true、それ以外は false               |
| resizable | ブール    | カラムがリサイズ可能であれば true、それ以外は false             |
| header    | テキスト   | カラムヘッダーのテキスト                                |

#### 例題

2列目のカラムの幅を変更して、ヘッダーを設定します:

```4d
C_OBJECT($column;$properties)

$column:=VP Column("ViewProArea";1) // カラムB を取得
$properties:=New object("width";100;"header";"Hello World")

VP SET COLUMN ATTRIBUTES($column;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### 参照

[VP Column](vp-column.md)<br/>
[VP Get column attributes](vp-get-column-attributes.md)<br/>
[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
