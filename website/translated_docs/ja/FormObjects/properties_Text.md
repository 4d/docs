---
id: propertiesText
title: テキスト
---

---
## ピッカーの使用を許可

このプロパティが有効化されていると、[OPEN FONT PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-FONT-PICKER.301-4505612.ja.html) または [OPEN COLOR PICKER](https://doc.4d.com/4Dv18/4D/18/OPEN-COLOR-PICKER.301-4505611.ja.html) を使用してユーザーがフォントピッカー/カラーピッカーを呼び出すことを許可します。 これらのピッカーウィンドウを使用して、ユーザーはフォームオブジェクトのフォントやカラーをクリックによって変更できます。 このプロパティが無効になっていると (デフォルト)、ピッカーを開くコマンドは使用できません。


#### JSON 文法

| プロパティ                | データタイプ  | とりうる値               |
| -------------------- | ------- | ------------------- |
| allowFontColorPicker | boolean | false (デフォルト), true |

#### 対象オブジェクト

[入力](input_overview.md)

---
## 太字

選択テキストの線を太くし、濃く見えるようにします。

このプロパティは [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT-STYLE.301-4505468.ja.html) コマンドによって設定することができます。
> これは通常のテキストです。<br> **これは太字のテキストです。**

#### JSON 文法

| プロパティ      | データタイプ | とりうる値            |
| ---------- | ------ | ---------------- |
| fontWeight | text   | "normal", "bold" |

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)


---
## イタリック

選択テキストの線を右斜めに傾けます。

このプロパティは [**OBJECT SET FONT STYLE**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT-STYLE.301-4505468.ja.html) コマンドによって設定することができます。
> これは通常のテキストです。<br> *これはイタリックのテキストです。*

#### JSON 文法

| 名         | データタイプ | とりうる値              |
| --------- | ------ | ------------------ |
| fontStyle | string | "normal", "italic" |

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)




---
## 下線
選択テキストの下に線を引きます。
> これは通常のテキストです。<br> <span style="text-decoration:underline">これは下線の付いたテキストです。</span>

#### JSON 文法

| 名              | データタイプ | とりうる値                 |
| -------------- | ------ | --------------------- |
| textDecoration | string | "normal", "underline" |

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)






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

![](assets/en/FormObjects/FontThemes.png)

> フォントテーマはフォントだけでなく、サイズやカラーも定めます。 You can apply custom style properties (Bold, Italic or Underline) without altering its functioning.



#### JSON 文法

| 名         | データタイプ | とりうる値                          |
| --------- | ------ | ------------------------------ |
| fontTheme | string | "normal", "main", "additional" |


#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)




### フォントファミリー

次の 2種類のフォントファミリーが存在します:

* *フォントファミリー:* "times", "courier", "arial" などのフォントファミリーの名称。
* *総称ファミリー:* "serif", "sans-serif", "cursive", "fantasy", "monospace" などの汎用ファミリーの名称。

このプロパティは [**OBJECT SET FONT**](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-FONT.301-4505454.ja.html) コマンドによって設定することができます。
> <span style="font-family:YuGothic; font-size:20pt"> これは 游ゴシック フォントです。</span><br> <span style="font-family:YuMincho; font-size:20pt"> これは 游明朝 フォントです。</span>

#### JSON 文法

| 名          | データタイプ | とりうる値          |
| ---------- | ------ | -------------- |
| fontFamily | string | CSS フォントファミリー名 |
> 4D では [Webセーフ](https://www.w3schools.com/cssref/css_websafe_fonts.asp) フォントだけを使うことを推奨しています。

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)



---
## フォントサイズ

文字の大きさをポイントで指定します。

#### JSON 文法

| 名        | データタイプ  | とりうる値                   |
| -------- | ------- | ----------------------- |
| fontSize | integer | フォントサイズ (ポイント単位) 最小値: 0 |

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)


---
## フォントカラー

文字の色を指定します。

