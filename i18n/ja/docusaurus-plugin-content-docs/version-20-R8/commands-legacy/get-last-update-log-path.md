---
id: get-last-update-log-path
title: Get last update log path
slug: /commands/get-last-update-log-path
displayed_sidebar: docs
---

<!--REF #_command_.Get last update log path.Syntax-->**Get last update log path** : Text<!-- END REF-->
<!--REF #_command_.Get last update log path.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | 直近のアップデートログへのパス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get last update log path.Summary-->**Get last update log path**コマンドは、呼び出されたマシン内の最近のアップデートログファイルへの完全なパスを返します。<!-- END REF-->

アップデートログは自動アップデートプロセスの際に4Dによって生成されます。ログには実行されたアップデートについての情報のほか、起きたエラーの情報も記録されます。

このコマンドは、組み込みアプリ(サーバー用またはシングルユーザー用)における自動アップデートプロセスの中で使用されることを想定しています。詳細な情報に関しては、*デザインリファレンス* マニュアルの *アプリケーションの仕上げと展開* を参照して下さい。

#### 参照 

[RESTART 4D](restart-4d.md)  
[SET UPDATE FOLDER](set-update-folder.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1301 |
| スレッドセーフである | &check; |


