---
id: select-log-file
title: SELECT LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->

<!--REF #_command_.SELECT LOG FILE.Params-->

| 引数      | 型    |                             | 説明              |
| ------- | ---- | --------------------------- | --------------- |
| logFile | Text | &#8594; | ログファイルの名前       |
| \*      |      | &#8594; | カレントのログファイルを閉じる |

<!-- END REF-->

## 説明

<!--REF #_command_.SELECT LOG FILE.Summary-->**SELECT LOG FILE** コマンドは引数内に渡した値に応じて、ログファイルを作成するか、または閉じます<!-- END REF-->。

*logFile* 引数には、作成したいログファイルの名前または完全パス名を渡します。 名前だけを渡した場合、ファイルはデータベースのストラクチャーファイルと同階層にあるデータベースの"Logs" フォルダ内に作成されます。

*logFile* に空の文字列を渡した場合、**SELECT LOG FILE** はファイルを保存ダイアログボックスを表示し、作成するログファイルの名前と場所をユーザーが選択できるようにします。 If the file is created correctly, the OK variable is set to 1. そうでない場合、例えばユーザーがキャンセルをクリックしたりログファイルが作成できなかったような場合OK 変数は 0 に設定されます。

**注意:** 新しいログファイルはコマンドの実行直後に生成されるのではなく、次回バックアップ(引数はデータファイル内に保存され、データベースが閉じられたとしてもその引数を考慮します)、または [New log file](new-log-file.md) コマンドを呼び出した後に生成されます。 [BACKUP](../commands-legacy/backup.md) コマンドを呼び出すことで、ログファイルの作成をトリガーすることができます。

*logFile* 引数に *\** を渡した場合、 **SELECT LOG FILE** はデータベースのカレントのログファイルを閉じます。 ログファイルが閉じられると、 OK 変数は 1 に設定されます。

## システム変数およびセット

ログファイルが正常に作成、または閉じられた場合には OK 変数は 1 に設定されます。

## 参照

[New log file](new-log-file.md)\
[ON ERR CALL](../commands-legacy/on-err-call.md)

## プロパティ

|            |                             |
| ---------- | --------------------------- |
| コマンド番号     | 345                         |
| スレッドセーフ    | &cross; |
| 更新するシステム変数 | OK, error                   |

