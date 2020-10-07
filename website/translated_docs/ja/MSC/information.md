---
id: information
title: 情報ページ
sidebar_label: 情報ページ
---

情報ページは 4D環境、システム環境、データベースおよびアプリケーションファイルについての情報を提供します。 各ページは、ウィンドウ上部にあるタブコントロールを使って切り替えできます。

## プログラム

このページにはアプリケーションならびにアクティブな 4Dフォルダーの名前、バージョンおよび場所を表示します (アクティブ4Dフォルダーについては *4Dランゲージリファレンス* の `Get 4D folder` コマンドを参照ください)。

The central part of the window indicates the name and location of the project and data files as well as the log file (if any). The lower part of the window indicates the name of the 4D license holder, the type of license, and the name of the current 4D user.

- **パス名の表示と選択**: **プログラム** タブでは、ディスク上の一連の親フォルダーを表示するポップアップメニューの形でパス名が示されます:  
  ![](assets/en/MSC/MSC_popup.png) メニュー項目 (ディスクまたはフォルダー) を選択した場合、そのパスが新しいシステムウィンドウで開かれます。 **パスをコピー** コマンドは、システムのディレクトリ区切り文字を使用して、完全なパス名をクリップボードにテキストとしてコピーします。

- **ライセンスフォルダー**: **ライセンスフォルダー** ボタンをクリックすると、新しいシステムウィンドウにアクティブなライセンスフォルダーの中身を表示します。 インストールされた 4D環境用のライセンスファイルはすべてこのフォルダーに格納されていなければなりません。 ファイルを Webブラウザーで開くと、ライセンスの情報が表示されます。 ライセンスフォルダーの場所はバージョンや OS により異なります。 このフォルダーの場所については `Get 4D folder` コマンドの説明を参照してください。 ***注**: 上部メニューの "ヘルプ ＞ ライセンスマネージャー..." からアクセスできるダイアログボックスにも同じボタンがあります。*

## テーブル

このページでは、データベース内のテーブルの概要を示します:

![](assets/en/MSC/MSC_Tables.png)
> このページの情報は、標準モードおよびメンテナンスモードの両方で利用可能です。

このページにはデータベースのすべてのテーブル (非表示のテーブルも含む) とそれらの特徴が表示されます:

- **ID**: テーブルの内部番号
- **テーブル**: テーブル名。 削除されたテーブルの名前は括弧付きで表示されます (ゴミ箱の中に残っている場合)。
- **レコード**: テーブル内の総レコード数。 レコードが破損していたり読み込めなかった場合には、数字の代わりに *Error* が表示されます。 この場合、検証と修復ツールの使用を検討してください。
- **フィールド**: テーブル内のフィールド数。 非表示のフィールドはカウントされますが、削除されたフィールドはカウントされません。
- **インデックス**: テーブル内のあらゆるインデックスの数
- **Encryptable**: If checked, the **Encryptable** attribute is selected for the table at the structure level (see "Encryptable" paragraph in the Design Reference Manual).
- **暗号化済み**: チェックされていれば、テーブルのレコードはデータファイルにおいて暗号化されています。 ***Note**: Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the Encrypt page of the MSC.*
- **アドレステーブルサイズ**: 各テーブルのアドレステーブルのサイズ。 The address table is an internal table which stores one element per record created in the table. It actually links records to their physical address. For performance reasons, it is not resized when records are deleted, thus its size can be different from the current number of records in the table. If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see [Compact](compact.md) page). ***Note:** Differences between address table size and record number can also result from an incident during the cache flush.*



## Data

The **Data** page provides information about the available and used storage space in the data file.
> This page cannot be accessed in maintenance mode

The information is provided in graph form:

![](assets/en/MSC/MSC_Data.png)
> This page does not take into account any data that may be stored outside of the data file (see "External storage").

Files that are too fragmented reduce disk, and thus, database performance. If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:![](assets/en/MSC/MSC_infowarn.png)

A warning icon is also displayed on the button of the [Compact](compact.md) page: ![](assets/en/MSC/MSC_compactwarn.png)
