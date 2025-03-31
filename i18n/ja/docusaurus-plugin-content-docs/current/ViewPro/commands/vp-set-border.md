---
id: vp-set-border
title: VP SET BORDER
---

<!-- REF #_method_.VP SET BORDER.Syntax -->

**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->

<!-- REF #_method_.VP SET BORDER.Params -->

| 引数             | 型      |    | 説明                 |                  |
| -------------- | ------ | -- | ------------------ | ---------------- |
| rangeObj       | Object | -> | レンジオブジェクト          |                  |
| borderStyleObj | Object | -> | 境界線スタイルを格納したオブジェクト |                  |
| borderPosObj   | Object | -> | 境界線の位置を格納したオブジェクト  | <!-- END REF --> |

#### 説明

`VP SET BORDER` コマンドは、<!-- REF #_method_.VP SET BORDER.Summary -->*rangeObj* のレンジに *borderStyleObj* および *borderPosObj* で定義される境界線スタイルを適用します<!-- END REF -->。

*rangeObj* 引数には、境界線スタイルを適用したいセルのレンジを渡します。 *rangeObj* 引数に複数のセルが含まれる場合、`VP SET BORDER` で適用される境界線は、*rangeObj* のレンジ全体を一つのセルとして適用されます (これに対し、[`VP SET CELL STYLE`](vp-set-cell-style.md) コマンドでは*rangeObj* 引数のレンジに含まれる個々のセルに対し境界線が適用されます)。 スタイルシートがすでに適用されている場合、`VP SET BORDER` コマンドは *rangeObj* のレンジに対してすでに適用されていた境界線設定を上書きします。

*borderStyleObj* 引数を使用すると、境界線のスタイルを定義することができます。 *borderStyleObj* 引数は、以下のプロパティをサポートしています:

| プロパティ | 型       | 説明                             | とりうる値                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----- | ------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color | text    | 境界線のカラーを定義します。 デフォルト = black   | CSSカラー "#rrggbb" シンタックス (推奨シンタックス)、CSSカラー "rgb(r,g,b)" シンタックス (代替シンタックス)、CSSカラーネーム (代替シンタックス)                                                                                                                                                                                                                                                                                                                     |
| style | Integer | 境界線のスタイルを定義します。 デフォルト = empty。 | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |

*borderStyleObj* の境界線スタイルの位置 (どこに境界線を引くか) は *borderPosObj* 引数で定義します:

| プロパティ           | 型   | 説明                        |
| --------------- | --- | ------------------------- |
| all             | ブール | 境界線スタイルはすべての境界に適用されます。    |
| left            | ブール | 境界線スタイルは左の境界に適用されます。      |
| top             | ブール | 境界線スタイルは上の境界に適用されます。      |
| right           | ブール | 境界線スタイルは右の境界に適用されます。      |
| bottom          | ブール | 境界線スタイルは下の境界に適用されます。      |
| outline         | ブール | 境界線スタイルは外側の境界にのみ適用されます。   |
| inside          | ブール | 境界線スタイルは内側の境界にのみ適用されます。   |
| innerHorizontal | ブール | 境界線スタイルは内側の横の境界にのみ適用されます。 |
| innerVertical   | ブール | 境界線スタイルは内側の縦の境界にのみ適用されます。 |

#### 例題 1

以下のコードは、レンジ全体の外周に境界線を生成します:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### 例題 2

以下のコードは、`VP SET BORDER` と [`VP SET CELL STYLE`](vp-set-cell-style.md) で境界線を設定した場合の違いを示します:

```4d
// VP SET BORDER で境界線を設定します
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// VP SET CELL STYLE を使用して境界線を設定します
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```

![](../../assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

#### 参照

[VP SET CELL STYLE](vp-set-cell-style.md)
