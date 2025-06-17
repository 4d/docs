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

| 定数                             | 値  | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14 | **[ワードラップ](../FormObjects/properties_Display.md#wordwrap)** プロパティ<br/>適用対象: Column\*<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                     |
| lk auto row height             | 31 | 配列型リストボックスの **[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#automatic-row-height)** プロパティ<br/>適用対象: リストボックスあるいはカラム<br/>取りうる値:<br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                                           |
| lk background color expression | 22 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[背景色式](../FormObjects/properties_BackgroundAndBorder.md#background-color-expression)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                          |
| lk cell horizontal padding     | 36 | **[横方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#horizontal-padding)** プロパティ<br/> セル内の横方向パディング(ピクセル単位、左右のパディングで同じ値)<br/>敵意用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                                                   |
| lk cell vertical padding       | 37 | **[縦方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#vertical-padding)** プロパティ<br/> セルの縦方向パディング(ピクセル単位、上下のパディングで同じ値)<br/>適用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                                                       |
| lk column max width            | 26 | **[最大幅](../FormObjects/properties_CoordinatesAndSizing.md#maximum-width)** プロパティ<br/>適用先: カラム\*                                                                                                                                                                                                                                                                                                                         |
| lk column min width            | 25 | **[最小幅](../FormObjects/properties_CoordinatesAndSizing.md#minimum-width)** プロパティ<br/>適用対象: カラム\*                                                                                                                                                                                                                                                                                                                        |
| lk column resizable            | 15 | **[リサイズ可](../FormObjects/properties_ResizingOptions.md#resizable)** プロパティ<br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                                                |
| lk detail form name            | 19 | セレクション型リストボックスの **[詳細フォーム名](../FormObjects/properties_ListBox.md#detail-form-name)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                                                            |
| lk display footer              | 8  | **[フッターを表示](../FormObjects/properties_Footers.md#display-footers)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                                                     |
| lk display header              | 0  | **[ヘッダーを表示](../FormObjects/properties_Headers.md#display-headers)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                                                     |
| lk display type                | 21 | 数値カラムに対しての **[表示タイプ](../FormObjects/properties_Display.md#display-type)** プロパティ<br/>適用対象: カラム\*<br/>取り得る値:\*\*<br/>\*\*lk numeric format (0): 値を数値フォーマットで表示<0/>lk three states checkbox (1): 値を3ステートチェックボックスとして表示                                                                                        |
| lk double click on row         | 18 | セレクション型リストボックスの **[行をダブルクリック](../FormObjects/properties_ListBox.md#double-click-on-row)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk do nothing (0): どの自動アクションもトリガーしないlk edit record (1): 対応するレコードを読み書き可能モードで表示lk display record (2): 対応するレコードを読み込みのみモードで表示                             |
| lk extra rows                  | 13 | **[余分な空白行を隠す](../FormObjects/properties_BackgroundAndBorder.md#hide-extra-blank-rows)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk display (0) lk hide (1)                                                                                                                                                                                                 |
| lk font color expression       | 23 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[フォントカラー式](../FormObjects/properties_Text.md#font-color-expression)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                                           |
| lk font style expression       | 24 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[スタイル式](../FormObjects/properties_Text.md#style-expression)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                                                   |
| lk hide selection highlight    | 16 | **[Hide selection highlight](../FormObjects/properties_Appearance.md#hide-selection-highlight)** property<br/>Applies to: List box<br/>Possible values:\*\*<br/>\*\*lk no (0) <br/>lk yes (1)                                                                                                                                                                     |
| lk highlight set               | 27 | **[Highlight Set](../FormObjects/properties_ListBox.md#highlight-set)** property for selection type list box<br/>Applies to: List box                                                                                                                                                                                                                                                                                   |
| lk hor scrollbar height        | 3  | Height in pixels                                                                                                                                                                                                                                                                                                                                                                                                                        |
| lk meta expression             | 34 | **[Meta Info Expression](../FormObjects/properties_Text.md#meta-info-expression)** property for collection or entity selection type list boxes<br/>Applies to: List box                                                                                                                                                                                                                                                 |
| lk movable rows                | 35 | **[Movable Rows](../FormObjects/properties_Action.md#movable-rows)** property for array type list box <br/>Applies to: List box (excluding hierarchical mode) <br/>Possible values:<br/> lk no (0): Rows cannot be moved at runtime <br/>lk yes (1): Rows can be moved at runtime (default) |
| lk multi style                 | 30 | **[Multi-style](../FormObjects/properties_Text.md#multi-style)** property <br/>Applies to: Column\*<br/>Possible values:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                            |
| lk named selection             | 28 | **[Named Selection](../FormObjects/properties_DataSource.md#selection-name)** property for selection type list box<br/>Applies to: List box                                                                                                                                                                                                                                                                             |
| lk resizing mode               | 11 | **[Column Auto-Resizing](../FormObjects/properties_ResizingOptions.md#column-auto-resizing)** property<br/>Applies to: List box<br/>Possible values:<br/>lk manual (0) lk automatic (2)                                                                                                                                                                           |
| lk row height unit             | 17 | Unit of **[Row Height](../FormObjects/properties_CoordinatesAndSizing.md#row-height)** property <br/>Applies to: List box<br/>Possible values:\*\*<br/>\*\*lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                    |
| lk selection mode              | 10 | **[Selection Mode](../FormObjects/properties_ListBox.md#selection-mode)** property<br/>Applies to: List box<br/>Possible values: \*\*<br/>\*\*lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                |
| lk single click edit           | 29 | **[Single-Click Edit](../FormObjects/properties_Entry.md#single-click-edit)** property<br/>Applies to: List box<br/>Possible values:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                |
| lk sortable                    | 20 | **[Sortable](../FormObjects/properties_Action.md#sortable)** property<br/>Applies to: List box<br/>Possible values:\*\*<br/>\*\*lk no (0) <br/>lk yes (1)                                                                                                                                                                                                         |
| lk truncate                    | 12 | **[Truncate with ellipsis](../FormObjects/properties_Display.md#truncate-with-ellipsis)** property<br/>Applies to: List box or column<br/>Possible values:\*\*<br/>\*\*lk without ellipsis (0) lk with ellipsis (1)                                                                                                                                               |
| lk ver scrollbar width         | 5  | Width in pixels                                                                                                                                                                                                                                                                                                                                                                                                                         |
| lk current item expression     | 38 | **[Current item](../FormObjects/properties_DataSource.md#current-item)** property <br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                                          |
| lk current item pos expression | 39 | **[Current item position](../FormObjects/properties_DataSource.md#current-item-position)** property <br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                        |
| lk selected items expression   | 40 | **[Selected items](../FormObjects/properties_DataSource.md#selected-items)** property <br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                                      |

\*These properties only apply to list box columns; if you pass a list box as parameter with one of these properties, **LISTBOX Get property** returns -1, or an empty string, depending on the *property* passed.

In general, to signal an invalid result **LISTBOX Get property** returns -1 when retrieving properties that have numeric values, or an empty string; however, no errors are generated. More specifically, this occurs in the following cases:

- If you pass a *property* that does not exist
- If you pass a *property* that is not available for the specified list box or column, e.g. you pass the lk font color expression property with an array type list box
- If you pass a column as parameter with a *property* that is applied to a list box, and vice versa if you pass a list box as parameter with a *property* that is applied to a column (see \* above)

In addition, it is not possible to return values from more than one column at a time; if you attempt to use the "@" symbol as part of a column name to indicate multiple columns with similar names, **LISTBOX Get property** returns the first matching value it finds; as a result, the value returned has no true significance.

**Note:**

- The lk display footer and lk display header constants are useful for calculating the actual size of a list box area in a form.

## 例題 1

Given a listbox "MyListbox", if you execute the following statement:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // value returned indicates selection mode
```

In this case, the result returned indicates whether multiple rows can be selected.

## 例題 2

Given a list box "MyListbox", if you execute the following statement:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** returns -1 because the lk column resizable property applies to columns and a list box was passed as parameter.

## 参照

[LISTBOX SET GRID](listbox-set-grid.md)\
[LISTBOX SET PROPERTY](listbox-set-property.md)\
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 917                         |
| スレッドセーフ | &cross; |


