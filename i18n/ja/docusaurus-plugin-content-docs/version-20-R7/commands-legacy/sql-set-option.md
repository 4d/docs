---
id: sql-set-option
title: SQL SET OPTION
slug: /commands/sql-set-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL SET OPTION.Syntax-->**SQL SET OPTION** ( *option* ; *value* )<!-- END REF-->
<!--REF #_command_.SQL SET OPTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | 設定するオプション番号 |
| value | Integer, Text | &#8594;  | 新しいオプションの値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SQL SET OPTION.Summary-->**SQL SET OPTION** コマンドを使用して、optionに渡したオプションのvalueを変更します。<!-- END REF-->

*option*には“*SQL*” テーマにある次の定数のうちいずれかを渡します:

| 定数                     | 値   | コメント                                                                                                                                                                  |
| ---------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL asynchronous       | 1   | 0 = 同期接続 (デフォルト値)<br/>1 (または非0値) = 非同期接続                                                                                                                      |
| SQL charset            | 100 | (SQLパススルー経由で) 外部ソースに送られるリクエストで使用されるテキストエンコーディング。変更はカレントプロセスのカレント接続に対して実行されます。<br/>値: MIBEnum識別子 (Note2を参照)、または値 -2 (Note3を参照) <br/>デフォルト: 106 (UTF-8) |
| SQL connection timeout | 5   | [SQL LOGIN](sql-login.md "SQL LOGIN")コマンド実行時にレスポンスを待ち受ける最大タイムアウト。この値が有効になるためには、接続を開く前に設定しなければなりません。<br/>取りうる値: 秒数<br/>デフォルト: タイムアウトしない                |
| SQL data chunk size    | 6   | サーバーへと送られるデータチャンクのサイズ。このオプションはSybase ODBC のような、実際のデータチャンクをサポートしないドライバーの場合に主に有効です。デフォルトの値より大きな値を設定することで一度に大きなデータを送信することができます。 値: バイト単位でのサイズ<br/>デフォルト値: 8000   |
| SQL max data length    | 3   | 返されるデータの最大長                                                                                                                                                           |
| SQL max rows           | 2   | 結果グループの最大行数 (プレビューで使用)                                                                                                                                                |
| SQL query timeout      | 4   | [SQL EXECUTE](sql-execute.md "SQL EXECUTE")コマンドの実行時に応答を待機する最大タイムアウト<br/>値: 秒数<br/>デフォルト:タイムアウトしない                                                     |

**Notes:**

1. 4Dの内部SQLカーネルを使用する場合、SQL Asynchronousオプションは意味を持ちません。この場合常に同期接続が使用されます。
2. MIBEnum番号は、次のアドレスで参照できます。 <http://www.iana.org/assignments/character-sets>
3. SQL Charsetの*value*と して-2を渡すと、4D SQLサーバが使用するエンコーディングは、自動で実行中のプラットフォームに合わせて適用されます (非Unicodeエンコーディング):  
   * Windowsでは ISO8859-1が使用されます。  
   * Mac OSではMAC-ROMANが使用されます。

#### システム変数およびセット 

コマンドが正しく実行されるとOKシステム変数に1が、そうでなければ0が設定されます。

#### 参照 

[SQL GET OPTION](sql-get-option.md)  