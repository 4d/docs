---
id: analysis
title: ログ解析ページ
sidebar_label: ログ解析ページ
---

ログ解析ページを使用して、カレントログファイルに記録された内容を見ることができます。 この機能はアプリケーション利用状況の解析、エラーや不具合の原因となった処理を探すなどの場合に役立ちます。 クライアント/サーバーモードの場合、各クライアントマシンごとの操作を検証することもできます。

> データベースのデータに対しておこなわれた操作をロールバックさせることもできます。 For more information, refer to [Rollback page](rollback.md).

![](../assets/en/MSC/MSC_analysis.png)

ログファイルに記録された操作は行として表示されます。 各操作の様々な情報が列に表示されます。 ヘッダーをドラッグすることによって列の並び順を変えることもできます。

この情報を使用して各操作のソースとコンテキストを識別できます:

- **Operation**: Sequence number of operation in the log file.

- **Action**: Type of operation performed on the data. この列には以下の操作のいずれかが記録されます:
  - データファイルを開く: データファイルを開いた
  - データファイルを閉じる: 開いたデータファイルを閉じた
  - コンテキストの作成する: 実行コンテキストを指定するプロセスを作成した
  - コンテキストを閉じる: プロセスを閉じた
  - 追加: レコードを作成、格納した
  - BLOB を追加: BLOBフィールドに BLOB を格納した
  - 削除: レコードを削除した
  - 更新: レコードを更新した
  - トランザクションの開始: トランザクションを開始した
  - トランザクションの受け入れ: トランザクションを受け入れた
  - トランザクションのキャンセル: トランザクションをキャンセルした
  - Update context: Change in extra data (e.g. a call to `CHANGE CURRENT USER` or `SET USER ALIAS`).

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.

- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.

- **Process**: Internal number of process in which the operation was carried out. この内部番号は処理のコンテキストに対応します。

- **Size**: Size (in bytes) of data processed by the operation.

- **Date and Hour**: Date and hour when the operation was performed.

- **System User**: System name of the user that performed the operation. クライアント/サーバーモードでは、クライアントマシン名が表示されます。シングルユーザーモードでは、ユーザーのセッション名が表示されます。

- **4D User**: 4D user name of the user that performed the operation. ユーザーに対してエイリアスが設定されていた場合、4Dユーザー名の代わりのそのエイリアスが表示されます。

- **Values**: Values of fields for the record in the case of addition or modification. 値はセミコロン “;” で区切られます。 Only values represented in alphanumeric form are displayed.\
  _**Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column._

- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected application (named by default dataname.journal). <strong x-id="1">ブラウズ</strong>ボタンをクリックすると、アプリケーションの他のログファイルを選択できます。 The **Export...** button can be used to export the contents of the file as text.
