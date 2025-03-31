---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Begin SQL.Summary-->**Begin SQL**はメソッドエディタで使用するキーワードで、プロセスのカレントデータソース (4Dの統合SQLエンジン、または[SQL LOGIN](sql-login.md)コマンドで特定されたソース) により解釈されるべき一連のコマンドの始まりを宣言します。<!-- END REF--> 

**Begin SQL**で開始された一連のSQLコマンドは、[End SQL](end-sql.md)キーワードで閉じなければなりません。

これらのキーワードは以下のように動作します:

* 同じメソッドに、一つ以上の**Begin SQL/End SQL**タグのブロックを置くことができ、すべてSQLコードから成るメソッドや4DコードとSQLコードを混合させたメソッドも作成することができます。
* 同じ行に幾つかのSQLステートメントを書き込み、それらのSQLステートメントをセミコロン ";" で区切ることもできます。例えば、以下のように書きこむことができます。

```4d
 Begin SQL
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)
 End SQL
```
  
  
または  
  
```4d
 Begin SQL
    INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Henry’,40);INSERT INTO SALESREPS (NAME, AGE) VALUES (‘Bill’,35)
 End SQL
```

4Dの*デバッガ*は行ごとにSQL命令行を評価します。一行以上使用した方が好ましい場合もありますのでご注意下さい。

#### 参照 

[End SQL](end-sql.md)  
[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 948 |
| スレッドセーフである | &check; |


