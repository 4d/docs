---
id: listbox-set-property
title: LISTBOX SET PROPERTY
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *object* ; *property* ; *value* )<!-- END REF-->

<!--REF #_command_.LISTBOX SET PROPERTY.Params-->

| 引数       | 型             |                             | 説明                                                                                             |
| -------- | ------------- | --------------------------- | ---------------------------------------------------------------------------------------------- |
| \*       | 演算子           | &#8594; | 指定時、object はオブジェクト名(文字列)。 If omitted, object is a variable. |
| object   | any           | &#8594; | オブジェクト名 (\* 指定時) または変数 (\* 省略時)                          |
| property | Integer       | &#8594; | List box or column property                                                                    |
| value    | Integer, Text | &#8594; | Value of property                                                                              |

<!-- END REF-->

## 説明

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->The **LISTBOX SET PROPERTY** command sets the *value* for the *property* of the list box or list box column specified using the *object* and *\** parameters.<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名(文字列)であることを示します。 この引数を渡さない場合、*object* 引数が変数であることを示します。 この場合、文字列ではなく変数参照を指定します。

**Note:** If the list box or list box column specified using the *object* and *\** parameters does not exist, the command does nothing and no error is triggered.

In the *property* and *value* parameters, you indicate, respectively, the property to set and its new value. You can use the following constants found in the “*List Box*” theme:

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
| lk current item expression     | 38 | **[Current item](../FormObjects/properties_DataSource.md#current-item)** property<br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                                           |
| lk current item pos expression | 39 | **[Current item position](../FormObjects/properties_DataSource.md#current-item-position)** property<br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                         |
| lk selected items expression   | 40 | **[Selected items](../FormObjects/properties_DataSource.md#selected-items)** property<br/>Applies to: List box (Collection / Entity selection)                                                                                                                                                                                                                                                       |

\*These properties can only be applied to list box columns; however, if you pass a list box as parameter, **LISTBOX SET PROPERTY** applies the *property* to each column of the list box.

**Note:** If you pass a *property* that does not exist, or that is not available for the specified list box or column, for example lk font style expression in the case of an array type list box, the command does nothing and no error is triggered.

## 例題 1

You want to make all columns of the "MyListbox" list box resizable:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) //All columns of the "MyListbox" list box are set as resizable
```

## 例題 2

You want to set a maximum width for the column whose name is "ProductNumber":

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) //This column will have a maximum width of 200
```

## 参照

*List Box*\
[LISTBOX Get property](listbox-get-property.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1440                        |
| スレッドセーフ | &cross; |


