---
id: propertiesText
title: Text
---

---

## ピッカーの使用を許可

When this property is enabled, the [OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.en.html) and [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.en.html) commands can be called to display the system font and color picker windows. これらのピッカーウィンドウを使用して、ユーザーはフォームオブジェクトのフォントやカラーをクリックによって変更できます。 このプロパティが無効になっていると (デフォルト)、ピッカーを開くコマンドは使用できません。

#### JSON 文法

| プロパティ                | データタイプ  | とりうる値                                  |
| -------------------- | ------- | -------------------------------------- |
| allowFontColorPicker | boolean | false (デフォルト), true |

#### 対象オブジェクト

[Input](input_overview.md)

---

## 太字

選択テキストの線を太くし、濃く見えるようにします。

このプロパティは [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT-STYLE.301-4505468.ja.html) コマンドによって設定することができます。

> This is normal text.<br/>
> **This is bold text.**

#### JSON 文法

| プロパティ      | データタイプ | とりうる値            |
| ---------- | ------ | ---------------- |
| fontWeight | text   | "normal", "bold" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## イタリック

選択テキストの線を右斜めに傾けます。

このプロパティは [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT-STYLE.301-4505468.ja.html) コマンドによって設定することができます。

> This is normal text.<br/>
> _This is text in italics._

#### JSON 文法

| 名称        | データタイプ | とりうる値              |
| --------- | ------ | ------------------ |
| fontStyle | string | "normal", "italic" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## 下線

選択テキストの下に線を引きます。

#### JSON 文法

| 名称             | データタイプ | とりうる値                 |
| -------------- | ------ | --------------------- |
| textDecoration | string | "normal", "underline" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォント

このプロパティは、オブジェクトで使用される **フォントテーマ** または **フォントファミリー** を指定します。

> **フォントテーマ** と **フォントファミリー** プロパティは、どちらか一方しか指定できません。 フォントテーマは、サイズを含めたフォント属性を定めます。 フォントファミリーの場合は、フォント名・フォントサイズ・フォントカラーをそれぞれ定義することができます。

### フォントテーマ

フォントテーマプロパティには、自動スタイルの名前を指定します。 自動スタイルは、オブジェクトに使われるフォントファミリー・フォントサイズ・フォントカラーをシステムパラメーターに応じて動的に定めます。 これらのパラメーターは次に依存します:

- プラットフォーム
- システム言語
- フォームオブジェクトのタイプ

フォントテーマを使うことで、システムの現インターフェース標準に沿うようにタイトルが表示されることが保証されます。 ただし、マシンごとにサイズが変わるかもしれません。

3つのフォントテーマが提供されています:

- **normal**: フォームエディター内で作成された新規オブジェクトにデフォルトで適用される自動スタイルです。
- **main** および **additional** フォントテーマは [テキストエリア](text.md) と [入力](input_overview.md) オブジェクトでのみサポートされています。 これらのテーマは、おもにダイアログボックスのデザインを目的に提供されています。 インターフェースウィンドウにおいて main フォントテーマは本文用、additional テーマは詳細情報を追記するためのものです。 下に macOS および Windows にてこれらのフォントテーマを使ったダイアログボックスの例を示します:

![](../assets/en/FormObjects/FontThemes.png)

> フォントテーマはフォントだけでなく、サイズやカラーも定めます。 一部のカスタムスタイルプロパティ (太字、イタリック、下線) は動作に影響なく適用することができます。

#### JSON 文法

| 名称        | データタイプ | とりうる値                          |
| --------- | ------ | ------------------------------ |
| fontTheme | string | "normal", "main", "additional" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

### フォントファミリー

次の 2種類のフォントファミリーが存在します:

- _フォントファミリー:_ "times", "courier", "arial" などのフォントファミリーの名称。
- _総称ファミリー:_ "serif", "sans-serif", "cursive", "fantasy", "monospace" などの汎用ファミリーの名称。

このプロパティは [**OBJECT SET FONT**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT.301-4505454.ja.html) コマンドによって設定することができます。

#### JSON 文法

| 名称         | データタイプ | とりうる値          |
| ---------- | ------ | -------------- |
| fontFamily | string | CSS フォントファミリー名 |

