---
id: notify-resources-folder-modification
title: NOTIFY RESOURCES FOLDER MODIFICATION
slug: /commands/notify-resources-folder-modification
displayed_sidebar: docs
---

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Syntax-->**NOTIFY RESOURCES FOLDER MODIFICATION**<!-- END REF-->
<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.NOTIFY RESOURCES FOLDER MODIFICATION.Summary-->NOTIFY RESOURCES FOLDER MODIFICATION コマンドを使用して、接続されたすべての4D マシンに、**Resources**フォルダが更新された旨の通知の送信を、4D Server に強制することができます。<!-- END REF-->この結果、リモートの4Dマシンはローカル**Resources**フォルダを同期できます。

このコマンドは特に、サーバ上のストアドプロシージャで**Resources**フォルダを更新した後、リモートマシンでこのフォルダの同期を管理するために使用できます。

リモートモードでの**Resources**フォルダの管理に関する詳細は、*4D Server Reference*を参照してください。

更新が行われたという情報のみが送信されます。それぞれのリモートマシンは、ローカルの環境設定に従い処理を行います。オプションは以下のとおりです:

* セッション中ローカルの**Resources**フォルダを同期しない。
* セッション中にローカルの**Resources**フォルダを自動で同期する
* 警告を表示し、同期を行うかユーザに選択させる

設定は以下のいずれかの方法で行います:

* データベース設定のを使用してデータベース全体を対象に設定します。この場合、すべてのマシンに設定が適用されます。
* [SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用して各リモートマシンごとに設定します (Auto Synchro Resources Folder セレクター)。この場合、この設定はデータベース設定を上書きし、セッション中そのリモートマシンにのみ適用されます。

#### 参照 

[Get 4D folder](get-4d-folder.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1052 |
| スレッドセーフである | &cross; |


