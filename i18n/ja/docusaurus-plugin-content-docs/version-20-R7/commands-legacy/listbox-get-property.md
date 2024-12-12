---
id: listbox-get-property
title: LISTBOX Get property
slug: /commands/listbox-get-property
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get property.Syntax-->**LISTBOX Get property** ( {* ;} *object* ; *property* ) : any<!-- END REF-->
<!--REF #_command_.LISTBOX Get property.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| property | Integer | &#8594;  | 値を取得したいプロパティ |
| 戻り値 | Integer, Text | &#8592; | 現在値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX Get property.Summary-->**LISTBOX Get property**コマンドは、引数*object*および *\** で指定されたリストボックスまたはカラムについて、*property* の値を返します。<!-- END REF-->

オプションの引数 *\** を渡すことにより、*object*引数がオブジェクト名（文字列）であることを示します。この引数を渡さない場合、*object*引数が変数であることを示します。この場合、文字列ではなく変数参照を指定します。オブジェクト名についての詳細は*オブジェクトプロパティ*を参照してください。

**注:** *object*および *\** で指定されたリストボックスまたはカラムが存在しない場合には、**LISTBOX Get property**コマンドはプロパティの種類により -1 (数値の場合) または空文字列 (文字列の場合) を返します。

引数 *property* には、取得しようとするプロパティを表す定数を渡します。この引数には値または*List Box*テーマの次の定数のいずれかを使用することができます:

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

**注:** \*印が付いているプロパティはリストボックスカラム専用のものです。このプロパティ群の定数をリストボックスとともに引数として受け渡すと、LISTBOX Get property は *property* に指定したプロパティの種類に応じて -1、あるいは空文字列を返します。

有効な値を取得できなかった場合、LISTBOX Get property は -1 または空文字列を返しますが、エラーは生成されません。具体的には次の場合が該当します:

* *property* に受け渡した定数が存在しない
* *property* に受け渡した定数が指定のリストボックスおよびカラムに提供されていないプロパティである  
例: lk font color expression を配列型リストボックスと一緒に指定した場合
* *property* に受け渡した定数が指定オブジェクトを対象としていない  
例: カラム専用の定数をリストボックスと一緒に指定したり、逆にリストボックス用の定数をカラムとともに指定したりした場合 (上述の\*印に関する注記参照)

戻り値は一つのカラムについてのみ返されます。例えば、"@" 記号を利用して複数の類似した名称を持つカラムを一括で指定しようとしても、LISTBOX Get property は最初に条件に合致したカラムについてのみ、値を返します。そのため、この戻り値は信頼できるものではありません。

**注:**

* 定数 lk display footer および lk display header はフォーム上のリストボックスエリアの実サイズを計算するのに便利です。
* 定数 \_o\_lk hor scrollbar positionおよび \_o\_lk ver scrollbar position を使用すると、**LISTBOX Get property**コマンドは、スクロールカーソルの起点からの相対位置を (つまり、ウィンドウの隠された部分のサイズを) ピクセル単位で返します。デフォルトの位置では、0となります。例えば、行の高さの情報と組み合わせることで、リストボックスに表示されたコンテンツを見つけることができます。ただし、これらの定数は廃止されており、より便利な [OBJECT GET SCROLL POSITION](object-get-scroll-position.md) コマンドに置き換えることができます。
* フッターが表示されている場合、ステートメント **LISTBOX Get property**(vLB;\_o\_lk footer height) は [LISTBOX Get footers height](listbox-get-footers-height.md) コマンドと同じ値を返します。しかし、フッターが表示されていない場合には、**LISTBOX Get property** は0を返し、[LISTBOX Get footers height](listbox-get-footers-height.md) はフッターの高さの理論値を返します。

#### 例題 1 

"MyListbox"というリストボックスがあったとき、以下のステートメントを実行すると:

```4d
 $Value:=LISTBOX Get property(*;"MyListbox";lk selection mode) // 返された値は選択モードを表示
```

この場合、返される値は複数行が選択可能かどうかを表します。

#### 例題 2 

"MyListbox"というリストボックスがある場合、以下のステートメントを実行すると:

```4d
 $resizable:=LISTBOX Get property(*;"MyListbox";lk column resizable)
```

**LISTBOX Get property** は-1を返します。なぜならlk column resizable プロパティはカラムに適用される一方で、引数として渡されたのはリストボックスだからです。

#### 参照 

[LISTBOX SET GRID](listbox-set-grid.md)  
[LISTBOX SET PROPERTY](listbox-set-property.md)  
[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  