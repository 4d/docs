---
id: new-log-file
title: New log file
slug: /commands/new-log-file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file**  : Text<!-- END REF-->
<!--REF #_command_.New log file.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 閉じられたログファイルのフルパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New log file.Summary-->**注:** このコマンドは4D Serverでのみ動作します。<!-- END REF-->このコマンドは[Execute on server](execute-on-server.md)あるいはストアードプロシージャー内でのみ実行できます。

**New log file**コマンドは、カレントログファイルを閉じて、そのファイルに別の名前を付けます。そして、以前と同じ名前の新しいログファイルを前のファイルと同じ場所に作成します。  
このコマンドは論理ミラーを使用したバックアップシステムを設定するために使用されます（4D Server Referenceの*論理ミラーの設定*を参照）。

このコマンドは、閉じられたログファイルのフルパス名（アクセスパス+パス名）を返します。このファイルは、カレントログファイルと同じ場所に保存されます（これは環境設定のバックアップテーマ内、設定ページで指定します）。このコマンドは、保存するファイルに一切の処理（圧縮やセグメント化）を実行しません。ダイアログボックスは表示されません。

ファイルは、データベースやログファイルのカレントバックアップ番号を使用した別名に変更されます。次のようになります。  
例： **DatabaseName\[BackupNum-LogBackupNum\].journal**

* MyDatabase.4DD というデータベースを4 回保存すると、最後のバックアップファイルの名前は、**MyDatabase\[0004\].4BK**となります。従って最初のログファイルの"セグメント"は、**MyDatabase\[0004-0001\].journal**です。
* MyDatabase.4DD というデータベースが3 回保存され、ログファイルが5 回保存された場合、6 度目に実行されるログファイルのバックアップは、**MyDatabase\[0003-0006\].journal**です。

#### エラー管理 

エラーが発生すると、コマンドは[ON ERR CALL](on-err-call.md "ON ERR CALL") コマンドでとらえることが可能なエラーコードを生成します。
