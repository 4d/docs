---
id: dropdownListOverview
title: ドロップダウンリスト
---

ドロップダウンリストは、ユーザーがリストから選択をおこなえるようにするためのフォームオブジェクトです。 ドロップダウンリストに表示される項目は、オブジェクト、配列、選択リスト、または標準アクションを用いて管理します。

macOS においては、ドロップダウンリストは "ポップアップメニュー" とも呼ばれます。 どちらの名前も同じタイプのオブジェクトを指します。 次の例に示すように、ドロップダウンリストの外観はプラットフォームによって若干異なります:

![](assets/en/FormObjects/popupDropdown_appearance.png)


## ドロップダウンリストの種類

それぞれに特有の機能を持つ、複数タイプのドロップダウンリストを作成することができます。 タイプを定義するには、プロパティリストで適切な **式の型** と **データタイプ** の値を選択するか、それらに相当する JSON を指定します。

| タイプ           | 機能                   | 式の型/式タイプ | データタイプ                        | JSON 定義                                                                                                                                                          |
| ------------- | -------------------- | -------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| オブジェクト        | コレクションに基づく           | オブジェクト   | Numeric, Text, Date, または Time | `dataSourceTypeHint: object` + `numberFormat: <format>` または `textFormat: <format>` または `dateFormat: <format>` または `timeFormat: <format>` |
| 配列            | 配列に基づく               | 配列       | Numeric, Text, Date, または Time | `dataSourceTypeHint: arrayNumber` または `arrayText` または `arrayDate` または `arrayTime`                                                                                |
| 選択リスト (値を保存)  | 選択リストに基づく (標準)       | リスト      | 選択された項目値                      | `dataSourceTypeHint: text` + `saveAs: value`                                                                                                                     |
| 選択リスト (参照を保存) | 選択リストに基づく (項目の位置を保存) | リスト      | 選択された項目参照                     | `dataSourceTypeHint: integer` + `saveAs: reference`                                                                                                              |
| 階層型選択リスト      | 階層型の表示が可能            | リスト      | リスト参照                         | `dataSourceTypeHint: integer`                                                                                                                                    |
| 標準アクション       | アクションにより自動生成         | *any*    | *リスト参照以外*                     | いずれかの定義 + `action: <action>` (他エリアに適用されるアクションの場合は + `focusable: false`)                                                                                    |



## ドロップダウンリストの使い方

### オブジェクトの使用

ドロップダウンリストのデータソースとして、[コレクション](Concepts/dt_collection) を内包した [オブジェクト](Concepts/dt_object.md) を使用できます。 このオブジェクトには、次のプロパティが格納されていなくてはなりません:

| プロパティ          | タイプ             | 説明                                                                                                                                                                                   |
| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `values`       | Collection      | 必須 - スカラー値のコレクション。 すべての同じ型の値でなくてはなりません。 サポートされている型:<li>文字列</li><li>数値</li><li>日付</li><li>時間</li>空、または未定義の場合、ドロップダウンリストは空になります |
| `index`        | number          | 選択項目のインデックス (0 と `collection.length-1` の間の値)。 -1 に設定すると、プレースホルダー文字列として currentValue が表示されます。                                                                                         |
| `currentValue` | Collection要素と同じ | 選択中の項目 (コードにより設定した場合はプレースホルダーとして使用される)                                                                                                                                               |

オブジェクトにその他のプロパティが含まれている場合、それらは無視されます。

ドロップダウンリストに関連付けるオブジェクトを初期化するには、次の方法があります:

* プロパティリストの[データソース](properties_DataSource.md)テーマにおいて、選択リストの項目で "\<Static List>" を選び、デフォルト値のリストを入力します。 これらのデフォルト値は、オブジェクトへと自動的にロードされます。

