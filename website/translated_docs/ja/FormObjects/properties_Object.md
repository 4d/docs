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
## 値を記憶

This property is available when the [Save Geometry](FormEditor/properties_FormProperties.md#save-geometry) option is checked for the form.

This feature is only supported for objects that contribute to the overall geometry of the form. For example, this option is available for check boxes because their value can be used to hide or display additional areas in the window.

Here is the list of objects whose value can be saved:

| オブジェクト                                 | Saved value                                                                            |
| -------------------------------------- | -------------------------------------------------------------------------------------- |
| [チェックボックス](checkbox_overview.md)       | Value of associated variable (0, 1, 2)                                                 |
| [ドロップダウンリスト](dropdownList_Overview.md) | Number of selected row                                                                 |
| [ラジオボタン](radio_overview.md)            | Value of associated variable (1, 0, True or False for buttons according to their type) |
| [Tab control](tabControl.md)           | Number of selected tab                                                                 |


#### JSON 文法

| 名             | データタイプ  | とりうる値       |
| ------------- | ------- | ----------- |
| memorizeValue | boolean | true, false |

#### 対象オブジェクト

[Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Radio Button](radio_overview.md) - [Tab control](tabControl.md)



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

- プロパティリストの [式タイプ](#式の型-式タイプ) を使用して型を指定する。
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

- ひとつのホストフォーム上で複数個配置することの可能な "サブフォーム" タイプのコンポーネント開発を可能にします。 たとえば、開始日と終了日を設定する 2つの日付ピッカーサブフォームをホストフォーム上に配置するケースを考えてみましょう。 このサブフォームでは、日付を選択するためのオブジェクトが使用されます。 開始日と終了日をそれぞれ選択できるよう、これらオブジェクトにはそれぞれ別の変数が割り当てられている必要があります。 4Dにダイナミック変数を生成させることでユニークな変数を得ることができ、この問題を解決できます。
- また、メモリの利用を減少させることができます。 フォームオブジェクトでは、プロセス変数とインタープロセス変数しか使用できません。 しかしコンパイルモードでは、各プロセス変数のインスタンスが (サーバープロセスを含め) すべてのプロセスに対して作成されます。 このインスタンスは、セッション中にフォームが使用されない場合でもメモリを消費します。 フォームのロード時、4Dにダイナミック変数を作成させることで、メモリを節約できます。


### 階層リストボックス

リストボックス列の *dataSource* 値として、文字列配列 (配列名の配列) を指定すると [階層リストボックス](listbox_overview.md#階層リストボックス) が定義されます。



#### JSON 文法

| 名          | データタイプ       | とりうる値                                                                                                                                                                                                    |
| ---------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSource | 文字列、または文字列配列 | <li>4D変数、フィールド名、あるいは任意のランゲージ式 <li>[ダイナミック変数](#ダイナミック変数) の場合は、空の文字列 <li>[階層リストボックス](listbox_overview.md#階層リストボックス) 列の場合に、文字列配列 (配列名の配列) |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスヘッダー](listbox_overview.md#リストボックスヘッダー) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [スピナー](spinner.md) - [スプリッター](splitters.md) - [ステッパー](stepper.md) - [タブコントロール](tabControl.md) - [サブフォーム](subform_overview.md) - [ラジオボタン](radio_overview.md) - [Web エリア](webArea_overview.md)





---
## 式の型/式タイプ

> セレクションおよびコレクション型のリストボックス列において、このプロパティは **データタイプ** と呼ばれています。


オブジェクトに関連付けられた式または変数のデータ型を指定します。 この設定の主な目的は、プロパティリスト内で提供されるテーマとオプションが、データの型と対応するようにするためです。 つまり、実際に変数の型そのものを決めるわけではありません。 データベースをコンパイルするためには、`コンパイラー` テーマの 4Dランゲージコマンドを別途使う必要があります。

ただし、次の特定の場合には、このプロパティは型宣言の機能を持ちえます:

- **[ダイナミック変数](#ダイナミック変数)**: このプロパティを使って、ダイナミック変数の型を宣言することができます。
- **[リストボックス列](listbox_overview.md#リストボックス列)**: このプロパティは列データに表示フォーマットを関連づけるのに使用されます。 提供されるフォーマットは変数型 (配列型のリストボックス) またはデータ/フィールド型 (セレクションおよびコレクション型のリストボックス) により異なります。 使用できる標準の 4D フォーマットはテキスト、数値、整数、日付、時間、ピクチャー、そしてブールです。 テキストの場合は専用の表示フォーマットがありません。 標準フォーマットのほかに、定義したカスタムフォーマットも選択することができます。
- **[ピクチャー変数](input_overview.md)**: このプロパティを使うと、インタープリタモードにおいてフォームロード前に変数を宣言することができます。 フォーム上のピクチャー変数にピクチャーを表示する際には特別なメカニズムが使用されます。 そのため、他の型の変数とは違って、ピクチャー変数の宣言は、フォームロード前 (`On Load` フォームイベントよりも先) におこなう必要があります。 このため、フォームを呼び出す前 (たとえば `DIALOG` コマンドを呼び出す前) に`C_PICTURE(varName)` を実行するか、あらかじめプロパティリストの式の型にピクチャーを選択しておく必要があります。 このいずれかをおこなわない場合、ピクチャー変数はピクチャーを正しく表示できません (インタープリターモードのみ)。


#### JSON 文法

| 名                  | データタイプ | とりうる値                                                                                                                                                                                                                                                                                                                                         |
| ------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dataSourceTypeHint | string | <li>**標準のオブジェクト:** "integer", "boolean", "number", "picture", "text", date", "time", "arrayText", "arrayDate", "arrayTime", "arrayNumber", "collection", "object", "undefined"<li>**リストボックス列:** "boolean", "number", "picture", "text", date", (*配列/セレクションリストボックスのみ* "integer", "time", "object") |

#### 対象オブジェクト

[チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [プラグインエリア](pluginArea_overview.md) - [進捗インジケーター](progressIndicator.md) - [ラジオボタン](radio_overview.md) - [ルーラー](ruler.md) - [スピナー](spinner.md) - [ステッパー](stepper.md) - [サブフォーム](subform_overview.md) - [タブコントロール](tabControl.md)


---
## CSSクラス

css ファイルにてクラスセレクターとして使用される、(複数の場合は半角スペース区切りの) クラス名のリスト。


#### JSON 文法

| 名     | データタイプ | とりうる値                       |
| ----- | ------ | --------------------------- |
| class | string | (複数の場合は半角スペース区切りの) クラス名の文字列 |


#### 対象オブジェクト

[4D View Pro エリア](viewProArea_overview.md) - [4D Write Pro エリア](writeProArea_overview.md) - [ボタン](button_overview.md) - [ボタングリッド](buttonGrid_overview.md) - [チェックボックス](checkbox_overview.md) - [コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [グループボックス](groupBox.md) - [階層リスト](list_overview.md) - [リストボックス](listbox_overview.md) - [ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [プラグインエリア](pluginArea_overview.md) - [ラジオボタン](radio_overview.md) - [スタティックピクチャー](staticPicture.md) - [サブフォーム](subform_overview.md) - [テキストエリア](text.md) - [Web エリア](webArea_overview.md)



---
## コレクションまたはエンティティセレクション

コレクション要素あるいはエンティティを使用して、リストボックスの行の中身を定義することができます。

コレクションあるいはエンティティセレクションを返す式を入力します。 一般的には、コレクションまたはエンティティセレクションを格納している変数名、コレクション要素、あるいはプロパティを入力します。

コレクションおよびエンティティセレクションは、フォームロード時にフォームから利用可能でなければなりません。 コレクションの各要素、あるいはエンティティセレクションの各エンティティは、リストボックスの行へと割り当てられ、[This](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.ja.html) コマンドを通してオブジェクトとして利用可能です:

*   オブジェクトのコレクションを使用した場合、データソース式内で **This** コマンドを呼び出すことで、各プロパティ値にアクセスすることが可能です。例: **This.\<propertyPath>**。
*   エンティティセレクションを使用した場合、データソース式内で **This** コマンドを呼び出すことで、各属性値へとアクセスすることが可能です。例: **This.\<attributePath>**。
> (オブジェクトでない) スカラー値のコレクションを使用した場合、データソース式内で **This.value** を呼び出すことで各値にアクセスすることが可能です。 ただし、この場合は値を編集したり、"カレントの項目" オブジェクトにアクセスすることはできません (以下参照)。<br /> 注: エンティティセレクションについての詳細については、[ORDA](https://doc.4d.com/4Dv18/4D/18/ORDA.200-4575453.ja.html) の章を参照してください。

#### JSON 文法

| 名          | データタイプ | とりうる値                      |
| ---------- | ------ | -------------------------- |
| dataSource | string | コレクションあるいはエンティティセレクションを返す式 |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## データソース

リストボックスの種類を指定します。

![](assets/en/FormObjects/listbox_dataSource.png)

- **配列** (デフォルト): リストボックスの各行に 配列要素を割り当てます。
- **カレントセレクション**: 指定したテーブルのカレントセレクションの各レコードごとに式、フィールド、メソッドが評価されます。
- **命名セレクション**: 指定した命名セレクションに含まれる各レコードごとに式、フィールド、メソッドが評価されます。
- **コレクションまたはエンティティセレクション**: コレクション要素あるいはエンティティを使用してリストボックスの行の中身を定義します。 この場合 [コレクションまたはエンティティセレクション](properties_Object.md#コレクションまたはエンティティセレクション) プロパティを定義する必要があります。

#### JSON 文法

| 名           | データタイプ | とりうる値                                                       |
| ----------- | ------ | ----------------------------------------------------------- |
| listboxType | string | "array", "currentSelection", "namedSelection", "collection" |

#### 対象オブジェクト

[リストボックス](listbox_overview.md)






---
## プラグインの種類

オブジェクトに関連付ける [プラグイン](pluginArea_overview.md) の名称。 ここで指定するプラグイン名は、プラグインの manifest.json ファイルにて公開されています。


#### JSON 文法

| 名              | データタイプ | とりうる値                 |
| -------------- | ------ | --------------------- |
| pluginAreaKind | string | プラグインの名称 (% 文字で始まります) |


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









