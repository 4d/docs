---
id: sql-get-data-source-list
title: SQL GET DATA SOURCE LIST
slug: /commands/sql-get-data-source-list
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET DATA SOURCE LIST.Syntax-->**SQL GET DATA SOURCE LIST** ( *sourceType* ; *sourceNamesArr* ; *driversArr* )<!-- END REF-->
<!--REF #_command_.SQL GET DATA SOURCE LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| sourceType | Integer | &#8594;  | ソースタイプ: ユーザまたはシステム |
| sourceNamesArr | Text array | &#8592; | データソース名の配列 |
| driversArr | Text array | &#8592; | ソース用のドライバの配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SQL GET DATA SOURCE LIST.Summary-->*GET DATA SOURCE LIST*コマンドは、オペレーションシステムのODBCマネージャで定義されている*sourceType* データソースのドライバと名前を*sourceNamesArr*と*driversArr*の配列に返します。<!-- END REF-->

4Dではランゲージによる外部ODBCデータソースへのダイレクト接続が可能です。そして[Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL")タグ構造内でSQLクエリを実行します。これは以下のように機能します。*GET DATA SOURCE LIST*コマンドはマシーン上に存在するデータソースのリストを得るために使用されます。[SQL LOGIN](sql-login.md "SQL LOGIN")コマンドは使用するソースを指定するためのコマンドです。[Begin SQL](begin-sql.md "Begin SQL")/[End SQL](end-sql.md "End SQL")タグストラクチャを使用してカレントソースにSQLクエリを実行することができます。4Dの内部エンジンを再度使用してクエリを実行するには、[SQL LOGOUT](sql-logout.md "SQL LOGOUT")コマンドを実行するだけです。メソッドエディタのSQLコマンドについての詳細は、4D SQL Reference マニュアルを参照してください。

*sourceType*には、検索したいデータソースのタイプを渡します。""テーマにある以下のいずれかの定数を使用できます。

| 定数                 | 型    | 値 |
| ------------------ | ---- | - |
| System data source | 倍長整数 | 2 |
| User data source   | 倍長整数 | 1 |

**Note:** このコマンドはファイル型データソースを除外します。

このコマンドは該当する値で*sourceNamesArr*と*driversArr*配列に書き込み、サイズを調節します。

**Note:** ODBC経由で外部4Dデータソースへ接続したい場合、お手持ちのマシーンに 4DのODBC Driverをインストールしなければなりません。詳細については、4D ODBC Driver Installationマニュアルを参照してください。

#### 例題 

以下はユーザデータソースを使用する例です:

```4d
 ARRAY TEXT(arrDSN;0)
 ARRAY TEXT(arrDSNDrivers;0)
 GET DATA SOURCE LIST(User data source;arrDSN;arrDSNDrivers)
```

#### システム変数およびセット 

コマンドが正しく実行されるとOKシステム変数が1に設定されます。そうでなければ0が設定されエラーが生成されます。

#### 参照 

[SQL Get current data source](sql-get-current-data-source.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 989 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


