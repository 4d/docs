---
id: propertiesDataSource
title: データソース
---

---
## 自動挿入

このオプションがチェックされていると、オブジェクトに関連付けられた選択リストにない値をユーザーが入力した場合に、その値が自動的にメモリー内のリストに追加されます。 フォームオブジェクトに選択リストを関連付けるには次の方法があります:
- [選択リスト](properties_DataSource.md#選択リスト) JSON プロパティを使用する
- [OBJECT SET LIST BY NAME](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-LIST-BY-NAME.301-4505451.ja.html) または [OBJECT SET LIST BY REFERENCE](https://doc.4d.com/4Dv18/4D/18/OBJECT-SET-LIST-BY-REFERENCE.301-4505461.ja.html) コマンドを使用する
- フォームエディターでプロパティリストを使用する

たとえば、"France, Germany, Italy" という値を含む選択リストが "Countries" というコンボボックスに関連付けられていた場合を考えます。**自動挿入** のオプションがチェックをされていて、ユーザーが "Spain" という値を入力すると、"Spain" という値が自動的にメモリー内のリストに追加されます:

![](assets/en/FormObjects/comboBox_AutomaticInsertion_example.png)

当然のことながら、オブジェクトに [除外リスト](properties_RangeOfValues.md#除外リスト) が設定されていた場合には、そのリストに含まれる値を入力することはできません。
> デザインモードで定義されたリストが関連付けられている場合、自動挿入によって、その元のリストが変更されることはありません。

**自動挿入** のオプションがチェックされていない場合、入力された値はオブジェクトの中には保存されますが、メモリー内のリストには入力されません。

#### JSON 文法

| 名                  | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| automaticInsertion | boolean | true, false |

#### 対象オブジェクト

[コンボボックス](comboBox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列)




---
## 選択リスト

選択リストをフォームオブジェクトに関連づけます。 指定できるのは選択リスト名 (リストの参照) またはデフォルト値のコレクションです。

#### JSON 文法

| 名          | データタイプ     | とりうる値                |
| ---------- | ---------- | -------------------- |
| choiceList | リスト、コレクション | 選択可能な値のリスト           |
| list       | リスト、コレクション | 選択可能な値のリスト (階層リストのみ) |


#### 対象オブジェクト

[Drop-down List](dropdownList_Overview.md) - [Combo Box](comboBox_overview.md) - [Hierarchical List](list_overview.md#overview) - [List Box Column](listbox_overview.md#list-box-columns)



---
## 選択リスト (静的リスト)

タブコントロールオブジェクトのラベルとして使用する静的な値のリスト。

#### JSON 文法

| 名      | データタイプ     | とりうる値                  |
| ------ | ---------- | ---------------------- |
| labels | リスト、コレクション | タブコントロールラベルに使用する値のリスト。 |

#### 対象オブジェクト

[タブコントロール](tabControl.md)


---
## カレントの項目
`コレクションまたはエンティティセレクションリストボックス`

ユーザーによって選択されたコレクション要素/エンティティが割り当てられる変数あるいは式を指定します。 オブジェクト変数あるいはオブジェクトを受け入れる割り当て可能な式を使用する必要があります。 ユーザーが何も選択しなかった場合、あるいはスカラー値のコレクションを使用した場合、Null 値が割り当てられます。
> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名                 | データタイプ | とりうる値     |
| ----------------- | ------ | --------- |
| currentItemSource | string | オブジェクト型の式 |

#### 対象オブジェクト
[リストボックス ](listbox_overview.md#overview)




---

## カレントの項目の位置
`コレクションまたはエンティティセレクションリストボックス`

ユーザーによって選択されたコレクション要素/エンティティの位置を表す倍長整数が割り当てられる変数あるいは式を指定します。

*   要素/エンティティが選択されていない場合、変数あるいは式は 0 を受け取ります。
*   単一の要素/エンティティが選択されている場合、変数あるいは式はその位置を受け取ります。
*   複数の要素/エンティティが選択されている場合、変数あるいは式は最後に選択された要素/エンティティの位置を受け取ります。
> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名                         | データタイプ | とりうる値 |
| ------------------------- | ------ | ----- |
| currentItemPositionSource | string | 数値型の式 |

#### 対象オブジェクト
[リストボックス ](listbox_overview.md)





---
## データタイプ

[式タイプ](properties_Object.md#式タイプ) を参照ください。

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#list-box-columns)






---

## デフォルト値

配列型リストボックスにおいて、リストボックス列のデフォルト値として使用される値のリストです。 これらの値は自動で、フォームを実行したときにその列に割り当てられた [配列変数](properties_Object.md#変数あるいは式) に代入されます。 Using the language, you can manage the object by referring to this array.

> Do not make confusion between this property and the "[default value](properties_RangeOfValues.md#default-list-of-values)" property that allows to define a field value in new records.

You must enter a list of values. In the Form editor, a specific dialog box allows you to enter values separated by carriage returns:

![](assets/en/FormObjects/defaultValues.png)

> You can also define a [choice list](properties_DataSource.md#choice-list) with the list box column. However, a choice list will be used as list of selectable values for each column row, whereas the default list fill all column rows.

#### JSON 文法

| 名      | データタイプ | とりうる値                                                            |
| ------ | ------ | ---------------------------------------------------------------- |
| values | コレクション | A collection of default values (strings), ex: "a", "b", "c", "d" |

#### 対象オブジェクト

[List Box Column (array type only)](listbox_overview.md#list-box-columns)




---
## 式

This description is specific to [selection](listbox_overview.md#selection-list-boxes) and [collection](listbox_overview.md#collection-or-entity-selection-list-boxes) type list box columns. See also **[Variable or Expression](properties_Object.md#variable-or-expression)** section.

A 4D expression to be associated with a column. You can enter:

- A **simple variable** (in this case, it must be explicitly declared for compilation). You can use any type of variable except BLOBs and arrays. The value of the variable will be generally calculated in the `On Display Detail` event.

- A **field** using the standard [Table]Field syntax ([selection type list box](listbox_overview.md#selection-list-boxes) only), for example: `[Employees]LastName`. The following types of fields can be used:
    *   String
    *   Numeric
    *   日付
    *   時間
    *   ピクチャー
    *   Boolean  
      You can use fields from the Master Table or from other tables.

-   A **4D expression** (simple expression, formula or 4D method). The expression must return a value. The value will be evaluated in the `On Display Detail` and `On Data Change` events. The result of the expression will be automatically displayed when you switch to Application mode. The expression will be evaluated for each record of the selection (current or named) of the Master Table (for selection type list boxes), each element of the collection (for collection type list boxes) or each entity of the selection (for entity selection list boxes). If it is empty, the column will not display any results.   
  The following expression types are supported:
    *   String
    *   Numeric
    *   日付
    *   ピクチャー
    *   ブール

    For collection/entity selection list boxes, Null or unsupported types are displayed as empty strings.  
When using collections or entity selections, you will usually declare the element property or entity attribute associated to a column within an expression containing [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html). `This` is a dedicated 4D command that returns a reference to the currently processed element. For example, you can use **This.\<propertyPath>** where **\<propertyPath>** is the path of a property in the collection or an entity attribute path to access the current value of each element/entity.   
If you use a collection of scalar values, 4D will create an object for each collection element with a single property (named "value"), filled with the element value. In this case, you will use **This.value** as expression.

    If a [non-assignable expression](Concepts/quick-tour.md#expressions) is used (e.g. `[Person]FirstName+" "+[Person]LastName`), the column is never enterable even if the [Enterable](properties_Entry.md#enterable) property is enabled.

If a field, a variable, or an assignable expression (*e.g. Person.lastName*) is used, the column can be enterable or not depending on the [Enterable](properties_Entry.md#enterable) property.


#### JSON 文法

| 名          | データタイプ | とりうる値                                                                   |
| ---------- | ------ | ----------------------------------------------------------------------- |
| dataSource | string | A 4D variable, field name, or an arbitrary complex language expression. |

#### 対象オブジェクト

[リストボックス列](listbox_overview.md#list-box-columns)




---

## マスターテーブル
`Current selection list boxes`

Specifies the table whose current selection will be used. This table and its current selection will form the reference for the fields associated with the columns of the list box (field references or expressions containing fields). Even if some columns contain fields from other tables, the number of rows displayed will be defined by the master table.

All database tables can be used, regardless of whether the form is related to a table (table form) or not (project form).

#### JSON 文法

| 名     | データタイプ | とりうる値        |
| ----- | ------ | ------------ |
| table | number | Table number |

#### 対象オブジェクト
[リストボックス](listbox_overview.md#overview)



---

## 関連付け


This property is available in the following conditions:

- a [choice list](#choice-list) is associated with the object
- for [inputs](input_overview.md) and [list box columns](listbox_overview.md#list-box-columns), a [required list](properties_RangeOfValues.md#required-list) is also defined for the object (both options should use usually the same list), so that only values from the list can be entered by the user.

This property specifies, in the context of a field or variable associated with a list of values, the type of contents to save:

- **Save as Value** (default option): the value of the item chosen in the list by the user is saved directly. For example, if the user chooses the value "Blue", then this value is saved in the field.
- **Save as Reference**: the reference of the choice list item is saved in the object. This reference is the numeric value associated with each item either through the *itemRef* parameter of the `APPEND TO LIST` or `SET LIST ITEM` commands, or in the lists editor.

This option lets you optimize memory usage: storing numeric values in fields uses less space than storing strings. It also makes it easier to translate applications: you just create multiple lists in different languages but with the same item references, then load the list based on the language of the application.

Using this property requires compliance with the following principles:

- To be able to store the reference, the field or variable data source must be of the Number type (regardless of the type of value displayed in the list).
- Valid and unique references must be associated with list items.
- If you use this property for a [drop-down list](dropdownList_Overview.md), it must be associated with a field.


#### JSON 文法

| 名      | データタイプ | とりうる値                |
| ------ | ------ | -------------------- |
| saveAs | string | "value", "reference" |

#### 対象オブジェクト
[Drop-down List](dropdownList_Overview.md) - [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)



---
## 選択された項目
`コレクションまたはエンティティセレクションリストボックス`

Specifies a variable or expression that will be assigned the elements or entities selected by the user.

*   for a collection list box, you must use a collection variable or an assignable expression that accepts collections,
*   for an entity selection list box, an entity selection object is built. オブジェクト変数あるいはオブジェクトを受け入れる割り当て可能な式を使用する必要があります。
> このプロパティは「読み取り専用」であり、リストボックスにおけるユーザーアクションに基づいて自動的に更新されます。 この値を編集してリストボックスの選択状態を変更することはできません。

#### JSON 文法

| 名                   | データタイプ | とりうる値                 |
| ------------------- | ------ | --------------------- |
| selectedItemsSource | string | Collection expression |

#### 対象オブジェクト
[リストボックス ](listbox_overview.md#overview)


---
## 命名セレクション
`Named selection list boxes`

Specifies the named selection to be used. You must enter the name of a valid named selection. It can be a process or interprocess named selection. The contents of the list box will be based on this selection. The named selection chosen must exist and be valid at the time the list box is displayed, otherwise the list box will be displayed blank.

> Named selections are ordered lists of records. They are used to keep the order and current record of a selection in memory. For more information, refer to **Named Selections** section in the *4D Language Reference manual*.

#### JSON 文法

| 名              | データタイプ | とりうる値                |
| -------------- | ------ | -------------------- |
| namedSelection | string | Named selection name |

#### 対象オブジェクト
[リストボックス](listbox_overview.md#overview)
