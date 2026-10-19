---
id: php
title: PHP ページ
---

In 4D, you can execute PHP scripts directly by configuring the PHP page of the Database Settings (see [Executing PHP scripts in 4D](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.en.html) in the 4D *Language Reference* manual).

## インタープリター

- **IP Address** and Port number
  By default, 4D provides a PHP interpreter, compiled in FastCGI. 内部的なアーキテクチャーに関連する理由により、実行リクエストは特定の HTTPアドレスの PHPインタープリターに送信されます。 4D はデフォルトでアドレス 127.0.0.1 そしてポート 8002 を使用します。このアドレスやポートが他のサービスですでに使用されている場合、あるいは同じマシン上で複数のインタープリターが動作する場合、設定を変更する必要があります。 To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

- **External interpreter**
  If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)).
  このオプションを選択すると 4D は内部の PHPインタープリターに接続しなくなります。この設定では、外部インタープリターの制御を開発者がおこなわなくてはならない点に留意してください。この設定では、外部インタープリターの制御を開発者がおこなわなくてはならない点に留意してください。

**4D Server:** These settings are shared between 4D Server and the 4D remote machines so it is not possible to use an external interpreter on the server machine and simultaneously use the internal interpreter on the client machines (and vice versa). もしサーバーがポート 9002 で外部インタープリターを利用する場合には、クライアントマシンでも同じポート番号でインタープリターを利用しなければなりません。

## オプション

These options are related to the automatic management of the 4D PHP interpreter and are disabled when the **External interpreter** option is selected.

- **Number of processes**: The 4D PHP interpreter drives a set of system execution processes called "child processes". 最適化のため、デフォルトで同時に 5つの子プロセスを保持し実行できます。必要に応じて子プロセスの数を変更できます。たとえば、PHPインタープリターを頻繁に呼び出す場合、数を増やしたいと思うかもしれません。 For more information, refer to the "Architecture" section in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html).

  > **Note:** Under Mac OS, all child processes share the same port. Windows では子プロセスごとにポート番号が異なります。最初に使用されるポートは PHPインタープリター用に設定されたポートです。そして次の子プロセスはインクリメントされた番号を使用します。たとえば、デフォルトポート番号が 8002 で 5つの子プロセスを起動すると、8002 から 8006 が使用されます。

- **Restart the interpreter after X requests**: This sets the maximum number of requests that the 4D PHP interpreter accepts. この数に達すると、インタープリターが再起動されます。この数に達すると、インタープリターが再起動されます。このパラメーターに関する詳細は FastCGI-PHP のドキュメントを参照ください。

  > **Note:** In this dialog box, the parameters are specified by default for all connected machines and all sessions. You can also modify and read them separately for each machine and each session using the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) and [Get database parameter](https://doc.4d.com/4dv19R/help/command/en/page643.html) commands. The parameters modified by the [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/en/page642.html) command have priority for the current session.