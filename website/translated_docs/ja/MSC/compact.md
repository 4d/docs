---
id: compact
title: 圧縮ページ
sidebar_label: 圧縮ページ
---

このページは、データファイルの圧縮機能にアクセスするときに使用します。

## ファイルを圧縮する理由

ファイルの圧縮は以下のニーズに応えるためにおこないます:

- **ファイルのサイズの削減と最適化**: ファイルには使っていないスペースがあるかもしれません。 実際、レコードを削除すると、それらがファイル上で占有していたスペースが空になります。 4D はできる限りこういったスペースを再利用しますが、データのサイズは可変なため、連続的に削除や変更をおこなうと、必然的にプログラムにとって使用不可のスペースが作り出されます。 大量のデータが削除された直後についても同じことが言えます: 空のスペースはそのままファイルに残ります。 データファイルのサイズと、実際にデータに使われているスペースの比率をデータの使用率と呼びます。 使用率が低すぎると、スペースが無駄なだけではなく、データベースパフォーマンスの低下につながります。 圧縮は空きスペースを取り除き、データのストレージを再編成、最適化するためにおこないます。 "情報" エリアには、フラグメンテーションに関するデータが要約され、必要な操作が表示されます。 MSC の情報ページの [データ](information.md#データ) タブには、カレントデータファイルのフラグメンテーション情報が表示されます。

- **Complete updating of data** by applying the current formatting set in the structure file. This is useful when data from the same table were stored in different formats, for example after a change in the database structure.
> 圧縮はメンテナンスモードでのみ可能です。 If you attempt to carry out this operation in standard mode, a warning dialog box will inform you that the application will be closed and restarted in maintenance mode. You can compact a data file that is not opened by the application (see [Compact records and indexes](#compact-records-and-indexes) below).

## 通常モード

データの圧縮を開始するには、MSC ウィンドウの圧縮ボタンをクリックします。

![](assets/en/MSC/MSC_compact.png)
> 圧縮はオリジナルファイルのコピーを伴うため、ファイルが格納されているディスクに十分な空きスペースがない場合、ボタンは使用不可になります。

この操作は、メインファイルの他、インデックスファイルもすべて圧縮します。 4D はオリジナルファイルをコピーし、オリジナルファイルの隣に作成された **Replaced Files (Compacting)** フォルダーにそれらを置きます。 圧縮操作を複数回実行すると、毎回新しいフォルダーが作成されます。 フォルダー名は、"Replaced Files (Compacting)_1", "Replaced Files (Compacting)_2" のようになります。 元のファイルのコピー先は、特殊モードを使って変更できます。

操作が完了すると、圧縮ファイルは自動的にオリジナルファイルと置き換えられます。 The application is immediately operational without any further manipulation.
> データベースが暗号化されている場合、復号化と暗号化のステップが圧縮過程に含まれるため、カレントデータの暗号化キーが必要になります。 有効なデータキーが未提供の場合には、パスフレーズまたはデータキーを要求するダイアログボックスが表示されます。

**警告**: 圧縮操作は毎回オリジナルファイルのコピーを伴うため、アプリケーションフォルダーのサイズが大きくなります。 アプリケーションのサイズが過剰に増加しな いよう、これを考慮することが大切です (とくに、4Dアプリケーションがパッケージとして表示される macOS の場合)。 パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除することも役立ちます。

## ログファイルを開く

After compacting is completed, 4D generates a log file in the Logs folder of the project. このファイルを使用すると実行されたオペレーションをすべて閲覧することができます。 It is created in XML format and named:  *ApplicationName**_Compact_Log_yyyy-mm-dd hh-mm-ss.xml*" where:

- *ApplicationName* は拡張子を除いたプロジェクトファイルの名前です (例: "Invoices" 等)
- *yyyy-mm-dd hh-mm-ss* はファイルのタイムスタンプです。これはローカルのシステム時間でメンテナンスオペレーションが開始された時刻に基づいています (例: "2019-02-11 15-20-45")。

**ログファイルを開く** ボタンをクリックすると、4Dはマシンのデフォルトブラウザーを使用して直近のログファイルを開きます。


## 詳細モード

圧縮ページには、データファイル圧縮のオプションページにアクセスするための **特殊 >** ボタンがあります。

### レコードとインデックスを圧縮

**レコードとインデックスを圧縮** には、カレントデータファイルのパス名と、他のデータファイルを指定するのに使用する **[...]** ボタンが表示されます。 このボタンをクリックすると標準のファイルを開くダイアログが表示され、圧縮するデータファイルを選択することができます。 開かれているストラクチャーファイルと互換性のあるデータファイルを選択しなければなりません。 このダイアログボックスを受け入れると、圧縮するファイルのパス名が更新されます。

2つめの **[...]** ボタンを使用して、圧縮処理前に元ファイルをコピーする保存先を変更できます。 とくに大きなデータファイルを圧縮する際、コピー先を別のディスクに変更するためにこのオプションを使用します。

### レコードの強制更新

このオプションが選択されていると、4D は現在のストラクチャー定義に基づき、圧縮処理中に各テーブルのすべてのレコードを再保存します。 このオプションが選択されていないと、4D は単にディスク上のデータの並びを再構成するだけです。 このオプションは以下のケースで有用です:

- アプリケーションストラクチャーのフィールド型がデータ入力後に変更された場合、 たとえば倍長整数型を実数型に変更したようなケースです。 4D では (データを失うリスクがあるにしても) まったく異なる型に変更することさえ可能です。たとえば、実数型をテキスト型にすることができます。 この場合、4Dは既に入力されたデータを遡及的に変換することはしません。データはレコードがロードされ保存される際に変換されます。 このオプションを使用すればデータの変換を強制できます。

- When an external storage option for Text, Picture or BLOB data has been changed after data were entered. This can happen when databases are converted from a version prior to v13. As is the case with the retyping described above, 4D does not convert data already entered retroactively. To do this, you can force records to be updated in order to apply the new storage mode to records that have already been entered.

- When tables or fields were deleted. In this case, compacting with updating of records recovers the space of these removed data and thus reduces file size.
> All the indexes are updated when this option is selected.

### Compact address table
(option only active when preceding option is checked)

This option completely rebuilds the address table for the records during compacting. This optimizes the size of the address table and is mainly used for databases where large volumes of data were created and then deleted. In other cases, optimization is not a decisive factor.

Note that this option substantially slows compacting and invalidates any sets saved using the `SAVE SET` command. Moreover, we strongly recommend deleting saved sets in this case because their use can lead to selections of incorrect data.
> - Compacting takes records of tables that have been put into the Trash into account. If there are a large number of records in the Trash, this can be an additional factor that may slow down the operation.
> - Using this option makes the address table, and thus the database, incompatible with the current journal file (if there is one). It will be saved automatically and a new journal file will have to be created the next time the application is launched.
> - You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the [Information](information.md) page of the MSC.
