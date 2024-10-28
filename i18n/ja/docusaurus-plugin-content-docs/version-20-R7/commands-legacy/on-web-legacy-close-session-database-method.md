---
id: on-web-legacy-close-session-database-method
title: On Web Legacy Close Session database method
slug: /commands/on-web-legacy-close-session-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Web Legacy Close Session database method.Syntax-->**On Web Legacy Close Session database method**<!-- END REF-->
<!--REF #_command_.On Web Legacy Close Session database method.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 互換性に関する注意 

<!--REF #_command_.On Web Legacy Close Session database method.Summary-->このデータベースメソッドは**旧式Web セッション**でのみ使用可能であり、このセッションモードは4D v18 R6 以前のバージョンから変換されたデータベースでのみ利用可能です。<!-- END REF-->**スケーラブルWeb セッション**モード(4D v18 R6 以降での推奨設定)が有効化されていた場合にはこのメソッドは呼び出されません。詳細な情報については、*Webセッション管理(旧式)* の章を参照してください。

#### 

**On Web Legacy Close Session database method** はWebセッションが閉じられる直前に、4D Webサーバーから呼び出されます。4Dは以下のような場合にWebセッション (セッションを管理するWebプロセス) を閉じます:

* セッ ションを管理するWebプロセス数の最大値 (デフォルトで100、[WEB SET OPTION](web-set-option.md)コマンドで変更可能) に達している状態で、さらに新しいWebセッションを作成する必要があるとき (4Dは一番古いWebセッションプロセスを自動で破棄します)
* セッションプロセスのタイムアウトに達したとき (デフォルトで480分 = 8時間、[WEB SET OPTION](web-set-option.md)コマンドで変更可能)
* [WEB LEGACY CLOSE SESSION](web-legacy-close-session.md)コマンドが呼び出された場合

こ のデータベースメソッドが呼び出された時点で、セッションのコンテキスト (プロセス変数の値やカレントセレクション) は有効です。そのセッションに関連するデータ (変数の値やセレクション) を退避し、後で同じcookie値でリクエストを受信したときにそれらを再利用することができます。

**注:** (複数のプロセスを生成可能な)4D Mobileセッションのコンテキストにおいて、**On Web Legacy Close Session database method**は閉じられる各Webプロセス毎に呼び出されるので、4D Mobileセッションプロセス中に生成された全てのタイプのデータ(変数、セレクション、等)を保存する事ができます。

**On Web Legacy Close Session database method**の例題は*Webセッション管理(旧式)*を参照してください。

#### 参照 

[WEB LEGACY CLOSE SESSION](web-legacy-close-session.md)  
*Webセッション管理(旧式)*  