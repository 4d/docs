---
id: repair
title: 修復ページ
sidebar_label: 修復ページ
---

このページは、データファイルが損傷を受けたとき、それを修復するために使用します。 Generally, you will only use these functions at the request of 4D, when anomalies have been detected while opening the application or following a [verification](verify.md).

**警告**: 修復操作は毎回オリジナルファイルのコピーを伴うため、アプリケーションフォルダーのサイズが大きくなります。 It is important to take this into account (especially in macOS where 4D applications appear as packages) so that the size of the application does not increase excessively. パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除することも役立ちます。
> 修復はメンテナンスモードでのみ可能です。 If you attempt to carry out this operation in standard mode, a warning dialog will inform you that the application will be closed and restarted in maintenance mode.
> データベースが暗号化されている場合、復号化と暗号化のステップが修復過程に含まれるため、カレントデータの暗号化キーが必要になります。 有効な暗号化キーがまだ提供されていない場合、パスフレーズ、あるいは暗号化キーを要求するダイアログが表示されます (暗号化ページ参照)。

## データファイル修復

### 修復するデータ
カレントデータファイルのパス名。 **[...]** ボタンを使って、他のデータファイルを指定することができます。 このボタンをクリックすると標準のファイルを開くダイアログが表示され、修復するデータファイルを選択することができます。 [標準の修復](#標準の修復) を実行する場合、開かれたストラクチャーに対応するデータファイルを選択しなければなりません。 [レコードヘッダーによる再生](#レコードヘッダーによる再生) を実行する場合、どのデータファイルでも選択できます。 このダイアログを受け入れると、ウィンドウには修復対象のファイルのパス名が表示されます。

### オリジナルをここに移動
デフォルトで修復処理の前に元のデータファイルが複製されます。 It will be placed in a subfolder named “Replaced files (repairing)” in the application folder. 二つ目の **[...]** ボタンを使用して、複製ファイルの保存先を変更できます。 とくに大きなデータファイルを修復する際、コピー先を別のディスクに変更するためにこのオプションを使用します。

### 修復済ファイル
4Dは元のファイルの場所に空のデータファイルを新規作成します。 The original file is moved into the folder named "\Replaced Files (Repairing) date time" whose location is set in the "Original files backup folder" area (application folder by default). 修復されたデータは、新規作成された空のファイルに格納されます。


## 標準の修復

少数のレコードやインデックスが損傷を受けているケース (アドレステーブルは損傷を受けていない) では、標準の修復を選択します。 データは圧縮および修復されます。 このタイプの修復をおこなうには、データファイルとストラクチャーファイルが対応していなければなりません。

修復操作が完了すると、MSCの "修復" ページが表示され、修復の結果が表示されます。 修復に成功していれば、その旨のメッセージが表示されます。 If so, you can open the application immediately. ![](assets/en/MSC/MSC_RepairOK.png)

## レコードヘッダーによる再生
このローレベルな修復オプションは、データファイルが大きく損傷していて、バックアップの復元や標準の修復など、他の手段では回復できなかった場合にのみ使用します。

4Dのレコードはサイズが可変です。故に、そのレコードをロードするには、ディスク上のどこに格納されているか、その場所を "アドレステーブル" という専用テーブルに記録しておく必要があります。 プログラムは、インデックスやアドレステーブルを経由して、レコードのアドレスにアクセスします。 レコードやインデックスのみが損傷を受けている場合、標準の修復を使用すれば通常は問題が解決されます。 しかし、アドレステーブル自身が損傷を受けている場合には、これを再構築しなくてはならないため、より高度な修復作業が必要となります。 これをおこなうために、MSC は各レコードのヘッダーに位置するマーカーを使用します。 マーカーがレコード情報のサマリーと比較されることにより、アドレステーブルが再構築可能となります。

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear. 
> 
> ヘッダーによる再生において、整合性の制約は考慮されません。 More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

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

After repair is completed, 4D generates a log file in the Logs folder of the project. このファイルを使用すると実行されたオペレーションをすべて閲覧することができます。 It is created in XML format and named: *ApplicationName**_Repair_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *ApplicationName* は拡張子を除いたプロジェクトファイルの名前です (例: "Invoices" 等)
- *yyyy-mm-dd hh-mm-ss* はファイルのタイムスタンプです。これはローカルのシステム時間でメンテナンスオペレーションが開始された時刻に基づいています (例: "2019-02-11 15-20-45")。

**ログファイルを開く** ボタンをクリックすると、4Dはマシンのデフォルトブラウザーを使用して直近のログファイルを開きます。