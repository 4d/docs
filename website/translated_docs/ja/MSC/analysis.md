---
id: analysis
title: ログ解析ページ
sidebar_label: ログ解析ページ
---

ログ解析ページを使用して、カレントログファイルに記録された内容を見ることができます。 この機能はデータベース利用状況の解析、エラーや不具合の原因となった処理を探すなどの場合に役立ちます。 クライアント/サーバーモードの場合、各クライアントマシンごとの操作を検証することもできます。
> データベースのデータに対しておこなわれた操作をロールバックさせることもできます。 詳細は [ロールバック](rollback.md) ページを参照してください。

![](assets/en/MSC/MSC_analysis.png)

ログファイルに記録された操作は行として表示されます。 各操作の様々な情報が列に表示されます。 ヘッダーをドラッグすることによって列の並び順を変えることもできます。

この情報を使用して各操作のソースとコンテキストを識別できます:

- **Operation**: Sequence number of operation in the log file.
- **Action**: Type of operation performed on the data. This column can contain one of the following operations:
    - Opening of Data File: Opening of a data file.
    - Closing of Data File: Closing of an open data file.
    - Creation of a Context: Creation of a process that specifies an execution context.
    - Closing of a Context: Closing of process.
    - Addition: Creation and storage of a record.
    - Adding a BLOB: Storage of a BLOB in a BLOB field.
    - Deletion: Deletion of a record.
    - Modification: Modification of a record.
    - Start of Transaction: Transaction started.
    - Validation of Transaction: Transaction validated.
    - Cancellation of Transaction: Transaction cancelled.

- **Table**: Table to which the added/deleted/modified record or BLOB belongs.
- **Primary Key/BLOB**: contents of the primary key for each record (when the primary key consists of several fields, the values are separated by semi-colons) or sequence number of the BLOB involved in the operation.
- **Process**: Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **User**: Name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the ID of the user is displayed. If the 4D passwords are not enabled, this column is blank.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected database (named by default dataname.journal). The Browse button can be used to select and open another log file for the database. The **Export...** button can be used to export the contents of the file as text.
