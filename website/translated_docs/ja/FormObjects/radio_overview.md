---
id: radiobuttonOverview
title: ラジオボタン
---

## 概要

ラジオボタンは、ボタングループの中から1つを選択することができるオブジェクトです。

ラジオボタンは通常、小さな目玉状の円とテキストを表示します。 しかし、ラジオボタンに [それ以外の外観](#ボタンスタイル) を設定することもできます。

![](assets/en/FormObjects/radio1.png)

ラジオボタンを選択するには二つの方法があります:

- ラジオボタンをクリックする
- ラジオボタンにフォーカスがあるときに **スペース** キーを押す

## ラジオボタンの設定

ラジオボタンは組織的な集合の中で使用されます。その集合のなかから一度にひとつのボタンしか選択できません。 一連のラジオボタンが連携した状態で動作するためには、それらには同じ [ラジオグループ](properties_Object.md#ラジオグループ) プロパティが設定されていなくてはなりません。

ラジオボタンの結果はメソッドを用いて管理します。 あらゆるボタンと同様に、フォームが初めて開かれる時ラジオボタンは 0 に初期化されています。 ラジオボタンが選択されると、ラジオボタンに割り当てられたメソッドが実行されます。 次の例では、ビデオ収集データベースでラジオボタンを使用し、レコーディングの速さ (SP、LP、EP) を入力します:

![](assets/en/FormObjects/radio2.png)

グループのなかから 1つのラジオボタンを選択すると、そのボタンには 1 が代入され、グループ内の他のすべてのボタンには 0 が代入されます。 一度に1つのラジオボタンしか選択できません。

> ラジオボタンには [ブール型の式](properties_Object.md#変数あるいは式) を設定することができます。 この場合、グループ内で選択されたラジオボタンの変数には True が代入され、残りのラジオボタンの変数には False が代入されます。

ラジオボタンオブジェクトに格納された値は (ブールフィールドの場合を除き) 自動保存されません。変数に格納されたラジオボタンの値はメソッドで管理しなければなりません。

## ボタンスタイル

ラジオ [ボタンスタイル](properties_TextAndPicture.md#ボタンスタイル)は、ラジオボタンの外観を制御すると同時に、提供されるプロパティをも決定します。 ラジオボタンには、あらかじめ定義されたスタイルを割り当てることができます。 しかし、ラジオボタンが適切に動作するには、同じグループに所属するラジオボタンはすべて同じボタンスタイルに設定されている必要があります。

次の既定スタイルが提供されています:

### 通常

通常スタイルのラジオボタンは、標準的なシステムボタンで (小さな目玉状の円とテキストを表示したもの)、ユーザークリックに応じてコードを実行します。

![](assets/en/FormObjects/radio_regular.png)

通常スタイルのラジオボタンにマウスオーバーすると、"目玉" の色が変化します。

### フラット

フラットスタイルのラジオボタンは、標準的なシステムボタンで (小さな目玉状の円とテキストを表示したもの)、ユーザークリックに応じてコードを実行します。

![](assets/en/FormObjects/radio_flat.png)

フラットスタイルでは、装飾が最小限に抑えられています。 フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。

### ツールバー

ツールバースタイルのラジオボタンは、主としてツールバーで使用するためのものです。

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - ボタンがハイライト表示されます。 

![](assets/en/FormObjects/radio_toolbar.png)

- *macOS* - ボタンはハイライト表示されません。 

### ベベル

ベベルスタイルは [ツールバー](#ツールバー) スタイルと似た動作をしますが、薄いグレーの背景にグレーの枠が描画されます。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - ボタンがハイライト表示されます。
    
    ![](assets/en/FormObjects/radio_bevel.png)

- *macOS* - ボタンはハイライト表示されません。

### 角の丸いベベル

角の丸いベベルスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては角が丸く表示されます。

- Windows 上では、このスタイルは [ベベル](#ベベル) スタイルと同じです。

- *macOS* - 角が丸くなっています。 ![](assets/en/FormObjects/roundedBevel.png)

### OS Xグラデーション

OS Xグラデーションスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては異なる点があります。

- Windows 上では、このスタイルは [ベベル](#ベベル) スタイルと同じです。

- *macOS* - 2トーンのシステムボタンです。

### OS Xテクスチャー

OS Xテクスチャースタイルは [ツールバー](#ツールバー) スタイルとほぼ同一ですが、OSによってはマウスオーバー時の変化がないほか、外観の異なる点があります。

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

- *Windows* - ツールバースタイルのようなボタンに中央配置のラベルが付き、背景は常に表示されます。

- *macOS* - 灰色のグラデーションを表示する標準のシステムボタンです。 高さは定義済みで、変更できません。
    
    ![](assets/en/FormObjects/OSXTextured.png)

### Office XP

Office XPスタイルは [ベベル](#ベベル) ボタンような外観に、[ツールバーボタン](#ツールバーボタン) スタイルの動作を組み合わせたものです。

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

- *Windows* - マウスオーバー時にのみ背景が表示されます。
    
    ![](assets/en/FormObjects/radio_xp.png)

- *macOS* - 背景は常に表示されます。

### 折りたたみ/展開

This button style can be used to add a standard collapse/expand icon. これらは階層リストで使用されます。 In Windows, the button looks like a [+] or a [-]; in macOS, it looks like a triangle pointing right or down.

![](assets/en/FormObjects/checkbox_collapse.png)

### 開示ボタン

The disclosure radio button style displays the radio button as a standard disclosure button, usually used to show/hide additional information. The button symbol points downwards with value 0 and upwards with value 1.

![](assets/en/FormObjects/checkbox_disclosure.png)

### カスタム

The Custom radio button style accepts a personalized background picture and allows managing additional parameters such as [icon offset](properties_TextAndPicture.md#icon-offset) and [margins](properties_TextAndPicture.md#horizontalMargin).

## Supported properties

All radio buttons share the same set of basic properties:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Method](properties_Action.md#method) - [Object Name](properties_Object.md#object-name) - [Radio Group](properties_Object.md#radio-group) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Title](properties_Object.md#title) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

Additional specific properties are available depending on the [button style](#button-styles):

- [背景パス名](properties_TextAndPicture.md#背景パス名) - [アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) - [横方向マージン](properties_TextAndPicture.md#横方向マージン) - [縦方向マージン](properties_TextAndPicture.md#縦方向マージン) (カスタムスタイル)
- [ピクチャーパス名](properties_TextAndPicture.md#ピクチャーパス名) - [状態の数](properties_TextAndPicture.md#状態の数) - [タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトル/ピクチャー位置) (ツールバーボタン、ベベル、角の丸いベベル、OS X グラデーション、OS X テクスチャー、Office XP、カスタム)