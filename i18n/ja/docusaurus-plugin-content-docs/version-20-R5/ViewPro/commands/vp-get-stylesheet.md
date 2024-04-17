---
id: vp-get-stylesheets
title: VP Get stylesheet
---

<!-- REF #_method_.VP Get stylesheet.Syntax -->

**VP Get stylesheet** ( _vpAreaName_ : Text ; _styleName_ : Text { ; _sheet_ : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get stylesheet.Params -->

| 引数         | タイプ     |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| styleName  | Text    | -> | スタイルの名前                                        |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | Object  | <- | スタイルシートオブジェクト                                  | <!-- END REF --> |

#### 説明

`VP Get stylesheet` コマンドは、<!-- REF #_method_.VP Get stylesheet.Summary -->_styleName_ で指定した、定義済のプロパティ値を格納したスタイルシートオブジェクトを返します<!-- END REF -->。

_vpAreaName_ には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

_styleName_ には、取得するスタイルシートの名前を渡します。

任意の _sheet_ 引数を使用することで、スタイルシートをどこから取得するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

- `vk current sheet`
- `vk workbook`

#### 例題

以下のコードは:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... カレントシートの _GreenDashDotStyle_ スタイルオブジェクトを返します:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### 参照

[4D View Pro スタイルオブジェクトとスタイルシート](../configuring.md#スタイルオブジェクトとスタイルシート)<br/>
[VP ADD STYLESHEET](vp-add-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)
