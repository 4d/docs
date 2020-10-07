---
id: verify
title: 検査ページ
sidebar_label: 検査ページ
---

このページでは、データおよび構造上の整合性を検証できます。 検査は、レコードおよびインデックスについて実行できます。 この機能は検査のみをおこないます。 エラーが見つかり修復が必要な場合は [修復ページ](repair.md) を使用するよう表示されます。


## アクション

このページには、検査機能に直接アクセスするための、次のアクションボタンが置かれています。
> データベースが暗号化されている場合、検査の中には暗号化されたデータの整合性の評価も含まれます。 有効なデータキーがまだ提供されていない場合、パスフレーズ、あるいはデータキーを要求するダイアログが表示されます。


- **レコードとインデックスを検査**: 全体のデータ検査処理を開始します。
- **レコードのみを検査**: レコードのみの検査処理を開始します (インデックスは検査されません)。
- **インデックスのみを検査**: インデックスのみの検査処理を開始します (レコードは検査されません)。
> レコードとインデックスの検査は、テーブルごとに検査する詳細モードでおこなうこともできます(後述の ”詳細” の章を参照してください)。


## Open log file

Regardless of the verification requested, 4D generates a log file in the `Logs` folder of the application. このファイルには実行された検証の内容が記録され、エラーがあればそれも示されます。問題がない場合は [OK] が表示されます。 It is created in XML format and is named: *ApplicationName*_Verify_Log_*yyyy-mm-dd hh-mm-ss*.xml where:

- *ApplicationName* is the name of the project file without any extension, for example "Invoices",
- *yyyy-mm-dd hh-mm-ss* is the timestamp of the file, based upon the local system time when the maintenance operation was started, for example "2019-02-11 15-20-45".

When you click on the **Open log file** button, 4D displays the most recent log file in the default browser of the machine.


## 詳細

**テーブルリスト** ボタンは、検査するレコードおよびインデックスを選択するために使用する詳細ページを表示します:

![](assets/en/MSC/MSC_Verify.png)


検査する項目を指定することにより、検証処理にかかる時間を短縮できます。

リストには、データベースの全テーブルが表示されます。 各テーブルに対して、検査対象をレコードやインデックスに限定できます。 三角形のアイコンをクリックしてテーブルまたはインデックス付フィールドの内容を展開し、要求に応じてチェックボックスにチェックを入れたり解除したりします。 デフォルトでは、すべての項目にチェックが入っています。 **すべて選択**、**すべての選択をはずす**、**すべてのレコード** および **すべてのインデックス** のショートカットボタンも使用できます。

For each row of the table, the "Action" column indicates the operations to be carried out. When the table is expanded, the "Records" and "Indexed fields" rows indicate the number of items concerned.

The "Status" column displays the verification status of each item using symbols:

| ![](assets/en/MSC/MSC_OK.png)  | Verification carried out with no problem       |
| ------------------------------ | ---------------------------------------------- |
| ![](assets/en/MSC/MSC_KO2.png) | Verification carried out, problems encountered |
| ![](assets/en/MSC/MSC_KO3.png) | Verification partially carried out             |
| ![](assets/en/MSC/MSC_KO.png)  | Verification not carried out                   |

Click on **Verify** to begin the verification or on **Standard** to go back to the standard page.

The **Open log file** button can be used to display the log file in the default browser of the machine (see [Open log file](#open-log-file) above).
> The standard page will not take any modifications made on the detailed page into account: when you click on a verification button on the standard page, all the items are verified. On the other hand, the settings made on the detailed page are kept from one session to another.
