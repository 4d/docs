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


`VP ADD RANGE NAME` コマンドは、 <!-- REF #_method_.VP ADD RANGE NAME.Summary -->開いているドキュメント内に命名レンジを作成、または編集します<!-- END REF -->。
> このコマンドで作成された命名レンジはドキュメントとともに保存されます。

名前をつけたいレンジを *rangeObj* に、新しいレンジの名前は *name* に渡します。 同じスコープ内で名前が既に使用されている場合、新しい命名レンジは既存のものを上書きします。 ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

*options* 引数には、命名レンジの追加プロパティを格納したオブジェクト型を渡すことができます。 以下のオブジェクトプロパティがサポートされています:


| プロパティ   | タイプ  | 説明                                                                                                                                                                                                                                                                                                                                        |
| ------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| scope   | 数値   | レンジのスコープ。 シートのインデックス (0起点) を渡すか、あるいは以下の定数を使用することができます: <p><li>`vk current sheet`</li><li>`vk workbook`</li><p><p>スコープは、レンジ名が特定のワークシートに限定されたローカル (*scope* = シートのインデックス または `vk current sheet`) なものか、あるいはワークブック全体で使用できるグローバル (*scope* = `vk workbook`) なものかを決定します。 |
| comment | テキスト | 命名レンジに割り当てられたコメント                                                                                                                                                                                                                                                                                                                         |
> * 命名レンジの実態は、座標を格納した命名フォーミュラです。 `VP ADD RANGE NAME` を使うと簡単に命名レンジの作成ができますが、[`VP ADD FORMULA NAME`](#vp-add-formula-name) コマンドで命名レンジを作成することもできます。
> * 命名レンジを定義するフォーミュラは、[`VP Get formula by name`](#vp-get-formula-by-name) コマンドで取得することができます。


#### 例題

あるセルレンジに対して命名レンジを作成します:

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

`VP ADD SELECTION` コマンドは、 <!-- REF #_method_.VP ADD SELECTION.Summary -->指定されたセルを、現在選択されているセル範囲に追加します<!-- END REF -->。

*rangeObj* には、カレントセレクションに追加するセルのレンジオブジェクトを渡します。
> アクティブセルは変更されません。

#### 例題

以下のようにセルが選択されている場合:

![](assets/en/ViewPro/cmd_vpAddSelection1.PNG)

以下のコードを実行すると、指定したセルを選択範囲に追加します:

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

`VP ADD SHEET` コマンドは、 <!-- REF #_method_.VP ADD SHEET.Summary -->*vpAreaName* にロードされているドキュメントにシートを挿入します。<!-- END REF --> 

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*index* 引数として、新しいシートのインデックスを渡します。 渡した *index* 引数が 0以下だった場合、コマンドは新しいシートを先頭に挿入します。 *index* 引数がシートの総数より多い場合、コマンドは既存のシートの後に新しいシートを挿入します。
> インデックスは 0 起点です。

*name* 引数として、新しいシートの名前を渡します。 新しい名前には、次の文字を含めることはできません: `*, :, [, ], ?,\,/`

#### 例題

ドキュメントには現在 3つのシートがあります:

![vp-document-with-3-sheets](assets/en/ViewPro/vp-sheet-3.png)

新しいシートを 3つ目の位置 (インデックスは 2) に挿入し、名前を "March" にします:

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

`VP ADD SPAN` コマンドは、*rangeObj* に渡したセルを単一のセルに結合します。

*rangeObj* には、セルのレンジオブジェクトを渡します。 レンジ内のセルは結合され、複数のカラム/行にまたがる大きなセルが作成されます。 複数のセルレンジを渡すことで、一度に複数の結合セルを作成することもできます。 ただし、セルレンジが重なった場合、最初のセルレンジのみが使用されます。

> - 結合セルでは、左上端セルのデータのみが表示されます。 他のセルのデータは結合が解除されるまで非表示になります。
> - 結合セル内の非表示データは、フォーミュラを使用することでアクセス可能です (フォーミュラは左上端セルから始まります)。

#### 例題

"First quarter" セルと "Second quarter" セルを、それぞれ右 2つのセルと結合し、"South area" セルは下 2つのセルと結合します:

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

`VP ADD STYLESHEET` コマンドは、 <!-- REF #_method_.VP ADD STYLESHEET.Summary -->開いているドキュメント内にて、*styleName* 引数で指定したスタイルシートを、*styleObj* 引数のプロパティの組み合わせに基づいて作成または変更します<!-- END REF -->。 同じ名前とスコープを持つスタイルシートがドキュメント内にすでに存在する場合、このコマンドはそれを新しい値で上書きします。

> このコマンドで作成されたスタイルシートはドキュメントとともに保存されます。


*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*styleName* 引数には、スタイルシートの名前を渡します。 同じスコープ内で名前が既に使用されている場合、新しいスタイルシートは既存のものを上書きします。 ただし異なるスコープであれば同じ名前を使用することが可能です (以下参照)。

*styleObj* には、スタイルシートの設定 (例: フォント、テキスト装飾、文字揃え、境界線、など) を指定します。 スタイルプロパティの完全な一覧については、[スタイルオブジェクトプロパティ](configuring.md#スタイルオブジェクトプロパティ) を参照ください。

任意の *scope* 引数を使用することで、スタイルシートをどこに定義するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

*   `vk current sheet`
*   `vk workbook`

同じ *styleName* のスタイルシートが、ワークブックレベルとシートレベルとで定義されている場合、シートレベルのスタイルが優先されます。

スタイルシートを適用するには、[VP SET DEFAULT STYLE](#vp-set-default-style) または [VP SET CELL STYLE](#vp-set-cell-style) コマンドを使用します。


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

*GreenDashDotStyle* という名前の、以下のようなスタイルオブジェクトを作成します:

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


`VP All` コマンドは、 <!-- REF #_method_.VP ALL.Summary -->すべてのセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

カレントスプレッドシートにおいて、全セルのレンジオブジェクトを定義します:

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

`VP Cell` コマンドは、 <!-- REF #_method_.VP Cell.Summary -->特定のセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

> このコマンドは単一セルのレンジを想定しています。 複数セルに対するレンジオブジェクトを作成するには、[VP Cells](#vp-cells) コマンドを使用します。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*column* 引数で、セルレンジの位置のカラムを定義します。 この引数としてカラムのインデックスを渡します。

*row* 引数で、セルレンジの位置をの行を定義します。 この引数として行のインデックスを渡します。

任意の *sheet* 引数で、レンジが定義されるシートのインデックスを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

> インデックスは 0 起点です。

#### 例題

以下に表示されている (カレントスプレッドシートの) セルに対するレンジオブジェクトを定義します:

![vp-cell](assets/en/ViewPro/cmd_vpCell.png)

以下のようにコードを書くことができます:

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


`VP Cells` コマンドは、 <!-- REF #_method_.VP Cells.Summary -->指定された複数のセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*column* 引数で、セルレンジの先頭カラムを指定します。 この引数としてカラムのインデックス (0 起点) を渡します。 レンジが複数カラムにわたる場合、*columnCount* 引数も併せて使用します。

*row* 引数で、セルレンジの位置を決める行を指定します。 この引数として行のインデックス (0 起点) を渡します。 レンジが複数行にわたる場合、*rowCount* 引数も併せて使用します。

*columnCount* には、レンジに含まれるカラム数を指定することができます。 *columnCount* 引数は 0 より大きい値でなくてはなりません。

*rowCount* には、レンジに含まれる行数を指定することができます。 *rowCount* 引数は 0 より大きい値でなくてはなりません。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

(カレントシートにおいて) 以下のセルのレンジオブジェクトを定義します:

![](assets/en/ViewPro/vp-cells.png)

以下のようにコードを書くことができます:

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


`VP Column` コマンドは、 <!-- REF #_method_.VP Column.Summary -->特定のカラム、あるいは複数のカラムを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*column* 引数で、カラムレンジの先頭カラムを指定します。 この引数としてカラムのインデックス (0 起点) を渡します。 レンジが複数カラムにわたる場合には、任意の *columnCount* 引数も併せて使用します。

任意の *columnCount* には、レンジに含まれるカラム数を指定することができます。 *columnCount* 引数は 0 より大きい値でなくてはなりません。 省略時、デフォルトで値は 1 に設定され、カラム型のレンジが作成されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

以下に表示されている (カレントスプレッドシートの) カラムに対するレンジオブジェクトを定義します:

![](assets/en/ViewPro/cmd_vpColumn.PNG)

以下のようにコードを書くことができます:

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

`VP COLUMN AUTOFIT` コマンドは、 <!-- REF #_method_.VP COLUMN AUTOFIT.Summary -->*rangeObj* 引数のレンジ内にあるカラムを、そのコンテンツに応じて自動的にリサイズします<!-- END REF -->。

*rangeObj* 引数として、サイズを自動調整したいカラムを格納しているレンジオブジェクトを渡します。

#### 例題

以下のカラムはすべて同じサイズで、一部のテキストが表示しきれていません:

![](assets/en/ViewPro/cmd_vpColumnAutoFit1.PNG)

カラムを選択して、以下のコードを実行すると:

```4d
 VP COLUMN AUTOFIT(VP Get selection("ViewProarea"))
```

コンテンツに合うようにカラムがリサイズされます:

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

`VP Combine ranges` コマンドは、 <!-- REF #_method_.VP Combine Ranges.Summary -->2つ以上のレンジオブジェクトを統合した新しいレンジオブジェクトを返します<!-- END REF -->。 レンジはすべて同じ 4D View Pro エリア内のものでなくてはなりません。

*rangeObj* には、1つ目のレンジオブジェクトを渡します。

*otherRangeObj* には、*rangeObj* のレンジオブジェクトと統合させる他のレンジオブジェクトを渡します。
> このコマンドは *rangeObj* および *otherRangeObj* のオブジェクトを参照によって組み合わせます。

#### 例題

セル、カラム、行のレンジオブジェクトを、新規レンジオブジェクトにまとめます:


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

`VP Convert from 4D View` コマンドを使用すると、 <!-- REF #_method_.VP Convert from 4D View.Summary -->旧式の 4D View ドキュメントを 4D View Pro オブジェクトへと変換することができます<!-- END REF -->。
> 旧式の 4D View プラグインが現環境にインストールされていなくても、このコマンドは使用可能です。


*4DViewDocument* には変換する 4D View ドキュメントを格納する BLOB変数やフィールドを渡します。 コマンドは、4D View ドキュメントに保存されていた情報をすべて 4D View Pro 属性へと変換した 4D View Pro オブジェクトを返します。

#### 例題


BLOB に保存されている 4D View エリアから 4D View Pro オブジェクトを取得します:


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

`VP Convert to picture` コマンドは、 <!-- REF #_method_.VP Convert to picture.Summary -->*vpObject* 引数で指定した 4D View Pro オブジェクト (あるいは *vpObject* 内にある、*rangeObj* 引数で指定したレンジ) を、SVGピクチャーに変換します。

このコマンドは以下のような場合に有用です:

*   4D View Pro ドキュメントを 4D Write Pro ドキュメントなど、他のドキュメントに埋め込みたい場合
*   4D View Pro ドキュメントを、4D View Pro エリアに読み込まずに印刷したい場合

*vpObject* 引数には、変換したい 4D View Pro オブジェクトを渡します。 このオブジェクトは事前に [VP Export to object](#vp-export-to-object) コマンドで解析するか、または [VP EXPORT DOCUMENT](#vp-export-document) コマンドにより保存してある必要があります。
> 4D View Pro エリアに含まれている式や書式 ([セルフォーマット](configuring.md#セルフォーマット) 参照) が正常に書き出されるよう、少なくともそれらが一度は評価されていることが SVG変換プロセスには必要です。 事前に評価されていないドキュメントを変換した場合、式や書式が予期せぬ形にレンダリングされている可能性があります。

*rangeObj* には、変換するセルのレンジを渡します。 この引数が省略された場合のデフォルトでは、ドキュメントのコンテンツ全体が変換されます。

書式 (上の注記参照)、ヘッダーの表示状態、カラムと行などを含めた表示属性に準じて、ドキュメントコンテンツは変換されます。 以下の要素の変換がサポートされます:

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

コマンドは SVGフォーマットのピクチャーを返します。


#### 例題

4D View Pro エリアを SVG に変換し、結果をプレビューするためピクチャー変数に戻り値を代入します:


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
</details><!-- REF #_method_.Copy to object.Syntax -->**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF --><!-- REF #_method_.Copy to object.Params -->| 引数       | タイプ    |    | 説明                              |
| -------- | ------ | -- | ------------------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト                       |
| options  | オブジェクト | -> | 追加のオプション                        |
| 戻り値      | オブジェクト | <- | 返されるオブジェクト。 コピーされたデータが格納されています。 |<!-- END REF -->#### 説明

`VP Copy to object` コマンドは、<!-- REF #_method_.Copy to object.Summary -->*rangeObj* のコンテンツ、スタイル、フォーミュラをオブジェクトにコピーします<!-- END REF -->。

*rangeObj* には、コピーしたい値、フォーマット、フォーミュラを格納しているセルレンジを渡します。 *rangeObj* が結合レンジの場合は、最初のものだけが使用されます。

任意の *options* 引数として、以下のプロパティを渡すことができます。

| プロパティ       | タイプ  | 説明                                                           |
| ----------- | ---- | ------------------------------------------------------------ |
| copy        | ブール  | コマンド実行後もコピーされた値、書式、数式が保持するには *true* (デフォルト)。 削除するには *false*。 |
| copyOptions | 倍長整数 | コピーまたは移動する内容を指定します。 とりうる値: <p><table><tr><th>値</th><th>説明</th></tr><tr><td>`vk clipboard options all` (デフォルト)</td><td>値、フォーマット、フォーミュラを含むすべてのデータオブジェクトをコピーします。</td></tr><tr><td>`vk clipboard options formatting`</td><td>フォーマットだけをコピーします。</td></tr><tr><td>`vk clipboard options formulas`</td><td>フォーミュラだけをコピーします。</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>フォーミュラとフォーマットをコピーします。</td></tr><tr><td>`vk clipboard options values`</td><td>値だけをコピーします。</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>値とフォーマットをコピーします。</td></tr></table></p>          |

[ワークブックオプション](#vp-set-workbook-options) で定義されている貼り付けオプションが考慮されます。

このコマンドは、コピーされたデータを含むオブジェクトを返します。

#### 例題

あるレンジのコンテンツ、値、フォーマット、フォーミュラをオブジェクトに格納し、それを別のレンジに貼り付けます:

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

### VP DELETE COLUMNS<!-- REF #_method_.VP DELETE COLUMNS.Syntax -->**VP DELETE COLUMNS** ( *rangeObj* : Object )<!-- END REF --><!-- REF #_method_.VP DELETE COLUMNS.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP DELETE COLUMNS` コマンドは、<!-- REF #_method_.VP DELETE COLUMNS.Summary -->*rangeObj* 引数で指定したカラムを削除します<!-- END REF -->。

*rangeObj* 引数には、削除するカラムを指定するレンジオブジェクトを渡します。 渡すレンジについては、以下の点に注意してください:

*   レンジにカラムと行の両方が含まれる場合、カラムのみが削除されます。
*   レンジに行しか含まれていない場合、コマンドは何もしません。
> カラムは右から左に向かって削除されます。


#### 例題

ユーザーが選択したカラムを削除します (以下の画像の B、C、D のカラムを削除します):

![](assets/en/ViewPro/cmd_vpDeleteColumns.PNG)

以下のコードを実行します:

```4d
VP DELETE COLUMNS(VP Get selection("ViewProArea"))
```

#### 参照

[VP All](#vp-delete-rows)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


### VP DELETE ROWS<!-- REF #_method_.VP DELETE ROWS.Syntax -->**VP DELETE ROWS** ( *rangeObj* : Object )<!-- END REF --><!-- REF #_method_.VP DELETE ROWS.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP DELETE ROWS` コマンドは、<!-- REF #_method_.VP DELETE ROWS.Summary -->*rangeObj* 引数で指定した行を削除します<!-- END REF -->。

*rangeObj* 引数には、削除する行を指定するレンジオブジェクトを渡します。 渡すレンジについては、以下の点に注意してください:

*   レンジにカラムと行の両方が含まれる場合、行のみが削除されます。
*   レンジにカラムしか含まれていない場合、コマンドは何もしません。
> 行は下から上に向かって削除されます。


#### 例題

ユーザーが選択した行を削除します (以下の画像の 1、2、3行目を削除します):

![](assets/en/ViewPro/cmd_vpDeleteRows.PNG)

以下のコードを実行します:

```4d
 VP DELETE ROWS(VP Get selection("ViewProArea"))
```

#### 参照

[VP All](#vp-delete-columns)<br/>[VP Cells](#vp-insert-columns)<br/>[VP Column](#vp-insert-rows)


## E

### VP EXPORT DOCUMENT<!-- REF #_method_.VP EXPORT DOCUMENT.Syntax -->**VP EXPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text {; *paramObj* : Object} )<!-- END REF --><!-- REF #_method_.VP EXPORT DOCUMENT.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| filePath   | テキスト   | -> | ドキュメントのパス名              |
| paramObj   | オブジェクト | -> | 書き出しのオプション              |<!-- END REF -->#### 説明

`VP EXPORT DOCUMENT` コマンドは、<!-- REF #_method_.VP EXPORT DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに関連付けられている 4D View Pro オブジェクトを、*filePath* と *paramObj* で指定したとおりにディスク上のドキュメントに書き出します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*filePath* には書き出すドキュメントのパスとファイル名を渡します。 パスを指定しない場合、ドキュメントは Projectフォルダーと同階層に保存されます。

ドキュメント名に拡張子を付けることで、書き出すドキュメントの形式を指定することができます:

* 4D View Pro (".4vp")
* Microsoft Excel (".xlsx")
* PDF (".pdf")
* CSV (".txt" または ".csv")

ファイル名に拡張子が含まれていなくても、*paramObj* 引数によって形式が指定されている場合、書き出されたファイルには形式に対応する拡張子がつけられます。ただし CSV形式の場合には拡張子がつきません。

任意の *paramObj* 引数を渡すと、書き出される 4D View Pro オブジェクトの複数のプロパティに加えて、書き出しが完了した際に呼び出されるコールバックメソッド名を定義することができます。


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

**Excel 形式についての注意**:

* 4D View Pro ドキュメントを Microsoft Excel 形式のファイルに書き出す場合、一部の設定が失われる可能性があります。 たとえば、4Dメソッドとフォーミュラは Excel ではサポートされません。 [GrapeCity にある一覧](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) にて、その他の設定を確認することができます。
* このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の *formula* プロパティを使用します。


**PDF 形式についての注意**:

* 4D View Pro ドキュメントを PDF 形式に書き出す場合、ドキュメントで使用されているフォントは自動的に PDF ファイルに埋め込まれます。 ただし、埋め込み可能なのは Unicode マップを持つ OpenType フォント (.OTF または .TTF ファイル) のみです。 フォントに対して有効なフォントファイルが見つからない場合、デフォルトのフォントが代用されます。
* このフォーマットへの書き出しは非同期に実行されるため、書き出し後にコードを実行するには、*paramObj* 引数の *formula* プロパティを使用します。

**CSV 形式についての注意**:

* 4D View Pro ドキュメントを CSV 形式に書き出す場合、テキストと値のみが保存されるため、一部の設定が失われる可能性があります。
* すべての値は二重引用符で括られた形で保存されます。 ユーザー定義区切りの値 (DSV) に関する詳細については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。

書き出し操作が完了すると、`VP EXPORT DOCUMENT` は自動的に、*paramObj* オブジェクトの *formula* プロパティに設定されたメソッドをトリガーします (設定されていれば)。

#### コールバックメソッド (フォーミュラ) の渡し方

`VP EXPORT DOCUMENT` コマンドに任意の *paramObj* 引数を渡す場合、[`Formula`](https://doc.4d.com/4dv19/help/command/ja/page1597.html) コマンドを使って、書き出し完了時に実行される 4Dメソッドを呼び出すことができます。 コールバックメソッドは、以下の値をローカル変数として受け取ります:

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

"VPArea" エリアのコンテンツをディスク上の 4D View Pro ドキュメントに書き出します:

```4d
var $docPath: Text

$docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
VP EXPORT DOCUMENT("VPArea";$docPath)
// MyExport.4VP がディスク上に保存されます
```


#### 例題 2

カレントシートを PDF に書き出します:

```4d
var $params: Object
$params:=New object
$params.format:=vk pdf format
$params.sheetIndex:=-1
$params.pdfOptions:=New object("title";"Annual Report";"author";Current user)
VP EXPORT DOCUMENT("VPArea";"report.pdf";$params)
```


#### 例題 3

4D View Pro ドキュメントを ".xlsx" 形式に書き出して、書き出し完了後にそのドキュメントをMicrosoft Excel で開くメソッドを呼び出します:

```4d
 $params:=New object
 $params.formula:=Formula(AfterExport)
 $params.format:=vp MS Excel format // ".xlsx"
 $params.valuesOnly:=True

 VP EXPORT DOCUMENT("ViewProArea";"c:\\tmp\\convertedfile";$params)
```

***AfterExport*** メソッド:

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

カレントシートを、縦棒 (|) 区切りの `.txt` ファイルに書き出します:

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

### VP Export to object<!-- REF #_method_.VP Export to object.Syntax -->**VP Export to object** ( *vpAreaName* : Text {; *option* : Object} ) : Object<!-- END REF --><!-- REF #_method_.VP Export to object.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| option     | オブジェクト | -> | 書き出しのオプション              |
| 戻り値        | オブジェクト | <- | 4D View Pro オブジェクト      |<!-- END REF -->#### 説明

`VP Export to object` コマンドは、<!-- REF #_method_.VP Export to object.Summary -->*vpAreaName* で指定した 4D View Pro エリアに関連付けられている 4D View Pro オブジェクトを返します<!-- END REF -->。 このコマンドによって、たとえば 4D View Pro エリアを 4Dデータベースのオブジェクトフィールドに保存することができます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*option* 引数として、必要に応じて以下の書き出しオプションを渡すことができます:


| プロパティ             | タイプ     | 説明                                                                                                                                                        |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| includeFormatInfo | boolean | フォーマット (書式) 情報を含めるには true、それ以外の場合には false (デフォルトは **true**)。 フォーマット情報は特定の場合 (例: SVGへの書き出しなど) において有用です。 一方で、このプロパティを **false** に設定することで書き出し時間を短縮することもできます。 |

4D View Pro オブジェクトについての詳細は [4D View Pro オブジェクト](configuring.md#4d-view-pro-オブジェクト) を参照ください。


#### 例題 1

4D View Pro エリアの "version" プロパティを取得します:

```4d
var $vpAreaObj : Object
var $vpVersion : Number
$vpAreaObj:=VP Export to object("vpArea")
 // $vpVersion:=OB Get($vpAreaObj;"version")
$vpVersion:=$vpAreaObj.version
```


#### 例題 2

フォーマット (書式) 情報を含めてエリアを書き出します:

```4d
var $vpObj : Object
$vpObj:=VP Export to object("vpArea";New object("includeFormatInfo";False))
```

#### 参照

[VP Convert to picture](#vp-convert-to-picture)<br/>[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP IMPORT FROM OBJECT](#vp-import-from-object)

## F

### VP Find<!-- REF #_method_.VP Find.Syntax -->**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF --><!-- REF #_method_.VP Find.Params -->| 引数              | タイプ    |    | 説明              |
| --------------- | ------ | -- | --------------- |
| rangeObj        | オブジェクト | -> | レンジオブジェクト       |
| searchValue     | テキスト   | -> | 検索値             |
| searchCondition | オブジェクト | -> | 検索条件を格納したオブジェクト |
| replaceValue    | テキスト   | -> | 置き換え値           |
| 戻り値             | オブジェクト | <- | レンジオブジェクト       |<!-- END REF -->#### 説明
`VP Find` コマンドは、<!-- REF #_method_.VP Find.Summary -->*rangeObj* に指定したレンジ内で *searchValue* に指定した値を検索します<!-- END REF -->。 任意の引数を渡すことで、検索条件を詳細に指定したり、検索結果を置換したりすることができます。

*rangeObj* 引数として、検索対象のレンジを格納したオブジェクトを渡します。

*searchValue* 引数として、*rangeObj* に指定したレンジ内で検索するテキスト値を渡します。

任意の *searchCondition* 引数を渡すことで、検索がどのように実行されるかを指定することができます。 以下のオブジェクトプロパティがサポートされています:


| プロパティ       | タイプ | 説明                                                                                                          |
| ----------- | --- | ----------------------------------------------------------------------------------------------------------- |
| afterColumn | 整数  | 検索を開始するカラムの直前のカラムの番号。 *rangeObj* 引数が統合されたレンジの場合、渡されるカラムの番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初) |
| afterRow    | 整数  | 検索を開始する行の直前の行番号。 *rangeObj* 引数が統合されたレンジの場合、渡される行番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初)         |
| all         | ブール | <li>true - *rangeObj* 内で *searchValue* の値に合致するセルはすべて返されます。</li><li>false - (デフォルト値) *rangeObj* 内で *searchValue* の値に合致する最初のセルのみが返されます。</li>                                                        |
| flags       | 整数  | <table><tr><td>`vk find flag exact match`</td><td>セルの中身全体が検索値と完全に一致する必要があります</td></tr><tr><td>`vk find flag ignore case`</td><td>文字の大小は区別されません。 例: "a" と "A" は同じとみなされます。</td></tr><tr><td>`vk find flag none`</td><td>検索フラグは指定されていません (デフォルト)。</td></tr><tr><td>`vk find flag use wild cards`</td><td>検索文字列においてワイルドカード文字 (\*,?) を使用できます。 ワイルドカードは、すべての文字列の比較に使用することができ、ワイルドカードによって置き換わる文字の数は指定されません:<li>\* は 0 から複数文字に使用可能です (例: "bl*" を検索した場合、"bl"、"black"、"blob" などが合致します)。</li><li>? は単一文字に使用可能です (例: "h?t" を検索した場合、"hot"、"hit" などが合致します)。</li></td></tr></table><p>フラグは組み合わせることができます。 たとえば:<p> <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code></p>     |
| order       | 整数  | <table><tr><td>`vk find order by columns`</td><td>検索がカラムごとに実行されます。 カラムの各行が検索されたあとに次のカラムへと移動します。</td></tr><tr><td>`vk find order by rows`</td><td>検索が行ごとに実行されます。 行の各カラムが検索されたあとに次の行へと移動します (デフォルト)。</td></tr></table>                                                                                  |
| target      | 整数  | <table><tr><td>`vk find target formula`</td><td>セルフォーミュラ内で検索がおこなわれます。</td></tr><tr><td>`vk find target tag`</td><td>セルタグ内で検索がおこなわれます。</td></tr><tr><td>`vk find target text`</td><td>セルテキスト内で検索がおこなわれます (デフォルト)。</td></tr></table><p>フラグは組み合わせることができます。 たとえば:<p> <code>$search.target:=vk find target formula+vk find target text</code></p>     |

任意の *replaceValue* 引数として、*rangeObj* 内で見つかった *searchValue* の値のテキストを置換するテキストを渡すことができます。


#### 返されるオブジェクト

この関数は、検出または置換された検索値の詳細を格納したレンジオブジェクトを返します。 何も見つからなかった場合には、空のレンジオブジェクトが返されます。


#### 例題 1

"Total" という単語が入っている最初のセルを見つけるには:

```4d
var $range;$result : Object

$range:=VP All("ViewProArea")

$result:=VP Find($range;"Total")
```


#### 例題 2

"Total" のセルを検出し、それを "Grand Total" で置き換えるには:

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


### VP FLUSH COMMANDS<!-- REF #_method_.VP FLUSH COMMANDS.Syntax -->**VP FLUSH COMMANDS** (  *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP FLUSH COMMANDS.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |<!-- END REF -->#### 説明

`VP FLUSH COMMANDS` コマンドは、<!-- REF #_method_.VP FLUSH COMMANDS.Summary -->保存されているコマンドをただちに実行し、コマンドバッファをクリアします<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

パフォーマンス向上と、送信リクエスト数を抑えるため、デベロッパーが呼び出した 4D View Pro コマンドはコマンドバッファに保存されます。 `VP FLUSH COMMANDS` は呼び出されると、メソッド終了時にコマンドをバッチとして実行し、コマンドバッファのコンテンツを空にします。

#### 例題

コマンドの実行をトレースし、コマンドバッファを空にします:

```4d
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;1);"INVOICE")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;2);"Invoice date: ")
 VP SET TEXT VALUE(VP Cell("ViewProArea1";10;3);"Due date: ")

 VP FLUSH COMMANDS(("ViewProArea1")
 TRACE
```



### VP Font to object<!-- REF #_method_.VP Font to object.Syntax -->**VP Font to object** (  *font* : Text ) : Object<!-- END REF --><!-- REF #_method_.VP Font to object.Params -->| 引数   | タイプ  |    | 説明              |
| ---- | ---- | -- | --------------- |
| font | テキスト | -> | フォントのショートハンド文字列 |<!-- END REF -->#### 説明

`VP Font to object` ユーティリティコマンドは、<!-- REF #_method_.VP Font to object.Summary -->フォントのショートハンド文字列からオブジェクトを返します<!-- END REF -->。 このオブジェクトはその後、オブジェクト記法を通してフォントプロパティ設定を取得・設定するのに使用することができます。

*font* には、フォントのショートハンド文字列を渡してフォントのプロパティを指定します (例: "12 pt Arial")。 フォントのショートハンド文字列についての詳細は、[こちら](https://www.w3schools.com/cssref/pr_font_font.asp) を参照ください。

返されるオブジェクトには、フォント属性がプロパティとして格納されています。 利用可能なプロパティの詳細については、[VP Object to font](#vp-object-to-font) コマンドを参照ください。

#### 例題 1

以下のコードを実行すると:

```4d
$font:=VP Font to object("16pt arial")
```

以下の $font オブジェクトが返されます:

```4d
{

family:arial
size:16pt
}
```


#### 例題 2

[`VP Object to font`](#vp-object-to-font) の例題を参照ください。


#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Object to font](#vp-object-to-font)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)



## G

### VP Get active cell<!-- REF #_method_.VP Get active cell.Syntax -->**VP Get active cell** (  *vpAreaName* : Text { ; *sheet* : Integer } ) : Object<!-- END REF --><!-- REF #_method_.VP Get active cell.Params -->| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 単一セルのレンジオブジェクト              |<!-- END REF -->#### 説明

`VP Get active cell` コマンドは、<!-- REF #_method_.VP Get active cell.Summary -->フォーカスを持ち、データ入力されようとしてるセル (アクティブセル) を参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題


![](assets/en/ViewPro/cmd_vpGetActiveCell.PNG)

以下のコードを実行するとアクティブセルの座標が取得できます:

```4d
$activeCell:=VP Get active cell("myVPArea")

  // 返されるレンジオブジェクトには以下が格納されています:
  //$activeCell.ranges[0].column=3
  //$activeCell.ranges[0].row=4
  //$activeCell.ranges[0].sheet=0
```

#### 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)



### VP Get cell style<!-- REF #_method_.VP Get cell style.Syntax -->**VP Get cell style** (  *rangeObj* : Object ) : Object<!-- END REF --><!-- REF #_method_.VP Get cell style.Params -->| 引数       | タイプ    |    | 説明         |
| -------- | ------ | -- | ---------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト  |
| 戻り値      | オブジェクト | <- | スタイルオブジェクト |<!-- END REF -->#### 説明

`VP Get cell style` コマンドは、<!-- REF #_method_.VP Get cell style.Summary -->*rangeObj* 引数で指定したレンジの最初のセルの [スタイルオブジェクト](configuring.md#スタイルオブジェクト) を返します<!-- END REF -->。

*rangeObj* 引数で、スタイルを取得するレンジを指定します。

*   *rangeObj* 引数としてセルレンジを渡した場合、セルのスタイルが返されます。
*   *rangeObj* 引数として、セルレンジではないレンジを渡した場合、そのレンジ内の最初のセルのスタイルが返されます。
*   *rangeObj* 引数に複数のレンジが含まれている場合、最初のレンジの最初のセルのスタイルのみが返されます。


#### 例題

選択されたセル (B2) のスタイルの詳細を取得します:

![](assets/en/ViewPro/cmd_vpGetCellStyle.PNG)

以下のコードを実行すると:

```4d
$cellStyle:=VP Get cell style(VP Get selection("myDoc"))
```

... 以下のオブジェクトが返されます:

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

### VP Get column attributes<!-- REF #_method_.VP Get column attributes.Syntax -->**VP Get column attributes** (  *rangeObj* : Object ) : Collection<!-- END REF --><!-- REF #_method_.VP Get column attributes.Params -->| 引数       | タイプ    |    | 説明              |
| -------- | ------ | -- | --------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト       |
| 戻り値      | コレクション | <- | カラムプロパティのコレクション |<!-- END REF -->#### 説明

`VP Get column attributes` コマンドは、<!-- REF #_method_.VP Get column attributes.Summary -->*rangeObj* 引数で指定したレンジ内にあるカラムのプロパティのコレクションを返します<!-- END REF -->。

*rangeObj* 引数には、属性を取得したいカラムのレンジを格納しているオブジェクトを渡します。

[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes) コマンドを使用して属性を設定してる/いないに関わらず、返されるコレクションにはカラムの属性がすべて返されます。


#### 例題

以下のコードは:

```4d
C_OBJECT($range)
C_COLLECTION($attr)

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get column attributes($range)
```

渡したレンジ内の属性のコレクションを返します:

![](assets/en/ViewPro/cmd_vpGetColumnAttributes.PNG)

#### 参照

[VP Get row attributes](#vp-get-row-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)

### VP Get column count<!-- REF #_method_.VP Get column count.Syntax -->**VP Get column count** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF --><!-- REF #_method_.VP Get column count.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | カラムの総数                      |<!-- END REF -->#### 説明

`VP Get column count` コマンドは、<!-- REF #_method_.VP Get column count.Summary -->*vpAreaName* 引数で指定した 4D View Pro エリア内の、*sheet* 引数で指定したシートにおけるカラムの総数を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートのカラム数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

以下のコードを実行すると、4D View Pro エリア内のカラムの数が返されます:

```4d
C_Integer($colCount)
$colCount:=VP Get column count("ViewProarea")
```

#### 参照

[VP Get row count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get current sheet<!-- REF #_method_.VP Get current sheet.Syntax -->**VP Get current sheet** ( *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP Get current sheet.Params -->| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| ファンクションの戻り値 | 整数   | <- | カレントシートのインデックス          |<!-- END REF -->#### 説明

`VP Get current sheet` コマンドは、<!-- REF #_method_.VP Get current sheet.Summary -->*vpAreaName* 引数で指定した View Pro エリアのカレントシートのインデックスを返します。 カレントシートとは、ドキュメント内で選択されているシートのことです。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

> インデックスは 0 起点です。

#### 例題

3番目のシートが選択されている場合:

![third-sheet](assets/en/ViewPro/vp-sheet-3-select.png)

コマンドは 2 を返します:

```4d
$index:=VP Get current sheet("ViewProArea")
```

#### 参照

[VP SET CURRENT SHEET](#vp-set-current-sheet)

### VP Get default style<!-- REF #_method_.VP Get default style.Syntax -->**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Integer<!-- END REF --><!-- REF #_method_.VP Get default style.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | カラムの総数                      |<!-- END REF -->#### 説明

`VP Get default style` コマンドは、<!-- REF #_method_.VP Get default style.Summary -->シートのデフォルトスタイルオブジェクトを返します<!-- END REF -->。 返されるオブジェクトには、ドキュメントの基本的なレンダリングプロパティに加え、[VP SET DEFAULT STYLE](#vp-set-default-style) コマンドによって事前に設定されたデフォルトのスタイル設定 (あれば) が格納されます。 スタイルプロパティの詳細な情報については、[スタイルオブジェクトとスタイルシート](configuring.md#スタイルオブジェクトとスタイルシート) を参照ください。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートのカラム数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

このドキュメントのデフォルトスタイルを取得したい場合:

![](assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

以下のコードを実行すると:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

*$defaultStyle* オブジェクトに以下のような情報が返されます:

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


### VP Get formula<!-- REF #_method_.VP Get formula.Syntax -->**VP Get formula** ( *rangeObj* : Object) : Text<!-- END REF --><!-- REF #_method_.VP Get formula.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
| 戻り値      | テキスト   | <- | Formula   |<!-- END REF -->#### 説明


`VP Get formula` コマンドは、<!-- REF #_method_.VP Get formula.Summary -->指定したセルレンジのフォーミュラを取得します<!-- END REF -->。

*rangeObj* 引数で、フォーミュラを取得したいレンジを指定します。 *rangeObj* 引数のレンジが複数セルあるいは複数レンジを指定している場合、最初のセルのフォーミュラが返されます。 *rangeObj* 引数がフォーミュラのないセルを指定している場合、コマンドは空の文字列を返します。

#### 例題

```4d
  // フォーミュラを設定します
VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")

$result:=VP Get formula(VP Cell("ViewProArea";5;2)) // $result="SUM($A$1:$C$10)"
```
#### 参照

[VP Get formulas](#vp-get-formulas)<br/>[VP SET FORMULA](#vp-set-formula)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP Get formula by name<!-- REF #_method_.VP Get formula by name.Syntax -->**VP Get formula by name** ( *vpAreaName* : Text ; *name* : Text { ; *scope* : Number } ) : Object<!-- END REF --><!-- REF #_method_.VP Get formula by name.Params -->| 引数         | タイプ  |    | 説明                         |
| ---------- | ---- | -- | -------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名    |
| name       | テキスト | -> | 命名レンジの名前                   |
| scope      | 数値   | -> | ターゲットのスコープ (デフォルト=カレントシート) |
| 戻り値        | テキスト | <- | 命名フォーミュラ、または命名レンジの定義       |<!-- END REF -->#### 説明

`VP Get formula by name` コマンドは、<!-- REF #_method_.VP Get formula by name.Summary -->*name* 引数で指定された名前の命名フォーミュラ、あるいは命名レンジに対応したフォーミュラとコメントを返します。定義されたスコープにそれらが存在しない場合には **null** が返されます<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*name* には、取得したい命名レンジあるいは命名フォーミュラの名前を渡します。 命名レンジは、絶対セル参照を格納したフォーミュラとして返されるという点に注意してください。

*scope* 引数を使用することで、フォーミュラを取得するスコープを定義できます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

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

### VP Get formulas<!-- REF #_method_.VP Get formulas.Syntax -->**VP Get formulas** ( *rangeObj* : Object ) : Collection<!-- END REF --><!-- REF #_method_.VP Get formulas.Params -->| 引数       | タイプ    |    | 説明             |
| -------- | ------ | -- | -------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト      |
| 戻り値      | コレクション | <- | フォーミュラ値のコレクション |<!-- END REF -->#### 説明

`VP Get formulas` コマンドは、<!-- REF #_method_.VP Get formulas.Summary -->*rangeObj* 引数で指定したレンジからフォーミュラを取得します<!-- END REF -->。

*rangeObj* 引数で、フォーミュラを取得したいレンジを指定します。 *rangeObj* 引数のレンジが複数レンジを指定している場合、最初のレンジのフォーミュラが返されます。 *rangeObj* 引数のレンジにフォーミュラが一つも含まれていない場合には、コマンドは空の文字列を返します。

返されるコレクションは 2次元構造になっています:

*   第1レベルのコレクションは、フォーミュラのサブコレクションを格納しています。 それぞれのサブコレクションは行をあらわします。
*   それぞれのサブコレクションは行におけるセルの値を定義します。 値は、セルのフォーミュラを格納しているテキスト要素です。

#### 例題

このドキュメントの総計行と平均行のフォーミュラを取得します:


![](assets/en/ViewPro/cmd_vpGetFormulas.PNG)

以下のコードを使用することができます:

```4d
$formulas:=VP Get formulas(VP Cells("ViewProArea";5;1;2;3))
//$formulas[0]=[Sum(B2:D2),Average(B2:D2)]
//$formulas[1]=[Sum(B3:D3),Average(B3:D3)]
//$formulas[2]=[Sum(B4:D4),Average(C4:D4)]
```

#### 参照

[VP Get formula](#vp-get-formula)<br/>[VP Get values](#vp-get-values)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get frozen panes<!-- REF #_method_.VP Get frozen panes.Syntax -->**VP Get frozen panes** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF --><!-- REF #_method_.VP Get frozen panes.Params -->| 引数         | タイプ    |    | 説明                            |
| ---------- | ------ | -- | ----------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名       |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)   |
| 戻り値        | オブジェクト | <- | 固定化されたカラムと行についての情報を格納したオブジェクト |<!-- END REF -->#### 説明

`VP Get frozen panes` コマンドは、<!-- REF #_method_.VP Get frozen panes.Summary -->*vpAreaName* 引数で指定した View Pro エリア内の、固定化されたカラムと行についての情報を格納したオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


##### 返されるオブジェクト

このコマンドは固定化されたカラムと行についてのオブジェクトを返します。 このオブジェクトには、次のプロパティが格納されることがあります:

| プロパティ               | タイプ | 説明                 |
| ------------------- | --- | ------------------ |
| columnCount         | 整数  | シートの左側にある固定化されたカラム |
| trailingColumnCount | 整数  | シートの右側にある固定化されたカラム |
| rowCount            | 整数  | シートの上側にある固定化された行   |
| trailingRowCount    | 整数  | シートの下側にある固定化された行   |

#### 例題


固定化されたカラムと行についての情報を取得します:

```4d
var $panesObj : Object

$panesObj:=VP Get frozen panes("ViewProArea")
```

戻り値のオブジェクトには、以下のようなものが格納されています:

![](assets/en/ViewPro/cmd_vpGetFrozenpanes.PNG)

#### 参照

[VP SET FROZEN PANES](#vp-set-frozen-panes)

### VP Get names<!-- REF #_method_.VP Get names.Syntax -->**VP Get names** ( vpAreaName : Text { ; scope : Number } ) : Collection<!-- END REF --><!-- REF #_method_.VP Get names.Params -->| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| scope      | 数値     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
| 戻り値        | コレクション | <- | 定義されたスコープ内に存在する名前            |<!-- END REF -->#### 説明

`VP Get names` コマンドは、<!-- REF #_method_.VP Get names.Summary -->カレントシートまたは *scope* 引数で指定されたスコープ内において定義されているすべての "名前" のコレクションを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*scope* 引数を使用することで、名前を取得するスコープを定義できます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

*   `vk current sheet`
*   `vk workbook`

##### 返されるコレクション

返されるコレクションには、1つの名前につき 1つのオブジェクトが格納されています。 以下のオブジェクトプロパティが返されます:

| プロパティ               | タイプ  | 説明             |
| ------------------- | ---- | -------------- |
| result\[ ].name    | テキスト | セルまたはレンジ名      |
| result\[ ].formula | テキスト | formula        |
| result\[ ].comment | テキスト | 名前に割り当てられたコメント |

返されるプロパティは、命名された要素のタイプ (命名セル、命名レンジ、または命名フォーミュラ) に応じて異なります。

#### 例題

```4d
var $list : Collection
$list:=VP Get names("ViewProArea";2) // 3番目のシートにある名前
```

#### 参照

[VP ADD FORMULA NAME](#vp-get-formula)<br/>[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP Get formula by name](#vp-get-formula-by-name)<br/>[VP Name](#vp-name)


### VP Get print info<!-- REF #_method_.VP Get print info.Syntax -->**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF --><!-- REF #_method_.VP Get print info.Params -->| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 印刷情報のオブジェクト                 |<!-- END REF -->#### 説明

`VP Get print info` コマンドは、<!-- REF #_method_.VP Get print info.Summary -->*vpAreaName* 引数で指定したエリアの印刷属性を格納したオブジェクトを返します<!-- END REF -->。


*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、印刷属性を取得するスプレッドシートを指定することができます。  省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

以下のコードを実行すると:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

[VP SET PRINT INFO](#vp-set-print-info) コマンドで設定された、4D View Pro エリアの以下のような印刷属性を返します:

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


### VP Get row attributes<!-- REF #_method_.VP Get row attributes.Syntax -->**VP Get row attributes** ( rangeObj : Object ) : Collection<!-- END REF --><!-- REF #_method_.VP Get row attributes.Params -->| 引数       | タイプ    |    | 説明            |
| -------- | ------ | -- | ------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト     |
| 戻り値      | コレクション | <- | 行プロパティのコレクション |<!-- END REF -->#### 説明

`VP Get row attributes` コマンドは、<!-- REF #_method_.VP Get row attributes.Summary -->*rangeObj* 引数で指定したレンジ内にある行のプロパティのコレクションを返します<!-- END REF -->。

*rangeObj* 引数には、属性を取得したい行のレンジを格納しているオブジェクトを渡します。

[VP SET ROW ATTRIBUTES](#vp-set-row-attributes) コマンドを使用して属性を設定してる/いないに関わらず、返されるコレクションには行の属性がすべて返されます。


#### 例題

以下のコードは、指定したレンジ内の行属性のコレクションを返します:

```4d
var $range : Object
var $attr : Collection

$range:=VP Column("ViewProArea";1;2)
$attr:=VP Get row attributes($range)
```


![](assets/en/ViewPro/cmd_vpGetRowAttributes.PNG)

#### 参照

[VP Get column attributes](#vp-get-column-attributes)<br/>[VP SET COLUMN ATTRIBUTES](#vp-set-column-attributes)<br/>[VP SET ROW ATTRIBUTES](#vp-set-row-attributes)


### VP Get row count<!-- REF #_method_.VP Get row count.Syntax -->**VP Get row count** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Integer<!-- END REF --><!-- REF #_method_.VP Get row count.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | 整数   | <- | 行の総数                        |<!-- END REF -->#### 説明

`VP Get row count` コマンドは、<!-- REF #_method_.VP Get row count.Summary -->*vpAreaName* 引数で指定した 4D View Pro エリア内の、*sheet* 引数で指定したシートにおける行の総数を返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートの行数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 例題

以下のコードを実行すると、4D View Pro エリア内の行の数が返されます:

```4d
var $rowCount : Integer
$rowCount:=VP Get row count("ViewProarea")
```

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)


### VP Get selection<!-- REF #_method_.VP Get selection.Syntax -->**VP Get selection** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF --><!-- REF #_method_.VP Get selection.Params -->| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 複数セルのレンジオブジェクト              |<!-- END REF -->#### 説明

`VP Get selection` コマンドは、<!-- REF #_method_.VP Get selection.Summary -->現在選択されているセルを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。



#### 例題

![](assets/en/ViewPro/cmd_vpGetSelection.PNG)

以下のコードを実行すると、現在選択されているセルの座標がすべて取得できます:

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

### VP Get sheet count<!-- REF #_method_.VP Get sheet count.Syntax -->**VP Get sheet count** ( *vpAreaName* : Text ) : Integer<!-- END REF --><!-- REF #_method_.VP Get sheet count.Params -->| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| ファンクションの戻り値 | 整数   | <- | シートの数                   |<!-- END REF -->#### 説明

`VP Get sheet count` コマンドは、<!-- REF #_method_.VP Get sheet count.Summary -->*vpAreaName* で指定したエリアにロードされているドキュメント内にあるシート数を返します。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

#### 例題

以下のドキュメントにおいて:

![](assets/en/ViewPro/vp-sheet-3.png)

シート数を取得し、最後のシートをカレントシートに設定します:

```4d
 $count:=VP Get sheet count("ViewProArea")
  // 最後のシートをカレントシートに設定します (0 起点)
 VP SET CURRENT SHEET("ViewProArea";$count-1)
```

![](assets/en/ViewPro/vp-sheet-3-select.png)

#### 参照

[VP Get sheet index](#vp-get-sheet-index)<br/>[VP SET SHEET COUNT](#vp-set-sheet-count)

### VP Get sheet index<!-- REF #_method_.VP Get sheet index.Syntax -->**VP Get sheet index** ( *vpAreaName* : Text ; *name* : Text ) : Integer<!-- END REF --><!-- REF #_method_.VP Get sheet index.Params -->| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| name        | テキスト | -> | シート名                    |
| ファンクションの戻り値 | 整数   | <- | シートのインデックス              |<!-- END REF -->#### 説明

`VP Get sheet index` コマンドは、<!-- REF #_method_.VP Get sheet index.Summary -->*vpAreaName* 引数で指定したエリア内の、シート名で指定したシートのインデックスを返します。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

*name* には、インデックスを返して欲しいシートの名前を渡します。 *name* 引数のシート名がドキュメント内に見つからない場合、コマンドは -1 を返します。
> インデックスは 0 起点です。

#### 例題

以下のドキュメントにおいて:

![](assets/en/ViewPro/vp-sheet-index-name.png)

"Total first quarter" という名前のシートのインデックスを取得します:

```4d
$index:=VP Get sheet index("ViewProArea";"Total first quarter") // 2 を返します
```

#### 参照

[VP Get sheet count](#vp-get-sheet-count)<br/>[VP Get sheet name](#vp-get-sheet-name)

### VP Get sheet name<!-- REF #_method_.VP Get sheet name.Syntax -->**VP Get sheet name** ( *vpAreaName* : Text ; *sheet* : Integer ) : Text<!-- END REF --><!-- REF #_method_.VP Get sheet name.Params -->| 引数          | タイプ  |    | 説明                      |
| ----------- | ---- | -- | ----------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| sheet       | 整数   | -> | シートのインデックス              |
| ファンクションの戻り値 | テキスト | <- | シート名                    |<!-- END REF -->#### 説明

`VP Get sheet name` コマンドは、<!-- REF #_method_.VP Get sheet name.Summary -->*vpAreaName* で指定したエリア内の、インデックスで指定したシートの名前を返します。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* には、名前を返して欲しいシートのインデックスを渡します。

渡したシートインデックスが存在しない場合、コマンドは空の文字列を返します。
> インデックスは 0 起点です。

#### 例題

ドキュメント内の 3つめのシートの名前を取得します:

```4d
$sheetName:=VP Get sheet name("ViewProArea";2)
```

#### 参照

[VP Get sheet index](#vp-get-sheet-index)

### VP Get sheet options<!-- REF #_method_.VP Get sheet options.Syntax -->**VP Get sheet options** ( *vpAreaName* : Text {; *sheet* : Integer } ) ) : Object<!-- END REF --><!-- REF #_method_.VP Get sheet options.Params -->| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | シートオプションのブジェクト              |<!-- END REF -->#### 説明

`VP Get sheet options` コマンドは、<!-- REF #_method_.VP Get sheet options.Summary -->*vpAreaName* で指定したエリア内の、カレントのシートオプションを格納したオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、スプレッドシートを指定することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。


#### 返されるオブジェクト

コマンドは、利用可能なシートオプションのカレント値をすべて格納したオブジェクトを返します。 オプションの値は、ユーザーあるいは [VP SET SHEET OPTIONS](#vp-set-sheet-options) コマンドによって変更される可能性があります。

オプション一覧については、[シートオプション](configuring.md#シートオプション) を参照ください。

#### 例題

```4d
$options:=VP Get sheet options("ViewProArea")
If($options.colHeaderVisible) // カラムヘッダーが表示状態の場合
    ... // なんらかの処理
End if
```

#### 参照

[4D VIEW PRO SHEET OPTIONS](configuring.md#sheet-options)<br/>[VP SET SHEET OPTIONS](#vp-set-sheet-options)

### VP Get show print lines<!-- REF #_method_.VP Get show print lines.Syntax -->**VP Get show print lines** ( *vpAreaName* : Text {; *sheet* : Integer } ) : Boolean<!-- END REF --><!-- REF #_method_.VP Get show print lines.Params -->| 引数          | タイプ  |    | 説明                            |
| ----------- | ---- | -- | ----------------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名       |
| sheet       | 整数   | <- | シートのインデックス                    |
| ファンクションの戻り値 | ブール  | <- | 印刷線が表示状態であれば true、それ以外は false |<!-- END REF -->#### 説明

`VP Get show print lines` コマンドは、<!-- REF #_method_.VP Get show print lines.Summary -->印刷プレビューの線が表示状態であれば `true` を、非表示であれば `false` を返します。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

*sheet* には、ターゲットシートのインデックスを渡します。 *sheet* が省略された場合、コマンドはカレントシートに対して適用されます。

> インデックスは 0 起点です。

#### 例題

以下のコードは、ドキュメントの印刷プレビュー線の表示状態をチェックします:

```4d
 var $result : Boolean
 $result:=VP Get show print lines("ViewProArea";1)
```

#### 参照

[VP SET SHOW PRINT LINES](#vp-set-show-print-lines)

### VP Get spans<!-- REF #_method_.VP Get spans.Syntax -->**VP Get spans** ( *rangeObj* : Object ) : Object<!-- END REF --><!-- REF #_method_.VP Get spans.Params -->| 引数       | タイプ    |    | 説明                   |
| -------- | ------ | -- | -------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト            |
| 戻り値      | オブジェクト | <- | 指定レンジ内にあるセル結合のオブジェクト |<!-- END REF -->#### 説明

`VP Get spans` コマンドは、<!-- REF #_method_.VP Get spans.Summary -->*rangeObj* で指定したレンジ内にあるセル結合を取得します<!-- END REF -->。

*rangeObj* 引数で、セル結合を取得したいレンジを指定します。 *rangeObj* にセル結合が含まれない場合には、空のレンジが返されます。


#### 例題

ドキュメント内の結合セルにおいて、テキストを中央揃えに変更します:

![](assets/en/ViewPro/cmd_vpGetSpans.PNG)

```4d
// すべてのセル結合を検索します
$range:=VP Get spans(VP All("ViewProArea"))

// テキストを中央揃えにします
$style:=New object("vAlign";vk vertical align center;"hAlign";vk horizontal align center)
VP SET CELL STYLE($range;$style)
```

#### 参照

[VP ADD SPAN](configuring.md#sheet-options)<br/>[VP REMOVE SPAN](#vp-remove-span)

### VP Get stylesheet<!-- REF #_method_.VP Get stylesheet.Syntax -->**VP Get stylesheet** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } ) : Object<!-- END REF --><!-- REF #_method_.VP Get stylesheet.Params -->| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| styleName  | テキスト   | -> | スタイルの名前                      |
| scope      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
| 戻り値        | オブジェクト | <- | スタイルシートオブジェクト                |<!-- END REF -->#### 説明

`VP Get stylesheet` コマンドは、<!-- REF #_method_.VP Get stylesheet.Summary -->*styleName* で指定した、定義済のプロパティ値を格納したスタイルシートオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*styleName* には、取得するスタイルシートの名前を渡します。

任意の *scope* 引数を使用することで、スタイルシートをどこから取得するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

*   `vk current sheet`
*   `vk workbook`

#### 例題

以下のコードは:

```4d
$style:=VP Get stylesheet("ViewProArea";"GreenDashDotStyle")
```

カレントシートの *GreenDashDotStyle* スタイルオブジェクトを返します:

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


### VP Get stylesheets<!-- REF #_method_.VP Get stylesheets.Syntax -->**VP Get stylesheets** ( *vpAreaName* : Text { ; *scope* : Integer } ) : Collection<!-- END REF --><!-- REF #_method_.VP Get stylesheets.Params -->| 引数         | タイプ    |    | 説明                           |
| ---------- | ------ | -- | ---------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名      |
| scope      | 整数     | -> | ターゲットのスコープ (デフォルト = カレントシート) |
| 戻り値        | コレクション | <- | スタイルシートオブジェクトのコレクション         |<!-- END REF -->#### 説明

`VP Get stylesheets` コマンドは、<!-- REF #_method_.VP Get stylesheets.Summary -->*scope* で指定されたスコープにおいて定義されているスタイルシートのコレクションを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *scope* 引数を使用することで、スタイルシートをどこから取得するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

*   `vk current sheet`
*   `vk workbook`

#### 例題

以下のコードは、カレントシート内にある全スタイルオブジェクトのコレクションを返します:

```4d
$styles:=VP Get stylesheets("ViewProArea")
```

カレントシートが 2つのスタイルオブジェクトを使用していた場合:

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


### VP Get value<!-- REF #_method_.VP Get value.Syntax -->**VP Get value** ( *rangeObj* : Object ) : Object<!-- END REF --><!-- REF #_method_.VP Get value.Params -->| 引数       | タイプ    |    | 説明              |
| -------- | ------ | -- | --------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト       |
| 戻り値      | オブジェクト | <- | セルの値を格納したオブジェクト |<!-- END REF -->#### 説明

`VP Get value` コマンドは、<!-- REF #_method_.VP Get value.Summary -->指定されたセルレンジからセルの値を取得します<!-- END REF -->。

*rangeObj* 引数で、値を取得したいレンジを指定します。

#### 返されるオブジェクト

返されるオブジェクトには `value` プロパティと、日付値の場合に返される `time` プロパティが格納されます:

| プロパティ | タイプ                                | 説明                                      |
| ----- | ---------------------------------- | --------------------------------------- |
| value | Integer, Real, Boolean, Text, Date | *rangeObj* レンジの値 (ただし時間型を除く)            |
| time  | 実数                                 | *rangeObj* レンジの値が js 日付型だった場合の時間値 (秒単位) |

返されるオブジェクトに日付または時間が含まれている場合、これは "日付時間"として扱われ、以下のように補完されます:

*   時間値 - 日付部分は DD/MM/YYYY フォーマットの、1899年12月30日 (30/12/1899) として補完されます。
*   日付値 - 時間部分は HH:MM:SS フォーマットの、真夜中 (00:00:00) として補完されます。

*rangeObj* のレンジが複数セルあるいは複数レンジを含んでいる場合、最初のセルの値が返されます。 セルが空の場合には、コマンドは null オブジェクトを返します。

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


### VP Get values<!-- REF #_method_.VP Get values.Syntax -->**VP Get values** ( *rangeObj* : Object ) : Collection<!-- END REF --><!-- REF #_method_.VP Get values.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |
| 戻り値      | コレクション | <- | 値のコレクション  |<!-- END REF -->#### 説明

`VP Get values` コマンドは、<!-- REF #_method_.VP Get values.Summary -->*rangeObj* で指定したレンジの値をすべて取得します<!-- END REF -->。

*rangeObj* 引数で、値を取得したいレンジを指定します。 *rangeObj* のレンジが複数レンジを指定している場合、最初のレンジのみが使用されます。

`VP Get values` によって返されるコレクションは、2次元構造のコレクションです:

*   第1レベルのコレクションの各要素は行を表し、値のサブコレクションを格納しています。
*   各サブコレクションはその行のセル値を格納しています。 値は整数、実数、ブール、テキスト、Null のいずれかです。 値が日付または時間の場合には、以下のプロパティを持つオブジェクトとして返されます:

    | プロパティ | タイプ | 説明                     |
    | ----- | --- | ---------------------- |
    | value | 日付  | セルの値 (時間部分を除く)         |
    | time  | 実数  | 値が js 日付型の場合、時間値 (秒単位) |


日付または時間は 日付時間 (datetime) として扱われ、以下のように補完されます:

* 時間値 - 日付部分は 1899年12月30日として補完されます。
* 日付値 - 時間部分は真夜中 (00:00:00:000) として補完されます。

#### 例題

C4 から G6 までの値を取得します:

![](assets/en/ViewPro/cmd_vpGetValues.PNG)

```4d
$result:=VP Get values(VP Cells("ViewProArea";2;3;5;3))
// $result[0]=[4,5,null,hello,world]
// $result[1]=[6,7,8,9,null]
// $result[2]=[null,{time:42,value:2019-05-29T00:00:00.000Z},null,null,null]
```

#### 参照

[VP Get formulas](#vp-get-formulas)<br/>[VP Get value](#vp-get-value)<br/>[VP SET FORMULAS](#vp-set-formulas)<br/>[VP SET VALUES](#vp-set-values)

### VP Get workbook options<!-- REF #_method_.VP Get workbook options.Syntax -->**VP Get workbook options** ( *vpAreaName* : Text ) : Object<!-- END REF --><!-- REF #_method_.VP Get workbook options.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| 戻り値        | オブジェクト | <- | ワークブックオプションを格納したオブジェクト  |<!-- END REF -->#### 説明

`VP Get workbook options` コマンドは、<!-- REF #_method_.Get workbook options.Summary -->*vpAreaName* で指定したエリアのワークブックオプションをすべて格納したオブジェクトを返します。<!-- END REF -->*vpAreaName* には、4D View Pro エリアの名前を渡します。

返されるオブジェクトには、ワークブック内のワークブックオプションの値 (デフォルト値および変更値) がすべて格納されています。

ワークブックオプションの一覧については [`VP SET WORKBOOK OPTIONS` の説明](#vp-set-workbook-options) を参照ください。

#### 例題

```4d
var $workbookOptions : Object

$workbookOptions:=VP Get workbook options("ViewProArea")
```

#### 参照

[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

## I

### VP IMPORT DOCUMENT<!-- REF #_method_.VP IMPORT DOCUMENT.Syntax -->**VP IMPORT DOCUMENT** ( *vpAreaName* : Text ; *filePath* : Text { ; *paramObj* : Object} )<!-- END REF --><!-- REF #_method_.VP IMPORT DOCUMENT.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| filePath   | テキスト   | -> | ドキュメントのパス名              |
| paramObj   | オブジェクト | -> | 読み込みのオプション              |<!-- END REF -->#### 説明

`VP IMPORT DOCUMENT` コマンドは、<!-- REF #_method_.VP IMPORT DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに、*filePath* 引数のドキュメントを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだドキュメントによって置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*filePath* には読み込むドキュメントのパスとファイル名を渡します。 以下のフォーマットがサポートされています :

* 4D View Pro ドキュメント (拡張子 ".4vp")
* Microsoft Excel 形式 (拡張子 ".xlsx")
* テキスト形式のドキュメント (拡張子 ".txt", ".csv", ドキュメントは UTF-8 形式である必要あり)

ドキュメントの拡張子が認識される拡張子 (`.4vp` や `.xlsx` など) ではなかった場合、ドキュメントはテキスト形式であると見なされます。 ドキュメントが Project フォルダーと同階層に置かれている場合を除き、フルパスを渡す必要があります (同階層に置かれている場合にはファイル名のみを渡すことができます)。

> Microsoft Excel 形式のファイルを 4D View Pro ドキュメントに読み込む場合、一部の設定が失われる可能性があります。 [GrapeCity にある一覧](http://help.grapecity.com/spread/SpreadSheets10/webframe.html#excelexport.html) にて、設定を検証することができます。

`filePath` 引数が無効だった場合や、対象ファイルが存在しなかったり、壊れたりしている場合には、エラーが返されます。

任意の *paramObj* 引数を渡すことで、読み込まれるドキュメントのプロパティを定義することができます:

| 引数         |                 | タイプ    | 説明                                                                                                                                                                             |
| ---------- | --------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| formula    |                 | object | 書き出し終了時に実行させるコールバックメソッド名。 メソッドは [`Formula`](https://doc.4d.com/4dv19/help/command/en/page1597.html) コマンドと組み合わせて使用する必要があります。 [コールバックメソッドの渡し方](#コールバックメソッド-フォーミュラ-の渡し方) を参照ください。 |
| password   |                 | テキスト   | Microsoft Excel のみ (任意) - MS Excel ドキュメントの保護に使用されているパスワード。                                                                                                                     |
| csvOptions |                 | object | CSV読み込みのオプション                                                                                                                                                                  |
|            | range           | object | 書き出されるデータの、最初のセルを格納しているセルレンジ。 指定されたレンジがセルレンジではない場合、レンジの最初のセルが使用されます。                                                                                                           |
|            | rowDelimiter    | テキスト   | 行の区切り文字。 渡されなかった場合、区切り文字は 4D によって自動的に定義されます。                                                                                                                                   |
|            | columnDelimiter | テキスト   | カラムの区切り文字。 デフォルト: ","                                                                                                                                                          |

> CSV形式および、ユーザー定義区切りの値 (DSV) については、こちらの [Wikipedia の記事](https://en.wikipedia.org/wiki/Delimiter-separated_values) (英文) を参照ください。


#### 例題 1

フォームが開かれたときに、ディスク上に保存されているデフォルトの 4D View Pro ドキュメントを読み込みます:

```4d
C_TEXT($docPath)
If(Form event code=On VP Ready) // 4D View Pro エリアの読み込みが完了しています
    $docPath:="C:\\Bases\\ViewProDocs\\MyExport.4VP"
    VP IMPORT DOCUMENT("VPArea";$docPath)
End if
```

#### 例題 2

パスワードで保護されている Microsoft Excel ドキュメントを 4D View Pro エリアに読み込みます:


```4d
$o:=New object
$o.password:="excel123"

VP IMPORT DOCUMENT("ViewProArea";"c:\\tmp\\excelfilefile.xlsx";$o)
```

#### 例題 2

カンマ (",") を区切り文字として使用している `.txt` ファイルを読み込みます:

![example-import-csv](assets/en/ViewPro/vp-import-document-csv.png)

```4d
$params:=New object
$params.range:=VP Cells("ViewProArea";0;0;2;5)
VP IMPORT DOCUMENT("ViewProArea";"c:\\import\\my-file.txt";New object("csvOptions";$params))
```

このようになります: ![example-import-csv](assets/en/ViewPro/vp-import-document-csv-result.png)


#### 参照

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP NEW DOCUMENT](#vp-new-document)


### VP IMPORT FROM OBJECT<!-- REF #_method_.VP IMPORT FROM OBJECT.Syntax -->**VP IMPORT FROM OBJECT** ( *vpAreaName* : Text  { ; *viewPro* : Object} )<!-- END REF --><!-- REF #_method_.VP IMPORT FROM OBJECT.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| viewPro    | オブジェクト | -> | 4D View Pro オブジェクト      |<!-- END REF -->#### 説明

`VP IMPORT FROM OBJECT` コマンドは、<!-- REF #_method_.VP IMPORT FROM OBJECT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに *viewPro* の 4D View Pro オブジェクトを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは読み込んだオブジェクトのデータで置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*viewPro* には有効な 4D View Pro オブジェクトを渡します。 このオブジェクトは手動で作成するほか、[VP Export to object](#vp-export-to-object) を使って取得することができます。 4D View Pro オブジェクトについての詳細は [4D View Pro オブジェクト](configuring.md#4d-view-pro-オブジェクト) を参照ください。

*viewPro* オブジェクトが無効な場合には、エラーが返されます。


#### 例題

オブジェクトフィールドに保存してあるスプレッドシートを読み込みます:

```4d
QUERY([VPWorkBooks];[VPWorkBooks]ID=10)
VP IMPORT FROM OBJECT("ViewProArea1";[VPWorkBooks]SPBook)
```

#### 参照

[VP Export to object](#vp-export-to-object)


### VP INSERT COLUMNS<!-- REF #_method_.VP INSERT COLUMNS.Syntax -->**VP INSERT COLUMNS** ( *rangeObj* : Object )<!-- END REF --><!-- REF #_method_.VP INSERT COLUMNS.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP INSERT COLUMNS` コマンドは、<!-- REF #_method_.VP INSERT COLUMNS.Summary -->*rangeObj* 引数で指定したレンジにカラムを挿入します<!-- END REF -->。

*rangeObj* には、開始カラム (新しいカラムが挿入される場所を指定するカラム) と挿入するカラムの数を格納したオブジェクトを渡します。 挿入するカラムの数が省略された場合 (定義されていない場合)、カラムは 1列だけ挿入されます。

新しいカラムは、*rangeObj* 引数で指定した開始カラムの直前 (すぐ左側) に挿入されます。


#### 例題

2番目のカラムの前にカラムを3列挿入します:

```4d
VP INSERT COLUMNS(VP Column("ViewProArea";1;3))
```

このようになります:

![](assets/en/ViewPro/cmd_vpInsertColumns.PNG)

#### 参照

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT ROWS](#vp-insert-rows)


### VP INSERT ROWS<!-- REF #_method_.VP INSERT ROWS.Syntax -->**VP INSERT ROWS** ( *rangeObj* : Object )<!-- END REF --><!-- REF #_method_.VP INSERT ROWS.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP INSERT ROWS` コマンドは、<!-- REF #_method_.VP INSERT ROWS.Summary -->*rangeObj* で指定したレンジに行を挿入します<!-- END REF -->。

*rangeObj* には、開始行 (新しい行が挿入される場所を指定する行) と挿入する行数を格納したオブジェクトを渡します。 挿入する行数が省略された場合 (定義されていない場合) には、1行だけ挿入されます。

新しい行は、*rangeObj* 引数で指定した開始行の直前 (すぐ上) に挿入されます。


#### 例題

先頭行の前に 3行挿入します:

```4d
VP INSERT ROWS(VP Row("ViewProArea";0;3))
```

このようになります:

![](assets/en/ViewPro/cmd_vpInsertRows.PNG)

#### 参照

[VP DELETE COLUMNS](#vp-delete-columns)<br/>[VP DELETE ROWS](#vp-delete-rows)<br/>[VP INSERT COLUMNS](#vp-insert-columns)

## M

### VP MOVE CELLS

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details><!-- REF #_method_.VP MOVE CELLS.Syntax -->**VP MOVE CELLS** ( *originRange* : Object ; *targetRange* : Object ; *options* : Object )<!-- END REF --><!-- REF #_method_.VP MOVE CELLS.Params -->| 引数          | タイプ    |    | 説明                        |
| ----------- | ------ | -- | ------------------------- |
| originRange | オブジェクト | -> | 移動 (コピー) 元のセルレンジ          |
| targetRange | オブジェクト | -> | 値・書式・フォーミュラの移動 (コピー) 先レンジ |
| options     | オブジェクト | -> | 追加のオプション                  |<!-- END REF -->#### 説明

`VP MOVE CELLS` コマンドは、<!-- REF #_method_.VP MOVE CELLS.Summary -->*originRange* の値・書式・フォーミュラを *targetRange* に移動またはコピーします<!-- END REF -->。

*originRange* と *targetRange* は異なる 4D View Pro エリアを参照することができます。

*originRange* には、移動またはコピーする値・書式・フォーミュラが格納されているレンジオブジェクトを渡します。 *originRange* が結合レンジの場合は、最初のものだけが使用されます。

*targetRange* には、値・書式・フォーミュラのコピー先または移動先であるターゲットレンジを渡します。

*options* は、複数のプロパティを持ちます:

| プロパティ        | タイプ  | 説明                                                                                                                                   |
| ------------ | ---- | ------------------------------------------------------------------------------------------------------------------------------------ |
| copy         | ブール  | *originRange* のセルの値・書式・フォーミュラをコマンド実行後に削除するかどうかを指定します:<ul><li>削除するには false (デフォルト)。</li><li>保持するには true。</li> |
| pasteOptions | 倍長整数 | ペーストする内容を指定します。 とりうる値: <p><table><tr><th>値</th><th>説明</th></tr><tr><td>`vk clipboard options all` (デフォルト)</td><td>値・フォーマット・フォーミュラを含むすべてのデータオブジェクトをペーストします。</td></tr><tr><td>`vk clipboard options formatting`</td><td>フォーマットだけをペーストします。</td></tr><tr><td>`vk clipboard options formulas`</td><td>フォーミュラだけをペーストします。</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>フォーミュラとフォーマットをペーストします。</td></tr><tr><td>`vk clipboard options values`</td><td>値だけをペーストします。</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>値とフォーマットをペーストします。</td></tr></table></p>                                                                                     |

[ワークブックオプション](#vp-set-workbook-options) で定義されている貼り付けオプションが考慮されます。
#### 例題

内容・値・書式・フォーミュラをコピーします:

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

### VP Name<!-- REF #_method_.VP Name.Syntax -->**VP Name** ( *vpAreaName* : Text ; *rangeName* : Text { ; *scope* : Integer }  ) : Object<!-- END REF --><!-- REF #_method_.VP Name.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| rangeName  | テキスト   | -> | 既存のレンジ名                 |
| scope      | 整数     | -> | レンジの場所 (省略時はカレントシート)    |
| 戻り値        | オブジェクト | <- | rangeName のレンジオブジェクト    |<!-- END REF -->#### 説明

`VP Name` コマンドは、<!-- REF #_method_.VP Name.Summary -->命名レンジを参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*rangeName* には、既存のセルレンジ名を渡します。

任意の *scope* 引数として、*rangeName* のレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートあるいはワークブック全体を明示的に選択することができます:

*   `vk current sheet`
*   `vk workbook`


#### 例題

"Total" という名前のレンジに値を渡します:

```4d
// B5 のセルを "Total" と命名します
VP ADD RANGE NAME(VP Cell("ViewProArea";1;4);"Total")
$name:=VP Name("ViewProArea";" Total")
VP SET NUM VALUE($name;285;"$#,###.00")
```

#### 参照

[VP ADD RANGE NAME](#vp-add-range-name)<br/>[VP ALL](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Get names](#vp-get-names)<br/>[VP REMOVE NAME](#vp-remove-name)<br/>[VP Row](#vp-row)


### VP NEW DOCUMENT<!-- REF #_method_.VP NEW DOCUMENT.Syntax -->**VP NEW DOCUMENT** ( *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP NEW DOCUMENT.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |<!-- END REF -->#### 説明

`VP NEW DOCUMENT` コマンドは、<!-- REF #_method_.VP NEW DOCUMENT.Summary -->*vpAreaName* で指定した 4D View Pro エリアに、新規のデフォルトドキュメントを読み込んで表示させます<!-- END REF -->。 エリア内に挿入されていたデータがあれば、それらは新規の空ドキュメントによって置換されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。


#### 例題

"myVPArea" フォームオブジェクトに空ドキュメントを表示します:

```4d
VP NEW DOCUMENT("myVPArea")
```

#### 参照

[VP IMPORT DOCUMENT](#vp-import-document)

---

## O

### VP Object to font<!-- REF #_method_.VP Object to font.Syntax -->**VP Object to font** ( *fontObj* : Object ) : Text<!-- END REF --><!-- REF #_method_.VP Object to font.Params -->| 引数      | タイプ    |    | 説明              |
| ------- | ------ | -- | --------------- |
| fontObj | オブジェクト | -> | フォントオブジェクト      |
| 戻り値     | テキスト   | <- | フォントのショートハンド文字列 |<!-- END REF -->#### 説明

`VP Object to font` コマンドは、<!-- REF #_method_.VP Object to font.Summary -->*fontObj* 引数で指定したフォントオブジェクトからフォントのショートハンド文字列を返します<!-- END REF -->。

*fontObj* には、フォントプロパティを格納するオブジェクトを渡します。 以下のオブジェクトプロパティがサポートされています:

| プロパティ   | タイプ  | 説明                                                                                                                                                   | とりうる値                                                                                                                                                                                                                                                                                                                               | 必須 |
| ------- | ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -- |
| family  | テキスト | フォントを指定します。                                                                                                                                          | 標準の、あるいは一般的なフォントファミリー。 例:  "Arial", "Helvetica", "serif", "arial,sans-serif"                                                                                                                                                                                                                                                        | ◯  |
| size    | テキスト | フォントのサイズを定義します。<p><p>"font-size/line-height" の形で line-height をfont-size に追加することもできます: 例: "15pt/20pt" | 以下のいずれかの単位を伴う数値: <li>"em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"</li><p><p>あるいは、以下の定数のいずれか 1つ:<li>`vk font size large`</li><li>`vk font size larger`</li><li>`vk font size x large`</li><li>`vk font size xx large`</li><li>`vk font size small`</li><li>`vk font size smaller`</li><li>`vk font size x small`</li><li>`vk font size xx small`</li> | ◯  |
| style   | テキスト | フォントのスタイル。                                                                                                                                           | <li>`vk font style italic`</li><li>`vk font style oblique`</li>                                                                                                                                                                                                                                                                                | ×  |
| variant | テキスト | スモールキャピタルのフォントを定義します。                                                                                                                                | <li>`vk font variant small caps`</li>                                                                                                                                                                                                                                                                                                          | ×  |
| weight  | テキスト | フォントの太さを定義します。                                                                                                                                       | <li>`vk font weight 100`</li><li>`vk font weight 200`</li><li>`vk font weight 300`</li><li>`vk font weight 400`</li><li>`vk font weight 500`</li><li>`vk font weight 600`</li><li>`vk font weight 700`</li><li>`vk font weight 800`</li><li>`vk font weight 900`</li><li>`vk font weight bold`</li><li>`vk font weight bolder`</li><li>`vk font weight lighter`</li>            | ×  |


このオブジェクトは [VP Font to object](#vp-font-to-object) コマンドで作成することができます。

返されるショートハンド文字列は、たとえば [VP SET CELL STYLE](#vp-set-cell-style) を使って、セルの "font" プロパティに割り当てることができます。


#### 例題

```4d
$cellStyle:=VP Get cell style($range)

$font:=VP Font to object($cellStyle.font)
$font.style:=vk font style oblique
$font.variant:=vk font variant small caps
$font.weight:=vk font weight bolder

$cellStyle.font:=VP Object to font($font)
//$cellStyle.font には "bolder oblique small-caps 16pt arial" が格納されます
```

#### 参照

[4D View Pro Style Objects and Style Sheets](configuring.md#style-objects--style-sheets)<br/>[VP Font to object](#vp-font-to-object)<br/>[VP SET CELL STYLE](#vp-set-cell-style)<br/>[VP SET DEFAULT STYLE](#vp-set-default-style)


## P

### VP PASTE FROM OBJECT

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details><!-- REF #_method_.PASTE FROM OBJECT.Syntax -->**VP PASTE FROM OBJECT** ( *rangeObj* : Object ; *dataObject* : Object {; *options* : Longint} )<!-- END REF --><!-- REF #_method_.PASTE FROM OBJECT.Params -->| 引数         | タイプ    |    | 説明                   |
| ---------- | ------ | -- | -------------------- |
| rangeObj   | オブジェクト | -> | セルレンジオブジェクト          |
| dataObject | オブジェクト | -> | ペーストするデータを格納したオブジェクト |
| options    | 倍長整数   | -> | ペーストする内容を指定します       |<!-- END REF -->#### 説明

`VP PASTE FROM OBJECT` コマンドは、<!-- REF #_method_.PASTE FROM OBJECT.Summary -->*dataObject* のコンテンツ・スタイル・フォーミュラを *rangeObj* セルレンジオブジェクトにペーストします<!-- END REF -->。

*rangeObj* には、値・フォーマット・フォーミュラをペーストする先のセルレンジオブジェクトを渡します。 *rangeObj* が複数のセルを参照している場合は、最初のセルだけが使用されます。

*dataObject* には、ペーストしたい値・フォーマット・フォーミュラを格納しているオブジェクトを渡します。

任意の *options* 引数を渡して、セルレンジにペーストする内容を指定することができます。 とりうる値:

| 定数                                             | 説明                                       |
| ---------------------------------------------- | ---------------------------------------- |
| `vk clipboard options all`                     | 値・フォーマット・フォーミュラを含むすべてのデータオブジェクトをペーストします。 |
| `vk clipboard options formatting`              | フォーマットだけをペーストします。                        |
| `vk clipboard options formulas`                | フォーミュラだけをペーストします。                        |
| `vk clipboard options formulas and formatting` | フォーミュラとフォーマットをペーストします。                   |
| `vk clipboard options values`                  | 値だけをペーストします。                             |
| `vk clipboard options value and formatting`    | 値とフォーマットをペーストします。                        |

[ワークブックオプション](#vp-set-workbook-options) で定義されている貼り付けオプションが考慮されます。

dataObject に存在しない要素を *options* で指定した場合 (例: フォーミュラ) コマンドはなにもしません。

#### 例題

[VP Copy to object](#vp-copy-to-object) の例題を参照ください。

#### 参照

[VP Copy to object](#vp-copy-to-object)<br/>[VP MOVE CELLS](#vp-move-cells)<br/>[VP Get workbook options](#vp-get-workbook-options)<br/>[VP SET WORKBOOK OPTIONS](#vp-set-workbook-options)

### VP PRINT<!-- REF #_method_.VP PRINT.Syntax -->**VP PRINT** ( *vpAreaName* : Text  { ; *sheet* : Integer } )<!-- END REF --><!-- REF #_method_.VP PRINT.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |<!-- END REF -->#### 説明

`VP PRINT` コマンドは、<!-- REF #_method_.VP PRINT.Summary -->*vpAreaName* 引数で指定したエリアを印刷する印刷ダイアログウィンドウを開きます<!-- END REF -->。

*vpAreaName* には、印刷する 4D View Pro エリアの名前を渡します。 コマンドによって、システムの印刷ダイアログウィンドウが開かれ、プリンターを指定したりページプロパティを定義したりすることができます。
> 印刷ダイアログウィンドウで定義されるプロパティはプリンター用紙のためのもので、4D View Pro エリアの印刷プロパティではありません。 4D View Pro エリアの印刷プロパティは [VP SET PRINT INFO](#vp-set-print-info) コマンドで定義されます。 プリンターと 4D View Pro エリアの両プロパティが合致することが強く推奨されます。そうでない場合、ドキュメントが期待通りに印刷されない可能性があります。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、印刷するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートあるいはワークブック全体を明示的に選択することができます:

*   `vk current sheet`
*   `vk workbook`


> * 4D View Pro エリアは、`VP PRINT` コマンドによってのみ印刷可能です。 
> * 4Dコマンドの **印刷** テーマのコマンドは、`VP PRINT` ではサポートされません。
> * このコマンドは、最終的なエンドユーザーが個別に印刷を実行することを想定しています。 自動化印刷ジョブについては、[VP EXPORT DOCUMENT](#vp-export-document) コマンドで 4D View Pro エリアを PDF に書き出すことが推奨されます。


#### 例題

以下のコードは:

```4d
 VP PRINT("myVPArea")
```

印刷ダイアログウィンドウを開きます:

![](assets/en/ViewPro/cmd_vpPrint.PNG)

#### 参照

[VP EXPORT DOCUMENT](#vp-export-document)<br/>[VP SET PRINT INFO](#vp-set-print-info)

## R

### VP RECOMPUTE FORMULAS<!-- REF #_method_.VP RECOMPUTE FORMULAS.Syntax -->**VP RECOMPUTE FORMULAS** ( *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP RECOMPUTE FORMULAS.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |<!-- END REF -->#### 説明

`VP RECOMPUTE FORMULAS` コマンドは、<!-- REF #_method_.VP RECOMPUTE FORMULAS.Summary -->*vpAreaName* 引数で指定したエリアの全フォーミュラを即座に評価します<!-- END REF -->。 デフォルトでは、4D はフォーミュラを挿入時、読み込み時、そして書き出し時のタイミングで自動計算します。 `VP RECOMPUTE FORMULAS` コマンドを使用すると、任意のタイミングで強制的に計算を実行することができます(例: フォーミュラに変更が加えられた場合、またはフォーミュラがデータベースへの呼び出しを格納している場合など)。 コマンドは [VP FLUSH COMMANDS](#vp-flush-commands) コマンドを実行することで、実行保留されていたコマンドをすべて実行し、コマンドバッファをクリアします。そしてワークブック内の全フォーミュラを計算します。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。
> `VP RECOMPUTE FORMULAS` コマンドを使用する前に [VP SUSPEND COMPUTING](#vp-suspend-computing)コマンドが実行されていないようにしてください。そうでないと、このコマンドは何もしません。


#### 例題

ワークブック内の全フォーミュラを更新します:

```4d
VP RECOMPUTE FORMULAS("ViewProArea")
```

#### 参照

[VP RESUME COMPUTING](#vp-resume-computing)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)


### VP REMOVE NAME<!-- REF #_method_.VP REMOVE NAME.Syntax -->**VP REMOVE NAME** ( *vpAreaName* : Text  ; *name*  : Text { ; *scope* : Integer } )<!-- END REF --><!-- REF #_method_.VP REMOVE NAME.Params -->| 引数         | タイプ  |    | 説明                         |
| ---------- | ---- | -- | -------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名    |
| name       | テキスト | -> | 削除する命名レンジまたは命名フォーミュラの名前    |
| scope      | 整数   | -> | ターゲットのスコープ (デフォルト=カレントシート) |<!-- END REF -->#### 説明

`VP REMOVE NAME` コマンドは、<!-- REF #_method_.VP REMOVE NAME.Summary -->*name* の命名レンジまたは命名フォーミュラを、定義された *scope* のスコープから削除します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*name* には、削除したい命名レンジあるいは命名フォーミュラの名前を渡します。

*scope* 引数を使用することで、命名レンジまたは命名フォーミュラをどこから削除するのか、指定することができます。その際、シートのインデックス (0 起点) を渡すか、以下の定数のいずれかを渡します:

*   `vk current sheet`
*   `vk workbook`


#### 例題


```4d
$range:=VP Cell("ViewProArea";0;0)
VP ADD RANGE NAME("Total1";$range)

VP REMOVE NAME("ViewProArea";"Total1")
$formula:=VP Get formula by name("ViewProArea";"Total1")
// $formula=null
```

#### 参照

[VP Name](#vp-name)


### VP REMOVE SHEET<!-- REF #_method_.VP REMOVE SHEET.Syntax -->**VP REMOVE SHEET** ( *vpAreaName* : Text ; *index*: Integer )<!-- END REF --><!-- REF #_method_.VP REMOVE SHEET.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| index      | 整数   | -> | 削除するシートのインデックス          |<!-- END REF -->#### 参照

[VP ADD SHEET](#vp-add-sheet)


#### 説明

`VP REMOVE SHEET` コマンドは、<!-- REF #_method_.VP REMOVE SHEET.Summary -->*vpAreaName* 引数で指定したエリアにロードされているドキュメントから、*index* 引数で指定したインデックスのシートを削除します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。

*index* 引数には、削除したいシートのインデックスを渡します。 *index* 引数に渡したインデックスが存在しない場合、このコマンドは何もしません。
> インデックスは 0 起点です。

#### 例題

ドキュメントには現在 3つのシートがあります:

![](assets/en/ViewPro/vp-sheet-3.png)

3つ目のシートを削除します:

```4d 
VP REMOVE SHEET("ViewProArea";2)
```

![](assets/en/ViewPro/vp-sheet-2.png)

### VP REMOVE SPAN<!-- REF #_method_.VP REMOVE SPAN.Syntax -->**VP REMOVE SPAN** ( *rangeObj* : Object )<!-- END REF --><!-- REF #_method_.VP REMOVE SPAN.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP REMOVE SPAN` コマンドは、<!-- REF #_method_.VP REMOVE SPAN.Summary -->*rangeObj* で指定したレンジ内のセル結合を解除します<!-- END REF -->。

*rangeObj* には、セル結合しているレンジのオブジェクトを渡します。 レンジ内の結合セルは個別セルに分割されます。

#### 例題

ドキュメントのセル結合をすべて解除します:

![](assets/en/ViewPro/cmd_vpRemoveSpan1.PNG)

```4d
 // すべてのセル結合を探します
 $span:=VP Get spans(VP All("ViewProArea"))


  // すべてのセル結合を解除します
 VP REMOVE SPAN($span)
```

結果:

![](assets/en/ViewPro/cmd_vpRemoveSpan2.PNG)

#### 参照

[VP ADD SPAN](#vp-add-span)<br/>[VP Get spans](#vp-get-spans)

### VP REMOVE STYLESHEET<!-- REF #_method_.VP REMOVE STYLESHEET.Syntax -->**VP REMOVE STYLESHEET** ( *vpAreaName* : Text ; *styleName* : Text { ; *scope* : Integer } )<!-- END REF --><!-- REF #_method_.VP REMOVE STYLESHEET.Params -->| 引数         | タイプ  |    | 説明                           |
| ---------- | ---- | -- | ---------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名      |
| styleName  | テキスト | -> | 削除するスタイルの名前                  |
| scope      | 整数   | -> | ターゲットのスコープ (デフォルト = カレントシート) |<!-- END REF -->#### 説明

`VP REMOVE STYLESHEET` コマンドは、<!-- REF #_method_.VP REMOVE STYLESHEET.Summary -->*vpAreaName* 引数で指定したエリアから、*styleName* で指定したスタイルシートを削除します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*styleName* 引数には、削除するスタイルシートの名前を渡します。

任意の *scope* 引数を使用することで、スタイルシートをどこから削除するかを指定することができます。シートインデックス (0 起点) か、以下の定数のいずれかを渡すことができます:

*   `vk current sheet`
*   `vk workbook`

#### 例題

カレントシートから、*GreenDashDotStyle* スタイルオブジェクトを削除します:

```4d
VP REMOVE STYLESHEET("ViewProArea";"GreenDashDotStyle")
```
#### 参照

[VP ADD STYLESHEET](#vp-add-stylesheet)<br/>[VP Get stylesheet](#vp-get-stylesheet)<br/>[VP Get stylesheets](#vp-get-stylesheets)


### VP RESET SELECTION<!-- REF #_method_.VP RESET SELECTION.Syntax -->**VP RESET SELECTION** ( *vpAreaName* : Text { ; *sheet* : Integer } )<!-- END REF --><!-- REF #_method_.VP RESET SELECTION.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |<!-- END REF -->#### 説明

`VP RESET SELECTION` コマンドは、<!-- REF #_method_.VP RESET SELECTION.Summary -->すべてのセル選択を解除し、その結果カレントセレクション (またはアクティブセル) がなくなります<!-- END REF -->。

> 4D View Pro コマンドに対して定義されているデフォルトのアクティブセル (A1 セル) は残ります。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

*   `vk current sheet`


#### 例題

セル選択 (アクティブセルと選択セル) をすべて解除します:

```4d
VP RESET SELECTION("myVPArea")
```

#### 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP RESUME COMPUTING<!-- REF #_method_.VP RESUME COMPUTING.Syntax -->**VP RESUME COMPUTING** ( *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP RESUME COMPUTING.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |<!-- END REF -->#### 説明

`VP RESUME COMPUTING` こマンドは、<!-- REF #_method_.VP RESUME COMPUTING.Summary -->*vpAreaName* 引数で指定したエリア内の計算を再開します<!-- END REF -->。

このコマンドは 4D View Pro 内の計算機能を再開します。 計算停止中におこなった編集に影響されたフォーミュラは更新され、`VP RESUME COMPUTING` 実行後に追加されるフォーミュラは計算されます。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

> 4D View Pro 計算機能は停止/再開アクションを内部的にカウントしています。 そのため、`VP RESUME COMPUTING` コマンドの実行数は、[VP SUSPEND COMPUTING](#vp-suspend-computing) コマンドの実行数と釣り合っていなければなりません。


#### 例題

[VP SUSPEND COMPUTING](#vp-suspend-computing) の例題を参照ください。

#### 参照

[VP RECOMPUTE FORMULAS](#vp-recompute-formulas)<br/>[VP SUSPEND COMPUTING](#vp-suspend-computing)

### VP Row<!-- REF #_method_.VP Row.Syntax -->**VP Row** ( *vpAreaName* : Text; *row* : Integer { ; *rowCount* : Integer { ; *sheet* : Integer } } ) : Object<!-- END REF --><!-- REF #_method_.VP Row.Params -->| 引数         | タイプ    |    | 説明                          |
| ---------- | ------ | -- | --------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名     |
| row        | 整数     | -> | 行のインデックス                    |
| rowCount   | 整数     | -> | 行数                          |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |
| 戻り値        | オブジェクト | <- | 行のレンジオブジェクト                 |<!-- END REF -->#### 説明

`VP Row` コマンドは、<!-- REF #_method_.VP Row.Summary -->特定行、あるいは複数行を参照する新しいレンジオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*row* 引数で、セルレンジの先頭行を指定します。 この引数として行のインデックス (0 起点) を渡します。 レンジが複数行にわたる場合には、任意の *rowCount* 引数も併せて使用します。

任意の *rowCount* には、レンジに含まれる行数を指定することができます。 *rowCount* 引数は 0 より大きい値でなくてはなりません。 省略時、デフォルトで値は 1 に設定されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

*   `vk current sheet`


#### 例題

以下に表示されている (カレントスプレッドシートの) 行に対するレンジオブジェクトを定義します:

![](assets/en/ViewPro/cmd_vpRow.PNG)

以下のように書くことができます:

```4d
$row:=VP Row("ViewProArea";9) // 10行目
```

#### 参照

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)

### VP ROW AUTOFIT#### See also

[VP All](#vp-all)<br/>[VP Cell](#vp-cell)<br/>[VP Cells](#vp-cells)<br/>[VP Column](#vp-column)<br/>[VP Combine ranges](#vp-combine-ranges)<br/>[VP Name](#vp-name)<!-- REF #_method_.VP ROW AUTOFIT.Syntax -->**VP ROW AUTOFIT** ( *rangeObj* : Object)<!-- END REF --><!-- REF #_method_.VP ROW AUTOFIT.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP ROW AUTOFIT` コマンドは、<!-- REF #_method_.VP ROW AUTOFIT.Summary -->*rangeObj* 引数のレンジ内の行を、そのコンテンツに応じて自動的にリサイズします<!-- END REF -->。


*rangeObj* 引数として、サイズを自動調整したい行を格納しているレンジオブジェクトを渡します。


#### 例題

以下の行では、テキストを正しく表示できていません:

![](assets/en/ViewPro/cmd_vpRowAutoFit1.PNG)


```4d
 VP ROW AUTOFIT(VP Row("ViewProArea";1;2))
```

結果:

![](assets/en/ViewPro/cmd_vpRowAutoFit2.PNG)

#### 参照

[VP Column autofit](#vp-column-autofit)

### VP Run offscreen area<!-- REF #_method_.VP Run offscreen area.Syntax -->**VP Run offscreen area** ( *parameters* : Object) : Mixed<!-- END REF --><!-- REF #_method_.VP Run offscreen area.Params -->| 引数         | タイプ    |    | 説明                                                    |
| ---------- | ------ | -- | ----------------------------------------------------- |
| parameters | オブジェクト | -> | オフスクリーンエリアの属性を格納するオブジェクト                              |
| 戻り値        | Mixed  | <- | `.onEvent` オブジェクトの `.result` プロパティ、または値を返さない場合には Null |<!-- END REF -->#### 説明

`VP Run offscreen area` コマンド、<!-- REF #_method_.VP Run offscreen area.Summary -->メモリ内にオフスクリーンエリアを作成し、これを利用して 4D View Pro エリアのコマンドやファンクションを処理することができます<!-- END REF -->。

*parameters* オブジェクトには、以下の任意のプロパティのいずれかを渡します。 これらのプロパティは `onEvent` コールバックメソッド内において `This` コマンドを介して利用可能であり、そのインスタンスを参照することができます:

| プロパティ              | タイプ             | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------------ | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| area               | テキスト            | オフスクリーンエリアの名前。 省略時あるいは null の場合、一般的な名前 (例: "OffscreenArea1") が割り当てられます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| onEvent            | object (フォーミュラ) | オフスクリーンエリアの準備ができたときに実行されるコールバックメソッド。 以下のいずれかを渡すことができます:<p><p><li>クラスの `onEvent` 関数</li><li>`Formula` オブジェクト</li><p><p>デフォルトでは、コールバックメソッドは、[`On VP Ready`](Events/onVpReady.md), [`On Load`](Events/onLoad.md), [`On Unload`](Events/onUnload.md), [`On End URL Loading`](Events/onEndUrlLoading.md), [`On URL Loading Error`](Events/onUrlLoadingError.md), [`On VP Range Changed`](Events/onVpRangeChanged.md), または [`On Timer`](Events/onTimer.md) イベントで呼び出されます。 <p><p>コールバックメソッドを使用して [4D View Pro フォームオブジェクト変数](configuring.md#4d-view-pro-フォームオブジェクト変数) にアクセスすることができます。 |
| autoQuit           | boolean         | True (デフォルト値) の場合、[`On End URL Loading`](Events/onEndUrlLoading.md) または [`On URL Loading Error`](Events/onUrlLoadingError.md) イベントが起きた際にはコマンドがフォーミュラの実行を中止します。<p><p>False の場合、*onEvent* コールバックメソッド内で `CANCEL` あるいは `ACCEPT` コマンドを使用する必要があります。                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| timeout            | number          | イベントが何も生成されない場合にエリアが自動的に閉まるまでの最大時間 (秒単位)。 0 に設定した場合、エリアは自動的には閉まりません。 デフォルト値: 60                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| result             | 混合              | 処理の結果 (あれば)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| \<customProperty> | 混合              | *onEvent* コールバックメソッドで利用可能なカスタムの属性。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |


以下のプロパティは、必要に応じてコマンドによって自動的に追加されます:

| プロパティ          | タイプ     | 説明                           |
| -------------- | ------- | ---------------------------- |
| timeoutReached | boolean | タイムアウトを超えた場合に true の値で追加されます |


> オフスクリーンエリアは、`VP Run offscreen area` コマンドの実行中にしか利用できません。 実行が終わるとエリアは自動的に消去されます。


コールバックメソッドでは、以下のコマンドを使用することができます:

*   `ACCEPT`
*   `CANCEL`
*   `SET TIMER`
*   `WA Evaluate JavaScript`
*   `WA EXECUTE JAVASCRIPT FUNCTION`


#### 例題 1

オフスクリーンの 4D View Pro エリアを作成し、そこからセルの値を取得します:


```4d
// cs.OffscreenArea クラス宣言 
Class constructor ($path : Text)
    This.filePath:=$path

// この関数はオフスクリーンエリアの各イベントごとに呼び出されます
Function onEvent()
    Case of
        :(FORM Event.code=On VP Ready)
            VP IMPORT DOCUMENT(This.area;This.filePath)
            This.result:=VP Get value(VP Cell(This.area;6;22))

            ALERT("The G23 cell contains the value: "+String(This.result))
    End case
```

*OffscreenArea* コールバックメソッドの内容は以下の通りです:


```4d
$o:=cs.OffscreenArea.new()
$result:=VP Run offscreen area($o)
```

#### 例題 2

大きなドキュメントをオフスクリーンで読み込み、計算の評価が完了するのを待ってドキュメントを PDF として書き出します:


```4d
//cs.OffscreenArea クラス宣言
Class constructor($pdfPath : Text)
    This.pdfPath:=$pdfPath
    This.autoQuit:=False
    This.isWaiting:=False

Function onEvent()
    Case of
        :(FORM Event.code=On VP Ready)
    //  ドキュメントの読み込み
            VP IMPORT DOCUMENT(This.area;$largeDocument4VP)
            This.isWaiting:=True

    // 計算が完了したかを検証するタイマーをスタートさせます
    // この間に "On VP Range Changed" イベントが発生した場合、タイマーはリスタートされます
  // 時間はコンピューターの設定に応じて定義されなければなりません
            SET TIMER(60)

        :(FORM Event.code=On VP Range Changed)
    // 計算の完了を感知し、 タイマーを再スタートさせます
            If(This.isWaiting)
                SET TIMER(60)
            End if

        :(FORM Event.code=On Timer)
    // この時点以降、他の 4D View コマンドを呼び出してもタイマーが再スタートしないようにします
            This.isWaiting:=False

    // タイマーを停止します
            SET TIMER(0)

    // PDF 書き出しを開始します
            VP EXPORT DOCUMENT(This.area;This.pdfPath;New object("formula";Formula(ACCEPT)))

        :(FORM Event.code=On URL Loading Error)
            CANCEL 
    End case
```

*OffscreenArea* コールバックメソッドの内容は以下の通りです:

```4d
$o:=cs.OffscreenArea.new()

$result:=VP Run offscreen area($o)
```

## 参照

[ブログ記事 (英文): End of document loading](https://blog.4d.com/4d-view-pro-end-of-document-loading/)

## S

### VP SET ACTIVE CELL<!-- REF #_method_.VP SET ACTIVE CELL.Syntax -->**VP SET ACTIVE CELL** ( *rangeObj* : Object)<!-- END REF --><!-- REF #_method_.VP SET ACTIVE CELL.Params -->| 引数       | タイプ    |    | 説明        |
| -------- | ------ | -- | --------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト |<!-- END REF -->#### 説明

`VP SET ACTIVE CELL` コマンドは、<!-- REF #_method_.VP SET ACTIVE CELL.Summary -->指定したセルをアクティブセルにします<!-- END REF -->。

*rangeObj* 引数には、単独のセルを格納するレンジオブジェクトを渡します ([VP Cell](#vp-cell) 参照)。 *rangeObj* 引数のレンジが単独セルのレンジでない場合、あるいは複数レンジを指定している場合、最初のレンジの先頭セルが使用されます。


#### 例題

カラム D、行 5 のセルをアクティブセルに設定します:

```4d
$activeCell:=VP Cell("myVPArea";3;4)
VP SET ACTIVE CELL($activeCell)
```

![](assets/en/ViewPro/cmd_vpSetActiveCell.PNG)

## 参照

[VP ADD SELECTION](#vp-add-selection)<br/>[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET SELECTION](#vp-set-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET ALLOWED METHODS<!-- REF #_method_.VP SET ALLOWED METHODS.Syntax -->**VP SET ALLOWED METHODS** ( *methodObj* : Object)<!-- END REF --><!-- REF #_method_.VP SET ALLOWED METHODS.Params -->| 引数        | タイプ    |    | 説明                           |
| --------- | ------ | -- | ---------------------------- |
| methodObj | オブジェクト | -> | 4D View Pro エリアでの実行を許可するメソッド |<!-- END REF -->> **互換性**
> 
> より高い柔軟性のため、4D View Pro エリアから呼び出せる 4Dフォーミュラを指定できる [`VP SET CUSTOM FUNCTIONS`](#vp-set-custom-functions) コマンドの使用が推奨されます。 `VP SET CUSTOM FUNCTIONS` が呼び出された場合、`VP SET ALLOWED METHODS` の呼び出しは無視されます。 `VP SET CUSTOM FUNCTIONS` と `VP SET ALLOWED METHODS` のどちらも呼び出されていない場合、4D View Pro は 4D の汎用コマンド `SET ALLOWED METHODS` もサポートしますが、汎用コマンドの使用は推奨されません。

#### 説明

`VP SET ALLOWED METHODS` コマンドは、<!-- REF #_method_.VP SET ALLOWED METHODS.Summary -->4D View Pro フォーミュラから呼び出し可能なプロジェクトメソッドを指定します<!-- END REF -->。 このコマンドは、呼び出し後のセッション中に初期化される 4D View Pro エリアすべてに対して適用されます。 同じセッション中において異なる設定で初期化をするために、複数回呼び出すこともできます。

セキュリティ上の理由により、 `VP SET ALLOWED METHODS` コマンドを実行していない場合のデフォルトでは、4D View Pro エリアにおいてはメソッドの呼び出しは許可されません (ただし、4D の汎用的な `SET ALLOWED METHODS` コマンドが呼び出されていた場合を除きます。前述の互換性に関する注記参照)。 許可されていないのメソッドをフォーミュラ内で使用した場合には、4D View Pro エリアに #NAME? エラーが表示されます。


*methodObj* には、4D View Pro エリア内で定義したいファンクションの名前をプロパティとして格納しているオブジェクトを渡します:

| プロパティ                  |            |            | タイプ                 | 説明                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ---------- | ---------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<functionName>` |            |            | オブジェクト              | カスタムファンクションの名前。 `<functionName>` プロパティ名は、4D View Pro フォーミュラで表示するカスタムファンクションの名前を定義します (スペースは使用できません)                                                                                                                                                                                                                                                                                |
|                        | method     |            | テキスト                | (必須) 許可する既存の 4D プロジェクトメソッドの名前                                                                                                                                                                                                                                                                                                                                                            |
|                        | parameters |            | Object の Collection | 引数のコレクション (メソッド内で定義されている順)                                                                                                                                                                                                                                                                                                                                                               |
|                        |            | \[ ].name | テキスト                | `<functionName>` 用に表示する引数の名前。<p><p>**注**: 引数の名前にスペースを含めることはできません。                                                                                                                                                                                                                                                                  |
|                        |            | \[ ].type | 数値                  | 引数の型。 サポートされている型:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>省略時のデフォルトでは、値は型と一緒に渡されますが、日付と時間の値に関してはオブジェクトとして送られます ([引数](formulas.md#引数) の章を参照ください)。 type が `Is object` の場合、そのオブジェクトは [`VP Get value`](#vp-get-value) によって返されるオブジェクトと同じ構造を持ちます。 |
|                        | summary    |            | テキスト                | 4D View Pro に表示するファンクションの説明                                                                                                                                                                                                                                                                                                                                                              |
|                        | minParams  |            | 数値                  | 引数の最小の数                                                                                                                                                                                                                                                                                                                                                                                  |
|                        | maxParams  |            | 数値                  | 引数の最大の数。 ここに parameters の length より大きな値を渡すことによって、デフォルトの型を持つ "任意の" 引数を宣言することができるようになります。                                                                                                                                                                                                                                                                                                  |



#### 例題

4D View Pro エリアにおいて、2つのメソッドを許可します:


```4d
C_OBJECT($allowed)
$allowed:=New object // コマンドに渡す引数

$allowed.Hello:=New object // "Hello" という名前の 1つ目の簡単なファンクションを作成します
$allowed.Hello.method:="My_Hello_Method" // 4Dメソッドを設定します
$allowed.Hello.summary:="Hello prints hello world"

$allowed.Byebye:=New object // "Byebye" という名前の、引数を受け付ける 2つ目のファンクションを作成
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

このコードが実行されたあと、定義されたファンクションは 4D View Pro フォーミュラで使用することができるようになります:

![](assets/en/ViewPro/cmd_vpSetAllowedMethods.PNG)


> 4D View Pro フォーミュラにおいて、ファンクション名は自動的に大文字で表示されます。

## 参照

[4D functions](formulas.md#4d-functions)<br/>[VP SET CUSTOM FUNCTIONS](#vp-set-custom-functions)

### VP SET BOOLEAN VALUE<!-- REF #_method_.VP SET BOOLEAN VALUE.Syntax -->**VP SET BOOLEAN VALUE** ( *rangeObj* : Object  ; *boolValue* : Boolean)<!-- END REF --><!-- REF #_method_.VP SET BOOLEAN VALUE.Params -->| 引数        | タイプ    |    | 説明        |
| --------- | ------ | -- | --------- |
| rangeObj  | オブジェクト | -> | レンジオブジェクト |
| boolValue | ブール    | -> | 設定するブール値  |<!-- END REF -->#### 説明

`VP SET BOOLEAN VALUE` コマンドは、<!-- REF #_method_.VP SET BOOLEAN VALUE.Summary -->指定のセルレンジにブール値を割り当てます<!-- END REF -->。

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

*boolValue* 引数には、*rangeObj* のセルレンジに割り当てるブール値 (**true** あるいは **false**) を渡します。


#### 例題

```4d
// セルの値を false に設定
VP SET BOOLEAN VALUE(VP Cell("ViewProArea";3;2);False)
```
## 参照

[VP SET VALUE](#vp-set-value)


### VP SET BORDER<!-- REF #_method_.VP SET BORDER.Syntax -->**VP SET BORDER** ( *rangeObj* : Object ; *borderStyleObj* : Object  ; *borderPosObj* : Object )<!-- END REF --><!-- REF #_method_.VP SET BORDER.Params -->| 引数             | タイプ    |    | 説明                 |
| -------------- | ------ | -- | ------------------ |
| rangeObj       | オブジェクト | -> | レンジオブジェクト          |
| borderStyleObj | オブジェクト | -> | 境界線スタイルを格納したオブジェクト |
| borderPosObj   | オブジェクト | -> | 境界線の位置を格納したオブジェクト  |<!-- END REF -->#### 説明

`VP SET BORDER` コマンドは、<!-- REF #_method_.VP SET BORDER.Summary -->*rangeObj* のレンジに *borderStyleObj* および *borderPosObj* で定義される境界線スタイルを適用します<!-- END REF -->。

*rangeObj* 引数には、境界線スタイルを適用したいセルのレンジを渡します。 *rangeObj* 引数に複数のセルが含まれる場合、`VP SET BORDER` で適用される境界線は、*rangeObj* のレンジ全体を一つのセルとして適用されます (これに対し、[`VP SET CELL STYLE`](#vp-set-cell-style) コマンドでは*rangeObj* 引数のレンジに含まれる個々のセルに対し境界線が適用されます)。 スタイルシートがすでに適用されている場合、`VP SET BORDER` コマンドは *rangeObj* のレンジに対してすでに適用されていた境界線設定を上書きします。

*borderStyleObj* 引数を使用すると、境界線のスタイルを定義することができます。 *borderStyleObj* 引数は、以下のプロパティをサポートしています:

| プロパティ | タイプ  | 説明                             | とりうる値                                                                                                                                                                                                                                                                                                                                                                        |
| ----- | ---- | ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color | テキスト | 境界線のカラーを定義します。 デフォルト = black   | CSSカラー "#rrggbb" シンタックス (推奨シンタックス)、CSSカラー "rgb(r,g,b)" シンタックス (代替シンタックス)、CSSカラーネーム (代替シンタックス)                                                                                                                                                                                                                                                                                |
| style | 整数   | 境界線のスタイルを定義します。 デフォルト = empty。 | <li>`vk line style dash dot`</li><li>`vk line style dash dot dot`</li><li>`vk line style dashed`</li> <li>`vk line style dotted`</li><li>`vk line style double`</li><li>`vk line style empty`</li><li>`vk line style hair`</li> <li>`vk line style medium`</li><li>`vk line style medium dash dot`</li><li>`vk line style medium dash dot dot`</li><li>`vk line style medium dashed`</li><li>`vk line style slanted dash dot`</li><li>`vk line style thick`</li><li>`vk line style thin`</li> |


*borderStyleObj* の境界線スタイルの位置 (どこに境界線を引くか) は *borderPosObj* 引数で定義します:



| プロパティ           | タイプ     | 説明                        |
| --------------- | ------- | ------------------------- |
| all             | boolean | 境界線スタイルはすべての境界に適用されます。    |
| left            | boolean | 境界線スタイルは左の境界に適用されます。      |
| top             | boolean | 境界線スタイルは上の境界に適用されます。      |
| right           | boolean | 境界線スタイルは右の境界に適用されます。      |
| bottom          | boolean | 境界線スタイルは下の境界に適用されます。      |
| outline         | boolean | 境界線スタイルは外側の境界にのみ適用されます。   |
| inside          | boolean | 境界線スタイルは内側の境界にのみ適用されます。   |
| innerHorizontal | boolean | 境界線スタイルは内側の横の境界にのみ適用されます。 |
| innerVertical   | boolean | 境界線スタイルは内側の縦の境界にのみ適用されます。 |


#### 例題 1

以下のコードは、レンジ全体の外周に境界線を生成します:

```4d
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)
```


![](assets/en/ViewPro/cmd_vpSETBORDER1.PNG)

#### 例題 2

以下のコードは、`VP SET BORDER` と [`VP SET CELL STYLE`](#vp-set-cell-style) で境界線を設定した場合の違いを示します:

```4d
// VP SET BORDER で境界線を設定します
$border:=New object("color";"red";"style";vk line style thick)
$option:=New object("outline";True)
VP SET BORDER(VP Cells("ViewProArea";1;1;3;3);$border;$option)

// VP SET CELL STYLE を使用して境界線を設定します
$cellStyle:=New object
$cellStyle.borderBottom:=New object("color";"blue";"style";vk line style thick)
$cellStyle.borderRight:=New object("color";"blue";"style";vk line style thick)
VP SET CELL STYLE(VP Cells("ViewProArea";4;4;3;3);$cellStyle)
```


![](assets/en/ViewPro/cmd_vpSETBORDER2.PNG)

## 参照

[VP SET CELL STYLE](#vp-set-cell-style)

### VP SET CELL STYLE<!-- REF #_method_.VP SET CELL STYLE.Syntax -->**VP SET CELL STYLE** ( *rangeObj* : Object  ; *styleObj*  : Object)<!-- END REF --><!-- REF #_method_.VP SET CELL STYLE.Params -->| 引数       | タイプ    |    | 説明         |
| -------- | ------ | -- | ---------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト  |
| styleObj | オブジェクト | -> | スタイルオブジェクト |<!-- END REF -->#### 説明

`VP SET CELL STYLE` コマンドは、<!-- REF #_method_.VP SET CELL STYLE.Summary -->*styleObj* に定義されているスタイルを、*rangeObj* で定義されたセルに適用します<!-- END REF -->。

*rangeObj* 引数には、スタイルを適用したいセルのレンジを渡します。 *rangeObj* に複数のセルが含まれる場合、スタイルはそれぞれのセルに割り当てられます。
> `VP SET CELL STYLE` で適用された境界線は、*rangeObj* の各セルに対して適用されます。これに対して [VP SET BORDER](#vp-set-border) コマンドは境界線を *rangeObj* のレンジ全体に対して適用されます。

*styleObj* にはスタイル設定を格納したオブジェクトを渡します。 既存のスタイルシートを使用することもできますし、新しいスタイルを作成することも可能です。 *styleObj* に既存のスタイルシートと、追加のスタイル設定の両方が格納されている場合、既存のスタイルシートが先に適用され、そのあとに追加の設定が適用されます。 *styleObj* 引数として NULL値を渡した場合、*rangeObj* のレンジのスタイルシートはすべて削除され、デフォルトのスタイル設定 (あれば) に戻されます。

スタイルオブジェクトとスタイルシートの詳細については、[スタイルオブジェクト](configuring.md#スタイルオブジェクト) を参照ください。


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



### VP SET COLUMN ATTRIBUTES<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Syntax -->**VP SET COLUMN ATTRIBUTES** ( *rangeObj* : Object  ; *propertyObj* : Object)<!-- END REF --><!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Params -->| 引数          | タイプ    |    | 説明                  |
| ----------- | ------ | -- | ------------------- |
| rangeObj    | オブジェクト | -> | レンジオブジェクト           |
| propertyObj | オブジェクト | -> | カラムプロパティを格納したオブジェクト |<!-- END REF -->#### 説明

The `VP SET COLUMN ATTRIBUTES` command<!-- REF #_method_.VP SET COLUMN ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the columns in the *rangeObj*<!-- END REF -->.

In *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the columns.

The *propertyObj* parameter lets you specify the attributes to apply to the columns in the *rangeObj*. These attributes are:

| プロパティ     | タイプ     | 説明                                                                           |
| --------- | ------- | ---------------------------------------------------------------------------- |
| width     | number  | Column width expressed in pixels                                             |
| pageBreak | boolean | True to insert a page break before the first column of the range, else false |
| visible   | boolean | True if the column is visible, else false                                    |
| resizable | boolean | True if the column can be resized, else false                                |
| headers   | テキスト    | Column header text                                                           |


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

### VP SET COLUMN COUNT<!-- REF #_method_.VP SET COLUMN COUNT.Syntax -->**VP SET COLUMN COUNT** ( *vpAreaName* : Text , *columnCount* : Integer { , *sheet* : Integer } )<!-- END REF --><!-- REF #_method_.VP SET COLUMN COUNT.Params -->| 引数          | タイプ  |    | 説明                          |
| ----------- | ---- | -- | --------------------------- |
| vpAreaName  | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| columnCount | 整数   | -> | カラム数                        |
| sheet       | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |<!-- END REF -->#### 説明

The `VP SET COLUMN COUNT` command<!-- REF #_method_.VP SET COLUMN COUNT.Summary -->defines the total number of columns in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the total number of columns in the *columnCount* parameter. *columnCount* 引数は 0 より大きい値でなくてはなりません。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *columnCount* will be applied (counting begins at 0). 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

*   `vk current sheet`

#### 例題

The following code defines five columns in the 4D View Pro area:

```4d
VP SET COLUMN COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetColumnCount.PNG)

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP Get row count](#vp-get-row-count)<br/>[VP SET ROW COUNT](#vp-set-row-count)

### VP SET CURRENT SHEET<!-- REF #_method_.VP SET CURRENT SHEET.Syntax -->**VP SET CURRENT SHEET** ( *vpAreaName* : Text ; *index* : Integer)<!-- END REF --><!-- REF #_method_.VP SET CURRENT SHEET.Params -->| 引数         | タイプ  |    | 説明                             |
| ---------- | ---- | -- | ------------------------------ |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名        |
| index      | 整数   | <- | Index of the new current sheet |<!-- END REF -->#### 説明

The `VP SET CURRENT SHEET` command<!-- REF #_method_.VP SET CURRENT SHEET.Summary -->sets the current sheet in *vpAreaName*<!-- END REF -->. カレントシートとは、ドキュメント内で選択されているシートのことです。

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
### VP SET CUSTOM FUNCTIONS<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  )<!-- END REF --><!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->| 引数         | タイプ    |    | 説明                      |
| ---------- | ------ | -- | ----------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |
| formulaObj | オブジェクト | -> | フォーミュラオブジェクト            |<!-- END REF -->#### 説明

The `VP SET CUSTOM FUNCTIONS` command<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->designates the 4D formulas that can be called directly from 4D View Pro formulas<!-- END REF -->. Because custom functions are not stored in the document,`VP SET CUSTOM FUNCTIONS` must be executed in the `On Load` form event.

The formulas specified by `VP SET CUSTOM FUNCTIONS` appear in a pop-up menu when the first letter of their name is entered. See the [Formulas and Functions](formulas.md) page.

> If `VP SET CUSTOM FUNCTIONS` is called multiple times for the same area, in the same session, only the last call is taken into account.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

In the *formulaObj* parameter, pass an object containing the 4D formulas that can be called from 4D View Pro formulas as well as additional properties. Each `customFunction` property passed in *formulaObj* becomes the name of a function in the 4D View Pro area.

| プロパティ                    |            |            | タイプ                 | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------ | ---------- | ---------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |            | オブジェクト              | カスタムファンクションの名前。 `<customFunction>` defines the name of the custom function to display in 4D View Pro formulas (no spaces allowed)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                          | formula    |            | オブジェクト              | 4D formula object (mandatory). See the `Formula` command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                          | parameters |            | Object の Collection | Collection of parameters (in the order they are defined in the formula)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                          |            | \[ ].name | テキスト                | Name of parameter to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|                          |            | \[ ].type | 数値                  | 引数の型。 サポートされている型:<li>`Is Boolean`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>If *type* is omitted or if the default value (-1) is passed, the value is automatically sent with its type, except date or time values which are sent as an object (see [Parameters](formulas.md#parameters) section).<p><p>If *type* is `Is object`, the object has the same structure as the object returned by [VP Get value](#vp-get-value). |
|                          | summary    |            | テキスト                | Formula description to display in 4D View Pro                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                          | minParams  |            | 数値                  | 引数の最小の数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                          | maxParams  |            | 数値                  | 引数の最大の数。 Passing a number higher than the length of *parameters* allows declaring "optional" parameters with default type                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
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

### VP SET DATE TIME VALUE<!-- REF #_method_.VP SET DATE TIME VALUE.Syntax -->**VP SET DATE TIME VALUE** ( *rangeObj* : Object ; *dateValue* : Date ; *timeValue* : Time {; *formatPattern* : Text } )<!-- END REF --><!-- REF #_method_.VP SET DATE TIME VALUE.Params -->| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| dateValue     | 日付     | -> | Date value to set |
| timeValue     | 時間     | -> | Time value to set |
| formatPattern | テキスト   | -> | Format of value   |<!-- END REF -->#### 説明

The `VP SET DATE TIME VALUE` command<!-- REF #_method_.VP SET DATE TIME VALUE.Summary -->assigns a specified date and time value to a designated cell range<!-- END REF -->.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

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


### VP SET DATE VALUE<!-- REF #_method_.VP SET DATE VALUE.Syntax -->**VP SET DATE VALUE** ( *rangeObj* : Object ; *dateValue* : Date { ; *formatPattern* : Text } )<!-- END REF --><!-- REF #_method_.VP SET DATE VALUE.Params -->| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| dateValue     | 日付     | -> | Date value to set |
| formatPattern | テキスト   | -> | Format of value   |<!-- END REF -->#### 説明

The `VP SET DATE VALUE` command<!-- REF #_method_.VP SET DATE VALUE.Summary -->assigns a specified date value to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

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

### VP SET DEFAULT STYLE<!-- REF #_method_.VP SET DEFAULT STYLE.Syntax -->**VP SET DEFAULT STYLE** ( *vpAreaName* : Text ; *styleObj* : Object { ; *sheet* : Integer } )<!-- END REF --><!-- REF #_method_.VP SET DEFAULT STYLE.Params -->| 引数         | タイプ    |    | 説明                                    |
| ---------- | ------ | -- | ------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名               |
| styleObj   | オブジェクト | -> | スタイルオブジェクト                            |
| sheet      | 整数     | -> | Sheet index (default = current sheet) |<!-- END REF -->#### 説明

The `VP SET DEFAULT STYLE` command<!-- REF #_method_.VP SET DEFAULT STYLE.Summary -->defines the style in the *styleObj* as the default style for a *sheet*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

The *styleObj* lets you pass an object containing style settings. You can use an existing style sheet or you can create a new style. For more information, see the [Style objects](configuring.md#style-objects) paragraph.

In the optional *sheet* parameter, you can designate a specific spreadsheet where the style will be defined. 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

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

### VP SET FIELD<!-- REF #_method_.VP SET FIELD.Syntax -->**VP SET FIELD** ( *rangeObj* : Object ; *field* : Pointer { ; *formatPattern* : Text } )<!-- END REF --><!-- REF #_method_.VP SET FIELD.Params -->| 引数            | タイプ    |    | 説明                                      |
| ------------- | ------ | -- | --------------------------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト                               |
| フィールド         | ポインター  | -> | Reference to field in virtual structure |
| formatPattern | テキスト   | -> | Format of field                         |<!-- END REF -->#### 説明

The `VP SET FIELD` command<!-- REF #_method_.VP SET FIELD.Summary -->assigns a 4D database virtual field to a designated cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell(s) whose value you want to specify. If *rangeObj* includes multiple cells, the specified field will be linked in each cell.

The *field* parameter specifies a 4D database [virtual field](formulas.md#referencing-fields-using-the-virtual-structure) to be assigned to the *rangeObj*. The virtual structure name for *field* can be viewed in the formula bar. If any of the cells in *rangeObj* have existing content, it will be replaced by *field*.

The optional *formatPattern* defines a pattern for the *field* parameter. You can pass any valid [custom format](configuring.md#cell-format).

#### 例題

```4d
VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)
```
#### 参照

[VP SET VALUE](#vp-set-value)

### VP SET FORMULA<!-- REF #_method_.VP SET FORMULA.Syntax -->**VP SET FORMULA** ( *rangeObj* : Object ; *formula* : Text { ; *formatPattern* : Text } )<!-- END REF --><!-- REF #_method_.VP SET FORMULA.Params -->| 引数            | タイプ    |    | 説明                   |
| ------------- | ------ | -- | -------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト            |
| formula       | テキスト   | -> | Formula or 4D method |
| formatPattern | テキスト   | -> | Format of field      |<!-- END REF -->#### 説明

The `VP SET FORMULA` command<!-- REF #_method_.VP SET FORMULA.Summary -->assigns a specified formula or 4D method to a designated cell range<!-- END REF -->.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 If *rangeObj* includes multiple cells, the formula specified will be linked in each cell.

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

### VP SET FORMULAS<!-- REF #_method_.VP SET FORMULAS.Syntax -->**VP SET FORMULAS** ( *rangeObj* : Object ; *formulasCol* : Collection )<!-- END REF --><!-- REF #_method_.VP SET FORMULAS.Params -->| 引数          | タイプ    |    | 説明                     |
| ----------- | ------ | -- | ---------------------- |
| rangeObj    | オブジェクト | -> | セルレンジオブジェクト            |
| formulasCol | コレクション | -> | Collection of formulas |<!-- END REF -->#### 説明

The `VP SET FORMULAS` command<!-- REF #_method_.VP SET FORMULAS.Summary -->assigns a collection of formulas starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range of the cell (created with [VP Cell](#vp-cell)) whose formula you want to specify. *rangeObj* のレンジが複数レンジを指定している場合、最初のレンジのみが使用されます。

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


### VP SET FROZEN PANES<!-- REF #_method_.VP SET FROZEN PANES.Syntax -->**VP SET FROZEN PANES** ( *vpAreaName* : Text ; *paneObj* : Object { ; *sheet* : Integer } )<!-- END REF --><!-- REF #_method_.VP SET FROZEN PANES.Params -->| 引数         | タイプ    |    | 説明                            |
| ---------- | ------ | -- | ----------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名       |
| paneObj    | オブジェクト | -> | 固定化されたカラムと行についての情報を格納したオブジェクト |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)   |<!-- END REF -->#### 説明

The `VP SET FROZEN PANES` command<!-- REF #_method_.VP SET FROZEN PANES.Summary -->sets the frozen status of the columns and rows in the *paneObj* so they are always displayed in the *vpAreaName*<!-- END REF -->. Frozen columns and rows are fixed in place and do not move when the rest of the document is scrolled. A solid line is displayed to indicate that columns and rows are frozen. The location of the line depends on where the frozen column or row is on the sheet:

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

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、定義されるレンジが属するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

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

### VP SET NUM VALUE<!-- REF #_method_.VP SET NUM VALUE.Syntax -->**VP SET NUM VALUE** ( *rangeObj* : Object ; *numberValue* : Number { ; *formatPattern* : Text } )<!-- END REF --><!-- REF #_method_.VP SET NUM VALUE.Params -->| 引数            | タイプ    |    | 説明                  |
| ------------- | ------ | -- | ------------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト           |
| numberValue   | 数値     | -> | Number value to set |
| formatPattern | テキスト   | -> | Format of value     |<!-- END REF -->#### 説明

The `VP SET NUM VALUE` command<!-- REF #_method_.VP SET NUM VALUE.Summary -->assigns a specified numeric value to a designated cell range<!-- END REF -->.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

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

### VP SET PRINT INFO<!-- REF #_method_.VP SET PRINT INFO.Syntax -->**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  )<!-- END REF --><!-- REF #_method_.VP SET PRINT INFO.Params -->| 引数         | タイプ    |    | 説明                                    |
| ---------- | ------ | -- | ------------------------------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリア名                      |
| printInfo  | オブジェクト | -> | Object containing printing attributes |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート)           |<!-- END REF -->#### 説明

The `VP SET PRINT INFO` command<!-- REF #_method_.VP SET PRINT INFO.Summary -->defines the attributes to use when printing the *vpAreaName*<!-- END REF -->.

Pass the name of the 4D View Pro area to print in *vpAreaName*. 存在しない名前を渡した場合、エラーが返されます。

You can pass an object containing definitions for various printing attributes in the *printInfo* parameter. To view the full list of the available attributes, see [Print Attributes](configuring.md#print-attributes).

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、印刷するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

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

### VP SET ROW ATTRIBUTES<!-- REF #_method_.VP SET ROW ATTRIBUTES.Syntax -->**VP SET ROW ATTRIBUTES** ( *rangeObj* : Object ; *propertyObj* : Object  )<!-- END REF --><!-- REF #_method_.VP SET ROW ATTRIBUTES.Params -->| 引数          | タイプ    |    | 説明                               |
| ----------- | ------ | -- | -------------------------------- |
| rangeObj    | オブジェクト | -> | Range of rows                    |
| propertyObj | オブジェクト | -> | Object containing row properties |<!-- END REF -->#### 説明

The `VP SET ROW ATTRIBUTES` command<!-- REF #_method_.VP SET ROW ATTRIBUTES.Summary -->applies the attributes defined in the *propertyObj* to the rows in the *rangeObj*<!-- END REF -->.

In the *rangeObj*, pass an object containing a range. If the range contains both columns and rows, attributes are applied only to the rows.

The *propertyObj* parameter lets you specify the attributes to apply to the rows in the *rangeObj*. These attributes are:

| プロパティ     | タイプ     | 説明                                                                        |
| --------- | ------- | ------------------------------------------------------------------------- |
| height    | number  | Row height expressed in pixels                                            |
| pageBreak | boolean | True to insert a page break before the first row of the range, else false |
| visible   | boolean | True if the row is visible, else false                                    |
| resizable | boolean | True if the row can be resized, else false                                |
| headers   | テキスト    | Row header text                                                           |


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

### VP SET ROW COUNT<!-- REF #_method_.VP SET ROW COUNT.Syntax -->**VP SET ROW COUNT** ( *vpAreaName* : Text ; *rowCount* : Integer { ; *sheet* : Integer }  )<!-- END REF --><!-- REF #_method_.VP SET ROW COUNT.Params -->| 引数         | タイプ  |    | 説明                          |
| ---------- | ---- | -- | --------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名     |
| rowCount   | 整数   | -> | 行数                          |
| sheet      | 整数   | -> | シートのインデックス (省略した場合はカレントシート) |<!-- END REF -->#### 説明

The `VP SET ROW COUNT` command<!-- REF #_method_.VP SET ROW COUNT.Summary -->defines the total number of rows in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass the total number of rows in the *rowCount* parameter. *rowCount* 引数は 0 より大きい値でなくてはなりません。

In the optional *sheet* parameter, you can designate a specific spreadsheet where the *rowCount* will be applied (counting begins at 0). 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

*   `vk current sheet`


#### 例題

The following code defines five rows in the 4D View Pro area:

```4d
VP SET ROW COUNT("ViewProArea";5)
```

![](assets/en/ViewPro/cmd_vpSetRowCount.PNG)

#### 参照

[VP Get column count](#vp-get-column-count)<br/>[VP get row-count](#vp-get-row-count)<br/>[VP SET COLUMN COUNT](#vp-set-column-count)

### VP SET SELECTION<!-- REF #_method_.VP SET SELECTION.Syntax -->**VP SET SELECTION** ( *rangeObj* : Object  )<!-- END REF --><!-- REF #_method_.VP SET SELECTION.Params -->| 引数       | タイプ    |    | 説明             |
| -------- | ------ | -- | -------------- |
| rangeObj | オブジェクト | -> | 複数セルのレンジオブジェクト |<!-- END REF -->#### 説明

The `VP SET SELECTION` command<!-- REF #_method_.VP SET SELECTION.Summary -->defines the specified cells as the selection and the first cell as the active cell<!-- END REF -->.

In *rangeObj*, pass a range object of cells to designate as the current selection.

#### 例題

```4d
$currentSelection:=VP Combine ranges(VP Cells("myVPArea";3;2;1;6);VP Cells("myVPArea";5;7;1;7))
VP SET SELECTION($currentSelection)
```

![](assets/en/ViewPro/cmd_vpSetSelection.PNG)

#### 参照

[VP Get active cell](#vp-get-active-cell)<br/>[VP Get selection](#vp-get-selection)<br/>[VP RESET SELECTION](#vp-reset-selection)<br/>[VP SET ACTIVE CELL](#vp-set-active-cell)<br/>[VP ADD SELECTION](#vp-add-selection)<br/>[VP SHOW CELL](#vp-show-cell)

### VP SET SHEET COUNT<!-- REF #_method_.VP SET SHEET COUNT.Syntax -->**VP SET SHEET COUNT** ( *vpAreaName* : Text ; *number* : Integer  )<!-- END REF --><!-- REF #_method_.VP SET SHEET COUNT.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |
| number     | 整数   | -> | シートの数                   |<!-- END REF -->#### 説明

The `VP SET SHEET COUNT` command<!-- REF #_method_.VP SET SHEET COUNT.Summary -->sets the number of sheets in *vpAreaName*<!-- END REF -->.

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

### VP SET SHEET NAME<!-- REF #_method_.VP SET SHEET NAME.Syntax -->**VP SET SHEET NAME** ( *vpAreaName* : Text ; *name* : Text {; index: Integer} )<!-- END REF --><!-- REF #_method_.VP SET SHEET NAME.Params -->| 引数         | タイプ  |    | 説明                               |
| ---------- | ---- | -- | -------------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名          |
| name       | テキスト | -> | New name for the sheet           |
| index      | 整数   | -> | Index of the sheet to be renamed |<!-- END REF -->#### 説明

The `VP SET SHEET NAME` command<!-- REF #_method_.VP SET SHEET NAME.Summary -->renames a sheet in the document loaded in *vpAreaName*<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。

In *name*, pass a new name for the sheet.

In *index*, pass the index of the sheet to rename.

> インデックスは 0 起点です。

If no *index* is passed, the command renames the current sheet.

新しい名前には、次の文字を含めることはできません: `*, :, [, ], ?,\,/`

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


### VP SET SHEET OPTIONS<!-- REF #_method_.VP SET SHEET OPTIONS.Syntax -->**VP SET SHEET OPTIONS** ( *vpAreaName* : Text; *sheetOptions* : Object { ; *sheet* : Integer}  )<!-- END REF --><!-- REF #_method_.VP SET SHEET OPTIONS.Params -->| 引数           | タイプ    |    | 説明                          |
| ------------ | ------ | -- | --------------------------- |
| vpAreaName   | オブジェクト | -> | 4D View Pro エリア名            |
| sheetOptions | オブジェクト | -> | Sheet option(s) to set      |
| sheet        | オブジェクト | -> | シートのインデックス (省略した場合はカレントシート) |<!-- END REF -->#### 説明

The `VP SET SHEET OPTIONS` command<!-- REF #_method_.VP SET SHEET OPTIONS.Summary -->allows defining various sheet options of the *vpAreaName* area<!-- END REF -->.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

Pass an object containing definitions for the options to set in the *sheetOptions* parameter. To view the full list of the available options, see the [Sheet Options](configuring.md#sheet-options) paragraph.

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、スプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

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

### VP SET SHOW PRINT LINES<!-- REF #_method_.VP SET SHOW PRINT LINES.Syntax -->**VP SET SHOW PRINT LINES** ( *vpAreaName* : Text {; visible : Boolean}{; index : Integer} )<!-- END REF --><!-- REF #_method_.VP SET SHOW PRINT LINES.Params -->| 引数         | タイプ  |    | 説明                                                       |
| ---------- | ---- | -- | -------------------------------------------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名                                  |
| visible    | ブール  | -> | Print lines displayed if True (default), hidden if False |
| index      | 整数   | -> | シートのインデックス                                               |<!-- END REF -->#### 説明

The `VP SET SHOW PRINT LINES` command<!-- REF #_method_.VP SET SHOW PRINT LINES.Summary -->sets whether to display print preview lines in a spreadsheet.<!-- END REF -->.

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

### VP SET TEXT VALUE<!-- REF #_method_.VP SET TEXT VALUE.Syntax -->**VP SET TEXT VALUE** ( *rangeObj* : Object ; *textValue* : Text { ; *formatPattern* : Text }  )<!-- END REF --><!-- REF #_method_.VP SET TEXT VALUE.Params -->| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| textValue     | テキスト   | -> | Text value to set |
| formatPattern | テキスト   | -> | Format of value   |<!-- END REF -->#### 説明

The `VP SET TEXT VALUE` command<!-- REF #_method_.VP SET TEXT VALUE.Summary -->assigns a specified text value to a designated cell range<!-- END REF -->.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

The *textValue* parameter specifies a text value to be assigned to the *rangeObj*.

The optional *formatPattern* defines a [pattern](configuring.md#cell-format) for the *textValue* parameter.


#### 例題

```4d
VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")
```

#### 参照

[Cell Format](configuring.md#cell-format)<br/>[VP SET VALUE](#vp-set-value)

### VP SET TIME VALUE<!-- REF #_method_.VP SET TIME VALUE.Syntax -->**VP SET TIME VALUE** ( *rangeObj* : Object ; *timeValue* : Text { ; *formatPattern* : Text }  )<!-- END REF --><!-- REF #_method_.VP SET TIME VALUE.Params -->| 引数            | タイプ    |    | 説明                |
| ------------- | ------ | -- | ----------------- |
| rangeObj      | オブジェクト | -> | レンジオブジェクト         |
| timeValue     | テキスト   | -> | Time value to set |
| formatPattern | テキスト   | -> | Format of value   |<!-- END REF -->#### 説明

The `VP SET TIME VALUE` command<!-- REF #_method_.VP SET TIME VALUE.Summary -->assigns a specified time value to a designated cell range<!-- END REF -->.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。

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

### VP SET VALUE<!-- REF #_method_.VP SET VALUE.Syntax -->**VP SET VALUE** ( *rangeObj* : Object ; *valueObj* : Object )<!-- END REF --><!-- REF #_method_.VP SET VALUE.Params -->| 引数       | タイプ    |    | 説明                             |
| -------- | ------ | -- | ------------------------------ |
| rangeObj | オブジェクト | -> | レンジオブジェクト                      |
| valueObj | オブジェクト | -> | Cell values and format options |<!-- END REF -->#### 説明

The `VP SET VALUE` command<!-- REF #_method_.VP SET VALUE.Summary -->assigns a specified value to a designated cell range<!-- END REF -->.

The command allows you to use a generic code to set and format the types of values in *rangeObj*, whereas other commands, such as [`VP SET TEXT VALUE`](#vp-set-text-value) and [`VP SET NUM VALUE`](#vp-set-num-value), reduce the values to specific types.

*rangeObj* には、値を割り当てたいセルのレンジ (たとえば [`VP Cell`](#vp-cell) あるいは [`VP Column`](#vp-column) で作成されたレンジ) を渡します。 *rangeObj* 引数に複数のセルが含まれる場合、指定された値はそれぞれのセルに対して繰り返し割り当てられます。


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

### VP SET VALUES<!-- REF #_method_.VP SET VALUES.Syntax -->**VP SET VALUES** ( *rangeObj* : Object ; *valuesCol* : Collection )<!-- END REF --><!-- REF #_method_.VP SET VALUES.Params -->| 引数        | タイプ    |    | 説明        |
| --------- | ------ | -- | --------- |
| rangeObj  | オブジェクト | -> | レンジオブジェクト |
| valuesCol | コレクション | -> | 値のコレクション  |<!-- END REF -->#### 説明

The `VP SET VALUES` command<!-- REF #_method_.VP SET VALUES.Summary -->assigns a collection of values starting at the specified cell range<!-- END REF -->.

In *rangeObj*, pass a range for the cell (created with [`VP Cell`](#vp-cell)) whose value you want to specify. The cell defined in the *rangeObj* is used to determine the starting point.
> * If *rangeObj* is not a cell range, only the first cell of the range is used.
> * If *rangeObj* includes multiple ranges, only the first cell of the first range is used.

The *valuesCol* parameter is two-dimensional:

*   The first-level collection contains subcollections of values. Each subcollection defines a row. Pass an empty collection to skip a row.
*   それぞれのサブコレクションは行におけるセルの値を定義します。 Values can be Integer, Real, Boolean, Text, Date, Null, or Object. If the value is an object, it can have the following properties:

    | プロパティ | タイプ                                      | 説明                      |
    | ----- | ---------------------------------------- | ----------------------- |
    | value | Integer, Real, Boolean, Text, Date, Null | セルの値 (時間部分を除く)          |
    | time  | 実数                                       | Time value (in seconds) |

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

### VP SET WORKBOOK OPTIONS<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Syntax -->**VP SET WORKBOOK OPTIONS** ( *vpAreaName* : Text ; *optionObj* : Object)<!-- END REF --><!-- REF #_method_.VP SET WORKBOOK OPTIONS.Params -->| 引数         | タイプ    |    | 説明                                               |
| ---------- | ------ | -- | ------------------------------------------------ |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                          |
| optionObj  | オブジェクト | -> | Object containing the workbook options to be set |<!-- END REF -->#### 説明

`VP SET WORKBOOK OPTIONS`<!-- REF #_method_.VP SET WORKBOOK OPTIONS.Summary -->sets the workbook options in *vpAreaName*<!-- END REF -->.

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

#### 参照

[VP Get workbook options](#vp-get-workbook-options)

### VP SHOW CELL<!-- REF #_method_.VP SHOW CELL.Syntax -->**VP SHOW CELL** ( *rangeObj* : Object { ; *vPos* : Integer; *hPos* : Integer } )<!-- END REF --><!-- REF #_method_.VP SHOW CELL.Params -->| 引数       | タイプ    |    | 説明                                      |
| -------- | ------ | -- | --------------------------------------- |
| rangeObj | オブジェクト | -> | レンジオブジェクト                               |
| vPos     | 整数     | -> | Vertical view position of cell or row   |
| hPos     | 整数     | -> | Horizontal view position of cell or row |<!-- END REF -->#### 説明

The `VP SHOW CELL` command<!-- REF #_method_.VP SHOW CELL.Summary -->vertically and horizontally repositions the view of the *rangeObj*<!-- END REF -->.

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

### VP SUSPEND COMPUTING<!-- REF #_method_.VP SUSPEND COMPUTING.Syntax -->**VP SUSPEND COMPUTING** ( *vpAreaName* : Text )<!-- END REF --><!-- REF #_method_.VP SUSPEND COMPUTING.Params -->| 引数         | タイプ  |    | 説明                      |
| ---------- | ---- | -- | ----------------------- |
| vpAreaName | テキスト | -> | 4D View Pro フォームオブジェクト名 |<!-- END REF -->#### 説明

The `VP SUSPEND COMPUTING` command<!-- REF #_method_.VP SUSPEND COMPUTING.Summary -->stops the calculation of all formulas in *vpAreaName*<!-- END REF -->. This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes.

The command pauses the calculation service in 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after `VP SUSPEND COMPUTING` command  is executed are not calculated.

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。
> 4D View Pro 計算機能は停止/再開アクションを内部的にカウントしています。 Therefore, each execution of `VP SUSPEND COMPUTING` command  must be balanced by a corresponding execution of the `VP RESUME COMPUTING` command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed.

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
#### 参照

[VP RECOMUTE FORMULAS](#vp-recompute-formulas)<br/>[VP RESUME COMPUTING](#vp-resume-computing)


<style> h2 { background: #d9ebff;}</style>
