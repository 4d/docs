---
id: rollback
title: ロールバックページ
sidebar_label: ロールバックページ
---

このページは、データファイルに対して実行された操作をロールバックする機能を提供します。 この機能は、複数レベルに適用された取り消し機能に似ています。 この機能はとくに、間違ってデータベースレコードを削除した場合に便利です。

この機能は、アプリケーションのログファイルが有効なときにのみ使用できます。

![](../assets/en/MSC/MSC_rollback1.png)

> If the database is encrypted and no valid data key corresponding to the open log file has been provided, encrypted values are not displayed in the **Values** column and a dialog requesting the passphrase or the data key is displayed if you click the **Rollback** button.

The contents and functioning of the list of operations are the same as for the [Activity analysis](analysis.md) window.

操作のロールバックをおこなうには、それ以降の全操作をキャンセルする行を選択します。 選択された行が保持される最後の操作になります。 たとえば削除をキャンセルしたい場合、その削除操作のひとつ前の行を選択します。 すると、削除操作とそれ以降の処理がすべてキャンセルされます。

![](../assets/en/MSC/MSC_rollback2.png)

Next click on the **Rollback** button. 4Dは処理を続行してもよいか、確認してきます。 If you click **OK**, the data is then restored to the exact state it was in at the moment of the selected action.

アーカイブされたファイルから復旧したデータベースに対してロールバックをおこなう場合には、ウィンドウの下部にあるメニューを使用して適用するログファイルを選択できます。 この場合、アーカイブに対応するログファイルを指定しなければなりません。

Here is how the rollback function works: when the user clicks the **Rollback** button, 4D shuts the current database and restores the last backup of the database data. 復元されたデータベースが開かれ、4Dはログファイル中で選択された操作までを統合します。 データベースがまだ保存されていない場合、4Dは空のデータファイルを使います。
