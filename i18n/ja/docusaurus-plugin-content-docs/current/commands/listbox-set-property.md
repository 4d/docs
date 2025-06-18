---
id: listbox-set-property
title: LISTBOX SET PROPERTY
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *object* ; *property* ; *value* )<!-- END REF-->

<!--REF #_command_.LISTBOX SET PROPERTY.Params-->

| 引数       | 型             |                             | 説明                                                                    |
| -------- | ------------- | --------------------------- | --------------------------------------------------------------------- |
| \*       | 演算子           | &#8594; | 指定時、object はオブジェクト名(文字列)。 省略時、object は変数           |
| object   | any           | &#8594; | オブジェクト名 (\* 指定時) または変数 (\* 省略時) |
| property | Integer       | &#8594; | リストボックスまたはカラムのプロパティ                                                   |
| value    | Integer, Text | &#8594; | プロパティの値                                                               |

<!-- END REF-->

## 説明

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->**LISTBOX SET PROPERTY** コマンドは、*object* および *\** 引数を使用して指定したリストボックスまたはリストボックスカラムの、*property* 引数で指定したプロパティの値を *value* の値で設定します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名(文字列)であることを示します。 この引数を渡さない場合、*object* 引数が変数であることを示します。 この場合、文字列ではなく変数参照を指定します。

**注意:** *object* および *\** で指定されたリストボックスまたはカラムが存在しない場合には、このコマンドは何もせず、エラーも生成されません。

*property* および *value* には、設定したいプロパティおよびその新しい値を指定します。 “*List Box*” テーマの次の定数を使用することができます:

