---
id: restore
title: RESTORE
slug: /commands/restore
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE.Syntax-->**RESTORE** {( *archivePath* {; *destFolderPath*} )}<!-- END REF-->
<!--REF #_command_.RESTORE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| archivePath | Text | &#8594;  | Pathname of archive to restore |
| destFolderPath | Text | &#8594;  | Pathname of destination folder |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESTORE.Summary-->RESTORE コマンドは4Dアーカイブに含まれるファイルを復元するために使用できます。<!-- END REF-->このコマンドはバックアップを管理するためのカスタマイズされたインターフェースで利用できます。

*archivePath*引数を渡さない場合、コマンドはファイルを開くダイアログを表示し、ユーザは復元するアーカイブを選択できます。

*archivePath*引数を使用すると、復元するアーカイブを指定できます。このパス名はシステムシンタックスで表現されなければなりません。絶対パス名またはストラクチャファイルからの相対パス名を指定できます。   
この場合 (*destFolderPath* が省略されると)、アーカイブが選択された状態で標準の復元ダイアログボックスが表示され、ユーザーは保存先フォルダを選択できます。処理が完了すると警告ダイアログが表示され、復元された要素を含むフォルダが表示されます。

復元された要素の格納先フォルダのパス名として*destFolderPath* 引数を渡すこともできます。このパス名はシステムシンタックスで表現されなければなりません。 絶対パス名またはストラクチャファイルからの相対パス名を指定できます。 この引数を渡すと、設定済みの復元ダイアログボックスが表示され、ユーザは復元処理を起動するかキャンセルすることのみできます。処理が完了すると、追加の情報を表示することなしにウィンドウが閉じられます。

RESTORE コマンドは*OK*および*Document*変数を更新します。復元が正しく実行されると*OK*に1が設定され*Document*には復元要素保存先フォルダのパスが格納されます。復元ダイアログをユーザがキャンセルされたり、エラーが発生して復元が中断されたりすると、*OK*に0が設定され*Document*は空の文字列になります。ON ERR CALLコマンドを使用してインストールしたエラー処理メソッドを使用してエラーをとらえることができます。

**Note:** 4D Volume Desktopが統合されたコンパイル済みアプリケーションでは、RESTOREコマンドは標準のファイルオープンダイアログにデフォルトで"4BK"拡張子のファイ ルを表示します。

#### 参照 

[BACKUP](backup.md)  
[RESTORE INFO](restore-info.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 918 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、Document、error |
| サーバー上での使用は不可 ||


