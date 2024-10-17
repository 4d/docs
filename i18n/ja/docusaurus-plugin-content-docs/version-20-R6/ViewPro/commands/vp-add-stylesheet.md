---
id: vp-add-stylesheet
title: VP ADD STYLESHEET
---

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->

**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro フォームオブジェクト名                        |                  |
| styleName  | Text    | -> | スタイルの名前                                        |                  |
| styleObj   | Object  | -> | 属性設定を定義するオブジェクト                                |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP ADD STYLESHEET` コマンドは、<!-- REF #_method_.VP ADD STYLESHEET.Summary -->開いているドキュメント内にて、*styleName* 引数で指定したスタイルシートを、*styleObj* 引数のプロパティの組み合わせに基づいて作成または変更します<!-- END REF -->。 同じ名前とインデックスを持つスタイルシートがドキュメント内にすでに存在する場合、このコマンドはそれを新しい値で上書きします。

> このコマンドで作成されたスタイルシートはドキュメントとともに保存されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*styleName* 引数には、スタイルシートの名前を渡します。 同じスコープ内で名前が既に使用されている場合、新しいスタイルシートは既存のものを上書きします。 ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

*styleObj* には、スタイルシートの設定 (例: フォント、テキスト装飾、文字揃え、境界線、など) を指定します。 スタイルプロパティの完全な一覧については、[スタイルオブジェクトプロパティ](../configuring.md#スタイルオブジェクトプロパティ) を参照ください。

任意の *sheet* 引数を使用することで、スタイルシートをどこに定義するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

- `vk current sheet`
- `vk workbook`

同じ *styleName* のスタイルシートが、ワークブックレベルとシートレベルとで定義されている場合、シートレベルのスタイルが優先されます。

スタイルシートを適用するには、[VP SET DEFAULT STYLE](vp-set-default-style.md) または [VP SET CELL STYLE](vp-set-cell-style.md) コマンドを使用します。

#### 例題

以下のコードは:

```4d
$styles:=New object
$styles.backColor:="green"
 
// 境界線オブジェクト
$borders:=New object("color";"green";"style";vk line style medium dash dot)
 
$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders
 
VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)
 
// スタイルを適用します
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

*GreenDashDotStyle* という名前の、以下のようなスタイルオブジェクトを作成します:

```
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
[VP Get stylesheet](vp-get-stylesheet.md)<br/>
[VP Get stylesheets](vp-get-stylesheets.md)<br/>
[VP REMOVE STYLESHEET](vp-remove-stylesheet.md)<br/>
[VP SET CELL STYLE](vp-set-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
