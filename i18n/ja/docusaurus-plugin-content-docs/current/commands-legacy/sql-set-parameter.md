---
id: sql-set-parameter
title: SQL SET PARAMETER
slug: /commands/sql-set-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET PARAMETER.Syntax-->**SQL SET PARAMETER** ( *object* ; *paramType* )<!-- END REF-->
<!--REF #_command_.SQL SET PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | 使用する4Dオブジェクト (変数、配列、フィールド) |
| paramType | Integer | &#8594;  | 引数タイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL SET PARAMETER.Summary-->**SQL SET PARAMETER**コマンドを使用すると、4D変数や配列、フィールドをSQLリクエストで使用することができます。<!-- END REF-->

**Note:** リクエストテキスト内で、<< と >>記号の間に4Dオブジェクト（変数、配列、フィールド）を直接挿入できます（例1を参照）。詳細については*SQLコマンドの概要*を参照してください。

\- *object*引数には、リクエストで使用する4Dのオブジェクト（変数、配列またはフィールド）を指定します。  
\- *paramType*引数には、パラメタのSQL型を渡します。値を渡すか*SQL*テーマにある次の定数のいずれかを使用することができます:

| 定数               | 型    | 値 | コメント                                                              |
| ---------------- | ---- | - | ----------------------------------------------------------------- |
| SQL param in     | 倍長整数 | 1 |                                                                   |
| SQL param in out | 倍長整数 | 2 | SQLストアードプロシージャーのコンテキストでのみ利用可能です (ストアードプロシージャー内で定義されるin-outパラメーター) |
| SQL param out    | 倍長整数 | 4 | SQLストアードプロシージャーのコンテキストでのみ利用可能です (ストアードプロシージャー内で定義されるoutパラメーター)    |

SQLリクエスト内におかれた*?*記号が4Dオブジェクトの値で置き換えられます（標準のシンタックス）。  
リクエストに複数の*?*記号が含まれる場合、**SQL SET PARAMETER**コマンドを複数回呼び出す必要があります。4Dオブジェクトの値は、コマンドの実行順に合わせてリクエスト内で順次割り当てられます。

**警告:** このコマンドはSQLリクエストに渡されるパラメーターを扱うために使用します。4DオブジェクトをSQLリクエストの結果に関連付けるためにSQL param outを使用することはできません。SQLリクエストの結果は例えば[SQL EXECUTE](sql-execute.md)コマンドの *boundObj* パラメーターを使用して取り出されます (*SQLコマンドの概要*参照)。**SQL SET PARAMETER**コマンドは主にリクエストに渡されるパラメーター (SQL param in) を設定することを意図しています。SQL param out と SQL param in out はパラメーターを返すかもしれないSQLストアードプロシージャーのコンテキストで使用されるために予約されています。

#### 例題 1 

この例は、SQLリクエスト内に4D変数を直接記述しています:

```4d
 var MyText : Text
 var MyLongint : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (<>, <>)"
 For(vCounter;1;10)
    MyText:="Text"+String(vCounter)
    MyLongint:=vCounter
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### 例題 2 

上記と同じ例題をSQL SET PARAMETERコマンドを使用して書き直しています:

```4d
 var MyText : Text
 var MyLongint : Integer
 
 SQL LOGIN("mysql";"root";"")
 SQLStmt:="insert into app_testTable (alpha_field, longint_field) VALUES (?,?)"
 For(vCounter;1;10)
    MyText:="Text"+String(vCounter)
    MyLongint:=vCounter
    SQL SET PARAMETER(MyText;SQL param in)
    SQL SET PARAMETER(MyLongint;SQL param in)
    SQL EXECUTE(SQLStmt)
    SQL CANCEL LOAD
 End for
 SQL LOGOUT
```

#### システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKに1が、そうでなければ0が設定されます。


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 823 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