| 定数                             | 値  | 説明                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14 | **[ワードラップ](../FormObjects/properties_Display.md#ワードラップ)** プロパティ<br/>適用対象: Column\*<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                 |
| lk auto row height             | 31 | 配列型リストボックスの **[自動行高](../FormObjects/properties_CoordinatesAndSizing.md#自動行高)** プロパティ<br/>適用対象: リストボックスあるいはカラム<br/>取りうる値:<br/> lk no (0) <br/>lk yes (1)                                                                                                                                                                     |
| lk background color expression | 22 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[背景色式](../FormObjects/properties_BackgroundAndBorder.md#背景色式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                           |
| lk cell horizontal padding     | 36 | **[横方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#横方向パディング)** プロパティ<br/> セル内の横方向パディング(ピクセル単位、左右のパディングで同じ値)<br/>敵意用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                       |
| lk cell vertical padding       | 37 | **[縦方向パディング](../FormObjects/properties_CoordinatesAndSizing.md#縦方向パディング)** プロパティ<br/> セルの縦方向パディング(ピクセル単位、上下のパディングで同じ値)<br/>適用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                                                                                         |
| lk column max width            | 26 | **[最大幅](../FormObjects/properties_CoordinatesAndSizing.md#最大幅)** プロパティ<br/>適用先: カラム\*                                                                                                                                                                                                                                                                                             |
| lk column min width            | 25 | **[最小幅](../FormObjects/properties_CoordinatesAndSizing.md#最小幅)** プロパティ<br/>適用対象: カラム\*                                                                                                                                                                                                                                                                                            |
| lk column resizable            | 15 | **[リサイズ可](../FormObjects/properties_ResizingOptions.md#サイズ変更可)** プロパティ<br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                             |
| lk detail form name            | 19 | セレクション型リストボックスの **[詳細フォーム名](../FormObjects/properties_ListBox.md#詳細フォーム名)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                               |
| lk display footer              | 8  | **[フッターを表示](../FormObjects/properties_Footers.md#フッターを表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                       |
| lk display header              | 0  | **[ヘッダーを表示](../FormObjects/properties_Headers.md#ヘッダーを表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0): 非表示 <br/>lk yes (1): 表示                                                                                                                                                       |
| lk display type                | 21 | 数値カラムに対しての **[表示タイプ](../FormObjects/properties_Display.md#表示タイプ)** プロパティ<br/>適用対象: カラム\*<br/>取り得る値:\*\*<br/>\*\*lk numeric format (0): 値を数値フォーマットで表示<0/>lk three states checkbox (1): 値を3ステートチェックボックスとして表示                                                         |
| lk double click on row         | 18 | セレクション型リストボックスの **[行をダブルクリック](../FormObjects/properties_ListBox.md#行をダブルクリック)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk do nothing (0): どの自動アクションもトリガーしないlk edit record (1): 対応するレコードを読み書き可能モードで表示lk display record (2): 対応するレコードを読み込みのみモードで表示 |
| lk extra rows                  | 13 | **[余分な空白行を隠す](../FormObjects/properties_BackgroundAndBorder.md#追加の空白の行を非表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk display (0) lk hide (1)                                                                                                                                                                     |
| lk font color expression       | 23 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[フォントカラー式](../FormObjects/properties_Text.md#フォントカラー式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                  |
| lk font style expression       | 24 | セレクション型、コレクションまたはエンティティセレクション型リストボックスの **[スタイル式](../FormObjects/properties_Text.md#スタイル式)** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                                                                                                                                        |
| lk hide selection highlight    | 16 | **[セレクションハイライトを非表示](../FormObjects/properties_Appearance.md#セレクションハイライトを非表示)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk no (0) <br/>lk yes (1)                                                                                                                                                                     |
| lk highlight set               | 27 | セレクション型リストボックスの **[セットをハイライト](../FormObjects/properties_ListBox.md#ハイライトセット)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                            |
| lk hor scrollbar height        | 3  | 高さ(ピクセル単位)                                                                                                                                                                                                                                                                                                                                                                     |
| lk meta expression             | 34 | コレクションまたはエンティティセレクション型リストボックスの **[メタ情報式](../FormObjects/properties_Text.md#メタ情報式)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                       |
| lk movable rows                | 35 | 配列型リストボックスの **[行の移動可](../FormObjects/properties_Action.md#行の移動可)** プロパティ<br/>適用対象: リストボックス(ただし階層モードを除く)<br/>取り得る値:<br/> lk no (0): 行はランタイムに移動させられない<br/>lk yes (1): 行はランタイムに移動させられる(デフォルト)                                                            |
| lk multi style                 | 30 | **[マルチスタイル](../FormObjects/properties_Text.md#マルチスタイル)** のプロパティ <br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                                   |
| lk named selection             | 28 | セレクション型リストボックスの **[命名セレクション](../FormObjects/properties_DataSource.md#命名セレクション)** プロパティ<br/>適用対象: リストボックス                                                                                                                                                                                                                                                                          |
| lk resizing mode               | 11 | **[カラムの自動リサイズ](../FormObjects/properties_ResizingOptions.md#カラム自動リサイズ)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk manual (0) lk automatic (2)                                                                                                                                                                              |
| lk row height unit             | 17 | **[行の高さ](../FormObjects/properties_CoordinatesAndSizing.md#行の高さ)** プロパティの単位<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk lines (1)<br/>lk pixels (0)<br/>                                                                                                                                                                    |
| lk selection mode              | 10 | **[選択モード](../FormObjects/properties_ListBox.md#選択モード)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値: \*\*<br/>\*\*lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                                                                                                |
| lk single click edit           | 29 | **[シングルクリック編集](../FormObjects/properties_Entry.md#シングルクリック編集)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk no (0) <br/>lk yes (1)                                                                                                                                                                                            |
| lk sortable                    | 20 | **[ソート可](../FormObjects/properties_Action.md#ソート可)** プロパティ<br/>適用対象: リストボックス<br/>取り得る値:\*\*<br/>\*\*lk no (0) <br/>lk yes (1)                                                                                                                                                                                               |
| lk truncate                    | 12 | **[エリプシスで省略](../FormObjects/properties_Display.md#エリプシスを使用して省略)** プロパティ<br/>適用対象: リストボックスあるいはカラム<br/>取り得る値:\*\*<br/>\*\*lk without ellipsis (0) lk with ellipsis (1)                                                                                                                                                        |
| lk ver scrollbar width         | 5  | 幅(ピクセル単位)                                                                                                                                                                                                                                                                                                                                                                      |
| lk current item expression     | 38 | **[カレントの項目](../FormObjects/properties_DataSource.md#カレントの項目)** プロパティ<br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                                  |
| lk current item pos expression | 39 | **[カレントの項目の位置](../FormObjects/properties_DataSource.md#カレントの項目の位置)** プロパティ<br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                            |
| lk selected items expression   | 40 | **[選択された項目](../FormObjects/properties_DataSource.md#選択された項目)** プロパティ <br/>適用対象: リストボックス(コレクション / エンティティセレクション)                                                                                                                                                                                                                                                 |

\*印が付いているプロパティはリストボックスカラム専用のものですが、このプロパティ群の定数に対してリストボックスを引数として受け渡すと、 **LISTBOX SET PROPERTY** は各カラムの *property* に対して値を適用します。

**注意:** *property* に存在しない定数または、指定のリストボックスおよびカラムに提供されていないプロパティの定数をを受け渡した場合、例えば、lk font color expression を配列型リストボックスと一緒に指定したような場合には、コマンドは何もせず、エラーも生成されません。

## 例題 1

"MyLisbox" というリストボックスのカラムをすべてリサイズ可能に設定します:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) // "MyListbox" の全カラムがリサイズ可能に設定されます
```

## 例題 2

"ProductNumber" というカラムの幅の最大値を設定します:

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) // カラムの幅の最大値が 200 に設定されます
```

## 参照

*List Box*\
[LISTBOX Get property](listbox-get-property.md)

## プロパティ

|         |                             |
| ------- | --------------------------- |
| コマンド番号  | 1440                        |
| スレッドセーフ | &cross; |


