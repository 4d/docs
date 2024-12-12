---
id: restart-4d
title: RESTART 4D
slug: /commands/restart-4d
displayed_sidebar: docs
---

<!--REF #_command_.RESTART 4D.Syntax-->**RESTART 4D** {( *time* {; *message*} )}<!-- END REF-->
<!--REF #_command_.RESTART 4D.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| time | Integer | &#8594;  | 4Dが再起動するまでの猶予時間(秒) |
| message | Text | &#8594;  | クライアントマシンに表示するテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESTART 4D.Summary-->**RESTART 4D**コマンドは、カレントの4Dアプリケーションを再起動します。<!-- END REF-->

このコマンドは組み込みアプリ(クライアント/サーバーアプリまたはシングルユーザー向けアプリ)に対して[SET UPDATE FOLDER](set-update-folder.md) と組み合わせて使用することを主な目的としています。これにより、自動アップデートプロセスが発動し、 **RESTART 4D**コマンドによってアプリケーションが再起動し、[SET UPDATE FOLDER](set-update-folder.md)によって指定されたアプリケーションの新バージョンがカレントのバージョンを置き換えます。データファイルへのパス名は自動的に保存され、使用されます。

カレントセッションにおいて[SET UPDATE FOLDER](set-update-folder.md)コマンドによってアップデート情報が何も指定されていなかった場合、このコマンドは単に4Dアプリケーションをカレントのストラクチャーとデータファイルで再起動します。

*time* 引数を使用して、クライアントマシンが接続を切断するために再起動までの時間を指定することが出来ます。 *time* 引数には秒単位の値を渡さなければなりません。この引数を省略した場合、サーバーアプリケーションは10分を上限として全てのクライアントアプリケーションが接続を切断するのを待ちます。それ以降は全てのクライアントアプリケーションは自動的に切断されます。

**注:** *time* と *message* 引数はサーバーアプリケーションにおいてのみ考慮されます(コマンドがシングルユーザー向けアプリまたはリモートアプリで実行された場合には無視されます)。

任意の *message* 引数は接続済みのクライアントアプリケーションに対してのカスタムのメッセージを表示します。

コマンドが正常に実行されれば、OKシステム変数は1に設定されます。それ以外の場合は0に設定され、アプリケーションは再起動します。このコマンドによって生成されるエラーは全て [ON ERR CALL](on-err-call.md) コマンドによって実装されたメソッドによって割り込み可能です。

#### 参照 

[Get last update log path](get-last-update-log-path.md)  
[SET UPDATE FOLDER](set-update-folder.md)  