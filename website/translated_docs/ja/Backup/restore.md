---
id: restore
title: 復元
---

問題が発生したときは、一連のデータベースファイル全体を復元することができます。 主に 2つのカテゴリの問題が発生する可能性があります:

- データベースが使用中に予期せず終了された。 この問題は電力の切断、システムのエラー等により発生する可能性があります。 この場合、問題が発生した瞬間のデータベースキャッシュの状態により、データベースの復旧には異なる手順が必要となります:
    - キャッシュが空の場合、データベースを問題なく開くことができます。 データベースに対しておこなわれた変更はデータファイルに記録されています。 この場合には、特別な手順は必要ありません。
    - キャッシュに未保存の処理が含まれている場合、データファイルは損傷していませんが、カレントのログファイルを統合する必要があります。
    - キャッシュの内容をデータファイルに書き込み中だった場合、データファイルはおそらく損傷しています。 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。

- データベースファイルを失った。 この問題はデータベースが配置されたディスク上のセクターが読み書き不能になった、あるいはウィルス、操作ミス等により発生します。 最新のバックアップから復元をおこない、カレントのログファイルを統合する必要があります。 問題発生後にデータベースが損傷しているかどうかを見分けるには、4D でデータベースを起動します。 4Dは自己検証をおこない、必要な復元処理手順を示します。 自動モードの場合、この処理はユーザーのアクションなしで直接実行されます。 定期的なバックアップがおこなわれていれば、4D の復元ツールを使用して (ほとんどの場合) 問題が発生する直前の状態までデータベースを復旧することができます。

> 問題発生後に、自動で 4Dのデータベース復旧処理を起動することができます。 このメカニズムは、データベース設定の **バックアップ/バックアップ＆復旧** ページで利用できるオプションを使用して管理します。 詳細は [自動復元](settings.md#自動復元) を参照してください。  
> 問題が、データに対しておこなわれた不適切な処理の結果引き起こされた場合 (たとえば誤ってレコードを削除した等)、ログファイルの "ロールバック" 機能を使用してデータベースを復旧できます。 この機能は MSC の [ロールバック](MSC/rollback.md) ページから利用できます。


## 手動でバックアップから復元する (標準ダイアログ)

バックアップモジュールを使用して生成されたアーカイブの内容を、手動で復元することができます。 手動による復元は、たとえばアーカイブ全体 (ストラクチャーファイルや添付されたファイル) を再生成したい場合や、アーカイブの内容を見たい場合などに必要となります。 手動復元の際に、カレントログファイルを統合することもできます。

バックアップの手動復元は、標準のファイルを開くダイアログボックス、あるいは Maintenance and Security Center (MSC) の [復元](MSC/restore) ページからおこなうことができます。 MSC を使用した復元では詳細なオプション設定をおこなったり、アーカイブの内容をプレビューしたりすることができます。 他方、開かれているデータベースに関連したアーカイブのみを復元できます。

標準ダイアログボックスを使用してデータベースを手動復元するには:

1. 4Dアプリケーションを開始し、**ファイル** メニューから **復元...** を選択します。 データベースが開かれている必要はありません。 または<br /> 4Dメソッドから `RESTORE` コマンドを実行します。 標準のファイルを開くダイアログボックスが表示されます。
2. 復元するバックアップファイル (.4bk) またはログバックアップファイル (.4bl) を選択し、**開く** をクリックします。 復元したファイルを配置する場所を指定するために、以下のダイアログボックスが表示されます: デフォルトで 4Dは アーカイブと同階層にアーカイブ名と同じ名前 (拡張子なし) のフォルダーを作成し、ファイルを復元します。 You can display the path:

![](assets/en/Backup/backup07.png)

You can also click on the **[...]** button to specify a different location.
3. Click on the **Restore** button. 4D extracts all backup files from the specified location. If the current log file or a log backup file with the same number as the backup file is stored in the same folder, 4D examines its contents. If it contains operations not present in the data file, the program asks you if you want to integrate these operations. Integration is done automatically if the **Integrate last log file...** option is checked (see [Automatic Restore](settings.md#automatic-restore)). 4.(Optional) Click **OK** to integrate the log file into the restored database. If the restore and integration were carried out correctly, 4D displays a dialog box indicating that the operation was successful.
5. Click **OK**. The destination folder is displayed. During the restore, 4D places all backup files in this folder, regardless of the position of the original files on the disk when the backup starts. This way your files will be easier to find.

## Manually restoring a backup (MSC)

You can manually restore an archive of the current database using the [Restore page](MSC/restore.md) of the Maintenance and Security Center (MSC).


## Manually integrating the log

If you have not checked the option for the automatic integration of the log file on the Restore page of the MSC (see [Successive integration of several log files](MSC/restore.md#successive-intergration-of-several-data-log-files)), a warning dialog box appears during the opening of the database when 4D notices that the log file contains more operations than have been carried out in the database.

![](assets/en/Backup/backup08.png)

> In order for this mechanism to work, 4D must be able to access the log file in its current location.

You can choose whether or not to integrate the current log file. Not integrating the current log file allows you to avoid reproducing errors made in the data.
