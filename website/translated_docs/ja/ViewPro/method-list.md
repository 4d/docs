---
id: method-list
title: メソッド一覧
---

> **警告**: このページのコマンドはスレッドセーフではありません。

[A](#a) - [C](#c) - [D](#d) - [E](#e) - [F](#f) - [G](#g) - [I](#i) - [M](#m) - [N](#n) - [O](#o) - [P](#p) - [R](#r) - [S](#s)

## A


### VP ADD FORMULA NAME


<!-- REF #_method_.VP ADD FORMULA NAME.Syntax -->**VP ADD FORMULA NAME** ( *vpAreaName* : Text ; *vpFormula* : Text ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF #_method_.VP ADD FORMULA NAME.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| vpFormula  | テキスト   | -> | 4D View Pro フォーミュラ      |
| name       | テキスト   | -> | フォーミュラの名称               |
| options    | オブジェクト | -> | 命名フォーミュラのオプション          |
<!-- END REF -->  

#### 説明

`VP ADD FORMULA NAME` コマンドは、 <!-- REF #_method_.VP ADD FORMULA NAME.Summary -->開いているドキュメント内において命名されたフォーミュラを作成、または編集します<!-- END REF -->。
> このコマンドで作成された命名フォーミュラはドキュメントとともに保存されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*vpFormula* には、命名する 4D View Pro フォーミュラを渡します。 フォーミュラシンタックスの詳細については、[式と関数](formulas.md) ページを参照ください。

*name* 引数には、新しいフォーミュラの名前を渡します。 同じスコープ内で名前が既に使用されている場合、新しい命名フォーミュラは既存のものを上書きします。 ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

*options* 引数には、命名フォーミュラの追加プロパティを格納したオブジェクト型を渡すことができます。 以下のオブジェクトプロパティがサポートされています:


| プロパティ   | タイプ  | 説明                                                                                                                                                                                                                                                                                                                                              |
| ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope   | 数値   | フォーミュラのスコープ。 シートのインデックス (0起点) を渡すか、あるいは以下の定数を使用することができます: <p><li>`vk current sheet`</li><li>`vk workbook`</li><p><p>スコープは、フォーミュラ名が特定のワークシートに限定されたローカル (*scope* = シートのインデックス または `vk current sheet`) なものか、あるいはワークブック全体で使用できるグローバル (*scope* = `vk workbook`) なものかを決定します。 |
| comment | テキスト | 命名フォーミュラに割り当てられたコメント                                                                                                                                                                                                                                                                                                                            |


#### 例題

```4d
VP ADD FORMULA NAME("ViewProArea";"SUM($A$1:$A$10)";"Total2")
```

#### 参照

[Cell references](formulas.md#cell-references)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)

### VP ADD RANGE NAME


<!-- REF #_method_.VP ADD RANGE NAME.Syntax -->**VP ADD RANGE NAME** ( *rangeObj* : Object ; *name* : Text { ; *options* : Object } )<!-- END REF -->  

<!-- REF #_method_.VP ADD RANGE NAME.Params -->

| 引数       | タイプ    |    | 説明             |
| -------- | ------ | -- | -------------- |
| rangeObj | テキスト   | -> | レンジオブジェクト      |
| name     | テキスト   | -> | フォーミュラの名称      |
| options  | オブジェクト | -> | 命名フォーミュラのオプション |
<!-- END REF -->  

#### 説明


The `VP ADD RANGE NAME` command <!-- REF #_method_.VP ADD RANGE NAME.Summary -->creates or modifies a named range in the open document<!-- END REF -->.
> このコマンドで作成された命名レンジはドキュメントとともに保存されます。

In *rangeObj*, pass the range that you want to name and in *name*, pass the new name for the range. If the name is already used within the same scope, the new named range replaces the existing one. ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

You can pass an object with additional properties for the named range in *options*. 以下のオブジェクトプロパティがサポートされています:


| プロパティ   | タイプ  | 説明                                                                                                                                                                                                                                                                                                                                        |
| ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope   | 数値   | レンジのスコープ。 シートのインデックス (0起点) を渡すか、あるいは以下の定数を使用することができます: <p><li>`vk current sheet`</li><li>`vk workbook`</li><p><p>スコープは、レンジ名が特定のワークシートに限定されたローカル (*scope* = シートのインデックス または `vk current sheet`) なものか、あるいはワークブック全体で使用できるグローバル (*scope* = `vk workbook`) なものかを決定します。 |
| comment | テキスト | 命名レンジに割り当てられたコメント                                                                                                                                                                                                                                                                                                                         |
> * 命名レンジの実態は、座標を格納した命名フォーミュラです。 `VP ADD RANGE NAME` を使うと簡単に命名レンジの作成ができますが、[`VP ADD FORMULA NAME`](#vp-add-formula-name) コマンドで命名レンジを作成することもできます。
> * 命名レンジを定義するフォーミュラは、[`VP Get formula by name`](#vp-get-formula-by-name) コマンドで取得することができます。


#### 例題

You want to create a named range for a cell range:

```4d
$range:=VP Cell("ViewProArea";2;10)
VP ADD RANGE NAME($range;"Total1")
```

#### 参照

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Get names](#vp-get-names)<br/>[VP Name](#vp-name)



### VP ADD SELECTION

<!-- REF #_method_.VP ADD SELECTION.Syntax -->**VP ADD SELECTION** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP ADD SELECTION.Params -->

| 引数       | タイプ  |    | 説明        |
| -------- | ---- | -- | --------- |
| rangeObj | テキスト | -> | レンジオブジェクト |
<!-- END REF -->  

#### 説明

The `VP ADD SELECTION` command <!-- REF #_method_.VP ADD SELECTION.Summary -->adds the specified cells to the currently selected cells<!-- END REF -->.

In *rangeObj*, pass a range object of cells to add to the current selection.
> アクティブセルは変更されません。

#### 例題

You have cells currently selected:

![](assets/en/ViewPro/cmd_vpAddSelection1.PNG)

The following code will add cells to your selection:

```4d
$currentSelection:=VP Cells("myVPArea";3;4;2;3)
VP ADD SELECTION($currentSelection)
```

結果:

![](assets/en/ViewPro/cmd_vpAddSelection2.PNG)

#### 参照

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP ADD SHEET 

<!-- REF #_method_.VP ADD SHEET.Syntax -->**VP ADD SHEET** ( *vpAreaName* : Text )<br>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer )<br>**VP ADD SHEET** ( *vpAreaName* : Text ; *index* : Integer ; *name* : Text )
<!-- END REF --> 

<!-- REF #_method_.VP ADD SHEET.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| index      | 整数   | -> | 新しいシートのインデックス           |
| name       | テキスト | -> | シート名                    |	
<!-- END REF --> 

#### 説明

The `VP ADD SHEET` command <!-- REF #_method_.VP ADD SHEET.Summary -->inserts a sheet in the document loaded in *vpAreaName*.<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *index*, you can pass an index for the new sheet. If the passed *index* is inferior to or equal to 0, the command inserts the new sheet at the beginning. If *index* exceeds the number of sheets, the command inserts the new sheet after the existing ones.
> インデックスは 0 起点です。

In *name*, you can pass a name for the new sheet. The new name cannot contain the following characters: `*, :, [, ], ?,\,/`

#### 例題

The document currently has 3 sheets:

![vp-document-with-3-sheets](assets/en/ViewPro/vp-sheet-3.png)

To insert a sheet at the third position (index 2) and name it "March":

```4d
VP ADD SHEET("ViewProArea";2;"March")
```

![vp-add-sheet](assets/en/ViewPro/vp-add-sheet.png)

#### 参照

[VP REMOVE SHEET](#vp-remove-sheet)

### VP ADD SPAN

<!-- REF #_method_.VP ADD SPAN.Syntax -->**VP ADD SPAN** ( *rangeObj* : Object )
<!-- END REF --> 

<!-- REF #_method_.VP ADD SPAN.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
<!-- END REF --> 

#### 説明

The `VP ADD SPAN` command combines the cells in *rangeObj* as a single span of cells.

In *rangeObj*, pass a range object of cells. The cells in the range are joined to create a larger cell extending across multiple columns and/or rows. You can pass multiple cell ranges to create several spans at the same time. Note that if cell ranges overlap, only the first cell range is used.

> - 結合セルでは、左上端セルのデータのみが表示されます。 他のセルのデータは結合が解除されるまで非表示になります。
> - 結合セル内の非表示データは、フォーミュラを使用することでアクセス可能です (フォーミュラは左上端セルから始まります)。

#### 例題

To span the First quarter and Second quarter cells across the two cells beside them, and the South area cell across the two rows below it:

![initial-document](assets/en/ViewPro/vp-add-span.png)

```4d
 // "First quarter" レンジ
 $q1:=VP Cells("ViewProArea";2;3;3;1)

  // "Second quarter" レンジ
 $q2:=VP Cells("ViewProArea";5;3;3;1)

  // "South area" レンジ
 $south:=VP Cells("ViewProArea";0;5;1;3)

 VP ADD SPAN(VP Combine ranges($q1;$q2;$south))
```

![vp-add-span-result](assets/en/ViewPro/vp-add-span-2.png)

#### 参照

[4D View Pro Range Object Properties](getting-started.md#using-range-objects)<br/>[VP Get spans](#vp-get-spans)<br/>[VP REMOVE SPAN](#vp-remove-span)


### VP ADD STYLESHEET

<!-- REF #_method_.VP ADD STYLESHEET.Syntax -->**VP ADD STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text ; *styleObj* : Object { ; *scope* : Integer } ) 
<!-- END REF -->  

<!-- REF #_method_.VP ADD STYLESHEET.Params -->

| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| styleName  | テキスト   | -> | スタイルの名前                      |
| styleObj   | オブジェクト | -> | 属性設定を定義するオブジェクト              |
| scope      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
<!-- END REF -->  

#### 説明

The `VP ADD STYLESHEET` command <!-- REF #_method_.VP ADD STYLESHEET.Summary -->creates or modifies the *styleName* style sheet based upon the combination of the properties specified in *styleObj* in the open document<!-- END REF -->. If a style sheet with the same name and scope already exists in the document, this command will overwrite it with the new values.

> このコマンドで作成されたスタイルシートはドキュメントとともに保存されます。


*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *styleName* parameter lets you assign a name to the style sheet. If the name is already used within the same scope, the new style sheet replaces the existing one. ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

Within the *styleObj*, designate the settings for the style sheet (e.g., font, text decoration, alignment, borders, etc.). For the full list of style properties, see [Style object properties](configuring.md#style-objects-properties).

You can designate where to define the style sheet in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*   `vk current sheet`
*   `vk workbook`

If a *styleName* style sheet is defined at the workbook level and at a sheet level, the sheet level has priority over the workbook level when the style sheet is set.

To apply the style sheet, use the [VP SET DEFAULT STYLE](#vp-set-default-style) or [VP SET CELL STYLE](#vp-set-cell-style) commands.


#### 例題

以下のコードは:

```4d
$styles:=New object
$styles.backColor:="green"

// 境界線オブジェクト
$borders:=New object("color";"green";"style";vk line style medium dash dot)

$styles.borderBottom:=$borders
$styles.borderLeft:=$borders
$styles.borderRight:=$borders
$styles.borderTop:=$borders

VP ADD STYLESHEET("ViewProArea";"GreenDashDotStyle";$styles)

// スタイルを適用します
VP SET CELL STYLE(VP Cells("ViewProArea";1;1;2;2);New object("name";"GreenDashDotStyle"))
```

will create and apply the following style object named *GreenDashDotStyle*:

```
{
    backColor:green,
    borderBottom:{color:green,style:10},
    borderLeft:{color:green,style:10},
    borderRight:{color:green,style:10},
    borderTop:{color:green,style:10}
}
```

#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


### VP All

<!-- REF #_method_.VP ALL.Syntax -->**VP All** ( *vpAreaName* : Text { ; *sheet* : Integer } )  : Object<!-- END REF -->  

<!-- REF #_method_.VP ALL.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | すべてのセルのレンジオブジェクト            |
<!-- END REF -->  

#### 説明


The `VP ALL` command <!-- REF #_method_.VP ALL.Summary -->returns a new range object referencing all cells<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

You want to define a range object for all of the cells of the current spreadsheet:

```4d
$all:=VP All("ViewProArea") // カレントシートの全セル
```

#### 参照

[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


## C

### VP Cell

<!-- REF #_method_.VP Cell.Syntax -->**VP Cell** ( *vpAreaName* ; *column* : Integer ; *row* : Integer ; Text { ; *sheet* : Integer } )  : Object<!-- END REF -->  

<!-- REF #_method_.VP Cell.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| column     | 倍長整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| row        | 倍長整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | すべてのセルのレンジオブジェクト            |
<!-- END REF -->  

#### 説明

The `VP Cell` command <!-- REF #_method_.VP Cell.Summary -->returns a new range object referencing a specific cell<!-- END REF -->.

> このコマンドは単一セルのレンジを想定しています。 複数セルに対するレンジオブジェクトを作成するには、[VP Cells](#vp-cells) コマンドを使用します。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *column* parameter defines the column of the cell range's position. Pass the column index in this parameter.

The *row* parameter defines the row of the cell range's position. Pass the row index in this parameter.

In the optional *sheet* parameter, you can indicate the index of the sheet where the range will be defined. If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

> インデックスは 0 起点です。

#### 例題

You want to define a range object for the cell shown below (on the current spreadsheet):

![vp-cell](assets/en/ViewPro/cmd_vpCell.png)

The code would be:

```4d
$cell:=VP Cell("ViewProArea";2;4) // C5
```

#### 参照

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


### VP Cells

<!-- REF #_method_.VP Cells.Syntax -->**VP Cells** ( *vpAreaName* : Text ; *column*: Integer ; *row*: Integer ; *columnCount* : Integer ; *rowCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

<!-- REF #_method_.VP Cells.Params -->

| 引数          | タイプ    |    | 説明                          |
| ----------- | ------ | -- | --------------------------- |
| vpAreaName  | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| column      | 整数     | -> | カラムのインデックス                  |
| row         | 整数     | -> | 行のインデックス                    |
| columnCount | 整数     | -> | カラム数                        |
| rowCount    | 整数     | -> | 行数                          |
| sheet       | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値         | オブジェクト | <- | 複数セルのレンジオブジェクト              |
<!-- END REF -->  

#### 説明


The `VP Cells` command <!-- REF #_method_.VP Cells.Summary -->returns a new range object referencing specific cells<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *column* parameter defines the first column of the cell range. Pass the column index (counting begins at 0) in this parameter. If the range is within multiple columns, you should also use the *columnCount* parameter.

In the *row* parameter, you can define the row(s) of the cell range's position. Pass the row index (counting begins at 0) in this parameter. If the range is within multiple rows, you should also use the *rowCount* parameter.

The *columnCount* parameter allows you to define the total number of columns the range is within. *columnCount* must be greater than 0.

The *rowCount* parameter allows you to define the total number of rows the range is within. *rowCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.


#### 例題

You want to define a range object for the following cells (on the current sheet):

![](assets/en/ViewPro/vp-cells.png)

The code would be:

```4d
$cells:=VP Cells("ViewProArea";2;4;2;3) // C5 から D7
```

#### 参照

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)


### VP Column

<!-- REF #_method_.VP Column.Syntax -->**VP Column** ( *vpAreaName* : Text ; *column*: Integer ; *columnCount* : Integer { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Column.Params -->

| 引数          | タイプ    |    | 説明                          |
| ----------- | ------ | -- | --------------------------- |
| vpAreaName  | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| column      | 整数     | -> | カラムのインデックス                  |
| columnCount | 整数     | -> | カラム数                        |
| sheet       | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値         | オブジェクト | <- | 複数セルのレンジオブジェクト              |
<!-- END REF -->  

#### 説明


The `VP Column` command <!-- REF #_method_.VP Column.Summary -->returns a new range object referencing a specific column or columns<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *column* parameter defines the first column of the column range. Pass the column index (counting begins at 0)  in this parameter. If the range contains multiple columns, you should also use the optional *columnCount* parameter.

The optional *columnCount* parameter allows you to define the total number of columns of the range. *columnCount* must be greater than 0. If omitted, the value will be set to 1 by default and a column type range is created.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass `vk current sheet`, the current spreadsheet is used by default.

#### 例題

You want to define a range object for the column shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpColumn.PNG)

The code would be:

```4d
 $column:=VP Column("ViewProArea";3) // カラム D
```

#### 参照

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)



### VP COLUMN AUTOFIT

<!-- REF #_method_.VP COLUMN AUTOFIT.Syntax -->**VP COLUMN AUTOFIT** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP COLUMN AUTOFIT.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP COLUMN AUTOFIT` command <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->automatically sizes the column(s) in *rangeObj* according to their contents<!-- END REF -->.

In *rangeObj*, pass a range object containing a range of the columns whose size will be automatically handled.

#### 例題

The following columns are all the same size and don't display some of the text:

![](assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

Selecting the columns and running this code:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

... resizes the columns to fit the size of the contents:

![](assets/en/ViewPro/cmd_vpColumnAutoFit2.PNG)

#### 参照

[VP ROW AUTOFIT](#vp-row-autofit)

### VP Combine Ranges


<!-- REF #_method_.VP Combine Ranges.Syntax -->**VP Combine Ranges** ( *rangeObj* : Object ; *otherRangeObj* : Object {;...*otherRangeObjN* : Object }  ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Combine Ranges.Params -->

| 引数            | タイプ    |    | 説明                  |
| ------------- | ------ | -- | ------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト           |
| otherRangeObj | オブジェクト | -> | レンジオブジェクト           |
| 戻り値           | オブジェクト | <- | 統合されたレンジを格納したオブジェクト |

<!-- END REF -->  

#### 説明

The `VP Combine Ranges` command <!-- REF #_method_.VP Combine Ranges.Summary -->returns a new range object that incorporates two or more existing range objects<!-- END REF -->. All of the ranges must be from the same 4D View Pro area.

In *rangeObj*, pass the first range object.

In *otherRangeObj*, pass another range object(s) to combine with *rangeObj*.
> このコマンドは *rangeObj* および *otherRangeObj* のオブジェクトを参照によって組み合わせます。

#### 例題

You want to combine cell, column, and row range objects in a new, distinct range object:


```4d
 $cell:=VP Cell("ViewProArea";2;4) // C5
 $column:=VP Column("ViewProArea";3) // カラム D
 $row:=VP Row("ViewProArea";9) // 行 10

 $combine:=VP Combine ranges($cell;$column;$row)
```

#### 参照

[VP All](#vp-all)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<br/>[VP Row](#vp-row)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)

### VP Convert from 4D View

<!-- REF #_method_.VP Convert from 4D View.Syntax -->**VP Convert from 4D View** ( *4DViewDocument* : Blob ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Convert from 4D View.Params -->

| 引数             | タイプ    |    | 説明                 |
| -------------- | ------ | -- | ------------------ |
| 4DViewDocument | BLOB   | -> | 4D View ドキュメント     |
| 戻り値            | オブジェクト | <- | 4D View Pro オブジェクト |	


<!-- END REF -->  

#### 説明

The `VP Convert from 4D View` command <!-- REF #_method_.VP Convert from 4D View.Summary -->allows you to convert a legacy 4D View document into a 4D View Pro object<!-- END REF -->.
> 旧式の 4D View プラグインが現環境にインストールされていなくても、このコマンドは使用可能です。


In the *4DViewDocument* parameter, pass a BLOB variable or field containing the 4D View document to convert. The command returns a 4D View Pro object into which all the information originally stored within the 4D View document is converted to 4D View Pro attributes.

#### 例題


You want to get a 4D View Pro object from a 4D View area stored in a BLOB:


```4d
C_OBJECT($vpObj)
$vpObj:=VP Convert from 4D View($pvblob)
```



### VP Convert to picture

<!-- REF #_method_.VP Convert to picture.Syntax -->**VP Convert to picture** ( *vpObject* : Object {; *rangeObj* : Object} ) : Picture<!-- END REF -->  

<!-- REF #_method_.VP Convert to picture.Params -->

| 引数       | タイプ    |    | 説明                              |
| -------- | ------ | -- | ------------------------------- |
| vpObject | オブジェクト | -> | 変換するエリアを格納した 4D View Pro オブジェクト |
| rangeObj | オブジェクト | -> | レンジオブジェクト                       |
| 戻り値      | オブジェクト | <- | エリアの SVGピクチャー                   |	


<!-- END REF -->  

#### 説明

The `VP Convert to picture` command <!-- REF #_method_.VP Convert to picture.Summary -->converts the *vpObject* 4D View Pro object (or the *rangeObj* range within *vpObject*) to a SVG picture<!-- END REF -->.

This command is useful, for example:

*   4D View Pro ドキュメントを 4D Write Pro ドキュメントなど、他のドキュメントに埋め込みたい場合
*   4D View Pro ドキュメントを、4D View Pro エリアに読み込まずに印刷したい場合

In *vpObject*, pass the 4D View Pro object that you want to convert. This object must have been previously parsed using [VP Export to object](#vp-export-to-object) or saved using [VP EXPORT DOCUMENT](#vp-export-document).
> 4D View Pro エリアに含まれている式や書式 ([セルフォーマット](configuring.md#セルフォーマット) 参照) が正常に書き出されるよう、少なくともそれらが一度は評価されていることが SVG変換プロセスには必要です。 事前に評価されていないドキュメントを変換した場合、式や書式が予期せぬ形にレンダリングされている可能性があります。

In *rangeObj*, pass a range of cells to convert. By default, if this parameter is omitted, the whole document contents are converted.

Document contents are converted with respect to their viewing attributes, including formats (see note above), visibility of headers, columns and rows. The conversion of the following elements is supported:

*   テキスト: スタイル / フォント / サイズ / 文字揃え / 向き / 回転 / 書式
*   セルの背景: カラー / 画像
*   セルの罫線: 太さ / カラー / スタイル
*   セルの結合
*   ピクチャー
*   行高さ
*   カラム幅
*   非表示のカラム / 行
> 枠線の表示状態は [VP SET PRINT INFO](#vp-set-print-info) で定義されたドキュメント属性に依存します。

#### ファンクションの戻り値

The command returns a picture in SVG format.


#### 例題

You want to convert a 4D View Pro area in SVG, preview the result, and send it to a picture variable:


```4d
C_OBJECT($vpAreaObj)
C_PICTURE($vPict)
$vpAreaObj:=VP Export to object("ViewProArea")
$vPict:=VP Convert to picture($vpAreaObj) // エリア全体を書き出します
```

#### 参照

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP SET PRINT INFO](#vp-set-print-info)

### VP Copy to object

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details>

<!-- REF #_method_.Copy to object.Syntax -->**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object
<!-- END REF -->  

<!-- REF #_method_.Copy to object.Params -->

| 引数       | タイプ    |    | 説明                              |
| -------- | ------ | -- | ------------------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト                       |
| options  | オブジェクト | -> | 追加のオプション                        |
| 戻り値      | オブジェクト | <- | 返されるオブジェクト。 コピーされたデータが格納されています。 |
<!-- END REF -->  
#### 説明

The `VP Copy to object` command <!-- REF #_method_.Copy to object.Summary -->copies the contents, style and formulas from *rangeObj* to an object<!-- END REF -->.

In *rangeObj*, pass the cell range with the values, formatting, and formulas to copy. If *rangeObj* is a combined range, only the first one is used.

You can pass an optional *options* parameter with the following properties:

| プロパティ       | タイプ  | 説明                                                           |
| ----------- | ---- | ------------------------------------------------------------ |
| copy        | ブール  | コマンド実行後もコピーされた値、書式、数式が保持するには *true* (デフォルト)。 削除するには *false*。 |
| copyOptions | 倍長整数 | コピーまたは移動する内容を指定します。 とりうる値: <p><table><tr><th>値</th><th>説明</th></tr><tr><td>`vk clipboard options all` (デフォルト)</td><td>値、フォーマット、フォーミュラを含むすべてのデータオブジェクトをコピーします。</td></tr><tr><td>`vk clipboard options formatting`</td><td>フォーマットだけをコピーします。</td></tr><tr><td>`vk clipboard options formulas`</td><td>フォーミュラだけをコピーします。</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>フォーミュラとフォーマットをコピーします。</td></tr><tr><td>`vk clipboard options values`</td><td>値だけをコピーします。</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>値とフォーマットをコピーします。</td></tr></table></p>          |

The paste options defined in the [workbook options](#vp-set-workbook-options) are taken into account.

The command returns an object that contains the copied data.

#### 例題

This code sample first stores the contents, values, formatting and formulas from a range to an object, and then pastes them in another range:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

#### 参照

[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## D

### VP DELETE COLUMNS

<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP DELETE COLUMNS.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
<!-- END REF -->  

#### 説明

The `VP DELETE COLUMNS` command <!-- REF #_method_.VP DELETE COLUMNS.Summary -->removes the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of columns to remove. If the passed range contains:

*   レンジにカラムと行の両方が含まれる場合、カラムのみが削除されます。
*   レンジに行しか含まれていない場合、コマンドは何もしません。
> カラムは右から左に向かって削除されます。


#### 例題

To delete columns selected by the user (in the image below columns B, C, and D):

![](assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

use the following code:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### 参照

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


### VP DELETE ROWS

<!-- REF #_method_.VP DELETE ROWS.Syntax -->**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF -->  

<!-- REF #_method_.VP DELETE ROWS.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
<!-- END REF -->  

#### 説明

The `VP DELETE ROWS` command <!-- REF #_method_.VP DELETE ROWS.Summary -->removes the rows  in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of rows  to remove. If the passed range contains:

*   レンジにカラムと行の両方が含まれる場合、行のみが削除されます。
*   レンジにカラムしか含まれていない場合、コマンドは何もしません。
> 行は下から上に向かって削除されます。


#### 例題

To delete rows selected by the user (in the image below rows 1, 2, and 3):

![](assets/en/ViewPro/cmd_vpDeleteRows.PNG)

use the following code:

```4d
 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### 参照

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


## E

### VP EXPORT DOCUMENT

<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF -->  

<!-- REF #_method_.VP EXPORT DOCUMENT.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| filePath   | テキスト   | -> | ドキュメントのパス名              |
| paramObj   | オブジェクト | -> | 書き出しのオプション              |
<!-- END REF -->  

#### 説明

The `VP EXPORT DOCUMENT` command <!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->exports the 4D View Pro object attached to the 4D View Pro area *vpAreaName* to a document on disk according to the *filePath* and *paramObj* parameters<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In *filePath*, pass the destination path and name of the document to be exported. If you don't specify a path, the document will be saved at the same level as the Project folder.

You can specify the exported file's format by including an extension after the document's name:

* 4D View Pro (".4vp")
* Microsoft Excel (".xlsx")
* PDF (".pdf")
* CSV (".txt" または ".csv")

If the extension is not included, but the format is specified in *paramObj*, the exported file will have the extension that corresponds to the format, except for the CSV format (no extension is added in this case).

The optional *paramObj* parameter allows you to define multiple properties for the exported 4D View Pro object, as well as launch a callback method when the export has completed.


| プロパティ              | タイプ     | 説明                                                                                                                                                                                                                                                                                                                                                             |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| format             | テキスト    | (任意) 渡した場合、書き出されるファイルの形式を指定します: ".4VP" (デフォルト)、 ".csv"、".xlsx"、または ".pdf"。 次の定数が利用できます:<li>`vk 4D View Pro format`</li><li>`vk csv format`</li><li>`vk MS Excel format`</li><li>`vk pdf format`</li>4D は必要に応じて適切な拡張子をファイル名に追加します。 指定した形式が *filePath* 引数として渡された拡張子と合致しない場合、指定形式の拡張子は *filePath* 引数の後ろに追加されます。 形式が指定されず、*filePath* 引数にも拡張子がなかった場合には、デフォルトのファイル形式が使用されます。 |
| password           | テキスト    | Microsoft Excel のみ (任意) - MS Excel ドキュメントの保護に使用されるパスワード。                                                                                                                                                                                                                                                                                                       |
| formula            | object  | 書き出しが完了した際に呼び出されるコールバックメソッド名。 書き出しが非同期でおこなわれる (PDF および Excel 形式での書き出しが該当します) 場合かつ、書き出し後にコードを実行したい場合には、コールバックメソッドが必要です。 コールバックメソッドは [`Formula`](https://doc.4d.com/4dv19/help/command/ja/page1597.html) コマンドと使用する必要があります (詳細は以下を参照ください)。                                                                                                                        |
| valuesOnly         | boolean | フォーミュラ (あれば) の値のみを書き出すかどうかを指定します。                                                                                                                                                                                                                                                                                                                              |
| includeFormatInfo  | boolean | フォーマット (書式) 情報を含めるには true、それ以外の場合には false (デフォルトは true)。 フォーマット情報は特定の場合 (例: SVGへの書き出しなど) において有用です。 一方で、このプロパティを **false** に設定することで書き出し時間を短縮することもできます。                                                                                                                                                                                                          |
| sheetIndex         | number  | PDF のみ (任意) - 書き出すシートのインデックス (0 起点)。 -2 = 表示されている全シート (デフォルト)、-1 = カレントシートのみ                                                                                                                                                                                                                                                                                   |
| pdfOptions         | object  | PDFのみ (任意) - pdf 書き出しのオプション <p><table><tr><th>プロパティ</th><th>タイプ</yh><th>説明</th></tr><tr><td>creator</td><td>テキスト</td><td>変換されたドキュメントの変換元を作成したアプリケーション名。</td></tr><tr><td>title</td><td>テキスト</td><td>ドキュメント名。</td></tr><tr><td>author</td><td>テキスト</td><td>ドキュメントの作成者の名前。</td></tr><tr><td>keywords</td><td>テキスト</td><td>ドキュメントに割り当てられたキーワード。</td></tr><tr><td>subject</td><td>テキスト</td><td>ドキュメントの題名。</td></tr></table></p>                                                                                                                                                                                                                                                                                                          |
| csvOptions         | object  | CSVのみ (任意) - csv 書き出しのオプション <p><table><tr><th>プロパティ</th><th>タイプ</th><th>説明</th></tr><tr><td>range</td><td>object</td><td>複数セルのレンジオブジェクト</td></tr><tr><td>rowDelimiter</td><td>テキスト</td><td>行の区切り文字。 デフォルト: "\r\n"</td></tr><tr><td>columnDelimiter</td><td>テキスト</td><td>カラムの区切り文字。 デフォルト: ","</td></tr></table></p>                                                                                                                                                                                                                                                                                                          |
| \<customProperty> | any     | コールバックメソッドの $3 引数を通して利用可能な任意のプロパティ。                                                                                                                                                                                                                                                                                                                            |

**Notes about Excel format**:

* 4D View Pro ドキュメントを Microsoft Excel 形式のファイルに書き出す場合、一部の設定が失われる可能性があります。 たとえば、4Dメソッドとフォーミュラは Excel ではサポートされません。 [GrapeCity にある一覧](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) にて、その他の設定を確認することができます。
* このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の *formula* プロパティを使用します。


**Notes about PDF format**:

* 4D View Pro ドキュメントを PDF 形式に書き出す場合、ドキュメントで使用されているフォントは自動的に PDF ファイルに埋め込まれます。 ただし、埋め込み可能なのは Unicode マップを持つ OpenType フォント (.OTF または .TTF ファイル) のみです。 フォントに対して有効なフォントファイルが見つからない場合、デフォルトのフォントが代用されます。
* このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の *formula* プロパティを使用します。

**Notes about CSV format**:

* 4D View Pro ドキュメントを CSV 形式に書き出す場合、テキストと値のみが保存されるため、一部の設定が失われる可能性があります。
* すべての値は二重引用符で括られた形で保存されます。 ユーザー定義区切りの値 (DSV) に関する詳細については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。

Once the export operation is finished, `VP EXPORT DOCUMENT` automatically triggers the execution of the method set in the *formula* property of the *paramObj*, if used.

#### Passing a callback method (formula)

When including the optional *paramObj* parameter, the `VP EXPORT DOCUMENT` command allows you to use the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command to call a 4D method which will be executed once the export has completed. The callback method will receive the following values in local variables:

| 変数 |               | タイプ     | 説明                                    |
| -- | ------------- | ------- | ------------------------------------- |
| $1 |               | テキスト    | 4D View Pro オブジェクト名                   |
| $2 |               | テキスト    | 書き出された 4D View Pro オブジェクトのファイルパス      |
| $3 |               | object  | コマンドの *paramObj* 引数への参照               |
| $4 |               | object  | メソッドから返されるステータスメッセージを格納したオブジェクト       |
|    | .success      | boolean | 書き出しに成功した場合は true 、それ以外の場合は false     |
|    | .errorCode    | integer | エラーコード。 4D あるいは JavaScript から返されます。   |
|    | .errorMessage | テキスト    | エラーメッセージ。 4D あるいは JavaScript から返されます。 |


#### 例題 1

You want to export the contents of the "VPArea" area to a 4D View Pro document on disk:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
// MyExport.4VP がディスク上に保存されます
```


#### 例題 2

You want to export the current sheet in PDF:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```


#### 例題 3

You want to export a 4D View Pro document in ".xlsx" format and call a method that will launch Microsoft Excel with the document open once the export has completed:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format // ".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** method:

```4d
 C_TEXT($1;$2)
 C_OBJECT($3;$4)
 $areaName:=$1
 $filePath:=$2
 $params:=$3
 $status:=$4

 If($status.success=False)
    ALERT($status.errorMessage)
 Else
    LAUNCH EXTERNAL PROCESS("C:\\Program Files\\Microsoft Office\\Office15\\excel "+$filePath)
 End if
```

#### 例題 4

You want to export the current sheet to a `.txt` file with pipe-separated values:

![example-export-csv](assets/en/ViewPro/vp-export-document-csv.png)

```4d 
var $params : Object
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
$params.rowDelimiter:="\n"
$params.columnDelimiter:="|"
VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\data.txt";New object("format";vk csv format;"csvOptions";$params))
```

このようになります:

![example-export-csv](assets/en/ViewPro/vp-export-document-csv-result.png)

#### 参照

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Export to object](#vp-export-to-object)<br/>[VP Column](#vp-import-document)<br/>[VP Print](#vp-print)

### VP Export to object

<!-- REF #_method_.VP Export to object.Syntax -->**VP Export to object** ( *vpAreaName* : Text {; *option* : Object} ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Export to object.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| option     | オブジェクト | -> | 書き出しのオプション              |
| 戻り値        | オブジェクト | <- | 4D View Pro オブジェクト      |
<!-- END REF -->  

#### 説明

The `VP Export to object` command <!-- REF #_method_.VP Export to object.Summary --> returns the 4D View Pro object attached to the 4D View Pro area *vpAreaName*<!-- END REF -->. You can use this command for example to store the 4D View Pro area in a 4D database object field.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the *option* parameter, you can pass the following export option, if required:


| プロパティ             | タイプ     | 説明                                                                                                                                                        |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo | boolean | フォーマット (書式) 情報を含めるには true、それ以外の場合には false (デフォルトは **true**)。 フォーマット情報は特定の場合 (例: SVGへの書き出しなど) において有用です。 一方で、このプロパティを **false** に設定することで書き出し時間を短縮することもできます。 |

For more information on 4D View Pro objects, please refer to the [4D View Pro object](configuring.md#4d-view-pro-object) paragraph.


#### 例題 1

You want to get the "version" property of the current 4D View Pro area:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```


#### 例題 2

You want to export the area, excluding formatting information:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### 参照

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)

## F

### VP Find


<!-- REF #_method_.VP Find.Syntax -->**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Find.Params -->

| 引数              | タイプ    |    | 説明              |
| --------------- | ------ | -- | --------------- |
| rangeObj        | オブジェクト | -> | レンジオブジェクト       |
| searchValue     | テキスト   | -> | 検索値             |
| searchCondition | オブジェクト | -> | 検索条件を格納したオブジェクト |
| replaceValue    | テキスト   | -> | 置き換え値           |
| 戻り値             | オブジェクト | <- | レンジオブジェクト       |
<!-- END REF -->  

#### 説明
The `VP Find` command <!-- REF #_method_.VP Find.Summary -->searches the *rangeObj* for the *searchValue*<!-- END REF -->. Optional parameters can be used to refine the search and/or replace any results found.

In the *rangeObj* parameter, pass an object containing a range to search.

The *searchValue* parameter lets you pass the text to search for within the *rangeObj*.

You can pass the optional *searchCondition* parameter to specify how the search is performed. 以下のオブジェクトプロパティがサポートされています:


| プロパティ       | タイプ | 説明                                                                                                          |
| ----------- | --- | ----------------------------------------------------------------------------------------------------------- |
| afterColumn | 整数  | 検索を開始するカラムの直前のカラムの番号。 *rangeObj* 引数が統合されたレンジの場合、渡されるカラムの番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初) |
| afterRow    | 整数  | 検索を開始する行の直前の行番号。 *rangeObj* 引数が統合されたレンジの場合、渡される行番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初)         |
| all         | ブール | <li>true - *rangeObj* 内で *searchValue* の値に合致するセルはすべて返されます。</li><li>false - (デフォルト値) *rangeObj* 内で *searchValue* の値に合致する最初のセルのみが返されます。</li>                                                        |
| flags       | 整数  | <table><tr><td>`vk find flag exact match`</td><td>セルの中身全体が検索値と完全に一致する必要があります</td></tr><tr><td>`vk find flag ignore case`</td><td>文字の大小は区別されません。 例: "a" と "A" は同じとみなされます。</td></tr><tr><td>`vk find flag none`</td><td>検索フラグは指定されていません (デフォルト)。</td></tr><tr><td>`vk find flag use wild cards`</td><td>検索文字列においてワイルドカード文字 (\*,?) を使用できます。 ワイルドカードは、すべての文字列の比較に使用することができ、ワイルドカードによって置き換わる文字の数は指定されません:<li>\* は 0 から複数文字に使用可能です (例: "bl*" を検索した場合、"bl"、"black"、"blob" などが合致します)。</li><li>? は単一文字に使用可能です (例: "h?t" を検索した場合、"hot"、"hit" などが合致します)。</li></td></tr></table><p>フラグは組み合わせることができます。 たとえば:<p> <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code></p>     |
| order       | 整数  | <table><tr><td>`vk find order by columns`</td><td>検索がカラムごとに実行されます。 カラムの各行が検索されたあとに次のカラムへと移動します。</td></tr><tr><td>`vk find order by rows`</td><td>検索が行ごとに実行されます。 行の各カラムが検索されたあとに次の行へと移動します (デフォルト)。</td></tr></table>                                                                                  |
| target      | 整数  | <table><tr><td>`vk find target formula`</td><td>セルフォーミュラ内で検索がおこなわれます。</td></tr><tr><td>`vk find target tag`</td><td>セルタグ内で検索がおこなわれます。</td></tr><tr><td>`vk find target text`</td><td>セルテキスト内で検索がおこなわれます (デフォルト)。</td></tr></table><p>フラグは組み合わせることができます。 たとえば:<p> <code>$search.target:=vk find target formula+vk find target text</code></p>     |

In the optional *replaceValue* parameter, you can pass text to take the place of any instance of the text in *searchValue* found in the *rangeObj*.


#### 返されるオブジェクト

The function returns a range object describing each search value that was found or replaced. An empty range object is returned if no results are found.


#### 例題 1

To find the first cell containing the word "Total":

```4d
var $range;$result : Object

$range:=VP All("ViewProArea")

$result:=VP Find($range;"Total")
```


#### 例題 2

To find "Total" and replace it with "Grand Total":

```4d
var $range;$condition;$result : Object

$range:=VP All("ViewProArea")

$condition:=New object
$condition.target:=vk find target text
$condition.all:=True // ドキュメント全体を検索します
$condition.flags:=vk find flag exact match

  // カレントシートにおいて "Total" のみを格納しているセルを "Grand Total" で置き換えます
$result:=VP Find($range;"Total";$condition;"Grand Total")

  // 戻り値のレンジオブジェクトが空かどうかをチェックします
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```


### VP FLUSH COMMANDS

<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF -->  

<!-- REF #_method_.VP FLUSH COMMANDS.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |
<!-- END REF -->  

#### 説明

The `VP FLUSH COMMANDS` command <!-- REF #_method_.VP FLUSH COMMANDS.Summary -->immediately executes stored commands and clears the command buffer<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In order to increase performance and reduce the number of requests sent, the 4D View Pro commands called by the developer are stored in a command buffer. When called, `VP FLUSH COMMANDS` executes the commands as a batch when leaving the method and empties the contents of the command buffer.

#### 例題

You want to trace the execution of the commands and empty the command buffer:

```4d
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```



### VP Font to object

<!-- REF #_method_.VP Font to object.Syntax -->**VP Font to object** (  *font* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Font to object.Params -->

| 引数   | タイプ  |    | 説明              |
| ---- | ---- | -- | --------------- |
| font | テキスト | -> | フォントのショートハンド文字列 |
<!-- END REF -->  

#### 説明

The `VP Font to object` utility command <!-- REF #_method_.VP Font to object.Summary -->returns an object from a font shorthand string<!-- END REF -->. This object can then be used to set or get font property settings via object notation.

In the *font* parameter, pass a font shorthand string to specify the different properties of a font (e.g., "12 pt Arial"). You can learn more about font shorthand strings [in this page](https://www.w3schools.com/cssref/pr_font_font.asp) for example.

The returned object contains defined font attributes as properties. For more information about the available properties, see the [VP Object to font](#vp-object-to-font) command.

#### 例題 1

This code:

```4d
$font:=VP Font to object("16pt arial")
```

will return the following $font object:

```4d
{

family:arial
size:16pt
}
```


#### 例題 2

See example for [`VP Object to font`](#vp-object-to-font).


#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)



## G

### VP Get active cell

<!-- REF #_method_.VP Get active cell.Syntax -->**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get active cell.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 単一セルのレンジオブジェクト              |
<!-- END REF -->  

#### 説明

The `VP Get active cell` command <!-- REF #_method_.VP Get active cell.Summary -->returns a new range object referencing the cell which has the focus and where new data will be entered (the active cell)<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題


![](assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

The following code will retrieve the coordinates of the active cell:

```4d
$activeCell:=VP Get active cell("myVPArea")

  // 返されるレンジオブジェクトには以下が格納されています:
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)



### VP Get cell style

<!-- REF #_method_.VP Get cell style.Syntax -->**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get cell style.Params -->

| 引数       | タイプ    |    | 説明         |
| -------- | ------ | -- | ---------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト  |
| 戻り値      | オブジェクト | <- | スタイルオブジェクト |
<!-- END REF -->  

#### 説明

The `VP Get cell style` command <!-- REF #_method_.VP Get cell style.Summary -->returns a [style object](configuring.md#style-objects) for the first cell in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range containing the style to retrieve.

*   *rangeObj* 引数としてセルレンジを渡した場合、セルのスタイルが返されます。
*   *rangeObj* 引数として、セルレンジではないレンジを渡した場合、そのレンジ内の最初のセルのスタイルが返されます。
*   *rangeObj* 引数に複数のレンジが含まれている場合、最初のレンジの最初のセルのスタイルのみが返されます。


#### 例題

To get the details about the style in the selected cell (B2):

![](assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

This code:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... will return this object:

```4d
{
  "backColor":"Azure",
  "borderBottom":
   {
     "color":#800080,
     "style":5
   }
  "font":"8pt Arial",
  "foreColor":"red",
  "hAlign":1,
  "isVerticalText":"true",
  "vAlign":0
}
```

#### 参照

[VP GET DEFAULT STYLE](#vp-get-default-style)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP Get column attributes

<!-- REF #_method_.VP Get column attributes.Syntax -->**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get column attributes.Params -->

| 引数       | タイプ    |    | 説明              |
| -------- | ------ | -- | --------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト       |
| 戻り値      | コレクション | <- | カラムプロパティのコレクション |
<!-- END REF -->  

#### 説明

The `VP Get column attributes` command <!-- REF #_method_.VP Get column attributes.Summary -->returns a collection of properties for any column in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the columns whose attributes will be retrieved.

The returned collection contains any properties for the columns, whether or not they have been set by the [VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes) command.


#### 例題

以下のコードは:

```4d
C_OBJECT($range)
C_COLLECTION($attr)

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

... will return a collection of the attributes within the given range:

![](assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### 参照

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get column count

<!-- REF #_method_.VP Get column count.Syntax -->**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get column count.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | カラムの総数                      |
<!-- END REF -->  

#### 説明

The `VP Get column count` command <!-- REF #_method_.VP Get column count.Summary -->returns the total number of columns from the designated *sheet*<!-- END REF -->.

In *vpAreaName*, pass the name property of the 4D View Pro area. 存在しない名前を渡した場合、エラーが返されます。

You can define where to get the column count in the optional *sheet* parameter using the sheet index (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

The following code returns the number of columns in the 4D View Pro area:

```4d
C_Integer($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### 参照

[VP Get row count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get current sheet

<!-- REF #_method_.VP Get current sheet.Syntax -->**VP Get current sheet** ( *vpAreaName* : Text )
<!-- END REF --> 

<!-- REF #_method_.VP Get current sheet.Params -->

| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| ファンクションの戻り値 | 整数   | <- | カレントシートのインデックス          |
<!-- END REF --> 

#### 説明

The `VP Get current sheet` command <!-- REF #_method_.VP Get current sheet.Summary -->returns the index of the current sheet in *vpAreaName*. The current sheet is the selected sheet in the document.
<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

> インデックスは 0 起点です。

#### 例題

When the third sheet is selected:

![third-sheet](assets/en/ViewPro/vp-sheet-3-select.png)

The command returns 2:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### 参照

[VP SET CURRENT SHEET](#vp-set-current-sheet)

### VP Get default style

<!-- REF #_method_.VP Get default style.Syntax -->**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get default style.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | カラムの総数                      |
<!-- END REF -->  

#### 説明

The `VP Get default style` command <!-- REF #_method_.VP Get default style.Summary -->returns a default style object for a sheet<!-- END REF -->. The returned object contains basic document rendering properties as well as the default style settings (if any) previously set by the [VP SET DEFAULT STYLE](#vp-set-default-style) method. For more information about style properties, see [Style Objects & Style Sheets](configuring.md#style-objects--style-sheets).

In *vpAreaName*, pass the name property of the 4D View Pro area. 存在しない名前を渡した場合、エラーが返されます。

You can define where to get the column count in the optional *sheet* parameter using the sheet index (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

To get the details about the default style for this document:

![](assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

This code:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

will return this information in the *$defaultStyle* object:

```4d
{
    backColor:#E6E6FA,
    hAlign:0,
    vAlign:0,
    font:12pt papyrus
}
```

#### 参照

[VP Get cell style](#vp-get-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


### VP Get formula

<!-- REF #_method_.VP Get formula.Syntax -->**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF -->  

<!-- REF #_method_.VP Get formula.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
| 戻り値      | テキスト   | <- | Formula   |
<!-- END REF -->  

#### 説明


The `VP Get formula` command <!-- REF #_method_.VP Get formula.Summary -->retrieves the formula from a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range whose formula you want to retrieve. If *rangeObj* designates multiple cells or multiple ranges, the formula of the first cell is returned. If *rangeObj* is a cell that does not contain a formula, the method returns an empty string.

#### 例題

```4d
  // フォーミュラを設定します
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")

$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```
#### 参照

[VP Get formulas](#vp-get-formulas)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get formula by name

<!-- REF #_method_.VP Get formula by name.Syntax -->**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get formula by name.Params -->

| 引数         | タイプ  |    | 説明                         |
| ---------- | ---- | -- | -------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名    |
| name       | テキスト | -> | 命名レンジの名前                   |
| scope      | 数値   | -> | ターゲットのスコープ (デフォルト=カレントシート) |
| 戻り値        | テキスト | <- | 命名フォーミュラ、または命名レンジの定義       |
<!-- END REF -->  

#### 説明

The `VP Get formula by name` command <!-- REF #_method_.VP Get formula by name.Summary --> returns the formula and comment corresponding to the named range or named formula passed in the *name* parameter, or **null** if it does not exist in the defined scope<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the named range or named formula that you want to get in *name*. Note that named ranges are returned as formulas containing absolute cell references.

You can define where to get the formula in *scope* using either the sheet index (counting begins at 0) or the following constants:

*   `vk current sheet`
*   `vk workbook`


##### 返されるオブジェクト

戻り値のオブジェクトには、以下のプロパティが格納されています:

| プロパティ   | タイプ  | 説明                                                                    |
| ------- | ---- | --------------------------------------------------------------------- |
| formula | テキスト | 命名フォーミュラまたは命名レンジに対応したフォーミュラのテキスト。 命名レンジの場合、フォーミュラは連続した絶対セル参照として返されます。 |
| comment | テキスト | 命名フォーミュラまたは命名レンジに対応したコメント                                             |

#### 例題

```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

$formula:=VP Get formula by name("ViewProArea";"Total1")
  //$formula.formula=Sheet1!$A$1

$formula:=VP Get formula by name("ViewProArea";"Total")
  //$formula=null (存在しない場合)
```

#### 参照

[VP ADD FORMULA NAME](#vp-add-formula-name)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get names](#vp-get-names)

### VP Get formulas

<!-- REF #_method_.VP Get formulas.Syntax -->**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get formulas.Params -->

| 引数       | タイプ    |    | 説明             |
| -------- | ------ | -- | -------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト      |
| 戻り値      | コレクション | <- | フォーミュラ値のコレクション |
<!-- END REF -->  

#### 説明

The `VP Get formulas` command <!-- REF #_method_.VP Get formulas.Summary -->retrieves the formulas from a designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range whose formulas you want to retrieve. If *rangeObj* designates multiple ranges, the formula of the first range is returned. If *rangeObj* does not contain any formulas, the command returns an empty string.

The returned collection is two-dimensional:

*   第1レベルのコレクションは、フォーミュラのサブコレクションを格納しています。 それぞれのサブコレクションは行をあらわします。
*   それぞれのサブコレクションは行におけるセルの値を定義します。 値は、セルのフォーミュラを格納しているテキスト要素です。

#### 例題

You want to retrieve the formulas in the Sum and Average columns from this document:


![](assets/en/ViewPro/cmd_vpGetFormulas.PNG)

You can use this code:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### 参照

[VP Get formula](#vp-get-formula)<br/>[VP Get values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get frozen panes

<!-- REF #_method_.VP Get frozen panes.Syntax -->**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get frozen panes.Params -->

| 引数         | タイプ    |    | 説明                            |
| ---------- | ------ | -- | ----------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名       |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)   |
| 戻り値        | オブジェクト | <- | 固定化されたカラムと行についての情報を格納したオブジェクト |
<!-- END REF -->  

#### 説明

The `VP Get frozen panes` command <!-- REF #_method_.VP Get frozen panes.Summary -->returns an object with information about the frozen columns and rows in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


##### 返されるオブジェクト

The command returns an object describing the frozen columns and rows. このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ               | タイプ | 説明                 |
| ------------------- | --- | ------------------ |
| columnCount         | 整数  | シートの左側にある固定化されたカラム |
| trailingColumnCount | 整数  | シートの右側にある固定化されたカラム |
| rowCount            | 整数  | シートの上側にある固定化された行   |
| trailingRowCount    | 整数  | シートの下側にある固定化された行   |

#### 例題


You want to retrieve information about the number of frozen columns and rows:

```4d
var $panesObj : Object

$panesObj:=VP Get frozen panes("ViewProArea")
```

The returned object contains, for example:

![](assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### 参照

[VP SET FROZEN PANES](#vp-set-frozen-panes)

### VP Get names

<!-- REF #_method_.VP Get names.Syntax -->**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get names.Params -->

| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| scope      | 数値     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
| 戻り値        | コレクション | <- | 定義されたスコープ内に存在する名前            |
<!-- END REF -->  

#### 説明

The `VP Get names` command <!-- REF #_method_.VP Get names.Summary -->returns a collection of all defined "names" in the current sheet or in the scope designated by the *scope* parameter<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

You can define where to get the names in *scope* using either the sheet index (counting begins at 0) or the following constants:

*   `vk current sheet`
*   `vk workbook`

##### 返されるコレクション

The returned collection contains one object per name. The following object properties can be returned:

| プロパティ               | タイプ  | 説明             |
| ------------------- | ---- | -------------- |
| result\[ ].name    | テキスト | セルまたはレンジ名      |
| result\[ ].formula | テキスト | formula        |
| result\[ ].comment | テキスト | 名前に割り当てられたコメント |

Available properties depend on the type of the named element (named cell, named range, or named formula).

#### 例題

```4d
var $list : Collection
$list:=VP Get names("ViewProArea";2) // 3番目のシートにある名前
```

#### 参照

[VP ADD FORMULA NAME](#vp-get-formula)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Name](#vp-name)


### VP Get print info

<!-- REF #_method_.VP Get print info.Syntax -->**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get print info.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 印刷情報のオブジェクト                 |
<!-- END REF -->  

#### 説明

The `VP Get print info` command <!-- REF #_method_.VP Get print info.Summary -->returns an object containing the print attributes of the *vpAreaName*<!-- END REF -->.


Pass the the name of the 4D View Pro area in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0) whose printing attributes you want returned.  省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

This code:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

... returns the print attributes of the 4D View Pro area set in the [VP SET PRINT INFO](#vp-set-print-info) command:

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```

#### 参照

[4D View Pro Print Attributes](configuring.md#print-attributes)<br/>[VP SET PRINT INFO](#vp-set-print-info)


### VP Get row attributes

<!-- REF #_method_.VP Get row attributes.Syntax -->**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get row attributes.Params -->

| 引数       | タイプ    |    | 説明            |
| -------- | ------ | -- | ------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト     |
| 戻り値      | コレクション | <- | 行プロパティのコレクション |
<!-- END REF -->  

#### 説明

The `VP Get row attributes` command <!-- REF #_method_.VP Get row attributes.Summary -->returns a collection of properties for any row in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the rows whose attributes will be retrieved.

The returned collection contains any properties for the rows, whether or not they have been set by the [VP SET ROW ATTRIBUTES](#vp-set-row-attributes) method.


#### 例題

The following code returns a collection of the attributes within the given range:

```4d
var $range : Object
var $attr : Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```


![](assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### 参照

[VP Get column attributes](#vp-get-column-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)


### VP Get row count

<!-- REF #_method_.VP Get row count.Syntax -->**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF -->  

<!-- REF #_method_.VP Get row count.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | 行の総数                        |
<!-- END REF -->  

#### 説明

The `VP Get row count` command <!-- REF #_method_.VP Get row count.Summary -->returns the total number of rows from the designated *sheet*<!-- END REF -->.

In *vpAreaName*, pass the name property of the 4D View Pro area. 存在しない名前を渡した場合、エラーが返されます。

You can define where to get the row count in the optional *sheet* parameter using the sheet index (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

The following code returns the number of rows in the 4D View Pro area:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)


### VP Get selection

<!-- REF #_method_.VP Get selection.Syntax -->**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get selection.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 複数セルのレンジオブジェクト              |
<!-- END REF -->  

#### 説明

The `VP Get selection` command <!-- REF #_method_.VP Get selection.Summary -->returns a new range object referencing the current selected cells<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。



#### 例題

![](assets/en/ViewPro/cmd_vpGetSelection.PNG)

The following code will retrieve the coordinates of all the cells in the current selection:

```4d
$currentSelection:=VP Get selection("myVPArea")

//returns a range object containing:  
//$currentSelection.ranges[0].column=5
//$currentSelection.ranges[0].columnCount=2
//$currentSelection.ranges[0].row=8
//$currentSelection.ranges[0].rowCount=6
```

#### 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP Get sheet count

<!-- REF #_method_.VP Get sheet count.Syntax -->**VP Get sheet count** ( *vpAreaName* : Text ) : Integer
<!-- END REF --> 

<!-- REF #_method_.VP Get sheet count.Params -->

| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| ファンクションの戻り値 | 整数   | <- | Number of sheets        |
<!-- END REF --> 

#### 説明

The `VP Get sheet count` command <!-- REF #_method_.VP Get sheet count.Summary -->returns the number of sheets in the document loaded in *vpAreaName*.
<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

#### 例題

In the following document:

![](assets/en/ViewPro/vp-sheet-3.png)

Get the sheet count and set the current sheet to the last sheet:

```4d
 $count:=VP Get sheet count("ViewProArea")
  //set the current sheet to the last sheet (indexing starts at 0)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](assets/en/ViewPro/vp-sheet-3-select.png)

#### 参照

[VP Get sheet index](#vp-get-sheet-index)<br/>[VP SET SHEET COUNT](#vp-set-sheet-count)

### VP Get sheet index

<!-- REF #_method_.VP Get sheet index.Syntax -->**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer
<!-- END REF --> 

<!-- REF #_method_.VP Get sheet index.Params -->

| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| name        | テキスト | -> | シート名                    |
| ファンクションの戻り値 | 整数   | <- | Sheet index             |
<!-- END REF --> 

#### 説明

The `VP Get sheet index` command <!-- REF #_method_.VP Get sheet index.Summary -->returns the index of a sheet based on its name in *vpAreaName*.
<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *name*, pass the name of the sheet whose index will be returned. If no sheet named *name* is found in the document, the method returns -1.
> インデックスは 0 起点です。

#### 例題

In the following document:

![](assets/en/ViewPro/vp-sheet-index-name.png)

Get the index of the sheet called "Total first quarter":

```4d
$index:=VP Get sheet index("ViewProArea";"Total first quarter") //returns 2
```

#### 参照

[VP Get sheet count](#vp-get-sheet-count)<br/>[VP Get sheet name](#vp-get-sheet-name)

### VP Get sheet name

<!-- REF #_method_.VP Get sheet name.Syntax -->**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text
<!-- END REF --> 


<!-- REF #_method_.VP Get sheet name.Params -->

| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| sheet       | 整数   | -> | Sheet index             |
| ファンクションの戻り値 | テキスト | <- | シート名                    |
<!-- END REF --> 

#### 説明

The `VP Get sheet name` command <!-- REF #_method_.VP Get sheet name.Summary -->returns the name of a sheet based on its index in *vpAreaName*.
<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *sheet*, pass the index of the sheet whose name will be returned.

If the passed sheet index does not exist, the method returns an empty name.
> インデックスは 0 起点です。

#### 例題

Get the name of the third sheet in the document:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### 参照

[VP Get sheet index](#vp-get-sheet-index)

### VP Get sheet options

<!-- REF #_method_.VP Get sheet options.Syntax -->**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get sheet options.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | Sheet options object        |
<!-- END REF -->  

#### 説明

The `VP Get sheet options` command <!-- REF #_method_.VP Get sheet options.Summary -->returns an object containing the current sheet options of the *vpAreaName* area<!-- END REF -->.

Pass the name of the 4D View Pro area in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0). 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 返されるオブジェクト

The method returns an object containing the current values for all available sheet options. An option value may have been modified by the user or by the [VP SET SHEET OPTIONS](#vp-set-sheet-options) method.

To view the full list of the options, see [Sheet Options](configuring.md#sheet-options).

#### 例題

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) //column headers are visible
    ... //do something
End if
```

#### 参照

[4D VIEW PRO SHEET OPTIONS](configuring.md#sheet-options)<br/>[VP SET SHEET OPTIONS](#vp-set-sheet-options)

### VP Get show print lines

<!-- REF #_method_.VP Get show print lines.Syntax -->**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean
<!-- END REF --> 

<!-- REF #_method_.VP Get show print lines.Params -->

| 引数          | タイプ  |    | 説明                                               |
| ----------- | ---- | -- | ------------------------------------------------ |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名                          |
| sheet       | 整数   | <- | Sheet index                                      |
| ファンクションの戻り値 | ブール  | <- | True if print lines are visible, False otherwise |
<!-- END REF --> 

#### 説明

The `VP Get show print lines` command <!-- REF #_method_.VP Get show print lines.Summary -->returns `True` if the print preview lines are visible and `False` if they are hidden.
<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *sheet*, pass the index of the target sheet. If *sheet* is omitted, the command applies to the current sheet.

> インデックスは 0 起点です。

#### 例題

The following code checks if preview lines are displayed or hidden in the document:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### 参照

[VP SET SHOW PRINT LINES](#vp-set-show-print-lines)

### VP Get spans

<!-- REF #_method_.VP Get spans.Syntax -->**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get spans.Params -->

| 引数       | タイプ    |    | 説明                                        |
| -------- | ------ | -- | ----------------------------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト                                 |
| 戻り値      | オブジェクト | <- | Object of cell spans in the defined range |
<!-- END REF -->  

#### 説明

The `VP Get spans` command <!-- REF #_method_.VP Get spans.Summary -->retrieves the cell spans in the designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cell spans you want to retrieve. If *rangeObj* does not contain a cell span, an empty range is returned.


#### 例題

You want to center the text for the spanned cells in this document:

![](assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// Search for all cell spans 
$range:=VP Get spans(VP All("ViewProArea"))

//center text
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### 参照

[VP ADD SPAN](configuring.md#sheet-options)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP Get stylesheet

<!-- REF #_method_.VP Get stylesheet.Syntax -->**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get stylesheet.Params -->

| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| styleName  | テキスト   | -> | スタイルの名前                      |
| scope      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
| 戻り値        | オブジェクト | <- | Style sheet object           |
<!-- END REF -->  

#### 説明

The `VP Get stylesheet` command <!-- REF #_method_.VP Get stylesheet.Summary -->returns the *styleName* style sheet object containing the property values which have been defined<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In *styleName*, pass the name of the style sheet to get.

You can define where to get the style sheet in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*   `vk current sheet`
*   `vk workbook`

#### 例題

以下のコードは:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

... will return the *GreenDashDotStyle* style object from the current sheet:

```4d
{
backColor:green,
borderBottom:{color:green,style:10},
borderLeft:{color:green,style:10},
borderRight:{color:green,style:10},
borderTop:{color:green,style:10}
}
```

#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP ADD STYLESHEET](#vp-set-sheet-options)<br/>[VP Get stylesheets](#vp-get-stylesheets)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)


### VP Get stylesheets

<!-- REF #_method_.VP Get stylesheets.Syntax -->**VP Get stylesheets** ( *vpAreaName* : Text { ; *scope* : Integer } ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get stylesheets.Params -->

| 引数         | タイプ    |    | 説明                                |
| ---------- | ------ | -- | --------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名           |
| scope      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート)      |
| 戻り値        | コレクション | <- | Collection of style sheet objects |
<!-- END REF -->  

#### 説明

The `VP Get stylesheets` command <!-- REF #_method_.VP Get stylesheets.Summary -->returns the collection of defined style sheet objects from the designated *scope*<!-- END REF -->.

In *vpAreaName*, pass the name property of the 4D View Pro area. 存在しない名前を渡した場合、エラーが返されます。

You can define where to get the style sheets in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*   `vk current sheet`
*   `vk workbook`

#### 例題

The following code will return a collection of all the style objects in the current sheet:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

In this case, the current sheet uses two style objects:

```4d
[
   {
     backColor:green,
     borderLeft:{color:green,style:10}, 
     borderTop:{color:green,style:10}, 
     borderRight:{color:green,style:10}, 
     borderBottom:{color:green,style:10}, 
     name:GreenDashDotStyle
   },
   {
     backColor:red,
     textIndent:10,
     name:RedIndent
   }
]
```
#### 参照

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP REMOVE STYLESHEET](#vp-remove-stylesheet)


### VP Get value

<!-- REF #_method_.VP Get value.Syntax -->**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get value.Params -->

| 引数       | タイプ    |    | 説明                             |
| -------- | ------ | -- | ------------------------------ |
| rangeObj | オブジェクト | -> | レンジオブジェクト                      |
| 戻り値      | オブジェクト | <- | Object containing a cell value |
<!-- END REF -->  

#### 説明

The `VP Get value` command <!-- REF #_method_.VP Get value.Summary -->retrieves a cell value from a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range whose value you want to retrieve.

#### 返されるオブジェクト

The object returned will contain the `value` property, as well as a `time` property in case of date value:

| プロパティ | タイプ                                | 説明                                                                        |
| ----- | ---------------------------------- | ------------------------------------------------------------------------- |
| value | Integer, Real, Boolean, Text, Date | Value in the *rangeObj* (except- time)                                    |
| time  | 実数                                 | Time value (in seconds) if *rangeObj* if the value is of the js date type |

If the object returned includes a date or time, it is treated as a datetime and completed as follows:

*   time value - the date portion is completed as December 30, 1899 in dd/MM/yyyy format (30/12/1899)
*   date value - the time portion is completed as midnight in HH:mm:ss format (00:00:00)

If *rangeObj* contains multiple cells or multiple ranges, the value of the first cell is returned. The command returns a null object if the cell is empty.

#### 例題

```4d
$cell:=VP Cell("ViewProArea";5;2)
$value:=VP Get value($cell)
If(Value type($value.value)=Is text)
    VP SET TEXT VALUE($cell;New object("value";Uppercase($value.value))
End if
```

#### 参照

[VP Get values](#vp-get-values)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET VALUES](#vp-set-values)


### VP Get values

<!-- REF #_method_.VP Get values.Syntax -->**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF -->  

<!-- REF #_method_.VP Get values.Params -->

| 引数       | タイプ    |    | 説明                   |
| -------- | ------ | -- | -------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト            |
| 戻り値      | コレクション | <- | Collection of values |
<!-- END REF -->  

#### 説明

The `VP Get values` command <!-- REF #_method_.VP Get values.Summary --> retrieves the values from the designated *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range whose values you want to retrieve. If *rangeObj* includes multiple ranges, only the first range is used.

The collection returned by `VP Get values` contains a two-dimensional collection:

*   Each element of the first-level collection represents a row and contains a subcollection of values
*   Each subcollection contains cell values for the row. Values can be Integer, Real, Boolean, Text, Null. If a value is a date or time, it is returned in an object with the following properties:

    | プロパティ | タイプ | 説明                                                          |
    | ----- | --- | ----------------------------------------------------------- |
    | value | 日付  | Value in the cell (except- time)                            |
    | time  | 実数  | Time value (in seconds) if the value is of the js date type |


Dates or times are treated as a datetime and completed as follows:

* time value - the date portion is completed as December 30, 1899
* date value - the time portion is completed as midnight (00:00:00:000)

#### 例題

You want to get values from C4 to G6:

![](assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### 参照

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get workbook options

<!-- REF #_method_.VP Get workbook options.Syntax -->**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF -->  

<!-- REF #_method_.VP Get workbook options.Params -->
| 引数         | タイプ    |    | 説明                                     |
| ---------- | ------ | -- | -------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                |
| 戻り値        | オブジェクト | <- | Object containing the workbook options |
<!-- END REF -->  

#### 説明

`VP Get workbook options` <!-- REF #_method_.Get workbook options.Summary -->
returns an object containing all the workbook options in *vpAreaName*
<!-- END REF -->

*vpAreaName* には、4D View Pro エリアの名前を渡します。

The returned object contains all the workbook options (default and modified ones), in the workbook.

The list of workbook options is referenced in [`VP SET WORKBOOK OPTIONS`'s description](#vp-set-workbook-options).

#### 例題

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### See Also

[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## I

### VP IMPORT DOCUMENT

<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} ) <!-- END REF -->  

<!-- REF #_method_.VP IMPORT DOCUMENT.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| filePath   | テキスト   | -> | ドキュメントのパス名              |
| paramObj   | オブジェクト | -> | Import options          |

<!-- END REF -->  

#### 説明

The `VP IMPORT DOCUMENT` command <!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->imports and displays the document designated by *filePath* in the 4D View Pro area *vpAreaName*<!-- END REF -->. The imported document replaces any data already inserted in the area.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In *filePath*, pass the path and name of the document to be imported. The following formats are supported :

* 4D View Pro documents (extension ".4vp")
* Microsoft Excel (extension ".xlsx")
* text documents (extension ".txt", ".csv", the document must be in utf-8)

If the document extension is not a recognized extension, such as `.4vp` or `.xlsx`, the document is considered a text document. You must pass a full path, unless the document is located at the same level as the Project folder, in which case you can just pass its name.

> When importing a Microsoft Excel-formatted file into a 4D View Pro document, some settings may be lost. You can verify your settings with [this list from GrapeCity](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html).

An error is returned if the `filePath` parameter is invalid, or if the file is missing or malformed.

The optional *paramObj* parameter allows you to define properties for the imported document:

| 引数         |                 | タイプ    | 説明                                                                                                                                                                                                                                                       |
| ---------- | --------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| formula    |                 | object | A callback method name to be launched when the import has completed. The method must use the [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) command. See [Passing a callback method (formula)](#passing-a-callback-method-formula). |
| password   |                 | テキスト   | Microsoft Excel only (optional) - The password used to protect a MS Excel document.                                                                                                                                                                      |
| csvOptions |                 | object | options for csv import                                                                                                                                                                                                                                   |
|            | range           | object | Cell range that contains the first cell where the data will be written. If the specified range is not a cell range, only the first cell of the range is used.                                                                                            |
|            | rowDelimiter    | テキスト   | 行の区切り文字。 If not present, the delimiter is automatically determined by 4D.                                                                                                                                                                                |
|            | columnDelimiter | テキスト   | カラムの区切り文字。 デフォルト: ","                                                                                                                                                                                                                                    |

> For more information on the CSV format and delimiter-separated values in general, see [this article on Wikipedia](https://en.wikipedia.org/wiki/Delimiter-separated_values)


#### 例題 1

You want to import a default 4D View Pro document stored on the disk when the form is open:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) //4D View Pro area loaded and ready
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### 例題 2

You want to import a password protected Microsoft Excel document into a 4D View Pro area:


```4d
$o:=New object
$o.password:="excel123"

VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

#### 例題 2

You want to import a `.txt` file that uses a comma (",") as delimiter:

![example-import-csv](assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

Here's the result: ![example-import-csv](assets/en/ViewPro/vp-import-document-csv-result.png)


#### 参照

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)


### VP IMPORT FROM OBJECT

<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} ) <!-- END REF -->  


<!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| viewPro    | オブジェクト | -> | 4D View Pro オブジェクト      |

<!-- END REF -->  

#### 説明

The `VP IMPORT FROM OBJECT` command <!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->imports and displays the *viewPro* 4D View Pro object in the *vpAreaName* 4D View Pro area<!-- END REF -->. The imported object contents replaces any data already inserted in the area.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In *viewPro*, pass a valid 4D View Pro object. This object can have been created using [VP Export to object](#vp-export-to-object) or manually. For more information on 4D View Pro objects, please refer to the [4D View Pro object](languageOverview.html#4d-view-pro-object) section.

An error is returned if the *viewPro* object is invalid.


#### 例題

You want to import a spreadsheet that was previously saved in an object field:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### 参照

[VP Export to object](#vp-export-to-object)


### VP INSERT COLUMNS

<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->**VP INSERT COLUMNS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP INSERT COLUMNS.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP INSERT COLUMNS` command <!-- REF #_method_.VP INSERT COLUMNS.Summary -->inserts columns into the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. If the number of column to insert is omitted (not defined), a single column is inserted.

New columns are inserted on the left, directly before the starting column in the *rangeObj*.


#### 例題

To insert three columns before the second column:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### 参照

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)


### VP INSERT ROWS

<!-- REF #_method_.VP INSERT ROWS.Syntax -->**VP INSERT ROWS** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP INSERT ROWS.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP INSERT ROWS` command <!-- REF #_method_.VP INSERT ROWS.Summary -->inserts rows defined by the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. If the number of rows to insert is omitted (not defined), a single row is inserted.

New rows are inserted directly before the first row in the *rangeObj*.


#### 例題

To insert 3 rows before the first row:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

The results is:

![](assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### 参照

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

## M

### VP MOVE CELLS

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details>

<!-- REF #_method_.VP MOVE CELLS.Syntax -->**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )
<!-- END REF -->  

<!-- REF #_method_.VP MOVE CELLS.Params -->

| 引数          | タイプ    |    | 説明                                                   |
| ----------- | ------ | -- | ---------------------------------------------------- |
| originRange | オブジェクト | -> | Cell range to copy from                              |
| targetRange | オブジェクト | -> | Target range for the values, formatting and formulas |
| options     | オブジェクト | -> | 追加のオプション                                             |

<!-- END REF -->  

#### 説明

The `VP MOVE CELLS` command <!-- REF #_method_.VP MOVE CELLS.Summary -->moves or copies the values, style and formulas from *originRange* to *targetRange*<!-- END REF -->.

*originRange* and *targetRange* can refer to different View Pro areas.

In *originRange*, pass a range object containing the values, style, and formula cells to copy or move. If *originRange* is a combined range, only the first one is used.

In *targetRange*, pass the range of cells where the cell values, style, and formulas will be copied or moved.

The *options* parameter has several properties:

| プロパティ        | タイプ  | 説明                                                                                                                                                                                                     |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| copy         | ブール  | Determines if the values, formatting and formulas of the cells in *originRange* are removed after the command executes:<ul><li>*False* (default) to remove them</li><li>*True* to keep them</li> |
| pasteOptions | 倍長整数 | Specifies what is pasted. とりうる値: <p><table><tr><th>値</th><th>説明</th></tr><tr><td>`vk clipboard options all` (デフォルト)</td><td>Pastes all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Pastes only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Pastes only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Pastes the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Pastes only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Pastes the values and formatting.</td></tr></table></p>                                                                                                                                             |

The paste options defined in the [workbook options](#vp-set-workbook-options) are taken into account.
#### 例題

To copy the contents, values, formatting and formulas from an origin range:

```4d
var $originRange; $targetRange; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$targetRange:=VP Cells("ViewProArea"; 4; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.pasteOptions:=vk clipboard options all

VP MOVE CELLS($originRange; $targetRange; $options)
```
#### 参照

[VP Copy to object](#vp-copy-to-object)<br/>[VP PASTE FROM OBJECT](#vp-paste-from-object)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## N

### VP Name

<!-- REF #_method_.VP Name.Syntax -->**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *scope* : Integer }  ) : Object <!-- END REF -->  

<!-- REF #_method_.VP Name.Params -->

| 引数         | タイプ    |    | 説明                                        |
| ---------- | ------ | -- | ----------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                   |
| rangeName  | テキスト   | -> | Existing range name                       |
| scope      | 整数     | -> | Range location (current sheet if omitted) |
| 戻り値        | オブジェクト | <- | Range object of name                      |

<!-- END REF -->  

#### 説明

The `VP Name` command <!-- REF #_method_.VP Name.Summary -->returns a new range object referencing a named range<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *rangeName* parameter specifies an existing named cell range.

In the optional *scope* parameter, you can designate a specific spreadsheet where *rangeName* is defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet or the entire workbook with the following constants:

*   `vk current sheet`
*   `vk workbook`


#### 例題

You want to give a value to the "Total" named range.

```4d
// name the B5 cell as Total
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### 参照

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)


### VP NEW DOCUMENT

<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->**VP NEW DOCUMENT** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP NEW DOCUMENT.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |

<!-- END REF -->  

#### 説明

The `VP NEW DOCUMENT` command <!-- REF #_method_.VP NEW DOCUMENT.Summary -->loads and display a new, default document in the 4D View Pro form area object *vpAreaName*<!-- END REF -->. The new empty document replaces any data already inserted in the area.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。


#### 例題

You want to display an empty document in the "myVPArea" form object:

```4d
VP NEW DOCUMENT("myVPArea")
```

#### 参照

[VP IMPORT DOCUMENT](#vp-import-document)

---

## O

### VP Object to font

<!-- REF #_method_.VP Object to font.Syntax -->**VP Object to font** ( *fontObj* : Object ) : Text <!-- END REF -->  

<!-- REF #_method_.VP Object to font.Params -->

| 引数      | タイプ    |    | 説明             |
| ------- | ------ | -- | -------------- |
| fontObj | オブジェクト | -> | Font object    |
| 戻り値     | テキスト   | <- | Font shorthand |

<!-- END REF -->  

#### 説明

The `VP Object to font` command <!-- REF #_method_.VP Object to font.Summary -->returns a font shorthand string from *fontObj*<!-- END REF -->.

In *fontObj*, pass an object containing the font properties. 以下のオブジェクトプロパティがサポートされています:

| プロパティ   | タイプ  | 説明                                                                                                                                                                       | とりうる値                                                                                                                                                                                                                                                                                                                                                             | Mandatory |
| ------- | ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| family  | テキスト | Specifies the font.                                                                                                                                                      | any standard or generic font family. 例:  "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                                        | ◯         |
| size    | テキスト | Defines the size of the font.<p><p>The line-height can be added to the font-size: font-size/line-height: Ex: "15pt/20pt" | a number with one of the following units: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li><p><p>or one of the following:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | ◯         |
| style   | テキスト | The style of the font.                                                                                                                                                   | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                                              | ×         |
| variant | テキスト | Specifies font in small capital letters.                                                                                                                                 | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                                                        | ×         |
| weight  | テキスト | Defines the thickness of the font.                                                                                                                                       | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>                                          | ×         |


This object can be created with the [VP Font to object](#vp-font-to-object) command.

The returned shorthand string can be assigned to the "font" property of a cell with the [VP SET CELL STYLE](#vp-set-cell-style), for example.


#### 例題

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
//$cellStyle.font contains "bolder oblique small-caps 16pt arial"
```

#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


## P

### VP PASTE FROM OBJECT

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details>

<!-- REF #_method_.PASTE FROM OBJECT.Syntax -->**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )
<!-- END REF -->  

<!-- REF #_method_.PASTE FROM OBJECT.Params -->

| 引数         | タイプ    |    | 説明                                      |
| ---------- | ------ | -- | --------------------------------------- |
| rangeObj   | オブジェクト | -> | Cell range object                       |
| dataObject | オブジェクト | -> | Object containing the data to be pasted |
| options    | 倍長整数   | -> | Specifies what is pasted                |

<!-- END REF -->  

#### 説明

The `VP PASTE FROM OBJECT` command <!-- REF #_method_.PASTE FROM OBJECT.Summary -->pastes the contents, style and formulas stored in *dataObject* to the *rangeObj* object<!-- END REF -->.

In *rangeObj*, pass the cell range object where the values, formatting, and/or formula cells will be pasted. If *rangeObj* refers to more than one cell, only the first one is used.

In *dataObject*, pass the object that contains the cell data, formatting, and formulas to be pasted.

In the optional *options* parameter, you can specify what to paste in the cell range. とりうる値:

| 定数                                             | 説明                                                                   |
| ---------------------------------------------- | -------------------------------------------------------------------- |
| `vk clipboard options all`                     | Pastes all data objects, including values, formatting, and formulas. |
| `vk clipboard options formatting`              | Pastes only the formatting.                                          |
| `vk clipboard options formulas`                | Pastes only the formulas.                                            |
| `vk clipboard options formulas and formatting` | Pastes formulas and formatting.                                      |
| `vk clipboard options values`                  | Pastes only values.                                                  |
| `vk clipboard options value and formatting`    | Pastes values and formatting.                                        |

The paste options defined in the [workbook options](#vp-set-workbook-options) are taken into account.

If *options* refers to a paste option not present in the copied object (e.g. formulas), the command does nothing.

#### 例題

See example the example from [VP Copy to object](#vp-copy-to-object)

#### 参照

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT

<!-- REF #_method_.VP PRINT.Syntax -->**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP PRINT.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->  

#### 説明

The `VP PRINT` command <!-- REF #_method_.VP PRINT.Summary -->opens a print dialog window to print *vpAreaName*<!-- END REF -->.

Pass the 4D View Pro area to be printed in *vpAreaName*. The command will open the system print dialog window where the printer can be specified and the page properties can be defined.
> The properties defined in the print dialog window are for the printer paper, they are not the printing properties for the 4D View Pro area. Printing properties for 4D View Pro areas are defined using the [VP SET PRINT INFO](#vp-set-print-info) command. It is highly recommended that the properties for both the printer and the 4D View Pro area match, otherwise the printed document may not correspond to your expectations.

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current sheet is used by default. You can explicitly select the current spreadsheet or entire workbook with the following constants:

*   `vk current sheet`
*   `vk workbook`


> * 4D View Pro areas can only be printed with the `VP PRINT` command. 
> * Commands from the 4D **Printing** language theme are not supported by `VP PRINT`.
> * This command is intended for individual printing by the final end user. For automated print jobs, it is advised to export the 4D View Pro area as a PDF with the [VP EXPORT DOCUMENT](#vp-export-document) method.


#### 例題

以下のコードは:

```4d
 VP PRINT("myVPArea")
```

... will open a print dialog window:

![](assets/en/ViewPro/cmd_vpPrint.PNG)

#### 参照

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)

## R

### VP RECOMPUTE FORMULAS

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |


<!-- END REF -->  

#### 説明

The `VP RECOMPUTE FORMULAS` command <!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->immediately evaluates all formulas in *vpAreaName*<!-- END REF -->. By default, 4D automatically computes formulas when they are inserted, imported, or exported. `VP RECOMPUTE FORMULAS` allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the [VP FLUSH COMMANDS](#vp-flush-commands) command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。
> Be sure the [VP SUSPEND COMPUTING](#vp-suspend-computing) command has not been executed before using `VP RECOMPUTE FORMULAS`, otherwise the command does nothing.


#### 例題

To refresh all formulas in the workbook:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### 参照

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)


### VP REMOVE NAME

<!-- REF #_method_.VP REMOVE NAME.Syntax -->**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Integer } ) 
<!-- END REF -->  

<!-- REF #_method_.VP REMOVE NAME.Params -->

| 引数         | タイプ  |    | 説明                                                 |
| ---------- | ---- | -- | -------------------------------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名                            |
| name       | テキスト | -> | Name of the named range or named formula to remove |
| scope      | 整数   | -> | ターゲットのスコープ (デフォルト=カレントシート)                         |

<!-- END REF -->  

#### 説明

The `VP REMOVE NAME` command <!-- REF #_method_.VP REMOVE NAME.Summary -->removes the named range or named formula passed in the *name* parameter in the defined *scope*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the named range or named formula that you want to remove in *name*.

You can define where to remove the name in *scope* using either the sheet index (counting begins at 0) or the following constants:

*   `vk current sheet`
*   `vk workbook`


#### 例題


```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
//$formula=null
```

#### 参照

[VP Name](#vp-name)


### VP REMOVE SHEET

<!-- REF #_method_.VP REMOVE SHEET.Syntax -->**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE SHEET.Params -->

| 引数         | タイプ  |    | 説明                           |
| ---------- | ---- | -- | ---------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名      |
| index      | 整数   | -> | Index of the sheet to remove |
<!-- END REF -->

#### 参照

[VP ADD SHEET](#vp-add-sheet)


#### 説明

The `VP REMOVE SHEET` command <!-- REF #_method_.VP REMOVE SHEET.Summary -->removes the sheet with the specified *index* from the document loaded in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *index*, pass the index of the sheet to remove. If the passed *index* does not exist, the command does nothing.
> インデックスは 0 起点です。

#### 例題

The document currently has three sheets:

![](assets/en/ViewPro/vp-sheet-3.png)

Remove the third sheet:

```4d 
VP REMOVE SHEET("ViewProArea";2)
```

![](assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN

<!-- REF #_method_.VP REMOVE SPAN.Syntax -->**VP REMOVE SPAN** ( *rangeObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE SPAN.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  
#### 説明

The `VP REMOVE SPAN` command <!-- REF #_method_.VP REMOVE SPAN.Summary -->removes the span from the cells in *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range object of the cell span. The spanned cells in the range are divided into individual cells.

#### 例題

To remove all cell spans from this document:

![](assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 //find all cell spans
 $span:=VP Get spans(VP All("ViewProArea"))


  //remove the cell spans
 VP REMOVE SPAN($span)
```

結果:

![](assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### 参照

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET

<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP REMOVE STYLESHEET.Params -->

| 引数         | タイプ  |    | 説明                           |
| ---------- | ---- | -- | ---------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名      |
| styleName  | テキスト | -> | Name of style to remove      |
| scope      | 整数   | -> | ターゲットのスコープ (デフォルト = カレントシート) |

<!-- END REF -->  

#### 説明

The `VP REMOVE STYLESHEET` command <!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->removes the style sheet passed in the *styleName* from the *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the style sheet to remove in the *styleName* parameter.

You can define where to remove the style in the optional *scope* parameter using the sheet index (counting begins at 0) or with the following constants:

*   `vk current sheet`
*   `vk workbook`

#### 例題

To remove the *GreenDashDotStyle* style object from the current sheet:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```
#### 参照

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)


### VP RESET SELECTION

<!-- REF #_method_.VP RESET SELECTION.Syntax -->**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP RESET SELECTION.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->  

#### 説明

The `VP RESET SELECTION` command <!-- REF #_method_.VP RESET SELECTION.Summary -->deselects all cells, resulting in no current selection or visible active cell<!-- END REF -->.

> A default active cell (cell A1) remains defined for 4D View Pro commands.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### 例題

You want to deselect all cells (the active cell and any selected cells):

```4d
VP RESET SELECTION("myVPArea")
```

#### 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP RESUME COMPUTING

<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->**VP RESUME COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP RESUME COMPUTING.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |

<!-- END REF -->  

#### 説明

The `VP RESUME COMPUTING` command <!-- REF #_method_.VP RESUME COMPUTING.Summary --> restarts the calculation of formulas in *vpAreaName*<!-- END REF -->.

The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after `VP RESUME COMPUTING` is executed are calculated.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP RESUME COMPUTING` must be balanced by a corresponding execution of the [VP SUSPEND COMPUTING](#vp-suspend-computing) command.


#### 例題

See example in [VP SUSPEND COMPUTING](#vp-suspend-computing).

#### 参照

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row

<!-- REF #_method_.VP Row.Syntax -->**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object <!-- END REF -->  

<!-- REF #_method_.VP Row.Params -->

| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| row        | 整数     | -> | 行のインデックス                    |
| rowCount   | 整数     | -> | 行数                          |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | Range object of row(s)      |

<!-- END REF -->  

#### 説明

The `VP Row` command <!-- REF #_method_.VP Row.Summary -->returns a new range object referencing a specific row or rows<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *row* parameter defines the first row of the row range. Pass the row index (counting begins at 0) in this parameter. If the range contains multiple rows, you should also use the optional *rowCount* parameter.

The optional *rowCount* parameter allows you to define the total number of rows of the range. *rowCount* must be greater than 0. If omitted, the value will be set to 1 by default.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If not specified, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### 例題

You want to define a range object for the row shown below (on the current spreadsheet):

![](assets/en/ViewPro/cmd_vpRow.PNG)

以下のように書くことができます:

```4d
$row:=VP Row("ViewProArea";9) // row 10
```

#### 参照

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT#### See also

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->**VP ROW AUTOFIT** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP ROW AUTOFIT.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP ROW AUTOFIT` command <!-- REF #_method_.VP ROW AUTOFIT.Summary -->automatically sizes the row(s) in *rangeObj* according to their contents<!-- END REF -->.


In *rangeObj*, pass a range object containing a range of the rows whose size will be automatically handled.


#### 例題

The following rows don't correctly display the text:

![](assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)


```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

結果:

![](assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### 参照

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area

<!-- REF #_method_.VP Run offscreen area.Syntax -->**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF -->  

<!-- REF #_method_.VP Run offscreen area.Params -->

| 引数         | タイプ    |    | 説明                                                                              |
| ---------- | ------ | -- | ------------------------------------------------------------------------------- |
| parameters | オブジェクト | -> | Object containing the offscreen area's attributes                               |
| 戻り値        | Mixed  | <- | `.result` property of the `.onEvent` object, or Null if does not return a value |

<!-- END REF -->  

#### 説明

The `VP Run offscreen area` command <!-- REF #_method_.VP Run offscreen area.Summary -->creates an offscreen area in memory which can be used to process 4D View Pro area commands and functions<!-- END REF -->.

In *parameters* object, pass any of the following optional properties. These properties will be available through the `This` command within the `onEvent` method and reference the instance:

| プロパティ              | タイプ              | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | テキスト             | The name of the offscreen area. If omitted or null, a generic name is assigned (e.g., "OffscreenArea1").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| onEvent            | object (formula) | A callback method that will be launched when the offscreen area is ready. It can be either:<p><p><li>an `onEvent` function of a class, or</li><li>a `Formula` object</li><p><p>By default, the callback method is called on the [`On VP Ready`](Events/onVpReady.md), [`On Load`](Events/onLoad.md), [`On Unload`](Events/onUnload.md), [`On End URL Loading`](Events/onEndUrlLoading.md), [`On URL Loading Error`](Events/onUrlLoadingError.md), [`On VP Range Changed`](Events/onVpRangeChanged.md), or [`On Timer`](Events/onTimer.md) events. <p><p>The callback method can be used to access the [4D View Pro form object variable](configuring.md#4d-view-pro-form-object-variable). |
| autoQuit           | boolean          | True (default value) if the command must stop the formula execution when the [`On End URL Loading`](Events/onEndUrlLoading.md) or [`On URL Loading Error`](Events/onUrlLoadingError.md) events occur.<p><p>If false, you must use the `CANCEL` or `ACCEPT` commands in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| timeout            | number           | Maximum time (expressed in seconds) before the area automatically closes if no event is generated. If set to 0, no limitation is applied. Default value: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| result             | 混合               | Result of the processing (if any)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \<customProperty> | 混合               | Any custom attribute to be available in the *onEvent* callback method.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |


The following property is automatically added by the command if necessary:

| プロパティ          | タイプ     | 説明                                                 |
| -------------- | ------- | -------------------------------------------------- |
| timeoutReached | boolean | Added with true value if timeout has been exceeded |


> The offscreen area is only available during the execution of the `VP Run offscreen area` command. It will automatically be destroyed once execution has ended.


The following commands can be used in the callback method:

*   `ACCEPT`
*   `CANCEL`
*   `SET TIMER`
*   `WA Evaluate JavaScript`
*   `WA EXECUTE JAVASCRIPT FUNCTION`


#### 例題 1

You want to create an offscreen 4D View Pro area and get the value of a cell:


```4d
// cs.OffscreenArea class declaration 
Class constructor ($path : Text)
    This.filePath:=$path

// This function will be called on each event of the offscreen area 
Function onEvent()
    Case of
        :(FORM Event.code=On VP Ready)
            VP IMPORT DOCUMENT(This.area;This.filePath)
            This.result:=VP Get value(VP Cell(This.area;6;22))

            ALERT("The G23 cell contains the value: "+String(This.result))
    End case
```

The *OffscreenArea* callback method:


```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### 例題 2

You want to load a large document offscreen, wait for all calculations to complete evaluating, and export it as a PDF:


```4d
//cs.OffscreenArea class declaration
Class constructor($pdfPath : Text)
    This.pdfPath:=$pdfPath
    This.autoQuit:=False
    This.isWaiting:=False

Function onEvent()
    Case of
        :(FORM Event.code=On VP Ready)
    // Document import
            VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
            This.isWaiting:=True

    // Start a timer to verify if all calculations are finished.
    // If during this period the "On VP Range Changed" is thrown, the timer will be restarted
    // The time must be defined according to the computer configuration.
            SET TIMER(60)

        :(FORM Event.code=On VP Range Changed)
    // End of calculation detected. Restarts the timer
            If(This.isWaiting)
                SET TIMER(60)
            End if

        :(FORM Event.code=On Timer)
    // To be sure to not restart the timer if you call others 4D View command after this point
            This.isWaiting:=False

    // Stop the timer
            SET TIMER(0)

    // Start the PDF export
            VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))

        :(FORM Event.code=On URL Loading Error)
            CANCEL 
    End case
```

The *OffscreenArea* callback method:

```4d
$o:=cs.OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

## 参照

[Blog post: End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)

## S

### VP SET ACTIVE CELL

<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->**VP SET ACTIVE CELL** ( *rangeObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET ACTIVE CELL.Params -->

| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP SET ACTIVE CELL` command <!-- REF #_method_.VP SET ACTIVE CELL.Summary -->defines a specified cell as active<!-- END REF -->.

In *rangeObj*, pass a range containing a single cell as an object (see [VP Cell](#vp-cell)). If *rangeObj* is not a cell range or contains multiple ranges, the first cell of the first range is used.


#### 例題

To set the cell in column D, row 5 as the active cell:

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

## 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET ALLOWED METHODS

<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->**VP SET ALLOWED METHODS** ( *methodObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET ALLOWED METHODS.Params -->

| 引数        | タイプ    |    | 説明                                       |
| --------- | ------ | -- | ---------------------------------------- |
| methodObj | オブジェクト | -> | Allowed methods in the 4D View Pro areas |

<!-- END REF -->  


> **互換性**
> 
> For greater flexiblity, it is recommended to use the [`VP SET CUSTOM FUNCTIONS`](#vp-set-custom-functions) command which allows you to designate 4D formulas that can be called from 4D View Pro areas. As soon as `VP SET CUSTOM FUNCTIONS` is called, `VP SET ALLOWED METHODS` calls are ignored. 4D View Pro also supports 4D's generic `SET ALLOWED METHODS` command if neither `VP SET CUSTOM FUNCTIONS` nor `VP SET ALLOWED METHODS` are called, however using the generic command is not recommended.

#### 説明

The `VP SET ALLOWED METHODS` command <!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->designates the project methods that can be called in 4D View Pro formulas<!-- END REF -->. This command applies to all 4D View Pro areas initialized after its call during the session. It can be called multiple times in the same session to initialize different configurations.

By default for security reasons, if you do not execute the `VP SET ALLOWED METHODS` command, no method call is allowed in 4D View Pro areas -- except if 4D's generic `SET ALLOWED METHODS` command was used (see compatibility note). Using an unauthorized method in a formula prints a #NAME? error in the 4D View Pro area.


In the *methodObj* parameter, pass an object in which each property is the name of a function to define in the 4D View Pro areas:

| プロパティ                  |            |            | タイプ                 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------- | ---------- | ---------- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |            | オブジェクト              | Custom function definition. The `<functionName>` property name defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                           |
|                        | method     |            | テキスト                | (mandatory) Name of the existing 4D project method to allow                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                        | parameters |            | Object の Collection | Collection of parameters (in the order they are defined in the method).                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                        |            | \[ ].name | テキスト                | Name of a parameter to display for the `<functionName>`.<p><p>**Note**: Parameter names must not contain space characters.                                                                                                                                                                                                                                                                                                                                              |
|                        |            | \[ ].type | 数値                  | Type of the parameter. サポートされている型:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If omitted, by default the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section). If type is `Is object`, the object has the same structure as the object returned by [`VP Get value`](#vp-get-value). |
|                        | summary    |            | テキスト                | Function description to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                        | minParams  |            | 数値                  | Minimum number of parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                        | maxParams  |            | 数値                  | Maximum number of parameters. Passing a number higher than the length of parameters allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                  |



#### 例題

You want to allow two methods in your 4D View Pro areas:


```4d
C_OBJECT($allowed)
$allowed:=New object //parameter for the command

$allowed.Hello:=New object //create a first simple function named "Hello"
$allowed.Hello.method:="My_Hello_Method" //sets the 4D method
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object //create a second function with parameters named "Byebye"
$allowed.Byebye.method:="My_ByeBye_Method"
$allowed.Byebye.parameters:=New collection
$allowed.Byebye.parameters.push(New object("name";"Message";"type";Is text))
$allowed.Byebye.parameters.push(New object("name";"Date";"type";Is date))
$allowed.Byebye.parameters.push(New object("name";"Time";"type";Is time))
$allowed.Byebye.summary:="Byebye prints a custom timestamp"
$allowed.Byebye.minParams:=3
$allowed.Byebye.maxParams:=3

VP SET ALLOWED METHODS($allowed)
```

After this code is executed, the defined functions can be used in 4D View Pro formulas:

![](assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)


> In 4D View Pro formulas, function names are automatically displayed in uppercase.

## 参照

[4D functions](formulas.md#4d-functions)<br/>[VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions)

### VP SET BOOLEAN VALUE

<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean) <!-- END REF -->  

<!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->

| 引数        | タイプ    |    | 説明                   |
| --------- | ------ | -- | -------------------- |
| rangeObj  | オブジェクト | -> | レンジオブジェクト            |
| boolValue | ブール    | -> | Boolean value to set |

<!-- END REF -->  

#### 説明

The `VP SET BOOLEAN VALUE` command <!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->assigns a specified boolean value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *boolValue* parameter allows you to pass the boolean value (**True** or **False**) that will be assigned to the *rangeObj*.


#### 例題

```4d
//Set the cell value as False
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```
## 参照

[VP SET VALUE](#vp-set-value)


### VP SET BORDER

<!-- REF #_method_.VP SET BORDER.Syntax -->**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP SET BORDER.Params -->

| 引数             | タイプ    |    | 説明                                  |
| -------------- | ------ | -- | ----------------------------------- |
| rangeObj       | オブジェクト | -> | レンジオブジェクト                           |
| borderStyleObj | オブジェクト | -> | Object containing border line style |
| borderPosObj   | オブジェクト | -> | Object containing border placement  |

<!-- END REF -->  

#### 説明

The `VP SET BORDER` command <!-- REF #_method_.VP SET BORDER.Summary -->applies the border style(s) defined in *borderStyleObj* and *borderPosObj* to the range defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the border style will be applied. If the *rangeObj* contains multiple cells, borders applied with `VP SET BORDER` will be applied to the *rangeObj* as a whole (as opposed to the [`VP SET CELL STYLE`](#vp-set-cell-style) command which applies borders to each cell of the *rangeObj*). If a style sheet has already been applied, `VP SET BORDER` will override the previously applied border settings for the *rangeObj*.

The *borderStyleObj* parameter allows you to define the style for the lines of the border. The *borderStyleObj* supports the following properties:

| プロパティ | タイプ  | 説明                             | とりうる値                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ---- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color | テキスト | 境界線のカラーを定義します。 デフォルト = black   | CSSカラー "#rrggbb" シンタックス (推奨シンタックス)、CSSカラー "rgb(r,g,b)" シンタックス (代替シンタックス)、CSSカラーネーム (代替シンタックス)                                                                                                                                                                                                                                                                                |
| style | 整数   | 境界線のスタイルを定義します。 デフォルト = empty。 | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |


You can define the position of the *borderStyleObj* (i.e., where the line is applied) with the *borderPosObj*:



| プロパティ           | タイプ     | 説明                                                          |
| --------------- | ------- | ----------------------------------------------------------- |
| all             | boolean | Border line style applied to all borders.                   |
| left            | boolean | Border line style applied to left border.                   |
| top             | boolean | Border line style applied to top border.                    |
| right           | boolean | Border line style applied to right border.                  |
| bottom          | boolean | Border line style applied to bottom border.                 |
| outline         | boolean | Border line style applied to outer borders only.            |
| inside          | boolean | Border line style applied to inner borders only.            |
| innerHorizontal | boolean | Border line style applied to inner horizontal borders only. |
| innerVertical   | boolean | Border line style applied to inner vertical borders only.   |


#### 例題 1

This code produces a border around the entire range:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```


![](assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### 例題 2

This code demonstrates the difference between `VP SET BORDER` and setting borders with the [`VP SET CELL STYLE`](#vp-set-cell-style) command:

```4d
// Set borders using VP SET BORDER
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// // Set borders using VP SET CELL STYLE
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```


![](assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

## 参照

[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET CELL STYLE

<!-- REF #_method_.VP SET CELL STYLE.Syntax -->**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET CELL STYLE.Params -->

| 引数       | タイプ    |    | 説明         |
| -------- | ------ | -- | ---------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト  |
| styleObj | オブジェクト | -> | スタイルオブジェクト |

<!-- END REF -->  

#### 説明

The `VP SET CELL STYLE` command <!-- REF #_method_.VP SET CELL STYLE.Summary -->applies the style(s) defined in the *styleObj* to the cells defined in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells where the style will be applied. If the *rangeObj* contains multiple cells, the style is applied to each cell.
> Borders applied with `VP SET CELL STYLE` will be applied to each cell of the *rangeObj*, as opposed to the [VP SET BORDER](#vp-set-border) command which applies borders to the *rangeObj* as a whole.

The *styleObj* parameter lets you pass an object containing style settings. You can use an existing style sheet or create a new style. If the *styleObj* contains both an existing style sheet and additional style settings, the existing style sheet is applied first, followed by the additional settings. Giving the *styleObj* parameter a NULL value will remove any style settings from the *rangeObj* and revert to the default style settings (if any).

For more information about style objects and style sheets, see the [Style Objects](configuring.md#style-objects) paragraph.


#### 例題

```4d
$style:=New object
$style.font:="8pt Arial"
$style.backColor:="Azure"
$style.foreColor:="red"
$style.hAlign:=1
$style.isVerticalText:=True
$style.borderBottom:=New object("color";"#800080";"style";vk line style thick)

VP SET CELL STYLE(VP Cell("ViewProArea";1;1);$style)
```


![](assets/en/ViewPro/cmd_vpSetCellStyle.PNG)
#### 参照

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get cell style](#vp-get-cell-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)



### VP SET COLUMN ATTRIBUTES

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object) <!-- END REF -->  

<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->

| 引数          | タイプ    |    | 説明                                  |
| ----------- | ------ | -- | ----------------------------------- |
| rangeObj    | オブジェクト | -> | レンジオブジェクト                           |
| propertyObj | オブジェクト | -> | Object containing column properties |

<!-- END REF -->  

#### 説明

The `VP SET COLUMN ATTRIBUTES` command <!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary --> applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the columns.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. These attributes are:

| プロパティ     | タイプ     | 説明                                                                           |
| --------- | ------- | ---------------------------------------------------------------------------- |
| width     | number  | Column width expressed in pixels                                             |
| pageBreak | boolean | True to insert a page break before the first column of the range, else false |
| visible   | boolean | True if the column is visible, else false                                    |
| resizable | boolean | True if the column can be resized, else false                                |
| header    | テキスト    | Column header text                                                           |


#### 例題

To change the size of the second column and set the header, you write:

```4d
C_OBJECT($column;$properties)

$column:=VP Column("ViewProArea";1) //column B
$properties:=New object("width";100;"header";"Hello World")

VP SET COLUMN ATTRIBUTES($column;$properties)
```


![](assets/en/ViewPro/cmd_vpSetColumnAttributes.PNG)

#### 参照

[VP Column](#vp-column)<br/>[VP Get column attributes](#vp-get-column-attributes)<br/>[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET COLUMN COUNT

<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET COLUMN COUNT.Params -->

| 引数          | タイプ  |    | 説明                          |
| ----------- | ---- | -- | --------------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| columnCount | 整数   | -> | カラム数                        |
| sheet       | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->  

#### 説明

The `VP SET COLUMN COUNT` command <!-- REF #_method_.VP SET COLUMN COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the total number of columns in the *columnCount* parameter. *columnCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *columnCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### 例題

The following code defines five columns in the 4D View Pro area:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP Get row count](#vp-get-row-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP SET CURRENT SHEET

<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *index* : Integer)
<!-- END REF --> 

<!-- REF #_method_.VP SET CURRENT SHEET.Params -->

| 引数         | タイプ  |    | 説明                             |
| ---------- | ---- | -- | ------------------------------ |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名        |
| index      | 整数   | <- | Index of the new current sheet |
<!-- END REF --> 

#### 説明

The `VP SET CURRENT SHEET` command <!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in *vpAreaName*<!-- END REF --> . The current sheet is the selected sheet in the document.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *index*, pass the index of the sheet to be set as current sheet. If the index passed is inferior to 0 or exceeds the number of sheets, the command does nothing.

> インデックスは 0 起点です。

#### 例題

The document's current sheet is the first sheet:

![first-sheet-selected](assets/en/ViewPro/vp-sheet-3-select.png)

Set the current sheet to the third sheet:

```4d
VP SET CURRENT SHEET("ViewProArea";2)
```

![](assets/en/ViewPro/vp-sheet-3-select.png)

#### 参照

[VP Get current sheet](#vp-get-current-sheet)
### VP SET CUSTOM FUNCTIONS

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| formulaObj | オブジェクト | -> | フォーミュラオブジェクト            |

<!-- END REF -->  

#### 説明

The `VP SET CUSTOM FUNCTIONS` command <!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the `On Load` form event.

The formulas specified by `VP SET CUSTOM FUNCTIONS` appear in a pop-up menu when the first letter of their name is entered. See the [Formulas and Functions](formulas.md) page.

> If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account.

Pass the name of the 4D View Pro area in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

In the *formulaObj* parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in *formulaObj* becomes the name of a function in the 4D View Pro area.

| プロパティ                    |            |            | タイプ                 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ---------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<customFunction>` |            |            | オブジェクト              | Custom function definition. `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                          | formula    |            | オブジェクト              | 4D formula object (mandatory). See the `Formula` command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                          | parameters |            | Object の Collection | Collection of parameters (in the order they are defined in the formula)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                          |            | \[ ].name | テキスト                | Name of parameter to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                          |            | \[ ].type | 数値                  | Type of the parameter. サポートされている型:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If *type* is omitted or if the default value (-1) is passed, the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section).<p><p>If *type* is `Is object`, the object has the same structure as the object returned by [VP Get value](#vp-get-value). |
|                          | summary    |            | テキスト                | Formula description to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                          | minParams  |            | 数値                  | Minimum number of parameters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                          | maxParams  |            | 数値                  | Maximum number of parameters. Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
> **WARNING**
> 
> * As soon as `VP SET CUSTOM FUNCTIONS` is called, the methods allowed by the [VP SET ALLOWED METHODS](#vp-set-allowed-methods) command (if any) are ignored in the 4D View Pro area.
> * `VP SET CUSTOM FUNCTIONS` が呼び出されると、4D View Pro エリアは `SET TABLE TITLES` や `SET FIELD TITLES` コマンドに基づく機能を無視します。

#### 例題

You want to use formula objects in a 4D View Pro area to add numbers, retrieve a customer's last name and gender:

```4d
Case of
    :(FORM Event.code=On Load)

       var $o : Object
       $o:=New object

// Define "addnum" function from a method named "addnum"
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))

// Define "ClientLastName" function from a database field
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"

// Define "label" function from a 4D expression with one parameter
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))

// Define "Title" function from a variable named "Title"
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)

       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)

End case
```

#### 参照

[VP SET ALLOWED METHODS](#vp-set-allowed-methods)

### VP SET DATE TIME VALUE

<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DATE TIME VALUE.Params -->

| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| dateValue     | 日付     | -> | Date value to set |
| timeValue     | 時間     | -> | Time value to set |
| formatPattern | テキスト   | -> | Format of value   |

<!-- END REF -->  

#### 説明

The `VP SET DATE TIME VALUE` command <!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigns a specified date and time value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The *timeValue* parameter specifies a time value (expressed in seconds) to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* and *timeValue* parameters. For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.

#### 例題


```4d
//Set the cell value as the current date and time
VP SET DATE TIME VALUE(VP Cell("ViewProArea";6;2);Current time;Current date;vk pattern full date time)

//Set the cell value as the 18th of December
VP SET DATE TIME VALUE(VP Cell("ViewProArea";3;9);!2024-12-18!;?14:30:10?;vk pattern sortable date time)
```

#### 参照

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE VALUE](#vp-set-date-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)<br/>[VP SET VALUE](#vp-set-value)


### VP SET DATE VALUE

<!-- REF #_method_.VP SET DATE VALUE.Syntax -->**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DATE VALUE.Params -->

| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| dateValue     | 日付     | -> | Date value to set |
| formatPattern | テキスト   | -> | Format of value   |

<!-- END REF -->  

#### 説明

The `VP SET DATE VALUE` command <!-- REF #_method_.VP SET DATE VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *dateValue* parameter specifies a date value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a pattern for the *dateValue* parameter. Pass any custom format or you can use one of the following constants:

| 定数                      | 説明                                       | Default US pattern   |
| ----------------------- | ---------------------------------------- | -------------------- |
| `vk pattern long date`  | ISO 8601 format for the full date        | "dddd, dd MMMM yyyy" |
| `vk pattern month day`  | ISO 8601 format for the month and day    | "MMMM dd"            |
| `vk pattern short date` | Abbreviated ISO 8601 format for the date | "MM/dd/yyyy"         |
| `vk pattern year month` | ISO 8601 format for the month and year   | "yyyy MMMM"          |

For information on patterns and formatting characters, please refer to the [Date and time formats](configuring.md#date-and-time-formats) section.


#### 例題


```4d
//Set the cell value to the current date
VP SET DATE VALUE(VP Cell("ViewProArea";4;2);Current date))

//Set the cell value to a specific date with a designated format
VP SET DATE VALUE(VP Cell("ViewProArea";4;4);Date("12/25/94");"d/m/yy ")
VP SET DATE VALUE(VP Cell("ViewProArea";4;6);!2005-01-15!;vk pattern month day)
```

#### 参照

[4D View Pro cell format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET DEFAULT STYLE

<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET DEFAULT STYLE.Params -->

| 引数         | タイプ    |    | 説明                                    |
| ---------- | ------ | -- | ------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名               |
| styleObj   | オブジェクト | -> | スタイルオブジェクト                            |
| sheet      | 整数     | -> | Sheet index (default = current sheet) |

<!-- END REF -->  

#### 説明

The `VP SET DEFAULT STYLE` command <!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *styleObj* lets you pass an object containing style settings. You can use an existing style sheet or you can create a new style. For more information, see the [Style objects](configuring.md#style-objects) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the style will be defined. If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### 例題

```4d
$style:=New object
$style.hAlign:=vk horizontal align left
$style.font:="12pt papyrus"
$style.backColor:="#E6E6FA" //light purple color

VP SET DEFAULT STYLE("myDoc";$style)
```


![](assets/en/ViewPro/cmd_vpSetDefaultStyle.PNG)

#### 参照

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP Get default style](#vp-get-default-style)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET BORDER](#vp-set-border)<br/>[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET FIELD

<!-- REF #_method_.VP SET FIELD.Syntax -->**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FIELD.Params -->

| 引数            | タイプ    |    | 説明                                      |
| ------------- | ------ | -- | --------------------------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト                               |
| フィールド         | ポインター  | -> | Reference to field in virtual structure |
| formatPattern | テキスト   | -> | Format of field                         |

<!-- END REF -->  

#### 説明

The `VP SET FIELD` command <!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the specified field will be linked in each cell.

The *field* parameter specifies a 4D database [virtual field](formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the *field* parameter. You can pass any valid [custom format](configuring.md#cell-format).

#### 例題

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```
#### 参照

[VP SET VALUE](#vp-set-value)

### VP SET FORMULA

<!-- REF #_method_.VP SET FORMULA.Syntax -->**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FORMULA.Params -->

| 引数            | タイプ    |    | 説明                   |
| ------------- | ------ | -- | -------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト            |
| formula       | テキスト   | -> | Formula or 4D method |
| formatPattern | テキスト   | -> | Format of field      |

<!-- END REF -->  

#### 説明

The `VP SET FORMULA` command <!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the formula specified will be linked in each cell.

The *formula* parameter specifies a formula or 4D method name to be assigned to the *rangeObj*. If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-method) command.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *formula*.

You remove the formula in *rangeObj* by replacing it with an empty string ("").

#### 例題 1

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")
```

#### 例題 2

To remove the formula:

```4d
VP SET FORMULA(VP Cell("ViewProArea";5;2);"")
```

#### 参照

[Cell format](configuring.md#cell-format)<br/>[VP Get Formula](#vp-get-formula)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET FORMULAS

<!-- REF #_method_.VP SET FORMULAS.Syntax -->**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection ) <!-- END REF -->  

<!-- REF #_method_.VP SET FORMULAS.Params -->

| 引数          | タイプ    |    | 説明                     |
| ----------- | ------ | -- | ---------------------- |
| rangeObj    | オブジェクト | -> | Cell range object      |
| formulasCol | コレクション | -> | Collection of formulas |

<!-- END REF -->  

#### 説明

The `VP SET FORMULAS` command <!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. If *rangeObj* includes multiple ranges, only the first range is used.

The *formulasCol* is a two-dimensional collection:

*   第1レベルのコレクションは、フォーミュラのサブコレクションを格納しています。 Each subcollection defines a row.
*   それぞれのサブコレクションは行におけるセルの値を定義します。 Values must be text elements containing the formulas to assign to the cells. >If a 4D method is used, it must be allowed with the [`VP SET ALLOWED METHODS`](#vp-set-allowed-methods) command.

You remove the formulas in *rangeObj* by replacing them with an empty string ("").

#### 例題 1

```4d
$formulas:=New collection
$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row
$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row

VP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas
```

*myMethod*:

```4d
$0:=$1*3.33
```

![](assets/en/ViewPro/cmd_vpSetFormulas.PNG)



#### 例題 2

To remove formulas:

```4d
$formulas:=New collection
$formulas.push(New collection("";"")) // first collection
$formulas.push(New collection("";"")) // second collection

VP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells
```

#### 参照

[VP Get Formulas](#vp-get-formulas)<br/>[VP GET VALUES](#vp-get-values)[VP SET FORMULA](#vp-set-formula)<br/>[VP SET VALUES](#vp-set-values)


### VP SET FROZEN PANES

<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SET FROZEN PANES.Params -->

| 引数         | タイプ    |    | 説明                            |
| ---------- | ------ | -- | ----------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名       |
| paneObj    | オブジェクト | -> | 固定化されたカラムと行についての情報を格納したオブジェクト |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)   |

<!-- END REF -->  

#### 説明

The `VP SET FROZEN PANES` command <!-- REF #_method_.VP SET FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen. The location of the line depends on where the frozen column or row is on the sheet:

*   **Columns on the left or right**: For columns on the left of the sheet, the line is displayed on the right side of the last frozen column. For columns on the right side of the sheet, the line is displayed on the left side of the first frozen column.
*   **Rows on the top or bottom**: For rows at the top of the sheet, the line is displayed below the last frozen row. For rows at the bottom of the sheet, the line is displayed above the first frozen row.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

You can pass an object defining the columns and rows to freeze in the *paneObj* parameter. Setting the value of any of the column or row properties equal to zero resets (unfreezes) the property. If a property is set to less than zero, the command does nothing. 以下のものを渡すことができます:

| プロパティ               | タイプ | 説明                 |
| ------------------- | --- | ------------------ |
| columnCount         | 整数  | シートの左側にある固定化されたカラム |
| trailingColumnCount | 整数  | シートの右側にある固定化されたカラム |
| rowCount            | 整数  | シートの上側にある固定化された行   |
| trailingRowCount    | 整数  | シートの下側にある固定化された行   |

In the optional *sheet* parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### 例題

You want to freeze the first three columns on the left, two columns on the right, and the first row:

```4d
C_OBJECT($panes)

$panes:=New object
$panes.columnCount:=3
$panes.trailingColumnCount:=2
$panes.rowCount:=1

VP SET FROZEN PANES("ViewProArea";$panes)
```


![](assets/en/ViewPro/cmd_vpSetFrozenPanes.PNG)

#### 参照

[VP Get frozen panes](#vp-get-frozen-panes)

### VP SET NUM VALUE

<!-- REF #_method_.VP SET NUM VALUE.Syntax -->**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } ) <!-- END REF -->  

<!-- REF #_method_.VP SET NUM VALUE.Params -->

| 引数            | タイプ    |    | 説明                  |
| ------------- | ------ | -- | ------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト           |
| numberValue   | 数値     | -> | Number value to set |
| formatPattern | テキスト   | -> | Format of value     |

<!-- END REF -->  

#### 説明

The `VP SET NUM VALUE` command <!-- REF #_method_.VP SET NUM VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *numberValue* parameter specifies a numeric value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *numberValue* parameter.

#### 例題

```4d
//Set the cell value to 2
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)

//Set the cell value and format it in dollars
VP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")
```

#### 参照

[Cell format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET PRINT INFO

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| 引数         | タイプ    |    | 説明                                    |
| ---------- | ------ | -- | ------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリア名                      |
| printInfo  | オブジェクト | -> | Object containing printing attributes |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)           |

<!-- END REF -->  

#### 説明

The `VP SET PRINT INFO` command <!-- REF #_method_.VP SET PRINT INFO.Summary -->defines the attributes to use when printing the *vpAreaName*<!-- END REF -->.

Pass the name of the 4D View Pro area to print in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

You can pass an object containing definitions for various printing attributes in the *printInfo* parameter. To view the full list of the available attributes, see [Print Attributes](configuring.md#print-attributes).

In the optional *sheet* parameter, you can designate a specific spreadsheet to print (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`

#### 例題

The following code will print a 4D View Pro area to a PDF document:

```4d
var $printInfo : Object

//declare print attributes object
$printInfo:=New object

//define print attributes
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

//Add corporate logo
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

//print PDF document
VP SET PRINT INFO ("ViewProArea";$printInfo)

//export the PDF
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

The PDF:

![](assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### 参照

[4D View Pro print attributes](configuring.md#print-attributes)<br/>[VP Convert to picture](#vp-convert-to-picture)<br/>[VP Get print info](#vp-get-print-info)<br/>[VP PRINT](#vp-print)

### VP SET ROW ATTRIBUTES

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->

| 引数          | タイプ    |    | 説明                               |
| ----------- | ------ | -- | -------------------------------- |
| rangeObj    | オブジェクト | -> | Range of rows                    |
| propertyObj | オブジェクト | -> | Object containing row properties |

<!-- END REF -->  

#### 説明

The `VP SET ROW ATTRIBUTES` command <!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the rows in the *rangeObj*<!-- END REF -->.

In the *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the rows.

The *propertyObj* parameter lets you specify the attributes to apply to the rows in the *rangeObj*. These attributes are:

| プロパティ     | タイプ     | 説明                                                                        |
| --------- | ------- | ------------------------------------------------------------------------- |
| height    | number  | Row height expressed in pixels                                            |
| pageBreak | boolean | True to insert a page break before the first row of the range, else false |
| visible   | boolean | True if the row is visible, else false                                    |
| resizable | boolean | True if the row can be resized, else false                                |
| header    | テキスト    | Row header text                                                           |


#### 例題

You want to change the size of the second row and set the header:

```4d
var $row; $properties : Object

$row:=VP Row("ViewProArea";1)
$properties:=New object("height";75;"header";"June")

VP SET ROW ATTRIBUTES($row;$properties)
```

![](assets/en/ViewPro/cmd_vpSetRowAttributes.PNG)

#### 参照

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP get column attributes](#vp-get-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP SET ROW COUNT

<!-- REF #_method_.VP SET ROW COUNT.Syntax -->**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET ROW COUNT.Params -->

| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| rowCount   | 整数   | -> | 行数                          |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->  

#### 説明

The `VP SET ROW COUNT` command <!-- REF #_method_.VP SET ROW COUNT.Summary -->defines the total number of rows in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the total number of rows in the *rowCount* parameter. *rowCount* must be greater than 0.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *rowCount* will be applied (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### 例題

The following code defines five rows in the 4D View Pro area:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP get row-count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)

### VP SET SELECTION

<!-- REF #_method_.VP SET SELECTION.Syntax -->**VP SET SELECTION** ( *rangeObj* : Object  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SELECTION.Params -->

| 引数       | タイプ    |    | 説明             |
| -------- | ------ | -- | -------------- |
| rangeObj | オブジェクト | -> | 複数セルのレンジオブジェクト |

<!-- END REF -->  

#### 説明

The `VP SET SELECTION` command <!-- REF #_method_.VP SET SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->.

In *rangeObj*, pass a range object of cells to designate as the current selection.

#### 例題

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### 参照

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP ADD SELECTION](#vp-add-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET SHEET COUNT

<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SHEET COUNT.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| number     | 整数   | -> | Number of sheets        |

<!-- END REF -->  

#### 説明

The `VP SET SHEET COUNT` command <!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

In `number`, pass a number corresponding to how many sheets the document will contain after the command is executed.
> **Warning**: The command will delete sheets if the previous amount of sheets in your document is superior to the number passed. For example, if there are 5 sheets in your document and you set the sheet count to 3, the command will delete sheets number 4 and 5.

#### 例題

The document currently has one sheet:

![](assets/en/ViewPro/vp-sheet-1.png)

To set the number of sheets to 3:

```4d
VP SET SHEET COUNT("ViewProArea";3)
```

![](assets/en/ViewPro/vp-sheet-3.png)

#### 参照

[VP Get sheet count](#vp-get-sheet-count)

### VP SET SHEET NAME

<!-- REF #_method_.VP SET SHEET NAME.Syntax -->**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; index: Integer} ) 
<!-- END REF -->  

<!-- REF #_method_.VP SET SHEET NAME.Params -->

| 引数         | タイプ  |    | 説明                               |
| ---------- | ---- | -- | -------------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名          |
| name       | テキスト | -> | New name for the sheet           |
| index      | 整数   | -> | Index of the sheet to be renamed |

<!-- END REF -->  

#### 説明

The `VP SET SHEET NAME` command <!-- REF #_method_.VP SET SHEET NAME.Summary -->renames a sheet in the document loaded in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *name*, pass a new name for the sheet.

In *index*, pass the index of the sheet to rename.

> インデックスは 0 起点です。

If no *index* is passed, the command renames the current sheet.

The new name cannot contain the following characters: `*, :, [, ], ?,\,/`

The command does nothing if:

* the new name contains forbidden characters
* the new name's value is blank
* the new name already exists
* the passed *index* does not exist

#### 例題

Set the third sheet's name to "Total first quarter":

```4d
VP SET SHEET NAME("ViewProArea";"Total first quarter";2)
```

![](assets/en/ViewPro/vp-sheet-index-name.png)


### VP SET SHEET OPTIONS

<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  ) <!-- END REF -->  

<!-- REF #_method_.VP SET SHEET OPTIONS.Params -->

| 引数           | タイプ    |    | 説明                          |
| ------------ | ------ | -- | --------------------------- |
| vpAreaName   | オブジェクト | -> | 4D View Pro エリア名            |
| sheetOptions | オブジェクト | -> | Sheet option(s) to set      |
| sheet        | オブジェクト | -> | シートのインデックス (省略した場合はカレントシート) |

<!-- END REF -->  

#### 説明

The `VP SET SHEET OPTIONS` command <!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->allows defining various sheet options of the *vpAreaName* area<!-- END REF -->.

Pass the name of the 4D View Pro area in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

Pass an object containing definitions for the options to set in the *sheetOptions* parameter. To view the full list of the available options, see the [Sheet Options](configuring.md#sheet-options) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:

*   `vk current sheet`


#### 例題 1

You want to protect all cells except the range C5:D10:

```4d
// Activate protection on the current sheet
var $options : Object

$options:=New object
$options.isProtected:=True
VP SET SHEET OPTIONS("ViewProArea";$options)

// mark cells C5:D10 as 'unlocked'
VP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))
```


#### 例題 2

You need to protect your document while your users can resize rows and columns:

```4d
var $options : Object

$options:=New object
// Activate protection
$options.isProtected:=True
$options.protectionOptions:=New object
// Allow user to resize rows
$options.protectionOptions.allowResizeRows=True;
// Allow user to resize columns
$options.protectionOptions.allowResizeColumns=True;

// Apply protection on the current sheet
VP SET SHEET OPTIONS("ViewProArea";$options)
```


#### 例題 3

You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:

```4d
var $options : Object

$options:=New object
// Customize color of Sheet 1 tab
$options.sheetTabColor:="Black"
$options.gridline:=New object("color";"Purple")
$options.selectionBackColor:="rgb(255,128,0,0.4)"
$options.selectionBorderColor:="Yellow"
$options.frozenlineColor:="Gold"

VP SET SHEET OPTIONS("ViewProArea";$options;0)

// Customize color of Sheet 2 tab
$options.sheetTabColor:="red"

VP SET SHEET OPTIONS("ViewProArea";$options;1)

// Customize color of Sheet 3 tab
$options.sheetTabColor:="blue"

VP SET SHEET OPTIONS("ViewProArea";$options;2)
```

結果:

![](assets/en/ViewPro/cmd_vpSetSheetOptions1.PNG)

#### 例題 4

You want to hide the grid lines as well as the row and column headers.

```4d
var $options : Object

$options:=New object
$options.gridline:=New object()
$options.gridline.showVerticalGridline:=False
$options.gridline.showHorizontalGridline:=False
$options.rowHeaderVisible:=False
$options.colHeaderVisible:=False

VP SET SHEET OPTIONS("ViewProArea";$options)
```

結果:

![](assets/en/ViewPro/cmd_vpSetSheetOptions2.PNG)

#### 参照

[4D View Pro sheet options](configuring.md#sheet-options)<br/>[VP Get sheet options](#vp-get-sheet-options)

### VP SET SHOW PRINT LINES

<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; index : Integer} ) 
<!-- END REF -->  

<!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->

| 引数         | タイプ  |    | 説明                                                       |
| ---------- | ---- | -- | -------------------------------------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名                                  |
| visible    | ブール  | -> | Print lines displayed if True (default), hidden if False |
| index      | 整数   | -> | Sheet index                                              |

<!-- END REF -->  

#### 説明

The `VP SET SHOW PRINT LINES` command <!-- REF #_method_.VP SET SHOW PRINT LINES.Summary --> sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *visible*, pass `True` to display the print lines, and `False` to hide them. `True` is passed by default.

In *index*, pass the index of the target sheet. If no index is specified, the command applies to the current sheet.

> インデックスは 0 起点です。

The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks.


#### 例題

The following code displays print lines in a document's second sheet:

```4d
VP SET SHOW PRINT LINES("ViewProArea";True;1)

```

![set-show-print-lines](assets/en/ViewPro/vp-set-show-print-lines.png)

With a page break:

![set-show-print-lines-with-page-break](assets/en/ViewPro/vp-set-show-print-lines-page-break.png)

#### 参照

[4D Get show print lines](#vp-get-show-print-lines)

### VP SET TEXT VALUE

<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET TEXT VALUE.Params -->

| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| textValue     | テキスト   | -> | Text value to set |
| formatPattern | テキスト   | -> | Format of value   |

<!-- END REF -->  

#### 説明

The `VP SET TEXT VALUE` command <!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *textValue* parameter.


#### 例題

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### 参照

[Cell Format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET TIME VALUE

<!-- REF #_method_.VP SET TIME VALUE.Syntax -->**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  ) <!-- END REF -->  

<!-- REF #_method_.VP SET TIME VALUE.Params -->

| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| timeValue     | テキスト   | -> | Time value to set |
| formatPattern | テキスト   | -> | Format of value   |

<!-- END REF -->  

#### 説明

The `VP SET TIME VALUE` command <!-- REF #_method_.VP SET TIME VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.

The *timeValue* parameter specifies a time expressed in seconds to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *timeValue* parameter.

#### 例題

```4d
//Set the value to the current time
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);Current time)

//Set the value to a specific time with a designated format
VP SET TIME VALUE(VP Cell("ViewProArea";5;2);?12:15:06?;vk pattern long time)
```

#### 参照

[Cell Format](configuring.md#cell-format)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET VALUE](#vp-set-value)

### VP SET VALUE

<!-- REF #_method_.VP SET VALUE.Syntax -->**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object ) <!-- END REF -->  

<!-- REF #_method_.VP SET VALUE.Params -->

| 引数       | タイプ    |    | 説明                             |
| -------- | ------ | -- | ------------------------------ |
| rangeObj | オブジェクト | -> | レンジオブジェクト                      |
| valueObj | オブジェクト | -> | Cell values and format options |

<!-- END REF -->  

#### 説明

The `VP SET VALUE` command <!-- REF #_method_.VP SET VALUE.Summary -->assigns a specified value to a designated cell range<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [`VP SET TEXT VALUE`](#vp-set-text-value) and [`VP SET NUM VALUE`](#vp-set-num-value), reduce the values to specific types.

In *rangeObj*, pass a range of the cell(s) (created for example with [`VP Cell`](#vp-cell) or [`VP Column`](#vp-column)) whose value you want to specify. If *rangeObj* includes multiple cells, the value specified will be repeated in each cell.


The parameter *valueObj* is an object that includes properties for the value and the [format](configuring.md#cell-format) to assign to *rangeObj*. It can include the following properties :

| プロパティ  | タイプ                                      | 説明                                                                                                                                           |
| ------ | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value  | Integer, Real, Boolean, Text, Date, Null | Value to assign to *rangeObj* (except- time). Pass null to erase the content of the cell.                                                    |
| time   | 実数                                       | Time value (in seconds) to assign to *rangeObj*                                                                                              |
| format | テキスト                                     | 値や日時に対するパターン For information on patterns and formatting characters, please refer to the [Cell Format](configuring.md#cell-format) paragraph. |



#### 例題

```4d
//Set the cell value as False
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";False))

//Set the cell value as 2
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";2))

//Set the cell value as $125,571.35
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";125571.35;"format";"_($* #,##0.00_)"))

//Set the cell value as Hello World!
VP SET VALUE(VP Cell("ViewProArea";3;2);New object("value";"Hello World!"))

//Set the cell value as current date
VP SET VALUE(VP Cell("ViewProArea";4;2);New object("value";Current date))

//Set the cell value as current hour
VP SET VALUE(VP Cell("ViewProArea";5;2);New object("time";Current hour))

//Set the cell value as specific date and time
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";!2024-12-18!);"time";?14:30:10?;"format";vk pattern full date time))

//Erase cell content
VP SET VALUE(VP Cell("ViewProArea";3;9);New object("value";Null))
```
#### 参照

[Cell Format](configuring.md#cell-format)<br/>[VP Get values](#vp-get-value)<br/>[VP SET VALUE](#vp-set-value)<br/>[VP SET BOOLEAN VALUE](#vp-set-boolean-value)<br/>[VP SET DATE TIME VALUE](#vp-set-date-time-value)<br/>[VP SET FIELD](#vp-set-field)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET NUM VALUE](#vp-set-num-value)<br/>[VP SET TEXT VALUE](#vp-set-text-value)<br/>[VP SET TIME VALUE](#vp-set-time-value)

### VP SET VALUES

<!-- REF #_method_.VP SET VALUES.Syntax -->**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection ) <!-- END REF -->  

<!-- REF #_method_.VP SET VALUES.Params -->

| 引数        | タイプ    |    | 説明                   |
| --------- | ------ | -- | -------------------- |
| rangeObj  | オブジェクト | -> | レンジオブジェクト            |
| valuesCol | コレクション | -> | Collection of values |

<!-- END REF -->  

#### 説明

The `VP SET VALUES` command <!-- REF #_method_.VP SET VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](#vp-cell)) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.
> * If *rangeObj* is not a cell range, only the first cell of the range is used.
> * If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

The *valuesCol* parameter is two-dimensional:

*   The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row.
*   それぞれのサブコレクションは行におけるセルの値を定義します。 Values can be Integer, Real, Boolean, Text, Date, Null, or Object. If the value is an object, it can have the following properties:

    | プロパティ | タイプ                                      | 説明                               |
    | ----- | ---------------------------------------- | -------------------------------- |
    | value | Integer, Real, Boolean, Text, Date, Null | Value in the cell (except- time) |
    | time  | 実数                                       | Time value (in seconds)          |

#### 例題

```4d
$param:=New collection
$param.push(New collection(1;2;3;False)) //first row, 4 values
$param.push(New collection) //second row, untouched
$param.push(New collection(4;5;Null;"hello";"world")) // third row, 5 values
$param.push(New collection(6;7;8;9)) // fourth row, 4 values
$param.push(New collection(Null;New object("value";Current date;"time";42))) //fifth row, 1 value

VP SET VALUES(VP Cell("ViewProArea";2;1);$param)
```

![](assets/en/ViewPro/cmd_vpSetValues.PNG)

#### 参照

[VP Get formulas](configuring.md#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP Get Values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUE](#vp-set-value)

### VP SET WORKBOOK OPTIONS 

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF -->  

<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->
| 引数         | タイプ    |    | 説明                                               |
| ---------- | ------ | -- | ------------------------------------------------ |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                          |
| optionObj  | オブジェクト | -> | Object containing the workbook options to be set |
<!-- END REF -->  

#### 説明

`VP SET WORKBOOK OPTIONS` <!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->
sets the workbook options in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *optionObj*, pass the workbook options to apply to *vpAreaName*.

If *optionObj* is empty, the command does nothing.

Modified workbook options are saved with the document.

The following table lists the available workbook options:

| プロパティ                                 | タイプ                     | 説明                                                                                                                                                                                                                                                     |
| ------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| allowUserDragMerge                    | boolean                 | The drag merge operation is allowed (select cells and drag the selection to merge cells)                                                                                                                                                               |
| allowAutoCreateHyperlink              | boolean                 | Enables automatic creation of hyperlinks in the spreadsheet.                                                                                                                                                                                           |
| allowContextMenu                      | boolean                 | The built-in context menu can be opened.                                                                                                                                                                                                               |
| allowCopyPasteExcelStyle              | boolean                 | Styles from a spreadsheet can be copied and pasted to Excel, and vice-versa.                                                                                                                                                                           |
| allowDynamicArray                     | boolean                 | Enables dynamic arrays in worksheets                                                                                                                                                                                                                   |
| allowExtendPasteRange                 | boolean                 | Extends the pasted range if the pasted range is not enough for the pasted data                                                                                                                                                                         |
| allowSheetReorder                     | boolean                 | Sheet reordering is allowed                                                                                                                                                                                                                            |
| allowUndo                             | boolean                 | Undoing edits is allowed.                                                                                                                                                                                                                              |
| allowUserDeselect                     | boolean                 | Deselecting specific cells from a selection is allowed.                                                                                                                                                                                                |
| allowUserDragDrop                     | boolean                 | Drag and drop of range data is allowed                                                                                                                                                                                                                 |
| allowUserDragFill                     | boolean                 | Drag fill is allowed                                                                                                                                                                                                                                   |
| allowUserEditFormula                  | boolean                 | Formulas can be entered in cells                                                                                                                                                                                                                       |
| allowUserResize                       | boolean                 | Columns and rows can be resized                                                                                                                                                                                                                        |
| allowUserZoom                         | boolean                 | Zooming (ctrl + mouse wheel) is allowed                                                                                                                                                                                                                |
| autoFitType                           | number                  | Content is formatted to fit in cells, or cells and headers. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk auto fit type cell </td><td>0</td><td> The content autofits cells</td></tr><tr><td> vk auto fit type cell with header </td><td>1</td><td> The content autofits cells and headers</td></tr></table>                                                                                                                                                          |
| backColor                             | string                  | A color string used to represent the background color of the area, such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5". The initial backgroundcolor is hidden when a backgroundImage is set.                                                          |
| backgroundImage                       | string / picture / file | Background image for the area.                                                                                                                                                                                                                         |
| backgroundImageLayout                 | number                  | How the background image is displayed. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk image layout center </td><td>1</td><td> In the center of the area.</td></tr><tr><td> vk image layout none </td><td>3</td><td> In the upper left corner of the area with its original size.</td></tr><tr><td> vk image layout stretch </td><td>0</td><td> Fills the area.</td></tr><tr><td> vk image layout zoom </td><td>2</td><td> Displayed with its original aspect ratio.</td></tr></table>                                                                                                                                                                               |
| calcOnDemand                          | boolean                 | Formulas are calculated only when they are demanded.                                                                                                                                                                                                   |
| columnResizeMode                      | number                  | Resize mode for columns. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk resize mode normal </td><td>0</td><td> Use normal resize mode (i.e remaining columns are affected)</td></tr><tr><td> vk resize mode split </td><td>1</td><td> Use split mode (i.e remaining columns are not affected)</td></tr></table>                                                                                                                                                                                             |
| copyPasteHeaderOptions                | number                  | Headers to include when data is copied to or pasted. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk copy paste header options all headers</td><td>3</td><td> Includes selected headers when data is copied; overwrites selected headers when data is pasted.</td></tr><tr><td> vk copy paste header options column headers </td><td>2</td><td> Includes selected column headers when data is copied; overwrites selected column headers when data is pasted.</td></tr><tr><td> vk copy paste header options no headers</td><td>0</td><td> Column and row headers are not included when data is copied; does not overwrite selected column or row headers when data is pasted.</td></tr><tr><td> vk copy paste header options row headers</td><td>1</td><td>   Includes selected row headers when data is copied; overwrites selected row headers when data is pasted.</td></tr></table>                                                                                                                                                                 |
| customList                            | collection              | The list for users to customize drag fill, prioritize matching this list in each fill. Each collection item is a collection of strings. See on [GrapeCity's website](https://www.grapecity.com/spreadjs/docs/v13/online/AutoFillLists.html#b).         |
| cutCopyIndicatorBorderColor           | string                  | Border color for the indicator displayed when the user cuts or copies the selection.                                                                                                                                                                   |
| cutCopyIndicatorVisible               | boolean                 | Display an indicator when copying or cutting the selected item.                                                                                                                                                                                        |
| defaultDragFillType                   | number                  | The default drag fill type. Available values : <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk auto fill type auto </td><td>5</td><td> Automatically fills cells. </td></tr><tr><td> vk auto fill type clear values </td><td>4</td><td> Clears cell values.</td></tr><tr><td> vk auto fill type copycells </td><td>0</td><td> Fills cells with all data objects, including values, formatting, and formulas.</td></tr><tr><td> vk auto fill type fill formatting only </td><td>2</td><td> Fills cells only with formatting.</td></tr><tr><td> vk auto fill type fill series </td><td>1</td><td> Fills cells with series. </td></tr><tr><td> vk auto fill type fill without formatting </td><td>3</td><td> Fills cells with values and not formatting. </td></tr></table>                                                                                                                                                                               |
| enableAccessibility                   | boolean                 | Accessibility support is enabled in the spreadsheet.                                                                                                                                                                                                   |
| enableFormulaTextbox                  | boolean                 | The formula text box is enabled.                                                                                                                                                                                                                       |
| grayAreaBackColor                     | string                  | A color string used to represent the background color of the gray area , such as "red", "#FFFF00", "rgb(255,0,0)", "Accent 5", and so on.                                                                                                              |
| highlightInvalidData                  | boolean                 | Invalid data is highlighted.                                                                                                                                                                                                                           |
| iterativeCalculation                  | boolean                 | Enables iterative calculation. See on [Grapecity's website](https://www.grapecity.com/spreadjs/docs/v14/online/calculating-iterative.html).                                                                                                            |
| iterativeCalculationMaximumChange     | numeric                 | Maximum amount of change between two calculation values.                                                                                                                                                                                               |
| iterativeCalculationMaximumIterations | numeric                 | Number of times the formula should recalculate.                                                                                                                                                                                                        |
| newTabVisible                         | boolean                 | Display a special tab to let users insert new sheets.                                                                                                                                                                                                  |
| numbersFitMode                        | number                  | Changes display mode when date/number data width is longer than column width. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk numbers fit mode mask</td><td>0</td><td> Replace data content with "###" and shows tip</td></tr><tr><td> vk numbers fit mode overflow </td><td>1</td><td> Display data content as a string. If next cell is empty, overflow the content.</td></tr></table>                                                                                                                                        |
| pasteSkipInvisibleRange               | boolean                 | Paste or skip pasting data in invisible ranges: <ul><li>False (default): paste data</li><li>True: Skip pasting in invisible ranges</li></ul>See [Grapecity's docs](https://www.grapecity.com/spreadjs/docs/v14/online/paste-skip-data-invisible-range.html) for more information on invisible ranges.                     |
| referenceStyle                        | number                  | Style for cell and range references in cell formulas. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk reference style A1 </td><td>0</td><td> Use A1 style.</td></tr><tr><td> vk reference style R1C1 </td><td>1</td><td> Use R1C1 style</td></tr></table>                                                                                                                                                                |
| resizeZeroIndicator                   | number                  | Drawing policy when the row or column is resized to zero. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk resize zero indicator default </td><td>0</td><td> Uses the current drawing policy when the row or column is resized to zero.</td></tr><tr><td> vk resize zero indicator enhanced </td><td>1</td><td> Draws two short lines when the row or column is resized to zero.</td></tr></table>                                                                                                                                                            |
| rowResizeMode                         | number                  | The way rows are resized. Available values are the same as columnResizeMode                                                                                                                                                                            |
| scrollbarAppearance                   | number                  | Scrollbar appearance. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk scrollbar appearance mobile</td><td>1</td><td> Mobile scrollbar appearance.</td></tr><tr><td> vk scrollbar appearance skin (default)</td><td>0</td><td> Excel-like classic scrollbar appearance.</td></tr></table>                                                                                                                                                                                                |
| scrollbarMaxAlign                     | boolean                 | The scroll bar aligns with the last row and column of the active sheet.                                                                                                                                                                                |
| scrollbarShowMax                      | boolean                 | The displayed scroll bars are based on the entire number of columns and rows in the sheet.                                                                                                                                                             |
| scrollByPixel                         | boolean                 | Enable precision scrolling by pixel.                                                                                                                                                                                                                   |
| scrollIgnoreHidden                    | boolean                 | The scroll bar ignores hidden rows or columns.                                                                                                                                                                                                         |
| scrollPixel                           | integer                 | Decides scrolling by that number of pixels at a time when scrollByPixel is true. The final scrolling pixels are the result of `scrolling delta * scrollPixel`. For example: scrolling delta is 3, scrollPixel is 5, the final scrolling pixels are 15. |
| showDragDropTip                       | boolean                 | Display the drag-drop tip.                                                                                                                                                                                                                             |
| showDragFillSmartTag                  | boolean                 | Display the drag fill dialog.                                                                                                                                                                                                                          |
| showDragFillTip                       | boolean                 | Display the drag-fill tip.                                                                                                                                                                                                                             |
| showHorizontalScrollbar               | boolean                 | Display the horizontal scroll bar.                                                                                                                                                                                                                     |
| showResizeTip                         | number                  | How to display the resize tip. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk show resize tip both </td><td>3</td><td> Horizontal and vertical resize tips are displayed.</td></tr><tr><td> vk show resize tip column </td><td>1</td><td> Only the horizontal resize tip is displayed.</td></tr><tr><td> vk show resize tip none </td><td>0</td><td> No resize tip is displayed.</td></tr><tr><td> vk show resize tip row </td><td>2</td><td> Only the vertical resize tip is displayed.</td></tr></table>                                                                                                                                                                                       |
| showScrollTip                         | number                  | How to display the scroll tip. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk show scroll tip both </td><td>3</td><td> Horizontal and vertical scroll tips are displayed.</td></tr><tr><td> vk show scroll tip horizontal </td><td>1</td><td> Only the horizontal scroll tip is displayed.</td></tr><tr><td> vk show scroll tip none </td><td> No scroll tip is displayed.</td></tr><tr><td> vk show scroll tip vertical </td><td>2</td><td> Only the vertical scroll tip is displayed.</td></tr></table>                                                                                                                                                                                       |
| showVerticalScrollbar                 | boolean                 | Display the vertical scroll bar.                                                                                                                                                                                                                       |
| tabEditable                           | boolean                 | The sheet tab strip can be edited.                                                                                                                                                                                                                     |
| tabNavigationVisible                  | boolean                 | Display the sheet tab navigation.                                                                                                                                                                                                                      |
| tabStripPosition                      | number                  | Position of the tab strip. 使用可能な値: <table><tr><th>定数</th><th>値</th><th>説明</th></tr><tr><td> vk tab strip position bottom </td><td>0</td><td> Tab strip position is relative to the bottom of the workbook.</td></tr><tr><td> vk tab strip position left </td><td>2</td><td> Tab strip position is relative to the left of the workbook.</td></tr><tr><td> vk tab strip position right </td><td>3</td><td> Tab strip position is relative to the right of the workbook.</td></tr><tr><td> vk tab strip position top </td><td>1</td><td> Tab strip position is relative to the top of the workbook.</td></tr></table>                                                                                                                                                                                           |
| tabStripRatio                         | number                  | Percentage value (0.x) that specifies how much of the horizontal space will be allocated to the tab strip. The rest of the horizontal area (1 - 0.x) will allocated to the horizontal scrollbar.                                                       |
| tabStripVisible                       | boolean                 | Display the sheet tab strip.                                                                                                                                                                                                                           |
| tabStripWidth                         | number                  | Width of the tab strip when position is left or right. Default and minimum is 80.                                                                                                                                                                      |
| useTouchLayout                        | boolean                 | Whether to use touch layout to present the Spread component.                                                                                                                                                                                           |

#### 例題

To set the allowExtendpasteRange option in "ViewProArea":

```4d
var $workbookOptions : Object

$workbookOptions:= New Object
$workbookOptions.allowExtendPasteRange:=True

VP SET WORKBOOK OPTIONS("ViewProArea";$workbookOptions)
```

#### See Also

[VP Get workbook options](#vp-get-workbook-options)

### VP SHOW CELL

<!-- REF #_method_.VP SHOW CELL.Syntax -->**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } ) <!-- END REF -->  

<!-- REF #_method_.VP SHOW CELL.Params -->

| 引数       | タイプ    |    | 説明                                      |
| -------- | ------ | -- | --------------------------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト                               |
| vPos     | 整数     | -> | Vertical view position of cell or row   |
| hPos     | 整数     | -> | Horizontal view position of cell or row |

<!-- END REF -->  

#### 説明

The `VP SHOW CELL` command <!-- REF #_method_.VP SHOW CELL.Summary -->vertically and horizontally repositions the view of the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass a range of cells as an object to designate the cells to be viewed. The view of the *rangeObj* will be positioned vertically or horizontally (i.e., where *rangeObj* appears) based on the *vPos* and *hPos* parameters. The *vPos* parameter defines the desired vertical position to display the *rangeObj*, and the *hPos* parameter defines the desired horizontal position to display the *rangeObj*.

The following selectors are available:

| Selector              | 説明                                                                                                                                                                                                                                                                                       | Available with *vPos* | Available with *hPos* |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------- |
| `vk position bottom`  | Vertical alignment to the bottom of cell or row.                                                                                                                                                                                                                                         | ○                     |                       |
| `vk position center`  | Alignment to the center. The alignment will be to the cell, row, or column limit according to the view position indicated:<li>Vertical view position - cell or row</li><li>Horizontal view position - cell or column</li>                                                                                                           | ○                     | ○                     |
| `vk position left`    | Horizontal alignment to the left of the cell or column                                                                                                                                                                                                                                   |                       | ○                     |
| `vk position nearest` | Alignment to the closest limit (top, bottom, left, right, center). The alignment will be to the cell, row, or column limit according to the view position indicated:<li>Vertical view position (top, center, bottom) - cell or row </li><li>Horizontal view position (left, center, right) - cell or column | ○                     | ○                     |
| `vk position right`   | Horizontal alignment to the right of the cell or column                                                                                                                                                                                                                                  |                       | ○                     |
| `vk position top`     | Vertical alignment to the top of cell or row                                                                                                                                                                                                                                             | ○                     |                       |
> This command is only effective if repositioning the view is possible. For example, if the *rangeObj* is in cell A1 (the first column and the first row) of the current sheet, repositioning the view will make no difference because the vertical and horizontal limits have already been reached (i.e., it is not possible to scroll any higher or any more to the left). The same is true if *rangeObj* is in cell C3 and the view is repositioned to the center or the bottom right. The view remains unaltered.

#### 例題

You want to view the cell in column AY, row 51 in the center of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
// Move the view to show the cell
VP SHOW CELL($displayCell;vk position center;vk position center)
```

結果:

![](assets/en/ViewPro/cmd_vpShowCell1.PNG)

The same code with the vertical and horizontal selectors changed to show the same cell positioned at the top right of the 4D View Pro area:

```4d
$displayCell:=VP Cell("myVPArea";50;50)
  // Move the view to show the cell
VP SHOW CELL($displayCell;vk position top;vk position right)
```

結果:

![](assets/en/ViewPro/cmd_vpShowCell2.PNG)

#### 参照

[VP ADD CELL](#vp-add-cell)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)

### VP SUSPEND COMPUTING

<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->**VP SUSPEND COMPUTING** ( *vpAreaName* : Text ) <!-- END REF -->  

<!-- REF #_method_.VP SUSPEND COMPUTING.Params -->

| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |

<!-- END REF -->  

#### 説明

The `VP SUSPEND COMPUTING` command <!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->stops the calculation of all formulas in *vpAreaName*<!-- END REF -->. This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes.

The command pauses the calculation service in 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after `VP SUSPEND COMPUTING` command  is executed are not calculated.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。
> The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of `VP SUSPEND COMPUTING` command  must be balanced by a corresponding execution of the `VP RESUME COMPUTING` command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed.

#### 例題

You've added two buttons to the form so that the user can suspend/resume calculations:

![](assets/en/ViewPro/cmd_vpStopCalculations.PNG)

The Suspend Computing button code:

```4d
 //pause calculations while users enter information
 If(FORM Event.code=On Clicked)

    VP SUSPEND COMPUTING("ViewProArea")

 End if
```


```4d
If(FORM Event.code=On Clicked)

    VP RESUME COMPUTING("ViewProArea")

End if
```
#### See Also

[VP RECOMUTE FORMULAS](#vp-recompute-formulas)<br/>[VP RESUME COMPUTING](#vp-resume-computing)


<style> h2 { background: #d9ebff;}</style>
