---
id: comboBoxOverview
title: コンボボックス
---

コンボボックスは [ドロップダウンリスト](dropdownList_Overview.md#概要) と似ていますが、キーボードから入力されたテキストを受けいれる点と、二つの追加オプションがついている点が異なります。

![](assets/en/FormObjects/combo_box.png)

基本的にコンボボックスは入力エリアと同じように取り扱い、オブジェクト、配列、または選択リストを一連のデフォルト値として使用します。

## コンボボックスの操作

入力エリアへの入力内容は、その他の入力フォームオブジェクトと同様に [`On Data Change`](Events/onDataChange.md) イベントを使用して管理します。

コンボボックスの初期化方法は、[ドロップダウンリスト](dropdownList_Overview.md#overview) とまったく同じで、オブジェクト、配列、または選択リストを使用できます。

### オブジェクトの使用

コンボボックスのデータソースとして、[コレクション](Concepts/dt_collection) を内包した [オブジェクト](Concepts/dt_object.md) を使用できます。 このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | タイプ                | 説明                                                                                                                                                                                |
| -------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `values`       | コレクション             | 必須 - スカラー値のコレクション。 すべての同じ型の値でなくてはなりません。 サポートされている型:<li>文字列</li><li>数値</li><li>日付</li><li>時間</li>空、または未定義の場合、コンボボックスは空になります |
| `currentValue` | same as Collection | ユーザーによる入力値                                                                                                                                                                        |

オブジェクトにその他のプロパティが含まれている場合、それらは無視されます。

ユーザーによってコンボボックスに入力されたテキストは、オブジェクトの `currentValue` プロパティが受け取ります。

### 配列の使用

Please refer to **Using an array** in the [drop-down list page](dropdownList_Overview.md#using-an-array) for information about how to initialize the array.

When the user enters text into the combo box, the 0th element of the array gets the entered text.

### 選択リストの使用

If you want to use a combo box to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the form object's data source. これにより列挙型のフィールド/変数を容易に管理できるようになります。
> 階層リストの場合、第一階層の値のみが表示・選択できます。

To associate a combo box with a field or variable, you can just enter the name of the field or variable directly in the [Variable or Expression](properties_Object.md#variable-or-expression) of the form object in the Property List.

When the form is executed, 4D automatically manages the combo box during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the combo box when the form is displayed:

Please refer to **Using a choice** in the [drop-down list page](dropdownList_Overview.md#using-a-choice-list) for more information.


## オプション

Combo box type objects accept two specific options:

- [Automatic insertion](properties_DataSource.md#automatic-insertion): enables automatically adding a value to the data source when a user enters a value that is not found in the list associated with the combo box.
- [除外リスト](properties_RangeOfValues.md#除外リスト) (除外される値のリスト): 除外される値のリストを関連付けることができます。 ユーザーがこのリストに含まれる値を入力したとき、その入力は自動的に却下され、エラーメッセージが表示されます。
> [指定リスト](properties_RangeOfValues.md#指定リスト) はコンボボックスには割り当てることはできません。 In an interface, if an object must propose a finite list of required values, then you must use a [drop-down list](dropdownList_Overview.md#overview) object.

## プロパティ一覧
[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  