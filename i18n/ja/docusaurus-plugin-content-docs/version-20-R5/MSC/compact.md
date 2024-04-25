---
id: compact
title: 圧縮ページ
sidebar_label: 圧縮ページ
---

このページは、データファイルの圧縮機能にアクセスするときに使用します。

## ファイルを圧縮する理由

ファイルの圧縮は以下のニーズに応えるためにおこないます:

- **Reducing size and optimization of files**: Files may contain unused spaces (“holes”). 実際、レコードを削除すると、それらがファイル上で占有していたスペースが空になります。 4D はできる限りこういったスペースを再利用しますが、データのサイズは可変なため、連続的に削除や変更をおこなうと、必然的にプログラムにとって使用不可のスペースが作り出されます。 大量のデータが削除された直後についても同じことが言えます: 空のスペースはそのままファイルに残ります。
  データファイルのサイズと、実際にデータに使われているスペースの比率をデータの使用率と呼びます。 使用率が低すぎると、スペースが無駄なだけではなく、データベースパフォーマンスの低下につながります。 圧縮は空きスペースを取り除き、データのストレージを再編成、最適化するためにおこないます。
  "情報" エリアには、フラグメンテーションに関するデータが要約され、必要な操作が表示されます。 The [Data](information.md#data) tab on the “Information” page of the MSC indicates the fragmentation of the current data file.

- **Complete updating of data** by applying the current formatting set in the structure file. 同じテーブルのデータが異なる形式で保存されている場合 (たとえばデータベースストラクチャーに変更を加えたとき) に便利です。

> 圧縮はメンテナンスモードでのみ可能です。 標準モードでこの操作を実行しようとすると、警告ダイアログボックスが表示され、アプリケーションを終了してメンテナンスモードで再起動することを知らせます。 You can compact a data file that is not opened by the application (see [Compact records and indexes](#compact-records-and-indexes) below).

## 通常モード

データの圧縮を開始するには、MSC ウィンドウの圧縮ボタンをクリックします。

![](../assets/en/MSC/MSC_compact.png)

> 圧縮はオリジナルファイルのコピーを伴うため、ファイルが格納されているディスクに十分な空きスペースがない場合、ボタンは使用不可になります。

この操作は、メインファイルの他、インデックスファイルもすべて圧縮します。 4D copies the original files and puts them in a folder named **Replaced Files (Compacting)**, which is created next to the original file. 圧縮操作を複数回実行すると、毎回新しいフォルダーが作成されます。 フォルダー名は、"Replaced Files (Compacting)_1", "Replaced Files (Compacting)_2" のようになります。 元のファイルのコピー先は、特殊モードを使って変更できます。

操作が完了すると、圧縮ファイルは自動的にオリジナルファイルと置き換えられます。 アプリケーションは即座に操作可能になります。

> データベースが暗号化されている場合、復号化と暗号化のステップが圧縮過程に含まれるため、カレントデータの暗号化キーが必要になります。 有効なデータキーが未提供の場合には、パスフレーズまたはデータキーを要求するダイアログボックスが表示されます。

**Warning:** Each compacting operation involves the duplication of the original file which increases the size of the application folder. アプリケーションのサイズが過剰に増加しな いよう、これを考慮することが大切です (とくに、4Dアプリケーションがパッケージとして表示される macOS の場合)。 パッケージのサイズを小さく保つには、パッケージ内オリジナルファイルのコピーを手動で削除することも役立ちます。

## ログファイルを開く

圧縮が完了すると、4D はプロジェクトの Logs フォルダーにログファイルを生成します。 このファイルを使用すると実行されたオペレーションをすべて閲覧することができます。 このファイルは XML形式で作成され、<em x-id="3">ApplicationName_Compact_Log_yyyy-mm-dd hh-mm-ss.xml</em> というファイル名がつけられます。

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## 詳細モード

The Compact page contains an **Advanced>** button, which can be used to access an options page for compacting data file.

### レコードとインデックスを圧縮

The **Compact records and indexes** area displays the pathname of the current data file as well as a **[...]** button that can be used to specify another data file. このボタンをクリックすると標準のファイルを開くダイアログが表示され、圧縮するデータファイルを選択することができます。 開かれているストラクチャーファイルと互換性のあるデータファイルを選択しなければなりません。 このダイアログボックスを受け入れると、圧縮するファイルのパス名が更新されます。

The second **[...]** button can be used to specify another location for the original files to be saved before the compacting operation. とくに大きなデータファイルを圧縮する際、コピー先を別のディスクに変更するためにこのオプションを使用します。

### レコードの強制更新

このオプションが選択されていると、4D は現在のストラクチャー定義に基づき、圧縮処理中に各テーブルのすべてのレコードを再保存します。 このオプションが選択されていないと、4D は単にディスク上のデータの並びを再構成するだけです。 このオプションは以下のケースで有用です:

- アプリケーションストラクチャーのフィールド型がデータ入力後に変更された場合、 たとえば倍長整数型を実数型に変更したようなケースです。 4D では (データを失うリスクがあるにしても) まったく異なる型に変更することさえ可能です。たとえば、実数型をテキスト型にすることができます。
  この場合、4Dは既に入力されたデータを遡及的に変換することはしません。データはレコードがロードされ保存される際に変換されます。 このオプションを使用すればデータの変換を強制できます。

- データが入力された後にテキスト、ピクチャー、または BLOB の外部保存オプションが変更された場合。 これはとくに v13以前からデータベースを変換した場合に発生します。 前述の型変更と同様、4Dはすでに入力されたデータを遡及的に変換しません。 入力済みデータに対して新しい保存設定を適用するために、このオプションを選択して圧縮をおこないます。

- テーブルやフィールドが削除された場合。 この場合、レコードの再保存をおこないながら圧縮することで、削除された領域を圧縮することができ、ファイルサイズを減らすことができます。

> このオプションが選択されていると、すべてのインデックスが更新されます。

### アドレステーブル圧縮

(レコードの強制更新を選択した場合にのみ選択可能)

このオプションを使用すると圧縮の際、レコードのアドレステーブルを完全に再構築します。 これによりアドレステーブルのサイズが最適化されます。このオプションは主に大量のデータを作成し、そして削除したような場合に使用します。 そうでない場合、最適化に明白な意味はありません。

Note that this option substantially slows compacting and invalidates any sets saved using the `SAVE SET` command. そのため、この場合には保存したセットはすべて削除するよう強く推奨します。そうでなければ不正なデータセットを使用することになります。

:::note 注記

- 圧縮は、ゴミ箱に入れられたテーブルのレコードも対象とします。 ゴミ箱に大量のレコードがある場合、処理が遅くなる原因となります。
- このオプションを使用すると、アドレステーブルは (それに伴ってデータベースそのものも) カレントログファイルとの互換性を失います。 ログファイルは自動で保存され、次回アプリケーションを起動した際に新しいログファイルが作成されなければなりません。
- You can decide if the address table needs to be compacted by comparing the total number of records and the address table size in the [Information](information.md) page of the MSC.
- The [`TRUNCATE TABLE`](https://doc.4d.com/4dv19R/help/command/en/page1051.html) command automatically resets the address table for the specified table.

:::
