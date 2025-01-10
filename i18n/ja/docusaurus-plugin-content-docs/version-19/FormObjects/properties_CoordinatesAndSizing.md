---
id: propertiesCoordinatesAndSizing
title: 座標とサイズ
---


## 自動行高

このプロパティは、配列型かつ階層のないリストボックスにおいてのみ使用可能です。 このプロパティはデフォルトではチェックされていません。

このプロパティが有効化されていると、カラムの内容に応じて各行の高さが 4D によって自動的に計算されます 行の高さを計算する際には、このオプションがチェックされているカラムのみが考慮されることに注意が必要です。
> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

このプロパティが有効化されていると、セルの内容がすべて表示され、切り落とされることがないように各行の高さが自動的に計算されます (ただし[ワードラップ](properties_Display.md#ワードラップ) オプションが無効化されている場合を除きます)。

* 行の高さを計算する際には、以下のものが考慮されます:
  * 中身の型 (テキスト、数値、日付、時間、ピクチャー (計算結果はピクチャーフォーマットによります)、オブジェクト)
  * コントロールの型 (入力、チェックボックス、リスト、ドロップダウン)
  * フォント、フォントスタイル、フォントサイズ
  * [ワードラップ](properties_Display.md#ワードラップ) オプション: 無効化されている場合、高さは段落の数に応じます (行は切り落とされます)。有効化されている場合、高さは行数に応じます (切り落とされません)。

* 行の高さを計算する際には、以下のものは考慮されません:
  * 非表示のカラムの中身
  * プロパティリスト内、あるいはプログラミングによって設定された [行の高さ](#行の高さ) および [行高さ配列](#行高さ配列) プロパティ (あった場合)
> 自動行高オプションを有効化すると、ランタイムにおいて追加の計算が必要となるため、リストボックスが大量の行数を持つ場合には、スクロール時のスムーズさに影響が出る可能性があります。

#### JSON 文法

| 名称            | データタイプ | とりうる値       |
| ------------- | ------ | ----------- |
| rowHeightAuto | ブール    | true, false |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#リストボックス列)

---

## 下

フォーム上のオブジェクトの下の座標。

#### JSON 文法

| 名称     | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| bottom | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [四角](shapes_overview.md#四角) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 左

フォーム上のオブジェクトの左の座標。

#### JSON 文法

| 名称   | データタイプ | とりうる値  |
| ---- | ------ | ------ |
| left | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 右

フォーム上のオブジェクトの右の座標。

#### JSON 文法

| 名称    | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| right | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 上

フォーム上のオブジェクトの上の座標。

#### JSON 文法

| 名称  | データタイプ | とりうる値  |
| --- | ------ | ------ |
| top | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 角の半径

[四角](shapes_overview.md#四角) 型の図形について、角の丸みをピクセル単位で指定します。 デフォルトでは、四角の角の半径は 0ピクセルとなっています。 このプロパティを変更することによって独自の形の角の丸い四角を描画することができます:

![](../assets/en/FormObjects/shape_rectangle.png)

最小値は 0 で、この場合には標準の (角の丸くない) 四角が描画されます。 最大値は四角のサイズに応じて変化し、動的に計算されます (ただし四角の短辺の半分を超えることはできません)。

このプロパティは、[OBJECT Get corner radius](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-corner-radius.301-4505428.ja.html) と [OBJECT SET CORNER RADIUS](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-CORNER-RADIUS.301-4505427.ja.html) コマンドを使用して設定することもできます。

#### JSON 文法

| 名称           | データタイプ  | とりうる値  |
| ------------ | ------- | ------ |
| borderRadius | integer | 最小値: 0 |

#### 対象オブジェクト

[四角](shapes_overview.md#四角)

---

## 高さ

オブジェクトの縦のサイズを指定します。
> オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。

#### JSON 文法

| 名称     | データタイプ | とりうる値  |
| ------ | ------ | ------ |
| height | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 幅

オブジェクトの横のサイズを指定します。
> * オブジェクトによっては高さが規定されているものがあり、その場合は変更できません。
> * [リストボックス列](listbox_overview.md#リストボックス列) に [サイズ変更可](properties_ResizingOptions.md#サイズ変更可) プロパティが設定されている場合には、ユーザーは手動でカラムサイズを変更することもできます。
> * リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称    | データタイプ | とりうる値  |
| ----- | ------ | ------ |
| width | number | 最小値: 0 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [線](shapes_overview.md#線) - [リストボックス列](listbox_overview.md#リストボックス列) - [楕円](shapes_overview.md#楕円) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [四角](shapes_overview.md#四角) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 最大幅

列の最大幅 (ピクセル単位)。 列やフォームをサイズ変更する際、このサイズよりも列幅を大きくすることはできません。
> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称       | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| maxWidth | number | 最小値: 0 |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#リストボックス列)

---

## 最小幅

列の最小幅 (ピクセル単位)。 列やフォームをサイズ変更する際、このサイズよりも列幅を小さくすることはできません。
> リストボックスの [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) プロパティに "拡大" を設定している場合にフォームをリサイズすると、一番右のカラムの幅は必要に応じて最大幅を超えて拡大されます。

#### JSON 文法

| 名称       | データタイプ | とりうる値  |
| -------- | ------ | ------ |
| minWidth | number | 最小値: 0 |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#リストボックス列)

---

## 行の高さ

リストボックス行の高さを設定します (ヘッダーおよびフッターは除きます)。 デフォルトで、行の高さはプラットフォームとフォントサイズに基づき設定されます。

#### JSON 文法

| 名称        | データタイプ | とりうる値                           |
| --------- | ------ | ------------------------------- |
| rowHeight | string | "em" または "px" (デフォルト) 単位の css 値 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#概要)

#### 参照

[行高さ配列](#行高さ配列)

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
> * 行高さ配列プロパティは、階層リストボックスに対しては効力を持ちません。
> * 配列型のリストボックスの場合、このプロパティは [自動行高](#自動行高) オプションがチェックされていない場合に限り使用可能です。

#### JSON 文法

| 名称              | データタイプ | とりうる値      |
| --------------- | ------ | ---------- |
| rowHeightSource | string | 4D 配列変数の名前 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#概要)

#### 参照

[行の高さ](#行の高さ)
