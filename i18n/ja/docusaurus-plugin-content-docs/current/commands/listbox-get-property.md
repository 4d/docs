---
id: listbox-get-property
title: LISTBOX Get property
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *object* ; *property* ) : any<!-- END REF-->

<!--REF #_command_.LISTBOX Get property.Params-->

| 引数       | 型             |                             | 説明                                                                    |
| -------- | ------------- | --------------------------- | --------------------------------------------------------------------- |
| \*       | 演算子           | &#8594; | 指定時、object はオブジェクト名(文字列)。 省略時、object は変数。          |
| object   | any           | &#8594; | オブジェクト名 (\* 指定時) または変数 (\* 省略時) |
| property | Integer       | &#8594; | 値を取得したいプロパティ                                                          |
| 戻り値      | Integer, Text | &#8592; | カレントの値                                                                |

<!-- END REF-->

## 説明

<!--REF #_command_.LISTBOX Get property.Summary-->**LISTBOX Get property** コマンドは、*object* 引数および *\** 引数を使用して指定したリストボックスまたはリストボックスカラムの、 *property* で指定したプロパティの値を返します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名(文字列)であることを示します。 この引数を渡さない場合、*object* 引数が変数であることを示します。 この場合、文字列ではなく変数参照を指定します。 オブジェクト名についての詳細は *オブジェクトプロパティ* を参照してください。

**注:** *object* および *\** で指定されたリストボックスまたはカラムが存在しない場合には、**LISTBOX Get property** コマンドはプロパティの種類により -1 (数値の場合) または空文字列 (文字列の場合) を返します。

*property* 引数には、取得しようとするプロパティを表す定数を渡します。 この引数には“*List Box*” テーマの次の定数のいずれかを使用することができます:

