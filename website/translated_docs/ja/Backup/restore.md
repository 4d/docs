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

1. 4Dアプリケーションを開始し、**ファイル** メニューから **復元...** を選択します。 It is not mandatory that an application project be open. OR Execute the `RESTORE` command from a 4D method. 標準のファイルを開くダイアログボックスが表示されます。
2. 復元するバックアップファイル (.4bk) またはログバックアップファイル (.4bl) を選択し、**開く** をクリックします。 復元したファイルを配置する場所を指定するために、以下のダイアログボックスが表示されます: デフォルトで 4Dは アーカイブと同階層にアーカイブ名と同じ名前 (拡張子なし) のフォルダーを作成し、ファイルを復元します。 場所が表示されているエリアをクリックして、パスを確認することができます:

![](assets/en/Backup/backup07.png)

**[...]** ボタンをクリックして異なる場所を指定することもできます。
3. **復元** ボタンをクリックします。 4D は指定されたすべてのバックアップファイルを展開します。 カレントログファイル、または、バックアップファイルと同じ番号を持つログバックアップファイルが同じフォルダーに存在する場合、4D はその内容を検証します。 データファイル中に無い処理がログファイルに含まれていれば、その処理を統合するかどうか 4D が尋ねてきます。 **データベースが完全でない場合、最新のログを統合する** オプションが選択されている場合、統合処理は自動でおこなわれます ([自動復元](settings.md#自動復元) 参照)。

4.(Optional) Click **OK** to integrate the log file into the restored application. 復元と統合が正しく実行されると、4D は処理が成功したことを通知するダイアログを表示します。
5. **OK** をクリックします。

保存先フォルダーが表示されます。 バックアップ時のファイルの位置にかかわらず、4D はすべてのバックアップファイルをこのフォルダーに配置します。 これにより、ファイルを探す手間が省けます。

> Any content related to the data file (files and `Settings` folder) are automatically restored in a `Data` subfolder within the destination folder.


## 手動でバックアップから復元する (MSC)

You can manually restore an archive of the current application using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).


## Manually integrating the log

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the application when 4D notices that the log file contains more operations than have been carried out in the data file.

![](assets/en/Backup/backup08.png)

> In order for this mechanism to work, 4D must be able to access the log file in its current location.

You can choose whether or not to integrate the current log file. Not integrating the current log file allows you to avoid reproducing errors made in the data.