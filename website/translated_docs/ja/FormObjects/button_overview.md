---
id: buttonOverview
title: ボタン
---

A button is an active object that can be assigned an action (*e.g.*, a database task or an interface function) to perform when a user clicks on it.

![](assets/en/FormObjects/button_regular.png)

割り当てられたスタイルやアクションに応じて、ボタンはさまざまな役割を果たします。 たとえば、ユーザーがアンケートやフォーム内を移動したり、選択したりといった操作を可能にします。 設定によって、ボタンをワンクリックすることでコマンド実行することもできれば、複数回クリックすることで望む結果を得られるようにすることもできます。

<p>

## ボタンの使用

ボタンには、あらかじめ設定されている [標準アクション](properties_Action.md#standard-action) またはオブジェクトメソッドを割り当てることができます。 典型的なアクションの例は、レコードの受け入れ・削除・編集キャンセルのほか、データのコピー / ペースト、複数ページあるフォームにおけるページ移動、サブフォームのレコード操作、テキストエリアのフォント属性の操作、などです。

フォーム実行時、標準アクションが設定されたボタンは必要に応じてグレー表示されます。 たとえば、あるテーブルの1番目のレコードが表示されていると、先頭レコード (`firstRecord`) 標準アクションがついたボタンはグレー表示されます。

標準アクションとして提供されていない動作をボタンに実行させたい場合には、標準アクションのフィールドは空欄にしておき、ボタンのアクションを指定するオブジェクトメソッドを書きます オブジェクトメソッドの作成や割り当て方法についての詳細は [オブジェクトメソッドを使用する](https://doc.4d.com/4Dv18/4D/18/Using-object-methods.300-4575722.ja.html) を参照ください。 通常は、イベントテーマで `On Clicked` イベントを有効にして、ボタンのクリック時にのみメソッドを実行します。 どのタイプのボタンにもメソッドを割り当てることができます。

The [variable](properties_Object.md#variable-or-expression) associated with a button is automatically set to **0** when the form is executed for the first time in Design or Application mode. When the user clicks a button, its variable is set to **1**.

> ボタンには標準アクションとメソッドの両方を割り当てることもできます。 この場合、標準アクションによってボタンが無効化されていなければ、標準アクションより先にメソッドが実行されます。



## ボタンスタイル

ボタンスタイルは、ボタンの外観を制御すると同時に、提供されるプロパティをも決定します。 ボタンには、あらかじめ定義されたスタイルやポップアップメニューを割り当てることができます。 これらのプロパティや動作を組み合わせることで、多数のバリエーションが得られます。

With the exception of the [available properties](#supported-properties), many button objects are *structurally* identical. 違いは、関連づけられた変数の処理にあります。

次の既定スタイルが提供されています:



### 通常

The Regular button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/button_regular.png)

通常ボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 Windowsの場合は、通常ボタンの上にマウスオーバーすると、境界線色と背景色が変わります。 また、プラットフォームによって表現が異なりますが、クリック時にも背景色が変わるなどして、物理的なボタンを模倣します。

#### JSON 例:

```4d
    "myButton": {
        "type": "button",   // オブジェクトタイプ
        "style":"regular",  // ボタンスタイル
        "defaultButton":"true"  // デフォルトボタン
        "text": "OK",   // タイトル
        "action": "Cancel", // アクション
        "left": 60,  // フォーム上の座標 (左)
        "top": 160, // フォーム上の座標 (上)
        "width": 100,  // 幅
        "height": 20 // 高さ
        }
```


[デフォルトボタン](properties_Appearance.md#デフォルトボタン) プロパティが提供されているのは、通常スタイルとフラットスタイルのみです。


### フラット

The Flat button style is a standard system button (*i.e.*, a rectangle with a descriptive label) which executes code when a user clicks on it.

![](assets/en/FormObjects/button_flat.png)

フラットボタンは、白の背景に中央配置のラベルがデフォルトで付いており、角が丸くなっています。 フラットボタンのグラフィック的な装飾は最小限であるため、印刷されるフォームでの使用に適しています。

#### JSON 例:

```4d

    "myButton": {
                "type": "button",
                "style":"flat",
                "defaultButton":"true"
                "text": "OK",
                "action": "Cancel",
                "left": 60,         
                "top": 160,         
                "width": 100,
                "height": 20
                }
```


[デフォルトボタン](properties_Appearance.md#デフォルトボタン) プロパティが提供されているのは、通常スタイルとフラットスタイルのみです。

### ツールバー

ツールバースタイルのボタンは、主としてツールバーで使用するためのものです。 このスタイルには、複数の選択肢を提示するためのポップアップメニュー (逆三角形で示されます) を追加するオプションがあります。

ツールバーボタンは、透明の背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - the button is highlighted when it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](assets/en/FormObjects/button_toolbar.png)

 - *macOS* - the highlight of the button never appears. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"toolbar",
                "text": "OK",       
                "popupPlacement":"separated",
                "action": "Cancel",     
                "left": 60,             
                "top": 160,             
                "width": 100,           
                "height": 20        
                }
```



### ベベル

The Bevel button style combines the appearance of the [Regular](#regular) (*i.e.*, a rectangle with a descriptive label) style with the [Toolbar](#toolbar) style's pop-up menu property option.

ベベルボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - the button is highlighted. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

![](assets/en/FormObjects/button_bevel.png)

 - *macOS* - the highlight of the button never appears. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"bevel",
                "text": "OK",       
                "popupPlacement":"linked",
                "action": "Cancel",
                "left": 60,     
                "top": 160,     
                "width": 100,
                "height": 20
                }
```



### 角の丸いベベル

角の丸いベベルスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては角が丸く表示されます。 ベベルスタイルと同様に、角の丸いベベルスタイルは [通常](#通常) スタイルの外観 (四角にラベル) に [ツールバー](#ツールバー) スタイルのポップアップメニューを追加可能にしたものです。

角の丸いベベルボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - the button is identical to the Bevel style. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

  ![](assets/en/FormObjects/button_roundedbevel.png)

 - *macOS* - the corners of the button are rounded. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"roundedBevel",
                "text": "OK",
                "popupPlacement":"none",
                "action": "Cancel",
                "left": 60,         
                "top": 160,
                "width": 100,
                "height": 20
                }
```



### OS Xグラデーション

OS Xグラデーションスタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては異なる点があります。 ベベルスタイルと同様に、OS Xグラデーションスタイルは [通常](#通常) スタイルの外観 (四角にラベル) に [ツールバー](#ツールバー) スタイルのポップアップメニューを追加可能にしたものです。

OS Xグラデーションボタンは、明るいグレーの背景に中央配置のラベルがデフォルトで付いています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - the button is identical to the Bevel style. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

![](assets/en/FormObjects/button_osxgradient.png)

 - *macOS* - the button is displayed as a two-tone system button. "ポップアップメニューあり" プロパティを使用していると、ボタンの右側に三角形が表示されます。

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"gradientBevel",
                "text": "OK",
                "popupPlacement":"linked",
                "action": "Cancel",     
                "left": 60,     
                "top": 160,
                "width": 100,
                "height": 20
                }
```


### OS Xテクスチャー

OS Xテクスチャースタイルは [ベベル](#ベベル) スタイルとほぼ同一ですが、OSによっては異なる点があります。 ベベルスタイルと同様に、OS Xテクスチャースタイルは [通常](#通常) スタイルの外観 (四角にラベル) に [ツールバー](#ツールバー) スタイルのポップアップメニューを追加可能にしたものです。

デフォルトで、OS Xテクスチャーボタンの外観は次の通りです:

 - *Windows* - a standard system button with a light gray background with a label in the center. Vistaにおいては透明になる特別機能を持っています。

 ![](assets/en/FormObjects/button_osxtextured.png)

 - *macOS* - a standard system button displaying a color change from light to dark gray. 高さは定義済みで、変更できません。

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"texturedBevel",
                "text": "OK",
                "popupPlacement":"separated",
                "action": "Cancel",
                "left": 60,         
                "top": 160,     
                "width": 100,
                "height": 20
                }
```



### Office XP

ベベルスタイルと同様に、Office XPスタイルは [通常](#通常) スタイルの外観 (四角にラベル) に [ツールバー](#ツールバー) スタイルの透過性を加え、ポップアップメニューを追加可能にしたものです。

Office XPボタンの反転表示と背景のカラーはシステムカラーに基づいています。 ボタンにマウスオーバーしたときの表示は OS によって異なります:

 - *Windows* - its background only appears when the mouse rolls over it.

![](assets/en/FormObjects/button_officexp.png)

 - *macOS* - its background is always displayed.

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"office",
                "text": "OK",
                "popupPlacement":"none",
                "action": "Cancel",
                "left": 60,     
                "top": 160,
                "width": 100,
                "height": 20
                }
```



### ヘルプ


このスタイルはシステム標準のヘルプボタンを表示するために使用します。 デフォルトで、ヘルプボタンは丸の中に表示されたハテナマーク (疑問符) です。

![](assets/en/FormObjects/button_help.png)

#### JSON 例:

```4d
    "myButton": {
                "type": "button",
                "style":"help",     
                "text": "OK",
                "dropping": "custom",
                "left": 60,
                "top": 160,     
                "width": 100,
                "height": 20
                }
```

> ヘルプボタンは次の基本プロパティを持ちません: [状態の数](properties_TextAndPicture.md#状態の数)、[ピクチャーパス名](properties_TextAndPicture.md#ピクチャーパス名)、[タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトルピクチャー位置)。


### サークル

サークルスタイルのボタンは、円形のシステムボタンとして表示されます。 このボタンスタイルは macOS 用に用意されています。

![](assets/en/FormObjects/button_circleM.png)

Windows の場合、サークルは表示されません。


#### JSON 例:

```
    "myButton": {
                "type": "button",
                "style":"circular",
                "text": "OK",
                "dropping": "custom",
                "left": 60,
                "top": 160,     
                "width": 100,
                "height": 20
                }
```



### カスタム

カスタムスタイルのボタンは、背景ピクチャーを使用できるほか、さまざまな追加パラメーターを管理することができます (アイコンオフセットやマージン)。

![](assets/en/FormObjects/button_custom.png)


#### JSON 例:

```code
    "myButton": {
                "type": "button",
                "style":"custom",
                "text": "",
                "customBackgroundPicture": "/RESOURCES/bkgnd.png",
                "icon": "/RESOURCES/custom.png",  
                "textPlacement": "center",
                "left": 60,
                "top": 160,     
                "width": 100,
                "height": 20
                }
```




## プロパティ一覧

すべてのボタンは次の基本プロパティを共有します:


[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [変数あるいは式](properties_Object.md#変数あるいは式) - [タイトル](properties_Object.md#タイトル) - [CSSクラス](properties_Object.md#CSSクラス) - [ボタンスタイル](properties_TextAndPicture.md#ボタンスタイル) - [ピクチャーパス名](properties_TextAndPicture.md#ピクチャーパス名)(1) - [状態の数](properties_TextAndPicture.md#状態の数)(1) - [タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトルピクチャー位置)(1) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [フォーカス可](properties_Entry.md#フォーカス可) - [ショートカット](properties_Entry.md#ショートカット) - [表示状態](properties_Display.md#表示状態) - [レンダリングしない](properties_Display.md#レンダリングしない) - [境界線スタイル](properties_BackgroundAndBorder.md#境界線スタイル) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [ヘルプTips](properties_Help.md#ヘルプTips) - [標準アクション](properties_Action.md#標準アクション) - [ドロップ有効](properties_Action.md#ドロップ有効)

> (1) [ヘルプ](#ヘルプ) スタイルは除外


[ボタンスタイル](#ボタンスタイル) に応じて、次の追加プロパティが使用できます:

- [背景パス名](properties_TextAndPicture.md#背景パス名) - [アイコンオフセット](properties_TextAndPicture.md#アイコンオフセット) - [横方向マージン](properties_TextAndPicture.md#横方向マージン) - [縦方向マージン](properties_TextAndPicture.md#縦方向マージン) (カスタムスタイル)
- [デフォルトボタン](properties_Appearance.md#デフォルトボタン) (通常、フラット)
- [ポップアップメニューあり](properties_TextAndPicture.md#ポップアップメニューあり) (ツールバー、ベベル、角の丸いベベル、OS X グラデーション、OS X テクスチャー、Office XP、サークル、カスタム)
