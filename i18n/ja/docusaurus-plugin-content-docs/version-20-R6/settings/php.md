---
id: php
title: PHP ページ
---

4D では [PHP スクリプトを実行できます](https://doc.4d.com/4Dv20/4D/20.1/Executing-PHP-scripts-in-4D.300-6480814.ja.html)。 このページでは、そのインタープリターを設定します。

:::note

これらの設定は、接続されているすべてのマシンとすべてのセッションに対して適用されます。 各マシンおよび各セッションで異なる設定を適用するために <[`SET DATABASE PARAMETER`](https://doc.4d.com/4dv20/help/command/ja/page642.html) と [`Get database parameter`](https://doc.4d.com/4dv20/help/command/ja/page643.html) コマンドを使用できます。 `SET DATABASE PARAMETER` コマンドで変更された値はカレントセッションにおいて優先されます。

:::

## インタープリター

### IPアドレス

PHP 実行リクエストを受け付ける PHPインタープリターのアドレス。 4D はデフォルトでアドレス 127.0.0.1 を使用します。

HTTPアドレスが 4D と同じマシン上に存在する必要があることに注意してください。

### ポート番号

PHPインタープリターのポート番号。 4D はデフォルトでポート 8002 を使用します。

このアドレスやポートが他のサービスですでに使用されている場合、あるいは同じマシン上で複数のインタープリターが動作する場合、設定を変更する必要があります。
