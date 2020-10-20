---
id: settings
title: バックアップ設定
---

Backup settings are defined through three pages in the Settings dialog box. 次の設定がおこなえます:

- 自動バックアップ用のスケジューラー設定
- 各バックアップに含めるファイル
- 自動タスクの実行を可能にする高度な設定

> このダイアログボックスで定義された設定は *Backup.4DSettings* ファイルに書き込まれ、[Settings フォルダー](Project/architecture.md#settings-フォルダー) に保存されます。

## スケジューラー

You can automate the backup of applications opened with 4D or 4D Server (even when no client machines are connected). これはバックアップ周期 (時間、日、週、月単位等) を設定することによりおこないます。現在のバックアップ設定に基づき、4D は自動でバックアップを実行します。

If this application was not launched at the theoretical moment of the backup, the next time 4D is launched, it considers the backup as having failed and proceeds as set in the Settings (refer to [Handling backup issues](backup.md#handling-backup-issues)).

The scheduler backup settings are defined on the **Backup/Scheduler** page of the Structure Settings:

![](assets/en/Backup/backup02.png)

The options found on this tab let you set and configure scheduled automatic backups of the application. 標準のクイック設定、または完全なカスタマイズを選択できます。 **自動バックアップ** メニューでの選択に基づき、さまざまなオプションが表示されます:

- **しない**: スケジュールに基づくバックアップは無効となります。
- **毎時**: 次の時間以降、毎時間ごとに自動バックアップをおこないます。
- **毎日**: 日に一回自動バックアップをおこないます。 バックアップを何時に開始するかを設定します。
- **毎週**: 週に一回自動バックアップをおこないます。 バックアップを開始する曜日と時刻を入力するエリアが表示されます。
- **毎月**: 月に一回自動バックアップをおこないます。 バックアップを開始する日付と時刻を入力するエリアが表示されます。
- **カスタマイズ**: 自動バックアップを詳細にスケジュールする場合に使用します。 このオプションを選択すると、複数の入力エリアが表示されます:
    + **X 時間ごと**: 時間単位でバックアップの間隔をスケジュールできます。 1から24までの値を設定できます。
    - **X 日ごと**: 日単位でバックアップの間隔をスケジュールできます。 たとえば、毎日バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップが開始される時刻を設定しなければなりません。
    - **X 週ごと**: 週単位でバックアップの間隔をスケジュールできます。 たとえば、毎週バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップを開始する曜日と時刻を設定しなければなりません。 複数の曜日を選択することもできます。 たとえば、毎週水曜日と金曜日にバックアップをするようプログラムできます。
    - **X 月ごと**: 月単位でバックアップの間隔をスケジュールできます。 たとえば、毎月バックアップをおこなうには 1 と設定します。 このオプションを選択した場合、バックアップを開始する日付と時刻を設定しなければなりません。

## バックアップ設定

The Backup/Configuration page of the Structure Settings lets you set the backup files and their location, as well as that of the log file. These parameters are specific to each application opened by 4D or 4D Server.

![](assets/en/Backup/backup03.png)

> **4D Server**: これらのパラメーターは 4D Server マシン上でのみ設定できます。

### 内容
このエリアでは、次回のバックアップ時にコピー対象とするファイルやフォルダーを指定します。

- **Data**: Application data file. When this option is checked, the following elements are automatically backed up at the same time as the data:
    - the current log file of the application (if it exists),
    - the full `Settings` folder located [next to the data file](Project/architecture.md#settings-folder) (if it exists), i.e. the *user settings for data*.
- **Structure**: Application project folders and files. In cases where projects are compiled, this option allows you to backup the .4dz file. When this option is checked, the full `Settings` folder located [at the same level as the Project folder](Project/architecture.md#settings-folder-1), i.e. the *user settings*, is automatically backed up.
- **ユーザーストラクチャー(バイナリデータベースのみ)**: *廃止予定*
- **Attachments**: This area allows you to specify a set of files and/or folders to be backed up at the same time as the application. ここではどのようなタイプのファイル (ドキュメントやプラグイン、テンプレート、ラベル、レポート、ピクチャーなど) でも指定できます。 個々のファイル、または丸ごとバックアップするフォルダーを個々に設定できます。 添付エリアには、設定されたファイルのパスが表示されます。
    - **削除**: 選択したファイルを添付エリアから取り除きます。
    - **フォルダー追加...**: バックアップに追加するフォルダーを選択するダイアログボックスを表示します。 復元の場合、フォルダーがその内容物とともに復元されます。 You can select any folder or volume connected to the machine, with the exception of the folder containing the application files.
    - **ファイル追加...**: バックアップに追加するファイルを選択するダイアログボックスを表示します。


### バックアップファイル保存先

このエリアではバックアップファイルの格納場所を確認したり、変更したりできます。

エリアをクリックすると、ファイルの場所がポップアップで表示されます。

バックアップファイルの格納場所を変更するには、**[...]** ボタンをクリックします。 選択ダイアログが表示され、バックアップファイルを配置するフォルダーやディスクを選択できます。 "使用状況" と "空き容量" エリアは、選択したフォルダーが存在するディスクの状態を自動で表示します。

### ログ管理

The **Use Log** option, when checked, indicates that the application uses a log file. ログファイルの場所はオプションの下に表示されます。 When this option is checked, it is not possible to open the application without a log file.

By default, any project created with 4D uses a log file (option **Use Log File** checked in the **General Page** of the **Preferences**). The log file is named *data.journal* and is placed in the Data folder.

> Activating a new log file requires the data of the application to be backed up beforehand. このオプションをチェックすると、バックアップが必要である旨の警告メッセージが表示されます: The creation of the log file is postponed and it will actually be created only after the next backup of the application.


## バックアップ＆復旧

バックアップ＆復旧の設定は必要に応じて変更します。 デフォルトの設定は、標準的なバックアップ動作をおこないます。

![](assets/en/Backup/backup04.png)

### 一般設定

- **Keep only the last X backup files**: This parameter activates and configures the mechanism used to delete the oldest backup files, which avoids the risk of saturating the disk drive. This feature works as follows: Once the current backup is complete, 4D deletes the oldest archive if it is found in the same location as the archive being backed up and has the same name (you can request that the oldest archive be deleted before the backup in order to save space). If, for example, the number of sets is set to 3, the first three backups create the archives MyBase-0001, MyBase-0002, and MyBase-0003 respectively. During the fourth backup, the archive MyBase-0004 is created and MyBase-0001 is deleted. By default, the mechanism for deleting sets is enabled and 4D keeps 3 backup sets. To disable the mechanism, simply deselect the option.
> This parameter concerns both application and log file backups.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. Otherwise, the scheduled backup is cancelled and put off until the next scheduled backup. No error is generated; however the backup journal notes that the backup has been postponed. This option also allows saving machine time for the backup of applications principally used for viewing purposes. Please note that enabling this option does not take any modifications made to the project files or attached files into account.
> This parameter concerns both application and log file backups.

- **Delete oldest backup file before/after backup**: This option is only used if the "Keep only the last X backup files" option is checked. It specifies whether 4D should start by deleting the oldest archive before starting the backup (**before** option) or whether the deletion should take place once the backup is completed (**after** option). In order for this mechanism to work, the oldest archive must not have been renamed or moved.

- **If backup fails**: This option allows setting the mechanism used to handle failed backups (backup impossible). When a backup cannot be performed, 4D lets you carry out a new attempt.
    -  **Retry at the next scheduled date and time**: This option only makes sense when working with scheduled automatic backups. It amounts to cancelling the failed backup. An error is generated.
    - **Retry after X second(s), minute(s) or hour(s)**: When this option is checked, a new backup attempt is executed after the wait period. This mechanism allows anticipating certain circumstances that may block the backup. You can set a wait period in seconds, minutes or hours using the corresponding menu. If the new attempt also fails, an error is generated and the failure is noted in the status area of the last backup and in the backup journal file.
    - **Cancel the operation after X attempts**: This parameter is used to set the maximum number of failed backup attempts. If the backup has not been carried out successfully after the maximum number of attempts set has been reached, it is cancelled and the error 1401 is generated ("The maximum number of backup attempts has been reached; automatic backup is temporarily disabled"). In this case, no new automatic backup will be attempted as long as the application has not been restarted, or a manual backup has been carried out successfully. This parameter is useful in order to avoid a case where an extended problem (requiring human intervention) that prevented a backup from being carried out would have led to the application repeatedly attempting the backup to the detriment of its overall performance. By default, this parameter is not checked.

> 4D considers a backup as failed if the application was not launched at the time when the scheduled automatic backup was set to be carried out.

### Archive
These options apply to main backup files and to log backup files.

- **Segment Size (Mb)** 4D allows you to segment archives, i.e., to cut it up into smaller sizes. This behavior allows, for example, the storing of a backup on several different disks (DVDs, usb devices, etc.). During restore, 4D will automatically merge the segments. Each segment is called MyApplication[xxxx-yyyy].4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyApplication backup are called MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK and MyApplication[0006-0003].4BK. The **Segment Size** menu is a combo box that allows you to set the size in MB for each segment of the backup. You can choose one of the preset sizes or enter a specific size between 0 and 2048. If you pass 0, no segmentation occurs (this is the equivalent of passing **None**).

- **Compression Rate** By default, 4D compresses backups to help save disk space. However, the file compression phase can noticeably slow down backups when dealing with large volumes of data. The **Compression Rate** option allows you to adjust file compression:
    - **None:** No file compression is applied. The backup is faster but the archive files are considerably larger.
    - **Fast** (default): This option is a compromise between backup speed and archive size.
- **Compact**: The maximum compression rate is applied to archives. The archive files take up the least amount of space possible on the disk, but the backup is noticeable slowed.

- **Interlacing Rate and Redundancy Rate** 4D generates archives using specific algorithms that are based on optimization (interlacing) and security (redundancy) mechanisms. You can set these mechanisms according to your needs. The menus for these options contain rates of **Low**, **Medium**, **High** and **None** (default).
    - **Interlacing Rate**: Interlacing consists of storing data in non-adjacent sectors in order to limit risks in the case of sector damage. The higher the rate, the higher the security; however, data processing will use more memory.
    - **Redundancy Rate**: Redundancy allows securing data present in a file by repeating the same information several times. The higher the redundancy rate, the better the file security; however, storage will be slower and the file size will increase accordingly.


### Automatic Restore

- **Restore last backup if database is damaged**: When this option is checked, the program automatically starts the restore of the data file of the last valid backup of the application, if an anomaly is detected (corrupted file, for example) during application launch. No intervention is required on the part of the user; however, the operation is logged in the backup journal.

- **Integrate last log file if database is incomplete**: When this option is checked, the program automatically integrates the log file when opening or restoring the application.
    - When opening an application, the current log file is automatically integrated if 4D detects that there are operations stored in the log file that are not present in the data. This situation arises, for example, if a power outage occurs when there are operations in the data cache that have not yet been written to the disk.
    - When restoring an application, if the current log file or a log backup file having the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not found in the data file, the program automatically integrates it.

The user does not see any dialog box; the operation is completely automatic. The goal is to make use as easy as possible. The operation is logged in the backup journal.

> In the case of an automatic restore, only the following elements are restored: - .4DD file - .4DIndx file - .4DSyncData file - .4DSyncHeader file - External Data folder
> 
> If you wish to get the attached files or the project files, you must perform a [manual restore](restore.md#manually-restoring-a-backup-standard-dialog).