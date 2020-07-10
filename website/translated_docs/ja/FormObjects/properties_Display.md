---
id: propertiesDisplay
title: 表示フォーマット
---

* * *

## 文字フォ－マット

文字フォーマットは、表示や印刷時に文字フィールドや変数にデータを表示する方法を制御します。 以下は文字フィールド用に提供されるフォーマットのリストです:

![](assets/en/FormObjects/property_alphaFormat.png)

このリストからフォーマットを選択するか、コンボボックスに入力すことができます。 フォーマットポップアップメニューには、主に使用される文字フォーマット (電話番号等) が用意されています。 また、ツールボックスのフィルターとフォーマットで設定したカスタムフォーマットを選択することもできます。 この場合、そのフォーマットをオブジェクトプロパティで変更することはできません。 開発者が作成したカスタムフォーマットやフィルターはリストの先頭に表示されます。

シャープ (#) は文字表示フォーマットのプレースホルダーです。 ハイフンやスペース、その他の句読点を表示したい場所に挿入できます。 表示したい実際の句読点と、文字データを表示する場所には # を置きます。

たとえば部品番号が "RB-1762-1" のようなフォーマットの時、

文字フォーマットを以下のように書けます:

    ##-####-#
    

ユーザーが “RB17621” と入力すると、フィールドには以下の通りに表示されます:

    RB-1762-1
    

フィールドに実際に格納される値は “RB17621” です。

フォーマットが許可するよりも多くの文字が入力されると、4Dは最後の文字を表示します。 たとえばフォーマットが以下の時:

    (#######) 
    

そしてユーザーが “proportion” と入力すると、フィールドには以下のように表示されます:

    (portion) 
    

フィールドには “proportion” が格納されます。 表示フォーマットにかかわらず、4Dは入力された文字を受け入れ、格納します。 データが失われることはありません。

#### JSON 文法

| 名          | データタイプ | とりうる値                                                                            |
| ---------- | ------ | -------------------------------------------------------------------------------- |
| textFormat | string | "### ####", "(###) ### ####", "### ### ####", "### ## ####", "00000", カスタムフォーマット |


#### 対象オブジェクト

[コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター)

* * *

## 日付フォーマット

日付フォーマットは、表示や印刷時に日付を表示する方法を制御します。 データ入力の際は選択した表示フォーマットとは関係なく、YYYY/MM/DD 形式で日付を入力します。

> [数値フォーマット](#数値フォーマット) や [文字フォ－マット](#文字フォ－マット) と異なり、日付表示フォ－マットは4Dの組み込みフォーマットのなかから選択しなければなりません。

利用可能な日付表示フォーマットは以下のとおりです:

| フォーマット                          | JSON 文字列     | 例                             |
| ------------------------------- | ------------ | ----------------------------- |
| System date short               | - (デフォルト)    | 20/03/25                      |
| System date abbreviated         | systemMedium | 2020/03/25                    |
| System date long                | systemLong   | 2020年3月25日 水曜日                |
| RFC 822                         | rfc822       | Tue, 25 Mar 2020 22:00:00 GMT |
| Short Century                   | shortCentury | 03/25/20、ただし 04/25/2032 *(2)* |
| Internal date long              | long         | March 25, 2020                |
| Internal date abbreviated *(1)* | abbreviated  | Mar 25, 2020                  |
| Internal date short             | short        | 03/25/2020                    |
| ISO Date Time *(3)*             | iso8601      | 2020-03-25T00:00:00           |


*(1)* "June" は "Jun"、”July” は "Jul" に省略されます。 

*(2)* 年は、1930年~2029年の間は2桁の数字で表示されますが、それ以外の場合は4桁で表示されます。 これはデフォルト設定ですが、[SET DEFAULT CENTURY](https://doc.4d.com/4Dv18/4D/18/SET-DEFAULT-CENTURY.301-4505667.ja.html) コマンドで変更することができます。

*(3)* `ISO Date Time` フォーマットは XML の日付と時間表現の標準 (ISO8601) に対応します。 これは主に XML フォーマットや Web サービスのデータを読み込んだり書き出したりするために使用します。

> 表示フォーマットにかかわらず、年度を2 桁で入力すると、4D は年が00~29 の間であれば 21 世紀とみなし、30~99 の間であれば 20 世紀とみなします。 これはデフォルト設定ですが、[SET DEFAULT CENTURY](https://doc.4d.com/4Dv18/4D/18/SET-DEFAULT-CENTURY.301-4505667.ja.html) コマンドで変更することができます。

#### JSON 文法

| 名          | データタイプ | とりうる値                                                                                                                                               |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| dateFormat | string | "systemShort", "systemMedium", "systemLong", "iso8601", "rfc822", "short", "shortCentury", "abbreviated", "long", "blankIfNull" (他の値と組み合わせることができます) |


#### 対象オブジェクト

[コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター)

* * *

## 数値フォーマット

> 数値フィールドには整数、倍長整数、整数64bit、実数、そしてフロート型が含まれます。

数値フォーマットは表示や印刷時に数値を表示する方法を制御します。 選択した表示フォーマットとは関係なく、データ入力の際は数値だけを (必要に応じ小数点やマイナス記号も) 入力します。

4Dは様々なデフォルトの数値表示フォーマットを提供しています。

### プレースホルダー

それぞれの数値表示フォーマットでは、数値記号 (#)、ゼロ (0)、キャレット (^)、アスタリスク (*) をプレースホルダーとして使用します。 表示しようとする各桁に対して 1つのプレースホルダーを使用し、独自の数値表示フォーマットを作成できます。

| プレースホルダー | 千項及び末尾のゼロ   |
| -------- | ----------- |
| #        | 何も表示しない     |
| 0        | 0を表示        |
| ^        | スペースを表示 (1) |
| *        | アスタリスクを表示   |


(1) キャレット (^) は、ほとんどのフォントの数字と同じ幅を占めるスペースを生成します。

たとえば、3桁の数字を表示する場合、###というフォーマットを使用できます。 フォーマットにより許可された桁数を超えて入力すると、4Dは <<< をフィールドに表示し、表示フォーマットで指定された桁数を超える入力がおこなわれたことを示します。

ユーザーがマイナスの数値を入力すると、左端の文字はマイナス記号として表示されます (負数の表示フォーマットが指定されていない場合)。 ##0というフォーマットであれば、マイナス 26 は -26 と表示されます。マイナス260 は <<< と表示されますが、これはプレースホルダーが 3桁分しか指定されていないところに、マイナス記号により 1つのプレースホルダが使用されてしまい、桁あふれしたためです。

> 表示フォ－マットとは関係なく、4Dはフィ－ルドに入力された数値を受け入れ、保存します。 データが失われることはありません。

各プレースホルダー文字は、先行のゼロや末尾のゼロを表示する上で、その効果に違いがあります。 先行のゼロとは小数点より左側の数値の先頭にあるゼロのことです。末尾のゼロは小数点より右側の数値の終わりにあるゼロのことです。

たとえば ##0 というフォーマットを使用して 3桁の数字を表示するものとします。 ユーザーがフィールドに何も入力しないと、フィールドには 0 が表示されます。 26 と入力すると、フィールドには 26 と表示されます。

### 区切り文字

数値表示フォーマット (科学的記数法を除く) は自動でシステムの地域パラメーターに基づきます。 4D は OS に定義された小数点と千の位区切り文字を使用して “.” と “,” 文字をそれぞれ置き換えます。 0 や # に続くピリオドとコンマはプレースホルダー文字として扱われます。

> Windows 環境下で、テンキーの小数点キーを使用した際、4Dはカーソルが位置しているフィールドの型に応じて挙動が変化します: * 実数型のフィールドの場合、このキーを使用するとシステムによって定義された浮動小数点を挿入します。 * それ以外の型のフィールドの場合、このキーを使用するとそのキーに割り当てられた文字を挿入します。通常はピリオド (.) またはカンマ (,) です。

### 小数点とその他の表示文字

表示フォーマット内では 1つの小数点を使用することができます。 ユーザーが小数点を入力するかどうかに関係なく、小数点を表示したい場合、ゼロの間に小数点を置かなければなりません。

フォーマット内で他の文字を使用することもできます。 文字を単独で使用したりプレースホルダーの前後に配置すると、その文字が常に表示されます。 たとえば次のようなフォーマットの場合:

    ￥##0
    

円記号はプレースホルダーの前に置かれているため、常に表示されます。

文字がプレースホルダーの間に置かれている場合、両側に数字が表示される場合のみ、その文字が表示されます。 たとえばフォーマットを次のように指定したとき:

    ###.##0
    

ポイント (点) は、ユーザが少なくとも4桁以上の数値を入力した場合にのみ表示されます。

数値表示フォーマットにおいて、スペースは文字として扱われます。

### 正数、負数、ゼロのフォーマット

数値表示フォーマットは最大で 3つの部分に分けられ、それぞれ正数、負数、ゼロの値に対応する表示フォーマットを指定できます。 それぞれの部分は以下のように並び、セミコロンで区切られます:

    正数;負数;ゼロ
    

3つの部分すべてを指定する必要はありません。 1つの部分だけを使用する場合、4Dはすべての数値に対してそのフォーマットを使用し、負の数の先頭にマイナス記号を配置します。

2つの部分を指定する場合、4D は 1番目のフォーマットを正数とゼロに対して使用し、負数には 2番目のフォーマットを使用します。 3つの部分をすべて指定すると、1番目のフォーマットを正数、2 番目を負数、3 番目をゼロに使用します。

> 3番目の部分 (ゼロ) は解釈されず、文字の置き換えをおこないません。 `###;###;#` と指定した場合、ゼロ値は "#" と表示されます。 言い換えると、表示フォーマットとして実際に指定されたものが、ゼロ値として表示されます。

次の数値表示フォーマットの例は、円記号とカンマを表示し、負の数値はカッコ内に入れ、ゼロを表示しません:

    ￥###,##0.00;(￥###,##0.00);
    

2つ目のセミコロンにより、ゼロの表示には何も使用しないことを 4Dに指示している点に注目してください。 次のフォーマットは前の例と似ていますが、2つ目のセミコロンが指定されていません。これにより、ゼロに対して正数のフォーマットを使用するよう 4Dに指示しています:

    ￥###,##0.00;(￥###,##0.00)
    

この場合、ゼロは “￥0.00” と表示されます。

### 科学的記数法

科学的記数法で数値を表示したい場合には、**アンパサンド** (&) に続けて表示したい桁数を指定します。 たとえば次のフォーマットを指定すると:

    &3
    

759.62 は以下のように表示されます:

    7.60e+2
    

科学的記数法フォーマットは、表示される数値を自動的に丸める唯一のフォーマットです。 前述の例では、数値が 7.59e+2 と切り捨てられずに 7.60e+2 に丸められている点に注意してください。

### 16進フォーマット

次の表示フォーマットを使用して、数値を 16進表記で表示することができます:

* `&x`: このフォーマットでは 16進数が “0xFFFF” 形式で表示されます。
* `&$`: このフォーマットでは 16進数が “$FFFF” 形式で表示されます。

### XML記法

`&xml` フォーマットを使用すると、数字を XML 標準ルールに沿ったものにします。 特に小数点がシステム設定に関係なくすべての場合においてポイント (ピリオド) に変換されます。

### 数値を時間として表示する

`&/`の後に数字を指定することにより、数値を時間として (時間フォーマットで) 表示することができます。 時間は午前0 時を基点とした秒数として計算されます。 フォーマット内の数字は表示フォーマットドロップダウンメニュー上でその時間フォーマットが表示される順番に相当します。

たとえば次のフォーマットを指定すると:

    &/7
    

ドロップダウンメニューの7番目の時間フォーマット (AM/PM で表わす時間) に対応します。 このフォーマットが指定された数値フィールドの場合、25000 は次のように表示されます:

    6:56 AM
    

### 例題

次の表は各種フォーマットの数値表示への効果を表わしています。 正数、負数、ゼロという 3つの欄では 1234.50、-1234.50、0 がそれぞれどのように表示されるかを示しています。

| 入力されたフォーマット                        | 正数             | 負数          | ゼロ                     |
| ---------------------------------- | -------------- | ----------- | ---------------------- |
| ###                                | <<<            | <<<         |                        |
| ####                               | 1234           | <<<<        |                        |
| #######                            | 1234           | -1234       |                        |
| #####.##                           | 1234.5         | -1234.5     |                        |
| ####0.00                           | 1234.50        | -1234.50    | 0.00                   |
| #####0                             | 1234           | -1234       | 0                      |
| +#####0;–#####0;0                  | +1234          | -1234       | 0                      |
| #####0DB;#####0CR;0                | 1234DB         | 1234CR      | 0                      |
| #####0;(#####0)                    | 1234           | (1234)      | 0                      |
| ###,##0                            | 1,234          | -1,234      | 0                      |
| ##,##0.00                          | 1,234.50       | -1,234.50   | 0.00                   |
| \^\^\^\^\^\^\^              | 1234           | -1234       |                        |
| \^\^\^\^\^\^0                | 1234           | -1234       | 0                      |
| \^\^\^,\^\^0                  | 1,234          | -1,234      | 0                      |
| \^\^,\^\^0.00                  | 1,234.50       | -1,234.50   | 0.00                   |
| ******\*             | **\*1234 | **-1234 | ******\* |
| **\****0                 | **\*1234 | **-1234 | ******0    |
| ***,*\*0                   | **1,234    | \*-1,234  | ******0    |
| **,**0.00                  | \*1,234.50   | -1,234.50   | ****\*0.00   |
| $*,**0.00;–$*,**0.00   | $1,234.50      | -$1,234.50  | $****0.00      |
| $\^\^\^\^0                     | $ 1234         | $–1234      | $ 0                    |
| $\^\^\^0;–$\^\^\^0           | $1234          | –$1234      | $ 0                    |
| $\^\^\^0 ;($\^\^\^0)         | $1234          | ($1234)     | $ 0                    |
| $\^,\^\^0.00 ;($\^,\^\^0.00) | $1,234.50      | ($1,234.50) | $ 0.00                 |
| &2                                 | 1.2e+3         | -1.2e+3     | 0.0e+0                 |
| &5                                 | 1.23450e+3     | -1.23450e+3 | 0.00000                |
| &xml                               | 1234.5         | -1234.5     | 0                      |


#### JSON 文法

| 名            | データタイプ | とりうる値                      |
| ------------ | ------ | -------------------------- |
| numberFormat | string | 数値 (必要に応じて小数点およびマイナス記号を含む) |


#### 対象オブジェクト

[コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター) - [インジケーター](progressIndicator.md)

* * *

## ピクチャーフォーマット

Picture formats control how pictures appear when displayed or printed. For data entry, the user always enters pictures by pasting them from the Clipboard or by drag and drop, regardless of the display format.

The truncation and scaling options do not affect the picture itself. The contents of a Picture field are always saved. Only the display on the particular form is affected by the picture display format.

### Scaled to fit

`JSON grammar: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### Truncated (centered and non-centered)

`JSON grammar: "truncatedCenter" / "truncatedTopLeft"`

The **Truncated (centered)** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 4D crops equally from each edge and from the top and bottom.

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. 4D crops from the right and bottom.

> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](assets/en/FormObjects/property_pictureFormat_Truncated.png)

### Scaled to fit (proportional) and Scaled to fit centered (proportional)

`JSON grammar: "proportionalTopLeft" / "proportionalCenter"`

When you use **Scaled to fit (proportional)**, the picture is reduced proportionally on all sides to fit the area created for the picture. The **Scaled to fit centered (proportional)** option does the same, but centers the picture in the picture area.

If the picture is smaller than the area set in the form, it will not be modified. If the picture is bigger than the area set in the form, it is proportionally reduced. Since it is proportionally reduced, the picture will not appear distorted.

If you have applied the **Scaled to fit centered (proportional)** format, the picture is also centered in the area:

![](assets/en/FormObjects/property_pictureFormat_ScaledProportional.png)

### Replicated

`JSON grammar: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](assets/en/FormObjects/property_pictureFormat_Replicated.png)

If the field is reduced to a size smaller than that of the original picture, the picture is truncated (non-centered).

#### JSON 文法

| 名             | データタイプ | とりうる値                                                                                                 |
| ------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| pictureFormat | string | "truncatedTopLeft", "scaled", "truncatedCenter", "tiled", "proportionalTopLeft", "proportionalCenter" |


#### 対象オブジェクト

[Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)

* * *

## 時間フォーマット

時間フォーマットは、表示や印刷時に時間を表示する方法を制御します。 選択した表示フォーマットとは関係なく、データ入力の際は 24時間制の “HH:MM:SS” フォーマット、または 12時間制の “HH:MM:SS AM/PM” フォーマットで時間を入力します。

> [文字](#文字フォーマット) や [数値](#数値フォーマット) の表示フォーマットとは異なり、時間の表示フォ－マットはフォーマットポップアップメニューから選択しなければなりません。

次の表は、時間フィールドの表示フォーマットとそれぞれのフォーマットの例を示しています:

| フォーマット                       | JSON 文字列     | コメント                                                                       | 04:30:25 の例         |
| ---------------------------- | ------------ | -------------------------------------------------------------------------- | ------------------- |
| HH:MM:SS                     | hh_mm_ss   |                                                                            | 04:30:25            |
| HH:MM                        | hh_mm        |                                                                            | 04:30               |
| Hour Min Sec                 | HH_MM_SS   |                                                                            | 4 時 30 分 25 秒       |
| Hour Min                     | HH_MM        |                                                                            | 4 時 30 分            |
| HH:MM AM/PM                  | hh_mm_am   |                                                                            | 4:30 AM             |
| MM SS                        | mm_ss        | 00:00:00からの経過時間                                                            | 270:25              |
| Min Sec                      | MM_SS        | 00:00:00からの経過時間                                                            | 270 分 25 秒          |
| ISO Date Time                | iso8601      | 時間に関連する XML 標準表現に対応。 主に XML フォーマットでのデータのやり取りに使用します。                        | 0000-00-00T04:30:25 |
| System time short            | - (デフォルト)    | システムに定義された標準の時間フォーマット                                                      | 04:30:25            |
| System time long abbreviated | systemMedium | macOSのみ: システムに定義された時間フォーマットの短縮型。   
Windows では System time short フォーマットと同じ | 04:30:25            |
| System time long             | systemLong   | macOSのみ: システムに定義された時間フォーマット。   
Windows では System time short フォーマットと同じ     | 04:30:25 JST        |


#### JSON 文法

| 名          | データタイプ | とりうる値                                                                                                                                                                       |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| timeFormat | string | "systemShort", "systemMedium", "systemLong", "iso8601", "hh_mm_ss", "hh_mm", "hh_mm_am", "mm_ss", "HH_MM_SS", "HH_MM", "MM_SS", "blankIfNull" (他の値と組み合わせることができます) |


#### 対象オブジェクト

[コンボボックス](comboBox_overview.md) - [ドロップダウンリスト](dropdownList_Overview.md) - [入力](input_overview.md) - [リストボックス列](listbox_overview.md#リストボックス列) - [リストボックスフッター](listbox_overview.md#リストボックスフッター)

* * *

## テキスト (True時)/テキスト (False時)

[ブール式](properties_Object.md#式の型) を次のフォームオブジェクトで表示した場合:

- [入力オブジェクト](input_overview.md) にテキストとして
- [リストボックス列](listbox_overview.md#リストボックス列) に表示タイプ ["ポップアップ"](properties_Display.md#表示タイプ) を選択して

... 値の代わりに表示するテキストを指定することができます:

- **テキスト (True時)** - 値が "true" の時に表示するテキスト
- **テキスト (False時)** - 値が "false" の時に表示するテキスト

#### JSON 文法

| 名             | データタイプ | とりうる値                                                       |
| ------------- | ------ | ----------------------------------------------------------- |
| booleanFormat | string | "\<*テキスト (True時)*\>;\<*テキスト (False時)*\>", 例: "済み;未処理" / |


#### 対象オブジェクト

[リストボックス列](listbox_overview.md#リストボックス列) - [入力](input_overview.md)

* * *

## Display Type

Used to associate a display format with the column data. The formats provided depends on the variable type (array type list box) or the data/field type (selection and collection type list boxes).

Boolean and number (numeric or integer) columns can be displayed as check boxes. In this case, the [Title](#title) property can be defined.

Boolean columns can also be displayed as pop-up menus. In this case, the [Text when False and Text when True](#text-when-false-text-when-true) properties must be defined.

#### JSON 文法

- **number columns**: "automatic" (default) or "checkbox"
    - **boolean columns**: "checkbox" (default) or "popup"</td> </tr> </tbody> </table> 
        #### 対象オブジェクト
        
        [List Box Column](listbox_overview.md#list-box-columns)
        
        * * *
        
        ## Not rendered
        
        When this property is enabled, the object is not drawn on the form, however it can still be activated.
        
        In particular, this property allows implementing "invisible" buttons. Non-rendered buttons can be placed on top of graphic objects. They remain invisible and do not highlight when clicked, however their action is triggered when they are clicked.
        
        #### JSON 文法
        
        | 名       | データタイプ  | とりうる値       |
        | ------- | ------- | ----------- |
        | display | boolean | true, false |

        
        #### 対象オブジェクト
        
        [Button](button_overview.md) - [Drop-down List](dropdownList_Overview.md)
        
        * * *
        
        ## Three-States
        
        Allows a check box object to accept a third state. チェックボックスが 3番目の状態になると、チェックボックスに関連付けられた変数は値2を返します。
        
        #### Three-states check boxes in list box columns
        
        List box columns with a numeric [data type](properties_Object.md#expression-type) can be displayed as three-states check boxes. If chosen, the following values are displayed: * 0 = unchecked box, * 1 = checked box, * 2 (or any value >0) = semi-checked box (third state). For data entry, this state returns the value 2. * -1 = invisible check box, * -2 = unchecked box, not enterable, * -3 = checked box, not enterable, * -4 = semi-checked box, not enterable
        
        In this case as well, the [Title](#title) property is also available so that the title of the check box can be entered.
        
        #### JSON 文法
        
        | 名          | データタイプ  | とりうる値       |
        | ---------- | ------- | ----------- |
        | threeState | boolean | true, false |

        
        #### 対象オブジェクト
        
        [Check box](checkbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns)
        
        * * *
        
        ## タイトル
        
        This property is available for a list box column if:
        
        - the [column type](properties_Object.md#expression-type) is **boolean** and its [display type](properties_Display.md#display-type) is "Check Box"
        - the [column type](properties_Object.md#expression-type) is **number** (numeric or integer) and its [display type](properties_Display.md#display-type) is "Three-states Checkbox".
        
        In that cases, the title of the check box can be entered using this property.
        
        #### JSON 文法
        
        | 名            | データタイプ | とりうる値                              |
        | ------------ | ------ | ---------------------------------- |
        | controlTitle | string | Any custom label for the check box |

        
        #### 対象オブジェクト
        
        [List Box Column](listbox_overview.md#list-box-columns)
        
        * * *
        
        ## Truncate with ellipsis
        
        Controls the display of values when list box columns are too narrow to show their full contents.
        
        This option is available for columns with any type of contents, except pictures and objects.
        
        * When the property is enabled (default), if the contents of a list box cell exceed the width of the column, they are truncated and an ellipsis is displayed:
            
            ![](assets/en/FormObjects/property_truncate1.png)
        
        > The position of the ellipsis depends on the OS. In the above example (Windows), it is added on the right side of the text. On macOS, the ellipsis is added in the middle of the text.
        
        * When the property is disabled, if the contents of a cell exceed the width of the column, they are simply clipped with no ellipsis added:
            
            ![](assets/en/FormObjects/property_truncate2.png)
        
        The Truncate with ellipsis option is enabled by default and can be specified with list boxes of the Array, Selection, or Collection type.
        
        > When applied to Text type columns, the Truncate with ellipsis option is available only if the [Wordwrap](#wordwrap) option is not selected. When the Wordwrap property is selected, extra contents in cells are handled through the word-wrapping features so the Truncate with ellipsis property is not available.
        
        The Truncate with ellipsis property can be applied to Boolean type columns; however, the result differs depending on the [cell format](#display-type):
        
        - For Pop-up type Boolean formats, labels are truncated with an ellipsis,
        - For Check box type Boolean formats, labels are always clipped.
        #### JSON 文法
        
        | 名            | データタイプ | とりうる値                  |
        | ------------ | ------ | ---------------------- |
        | truncateMode | string | "withEllipsis", "none" |

        
        #### 対象オブジェクト
        
        [List Box Column](listbox_overview.md#list-box-columns) - [List Box Header](listbox_overview.md#list-box-footers)
        
        * * *
        
        ## 表示状態
        
        This property allows hiding by default the object in the Application environment.
        
        You can handle the Visible property for most form objects. This property simplifies dynamic interface development. In this context, it is often necessary to hide objects programatically during the `On load` event of the form then to display certain objects afterwards. The Visible property allows inverting this logic by making certain objects invisible by default. The developer can then program their display using the `OBJECT SET VISIBLE` command depending on the context.
        
        #### JSON 文法
        
        | 名          | データタイプ | とりうる値               |
        | ---------- | ------ | ------------------- |
        | visibility | string | "visible", "hidden" |

        
        #### 対象オブジェクト
        
        [4D View Pro area](viewProArea_overview) - [4D Write Pro area](writeProArea_overview) - [Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Combo Box](comboBox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [Group Box](groupBox.md) - [Hierarchical List](list_overview.md) - [List Box](listbox_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers) - [List Box Header](listbox_overview.md#list-box-headers) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Plug-in Area](pluginArea_overview.md) - [Progress indicator](progressIndicator.md) - [Radio Button](radio_overview.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Static Picture](staticPicture.md) - [Stepper](stepper.md) - [Subform](subform_overview.md) - [Tab control](tabControl.md) - [Text Area](text.md) - [Web Area](webArea_overview.md)
        
        * * *
        
        ## Wordwrap
        
        > For [input](input_overview.md) objects, available when the [Multiline](properties_Entry.md#multiline) property is set to "yes" .
        
        Manages the display of contents when it exceeds the width of the object.
        
        #### Checked for list box/Yes for input
        
        `JSON grammar: "normal"`
        
        When this option is selected, text automatically wraps to the next line whenever its width exceeds that of the column/area, if the column/area height permits it.
        
        - In single-line columns/areas, only the last word that can be displayed entirely is displayed. 4D inserts line returns; it is possible to scroll the contents of the area by pressing the down arrow key.
        
        - In multiline columns/areas, 4D carries out automatic line returns.
        
        ![](assets/en/FormObjects/wordwrap2.png)
        
        #### Unchecked for list box/No for input
        
        `JSON grammar: "none"`
        
        When this option is selected, 4D does not do any automatic line returns and the last word that can be displayed may be truncated. In text type areas, carriage returns are supported:
        
        ![](assets/en/FormObjects/wordwrap3.png)
        
        In list boxes, any text that is too long is truncated and displayed with an ellipse (...). In the following example, the Wordwrap option is **checked for the left column** and **unchecked for the right column**:
        
        ![](assets/en/FormObjects/property_wordwrap1.png)
        
        Note that regardless of the Wordwrap option’s value, the row height is not changed. If the text with line breaks cannot be entirely displayed in the column, it is truncated (without an ellipse). In the case of list boxes displaying just a single row, only the first line of text is displayed:
        
        ![](assets/en/FormObjects/property_wordwrap2.png)
        
        #### Automatic for input (default option)
        
        `JSON grammar: "automatic"`
        
        - In single-line areas, words located at the end of lines are truncated and there are no line returns.
        - In multiline areas, 4D carries out automatic line returns.
        
        ![](assets/en/FormObjects/wordwrap1.png)
        
        #### JSON 文法
        
        | 名        | データタイプ | とりうる値                                              |
        | -------- | ------ | -------------------------------------------------- |
        | wordwrap | string | "automatic" (excluding list box), "normal", "none" |

        
        #### 対象オブジェクト
        
        [Input](input_overview.md) - [List Box Column](listbox_overview.md#list-box-columns) - [List Box Footer](listbox_overview.md#list-box-footers)