---
id: backup
title: BACKUP
slug: /commands/backup
displayed_sidebar: docs
---

<!--REF #_command_.BACKUP.Syntax-->**BACKUP**<!-- END REF-->
<!--REF #_command_.BACKUP.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|2004|初出|

</details>
</div>

## 説明 

<!--REF #_command_.BACKUP.Summary-->**BACKUP**コマンドは、現在のバックアップ設定を用いて、データベースのバックアップを開始します。<!-- END REF-->確認ダイアログボックスは表示されませんが、進捗バーが画面上に現れます。

バックアップは、データベース設定ダイアログで設定します。これらの設定は、データベースのSettingsフォルダーまたはデータフォルダーの*Backup.xml*ファイルに保存されます (*バックアップジャーナル* 参照)。

**BACKUP**コマンドは、実行開始時に*On Backup Startupデータベースメソッド*を呼び出し、実行終了時に*On Backup Shutdownデータベースメソッド*を呼び出します。  
このメカニズムのため、これらのデータベースメソッドからはこのコマンドを呼び出すべきではありません。

**4D Server:** クライアントマシンから呼び出された場合でも、**BACKUP**コマンドはストアドプロシージャーとみなされ、サーバー上で実行されます。

## システム変数およびセット 

バックアップが正しく実行されるとシステム変数OKに1が、そうでなければ0が設定されます。

## エラー管理 

バックアップ中に問題が発生した場合、その問題に関する情報はバックアップログに書き込まれ、トップレベルのエラーだけが[On Backup Shutdownデータベースメソッド](../commands/on-backup-shutdown-database-method)に送られます。プログラミングでバックアップエラーを管理するには、このデータベースメソッドを利用することが重要です。

## 参照 

[BACKUP INFO](../commands/backup-info)  
*On Backup Startupデータベースメソッド*  
[RESTORE](../commands/restore)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 887 |
| スレッドセーフである | no |
| システム変数を更新する | OK |


