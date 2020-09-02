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

An entry filter controls exactly what the user can type during data entry. Unlike [required lists](properties_RangeOfValues.md#required-list) for example, entry filters operate on a character-by-character basis. For example, if a part number always consists of two letters followed by three digits, you can use an entry filter to restrict the user to that pattern. You can even control the particular letters and numbers.

An entry filter operates only during data entry. It has no effect on data display after the user deselects the object. In general, you use entry filters and [display formats](properties_Display.md) together. The filter constrains data entry and the format ensures proper display of the value after data entry.

During data entry, an entry filter evaluates each character as it is typed. If the user attempts to type an invalid character (a number instead of a letter, for example), 4D simply does not accept it. The null character remains unchanged until the user types a valid character.

Entry filters can also be used to display required formatting characters so that the user need not enter them. For example, an American telephone number consists of a three-digit area code, followed by a seven-digit number that is broken up into two groups of three and four digits, respectively. A display format can be used to enclose the area code in parentheses and display a dash after the third digit of the telephone number. When such a format is used, the user does not need to enter the parentheses or the dashes.

### Defining an entry filter

Most of the time, you can use one of the [built-in filters](#default-entry-filters) of 4D for what you need; however, you can also create and use custom filters:

- you can directly enter a filter definition string
- or you can enter the name of an entry filter created in the Filters editor in the Toolbox. The names of custom filters you create begin with a vertical bar (|).

For information about creating entry filters, see [Filter and format codes](https://doc.4d.com/4Dv18/4D/18/Filter-and-format-codes.300-4575706.en.html).


### Default entry filters

Here is a table that explains each of the entry filter choices in the Entry Filter drop-down list:

| 入力フィルター                         | 説明                                                                                                                                           |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| ~A                              | Allow any letters, but convert to uppercase.                                                                                                 |
| &9                              | Allow only numbers.                                                                                                                          |
| &A                              | Allow only capital letters.                                                                                                                  |
| &a                              | Allow only letters (uppercase and lowercase).                                                                                                |
| &@                              | Allow only alphanumeric characters. No special characters.                                                                                   |
| ~a##                            | State name abbreviation (e.g., CA). Allow any two letters, but convert to uppercase.                                                         |
| !0&9##/##/##                    | Standard date entry format. Display zeros in entry spaces. Allow any numbers.                                                                |
| !0&9 Day: ## Month: ## Year: ## | Custom date entry format. Display zeros in entry spaces. Allow any numbers. Two entries after each word.                                     |
| !0&9##:##                       | Time entry format. Limited to hours and minutes. Display zeros in entry spaces. Allow any four numbers, separated by a colon.                |
| !0&9## Hrs ## Mins ## Secs      | Time entry format. Display zeros in entry spaces. Allow any two numbers before each word.                                                    |
| !0&9Hrs: ## Mins: ## Secs: ##   | Time entry format. Display zeros in entry spaces. Allow any two numbers after each word.                                                     |
| !0&9##-##-##-##                 | Local telephone number format. Display zeros in entry spaces. Allow any number. Three entries, hyphen, four entries.                         |
| !_&9(###)!0###-####             | Long distance telephone number. Display underscores in first three entry spaces, zeros in remainder.                                         |
| !0&9###-###-###                 | Long distance telephone number. Display zeros in entry spaces. Allow any number. Three entries, hyphen, three entries, hyphen, four entries. |
| !0&9###-##-###                  | Social Security number. Display zeros in entry spaces. Allow any numbers.                                                                    |
| ~"A-Z;0-9; ;,;.;-"              | Uppercase letters and punctuation. Allow only capital letters, numbers, spaces, commas, periods, and hyphens.                                |
| &"a-z;0-9; ;,;.;-"              | Upper and lowercase letters and punctuation. Allow lowercase letters, numbers, spaces, commas, periods, and hyphens.                         |
| &"0-9;.;-"                      | Numbers. Allow only numbers, decimal points, and hyphens (minus sign).                                                                       |


#### JSON 文法

| 名           | データタイプ | とりうる値                                                                                                                        |
| ----------- | ------ | ---------------------------------------------------------------------------------------------------------------------------- |
| entryFilter | string | <li>Entry filter code or <li>Entry filter name (filter names start with &#124; ) |


#### 対象オブジェクト

[Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)







---
## フォーカス可

When the **Focusable** property is enabled for an object, the object can have the focus (and can thus be activated by the keyboard for instance). It is outlined by a gray dotted line when it is selected — except when the [Hide focus rectangle](properties_Appearance.md#hide-focus-rectangle) option has also been selected.

> An [input object](input_overview.md) is always focusable if it has the [Enterable](#enterable) property.

* ![](assets/en/FormObjects/property_focusable1.png)<br>Check box shows focus when selected <p> <p>

* ![](assets/en/FormObjects/property_focusable2.png)<br>Check box is selected but cannot show focus|


When the **Focusable** property is selected for a non-enterable object, the user can select, copy or even drag-and-drop the contents of the area.


#### JSON 文法

| 名         | データタイプ  | とりうる値       |
| --------- | ------- | ----------- |
| focusable | boolean | true, false |


#### 対象オブジェクト

[4D Write Pro areas](writeProArea_overview.md) - [Button](button_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Hierarchical List](list_overview.md) - [Input](input_overview.md) - [List Box](listbox_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Radio Button](radio_overview.md) - [Subform](subform_overview.md)




---
## キーボードレイアウト

This property associates a specific keyboard layout to an [input object](input_overview.md). For example, in an international application, if a form contains a field whose contents must be entered in Greek characters, you can associate the "Greek" keyboard layout with this field. This way, during data entry, the keyboard configuration is automatically changed when this field has the focus.

By default, the object uses the current keyboard layout.

> You can also set and get the keyboard dynamically using the `OBJECT SET KEYBOARD LAYOUT` and `OBJECT Get keyboard layout` commands.

#### JSON 文法

| 名               | データタイプ | とりうる値                                                                       |
| --------------- | ------ | --------------------------------------------------------------------------- |
| keyboardDialect | text   | Language code, for example "ar-ma" or "cs". See RFC3066, ISO639 and ISO3166 |


#### 対象オブジェクト

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)



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

[4D Write Pro areas](writeProArea_overview.md) - [Input](input_overview.md)



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







