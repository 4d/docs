---
id: new-log-file
title: New log file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file** : Text<!-- END REF-->

<!--REF #_command_.New log file.Params-->

| 引数  | 型    |                             | 説明              |
| --- | ---- | --------------------------- | --------------- |
| 戻り値 | Text | &#8592; | 閉じたログファイルの完全パス名 |

<!-- END REF-->

## 説明

**前提となる注意:** このコマンドは4D Server でのみ動作します。 [Execute on server](../commands-legacy/execute-on-server.md) コマンド経由か、あるいはストアドプロシージャ内でのみ実行することができます。

<!--REF #_command_.New log file.Summary-->**New log file** コマンドはカレントのログファイルを閉じてその名前を変更した後、元のものと同じ名前で新しいログファイルを作成し同じ元のものと同じ場所に保存します<!-- END REF-->。 このコマンドは論理ミラーを使用したバックアップシステムをセットアップする際に使用されるよう設計されています(詳細は[4D Server Reference Manual](https://doc/4d.com) 内の*論理ミラーの設定* の章を参照して下さい)。 

コマンドは閉じられるログファイル("segment" と呼ばれます)の完全パス名(アクセスパス+名前)を返します。 このファイルはカレントのログファイル(データベース設定のバックアップタブ内の[設定ページ](../Backup/settings.md#設定) で指定された場所)と同じ場所に保存されます。 このコマンドは保存されたファイルに対しては何も処理(圧縮や分割など)は行いません。 ダイアログボックスは表示されません。

ファイルはデータベースのカレントバックアップの番号とログファイルの番号を使用して名称変更されます。具体的には、以下のようになります: DatabaseName\[BackupNum-LogBackupNum\].journal 例:

- もし MyDatabase.4DD データベースが4回保存されていた場合、最後のバックアップファイルの名前は MyDatabase\[0004\].4BK となります。 そのため、ログファイルの最初の"segment" の名前は、 MyDatabase\[0004-0001\].journal となります。
- もし MyDatabase.4DD データベースが3回保存されていて、ログファイルがそこから5回保存されていた場合、ログファイルの6つ目のバックアップの名前は MyDatabase\[0003-0006\].journal となります。

:::warning

ログファイルは常にデータファイルと関連づけられている必要があります。 もし、[`SELECT LOG FILE`](select-log-file.md) または [データベース設定ダイアログボックス](../Backup/settings.md#設定) を使用してログファイルを有効化した直後に(バックアップをすることなく)このコマンドを呼び出した場合、必ずデータファイルと合致するコピーがあることを確認して下さい。そうでない場合、ログファイルを統合することはできません。

:::

## エラー管理

エラーが発生した場合、このコマンドは [ON ERR CALL](../commands-legacy/on-err-call.md) コマンドで割り込み可能なコードを生成します。

## 参照

[SELECT LOG FILE](select-log-file.md)