| 定数                             | 値  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------ | -- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14 | **[Wordwrap](../FormObjects/properties_Display.md#wordwrap)** property<br/>Applies to: Column \* <br/>Possible values:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                             |
| lk auto row height             | 31 | 配列型リストボックスの **[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#自動行高)** プロパティ<br/>適用対象: リストボックスあるいはカラム<br/>取りうる値:<br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                          |
| lk background color expression | 22 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[背景色式](../FormObjects/properties_BackgroundAndBorder.md#背景色式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                                                                                                                                                |
| lk cell horizontal padding     | 36 | **[横方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#横方向パディング)** プロパティ<br/> セル内の横方向パディング(ピクセル単位、左右のパディングで同じ値)<br/>敵意用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                                                                                                                                                            |
| lk cell vertical padding       | 37 | **[縦方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#縦方向パディング)** プロパティ<br/> セルの縦方向パディング(ピクセル単位、上下のパディングで同じ値)<br/>適用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                                                                                                                                                              |
| lk column max width            | 26 | **[最大幅](../FormObjects/properties_CoordinatesAndSizing.md#最大幅)** プロパティ<br/>適用先: カラム \*                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| lk column min width            | 25 | **[最小幅](../FormObjects/properties_CoordinatesAndSizing.md#最小幅)** プロパティ<br/>適用対象: カラム \*                                                                                                                                                                                                                                                                                                                                                                                                                                |
| lk column resizable            | 15 | **[Resizable](../FormObjects/properties_ResizingOptions.md#resizable)** property<br/>Applies to: Column \* <br/>Possible values:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                   |
| lk detail form name            | 19 | セレクション型リストボックスの **[詳細フォーム名](../FormObjects/properties_ListBox.md#詳細フォーム名)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                                                                                                                                                                    |
| lk display footer              | 8  | **[フッターを表示](../FormObjects/properties_Footers.md#フッターを表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                                                                                                                                                            |
| lk display header              | 0  | **[ヘッダーを表示](../FormObjects/properties_Headers.md#ヘッダーを表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                                                                                                                                                            |
| lk display type                | 21 | **[Display Type](../FormObjects/properties_Display.md#display-type)** property for numeric columns<br/>Applies to: Column \* <br/>Possible values: <br/> lk numeric format (0): displays values in numeric format <br/> lk three states checkbox (1): displays values as three-state checkboxes                                                                                                                                  |
| lk double click on row         | 18 | **[Double-click on row](../FormObjects/properties_ListBox.md#double-click-on-row)** property for selection type list box<br/>Applies to: List box<br/>Possible values: <br/> lk do nothing (0): does not trigger any automatic action <br/> lk edit record (1): displays corresponding record in read-write mode <br/> lk display record (2): displays corresponding record in read-only mode |
| lk extra rows                  | 13 | **[Hide extra blank rows](../FormObjects/properties_BackgroundAndBorder.md#hide-extra-blank-rows)** property<br/>Applies to: List box<br/>Possible values: <br/> lk display (0)<br/> lk hide (1)                                                                                                                                                                                                                                                                 |
| lk font color expression       | 23 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[フォントカラー式](../FormObjects/properties_Text.md#フォントカラー式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                                                                                                                                                       |
| lk font style expression       | 24 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[スタイル式](../FormObjects/properties_Text.md#スタイル式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                                                                                                                                                             |
| lk hide selection highlight    | 16 | **[Hide selection highlight](../FormObjects/properties_Appearance.md#hide-selection-highlight)** property<br/>Applies to: List box<br/>Possible values: <br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                           |
| lk highlight set               | 27 | セレクション型リストボックスの **[セットをハイライト](../FormObjects/properties_ListBox.md#ハイライトセット)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                                                                                                                                                                 |
| lk hor scrollbar height        | 3  | 高さ(ピクセル単位)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| lk meta expression             | 34 | コレクションまたはエンティティセレクション型リストボックスの **[メタ情報式](../FormObjects/properties_Text.md#メタ情報式)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                                                                                                                                                            |
| lk movable rows                | 35 | **[Movable Rows](../FormObjects/properties_Action.md#movable-rows)** property for array type list box <br/>Applies to: List box (excluding hierarchical mode) <br/>Possible values:<br/> lk no (0): Rows cannot be moved at runtime <br/> lk yes (1): Rows can be moved at runtime (default)                                                                                               |
| lk multi style                 | 30 | **[Multi-style](../FormObjects/properties_Text.md#multi-style)** property <br/>Applies to: Column \* <br/>Possible values:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                         |
| lk named selection             | 28 | セレクション型リストボックスの **[命名セレクション](../FormObjects/properties_DataSource.md#命名セレクション)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                                                                                                                                                               |
| lk resizing mode               | 11 | **[Column Auto-Resizing](../FormObjects/properties_ResizingOptions.md#column-auto-resizing)** property<br/>Applies to: List box<br/>Possible values:<br/>lk manual (0) <br/> lk automatic (2)                                                                                                                                                                                                                                                                    |
| lk row height unit             | 17 | Unit of **[Row Height](../FormObjects/properties_CoordinatesAndSizing.md#row-height)** property <br/>Applies to: List box<br/>Possible values:<br/> lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                                                                                                                          |
| lk selection mode              | 10 | **[Selection Mode](../FormObjects/properties_ListBox.md#selection-mode)** property<br/>Applies to: List box<br/>Possible values: <br/> lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                                                                                                                      |
| lk single click edit           | 29 | **[Single-Click Edit](../FormObjects/properties_Entry.md#single-click-edit)** property<br/>Applies to: List box<br/>Possible values: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                             |
| lk sortable                    | 20 | **[Sortable](../FormObjects/properties_Action.md#sortable)** property<br/>Applies to: List box<br/>Possible values: <br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                                                                                              |
| lk truncate                    | 12 | **[Truncate with ellipsis](../FormObjects/properties_Display.md#truncate-with-ellipsis)** property<br/>Applies to: List box or column<br/>Possible values: <br/> lk without ellipsis (0) <br/> lk with ellipsis (1)                                                                                                                                                                                                                                              |
| lk ver scrollbar width         | 5  | 幅(ピクセル単位)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| lk current item expression     | 38 | **[カレントの項目](../FormObjects/properties_DataSource.md#カレントの項目)** プロパティ<br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                                                                                                                                                                       |
| lk current item pos expression | 39 | **[カレントの項目の位置](../FormObjects/properties_DataSource.md#カレントの項目の位置)** プロパティ<br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                                                                                                                                                                 |
| lk selected items expression   | 40 | **[選択された項目](../FormObjects/properties_DataSource.md#選択された項目)** プロパティ <br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                                                                                                                                                                      |

\* These properties only apply to list box columns; if you pass a list box as parameter with one of these properties, **LISTBOX Get property** returns -1, or an empty string, depending on the *property* passed.

通常、無効な結果を表すためには **LISTBOX Get property** は、数値型の値を持つプロパティに対しては-1 を、または空の文字列を返します。ただしこのときエラーは生成されません。 具体的には次の場合が該当します:

- 存在しない *property* を渡した場合
- *property* に受け渡した定数が指定のリストボックスおよびカラムにおいて利用できないプロパティである。例: lk font color expression を配列型リストボックスと一緒に指定した場合
- カラムを引数として渡したが指定した *property* の適用対象がリストボックスである、あるいは逆にリストボックスを引数として渡したが指定した *property* の適用対象がカラムである(上記の \* 印の注記参照)

また、複数のカラムからの値を同時に返すことはできません。例えば、"@" 記号を利用して複数の類似した名称を持つカラムを一括で指定しようとしても、 **LISTBOX Get property** は最初に条件に合致したカラムについてのみ、値を返します。そのため、この戻り値は信頼できるものではありません。

**Note:**

- 定数 lk display footer および lk display header はフォーム上のリストボックスエリアの実サイズを計算するのに便利です。

## 例題 1

"MyListbox"というリストボックスがあったとき、以下のステートメントを実行すると:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // 返された値は選択モードを表します
```

この場合、返される値は複数行が選択可能かどうかを表します。

## 例題 2

"MyListbox"というリストボックスがある場合、以下のステートメントを実行すると:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** は-1を返します。なぜならlk column resizable プロパティはカラムに適用される一方で、引数として渡されたのはリストボックスだからです。

## 参照

[LISTBOX SET GRID](listbox-set-grid.md)\
[LISTBOX SET PROPERTY](listbox-set-property.md)\
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 917                         |
| スレッドセーフ | &cross; |


