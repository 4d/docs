---
id: propertiesCoordinatesAndSizing
title: 座標とサイズ
---

---
## 自動行高

このプロパティは、配列型かつ階層のないリストボックスにおいてのみ使用可能です。 このプロパティはデフォルトではチェックされていません。

このプロパティが有効化されていると、カラムの内容に応じて各行の高さが 4D によって自動的に計算されます 行の高さを計算する際には、このオプションがチェックされているカラムのみが考慮されることに注意が必要です。
> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#horizontal-sizing) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

このプロパティが有効化されていると、セルの内容がすべて表示され、切り落とされることがないように各行の高さが自動的に計算されます (ただし[ワードラップ](properties_Display.md#ワードラップ) オプションが無効化されている場合を除きます)。

*   行の高さを計算する際には、以下のものが考慮されます:
    *   中身の型 (テキスト、数値、日付、時間、ピクチャー (計算結果はピクチャーフォーマットによります)、オブジェクト)
    *   コントロールの型 (入力、チェックボックス、リスト、ドロップダウン)
    *   フォント、フォントスタイル、フォントサイズ
    *   [ワードラップ](properties_Display.md#ワードラップ) オプション: 無効化されている場合、高さは段落の数に応じます (行は切り落とされます)。有効化されている場合、高さは行数に応じます (切り落とされません)。

*   行の高さを計算する際には、以下のものは考慮されません:
    *   非表示のカラムの中身
    *   プロパティリスト内、あるいはプログラミングによって設定された [行の高さ](#行の高さ) および [行高さ配列](#行高さ配列) プロパティ (あった場合)
> 自動行高オプションを有効化すると、ランタイムにおいて追加の計算が必要となるため、とくにリストボックスが大量の行数を持つ場合に、スクロール時のスムーズさに影響が出る可能性があります。




#### JSON 文法

| 名             | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| rowHeightAuto | boolean | true, false |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#list-box-columns)





---
## 下

フォーム上のオブジェクトの下の座標。


#### JSON 文法

| 名      | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| bottom | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [四角](shapes_overview.md#四角) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)


---
## 左

フォーム上のオブジェクトの左の座標。

#### JSON 文法

| 名    | データタイプ | とりうる値  |
| ---- | ------ | ------ |
| left | number | 最小値: 0 |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)



---
## 右

フォーム上のオブジェクトの右の座標。

#### JSON 文法

| 名     | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| right | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)




---
## 上

フォーム上のオブジェクトの上の座標。

#### JSON 文法

| 名   | データタイプ | とりうる値  |
| --- | ------ | ------ |
| top | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)




---
## 角の半径

[四角](shapes_overview.md#四角) 型の図形について、角の丸みをピクセル単位で指定します。 デフォルトでは、四角の角の半径は 0ピクセルとなっています。 このプロパティを変更することによって独自の形の角の丸い四角を描画することができます:

![](assets/en/FormObjects/shape_rectangle.png)

最小値は 0 で、この場合には標準の (角の丸くない) 四角が描画されます。 最大値は四角のサイズに応じて変化し、動的に計算されます (ただし四角の短辺の半分を超えることはできません)。

このプロパティは、[OBJECT Get corner radius](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-corner-radius.301-4505428.ja.html) と [OBJECT SET CORNER RADIUS](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-CORNER-RADIUS.301-4505427.ja.html) コマンドを使用して設定することもできます。

#### JSON 文法

| 名            | データタイプ  | とりうる値  |
| ------------ | ------- | ------ |
| borderRadius | integer | 最小値: 0 |

#### 対象オブジェクト

[四角](shapes_overview.md#rectangle)




---
## 高さ

オブジェクトの縦のサイズを指定します。
> オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。

#### JSON 文法

| 名      | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| height | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)


---
## 幅

オブジェクトの横のサイズを指定します。
> * オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。
> * If the [Resizable](properties_ResizingOptions.md#resizable) property is used for a [list box column](listbox_overview.md#list-box-columns), the user can also manually resize the column.
> * When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名     | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| width | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)









---
## 最大幅

The maximum width of the column (in pixels). The width of the column cannot be increased beyond this value when resizing the column or form.
> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名        | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| maxWidth | number | 最小値: 0 |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#list-box-columns)


---
## 最小幅

The minimum width of the column (in pixels). The width of the column cannot be reduced below this value when resizing the column or form.
> When resizing the form, if the ["Grow" horizontal sizing](properties_ResizingOptions.md#horizontal-sizing) property was assigned to the list box, the right-most column will be increased beyond its maximum width if necessary.


#### JSON 文法

| 名        | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| minWidth | number | 最小値: 0 |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#list-box-columns)








---
## 行の高さ


Sets the height of list box rows (excluding headers and footers). By default, the row height is set according to the platform and the font size.


#### JSON 文法

| 名         | データタイプ | とりうる値                                    |
| --------- | ------ | ---------------------------------------- |
| rowHeight | string | css value in unit "em" or "px" (default) |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)


#### 参照
[行高さ配列](#row-height-array)



---
## 行高さ配列

This property is used to specify the name of a row height array that you want to associate with the list box. A row height array must be of the numeric type (longint by default).

When a row height array is defined, each of its elements whose value is different from 0 (zero) is taken into account to determine the height of the corresponding row in the list box, based on the current Row Height unit.

たとえば:

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

Assuming that the unit of the rows is "lines," then the fifth row of the list box will have a height of three lines, while every other row will keep its default height.
> * The Row Height Array property is not taken into account for hierarchical list boxes.
> * For array-based list boxes, this property is available only if the [Automatic Row Height](#automatic-row-height) option is not selected.

#### JSON 文法

| 名               | データタイプ | とりうる値                        |
| --------------- | ------ | ---------------------------- |
| rowHeightSource | string | Name of a 4D array variable. |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#overview)


#### 参照
[行の高さ](#row-height)




