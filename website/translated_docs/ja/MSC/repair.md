---
id: repair
title: 修復ページ
sidebar_label: 修復ページ
---

このページは、データファイルが損傷を受けたとき、それを修復するために使用します。 一般的にこれらの機能は、4Dから要求を受けたときに実行します。4Dは起動時や MSC による検査 (検査ページ参照) の結果データベースに損傷を見つけたときに修復を促します。

**警告**: 修復操作は毎回オリジナルファイルのコピーを伴うため、アプリケーションフォルダーのサイズが大きくなります。 It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除することも役立ちます。
> 修復はメンテナンスモードでのみ可能です。 標準モードでこの操作を実行しようとすると、警告ダイアログが表示され、データベースを終了してメンテナンスモードで再起動することを知らせます。
> データベースが暗号化されている場合、復号化と暗号化のステップが修復過程に含まれるため、カレントデータの暗号化キーが必要になります。 有効な暗号化キーがまだ提供されていない場合、パスフレーズ、あるいは暗号化キーを要求するダイアログが表示されます (暗号化ページ参照)。

## File overview

### 修復するデータ
カレントデータファイルのパス名。 **[...]** ボタンを使って、他のデータファイルを指定することができます。 このボタンをクリックすると標準のファイルを開くダイアログが表示され、修復するデータファイルを選択することができます。 [標準の修復](#標準の修復) を実行する場合、開かれたストラクチャーに対応するデータファイルを選択しなければなりません。 [レコードヘッダーによる再生](#レコードヘッダーによる再生) を実行する場合、どのデータファイルでも選択できます。 このダイアログを受け入れると、ウィンドウには修復対象のファイルのパス名が表示されます。

### Original files backup folder
By default, the original data file will be duplicated before the repair operation. It will be placed in a subfolder named “Replaced files (repairing)” in the database folder. The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. This option can be used more particularly when repairing voluminous files while using different disks.

### Repaired files
4D creates a new blank data file at the location of the original file. The original file is moved into the folder named "\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (database folder by default). The blank file is filled with the recovered data.


## 標準の修復

Standard repair should be chosen when only a few records or indexes are damaged (address tables are intact). The data is compacted and repaired. This type of repair can only be performed when the data and structure file match.

When the repair procedure is finished, the "Repair" page of the MSC is displayed. A message indicates if the repair was successful. If so, you can open the database immediately. ![](assets/en/MSC/MSC_RepairOK.png)

## レコードヘッダーによる再生
Use this low-level repair option only when the data file is severely damaged and after all other solutions (restoring from a backup, standard repair) have proven to be ineffective.

4D records vary in size, so it is necessary to keep the location where they are stored on disk in a specific table, named address table, in order to find them again. The program therefore accesses the address of the record via an index and the address table. If only records or indexes are damaged, the standard repair option is usually sufficient to resolve the problem. However, when the address table itself is affected, it requires a more sophisticated recovery since it will be necessary to reconstitute it. To do this, the MSC uses the marker located in the header of each record. The markers are compared to a summary of the record, including the bulk of their information, and from which it is possible to reconstruct the address table.

> If you have deselected the **Records definitively deleted** option in the properties of a table in the database structure, performing a recovery by header markers may cause records that were previously deleted to reappear. Recovery by headers does not take integrity constraints into account. More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. When the scan is complete, the results appear in the following window:

![](assets/en/MSC/mscrepair2.png)
> If all the records and all the tables have been assigned, only the main area is displayed.

The "Records found in the data file" area includes two tables summarizing the information from the scan of the data file.

- The first table lists the information from the data file scan. Each row shows a group of recoverable records in the data file:
    - The **Order** column indicates the recovery order for the group of records.
    - The **Count** column indicates the number of the records in the table.
    - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. The names of tables assigned automatically appear in green. Groups that were not assigned, i.e. tables that could not be associated with any records appear in red.
    - The **Recover** column lets you indicate, for each group, whether you want to recover the records. By default, this option is checked for every group with records that can be associated with a table.

- The second table lists the tables of the project file.


### Manual assigning
If several groups of records could not be assigned to tables due to a damaged address table, you can assign them manually. To do this, first select an unassigned group of records in the first table. The "Content of the records" area then displays a preview of the contents of the first records of the group to make it easier to assign them:

![](assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. You can also assign a table using drag and drop. The group of records is then associated with the table and it will be recovered in this table. The names of tables that are assigned manually appear in black. Use the **Ignore records** button to remove the association made manually between the table and the group of records.


## ログファイルを開く

After repair is completed, 4D generates a log file in the Logs folder of the database. このファイルを使用すると実行されたオペレーションをすべて閲覧することができます。 It is created in XML format and named:  *DatabaseName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *DatabaseName* は拡張子を除いたプロジェクトファイルの名前です (例: "Invoices" 等)
- *yyyy-mm-dd hh-mm-ss* はファイルのタイムスタンプです。これはローカルのシステム時間でメンテナンスオペレーションが開始された時刻に基づいています (例: "2019-02-11 15-20-45")。

**ログファイルを開く** ボタンをクリックすると、4Dはマシンのデフォルトブラウザーを使用して直近のログファイルを開きます。
