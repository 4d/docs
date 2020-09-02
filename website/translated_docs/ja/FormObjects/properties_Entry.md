---
id: propertiesEntry
title: 入力
---

---
## 自動スペルチェック

4D にはカスタマイズ可能なスペルチェック機能がビルトインされています。 スペルチェックはテキスト型の [入力](input_overview.md) オブジェクト、そして [4D Write Pro](writeProArea_overview.md)ドキュメントに対して実行可能です。

自動スペルチェックプロパティは、各オブジェクトのスペルチェックを有効にします この場合、スペルチェックはタイプ中に自動的に実行されます。 チェックしたいオブジェクトそれぞれに対して `SPELL CHECKING` 4Dランゲージコマンドを呼び出して実行することもできます。


#### JSON 文法

| 名          | データタイプ  | とりうる値       |
| ---------- | ------- | ----------- |
| spellcheck | boolean | true, false |


#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [入力](input_overview.md)


---
## コンテキストメニュー

このプロパティを有効にすると、フォームの実行中にオブジェクトに対して標準のコンテキストメニューが使用できるようになります。

ピクチャー型の [入力](input_overview.md) オブジェクトの場合、標準の編集コマンド (カット、コピー、ペースト、そしてクリア) に加え、ファイルからピクチャーを読み込むために使用することのできる **読み込み...** コマンド、ピクチャーをディスクに保存するのに使用する **別名で保存...** コマンドなどがあります。 また、メニューを使用してピクチャーの表示フォーマットを変更することもできます。**トランケート (中央合わせなし)**、**スケーリング** そして **スケーリング (中央合わせ/プロポーショナル)** から選択できます。 このメニューを使用した [表示フォーマット](properties_Display#ピクチャーフォーマット) の変更は一時的なものであり、レコードには保存されません。

[マルチスタイル](properties_Text.md#マルチスタイル) オプションがチェックされているテキスト型の [入力](input_overview.md) オブジェクトの場合、標準の編集コマンド以外に以下の様なコマンドを使用することができます:
- **フォント...**: フォントシステムダイアログボックスを表示させます。
- **最近使用したフォント**: セッション中に最近使用されたフォント名を表示します。 リストには最大で 10フォントまで表示されます (それ以上は古いものから置き換えられていきます)。 デフォルトではリストは空になっているので、このオプションは表示されません。 このリストは `SET RECENT FONTS` と `FONT LIST` コマンドを使用して管理することができます。
- スタイルの変更をおこなうためのコマンド: スタイル、サイズ、カラー、背景色。 このポップアップメニューを使用してユーザーがスタイル属性を編集する と、4D は `On After Edit` フォームイベントを生成します。

[Webエリア](webArea_overview.md) の場合、メニューの内容はプラットフォームの描画エンジンにより設定されます。 コンテキストメニューへのアクセスは [`WA SET PREFERENCE`](https://doc.4d.com/4Dv18/4D/18/WA-SET-PREFERENCE.301-4504849.ja.html) コマンドを使用して制御できます。


#### JSON 文法

| 名           | データタイプ | とりうる値                           |
| ----------- | ------ | ------------------------------- |
| contextMenu | string | "automatic" (省略時のデフォルト), "none" |

#### 対象オブジェクト

[入力](input_overview.md) - [Webエリア](webArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md)






---
## 入力可

入力可属性は、ユーザーがオブジェクトに値を入力できるかどうかを指定します。

すべてのアクティブオブジェクトはデフォルトで入力可です。 フォーム上の特定のフィールドやオブジェクトを入力不可にしたい場合、入力可チェックボックスの選択を解除します。 入力不可のオブジェクトはデータの表示のみをおこないます。 当該フィールド名や変数名を使用するメソッドによってデータを制御します。 入力不可オブジェクトでも `On Clicked`, `On Double Clicked`, `On Drag Over`, `On Drop`, `On Getting Focus` そして `On Losing Focus` フォームイベントは使用できます。 これらによって、カスタムコンテキストメニューの管理が容易になり、入力不可変数をドラッグ＆ドロップしたり選択したりできるインターフェースをデザインすることができます。

このプロパティを無効にした場合、リストによってリストボックス列に関連付けられたポップアップメニューも使用できなくなります。


#### JSON 文法

| 名         | データタイプ  | とりうる値       |
| --------- | ------- | ----------- |
| enterable | boolean | true, false |

#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [進捗インジケーター](progressIndicator.md) - [ルーラー](ruler.md) - [ステッパー](stepper.md)


---
## 入力フィルター

**日本語利用時の注意点**: 入力フィルターは日本語IME と互換性がありません。入力文字種の制限及び#を使用した入力文字数の制限もできません。たとえば半角数字のみを 2文字だけ入力を許可する目的で、入力フィルターに&9##と指定しても、IME経由での全角数字やその他日本語文字の入力を防ぐことはできませんし、任意の数の文字が入力できてしまいます。アプリケーション仕様としてこのような制御が必要な場合は 4Dコマンドを使用する必要があります。<br /><br /> 入力フィルターを使用するとデータ入力中にユーザーがタイプできる文字を制御できます。 [指定リスト](properties_RangeOfValues.md#指定リスト) とは異なり、入力フィルターは文字ごとに処理がおこなわれます。 たとえば、パーツ番号が常に 2つの文字とそれに続く 3つの数字で構成されるとき、入力フィルターを通してそのパターンを強制することができます。 さらに特定の文字や数字のみを使用するよう制御することもできます。

入力フィルターはデータ入力時にのみ動作します。 オブジェクトの選択をユーザーが解除した後のデータ表示には効果がありません。 通常は、入力フィルターを [表示フォーマット](properties_Display.md) と一緒に使用します。 フィルターはデータ入力を制約し、表示フォーマットはデータ入力後の値の表示を制御します。

データ入力中、タイプされるたびに入力フィルターは文字を評価します。 ユーザーが無効な入力をすると (たとえば文字の代わりに数字)、4D はその入力を受け付けません。 ユーザーが有効な入力をおこなうまで値は変更されません。

入力フィルターに表示フォーマットを併用することで、形式的な文字をユーザーが入力しなくてすむようにできます。 たとえば、アメリカ合衆国の電話番号は 3桁のエリアコードに、3桁と4桁に分割される 7桁の番号が続きます。 エリアコードをカッコでくくり、電話番号の3つ目の数字の後にダッシュを表示するような表示フォーマットを利用することができます。 このようなフォーマットが指定されている場合、カッコやダッシュをユーザーが入力する必要はありません。

### 入力フィルターの定義

ほとんどの場合、あらかじめ用意されている 4D の [ビルトインフィルター](#デフォルト入力フィルター) を使用することができます。しかし、カスタマイズされたフィルターを作成することも可能です:

- 入力フィルターコードを直接入力することができます。
- ツールボックスのフィルターエディターで入力フィルターを作成し、その名前を指定することもできます。 開発者が作成したカスタムフィルターはリストの先頭に表示されます。

入力フィルターの作成に関する詳細は [フィルターとフォーマットのコード](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.ja.html) を参照ください。


### デフォルト入力フィルター

入力フィルタードロップダウンリストから選択できる入力フィルターの説明は以下の表の通りです:

| 入力フィルター              | 説明                                                                   |
| -------------------- | -------------------------------------------------------------------- |
| ~A                   | すべての文字が入力可能、ただし大文字に変換されます。                                           |
| &9                   | 数字のみ入力可能。                                                            |
| &A                   | 大文字の文字だけが入力可能。                                                       |
| &a                   | 文字だけが入力可能 (大文字と小文字)。                                                 |
| &@                   | 数字と文字が入力可能。 特殊記号を除きます。                                               |
| ~a##                 | 2桁の任意の文字が入力可能、大文字に変換されます。 (アメリカ合衆国の州名などに使われます)                       |
| !0&9##/##/##         | 標準の日付入力フォーマット。 入力領域に 0 を表示します。 任意の数値が入力可能。                           |
| !0&9##年##月##日        | カスタム日付入力フォーマット。 入力領域に 0 を表示します。 任意の数値が入力可能。 年月日が 2桁ずつ入力可能。           |
| !0&9##:##            | 時間入力フォーマット。 時と分だけが入力可能。 入力領域に 0 を表示します。 任意の4桁の数字が入力可能。               |
| !0&9##時##分           | 時間入力フォーマット。 入力領域に 0 を表示します。 時間と分数を 2桁ずつ入力可能。                         |
| !0&9##時##分##秒        | 時間入力フォーマット。 入力領域に 0 を表示します。 時間と分数、秒数を 2桁ずつ入力可能。                      |
| !0&9###-####         | ローカルな郵便番号フォーマット。 入力領域に 0 を表示します。 任意の数値が入力可能。 (3桁の数字と 4桁の数字)          |
| !_&9(###) !0###-#### | 長距離電話番号フォーマット。 先頭の 3桁の入力領域はカッコで囲み (空の場合はアンダースコアを表示し)、残りの入力領域に 0 を表示。 |
| !0&9###-###-###      | 長距離電話番号フォーマット。 入力領域に 0 を表示します。 任意の数値が入力可能。 3桁と 3桁と 4桁の数字をハイフンで区分。    |
| !0&9###-##-####      | アメリカ合衆国の社会保障番号フォーマット。 入力領域に 0 を表示します。 任意の数値が入力可能。                    |
| ~"A-Z;0-9; ;,;.;-"   | 大文字の文字と句読点。 大文字の文字、数字、スペース、コンマ、ピリオド、ハイフンだけが入力可能。                     |
| &"a-z;0-9; ;,;.;-"   | 大文字と小文字の文字と句読点。 大小の文字、数字、スペース、コンマ、ピリオド、ハイフンだけが入力可能。                  |
| &"0-9;.;-"           | 数字。 数字、小数点、ハイフン (マイナス記号) だけが入力可能。                                    |


#### JSON 文法

| 名           | データタイプ | とりうる値                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------- |
| entryFilter | string | <li>入力フィルターコード、または <li>入力フィルター名 |


#### 対象オブジェクト

コンボボックス - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)</p> 









---


## フォーカス可

オブジェクトに対し **フォーカス可** プロパティが選択されていると、そのオブジェクトはフォーカスを得ることができ、キーボードなどを使用してアクティブ化することができます。 オブジェクトはフォーカスを得ると、オブジェクトごとあるいは OS ごとに定められた方法でハイライトされます。ただし [フォーカスの四角を隠す](properties_Appearance.md#hide-focus-rectangle) オプションが選択されている場合を除きます。



> [入力可](#入力可) に設定された [入力オブジェクト](input_overview.md) は常にフォーカス可です。 

* ![](assets/en/FormObjects/property_focusable1.png)<br>選択時にフォーカスを表示しているチェックボックス <p> <p>

* ![](assets/en/FormObjects/property_focusable2.png)<br>選択されているが、フォーカスを表示していないチェックボックス

入力できないオブジェクトに **フォーカス可** プロパティが設定されていると、ユーザーはエリアの内容を選択、コピー、およびドラッグ＆ドロップすることができます。




#### JSON 文法

| 名         | データタイプ  | とりうる値       |
| --------- | ------- | ----------- |
| focusable | boolean | true, false |





#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [階層リスト](list_overview.md) - [入力](input_overview.md) - [リストボックス](listbox_overview.md) - [プラグインエリア](pluginArea_overview.md) - [ラジオボタン](radio_overview.md) - [サブフォーム](subform_overview.md)






---


## キーボードレイアウト

このプロパティは [入力](input_overview.md) オブジェクトに対して特定のキーボードレイアウトを関連付けます。 たとえば、国際的なアプリケーションにおいて、フォーム内にギリシャ文字で入力しなければならないフィールドがあった場合、"ギリシャ語" のキーボードレイアウトをこのフィールドに対して関連付けることができます。 これにより、このフィールドがフォーカスを受けている場合にはデータ入力時にキーボード設定が自動的に変わります。

デフォルトでは、オブジェクトはカレントのキーボードレイアウトを使用します。



> このプロパティは、`OBJECT SET KEYBOARD LAYOUT` と `OBJECT Get keyboard layout` コマンドを使用して動的に設定することが可能です。



#### JSON 文法

| 名               | データタイプ | とりうる値                                                            |
| --------------- | ------ | ---------------------------------------------------------------- |
| keyboardDialect | text   | 言語コード (例: "ar-ma", "cs" など) RFC3066, ISO639 および ISO3166 を参照ください。 |





#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [入力](input_overview.md)





---


## 複数行

This property is available for [inputs objects](input_overview.md) containing expressions of the Text type and fields of the Alpha and Text type. It can have three different values: Yes, No, Automatic (default).



#### 自動

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- In multiline inputs, 4D carries out automatic line returns:  
  ![](assets/en/FormObjects/multilineAuto.png)



#### ×

- In single-line inputs, words located at the end of lines are truncated and there are no line returns.
- There are never line returns: the text is always displayed on a single row. If the Alpha or Text field or variable contains carriage returns, the text located after the first carriage return is removed as soon as the area is modified:  
  ![](assets/en/FormObjects/multilineNo.png)



#### ◯

When this value is selected, the property is managed by the [Wordwrap](properties_Display.md#wordwrap) option.




#### JSON 文法

| 名         | データタイプ | とりうる値                                             |
| --------- | ------ | ------------------------------------------------- |
| multiline | text   | "yes", "no", "automatic" (default if not defined) |





#### 対象オブジェクト

[入力](input_overview.md)





---


## プレースホルダー

4D can display placeholder text in the fields of your forms. 

Placeholder text appears as watermark text in a field, supplying a help tip, indication or example for the data to be entered. This text disappears as soon as the user enters a character in the area:

![](assets/en/FormObjects/property_placeholder.png)

The placeholder text is displayed again if the contents of the field is erased. 

A placeholder can be displayed for the following types of data:

- string (text or alpha)
- date and time when the **Blank if null** property is enabled.

You can use an XLIFF reference in the ":xliff:resname" form as a placeholder, for example: 

    :xliff:PH_Lastname
    

You only pass the reference in the "Placeholder" field; it is not possible to combine a reference with static text. 


> You can also set and get the placeholder text by programming using the [OBJECT SET PLACEHOLDER](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-SET-PLACEHOLDER.301-4128243.en.html) and [OBJECT Get placeholder](https://doc.4d.com/4Dv17R5/4D/17-R5/OBJECT-Get-placeholder.301-4128249.en.html) commands.



#### JSON 文法

| 名           | データタイプ | とりうる値                                                                        |
| ----------- | ------ | ---------------------------------------------------------------------------- |
| placeholder | string | Text to be displayed (grayed out) when the object does not contain any value |




#### 対象オブジェクト

[Combo Box](comboBox_overview.md) - [Input](input_overview.md)




#### 参照

[Help tip](properties_Help.md)





---


## 選択を常に表示

This property keeps the selection visible within the object after it has lost the focus. This makes it easier to implement interfaces that allow the text style to be modified (see [Multi-style](properties_Text.md#multi-style)).




#### JSON 文法

| 名             | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| showSelection | boolean | true, false |





#### 対象オブジェクト

[4D Write Pro エリア](writeProArea_overview.md) - [入力](input_overview.md)





---


## ショートカット

This property allows setting special meaning keys (keyboard shortcuts) for [buttons](button_overview.md), [radio buttons](radio_overview.md), and [checkboxes](checkbox_overview.md). They allow the user to use the control using the keyboard instead of having to use the mouse. 

You can configure this option by clicking the [...] button in the Shortcuts property in the Property List.

![](assets/en/FormObjects/property_shortcut.png)


> You can also assign a shortcut to a custom menu command. If there is a conflict between two shortcuts, the active object has priority. For more information about associating shortcuts with menus, refer to [Setting menu properties](https://doc.4d.com/4Dv17R5/4D/17-R5/Setting-menu-properties.300-4163525.en.html).

To view a list of all the shortcuts used in the 4D Design environment, see the [Shortcuts Page](https://doc.4d.com/4Dv17R5/4D/17-R5/Shortcuts-Page.300-4163701.en.html) in the Preferences dialog box.



#### JSON 文法

| 名               | データタイプ  | とりうる値                                                                                                                                                                                                                                                                                       |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| shortcutAccel   | boolean | true, false (Ctrl Windows/Command macOS)                                                                                                                                                                                                                                                    |
| shortcutAlt     | boolean | true, false                                                                                                                                                                                                                                                                                 |
| shortcutCommand | boolean | true, false                                                                                                                                                                                                                                                                                 |
| shortcutControl | boolean | true, false (macOS Control)                                                                                                                                                                                                                                                                 |
| shortcutShift   | boolean | true, false                                                                                                                                                                                                                                                                                 |
|                 |         |                                                                                                                                                                                                                                                                                             |
| shortcutKey     | string  | <li>any character key: "a", "b"...<li>[F1]" -> "[F15]", "[Return]", "[Enter]", "[Backspace]", "[Tab]", "[Esc]", "[Del]", "[Home]", "[End]", "[Help]", "[Page up]", "[Page down]", "[left arrow]", "[right arrow]", "[up arrow]", "[down arrow]" |





#### 対象オブジェクト

[Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Radio Button](radio_overview.md)







---


## シングルクリック編集

Enables direct passage to edit mode in list boxes.

When this option is enabled, list box cells switch to edit mode after a single user click, regardless of whether or not this area of the list box was selected beforehand. Note that this option allows cells to be edited even when the list box [selection mode](properties_ListBox.md#selection-mode) is set to "None".

When this option is not enabled, users must first select the cell row and then click on a cell in order to edit its contents. 



#### JSON 文法

| 名               | データタイプ  | とりうる値       |
| --------------- | ------- | ----------- |
| singleClickEdit | boolean | true, false |




#### 対象オブジェクト

[リストボックス](listbox_overview.md)







