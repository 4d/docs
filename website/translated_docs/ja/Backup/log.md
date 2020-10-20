---
id: log
title: ログファイル (.journal)
---

継続的に使用されるデータベースでは、変更の記録およびレコードの追加や削除が常におこなわれています。 定期的にデータをバックアップすることは重要ですが、バックアップだけでは (予期しない障害の場合に)、前回のバックアップ以降に入力されたデータを回復することができません。 この必要性に対応するため、4D は専用ツールであるログファイルを提供しています。 このファイルを使用すると、データベースデータのセキュリティが常に保証されます。

また、4D は常にメモリー上のデータキャッシュを使用して作業をおこなっています。 データベースのデータへの変更はすべて、ハードディスクへ書き込む前に、キャッシュへ一時的に保存されます。 これにより、アプリケーションの処理速度が向上します。実際、メモリーへのアクセスは、ハードディスクへのアクセスよりも高速です。 キャッシュに保存したデータをディスクへ書き込む前に障害が発生した場合は、カレントログファイルを組み込んでデータベースを完全に復旧しなくてはなりません。

さらに 4D には、カレントログファイルの内容を解析する機能が組み込まれており、これによってデータベースのデータ上で実行されたすべての処理をさかのぼることができます。 これらの機能は MSC にて提供されています ([ログ解析](MSC/analysis.md) ページおよび [ロールバック](MSC/rollback.md) ページ参照)。

## ログファイルについて

4D が生成するログファイルには、データベース上でおこなわれた操作がすべて順次記録されています。 デフォルトでは、すべてのテーブルのデータログが取られています (つまりログファイルに含まれています)。しかし、**ログファイルに含める** のプロパティを選択解除することによって特定のテーブルをログに含めないようにすることもできます。

したがって、ユーザーが実行した各操作により、2つのアクションが同時におこなわれます。1つは、データベースに対するアクション (命令を通常どおりに実行)、もう1つはログファイルに対するアクション (処理の説明を記録) です。 ログファイルは個別に作成され、ユーザーの作業を妨げたり作業速度を低下させることはありません。 1つのデータベースでは、一度に 1つのログファイルだけを扱うことができます。 ログファイルには、次の操作が記録されます:

- データファイルの開閉
- プロセス (コンテキスト) の開閉
- レコードまたは BLOB の追加
- レコードの変更
- レコードの削除
- トランザクションの作成や終了

これらのアクションについての詳細は、MSC の [ログ解析](MSC/analysis.md) ページを参照ください。

ログファイルは 4D により管理されます。 ログファイルは、データファイルに影響を与えるすべての操作を区別なく盛り込み、ユーザーがおこなった操作や 4Dメソッド、SQLエンジン、プラグイン、Webブラウザーやモバイルアプリなどによる処理など、あらゆる操作を記録します。

ログファイルの機能をまとめた図を次に示します:

![](assets/en/Backup/backup05.png)


カレントログファイルはカレントデータファイルと一緒に自動保存されます。 このメカニズムには、2つの際立った利点があります:

- ログファイルが保存されるディスクの容量が一杯にならないようにします。 バックアップを実行しない場合、ログファイルは使用するにつれて徐々に大きくなり、 いずれはディスクの空き容量をすべて使い果たしてしまいます。 データファイルをバックアップするたびに、4D や 4D Server はカレントログファイルをクローズし、その直後に空ファイルを新たに開くため、ディスクフルになる危険を避けることができます。 この後、古いログファイルはアーカイブに保存され、バックアップのセット (世代) を管理するメカニズムに従って最終的には破棄されます。
- 後からデータベースの解析や修復をおこなえるように、各バックアップに対応するログファイルを保管します。 ログファイルの統合は、それが対応するデータベースからのみ実行できます。 バックアップに正しくログファイルを統合するため、バックアップとアーカイブ化されたログファイルは一緒に保管することが重要です。


## ログファイルの作成

デフォルトでは、4D で作成されたすべてのデータベースでログファイルが使用されます (環境設定の **一般** ページ内でチェックされているオプションです)。 ログファイルには *data.journal* のように名前が付けられ、Data フォルダー内に置かれます。

データベースでログファイルが使用されているかどうかは、いつでも調べることができます。これには、データベース設定の **バックアップ/設定** ページで **ログを使用** オプションが選択されているか確認します。 このオプションの選択が解除されていた場合、またはログファイルなしでデータベースを使用している場合で、ログファイルを用いたバックアップ方法を導入するには、ログファイルを作成する必要があります。

ログファイルを作成するには、次の手順に従ってください:

1. データベース設定の **バックアップ/設定** ページで、**ログを使用** オプションを選択します。 標準の "ファイルを開く/新規作成" ダイアログボックスが表示されます。 ログファイルにはデフォルトで *data.journal* という名前が付けられます。

2. デフォルトの名前を使用するか、またはその名前を変更し、次にファイルの保管場所を選択します。 If you have at least two hard drives, it is recommended that you place the log file on a disk other than the one containing the database. If the database hard drive is lost, you can still recall your log file.

3. Click **Save**. The disk and the name of the open log file are now displayed in the **Use Log** area of the dialog box. You can click on this area in order to display a pop-up menu containing the log path on the disk.

4. Validate the Database Settings dialog box.

In order for you to be able to create a log file directly, the database must be in one of the following situations:

- The data file is blank,
- You just performed a backup of the database and no changes have yet been made to the data.

In all other cases, when you validate the Database Settings dialog box, an alert dialog box will appear to inform you that it is necessary to perform a backup. If you click **OK**, the backup begins immediately, then the log file is activated. If you click **Cancel**, the request is saved but the creation of the log file is postponed and it will actually be created only after the next backup of the database. This precaution is indispensable because, in order to restore a database after any incidents, you will need a copy of the database into which the operations recorded in the log file will be integrated.

Without having to do anything else, all operations performed on the data are logged in this file and it will be used in the future when the database is opened.

You must create another log file if you create a new data file. You must set or create another log file if you open another data file that is not linked to a log file (or if the log file is missing).


## Stopping a log file

If you would like to stop logging operations to the current log file, simply deselect the **Use Log** option on the **Backup/Configuration** page of the Database Settings.

4D then displays an alert message to remind you that this action prevents you from taking advantage of the security that the log file provides:

![](assets/en/Backup/backup06.png)

If you click **Stop**, the current log file is immediately closed (the Database Settings dialog box does not need to be validated afterwards).

If you wish to close the current log file because it is too large, you might consider performing a data file backup, which will cause the log file to be backed up as well.

> **4D Server:** The `New log file` command automatically closes the current log file and starts a new one. If for some reason the log file becomes unavailable during a working session, error 1274 is generated and 4D Server does not allow users to write data anymore. When the log file is available again, it is necessary to do a backup.
