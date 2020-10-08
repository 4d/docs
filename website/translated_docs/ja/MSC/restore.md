---
id: restore
title: 復元ページ
sidebar_label: 復元ページ
---

## 手動でバックアップから復元する

You can manually restore an archive of the current application using the **Restore** page. This page provides several options that can be used to control the restoration:

![](assets/en/MSC/MSC_restore.png)

> 4D automatic recovery systems restore applications and include data log file when necessary.

The list found in the left part of the window displays any existing backups of the application. You can also click on the **Browse...** button found just under the area in order to open any other archive file from a different location. 選択したアーカイブはリストに追加されます。

このリストからバックアップファイルを選択すると、ウィンドウの右側にはそのバックアップについての説明が表示されます:

- **パス**: 選択されたバックアップファイルの完全パス名。 **表示** ボタンをクリックすると、システムウィンドウでバックアップファイルが表示されます。
- **日付と時刻**: バックアップの日付と時刻
- **内容**: バックアップファイルの内容。 各項目の右側にはチェックボックスがあり、復元をおこなうかどうか、ファイルごとに選択できます。 **すべてを選択する** や **すべての選択をはずす** ボタンを利用して、復元するファイルの設定をおこなうこともできます。
- **復元されたファイルの保存先フォルダー**: 復元されたファイルが配置されるフォルダー。 By default, 4D restores the files in a folder named “Archivename” (no extension) that is placed next to the Project folder. この場所を変更するには **[...]** をクリックして復元ファイルの配置場所を指定します。

**復元** ボタンをクリックすると、選択した項目の復元処理が実行されます。

## 複数のログファイルを連続して統合する

The **Integrate one or more log file(s) after restore** option allows you to integrate several data log files successively into an application. If, for example, you have 4 journal file archives (.4BL) corresponding to 4 backups, you can restore the first backup then integrate the journal (data log) archives one by one. これにより、たとえば最新のバックアップファイルを失った場合でも、データファイルを復旧することができます。

このオプションが選択されていると、4Dは復元後に標準のファイルを開くダイアログを表示します。ここで統合するログファイルを選択できます。 ファイルを開くダイアログは、キャンセルされるまで統合の都度表示されます。

## 暗号化されたデータベースの復元

Keep in mind that the data encryption key (passphrase) may have been changed through several versions of backup files (.4BK), .journal files (.4BL) and the current application. 合致した暗号化キーは常に必要となります。

暗号化されたデータベースのバックアップを復元し、カレントログファイルを統合したい場合、以下の点に注意してください:

- 古いパスフレーズを使用してバックアップを復元した場合、そのパスフレーズは次回のデータベース起動時に必要となります。
- 暗号化のあと、暗号化されたデータファイルを開く際に、バックアップが実行され新しいログファイルが作成されます。 そのため、バックアップファイル (.4BK) を特定のキーで復号化した後、異なるキーで暗号化されたログファイル (.4BL) をそれに統合することはできません。

以下の表は、複数のキーを使用したバックアップ/復元操作における過程の一例をまとめたものです:


| 演算子                         | 生成されるファイル                                         | 説明                                                                                                                                                                                                                           |
| --------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New data file               |                                                   |                                                                                                                                                                                                                              |
| Add data (record # 1)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0000.4BL and 0001.4BK                             |                                                                                                                                                                                                                              |
| Add data (record # 2)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0001.4BL and 0002.4BK                             |                                                                                                                                                                                                                              |
| Add data (record # 3)       |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key1 | 0003.4BK file (encrypted with key1)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Add data (record #4)        |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0003.4BL and 0004.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL                                                                                                                                                                               |
| Add data (record # 5)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0004.4BL and 0005.4BK files (encrypted with key1) | We can restore 0003.4BK and integrate 0003.4BL + 0004.4BL. We can restore 0004.4BK and integrate 0004.4BL                                                                                                                    |
| Add data (record # 6)       |                                                   |                                                                                                                                                                                                                              |
| Encrypt data file with key2 | 0006.4BK file (encrypted with key2)               | Encryption saves original files (including journal) in folder "Replaced files (Encrypting) YYY-DD-MM HH-MM-SS". When opening the encrypted data file, a new journal is created and a backup is made to activate this journal |
| Add data (record # 7)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0006.4BL and 0007.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL                                                                                                                                                                               |
| Add data (record # 8)       |                                                   |                                                                                                                                                                                                                              |
| Backup database             | 0007.4BL and 0008.4BK files (encrypted with key2) | We can restore 0006.4BK and integrate 0006.4BL + 0007.4BL. We can restore 0007.4BK and integrate 0007.4BL                                                                                                                    |
> When restoring a backup and integrating one or several .4BL files, the restored .4BK and .4BL files must have the same encryption key. During the integration process, if no valid encryption key is found in the 4D keychain when the .4BL file is integrated, an error is generated.
> 
> If you have stored successive data keys on the same external device, restoring a backup and integrating log files will automatically find the matching key if the device is connected.
