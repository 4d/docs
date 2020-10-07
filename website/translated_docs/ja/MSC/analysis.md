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

- **テーブル**: 追加/削除/更新されたレコードまたは BLOB の所属テーブル
- **プライマリーキー/BLOB**: 各レコードのプライマリーキーのコンテンツ (プライマリーキーが複数のフィールドから構成されているときには、値はセミコロンで区切られています)、またはオペレーションに関連した BLOB のシーケンス番号
- **プロセス**: 処理が実行された内部プロセス番号。 この内部番号は処理のコンテキストに対応します。
- **サイズ**: 操作により処理されたデータのサイズ (バイト単位)
- **日付と時刻**: 処理が実行された日付と時刻
- **System User**: System name of the user that performed the operation. In client-server mode, the name of the client-side machine is displayed; in single-user mode, the session name of the user is displayed.
- **4D User**: 4D user name of the user that performed the operation. If an alias is defined for the user, the alias is displayed instead of the 4D user name.
- **値**: レコードの追加や更新の場合、フィールドの値。 値はセミコロン “;” で区切られます。 文字形式に表現できる値のみを表示します。  
  ***注**: データベースが暗号化されており、開かれたログファイルに対応する有効なデータキーが提供されていない場合、暗号化された値はこのカラムには表示されません。*
- **レコード**: レコード番号

Click on **Analyze** to update the contents of the current log file of the selected application (named by default dataname.journal). The Browse button can be used to select and open another log file for the application. The **Export...** button can be used to export the contents of the file as text.

