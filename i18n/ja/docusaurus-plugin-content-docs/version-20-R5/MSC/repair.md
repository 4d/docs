---
id: repair
title: 修復ページ
sidebar_label: 修復ページ
---

このページは、データファイルが損傷を受けたとき、それを修復するために使用します。 Generally, you will only use these functions under the supervision of 4D technical teams, when anomalies have been detected while opening the application or following a [verification](verify.md).

**Warning:** Each repair operation involves the duplication of the original file, which increases the size of the application folder. アプリケーションのサイズが過剰に増加しな いよう、これを考慮することが大切です (とくに、4Dアプリケーションがパッケージとして表示される macOS の場合)。 パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除することも役立ちます。

> 修復はメンテナンスモードでのみ可能です。 標準モードでこの操作を実行しようとすると、警告ダイアログが表示され、アプリケーションを終了してメンテナンスモードで再起動することを知らせます。

> データベースが暗号化されている場合、復号化と暗号化のステップが修復過程に含まれるため、カレントデータの暗号化キーが必要になります。 有効な暗号化キーがまだ提供されていない場合、パスフレーズ、あるいは暗号化キーを要求するダイアログが表示されます (暗号化ページ参照)。

## データファイル修復

### 修復するデータ

カレントデータファイルのパス名。 The **[...]** button can be used to specify another data file. このボタンをクリックすると標準のファイルを開くダイアログが表示され、修復するデータファイルを選択することができます。 If you perform a [standard repair](#standard-repair), you must select a data file that is compatible with the open project file. If you perform a [recover by record headers](#recover-by-record-headers) repair, you can select any data file. このダイアログを受け入れると、ウィンドウには修復対象のファイルのパス名が表示されます。

### オリジナルをここに移動

デフォルトで修復処理の前に元のデータファイルが複製されます。 このファイルは、アプリケーションフォルダーの "Replaced files (repairing)" サブフォルダーに配置されます。 The second **[...]** button can be used to specify another location for the original files to be saved before repairing begins. とくに大きなデータファイルを修復する際、コピー先を別のディスクに変更するためにこのオプションを使用します。

### 修復済ファイル

4Dは元のファイルの場所に空のデータファイルを新規作成します。 元のファイルは、"\Replaced Files (Repairing) {日付} {時刻}"という名前のフォルダーがオリジナルの移動先に指定したフォルダー内に作成され (デフォルトはアプリケーションフォルダー)、そこに移動されます。 修復されたデータは、新規作成された空のファイルに格納されます。

## 標準の修復

少数のレコードやインデックスが損傷を受けているケース (アドレステーブルは損傷を受けていない) では、標準の修復を選択します。 データは圧縮および修復されます。 このタイプの修復をおこなうには、データファイルとストラクチャーファイルが対応していなければなりません。

修復操作が完了すると、MSCの "修復" ページが表示され、修復の結果が表示されます。 修復に成功していれば、その旨のメッセージが表示されます。 その場合、アプリケーションをそのまま使い始めることができます。
![](../assets/en/MSC/MSC_RepairOK.png)

## レコードヘッダーによる再生

このローレベルな修復オプションは、データファイルが大きく損傷していて、バックアップの復元や標準の修復など、他の手段では回復できなかった場合にのみ使用します。

4Dのレコードはサイズが可変です。故に、そのレコードをロードするには、ディスク上のどこに格納されているか、その場所を "アドレステーブル" という専用テーブルに記録しておく必要があります。 プログラムは、インデックスやアドレステーブルを経由して、レコードのアドレスにアクセスします。 レコードやインデックスのみが損傷を受けている場合、標準の修復を使用すれば通常は問題が解決されます。 しかし、アドレステーブル自身が損傷を受けている場合には、これを再構築しなくてはならないため、より高度な修復作業が必要となります。 これをおこなうために、MSC は各レコードのヘッダーに位置するマーカーを使用します。 マーカーがレコード情報のサマリーと比較されることにより、アドレステーブルが再構築可能となります。

> If you have deselected the **Records definitively deleted** option in the properties of a table in the structure, performing a recovery by header markers may cause records that were previously deleted to reappear.
>
> ヘッダーによる再生において、整合性の制約は考慮されません。 More specifically, after this operation you may get duplicated values with unique fields or NULL values with fields declared **Never Null**.

When you click on **Scan and repair...**, 4D performs a complete scan of the data file. スキャンを完了すると、結果が以下のウィンドウに表示されます:

![](../assets/en/MSC/mscrepair2.png)

> すべてのレコードおよびすべてのテーブルに割当先が見つかった場合は、メインエリアのみが表示されます。

"データファイル中で見つかったレコード" エリアには 2つのリストがあり、データスキャン結果の概要が表示されます。

- 左のリストには、データファイルスキャンの情報が表示されます。 各行には、データファイル中の再生可能なレコードのグループが表示されます:
  - The **Order** column indicates the recovery order for the group of records.
  - The **Count** column indicates the number of the records in the table.
  - The **Destination table** column indicates the names of tables that were automatically assigned to the groups of identified records. 割り当てられたテーブルの名前は自動で緑色で表示されます。 割り当てされなかったグループ、つまりどのレコードにも関連づけることができなかったテーブルは赤色で表示されます。
  - The **Recover** column lets you indicate, for each group, whether you want to recover the records. デフォルトで、テーブルに割り当てられるすべてのグループが選択されています。

- 右側のリストには、プロジェクトファイルのテーブルが表示されます。

### 手動による割り当て

アドレステーブルが損傷を受けているため、テーブルに割り当てることのできないレコードグループがある場合、それらを手動で割り当てることができます。
これにはまず、左側のリストの中で割り当てられていないレコードグループを選択します。 グループ先頭の複数レコードの内容が "レコードの内容" エリアにプレビューされるため、それがどのテーブルのレコードか判断しやすくなります:

![](../assets/en/MSC/mscrepair3.png)

Next select the table you want to assign to the group in the "Unassigned tables" table and click on the **Identify table** button. 割り当てのためにドラッグ＆ドロップを使用することもできます。
結果そのレコードグループは選択したテーブルに割り当てられ、そのテーブルのレコードとして再生されます。 手動で割り当てられたテーブルはリスト中黒色で表示されます。
Use the **Ignore records** button to remove the association made manually between the table and the group of records.

## ログファイルを開く

修復が完了すると、4D はプロジェクトの Logsフォルダーにログファイルを生成します。 このファイルを使用すると実行されたオペレーションをすべて閲覧することができます。 このファイルは XML形式で作成され、<em x-id="3">ApplicationName_Repair_Log_yyyy-mm-dd hh-mm-ss.xml</em> というファイル名がつけられます。

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.
