---
id: get-last-table-number
title: Get last table number
slug: /commands/get-last-table-number
displayed_sidebar: docs
---

<!--REF #_command_.Get last table number.Syntax-->**Get last table number**  -> 戻り値<!-- END REF-->
<!--REF #_command_.Get last table number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &larr; | データベースの最大テーブル番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get last table number.Summary-->Get last table numberは、データベース中のテーブルの数を返します。<!-- END REF-->テーブルは作成された順番に番号が付けられます。テーブルがデータベースから何も削除されていない場合、コマンドはデータベースにあるテーブルの数を返します。データベースのテーブル番号でループを繰り返す場合は、[Is table number valid](is-table-number-valid.md "Is table number valid")コマンドを使用してテーブルが削除されているかを確認します。 

#### 例題 

以下の例は、配列*asTables*の配列要素を構築します。この配列はフォーム上のドロップダウンリスト（またはタブコントロール、スクロールエリアなど）に割り当てられ、データベース内のテーブルのリストを表示するために使用されます。

```4d
 ARRAY TEXT(asTables;Get last table number)
 If(Get last table number>0) //データベースにテーブルがある場合
    For($vlTables;Size of array(asTables);1;-1)
       If(Is table number valid($vlTables))
          asTables{$vlTables}:=Table name($vlTables)
       Else
          DELETE FROM ARRAY(asTables;$vlTables)
       End if
    End for
 End if
```

#### 参照 

[Get last field number](get-last-field-number.md)  
[Is table number valid](is-table-number-valid.md)  
[Table name](table-name.md)  