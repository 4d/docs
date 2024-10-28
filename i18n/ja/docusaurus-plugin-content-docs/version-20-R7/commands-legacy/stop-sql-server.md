---
id: stop-sql-server
title: STOP SQL SERVER
slug: /commands/stop-sql-server
displayed_sidebar: docs
---

<!--REF #_command_.STOP SQL SERVER.Syntax-->**STOP SQL SERVER**<!-- END REF-->
<!--REF #_command_.STOP SQL SERVER.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.STOP SQL SERVER.Summary-->STOP SQL SERVERコマンドは、実行済み4Dアプリケーションの統合SQLサーバを停止します。<!-- END REF-->

SQLサーバが起動していた場合、すべてのSQL接続が中断します。そして以降、サーバは外部SQLクエリを受け入れません。SQLサーバが起動していなかった場合、このコマンドは何も行いません。

**Note:** このコマンドは4Dの内部SQLカーネルの機能には影響しません。内部クエリの際、SQLカーネルはいつでも利用できます。

#### 参照 

[START SQL SERVER](start-sql-server.md)  