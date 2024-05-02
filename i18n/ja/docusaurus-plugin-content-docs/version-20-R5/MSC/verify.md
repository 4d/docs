---
id: verify
title: 検査ページ
sidebar_label: 検査ページ
---

このページでは、データおよび構造上の整合性を検査できます。 検査は、レコードおよびインデックスについて実行できます。
この機能は検査のみをおこないます。 If errors are found and repairs are needed, you will be advised to use the [Repair page](repair.md).

## アクション

このページには、検査機能に直接アクセスするための、次のアクションボタンが置かれています。

> データベースが暗号化されている場合、検査の中には暗号化されたデータの整合性の評価も含まれます。 有効なデータキーがまだ提供されていない場合、パスフレーズ、あるいはデータキーを要求するダイアログが表示されます。

- **Verify the records and the indexes:** Starts the total data verification procedure.
- **Verify the records only**: Starts the verification procedure for records only (indexes are not verified).
- **Verify the indexes only**: Starts the verification procedure for indexes only (records are not verified).

> レコードとインデックスの検査は、テーブルごとに検査する詳細モードでおこなうこともできます (後述の "詳細" の章を参照ください)。

## ログファイルを開く

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. このファイルには実行された検査の内容が記録され、エラーがあればそれも示されます。問題がない場合は [OK] が表示されます。 It is created in XML format and is named: _ApplicationName__Verify_Log__yyyy-mm-dd hh-mm-ss_.xml where:

- _ApplicationName_ is the name of the project file without any extension, for example "Invoices",
- _yyyy-mm-dd hh-mm-ss_ is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.

## 詳細

The **Table list** button displays a detailed page that can be used to view and select the actual records and indexes to be checked:

![](../assets/en/MSC/MSC_Verify.png)

検査する項目を指定することにより、検査処理にかかる時間を短縮できます。

リストには、データベースの全テーブルが表示されます。 各テーブルに対して、検査対象をレコードやインデックスに限定できます。 三角形のアイコンをクリックしてテーブルまたはインデックス付フィールドの内容を展開し、要求に応じてチェックボックスにチェックを入れたり解除したりします。 デフォルトでは、すべての項目にチェックが入っています。 You can also use the **Select all**, **Deselect all**, **All records** and **All indexes** shortcut buttons.

テーブルの各行に対して、"アクション" カラムは実行する操作を表示します。 テーブルが展開されると、"レコード" および "インデックスフィールド" の行は関連する項目の数を表示します。

"ステータス" カラムは、記号を使用して各項目の検査ステータスを表示します:

| ![](../assets/en/MSC/MSC_OK.png)  | 検査の結果、問題はなかった  |
| --------------------------------- | -------------- |
| ![](../assets/en/MSC/MSC_KO2.png) | 検査の結果、問題が見つかった |
| ![](../assets/en/MSC/MSC_KO3.png) | 検査は部分的に実行された   |
| ![](../assets/en/MSC/MSC_KO.png)  | 検査は実行されなかった    |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).

> 標準ページは、詳細ページでおこなわれた変更はまったく考慮しません。標準ページの検査ボタンをクリックすると、すべての項目が検査されます。 逆に、詳細ページでおこなわれた設定は、セッションからセッションへと保持されます。
