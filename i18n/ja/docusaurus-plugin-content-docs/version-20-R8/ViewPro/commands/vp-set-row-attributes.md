---
id: vp-set-row-attributes
title: VP SET ROW ATTRIBUTES
---

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->

**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| 引数          | 型      |    | 説明                 |                  |
| ----------- | ------ | -- | ------------------ | ---------------- |
| rangeObj    | Object | -> | 行レンジ               |                  |
| propertyObj | Object | -> | 行のプロパティを格納したオブジェクト | <!-- END REF --> |

#### 説明

`VP SET ROW ATTRIBUTES` コマンドは、<!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->*rangeObj* 引数で指定した行に対して *propertyObj* 引数で定義されている属性を適用します<!-- END REF -->。

*rangeObj* 引数には、レンジオブジェクトを渡します。 レンジにカラムと行の両方が格納されている場合、属性は行に対してのみ適用されます。

*propertyObj* 引数は、*rangeObj* 引数のレンジ内の行に対して適用する属性を指定します。 指定できる属性は以下の通りです:

| プロパティ     | 型       | 説明                                        |
| --------- | ------- | ----------------------------------------- |
| height    | number  | 行の高さ (ピクセル単位)          |
| pageBreak | boolean | レンジ内の先頭行の前に改ページを挿入する場合には true、それ以外は false |
| visible   | boolean | 行が表示状態であれば true、それ以外は false               |
| resizable | boolean | 行がリサイズ可能であれば true、それ以外は false             |
| header    | テキスト    | 行ヘッダーのテキスト                                |

#### 例題

2番目の行の高さを変更して、ヘッダーを設定します:

```4d
var $row; $properties : Object

$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")

VP SET ROW ATTRIBUTES($row;$properties)
```

![](../../assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### 参照

[VP Get row attributes](vp-get-row-attributes.md)<br/>
[VP get column attributes](vp-get-column-attributes.md)<br/>
[VP SET ROW ATTRIBUTES](vp-set-row-attributes.md)
