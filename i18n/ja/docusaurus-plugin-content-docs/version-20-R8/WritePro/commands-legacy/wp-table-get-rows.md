---
id: wp-table-get-rows
title: WP Table get rows
slug: /WritePro/commands/wp-table-get-rows
displayed_sidebar: docs
---

<!--REF #_command_.WP Table get rows.Syntax-->**WP Table get rows** ( *targetObj* ) | ( *tableRef* ; startRow | wk header rows {; *numRows*} )  -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Table get rows.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | レンジまたは要素または4D Write Pro ドキュメント |
| tableRef | Object | &#8594;  | テーブル参照オブジェクト |
| startRow &#124; wk header rows | 倍長整数, 文字 | &#8594;  | 最初の行の位置 |
| numRows | Integer | &#8594;  | 取得したい行数 |
| 戻り値 | Object | &#8592; | 選択された行を含む新しいテーブルレンジ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Table get rows.Summary-->**WP Table get rows** コマンドは、*targetObj* または(*startRow* および *numRows* 引数で定義された)*tableRef* で指定した表から、行のセレクションを格納した新しいレンジオブジェクトを返します。<!-- END REF-->

以下のいづれかを渡します:

* *targetObj* 引数の場合、渡せるもの:  
   * レンジ  
   * 要素(行/段落/本文/ヘッダー/フッター/インラインピクチャー/セクション/サブセクション)  
   * 4D Write Pro ドキュメント

*targetObj* 引数が、表、または行のセレクションを取得可能なテキストレンジと交差しない場合、コマンドはNull を返します。

**または**

* *tableRef* : 行のセレクションを取得したい表の参照
* *startRow* : 返す表の最初の行を指定
* (オプション) *numRows* \- 返す行の数を指定。*numRows* 引数が省略された場合、*startRow* 引数で指定した行1つだけが返されます。  
    
*startRow* 引数と *numRows* 引数を足した数が*tableRef* 引数で指定した表にある行の数より多い場合、または*startRow* 引数そのものが*tableRef* 引数で指定した表にある行の数より多い場合、返されるレンジには取得可能な行が全て格納されます。

**または**

* *tableRef* : ヘッダー行を取得したい表の参照
* *wk header rows* : ヘッダー行を取得したいことを指定  
    
この場合、コマンドは繰り返されるヘッダー行を格納した行レンジを返します(この場合は渡されていたとしても*numRows* 変数は効力を持ちません)。ただし定義されたヘッダー行がない場合にはコマンドはNull を返します。

#### 例題 1 

テーブルの最初の2行に対して特定の背景色を設定し、3行目の境界線を変更したい場合を考えます:

```4d
 var $wpTable;$wpRange;$wpRow1;$wpRow2;$wpRow3;$wpRow4;$wpRow5;$rows;$rows2 : Object
 $wpRange:=WP Text range(WParea;wk start text;wk end text)
 
 $wpTable:=WP Insert table($wpRange;wk append)
 $wpRow1:=WP Table append row($wpTable;"Paul";"Smith";25)
 $wpRow2:=WP Table append row($wpTable;"John";"Richmond";40)
 $wpRow3:=WP Table append row($wpTable;"Mary";"Trenton";18)
 $wpRow4:=WP Table append row($wpTable;"Christopher";"Lee";53)
 $wpRow5:=WP Table append row($wpTable;"Henry";"Cartier";42)
 
 $rows:=WP Table get rows($wpTable;1;2)
 WP SET ATTRIBUTES($rows;wk background color;0x00E0F0FF)
 $rows2:=WP Table get rows($wpTable;3)
 WP SET ATTRIBUTES($rows2;wk border style;wk solid)
 WP SET ATTRIBUTES($rows2;wk border width;4)
```

![](../../assets/en/WritePro/commands/pict3307142.en.png)

#### 例題 2 

10行目の行から最後の行までのレンジを取得したい場合を考えます:

```4d
 WP Table get rows(tableRef;10;MAXLONG)
```

#### 例題 3 

ユーザーが選択した行を取得した場合を考えます:

```4d
 var $userSelection;$rows : Object
 
 $userSelection:=WP Selection range(myWPArea)
 
 $rows:=WP Table get rows($userSelection)
```

#### 例題 4 

以下のサンプルコードは、以下の操作を行います:

1. WParea 内の最初の表の、最初の2行を取得します。
2. その2行をヘッダー行として設定します。
3. その2行のテキストカラーを白に、背景色を黒に設定します。

```4d
 var $table;$range : Object
 
 $table:=WP Get elements(WParea;wk type table)[0]  // WParea 内の最初の表を選択
 
 WP SET ATTRIBUTES($table;wk header row count;2) // 最初の2行をヘッダー行として設定
 
 $range:=WP Table get rows($table;wk header rows) // 上記で定義されたヘッダー行を取得
 
 WP SET ATTRIBUTES($range;wk text color;"white";wk background color;"#000") // ヘッダー行に対してテキストカラーと背景色を設定
 
```

#### 参照 

[WP Insert table](wp-insert-table.md)  
[WP Table append row](../commands/wp-table-append-row.md)  
[WP Table get cells](wp-table-get-cells.md)  
[WP Table get columns](wp-table-get-columns.md)  