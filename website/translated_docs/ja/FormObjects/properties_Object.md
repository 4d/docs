---
id: propertiesObject
title: オブジェクト
---

---
## 型

 `必須設定です。`

このプロパティは [アクティブまたはスタティックなフォームオブジェクト](formObjects_overview.md) のタイプを指定します。


#### JSON 文法

| 名    | データタイプ | とりうる値                                                                                                                                                                                                                                                                                                    |
| ---- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type | string | "button", "buttonGrid", "checkbox", "combo", "dropdown", "groupBox", "input", "line", "list", "listbox", "oval", "picture", "pictureButton", "picturePopup", "plugin", "progress", "radio", "rectangle", "ruler", "spinner", "splitter", "stepper", "subform", "tab", "text", "view", "webArea", "write" |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)


---
## オブジェクト名

各アクティブフォームオブジェクトにはオブジェクト名が関連付けられています。 各オブジェクト名はユニークでなければなりません。
> オブジェクト名のサイズ上限は 255バイトです。

4Dランゲージを使用する際、オブジェクト名を使用してアクティブフォームオブジェクトを参照できます (詳細については 4Dランゲージリファレンスの [オブジェクトプロパティ](https://doc.4d.com/4Dv18/4D/18/Object-Properties.300-4505419.ja.html) を参照ください)。



フォームオブジェクトの命名規則については [識別子](Concepts/identifiers.md) の章を参照してください。

#### JSON 文法

| 名    | データタイプ | とりうる値                           |
| ---- | ------ | ------------------------------- |
| name | string | 既存オブジェクトによって使用されていない、命名規則に沿った名称 |

#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [スタティックピクチャー](staticPicture.md) - [ステッパー](stepper.md) - [ラジオボタン](radio_overview.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)



---
## 変数あるいは式

> セレクションおよびコレクション型のリストボックス列に関しては **[式](properties_DataSource#式)** の章も参照ください。


このプロパティは、データのソースを指定します。 各アクティブフォームオブジェクトにはオブジェクト名と変数名が関連付けられています。 変数名とオブジェクト名は違っていてもかまいません。 同じフォーム内で複数のアクティブオブジェクトに同じ変数名を割り当てることができますが、[オブジェクト名](#オブジェクト名) はそれぞれユニークでなければなりません。
> 変数名の上限は 31バイトです。 命名規則については [識別子](Concepts/identifiers.md) の章を参照してください。

フォームオブジェクト変数を使って、オブジェクトを監視・コントロールすることができます。 たとえば、ボタンがクリックされると、その変数の値は 1 に設定されます。それ以外の場合は 0 です。 進捗インジケーターに関連づけられた式は、現設定の取得・変更を可能にします。

代入可・代入不可の変数および式が使用でき、取得できるデータ型はテキスト、整数、数値、日付、時間、ピクチャー、ブール、そしてオブジェクトです。

### 式

オブジェクトのデータソースとして式を指定することができます。 有効な 4D式であれば何でも受け入れられます。シンプルな式、フォーミュラ、4D関数、プロジェクトメソッド名、標準の `[Table]Field` シンタックスを使用したフィールド名を使用できます。 式はフォームが実行されたときに評価され、フォームイベント毎に再評価されます。 式には、[代入可および代入不可の式](Concepts/quick-tour.md#式) があることに注意が必要です。
> 入力された式が、変数名とメソッド名の両方で使用されている場合、4Dはメソッド名が指定されたものと判断します。



### ダイナミック変数

ボタン、入力オブジェクト、チェックボックス等のフォームオブジェクトに割り当てられる変数を、必要に応じて動的に、4Dに作成させることができます。 これをおこなうには、"変あるいは式" プロパティを空にします (あるいは JSON の `dataSource` フィールド):

変数名が与えられていない場合、4D はフォームがロードされたときにインタープリターのプロセス変数の空間内でユニークな名前を計算し、その名前でオブジェクト用の変数を新規作成します (このメカニズムはコンパイルモードでも使用することができます)。 この一時的な変数はフォームが閉じられるときに破棄されます。 この方式をコンパイルモードで動作させるためには、ダイナミック変数の型を明示的に指定しなければなりません。 これをおこなうには 2つの方法があります:

- プロパティリストの [式タイプ](#式タイプ) を使用して型を指定する。
- たとえば `VARIABLE TO VARIABLE` コマンドを使用する、専用の初期化コードをフォームロード時に実行する。

```4d
 If(Form event=On Load)
    C_TEXT($init)
    $Ptr_object:=OBJECT Get pointer(Object named;"comments")
    $init:=""
    VARIABLE TO VARIABLE(Current process;$Ptr_object->;$init)
 End if
```

4Dコード中では、 `OBJECT Get pointer` コマンドで取得できるポインターを介してダイナミック変数にアクセスできます。 たとえば:

```4d
  // "tstart" オブジェクトの変数に時刻 12:00:00 を代入します
 $p :=OBJECT Get pointer(Object named;"tstart")
 $p->:=?12:00:00?
```

このメカニズムを使用する利点は 2つあります:

- On the one hand, it allows the development of "subform" type components that can be used several times in the same host form. Let us take as an example the case of a datepicker subform that is inserted twice in a host form to set a start date and an end date. This subform will use objects for choosing the date of the month and the year. It will be necessary for these objects to work with different variables for the start date and the end date. Letting 4D create their variable with a unique name is a way of resolving this difficulty.
- On the other hand, it can be used to limit memory usage. In fact, form objects only work with process or inter-process variables. However, in compiled mode, an instance of each process variable is created in all the processes, including the server processes. This instance takes up memory, even when the form is not used during the session. Therefore, letting 4D create variables dynamically when loading the forms can save memory.


### 階層リストボックス

Using a string array (collection of arrays names) as *dataSource* value for a list box column defines a [hierarchical list box](listbox_overview.md#hierarchical-list-boxes).



#### JSON 文法

| 名          | データタイプ                  | とりうる値                                                                                                                                                                                                                                                                                                                                 |
| ---------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | string, or string array | <li>4D variable, field name, or arbitrary complex language expression. <li>Empty string for [dynamic variables](#dynamic-variables). <li>String array (collection of array names) for a [hierarchical listbox](listbox_overview.md#hierarchical-list-boxes) column] |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [ステッパー](stepper.md) - [タブコントロール](tabControl.md) - [サブフォーム](subform_overview.md) - [ラジオボタン](radio_overview.md) - [Web エリア](webArea_overview.md)





---
## 式タイプ

> This property is called **Data Type** in the Property List for Selection and collection type list box columns.


Specify the data type for the expression or variable associated to the object. Note that main purpose of this setting is to configure options (such as display formats) available for the data type. It does not actually type the variable itself. In view of database compilation, you must use the 4D language commands of the `Compiler` theme.

However, this property has a typing function in the following specific cases:

- **[Dynamic variables](#dynamic-variables)**: you can use this property to declare the type of dynamic variables.
- **[List Box Columns](listbox_overview.md#list-box-columns)**: this property is used to associate a display format with the column data. The formats provided will depend on the variable type (array type list box) or the data/field type (selection and collection type list boxes). The standard 4D formats that can be used are: Alpha, Numeric, Date, Time, Picture and Boolean. The Text type does not have specific display formats. Any existing custom formats are also available.
- **[Picture variables](input_overview.md)**: you can use this menu to declare the variables before loading the form in interpreted mode. Specific native mechanisms govern the display of picture variables in forms. These mechanisms require greater precision when configuring variables: from now on, they must have already been declared before loading the form — i.e., even before the `On Load` form event — unlike other types of variables. To do this, you need either for the statement `C_PICTURE(varName)` to have been executed before loading the form (typically, in the method calling the `DIALOG` command), or for the variable to have been typed at the form level using the expression type property. Otherwise, the picture variable will not be displayed correctly (only in interpreted mode).


#### JSON 文法

| 名                  | データタイプ | とりうる値                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string | <li>**standard objects:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"<li>**list box columns:** "boolean", "number", "picture", "text", date" (*array/selection list box only*) "integer", "time", "object" |

#### 対象オブジェクト

[チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md)


---
## CSSクラス

A list of space-separated words used as class selectors in css files.


#### JSON 文法

| 名     | データタイプ | とりうる値                                                     |
| ----- | ------ | --------------------------------------------------------- |
| class | string | One string with CSS name(s) separated by space characters |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [ラジオボタン](radio_overview.md) - [スタティックピクチャー](staticPicture.md) - [サブフォーム](subform_overview.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)



---
## コレクションまたはエンティティセレクション

To use collection elements or entities to define the row contents of the list box.

Enter an expression that returns either a collection or an entity selection. Usually, you will enter the name of a variable, a collection element or a property that contain a collection or an entity selection.

The collection or the entity selection must be available to the form when it is loaded. Each element of the collection or each entity of the entity selection will be associated to a list box row and will be available as an object through the [This](https://doc.4d.com/4Dv17R6/4D/17-R6/This.301-4310806.en.html) command:

*   if you used a collection of objects, you can call **This** in the datasource expression to access each property value, for example **This.\<propertyPath>**.
*   if you used an entity selection, you can call **This** in the datasource expression to access each attribute value, for example  **This.\<attributePath>**.
> If you used a collection of scalar values (and not objects), 4D allows you to display each value by calling **This.value** in the datasource expression. However in this case you will not be able to modify values or to access the current ite object (see below) Note: For information about entity selections, please refer to the [ORDA](https://doc.4d.com/4Dv17R6/4D/17-R6/ORDA.200-4354624.en.html) chapter.

#### JSON 文法

| 名          | データタイプ | とりうる値                                                        |
| ---------- | ------ | ------------------------------------------------------------ |
| dataSource | string | Expression that returns a collection or an entity selection. |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## データソース

Specify the type of list box.

![](assets/en/FormObjects/listbox_dataSource.png)

- **Arrays**(default): use array elements as the rows of the list box.
- **Current Selection**: use expressions, fields or methods whose values will be evaluated for each record of the current selection of a table.
- **Named Selection**: use expressions, fields or methods whose values will be evaluated for each record of a named selection.
- **Collection or Entity Selection**: use collection elements or entities to define the row contents of the list box. Note that with this list box type, you need to define the [Collection or Entity Selection](properties_Object.md#collection-or-entity-selection) property.

#### JSON 文法

| 名           | データタイプ | とりうる値                                                       |
| ----------- | ------ | ----------------------------------------------------------- |
| listboxType | string | "array", "currentSelection", "namedSelection", "collection" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## プラグインの種類

Name of the [plug-in external area](pluginArea_overview.md) associated to the object. Plug-in external area names are published in the manifest.json file of the plug-in.


#### JSON 文法

| 名              | データタイプ | とりうる値                                                         |
| -------------- | ------ | ------------------------------------------------------------- |
| pluginAreaKind | string | Name of the plug-in external area (starts with a % character) |


#### 対象オブジェクト
[プラグインエリア](pluginArea_overview.md)



---

## ラジオグループ

Enables radio buttons to be used in coordinated sets: only one button at a time can be selected in the set.

#### JSON 文法

| 名          | データタイプ | とりうる値            |
| ---------- | ------ | ---------------- |
| radioGroup | string | Radio group name |


#### 対象オブジェクト

[ラジオボタン](radio_overview.md)



---

## タイトル

オブジェクトにラベルを追加します。 このラベルのフォントとスタイルは指定することができます。

\文字 (バックスラッシュまたは円マーク) を使用すると、ラベル内で強制的に改行することができます。

![](assets/en/FormObjects/property_title.png)

ラベルに \ を表示したい場合は &#92;&#92; と入力します。

デフォルトでラベルはオブジェクトの中央に置かれます。 またオブジェクトにアイコンも含まれている場合、[タイトル/ピクチャー位置](properties_TextAndPicture.md#タイトルピクチャー位置) プロパティを用いて、これら2 つの要素の相対位置を変更することができます。

インターフェースの翻訳の目的で、XLIFF 参照をボタンのタイトルエリアに入力することができます ([付録 B: XLIFFアーキテクチャー](https://doc.4d.com/4Dv18/4D/18/Appendix-B-XLIFF-architecture.300-4575737.ja.html) 参照)。

#### JSON 文法

| 名    | データタイプ | とりうる値     |
| ---- | ------ | --------- |
| text | string | なんらかのテキスト |

#### 対象オブジェクト

[ボタン](button_overview.md) - [チェックボックス](checkbox_overview.md) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [ラジオボタン](radio_overview.md) - [テキストエリア](text.md)







---
## 変数の計算

This property sets the type of calculation to be done in a [column footer](listbox_overview.md#list-box-footers) area.
> The calculation for footers can also be set using the `LISTBOX SET FOOTER CALCULATION` 4D command.

There are several types of calculations available. The following table shows which calculations can be used according to the type of data found in each column and indicates the type automatically affected by 4D to the footer variable (if it is not typed by the code):

| Calculation           | Num | テキスト | 日付 | 時間 | Bool | Pict | footer var type     |
| --------------------- | --- | ---- | -- | -- | ---- | ---- | ------------------- |
| 最小                    | ○   |      | ○  | ○  | ○    |      | Same as column type |
| 最大                    | ○   |      | ○  | ○  | ○    |      | Same as column type |
| Sum                   | ○   |      | ○  |    | ○    |      | Same as column type |
| Count                 | ○   | ○    | ○  | ○  | ○    | ○    | 倍長整数                |
| Average               | ○   |      |    | ○  |      |      | 実数                  |
| Standard deviation(*) | ○   |      |    | ○  |      |      | 実数                  |
| Variance(*)           | ○   |      |    | ○  |      |      | 実数                  |
| Sum squares(*)        | ○   |      |    | ○  |      |      | 実数                  |
| Custom ("none")       | ○   | ○    | ○  | ○  | ○    | ○    | Any                 |

(*) Only for array type list boxes.

When an automatic calculation is set, it is applied to all the values found in the list box column. Note that the calculation does not take the shown/hidden state of list box rows into account. If you want to restrict a calculation to only visible rows, you must use a custom calculation.

When **Custom** ("none" in JSON) is set, no automatic calculations are performed by 4D and you must assign the value of the variable in this area by programming.
> Automatic calculations are not supported with: *  footers of columns based on formulas, *  footers of [Collection and Entity selection](listbox_overview.md#collection-or-entity-selection-list-boxes) list boxes. You need to use custom calculations.

#### JSON 文法

| 名                   | データタイプ | とりうる値                                                                                                 |
| ------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| variableCalculation | string | "none", "minimum", "maximum", "sum", "count", "average", "standardDeviation", "variance", "sumSquare" |

#### 対象オブジェクト

[リストボックスフッター](listbox_overview.md#list-box-footers)
