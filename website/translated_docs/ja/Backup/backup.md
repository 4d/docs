---
id: backup
title: バックアップ
---


## バックアップの開始

4D では、次の 3つの方法でバックアップを開始することができます:

- 手動による方法: 4D の **ファイル** メニューから **バックアップ...** コマンドを使用します。または、[Maintenance & Security Center (MSC)](MSC/backup.md) の **バックアップ** ボタンをクリックします。
- Automatically, using the scheduler that can be set in the Settings,
- プログラムによる方法: `BACKUP` コマンドを使用します。

> 4D Server: リモートマシンから `BACKUP` を呼び出すメソッドを使用して、手動でバックアップを開始することができます。 いかなる場合でも、このコマンドはサーバー上で実行されます。

### 手動バックアップ

1. 4D の **ファイル** メニューから **バックアップ...** コマンドを選択します。   
   バックアップウインドウが表示されます: ![](assets/en/Backup/backup01.png) "バックアップファイルの保存先" エリアの隣のポップアップメニューを使用して、バックアップファイルの保存場所を確認することができます。 この場所はデータベース設定の **バックアップ/設定** ページにて、設定されています。

- 4D の [Maintenance & Security Center (MSC)](MSC/overview.md) を開いて、[バックアップページ](MSC/backup.md) から操作することもできます。

The **Database properties...** button causes the Backup/Configuration page of the Structure Settings to be displayed.

 2. **バックアップ** をクリックし、現在のパラメーターを用いてバックアップを開始します。


### 定期的な自動バックアップ

自動バックアップは指定されたスケジュールに基づいて自動的に実行されます。 They are configured in the **Backup/Scheduler** page of the **Settings**.

