---
id: start-sql-server
title: START SQL SERVER
slug: /commands/start-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.START SQL SERVER.Syntax-->**START SQL SERVER**<!-- END REF-->
<!--REF #_command_.START SQL SERVER.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.START SQL SERVER.Summary-->START SQL SERVERコマンドを使用して、実行中の4Dのアプリケーションで、統合されたSQLサーバを起動させます。<!-- END REF-->起動すると、SQLサーバは外部SQLクエリに応答します。

**Note:** このコマンドは4Dの内部SQLカーネルの機能には影響しません。内部クエリの際、SQLカーネルはいつでも利用できます。

#### システム変数およびセット 

SQLサーバが正しく起動されるとOKシステム変数は1に、そうでなければ0に設定されます。

#### 参照 

[STOP SQL SERVER](stop-sql-server.md)  