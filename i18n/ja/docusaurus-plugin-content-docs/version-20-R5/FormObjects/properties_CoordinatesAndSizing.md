---
id: propertiesCoordinatesAndSizing
title: 座標とサイズ
---

## 自動行高

このプロパティが利用できるのは、リストボックスの [データソース](properties_Object.md#データソース) が次の場合に限ります:

- コレクションまたはエンティティセレクション
- 配列 (階層でない)

このプロパティはデフォルトではチェックされていません。 少なくとも 1つのカラムにおいてこのプロパティが有効化されていると、カラムの内容に応じて各行の高さが 4D によって自動的に計算されます 行の高さを計算する際には、このオプションがチェックされているカラムのみが考慮されることに注意が必要です。

:::note

リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

:::

このプロパティが有効化されていると、セルの内容がすべて表示され、切り落とされることがないように各行の高さが自動的に計算されます (ただし[ワードラップ](properties_Display.md#ワードラップ) オプションが無効化されている場合を除きます)。

- 行の高さを計算する際には、以下のものが考慮されます:
  - 中身の型 (テキスト、数値、日付、時間、ピクチャー (計算結果はピクチャーフォーマットによります)、オブジェクト)
  - コントロールの型 (入力、チェックボックス、リスト、ドロップダウン)
  - フォント、フォントスタイル、フォントサイズ
  - [ワードラップ](properties_Display.md#ワードラップ) オプション: 無効化されている場合、高さは段落の数に応じます (行は切り落とされます)。有効化されている場合、高さは行数に応じます (切り落とされません)。

- 行の高さを計算する際には、以下のものは考慮されません:
  - 非表示のカラムの中身
  - プロパティリスト内、あるいはプログラミングによって設定された [行の高さ](#行の高さ) および [行高さ配列](#行高さ配列) プロパティ (あった場合)

:::caution

自動行高オプションを有効化すると、ランタイムにおいて追加の計算が必要となるため、リストボックスが大量の行数を持つ場合には、スクロール時のスムーズさに影響が出る可能性があります。

:::

#### JSON 文法

| 名称            | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| rowHeightAuto | boolean | true, false |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)

---

## 下

フォーム上のオブジェクトの下の座標。

#### JSON 文法

| 名称     | データタイプ | とりうる値                  |
| ------ | ------ | ---------------------- |
| bottom | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Rectangle](shapes_overview.md#rectangle) - [Ruler](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 左

フォーム上のオブジェクトの左の座標。

#### JSON 文法

| 名称   | データタイプ | とりうる値                  |
| ---- | ------ | ---------------------- |
| left | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 右

フォーム上のオブジェクトの右の座標。

#### JSON 文法

| 名称    | データタイプ | とりうる値                  |
| ----- | ------ | ---------------------- |
| right | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 上

フォーム上のオブジェクトの上の座標。

#### JSON 文法

| 名称  | データタイプ | とりうる値                  |
| --- | ------ | ---------------------- |
| top | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 角の半径

<details><summary>履歴</summary>

| リリース  | 内容                 |
| ----- | ------------------ |
| 19 R7 | テキストと入力オブジェクトをサポート |

</details>

フォームオブジェクトの角の丸みをピクセル単位で指定します。 デフォルトでは、角の半径は 0ピクセルとなっています。 このプロパティを変更することによって独自の形の角の丸いフォームオブジェクトを描画することができます:

![](../assets/en/FormObjects/shape_rectangle.png)

最小値は 0 で、この場合には標準の (角の丸くない) フォームオブジェクトが描画されます。
最大値は四角のサイズに応じて変化し、動的に計算されます (ただし四角の短辺の半分を超えることはできません)。

:::note

[テキスト](text.md) および [入力](input_overview.md) フォームオブジェクトについて:

- 角の半径プロパティは、[境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) "なし"、"標準"、"ドット" の場合にのみ利用可能です。
- 角の丸みはフォームオブジェクトの外側に絵描画されます (つまり、オブジェクトはより大きく表示されますが、[幅](properties_CoordinatesAndSizing.md#幅) と [高さ](properties_CoordinatesAndSizing.md#高さ) プロパティは変更されません)。

![](../assets/en/FormObjects/radius-text.png)

:::

このプロパティは、[OBJECT Get corner radius](https://doc.4d.com/4dv19/help/command/ja/page1323.html) と [OBJECT SET CORNER RADIUS](https://doc.4d.com/4dv19/help/command/ja/page1324.html) コマンドを使用して設定することもできます。

#### JSON 文法

| 名称           | データタイプ  | とりうる値                  |
| ------------ | ------- | ---------------------- |
| borderRadius | integer | 最小値: 0 |

#### 対象オブジェクト

[入力](input_overview.md) - [四角](shapes_overview.md#四角) - [テキストエリア](text.md)

---

## 高さ

オブジェクトの縦のサイズを指定します。

> オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。

#### JSON 文法

| 名称     | データタイプ | とりうる値                  |
| ------ | ------ | ---------------------- |
| height | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [Line](shapes_overview.md#line) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 幅

オブジェクトの横のサイズを指定します。

> - オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。
> - [リストボックス列](listbox_overview.md#リストボックス列) に [サイズ変更可](properties_ResizingOptions.md#サイズ変更可) プロパティが設定されている場合には、ユーザーは手動でカラムサイズを変更することもできます。
> - リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称    | データタイプ | とりうる値                  |
| ----- | ------ | ---------------------- |
| width | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro Area](viewProArea_overview.md) - [4D Write Pro Area](writeProArea_overview.md) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Dropdown list](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [Line](shapes_overview.md#line) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [Oval](shapes_overview.md#oval) - [Picture Button](pictureButton_overview.md) - [Picture Pop up menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md#overview) - [Progress Indicators](progressIndicator.md) - [Radio Button](radio_overview.md) - [Ruler](ruler.md) - [Rectangle](shapes_overview.md#rectangle) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md#overview)

---

## 最大幅

列の最大幅 (ピクセル単位)。 列やフォームをサイズ変更する際、このサイズよりも列幅を大きくすることはできません。

> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称       | データタイプ | とりうる値                  |
| -------- | ------ | ---------------------- |
| maxWidth | number | 最小値: 0 |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)

---

## 最小幅

列の最小幅 (ピクセル単位)。 列やフォームをサイズ変更する際、このサイズよりも列幅を小さくすることはできません。

> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称       | データタイプ | とりうる値                  |
| -------- | ------ | ---------------------- |
| minWidth | number | 最小値: 0 |

#### 対象オブジェクト

[List Box Column](listbox_overview.md#list-box-columns)

---

## 行の高さ

リストボックス行の高さを設定します (ヘッダーおよびフッターは除きます)。 デフォルトで、行の高さはプラットフォームとフォントサイズに基づき設定されます。

#### JSON 文法

| 名称        | データタイプ | とりうる値                                              |
| --------- | ------ | -------------------------------------------------- |
| rowHeight | string | "em" または "px" (デフォルト) 単位の css 値 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

#### 参照

[Row Height Array](#row-height-array)

---

## 行高さ配列

このプロパティは、リストボックスに関連付けたい行高さ配列の名前を指定するのに使用します。 行高さ配列は数値型である必要があります (デフォルトは倍長整数)。

行高さ配列が定義されているとき、0 ではない値の要素はそれぞれ、リストボックスの対応する行の高さを決定する際に、選択されている行の高さ単位に基づいて考慮されます。

たとえば:

```4d
ARRAY LONGINT(RowHeights;20)
RowHeights{5}:=3
```

ここで行の単位が "行" であったとすると、リストボックスの 5行目は 3行分の高さになる一方、他の行はデフォルトの高さを保ちます。

> - 行高さ配列プロパティは、階層リストボックスに対しては効力を持ちません。
> - 配列型およびコレクション/エンティティセレクション型のリストボックスの場合、このプロパティは [自動行高](#自動行高) オプションがチェックされていない場合に限り使用可能です。

#### JSON 文法

| 名称              | データタイプ | とりうる値      |
| --------------- | ------ | ---------- |
| rowHeightSource | string | 4D 配列変数の名前 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

#### 参照

[Row Height](#row-height)

---

## 横方向パディング

セルの水平方向のパディングを設定します。 値はピクセル単位です (デフォルトは 0)。

![](../assets/en/FormObjects/padding.png)

#### JSON 文法

| 名称                | データタイプ | とりうる値                          |
| ----------------- | ------ | ------------------------------ |
| horizontalPadding | number | ピクセル数 (>=0) |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [フッター](properties_Footers.md) - [ヘッダー](properties_Headers.md)

#### 参照

[Vertical Padding](#vertical-padding)

---

## 縦方向パディング

セルの垂直方向のパディングを設定します。 値はピクセル単位です (デフォルトは 0)。

#### JSON 文法

| 名称              | データタイプ | とりうる値                          |
| --------------- | ------ | ------------------------------ |
| verticalPadding | number | ピクセル数 (>=0) |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [フッター](properties_Footers.md) - [ヘッダー](properties_Headers.md)

#### 参照

[Horizontal Padding](#horizontal-padding)