> 4D では [Webセーフ](https://www.w3schools.com/cssref/css_websafe_fonts.asp) フォントだけを使うことを推奨しています。

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントサイズ

文字の大きさをポイントで指定します。

#### JSON 文法

| 名称       | データタイプ  | とりうる値                                                      |
| -------- | ------- | ---------------------------------------------------------- |
| fontSize | integer | フォントサイズ (ポイント単位) 最小値: 0 |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントカラー

文字の色を指定します。

> オブジェクトの [境界線スタイル](properties_backgrounandborder.md#境界線スタイル) に "標準" または "ドット" を選択している場合、このプロパティはその境界線の色も指定します。

カラーは次の方法で指定できます:

- カラーネーム - 例: "red"
- 16進数値 - 例: "#ff0000"
- RGB値 - 例: "rgb(255,0,0)"

このプロパティは [**OBJECT SET RGB COLORS**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.ja.html) コマンドによって設定することができます。

#### JSON 文法

| 名称     | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md#overview) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Progress Indicators](progressIndicator.md) - [Ruler](ruler.md) - [Radio Button](radio_overview.md) - [Text Area](text.md)

---

## フォントカラー式

`Selection and collection/entity selection type list boxes`

リストボックスの各行にカスタマイズしたフォントカラーを適用するために使用します。 RGBカラーを使用しなければなりません。 詳細については、4Dランゲージリファレンス マニュアルの [OBJECT SET RGB COLORS](https://doc.4d.com/4dv19R/help/command/ja/page628.html) コマンドの説明を参照ください。

式または変数 (配列を除く) を入力します。 表示される行ごとに式や変数は評価されます。 ここでは [SET RGB COLORS](https://doc.4d.com/4Dv18/4D/18/SET-RGB-COLORS.302-4504454.ja.html) テーマの定数を使用することができます。

また、このプロパティは `LISTBOX SET PROPERTY` コマンドに `lk font color expression` 定数を指定して設定することもできます。

> このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。

以下の例は変数名を使用しています。**フォントカラー式** に _CompanyColor_ を入力し、フォームメソッドに以下のコードを書きます:

```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```

#### JSON 文法

| 名称              | データタイプ | とりうる値    |
| --------------- | ------ | -------- |
| rowStrokeSource | string | フォントカラー式 |

#### 対象オブジェクト

[List Box](listbox_overview.md#overview)

---

## スタイル式

`Selection and collection/entity selection type list boxes`

リストボックスの各行にカスタマイズされた文字スタイルを適用するために使用します。

式または変数 (配列を除く) を入力します。 式や変数は、表示行ごと (リストボックスのプロパティの場合) または表示セルごと (リストボックス列のプロパティの場合) に評価されます。 ここでは [Font Styles](https://doc.4d.com/4Dv18/4D/18/Font-Styles.302-4504412.ja.html) テーマの定数を使用することができます。

例:

```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```

また、このプロパティは `LISTBOX SET PROPERTY` コマンドに `lk font style expression` 定数を指定して設定することもできます。

> このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。

#### JSON 文法

| 名称             | データタイプ | とりうる値                   |
| -------------- | ------ | ----------------------- |
| rowStyleSource | string | 表示される行/セルごとに評価されるスタイル式。 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 横揃え

エリア中のテキストの横位置を指定します。

#### JSON 文法

| 名称        | データタイプ | とりうる値                                             |
| --------- | ------ | ------------------------------------------------- |
| textAlign | string | "right", "center", "left", "automatic", "justify" |

:::note

- "automatic" は、[チェックボックス](checkbox_overview.md) および [ラジオボタン](radio_overview.md) ではサポートされていません。
- "justify" は、[入力](input_overview.md) と [テキストエリア](text.md) でのみサポートされています。

:::

#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) (all styles except Regular and Flat) - [Group Box](groupBox.md) - [Input](input_overview.md) - [List Box](listbox_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-headers) - [List Box Footer](listbox_overview.md#list-box-footers) - [Radio Button](radio_overview.md) (all styles except Regular and Flat) - [Text Area](text.md)

---

## 縦揃え

エリア中のテキストの縦位置を指定します。

**デフォルト** オプション (JSON値: `automatic`) の場合は、各列のデータ型に基づき整列方向が決定されます:

- ピクチャーを除き、すべて `下` です。
- ピクチャーは `上` です。

このプロパティは、[OBJECT Get vertical alignment](https://doc.4d.com/4dv19R/help/command/ja/page1188.html) と [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4dv19R/help/command/ja/page1187.html) コマンドを使用して設定することもできます。

#### JSON 文法

| 名称            | データタイプ | とりうる値                                  |
| ------------- | ------ | -------------------------------------- |
| verticalAlign | string | "automatic", "top", "middle", "bottom" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)* [リストボックス列](listbox_overview.md#リストボックス列)
* [リストボックスフッター](listbox_overview.md#リストボックスフッター)
* [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー)

---

## メタ情報式

`Collection or entity selection type list boxes`

表示される行ごとに評価される式あるいは変数を指定します。 行テキスト属性全体を定義することができます。 **オブジェクト変数**、あるいは **オブジェクトを返す式** を指定する必要があります。 以下のプロパティがサポートされています:

| プロパティ名         | タイプ     | 説明                                                                                                                                                                                                                                                                          |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke         | string  | フォントカラー。 任意の CSSカラー (例: "#FF00FF"), "automatic", "transparent"                                                                                                                                                                           |
| fill           | string  | 背景色。 任意の CSSカラー (例: "#F00FFF"), "automatic", "transparent"                                                                                                                                                                               |
| fontStyle      | string  | "normal","italic"                                                                                                                                                                                                                                                           |
| fontWeight     | string  | "normal","bold"                                                                                                                                                                                                                                                             |
| textDecoration | string  | "normal","underline"                                                                                                                                                                                                                                                        |
| unselectable   | boolean | 対応する行が選択不可 (つまりハイライトすることができない状態) であることを指定します。 このオプションが有効化されている場合、入力可能エリアは入力可能ではなくなります (ただし "シングルクリック編集" オプションが有効化されている場合を除く)。 チェックボックスやリストといったコントロール類は引き続き稼働します。 この設定はリストボックスの選択モードが "なし" の場合には無視されます。 デフォルト値: false。 |
| disabled       | boolean | 対応する行を無効化します。 このオプションが有効化されると、入力可能エリアは入力可能ではなくなります。 Text and controls (checkboxes, lists, etc.) appear dimmed or grayed out. デフォルト値: false。                                                              |

特別な "cell" プロパティを使用すると、特定の列にプロパティをまとめて適用することができます:

| プロパティ名 |              |                | タイプ    | 説明                                                                                                                                                                                                          |
| ------ | ------------ | -------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| cell   |              |                | object | 特定の列に適用するプロパティ                                                                                                                                                                                              |
|        | _columnName_ |                | object | _columnName_ はリストボックス列のオブジェクト名です。                                                                                                                                                                           |
|        |              | _propertyName_ | string | "stroke", "fill", "fontStyle", "fontWeight", または "textDecoration" プロパティ (前述参照)。 **注**: "unselectable" および "disabled" プロパティは行レベルでのみ定義可能です。 "セル" オブジェクトに指定した場合、これらは無視されます。 |

> Style settings made with this property are ignored if other style settings are already defined through expressions (_i.e._, [Style Expression](#style-expression), [Font Color Expression](#font-color-expression), [Background Color Expression](#background-color-expression)).

**Examples**

_Color_ プロジェクトメソッドに以下のコードを書きます:

```4d
//Color method
//Sets font color for certain rows and background color for Col2 and Col3 columns
Form.meta:=New object
If(This.ID>5) //ID is an attribute of collection objects/entities
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Col2";New object("fill";"black");\
  	"Col3";New object("fill";"red"))
Else
  Form.meta.stroke:="orange"
End if
```

**ベストプラクティス:** 最適化のため、このような場合にはフォームメソッド内で `meta.cell` オブジェクトを作成しておくことが推奨されます。

```4d
  //form method
 Case of
    :(Form event code=On Load)
       Form.colStyle:=New object("Col2";New object("fill";"black");\
       	"Col3";New object("fill";"red"))  
 // you can also define other style sets  
       Form.colStyle2:=New object("Col2";New object("fill";"green");\
       	"Col3";New object("fontWeight";"bold"))  
 End case
```

_Color_ メソッドには、以下のコードを書きます:

```4d
  //Color method
 ...
 If(This.ID>5)
    Form.meta.stroke:="purple"
    Form.meta.cell:=Form.colStyle //reuse the same object for better performance
 Else
 	Form.meta.stroke:="orange"
	Form.meta.cell:=Form.colStyle2
 End if
 ...
```

#### JSON 文法

| 名称         | データタイプ | とりうる値                     |
| ---------- | ------ | ------------------------- |
| metaSource | string | 表示される行/セルごとに評価されるオブジェクト式。 |

#### 対象オブジェクト

[List Box](listbox_overview.md)

---

## マルチスタイル

このプロパティは、選択エリアでスタイルの利用を可能にするかどうかを指定するものです。 プロパティリストでこのオプションがチェックされていると、4D はエリア中の `<SPAN>` HTMLタグをスタイル属性として解釈します。

デフォルトでは、このオプションは有効化されていません。

#### JSON 文法

| 名称         | データタイプ  | とりうる値       |
| ---------- | ------- | ----------- |
| styledText | boolean | true, false |

#### 対象オブジェクト

[入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 方向

テキストエリアの角度 (回転) を変更します。 テキストエリアは、90°単位で回転させることができます。 それぞれの回転角度を適用するとき、オブジェクトの左下の角は固定されたままで回転していきます:

| 回転角度                         | 戻り値                                            |
| ---------------------------- | ---------------------------------------------- |
| 0 (デフォルト) | ![](../assets/en/FormObjects/orientation1.png) |
| 90                           | ![](../assets/en/FormObjects/orientation2.png) |
| 180                          | ![](../assets/en/FormObjects/orientation3.png) |
| 270                          | ![](../assets/en/FormObjects/orientation4.png) |

[スタティックなテキストエリア](text.md) のほかに、[入力不可](properties_Entry.md#入力可) に設定された [入力オブジェクト](input_overview.md) も回転させることが出来ます。 入力オブジェクトの方向プロパティにて 0°以外のオプションを選んだ場合、 入力可プロパティは (選択されていた場合) 自動的に解除されます。 その際、このオブジェクトは入力順から自動的に除外されます。

#### JSON 文法

| 名称        | データタイプ | とりうる値           |
| --------- | ------ | --------------- |
| textAngle | number | 0, 90, 180, 270 |

#### 対象オブジェクト

[入力](input_overview.md) (入力不可) - [テキストエリア](text.md)

---

## 行フォントカラー配列

`Array type list boxes`

リストボックスの各行/セルにカスタマイズしたフォントカラーを適用するために使用します。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 ここでは [SET RGB COLORS](https://doc.4d.com/4Dv18/4D/18/SET-RGB-COLORS.302-4504454.ja.html) テーマの定数を使用することができます。 もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

#### JSON 文法

| 名称              | データタイプ | とりうる値      |
| --------------- | ------ | ---------- |
| rowStrokeSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 行スタイル配列

`Array type list boxes`

リストボックスの各行/セルにカスタマイズされた文字スタイルを適用するために使用します。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 配列へは、[Font Styles](https://doc.4d.com/4Dv18/4D/18/Font-Styles.302-4504412.ja.html) テーマの定数を使用することができます (メソッドを使用しての入力も可能)。 定数同士を足し合わせてスタイルを組み合わせることもできます。 もし上のレベルで定義されているスタイルをそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

#### JSON 文法

| 名称             | データタイプ | とりうる値      |
| -------------- | ------ | ---------- |
| rowStyleSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## スタイルタグを全て保存

このプロパティは [マルチスタイル](#マルチスタイル) 入力エリアの場合にのみ提供されます。
このオプションがチェックされている場合には、たとえ変更がおこなわれていなくても、エリアはテキストとともにスタイルタグを格納します。 この場合、タグはデフォルトスタイルが適用されます。 このオプションがチェックされていないと、変更されたスタイルタグのみが格納されます。

たとえば、以下のようにスタイルが変更されたテキストがあります:

![](../assets/en/FormObjects/tagStyle1.png)

このプロパティが無効な場合、エリアは更新されたスタイルのみを格納します。 つまり、格納される内容は以下のようになります:

```
What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!
```

同プロパティが有効な場合には、エリアはすべてのフォーマット情報を格納します。 先頭の汎用タグはデフォルトスタイルを定義し、変更されたスタイルはネストされたタグに書き込まれます。 格納される内容は以下のようになります:

```
<SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF">What a <SPAN STYLE="font-size:13.5pt">beautiful</SPAN> day!</SPAN>
```

#### JSON 文法

| 名称                | データタイプ  | とりうる値                                  |
| ----------------- | ------- | -------------------------------------- |
| storeDefaultStyle | boolean | true, false (デフォルト) |

#### 対象オブジェクト

[Input](input_overview.md)
