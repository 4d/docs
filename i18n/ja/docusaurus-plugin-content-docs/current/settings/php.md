---
id: php
title: PHP ページ
---

このページで PHP実行に関する設定をおこなうことで、4D から直接 PHPスクリプトを実行することができます (4D*ランゲージリファレンス* マニュアルの [4DでPHPスクリプトを実行する](https://doc.4d.com/4D-Language-Reference-19-R4/PHP/Executing-PHP-scripts-in-4D.300-5739898.ja.html) を参照ください)。

## インタープリター

-   **IP Address** and Port number By default, 4D provides a PHP interpreter, compiled in FastCGI. 内部的なアーキテクチャーに関連する理由により、実行リクエストは特定の HTTPアドレスの PHPインタープリターに送信されます。 4D はデフォルトでアドレス 127.0.0.1 そしてポート 8002 を使用します。 このアドレスやポートが他のサービスですでに使用されている場合、あるいは同じマシン上で複数のインタープリターが動作する場合、設定を変更する必要があります。 To do this, you modify the **IP Address** and **Port number** parameters.\
  Note that the HTTP address must be on the same machine as 4D.

-   **External interpreter** If you use an external PHP interpreter, it must be compiled in FastCGI and be on the same machine as 4D (see "Using another PHP interpreter or another php.ini file" in [Executing PHP scripts in 4D](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.en.html)). このオプションを選択すると 4D は内部の PHPインタープリターに接続しなくなります。 この設定では、外部インタープリターの制御を開発者がおこなわなくてはならない点に留意してください。

**4D Server:** この設定は、4D Server と 4Dリモートマシン間で共有されます。 つまり、サーバーマシンで外部インタープリターを利用する時は、クライアントマシンで内部インタープリターを利用することはできません。 もしサーバーがポート 9002 で外部インタープリターを利用する場合には、クライアントマシンでも同じポート番号でインタープリターを利用しなければなりません。

## オプション

このエリアのオプションは 4D の PHPインタープリターの自動管理に関するものであり、**外部インタープリター** オプションが選択されているときは無効になります。

-   **プロセス数**: 4D の PHPインタープリターは "子プロセス" と呼ばれる一連のシステム実行プロセスを起動します。 最適化のため、デフォルトで同時に 5つの子プロセスを保持し実行できます。 必要に応じて子プロセスの数を変更できます。 たとえば、PHPインタープリターを頻繁に呼び出す場合、数を増やしたいと思うかもしれません。 この点に関する詳細は [4DでPHPスクリプトを実行する](https://doc.4d.com/4Dv19/4D/19.1/Executing-PHP-scripts-in-4D.300-5654093.ja.html) の "アーキテクチャー" を参照ください。

    > **注:** macOS ではすべての子プロセスが同じポートを共有します。 Windows では子プロセスごとにポート番号が異なります。 最初に使用されるポートは PHPインタープリター用に設定されたポートです。そして次の子プロセスはインクリメントされた番号を使用します。 たとえば、デフォルトポート番号が 8002 で 5つの子プロセスを起動すると、8002 から 8006 が使用されます。

-   **インタープリターを再起動 X リクエスト後**: 4D の PHPインタープリターが受け付けるリクエストの最大数を設定します。 この数に達すると、インタープリターが再起動されます。 このパラメーターに関する詳細は FastCGI-PHP のドキュメントを参照ください。
> **注:** このダイアログボックスでは、すべての接続されたマシンおよびすべてのセッションのデフォルト値が設定されています。 各マシンおよび各セッションで異なる設定を適用するために [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/ja/page642.html) と [Get database parameter](https://doc.4d.com/4dv19R/help/command/ja/page643.html) コマンドを使用できます。 [SET DATABASE PARAMETER](https://doc.4d.com/4dv19R/help/command/ja/page642.html) コマンドで変更された値はカレントセッションで優先されます。