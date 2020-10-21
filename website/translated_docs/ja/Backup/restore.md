---
id: restore
title: 復元
---

4D allows you to restore entire sets of application data in case of any incidents, regardless of the cause of the incident. 主に 2つのカテゴリの問題が発生する可能性があります:

- The unexpected stoppage of an application while in use. この問題は電力の切断、システムのエラー等により発生する可能性があります。 In this case, depending on the current state of the data cache at the moment of the incident, the restore of the application can require different operations:
    - If the cache was empty, the application opens normally. Any changes made in the application were recorded. この場合には、特別な手順は必要ありません。
    - キャッシュに未保存の処理が含まれている場合、データファイルは損傷していませんが、カレントのログファイルを統合する必要があります。
    - キャッシュの内容をデータファイルに書き込み中だった場合、データファイルはおそらく損傷しています。 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。

- The loss of application file(s). This incident can occur because of defective sectors on the disk containing the application, a virus, manipulation error, etc. 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。 To find out if an application was damaged following an incident, simply relaunch the application using 4D. 4Dは自己検証をおこない、必要な復元処理手順を示します。 自動モードの場合、この処理はユーザーのアクションなしで直接実行されます。 If a regular backup strategy was put into place, the 4D restore tools will allow you to recover (in most cases) the application in the exact state it was in before the incident.

> 4D can launch procedures automatically to recover applications following incidents. These mechanisms are managed using two options available on the **Backup/Backup & Restore** page of the Settings. For more information, refer to the [Automatic Restore](settings.md#automatic-restore) paragraph.  
> If the incident is the result of an inappropriate operation performed on the data (deletion of a record, for example), you can attempt to repair the data file using the "rollback" function in the log file. この機能は MSC の [ロールバック](MSC/rollback.md) ページから利用できます。


## 手動でバックアップから復元する (標準ダイアログ)

バックアップモジュールを使用して生成されたアーカイブの内容を、手動で復元することができます。 手動による復元は、たとえばアーカイブ全体 (ストラクチャーファイルや添付されたファイル) を再生成したい場合や、アーカイブの内容を見たい場合などに必要となります。 手動復元の際に、カレントログファイルを統合することもできます。

バックアップの手動復元は、標準のファイルを開くダイアログボックス、あるいは Maintenance and Security Center (MSC) の [復元](MSC/restore) ページからおこなうことができます。 MSC を使用した復元では詳細なオプション設定をおこなったり、アーカイブの内容をプレビューしたりすることができます。 On the other hand, only archives associated with the open application can be restored.

To restore an application manually via a standard dialog box:

1. Choose **Restore...** in the 4D application **File** menu. It is not mandatory that an application project be open. OR Execute the `RESTORE` command from a 4D method. A standard Open file dialog box appears.
2. Select a backup file (.4bk) or a log backup file (.4bl) to be restored and click **Open**. A dialog box appears, which allows you to specify the location where files will be restored. By default, 4D restores the files in a folder named *Archivename* (no extension) located next to the archive. You can display the path:

![](assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button. 4D extracts all backup files from the specified location. If the current log file or a log backup file with the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not present in the data file, the program asks you if you want to integrate these operations. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)).

4.(Optional) Click **OK** to integrate the log file into the restored application. If the restore and integration were carried out correctly, 4D displays a dialog box indicating that the operation was successful.
5. Click **OK**.

The destination folder is displayed. During the restore, 4D places all backup files in this folder, regardless of the position of the original files on the disk when the backup starts. This way your files will be easier to find.

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.


## Manually restoring a backup (MSC)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).


## Manually integrating the log

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](assets/en/Backup/backup08.png)

> In order for this mechanism to work, 4D must be able to access the log file in its current location.

You can choose whether or not to integrate the current log file. Not integrating the current log file allows you to avoid reproducing errors made in the data.