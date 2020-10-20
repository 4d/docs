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

- **最新のバックアップのみ保存 X バックアップファイル**: このパラメーターを有効にすると、指定された数の最新バックアップファイルだけが保持され、古いバックアップファイルは削除されます。 この機能は以下のように動作します: バックアップ処理が完了したら、アーカイブが作成されたのと同じ場所、同じ名前のもっとも古いアーカイブを削除します。ディスクスペースを確保するため、バックアップ前に削除するよう、削除のタイミングを変更することもできます。 たとえば、3世代のファイルを保持するよう設定している場合、最初の 3回のバックアップで MyBase-0001、MyBase-0002、MyBase-0003 が作成され、 4回目のバックアップで MyBase-0004 が作成されたのちに MyBase-0001 が削除されます。 この設定はデフォルトで有効になっており、4D は 3世代のバックアップを保持します。 このメカニズムを無効にするには、チェックボックスの選択を外します。
> This parameter concerns both application and log file backups.

- **Backup only if the data file has been modified**: When this option is checked, 4D starts scheduled backups only if data has been added, changed or deleted since the last backup. そうでない場合、定期的なバックアップはキャンセルされ、次回のスケジュールまで延期されます。 エラーは生成されませんが、バックアップジャーナルにはバックアップが延期された旨記録されます。 This option also allows saving machine time for the backup of applications principally used for viewing purposes. ストラクチャーや添付ファイルに対して変更がおこなわれていても、データファイルの更新としては扱われない旨注意してください。
> This parameter concerns both application and log file backups.

- **最も古いバックアップファイルを削除**: このオプションは "最新のバックアップのみ保存 X バックアップファイル" が有効になっている場合のみ使用されます。 このオプションを使用して、最も古いバックアップファイルを削除するタイミングを設定します。選択肢は **バックアップ前**、あるいは **バックアップ後** です。 このオプションが機能するには、バックアップファイルが名称変更されたり、移動されたりしていてはなりません。

- **バックアップ失敗時**: このオプションを使用して、バックアップ失敗時の処理を設定できます。 バックアップが実行できなかった場合、4D では再試行することが可能です。
    -  **次回の予定された日付と時刻に再試行する**: このオプションは、定期的な自動バックアップを設定されている場合にのみ意味があります。 失敗したバックアップはキャンセルされます。 エラーが生成されます。
    - **指定時間経過後に再試行**: このオプションが選択されていると、設定された待ち時間経過後にバックアップを再試行します。 このメカニズムを使用すると、バックアップをブロックするような特定の状況に対応することが可能となります。 秒、分、あるいは時間単位で待ち時間を設定できます。 次のバックアップ試行にも失敗するとエラーが生成され、ステータスエリアに失敗状況が表示され、バックアップジャーナルにも記録されます。
    - **操作をキャンセル X 試行後**: このパラメーターを使用して、バックアップ試行の失敗最大数を設定できます。 この最大数に達してもバックアップが正しく実行できなかった場合、バックアップはキャンセルされ、エラー 1401 ("バックアップ試行の最大数に達しました。自動バックアップは無効になります") が生成されます。 この場合、データベースを再起動するか、手動バックアップが成功するまで自動バックアップはおこなわれません。 このパラメーターは、人による介入が必要となるような問題があり、バックアップ試行が自動的に繰り返されることにより全体的なパフォーマンスに影響するようなケースで使用できます。 デフォルトでこのオプションは選択されていません。

> 4D considers a backup as failed if the application was not launched at the time when the scheduled automatic backup was set to be carried out.

### アーカイブ
これらのオプションはメインのバックアップファイルとログバックアップファイルに適用されます。

- **セグメントサイズ (MB)**: 4Dではアーカイブをセグメントに分割できます。 この振る舞いにより、たとえばバックアップファイルを複数の異なるディスク (DVDやUSBデバイス等) に格納できます。 復元時、4D はセグメントを自動的に統合します。 Each segment is called MyApplication[xxxx-yyyy].4BK, where xxxx is the backup number and yyyy is the segment number. For example, the three segments of the MyApplication backup are called MyApplication[0006-0001].4BK, MyApplication[0006-0002].4BK and MyApplication[0006-0003].4BK. **セグメントサイズ** はコンボボックスであり、各セグメントのサイズを MB単位で設定できます。 メニューから定義済み値を選択するか、0~2048 の値を入力できます。 0 を指定するとセグメント化はされません (**なし** を指定したのと同じ)。

- **圧縮率**: デフォルトで 4D はバックアップファイルを圧縮し、ディスクスペースを節約します。 しかし大量のデータがある場合、ファイルの圧縮処理はバックアップにかかる時間を長くします。 **圧縮率** オプションを使用してファイルの圧縮モードを調整できます:
    - **なし**: ファイルの圧縮はおこなわれません。 バックアップは早くおこなわれますが、ファイルサイズは大きくなります。
    - **速度** (デフォルト): このオプションはバックアップの速度とアーカイブサイズのバランスが考慮されたものです。
- **圧縮率**: アーカイブに最大の圧縮率が適用されます。 アーカイブファイルはディスク上で最小のサイズとなりますが、バックアップの速度は低下します。

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