> オブジェクトの [境界線スタイル](properties_backgrounandborder.md#境界線スタイル) に "標準" または "ドット" を選択している場合、このプロパティはその境界線の色も指定します。

カラーは次の方法で指定できます:

* カラーネーム - 例: "red"
* 16進数値 - 例: "#ff0000"
* RGB値 - 例: "rgb(255,0,0)"

このプロパティはOBJECT SET RGB COLORS** コマンドによって設定することができます。 </p> 




#### JSON 文法

| 名      | データタイプ | とりうる値                                |
| ------ | ------ | ------------------------------------ |
| stroke | string | 任意の css値; "transparent"; "automatic" |




#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)





---



## フォントカラー式

`セレクションおよびコレクション/エンティティセレクション型のリストボックス`

リストボックスの各行にカスタマイズしたフォントカラーを適用するために使用します。 RGBカラーを使用しなければなりません。 この点に関する詳細は 4Dランゲージリファレンスマニュアルの [OBJECT SET RGB COLORS](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-RGB-COLORS.301-4505456.ja.html) コマンドの説明を参照してください。

式または変数 (配列を除く) を入力します。 表示される行ごとに式や変数は評価されます。 ここでは [SET RGB COLORS](https://doc.4d.com/4Dv18/4D/18/SET-RGB-COLORS.302-4504454.ja.html) テーマの定数を使用することができます。

また、このプロパティは `LISTBOX SET PROPERTY` コマンドに `lk font color expression` 定数を指定して設定することもできます。


> このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。

以下の例は変数名を使用しています。**フォントカラー式** に *CompanyColor* を入力し、フォームメソッドに以下のコードを書きます:



```4d
CompanyColor:=Choose([Companies]ID;Background color;Light shadow color;   
Foreground color;Dark shadow color)
```




#### JSON 文法

| 名               | データタイプ | とりうる値    |
| --------------- | ------ | -------- |
| rowStrokeSource | string | フォントカラー式 |




#### 対象オブジェクト

[リストボックス](listbox_overview.md) 



---


## スタイル式

`セレクションおよびコレクション/エンティティセレクション型のリストボックス`

リストボックスの各行にカスタマイズされた文字スタイルを適用するために使用します。

式または変数 (配列を除く) を入力します。 式や変数は、表示行ごと (リストボックスのプロパティの場合) または表示セルごと (リストボックス列のプロパティの場合) に評価されます。 ここでは [Font Styles](https://doc.4d.com/4Dv18/4D/18/Font-Styles.302-4504412.ja.html) テーマの定数を使用することができます。

例: 



```4d
Choose([Companies]ID;Bold;Plain;Italic;Underline)
```


また、このプロパティは `LISTBOX SET PROPERTY` コマンドに `lk font style expression` 定数を指定して設定することもできます。


> このプロパティは [メタ情報式](properties_Text.md#メタ情報式) を使用しても設定することができます。




#### JSON 文法

| 名              | データタイプ | とりうる値                   |
| -------------- | ------ | ----------------------- |
| rowStyleSource | string | 表示される行/セルごとに評価されるスタイル式。 |




#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)








---


## 横揃え

エリア中のテキストの横位置を指定します。



#### JSON 文法

| 名         | データタイプ | とりうる値                                             |
| --------- | ------ | ------------------------------------------------- |
| textAlign | string | "automatic", "right", "center", "justify", "left" |




#### 対象オブジェクト

[グループボックス](groupBox.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [テキストエリア](text.md)




---


## 縦揃え

エリア中のテキストの縦位置を指定します。

**デフォルト** オプション (JSON値: `automatic`) の場合は、各列のデータ型に基づき整列方向が決定されます: 

- ピクチャーを除き、すべて `下` です。
- ピクチャーは `上` です。

このプロパティは、[OBJECT Get vertical alignment](https://doc.4d.com/4Dv18/4D/18/OBJECT-Get-vertical-alignment.301-4505442.ja.html) と [OBJECT SET VERTICAL ALIGNMENT](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-VERTICAL-ALIGNMENT.301-4505430.ja.html) コマンドを使用して設定することもできます。




#### JSON 文法

| 名             | データタイプ | とりうる値                                  |
| ------------- | ------ | -------------------------------------- |
| verticalAlign | string | "automatic", "top", "middle", "bottom" |




#### 対象オブジェクト

[リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー)











---


## メタ情報式

`コレクションまたはエンティティセレクション型リストボックス`

表示される行ごとに評価される式あるいは変数を指定します。 行テキスト属性全体を定義することができます。 **オブジェクト変数**、あるいは **オブジェクトを返す式** を指定する必要があります。 以下のオブジェクトプロパティがサポートされています:

| プロパティ名              | タイプ     | 説明                                                                                                                                                                                                                   |
| ------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stroke              | string  | フォントカラー。 任意の CSSカラー (例: "#FF00FF"), "automatic", "transparent"                                                                                                                                                       |
| fill                | string  | 背景色。 任意の CSSカラー (例: "#F00FFF"), "automatic", "transparent"                                                                                                                                                           |
| fontStyle           | string  | "normal","italic"                                                                                                                                                                                                    |
| fontWeight          | string  | "normal","bold"                                                                                                                                                                                                      |
| textDecoration      | string  | "normal","underline"                                                                                                                                                                                                 |
| unselectable        | boolean | 対応する行が選択不可 (つまりハイライトすることができない状態) であることを指定します。 このオプションが有効化されている場合、入力可能エリアは入力可能ではなくなります (ただし "シングルクリック編集" オプションが有効化されている場合を除く)。 チェックボックスやリストといったコントロール類は引き続き稼働します。 この設定はリストボックスの選択モードが "なし" の場合には無視されます。 デフォルト値: false |
| disabled            | boolean | 対応する行を無効化します。 このオプションが有効化されると、入力可能エリアは入力可能ではなくなります。 テキストや、(チェックボックス、リストなどの) コントロール類は暗くなっているかグレーアウトされます。 デフォルト値: false                                                                                                |
| cell.\<columnName> | オブジェクト  | プロパティを単一のカラムに適用するときに使用します。 \<columnName> には、リストボックスカラムのオブジェクト名を渡します。 **注**: "unselectable" および "disabled" プロパティは行レベルでのみ定義可能です。 "セル" オブジェクトに指定した場合、これらは無視されます。                                                       |




> このプロパティで設定されたスタイルは、プロパティリスト内で他のスタイル設定が式により定義されている場合には無視されます ([スタイル式](#スタイル式)、[フォントカラー式](#フォントカラー式)、[背景色式](#背景色式))。

以下の例題では *Color* プロジェクトメソッドを使用する場合を考えます。 

フォームメソッドには、以下のように書きます:



```4d
// フォームメソッド
Case of
  :(Form event=On Load)
   Form.meta:=New object
End case
```


*Color* メソッドには、以下のコードを書きます:



```4d
// Color メソッド
// 特定の行に対してフォントカラーを、そして特定のカラムに対して背景色を設定します:
C_OBJECT($0)
If(This.ID>5) // ID はコレクションオブジェクト/エンティティの属性です
  Form.meta.stroke:="purple"
  Form.meta.cell:=New object("Column2";New object("fill";"black"))
Else
  Form.meta.stroke:="orange"
End if
$0:=Form.meta
```



> [This](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.ja.html) コマンドも参照してください。





#### JSON 文法

| 名          | データタイプ | とりうる値                     |
| ---------- | ------ | ------------------------- |
| metaSource | string | 表示される行/セルごとに評価されるオブジェクト式。 |




#### 対象オブジェクト

[リストボックス](listbox_overview.md)










---


## マルチスタイル

このプロパティは、選択エリアでスタイルの利用を可能にするかどうかを指定するものです。 プロパティリストでこのオプションがチェックされていると、4D はエリア中の \<SPAN> HTMLタグをスタイル属性として解釈します。 </p> 

<p spaces-before="0">
  デフォルトでは、このオプションは有効化されていません。
</p>





<h4 spaces-before="0">
  JSON 文法
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名
    </th>
    
    <th>
      データタイプ
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      styledText
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false
    </td>
  </tr>
</table>



<h4 spaces-before="0">
  対象オブジェクト
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md#リストボックス列">リストボックス列</a> - <a href="input_overview.md">入力</a>
</p>










<hr />


<h2 spaces-before="0">
  方向
</h2>

<p spaces-before="0">
  Modifies the orientation (rotation) of a text area. Text areas can be rotated by increments of 90°. Each orientation value is applied while keeping the same lower left starting point for the object:
</p>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      Orientation value
    </th>
    
    <th>
      戻り値
    </th>
  </tr>
  
  <tr>
    <td>
      0 (default)
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation1.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      90
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation2.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      180
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation3.png" alt="" />
    </td>
  </tr>
  
  <tr>
    <td>
      270
    </td>
    
    <td>
      <img src="assets/en/FormObjects/orientation4.png" alt="" />
    </td>
  </tr>
</table>

<p spaces-before="0">
  In addition to <a href="text.md">static text areas</a>, <a href="input_overview.md">input</a> text objects can be rotated when they are non-<a href="properties_Entry.md#enterable">enterable</a>. When a rotation property is applied to an input object, the enterable property is removed (if any). This object is then excluded from the entry order. 
</p>






<h4 spaces-before="0">
  JSON 文法
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名
    </th>
    
    <th>
      データタイプ
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      textAngle
    </td>
    
    <td>
      number
    </td>
    
    <td>
      0, 90, 180, 270
    </td>
  </tr>
</table>



<h4 spaces-before="0">
  対象オブジェクト
</h4>

<p spaces-before="0">
  <a href="input_overview.md">Input</a> (non-enterable) - <a href="text.md">Text Area</a>
</p>







<hr />


<h2 spaces-before="0">
  行フォントカラー配列
</h2>

<p spaces-before="0">
  <code>配列型リストボックス</code>
</p>

<p spaces-before="0">
  Allows setting a custom font color to each row of the list box or cell of the column. 
</p>

<p spaces-before="0">
  The name of a Longint array must be used. 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 ここでは <a href="https://doc.4d.com/4Dv18/4D/18/SET-RGB-COLORS.302-4504454.ja.html">SET RGB COLORS</a> テーマの定数を使用することができます。 もし上のレベルで定義されている背景色をそのままセルに継承したい場合には、対応する配列の要素に -255 を渡します。
</p>



<h4 spaces-before="0">
  JSON 文法
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名
    </th>
    
    <th>
      データタイプ
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      rowStrokeSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      The name of a longint array
    </td>
  </tr>
</table>



<h4 spaces-before="0">
  対象オブジェクト
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md">リストボックス</a> - <a href="listbox_overview.md#リストボックス列">リストボックス列</a>
</p>







<hr />


<h2 spaces-before="0">
  行スタイル配列
</h2>

<p spaces-before="0">
  <code>配列型リストボックス</code>
</p>

<p spaces-before="0">
  Allows setting a custom font style to each row of the list box or each cell of the column.
</p>

<p spaces-before="0">
  The name of a Longint array must be used. 配列のそれぞれの要素はリストボックスの行 (あるいは列のセル) に対応します。つまりこの配列は、各列に関連づけられている配列と同じサイズでなければいけません。 To fill the array (using a method), use the constants of the <a href="https://doc.4d.com/4Dv17R6/4D/17-R6/Font-Styles.302-4310343.en.html">Font Styles</a> theme. You can add constants together to combine styles. If you want the cell to inherit the style defined at the higher level, pass the value -255 to the corresponding array element.
</p>




<h4 spaces-before="0">
  JSON 文法
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名
    </th>
    
    <th>
      データタイプ
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      rowStyleSource
    </td>
    
    <td>
      string
    </td>
    
    <td>
      倍長整数型配列の名前
    </td>
  </tr>
</table>



<h4 spaces-before="0">
  対象オブジェクト
</h4>

<p spaces-before="0">
  <a href="listbox_overview.md">リストボックス</a> - <a href="listbox_overview.md#リストボックス列">リストボックス列</a>
</p>





<hr />


<h2 spaces-before="0">
  スタイルタグを全て保存
</h2>

<p spaces-before="0">
  This property is only available for a <a href="#multi-style">Multi-style</a> input area. When this property is enabled, the area will store the style tags with the text, even if no modification has been made. In this case, the tags correspond to the default style. When this property is disabled, only modified style tags are stored.
</p>

<p spaces-before="0">
  For example, here is a text that includes a style modification:
</p>

<p spaces-before="0">
  <img src="assets/en/FormObjects/tagStyle1.png" alt="" />
</p>

<p spaces-before="0">
  When the property is disabled, the area only stores the modification. The stored contents are therefore:
</p>

<pre><code>What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!
</code></pre>

<p spaces-before="0">
  When the property is enabled, the area stores all the formatting information. The first generic tag describes the default style then each variation is the subject of a pair of nested tags. The contents stored in the area are therefore:
</p>

<pre><code>&lt;SPAN STYLE="font-family:'Arial';font-size:9pt;text-align:left;font-weight:normal;font-style:normal;text-decoration:none;color:#000000;background-color:#FFFFFF"&gt;What a &lt;SPAN STYLE="font-size:13.5pt"&gt;beautiful&lt;/SPAN&gt; day!&lt;/SPAN&gt;
</code></pre>



<h4 spaces-before="0">
  JSON 文法
</h4>

<table spaces-before="0" line-breaks-before="2">
  <tr>
    <th>
      名
    </th>
    
    <th>
      データタイプ
    </th>
    
    <th>
      とりうる値
    </th>
  </tr>
  
  <tr>
    <td>
      storeDefaultStyle
    </td>
    
    <td>
      boolean
    </td>
    
    <td>
      true, false (default).
    </td>
  </tr>
</table>



<h4 spaces-before="0">
  対象オブジェクト
</h4>

<p spaces-before="0">
  <a href="input_overview.md">入力</a>
</p>





















