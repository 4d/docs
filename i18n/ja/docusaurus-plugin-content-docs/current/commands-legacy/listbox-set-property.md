---
id: listbox-set-property
title: LISTBOX SET PROPERTY
slug: /commands/listbox-set-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET PROPERTY.Syntax-->**LISTBOX SET PROPERTY** ( {* ;} *object* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| property | Integer | &#8594;  | リストボックスまたはカラムのプロパティ |
| value | Integer, Text | &#8594;  | プロパティの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET PROPERTY.Summary-->**LISTBOX SET PROPERTY**コマンドは、引数*object*および *\** で指定されたリストボックスまたはカラムについて、*property* に *value* の値を設定します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object* 引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object* 引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。

**注:** *object* および *\** で指定されたリストボックスまたはカラムが存在しない場合には、**LISTBOX SET PROPERTY** コマンドはなにもせず、エラーも生成されません。

*property* および *value* には、設定したいプロパティおよびその値を指定します。*List Box* テーマの次の定数を使用することができます:

| 定数                             | 値  | コメント                                                                                                                                                                                                                      |
| ------------------------------ | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk allow wordwrap              | 14 | **ワードラップ**プロパティ <br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0)lk yes (1)                                                                                                                               |
| lk auto row height             | 31 | 配列型リストボックス用の**自動行高**プロパティ<br/>適用可能: リストボックスあるいはカラム<br/>取りうる値: lk no (0) lk yes (1)                                                                                                                        |
| lk background color expression | 22 | レコードセレクション型、コレクションあるいはエンティティセレクション型リストボックスの**背景色式** プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                |
| lk cell horizontal padding     | 36 | セルの水平方向パディング(ピクセル単位、左パディングと右パディングとも同値)<br/>適用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                            |
| lk cell vertical padding       | 37 | セルの垂直方向パディング(ピクセル単位、上パディングと下パディングとも同値)<br/>適用対象: リストボックス、カラム、ヘッダー、フッター                                                                                                                                            |
| lk column max width            | 26 | **最大幅**プロパティ<br/>適用先: カラム\*                                                                                                                                                                                       |
| lk column min width            | 25 | **最小幅**プロパティ<br/>適用対象: カラム\*                                                                                                                                                                                      |
| lk column resizable            | 15 | **リサイズ可**プロパティ <br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0)lk yes (1)                                                                                                                                |
| lk detail form name            | 19 | セレクション型リストボックスの**詳細フォーム名** <br/>適用対象: リストボックス                                                                                                                                                                     |
| lk display footer              | 8  | 0 = 非表示<br/>1 = 表示                                                                                                                                                                                                |
| lk display header              | 0  | 0=非表示, <br/>1=表示                                                                                                                                                                                                  |
| lk display type                | 21 | 数値カラムに対しての**表示タイプ**プロパティ <br/>適用対象: カラム\*<br/>取り得る値:**<br/>**lk numeric format (0): 値を数値フォーマットで表示lk three states checkbox (1): 値を3ステートチェックボックスとして表示                                               |
| lk double click on row         | 18 | セレクション型リストボックスの**行をダブルクリック**プロパティ <br/>適用対象: リストボックス<br/>取り得る値:**<br/>**lk do nothing (0): どの自動アクションもトリガーしないlk edit record (1): 対応するレコードを読み書き可能モードで表示lk display record (2): 対応するレコードを読み込みのみモードで表示 |
| lk extra rows                  | 13 | **余分な空白行を隠す**プロパティ<br/>適用対象: リストボックス<br/>取り得る値:**<br/>**lk display (0)lk hide (1)                                                                                                                 |
| lk font color expression       | 23 | レコードセレクション型、コレクションあるいはエンティティセレクション型リストボックスの**フォントカラー式**プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                             |
| lk font style expression       | 24 | レコードセレクション型、コレクションあるいはエンティティセレクション型リストボックスの**スタイル式**プロパティ<br/>適用対象: リストボックスあるいはカラム                                                                                                                                |
| lk hide selection highlight    | 16 | **セレクションハイライトを非表示**プロパティ <br/>適用対象: リストボックス<br/>取り得る値:**<br/>**lk no (0)lk yes (1)                                                                                                                |
| lk highlight set               | 27 | セレクション型リストボックスの**セットをハイライト**プロパティ<br/>適用対象: リストボックス                                                                                                                                                               |
| lk hor scrollbar height        | 3  | 高さ (ピクセル)                                                                                                                                                                                                                 |
| lk meta expression             | 34 | コレクション/エンティティセレクション型リストボックスの**メタ情報式**プロパティ 適用対象: リストボックス                                                                                                                                                                  |
| lk movable rows                | 35 | 配列型リストボックスの**移動可能行**プロパティ<br/>適用可能: リストボックス(ただし階層モードは除く)<br/>取りうる値: lk no (0): 行はランタイムで移動できない lk yes (1): 行はランタイムで移動可能(デフォルト)                                                                             |
| lk multi style                 | 30 | **マルチスタイル**のプロパティ <br/>適用対象: カラム\*<br/>取り得る値:<br/>lk no (0)lk yes (1)                                                                                                                             |
| lk named selection             | 28 | セレクション型リストボックスの**命名セレクション**プロパティ<br/>適用対象: リストボックス                                                                                                                                                                |
| lk resizing mode               | 11 | **カラムの自動リサイズ**プロパティ<br/>適用対象: リストボックス<br/>取り得る値:<br/>lk manual (0)lk automatic (2)                                                                                                                |
| lk row height unit             | 17 | **行の高さ**プロパティの単位<br/>適用対象: リストボックス<br/>取り得る値:**<br/>**lk lines (1)<br/>lk pixels (0)<br/>                                                                                         |
| lk selection mode              | 10 | **選択モード**プロパティ<br/>適用対象: リストボックス<br/>取り得る値:**<br/>**lk none (0)<br/>lk single (1)<br/>lk multiple (2)                                                                             |
| lk single click edit           | 29 | **シングルクリック編集**プロパティ<br/>適応対象: リストボックス<br/>取り得る値:<br/>lk no (0)lk yes (1)                                                                                                                          |
| lk sortable                    | 20 | **ソート可**プロパティ<br/>適応対象: リストボックス<br/>取り得る値:**<br/>**lk no (0)lk yes (1)                                                                                                                            |
| lk truncate                    | 12 | **エリプシスで省略**プロパティ<br/>適応対象: リストボックスあるいはカラム<br/>取り得る値:**<br/>**lk without ellipsis (0)lk with ellipsis (1)                                                                                         |
| lk ver scrollbar width         | 5  | 幅 (ピクセル)                                                                                                                                                                                                                  |

**注:** \*印が付いているプロパティはリストボックスカラム専用のものです。このプロパティ群の定数をリストボックスとともに引数として受け渡すと、LISTBOX SET PROPERTY はすべてのカラムの *property* に *value* の値を設定します。

**注:** *property* に存在しない定数または、指定のリストボックスおよびカラムに提供されていないプロパティの定数をを受け渡した場合 (例: lk font color expression を配列型リストボックスと一緒に指定した場合) には、**LISTBOX SET PROPERTY** コマンドはなにもせず、エラーも生成されません。

#### 例題 1 

"MyLisbox" というリストボックスのカラムをすべてリサイズ可能に設定します:

```4d
 LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes) // "MyListbox" の全カラムがリサイズ可能に設定されます
```

#### 例題 2 

"ProductNumber" というカラムの幅の最大値を設定します:

```4d
 LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200) // カラムの幅の最大値が 200 に設定されます
```

#### 参照 

  
*List Box*  
[LISTBOX Get property](listbox-get-property.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1440 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


