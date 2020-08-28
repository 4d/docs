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

点線のタイプを、点と白のパターンにより指定します。

#### JSON 文法

| 名               | データタイプ     | とりうる値                                              |
| --------------- | ---------- | -------------------------------------------------- |
| strokeDashArray | 数値配列または文字列 | 例:  6個の点と1個の空白のパターンは "6 1" または \[6,1\] によって表します。 |

#### 対象オブジェクト

[四角](shapes_overview.md#四角) - [楕円](shapes_overview.md#楕円) - [線](shapes_overview.md#線)




---
## 追加の空白の行を非表示

リストボックスオブジェクト下部に追加される余分な空白行の表示を管理します。 デフォルトで、4D は空のエリアを埋めるためにこのような行を追加します:

![](assets/en/FormObjects/property_hideExtraBlankRows1.png)

このオプションをチェックすると、これらの空白行を除去することができます。 リストボックスオブジェクトの下部は空のままになります:

![](assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON 文法

| 名                  | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| hideExtraBlankRows | boolean | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)




---
## 線カラー

オブジェクトの線の色を指定します。 カラーは次の方法で指定できます:

* カラーネーム - 例: "red"
* 16進数値 - 例: "#ff0000"
* RGB値 - 例: "rgb(255,0,0)"

このプロパティは
OBJECT SET RGB COLORS** コマンドによって設定することができます。</p> 



#### JSON 文法

| 名      | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |




> このプロパティはテキスト系のオブジェクトでも利用可能です。この場合、このプロパティはフォントカラーおよびオブジェクトの線カラーの両方を指定します ([フォントカラー](properties_Text.md#フォントカラー) 参照)。



#### 対象オブジェクト

[線](shapes_overview.md#線) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角)





---


## 線幅

線の幅を指定します。



#### JSON 文法

| 名           | データタイプ | とりうる値                             |
| ----------- | ------ | --------------------------------- |
| strokeWidth | number | 印刷されるフォームにおける最小幅 0 から、整数値 < 20 まで |




#### 対象オブジェクト

[線](shapes_overview.md#線) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角)









---


## 行背景色配列

`配列型リストボックス`

リストボックスまたはリストボックス列の各行にカスタムの背景色を適用するのに使用する配列名です。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 ここでは [SET RGB COLORS](https://doc.4d.com/4Dv18/4D/18/SET-RGB-COLORS.302-4504454.ja.html) テーマの定数を使用することができます。 もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

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
