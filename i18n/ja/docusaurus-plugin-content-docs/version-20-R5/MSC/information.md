---
id: information
title: 情報ページ
sidebar_label: 情報ページ
---

情報ページは 4D環境、システム環境、データベースおよびアプリケーションファイルについての情報を提供します。 各ページは、ウィンドウ上部にあるタブコントロールを使って切り替えできます。

## プログラム

This page indicates the name, version and location of the application as well as the active 4D folder (for more information about the active 4D folder, refer to the description of the `Get 4D folder` command in the _4D Language Reference_ manual).

ウィンドウの中央部は、プロジェクトならびにデータファイルとログファイル (あれば) の名前および場所を表示します。 ウィンドウの下部は、4Dライセンスフォルダーの名前、ライセンスのタイプ、および、カレント 4Dユーザーの名前を表示します。

- **Display and selection of pathnames**: On the **Program** tab, pathnames are displayed in pop-up menus containing the folder sequence as found on the disk:\
  ![](../assets/en/MSC/MSC_popup.png)
  If you select a menu item (disk or folder), it is displayed in a new system window.
  The **Copy the path** command copies the complete pathname as text to the clipboard, using the separators of the current platform.

- **"Licenses" Folder**
  The **"Licenses" Folder** button displays the contents of the active Licenses folder in a new system window. インストールされた 4D環境用のライセンスファイルはすべてこのフォルダーに格納されていなければなりません。 ファイルを Webブラウザーで開くと、ライセンスの情報が表示されます。
  ライセンスフォルダーの場所はバージョンや OS により異なります。 For more information about the location of this folder, refer to the `Get 4D folder` command.
  _**Note:** You can also access this folder from the “Update License” dialog box (available in the Help menu)._

## テーブル

このページでは、データベース内のテーブルの概要を示します:

![](../assets/en/MSC/MSC_Tables.png)

> このページの情報は、標準モードおよびメンテナンスモードの両方で利用可能です。

このページにはデータベースのすべてのテーブル (非表示のテーブルも含む) とそれらの特徴が表示されます:

- **ID**: Internal number of the table.
- **Tables**: Name of the table. 削除されたテーブルの名前は括弧付きで表示されます (ゴミ箱の中に残っている場合)。
- **Records**: Total number of records in the table. If a record is damaged or cannot be read, _Error_ is displayed instead of the number. この場合、検証と修復ツールの使用を検討してください。
- **Fields**: Number of fields in the table. 非表示のフィールドはカウントされますが、削除されたフィールドはカウントされません。
- **Indexes**: Number of indexes of any kind in the table
- **Encryptable**: If checked, the **Encryptable** attribute is selected for the table at the structure level (see "Encryptable" paragraph in the Design Reference Manual).
- **Encrypted**: If checked, the records of the table are encrypted in the data file. _**Note**: Any inconstency between Encryptable and Encrypted options requires that you check the encryption status of the data file in the Encrypt page of the MSC._
- **Address Table Size**: Size of the address table for each table. アドレステーブルとは、テーブル内で作成される各レコードにつき 1つの要素を保存する内部テーブルのことです。 これはレコードとその物理アドレスをつなげる働きをします。 パフォーマンス上の理由から、レコードが削除されてもリサイズはされず、そのためそのサイズはテーブル内のカレントレコード数とは異なる場合があります。 If this difference is significant, a data compacting operation with the "Compact address table" option checked can be executed to optimize the address table size (see [Compact](compact.md) page).
  _**Note:** Differences between address table size and record number can also result from an incident during the cache flush._

## データ

The **Data** page provides information about the available and used storage space in the data file.

> このページには、メンテナンスモードではアクセスできません。

この情報はグラフ形式で提供されます:

![](../assets/en/MSC/MSC_Data.png)

> このページに表示される情報には、データファイル外に格納されたデータは反映されません (<a href="https://doc.4d.com/4Dv18/4D/18/External-data-storage.300-4575564.ja.html">データをデータファイル外に保存</a> 参照)。

断片化があまりにも進んだファイルはディスク、そしてデータベースのパフォーマンスを低下させます。 If the occupation rate is too low, 4D will indicate this by a warning icon (which is displayed on the Information button and on the tab of the corresponding file type) and specify that compacting is necessary:![](../assets/en/MSC/MSC_infowarn.png)

A warning icon is also displayed on the button of the [Compact](compact.md) page:
![](../assets/en/MSC/MSC_compactwarn.png)
