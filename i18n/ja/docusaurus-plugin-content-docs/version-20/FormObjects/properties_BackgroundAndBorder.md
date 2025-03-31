---
id: propertiesBackgroundAndBorder
title: 背景色と境界線
---


## 交互に使用する背景色

奇数番の行/列に使用するための異なる背景色を設定することができます。 デフォルトでは、*自動* が選択されており、リストボックスレベルで設定されている "交互に使用する背景色" を列も使用します。

このプロパティは [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/ja/page628.html) コマンドでも設定できます。

#### JSON 文法

| 名称            | データタイプ | とりうる値                                                      |
| ------------- | ------ | ---------------------------------------------------------- |
| alternateFill | string | 任意の CSS値; "transparent"; "automatic"; "automaticAlternate" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 背景色/塗りカラー

オブジェクトの背景色を設定します。

リストボックスの場合にはデフォルトで、*自動* が選択されており、リストボックスレベルで設定されている背景色を列も使用します。

このプロパティは [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/ja/page628.html) コマンドでも設定できます。

#### JSON 文法

| 名称   | データタイプ | とりうる値                                |
| ---- | ------ | ------------------------------------ |
| fill | string | 任意の css値; "transparent"; "automatic" |

#### 対象オブジェクト

[階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角) - [テキストエリア](text.md)

#### 参照

[透過](#透過)

---

## 背景色式

`セレクションとコレクション型リストボックス`

リストボックスの各行にカスタムの背景色を指定するための式または変数 (配列変数は使用不可)。 式または変数は表示行ごとに評価され、RGB値を返さなくてはなりません。 詳細については、*4Dランゲージリファレンス* マニュアルの [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/ja/page628.html) コマンドの説明を参照ください。

また、このプロパティは [`LISTBOX SET PROPERTY`](https://doc.4d.com/4dv20/help/command/ja/page1440.html) コマンドに `lk background color expression` 定数を指定して設定することもできます。
> コレクション/エンティティセレクション型リストボックスでは、このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。

#### JSON 文法

| 名称            | データタイプ | とりうる値       |
| ------------- | ------ | ----------- |
| rowFillSource | string | RGBカラー値を返す式 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 境界線スタイル

リストボックスの境界線のスタイルを設定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値                                                             |
| ----------- | ------ | ----------------------------------------------------------------- |
| borderStyle | text   | "system", "none", "solid", "dotted", "raised", "sunken", "double" |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)

---

## 点線タイプ

点線のタイプを、点と白のパターンにより指定します。

#### JSON 文法

| 名称              | データタイプ     | とりうる値                                              |
| --------------- | ---------- | -------------------------------------------------- |
| strokeDashArray | 数値配列または文字列 | 例:  6個の点と1個の空白のパターンは "6 1" または \[6,1\] によって表します。 |

#### 対象オブジェクト

[四角](shapes_overview.md#四角) - [楕円](shapes_overview.md#楕円) - [線](shapes_overview.md#線)

---

## 追加の空白の行を非表示

リストボックスオブジェクト下部に追加される余分な空白行の表示を管理します。 デフォルトで、4D は空のエリアを埋めるためにこのような行を追加します:

![](../assets/en/FormObjects/property_hideExtraBlankRows1.png)

このオプションをチェックすると、これらの空白行を除去することができます。 リストボックスオブジェクトの下部は空のままになります:

![](../assets/en/FormObjects/property_hideExtraBlankRows2.png)

#### JSON 文法

| 名称                 | データタイプ | とりうる値       |
| ------------------ | ------ | ----------- |
| hideExtraBlankRows | ブール    | true, false |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#概要)

---

## 線カラー

オブジェクトの線の色を指定します。 カラーは次の方法で指定できます:

* カラーネーム - 例: "red"
* 16進数値 - 例: "#ff0000"
* RGB値 - 例: "rgb(255,0,0)"

このプロパティは [`OBJECT SET RGB COLORS`](https://doc.4d.com/4dv20/help/command/ja/page628.html) コマンドでも設定できます。

#### JSON 文法

| 名称     | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |

> このプロパティはテキスト系のオブジェクトでも利用可能です。この場合、このプロパティはフォントカラーおよびオブジェクトの線カラーの両方を指定します ([フォントカラー](properties_Text.md#フォントカラー) 参照)。

#### 対象オブジェクト

[線](shapes_overview.md#線) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角)

---

## 線幅

線の幅を指定します。

#### JSON 文法

| 名称          | データタイプ | とりうる値                             |
| ----------- | ------ | --------------------------------- |
| strokeWidth | number | 印刷されるフォームにおける最小幅 0 から、整数値 < 20 まで |

#### 対象オブジェクト

[線](shapes_overview.md#線) - [楕円](shapes_overview.md#楕円) - [四角](shapes_overview.md#四角)

---

## 行背景色配列

`配列型リストボックス`

リストボックスまたはリストボックス列の各行にカスタムの背景色を適用するのに使用する配列名です。

倍長整数型の配列の名前を入力しなければなりません。 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 ここでは [SET RGB COLORS](https://doc.4d.com/4Dv20/4D/20.1/SET-RGB-COLORS.302-6481080.ja.html) テーマの定数を使用することができます。 もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。

たとえば、リストボックスプロパティにてグレー/ライトグレーカラーが行の交互背景色として設定されているとします。 同じリストボックスに行背景色配列が指定されており、行内で負の値が一つでもあれば色をオレンジに変えます:

```4d
 <>_BgndColors{$i}:=0x00FFD0B0 // オレンジ
 <>_BgndColors{$i}:=-255 // デフォルト値
```

![](../assets/en/FormObjects/listbox_styles1.png)

次に、負の値を持つセルの色を濃いオレンジで示したい場合、 各列にも行背景色配列を設定します (例: `<>_BgndColor_1`, `<>_BgndColor_2` と `<>_BgndColor_3`)。 これらの配列の値は、リストボックスプロパティに設定されているものや、全体用の行背景色配列よりも優先されます。

```4d
 <>_BgndColorsCol_3{2}:=0x00FF8000 // 濃いオレンジ
 <>_BgndColorsCol_2{5}:=0x00FF8000
 <>_BgndColorsCol_1{9}:=0x00FF8000
 <>_BgndColorsCol_1{16}:=0x00FF8000
```

![](../assets/en/FormObjects/listbox_styles2.png)

[`LISTBOX SET ROW FONT STYLE`](https://doc.4d.com/4dv20/help/command/ja/page1268.html) や [`LISTBOX SET ROW COLOR`](https://doc.4d.com/4dv20/help/command/ja/page1270.html) コマンドを使っても同じような効果が得られます。 コマンドを使う利点は、スタイル/カラー配列をあらかじめ列に設定する必要がないことです。この場合、これらはコマンドによって動的に作成されます。

#### JSON 文法

| 名称            | データタイプ | とりうる値      |
| ------------- | ------ | ---------- |
| rowFillSource | string | 倍長整数型配列の名前 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)

---

## 透過

リストボックスの背景を透明にします。 このプロパティが有効になっていると、列に対して設定されている [交互に使用する背景色](#交互に使用する背景色) および [背景色](#背景色-塗りカラー) の設定は無視されます。

#### JSON 文法

| 名称   | データタイプ | とりうる値         |
| ---- | ------ | ------------- |
| fill | text   | "transparent" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md#概要)

#### 参照

[背景色/塗りカラー](#background-color--fill-color)
