---
id: begin-sql
title: Begin SQL
slug: /commands/begin-sql
displayed_sidebar: docs
---

<!--REF #_command_.Begin SQL.Syntax-->**Begin SQL**<!-- END REF-->
<!--REF #_command_.Begin SQL.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Begin SQL.Summary-->**Begin SQL**はメソッドエディタで使用するキーワードで、プロセスのカレントデータソース (4Dの統合SQLエンジン、または[SQL LOGIN](../commands/sql-login)コマンドで特定されたソース) により解釈されるべき一連のコマンドの始まりを宣言します。<!-- END REF--> 

**Begin SQL**で開始された一連のSQLコマンドは、[End SQL](../commands/end-sql)キーワードで閉じなければなりません。

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

## 参照 

[End SQL](../commands/end-sql)  
[SQL Get current data source](../commands/sql-get-current-data-source)  
[SQL LOGIN](../commands/sql-login)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 948 |
| スレッドセーフである | yes |


