---
id: vp-set-cell-style
title: VP SET CELL STYLE
---

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->

**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| 引数       | 型      |    | 説明         |                  |
| -------- | ------ | -- | ---------- | ---------------- |
| rangeObj | Object | -> | レンジオブジェクト  |                  |
| styleObj | Object | -> | スタイルオブジェクト | <!-- END REF --> |

#### 説明

`VP SET CELL STYLE` コマンドは、<!-- REF #_method_.VP SET CELL STYLE.Summary -->*styleObj* に定義されているスタイルを、*rangeObj* で定義されたセルに適用します<!-- END REF -->。

*rangeObj* 引数には、スタイルを適用したいセルのレンジを渡します。 *rangeObj* に複数のセルが含まれる場合、スタイルはそれぞれのセルに割り当てられます。

> `VP SET CELL STYLE` で適用された境界線は、*rangeObj* の各セルに対して適用されます。これに対して [VP SET BORDER](vp-set-border.md) コマンドは境界線を *rangeObj* のレンジ全体に対して適用されます。

*styleObj* にはスタイル設定を格納したオブジェクトを渡します。 既存のスタイルシートを使用することもできますし、新しいスタイルを作成することも可能です。 *styleObj* に既存のスタイルシートと、追加のスタイル設定の両方が格納されている場合、既存のスタイルシートが先に適用され、そのあとに追加の設定が適用されます。

スタイルを削除してデフォルトのスタイル設定 (あれば) に戻すには、NULL値を渡します:

- *styleObj* 引数として NULL値を渡した場合、*rangeObj* のレンジのスタイルシートはすべて削除されます。
- 属性に NULL値を指定すると、当該属性は *rangeObj* から削除されます。

スタイルオブジェクトとスタイルシートの詳細については、[スタイルオブジェクト](../configuring.md#スタイルオブジェクト) を参照ください。

#### 例題

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)
$style.backgroundImage:=Null // 特定の属性を削除します

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```

![](../../assets/en/ViewPro/cmd_vpSetCellStyle.PNG)

#### 参照

[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Font to object](vp-font-to-object.md)<br/>
[VP Get cell style](vp-get-cell-style.md)<br/>
[VP Object to font](vp-object-to-font.md)<br/>
[VP SET BORDER](vp-set-border.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
