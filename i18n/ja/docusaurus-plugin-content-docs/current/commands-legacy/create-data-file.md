---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *accessPath* )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| accessPath | Text | &#8594;  | 作成するデータファイルの名前または完全パス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE DATA FILE.Summary-->**CREATE DATA FILE**コマンドは、オンザフライで新しいデータファイルをディスク上に作成し、4Dアプリケーションで開かれているデータファイルと置き換えます。<!-- END REF-->

このコマンドの動作は、[OPEN DATA FILE](open-data-file.md)コマンドと同じです。唯一の相違点は、ストラクチャファイルを再オープンした後に、*accessPath*引数で指定された新しいデータファイルを作成することです。

処理を開始する前に、コマンドは指定されたアクセスパスが既存のファイルに該当していないかどうかを調べます。

**4D Server:** 4D v13より、このコマンドを4D Serverで実行することができるようになりました。この場合コマンドは、指定されたファイルを作成する前に、まずサーバー上で[QUIT 4D](quit-4d.md)を呼び出します (結果各リモートマシン上にサーバーが終了する旨通知するダイアログボックスが表示されます)。 

#### 参照 

[OPEN DATA FILE](open-data-file.md)  