* オブジェクトとそのプロパティを作成するコードを実行します。 たとえば、ドロップダウンリストに紐づいた [変数](properties_Object.md#変数あるいは式) が "myList" であれば、[On Load](Events/onLoad.md) フォームイベントに次のように書けます:

```4d
// Form.myDrop はフォームオブジェクトのデータソースです

Form.myDrop:=New object
Form.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")
Form.myDrop.index:=-1  // currentValue をプレースホルダーに使います
Form.myDrop.currentValue:="フルーツを選択してください" 
```

ドロップダウンリストには、プレースホルダー文字列が表示されます:

![](assets/en/FormObjects/fruits2.png)

ユーザーによって項目が選択されると:

![](assets/en/FormObjects/fruits3.png)

```4d
Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]
Form.myDrop.currentValue //"oranges"
Form.myDrop.index //3
```



### 配列の使用

[配列](Concepts/arrays.md) とは、メモリー内の値のリストのことで、配列の名前によって参照されます。 ドロップダウンリストをクリックすると、その配列を値のリストとして表示します。

ドロップダウンリストに関連付ける配列を初期化するには、次の方法があります:

* プロパティリストの[データソース](properties_DataSource.md)テーマにおいて、選択リストの項目で "\<Static List>" を選び、デフォルト値のリストを入力します。 これらのデフォルト値は、配列へと自動的にロードされます。 オブジェクトに関連付けた変数名を使用して、この配列を参照することができます。

* オブジェクトが表示される前に、値を配列要素に代入するコードを実行します。 たとえば:

```4d
  ARRAY TEXT(aCities;6) 
  aCities{1}:="Philadelphia" 
  aCities{2}:="Pittsburg" 
  aCities{3}:="Grand Blanc" 
  aCities{4}:="Bad Axe" 
  aCities{5}:="Frostbite Falls" 
  aCities{6}:="Green Bay" 
```

In this case, the name of the [variable](properties_Object.md#variable-or-expression) associated with the object in the form must be `aCities`. このコードをフォームメソッド内に置き、`On Load` フォームイベント発生時に実行されるようにします。

*  Before the object is displayed, load the values of a list into the array using the [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) command. たとえば:

```4d
   LIST TO ARRAY("Cities";aCities)
```

In this case also, the name of the [variable](properties_Object.md#variable-or-expression) associated with the object in the form must be `aCities`. このコードは、前述した代入命令文の代わりに実行できます。

ユーザーがおこなった選択内容をフィールドに保存する必要があれば、レコードの登録後に代入命令を実行します。 たとえば、次のような Case文のコードを作成します:

```4d
  Case of
    :(Form event=On Load)
       LIST TO ARRAY("Cities";aCities)
       If(Record number([People])<0) // 新規レコードの場合
          aCities:=3 // デフォルトの値を表示します
       Else // 既存レコードの場合には、保存された値を表示します
          aCities:=Find in array(aCities;City)
       End if
    :(Form event=On Clicked) // ユーザーが選択を変更した場合
       City:=aCities{aCities} // フィールドに新しい値を代入
    :(Form event=On Validate)
       City:=aCities{aCities}
    :(Form event=On Unload)
       CLEAR VARIABLE(aCities)
 End case
```

You must select each event that you test for in your Case statement. 配列には常に有限数の項目が納められます。 項目リストは動的であり、メソッドを用いて変更可能です。 配列の項目は変更・並び替え・追加することができます。


### 選択リストの使用

If you want to use a drop-down list to manage the values of an input area (listed field or variable), 4D lets you reference the field or variable directly as the drop-down list's [data source](properties_Object.md#variable-or-expression). これにより列挙型のフィールド/変数を容易に管理できるようになります。

For example, in the case of a "Color" field that can only contain the values "White", "Blue", "Green" or "Red", it is possible to create a list containing these values and associate it with a drop-down list that references the 4D "Color" field. こうすることによって、あとは 4D が自動的にカレント値の入力や表示に関して管理してくれます。
> 階層リストの場合、第一階層の値のみが表示・選択できます。 If you want to display hierarchical contents, you need to use a [hierarchical choice list](#using-a-hierarchical-choice-list).

To associate a drop-down list with a field or variable, enter the name of the field or variable directly as the [Variable or Expression](properties_Object.md#variable-or-expression) field of the drop-down list in the Property List.
> It is not possible to use this feature with an object or an array drop-down list. If you enter a field name in the "Variable or Expression" area, then you must use a choice list.

When the form is executed, 4D automatically manages the drop-down list during input or display: when a user chooses a value, it is saved in the field; this field value is shown in the drop-down list when the form is displayed:

![](assets/en/FormObjects/popupDropdown_choiceList.png)


#### Selected item value or Selected item reference

When you have associated a drop-down list with a choice list and with a field or a variable, you can set the [**Data Type**](properties_DataSource.md#data-type) property to **Selected item value** or **Selected item reference**. このオプションにより、保存するデータのサイズを最適化できるようになります。

### 階層型選択リストの使用

A hierarchical drop-down list has a sublist associated with each item in the list. Here is an example of a hierarchical drop-down list:

![](assets/en/FormObjects/popupDropdown_hierar.png)

> In forms, hierarchical drop-down lists are limited to two levels.

You can assign the hierarchical choice list to the drop-down list object using the [Choice List](properties_DataSource.md#choice-list) field of the Property List.

You manage hierarchical drop-down lists using the **Hierarchical Lists** commands of the 4D Language. All commands that support the `(*; "name")` syntax can be used with hierarchical  drop-down lists, e.g. [`List item parent`](https://doc.4d.com/4dv19/help/command/en/page633.html).


### 標準アクションの使用

You can build automatically a drop-down list using a [standard action](properties_Action.md#standard-action). This feature is supported in the following contexts:

- Use of the `gotoPage` standard action. In this case, 4D will automatically display the [page of the form](FormEditor/forms.md#form-pages) that corresponds to the number of the item that is selected. For example, if the user selects the 3rd item, 4D will display the third page of the current form (if it exists). At runtime, by default the drop-down list displays the page numbers (1, 2...).

- Use of a standard action that displays a sublist of items, for example `backgroundColor`. This feature requires that:
    - a styled text area ([4D Write Pro area](writeProArea_overview.md) or [input](input_overview.md) with [multistyle](properties_Text.md#multi-style) property) is present in the form as the standard action target.
    - the [focusable](properties_Entry.md#focusable) property is not set to the drop-down list. At runtime the drop-down list will display an automatic list of values, e.g. background colors. You can override this automatic list by assigning in addition a choice list in which each item has been assigned a custom standard action.

> This feature cannot be used with a hierarchical drop-down list.

## プロパティ一覧

[Alpha Format](properties_Display.md#alpha-format) - [Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Choice List](properties_DataSource.md#choice-list) - [Class](properties_Object.md#css-class) - [Data Type (expression type)](properties_DataSource.md#data-type-expression-type) - [Data Type (list)](properties_DataSource.md#data-type-list) - [Date Format](properties_Display.md#date-format) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Standard action](properties_Action.md#standard-action) - [Save value](properties_Object.md#save-value) - [Time Format](properties_Display.md#time-format) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)  