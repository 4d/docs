---
id: propertiesBackgroundAndBorder
title: 背景色と境界線
---

---
## 交互に使用する背景色

奇数番の行/列に使用するための異なる背景色を設定することができます。 デフォルトでは、*自動* が選択されており、リストボックスレベルで設定されている "交互に使用する背景色" を列も使用します。

#### JSON 文法

| 名             | データタイプ | とりうる値                                |
| ------------- | ------ | ------------------------------------ |
| alternateFill | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト
[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)



---
## 背景色/塗りカラー

オブジェクトの背景色を設定します。

リストボックスの場合にはデフォルトで、*自動* が選択されており、リストボックスレベルで設定されている背景色を列も使用します。

#### JSON 文法


| 名    | データタイプ | とりうる値                                |
| ---- | ------ | ------------------------------------ |
| fill | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト

[階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角) - [テキストエリア](text.md)

#### 参照
[透過](#transparent)


---
## 背景色式

`セレクションとコレクション型リストボックス`

リストボックスの各行にカスタムの背景色を指定するための式または変数 (配列変数は使用不可)。 式または変数は表示行ごとに評価され、RGB値を返さなくてはなりません。 詳細については、*4Dランゲージリファレンス* マニュアルの [`OBJECT SET RGB COLORS`](https://livedoc.4d.com/--18/-/OBJECT-SET-RGB-COLORS.301-4505456.ja.html) コマンドの説明を参照ください。

また、このプロパティは `LISTBOX SET PROPERTY` コマンドに `lk background color expression` 定数を指定して設定することもできます。
> コレクション/エンティティセレクション型リストボックスでは、このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。

#### JSON 文法

| 名             | データタイプ | とりうる値       |
| ------------- | ------ | ----------- |
| rowFillSource | string | RGBカラー値を返す式 |

#### 対象オブジェクト
[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)






---
## 境界線スタイル

リストボックスの境界線のスタイルを設定します。

#### JSON 文法

| 名           | データタイプ | とりうる値                                                             |
| ----------- | ------ | ----------------------------------------------------------------- |
| borderStyle | text   | "system", "none", "solid", "dotted", "raised", "sunken", "double" |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)



---
## 点線タイプ

Describes dotted line type as a sequence of black and white points.

#### JSON 文法

| 名               | データタイプ                 | とりうる値                                                                    |
| --------------- | ---------------------- | ------------------------------------------------------------------------ |
| strokeDashArray | number array or string | Ex. "6 1" or \[6,1\] for a sequence of 6 black point and 1 white point |

#### 対象オブジェクト

[Rectangle](shapes_overview.md#rectangle) - [Oval](shapes_overview.md#oval) - [Line](shapes_overview.md#line)




---
## 追加の空白の行を非表示

Controls the display of extra blank rows added at the bottom of a list box object. By default, 4D adds such extra rows to fill the empty area:

![](assets/en/FormObjects/property_hideExtraBlankRows1.png)

You can remove these empty rows by selecting this option. The bottom of the list box object is then left blank:

![](assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON 文法

| 名                  | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| hideExtraBlankRows | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)




---
## 線カラー

Designates the color of the object's lines. The color can be specified by:

* a color name - like "red"
* a HEX value - like "#ff0000"
* an RGB value - like "rgb(255,0,0)"

You can also set this property using the [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.en.html) command.

#### JSON 文法

| 名      | データタイプ | とりうる値                                     |
| ------ | ------ | ----------------------------------------- |
| stroke | string | any css value, "transparent", "automatic" |

> This property is also available for text based objects, in which case it designates both the font color and the object's lines, see [Font color](properties_Text.md#font-color).

#### 対象オブジェクト

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)



---
## 線幅

Designates the thickness of a line.

#### JSON 文法

| 名           | データタイプ | とりうる値                                                             |
| ----------- | ------ | ----------------------------------------------------------------- |
| strokeWidth | number | 0 for smallest width on a printed form, or any integer value < 20 |

#### 対象オブジェクト

[Line](shapes_overview.md#line) - [Oval](shapes_overview.md#oval) - [Rectangle](shapes_overview.md#rectangle)







---
## 行背景色配列

`配列型リストボックス`

The name of an array to apply a custom background color to each row of the list box or column.

The name of a Longint array must be entered. Each element of this array corresponds to a row of the list box (if applied to the list box) or to a cell of the column (if applied to a column), so the array must be the same size as the array associated with the column. You can use the constants of the [SET RGB COLORS](https://doc.4d.com/4Dv17R6/4D/17-R6/SET-RGB-COLORS.302-4310385.en.html) theme. If you want the cell to inherit the background color defined at the higher level, pass the value -255 to the corresponding array element.

For example, given a list box where the rows have an alternating gray/light gray color, defined in the properties of the list box. A background color array has also been set for the list box in order to switch the color of rows where at least one value is negative to light orange:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // orange
 <>_BgndColors{$i}:=-255 // default value
```
![](assets/en/FormObjects/listbox_styles1.png)

Next you want to color the cells with negative values in dark orange. To do this, you set a background color array for each column, for example <>_BgndColor_1, <>_BgndColor_2 and <>_BgndColor_3. The values of these arrays have priority over the ones set in the list box properties as well as those of the general background color array:

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // dark orange
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```
![](assets/en/FormObjects/listbox_styles2.png)

You can get the same result using the `LISTBOX SET ROW FONT STYLE` and `LISTBOX SET ROW COLOR` commands. They have the advantage of letting you skip having to predefine style/color arrays for the columns: instead they are created dynamically by the commands.


#### JSON 文法

| 名             | データタイプ | とりうる値                        |
| ------------- | ------ | ---------------------------- |
| rowFillSource | string | The name of a longint array. |

#### 対象オブジェクト
[List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)





---
## 透過

Sets the list box background to "Transparent". When set, any [alternate background color](#alternate-background-color) or [background color](#background-color-fill-color) defined for the column is ignored.

#### JSON 文法

| 名    | データタイプ | とりうる値         |
| ---- | ------ | ------------- |
| fill | text   | "transparent" |

#### 対象オブジェクト
[リストボックス](listbox_overview.md#overview)

#### 参照
[背景色/塗りカラー](#background-color-fill-color)