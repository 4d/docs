---
id: table-name
title: Table name
slug: /commands/table-name
displayed_sidebar: docs
---

<!--REF #_command_.Table name.Syntax-->**Table name** ( tableNum | tablePtr ) : Text<!-- END REF-->
<!--REF #_command_.Table name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| tableNum &#124; tablePtr | 倍長整数, ポインター | &#8594;  | テーブル番号、またはテーブルポインタ |
| 戻り値 | Text | &#8592; | テーブルの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Table name.Summary-->Table nameコマンドは、*tableNum*または*tablePtr*で指定したテーブルの名前を返します。<!-- END REF-->

#### 例題 

以下の例は、あるテーブルのレコードを表示します。テーブルへの参照は、テーブルに対するポインタとして渡されます。Table nameコマンドは、ウインドウのタイトルバーにテーブルの名前を表示するために使用されます。

```4d
  // SHOW CURRENT SELECTION プロジェクトメソッド
  // SHOW CURRENT SELECTION ( Pointer )
  // SHOW CURRENT SELECTION (->[Table])
 
 SET WINDOW TITLE(Table name($1)+" のレコード") //ウィンドウタイトル設定
 DISPLAY SELECTION($1->) // セレクション表示
```

#### 参照 

[Field name](field-name.md)  
[Last table number](last-table-number.md)  
[SET FIELD TITLES](set-field-titles.md)  
[SET TABLE TITLES](set-table-titles.md)  
[Table](table.md)  