ユーザーが一切操作しなくても、このページで指定された時間にバックアップが自動実行されます。 このダイアログボックスに関する詳細は、[バックアップ設定のスケジューラー](settings.md#スケジューラー) の項目を参照してください。


### BACKUP コマンド

When the `BACKUP` 4D language command is executed from any method, the backup starts using the current parameters as defined in the Settings. バックアッププロセスを処理するため、`On Backup Startup` および `On Backup Shutdown` データベースメソッド使用することができます (詳細は、*4Dランゲージリファレンス* マニュアルを参照ください)。


## バックアップ処理の管理

バックアップが開始すると 4Dは、バックアップの進捗状況を知らせるサーモメーターのあるダイアログボックスを表示します:

![](assets/en/Backup/backupProgress.png)

MSC を使用している場合、この進捗インジケーターは [MSC のバックアップページ](MSC/backup.md) に表示されます。

**中止** ボタンをクリックすると、いつでもバックアップを中断することができます ([バックアップ中に問題が発生した場合](backup.md#バックアップ中に問題が発生した場合) 参照)。

前回のバックアップの結果 (成功または不成功) は、[MSC のバックアップページ](MSC/backup.md) の "前回のバックアップの情報" エリア、または 4D Server の **メンテナンスページ** で確認できます。 また、データベースの **バックアップジャーナル** (Backup Journal.txt) にも記録されます。

### Accessing the application during backup

During a backup, access to the application is restricted by 4D according to the context. 4D は、バックアップに含まれたファイルタイプに関連するプロセルはすべてロックします: プロジェクトファイルだけがバックアップされている場合、ストラクチャーにはアクセスできませんが、データにはアクセス可能です。

反対に、データだけがバックアップされているのであれば、ストラクチャーへのアクセスは許可されます。 In this case, the application access possibilities are as follows:

- With the 4D single-user version, the application is locked for both read and write; all processes are frozen. 実行できるアクションはありません。
- With 4D Server, the application is only write locked; client machines can view data. クライアントマシンからサーバーへ追加・削除・変更のリクエストが送信されると、ウィンドウが表示され、バックアップの終了まで待機するよう要求されます。 Once the application is saved, the window disappears and the action is performed. バックアップの終了まで待機せずに、処理中のリクエストをキャンセルするには、**処理をキャンセル** ボタンをクリックします。 ただし、バックアップ前に開始したメソッドから要求されたアクションが実行待機中である場合、このアクションをキャンセルすべきではありません。この場合、実行すべき残りの処理だけがキャンセルされてしまうためです。 Also, a partially executed method can cause logical inconsistencies in the data. > 実行待機中のアクションが、メソッドから要求されたものである場合に、ユーザーが **処理をキャンセル** ボタンをクリックすると、4D Server はエラー -9976 (データベースのバックアップが進行中なので、このコマンドは実行されません) を返します。

### バックアップ中に問題が発生した場合

バックアップが正常に実行されない場合もあります。 バックアップが不成功に終わる原因としては、ユーザーによる中断、同封ファイルが見つからない場合、保存先ディスクのトラブル、不完全なトランザクションなど、いくつか考えられます。4D は原因に応じて問題に対処します。

In all cases, keep in mind that the status of the last backup (successful or failed) is stored in the Last Backup Information area of the [Backup page in the MSC](MSC/backup.md) or in the **Maintenance page** of 4D Server, as well as in the **Backup journal.txt**. displayed in the Last Backup Information area of the Backup page in the MSC or in `GRAPH SETTINGS` of 4D Server, as well as in the `Backup journal` of the application.

- **ユーザーによる中断**: 進捗ダイアログボックスの **中止** ボタンをクリックすると、いつでもバックアップを中断することができます。 この場合、各項目のコピーが中止されてエラー 1406 が生成されます。 このエラーは `On Backup Shutdown` データベースメソッドで遮ることができます。
- **Attached file not found**: When an attached file cannot be found, 4D performs a partial backup (backup of application files and accessible attached files) and returns an error.
- **Backup impossible** (disk is full or write-protected, missing disk, disk failure, incomplete transaction, application not launched at time of scheduled automatic backup, etc.): If this is a first-time error, 4D will then make a second attempt to perform the backup. The wait between the two attempts is defined on the **Backup/Backup & Restore** page of the Settings. If the second attempt fails, a system alert dialog box is displayed and an error is generated. このエラーは `On Backup Shutdown` データベースメソッドで遮ることができます。

## バックアップジャーナル

To make following up and verifying backups easier, the backup module writes a summary of each operation performed in a special file, which is similar to an activity journal. Like an on-board manual, all database operations (backups, restores, log file integrations) are logged in this file whether they were scheduled or performed manually. The date and time that these operations occurred are also noted in the journal.

The backup journal is named "Backup Journal[001].txt" and is placed in the "Logs" folder of the project. The backup journal can be opened with any text editor.

#### Management of backup journal size

In certain backup strategies (for example, in the case where numerous attached files are being backed up), the backup journal can quickly grow to a large size. Two mechanisms can be used to control this size:

- **Automatic backup**: Before each backup, the application examines the size of the current backup journal file. If it is greater than 10 MB, the current file is archived and a new file is created with the [xxx] number incremented, for example "Backup Journal[002].txt”. Once file number 999 is reached, the numbering begins at 1 again and the existing files will be replaced.
- **Possibility of reducing the amount of information recorded**: To do this, simply modify the value of the `VerboseMode` key in the *Backup.4DSettings* file of the project. By default, this key is set to True. If you change the value of this key to False, only the main information will be stored in the backup journal: date and time of start of operation and any errors encountered. The XML keys concerning backup configuration are described in the *4D XML Keys Backup* manual.



## backupHistory.json

All information regarding the latest backup and restore operations are stored in the application's **backupHistory.json** file. It logs the path of each saved file (including attachments) as well as number, date, time, duration, and status of each operation. To limit the size of the file, the number of logged operations is the same as the number of available backups ("Keep only the last X backup files") defined in the backup settings.

The **backupHistory.json** file is created in the current backup destination folder. You can get the actual path for this file using the following statement:

```4d
$backupHistory:=Get 4D file(Backup history file)
```
> **WARNING**  
> Deleting or moving the **backupHistory.json** file will cause the next backup number to be reset.
> The **backupHistory.json** file is formatted to be used by the 4D application. If you are looking for a human-readable report on backup operations, you might find the Backup journal more accurate. 
