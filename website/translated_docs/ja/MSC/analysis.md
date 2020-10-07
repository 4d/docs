---
id: analysis
title: ログ解析ページ
sidebar_label: ログ解析ページ
---

ログ解析ページを使用して、カレントログファイルに記録された内容を見ることができます。 This function is useful for parsing the use of an application or detecting the operation(s) that caused errors or malfunctions. In the case of an application in client-server mode, it allows verifying operations performed by each client machine.
> データベースのデータに対しておこなわれた操作をロールバックさせることもできます。 詳細は [ロールバック](rollback.md) ページを参照してください。

![](assets/en/MSC/MSC_analysis.png)

ログファイルに記録された操作は行として表示されます。 各操作の様々な情報が列に表示されます。 ヘッダーをドラッグすることによって列の並び順を変えることもできます。

この情報を使用して各操作のソースとコンテキストを識別できます:

- **操作**: ログファイル中での一連の操作番号
- **アクション**: データに対しておこなわれた操作のタイプ。 この列には以下の操作のいずれかが記録されます:
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
- **Process**: Internal number of process in which the operation was carried out. This internal number corresponds to the context of the operation.
- **Size**: Size (in bytes) of data processed by the operation.
- **Date and Hour**: Date and hour when the operation was performed.
- **System User**: System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.
- **Values**: Values of fields for the record in the case of addition or modification. The values are separated by “;”. Only values represented in alphanumeric form are displayed.  
  ***Note:** If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in this column.*
- **Records**: Record number.

Click on **Analyze** to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. The **Export...** button can be used to export the contents of the file as text.

