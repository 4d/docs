---
id: on-backup-startup-database-method
title: On Backup Startup database method
slug: /commands/on-backup-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Startup database method.Syntax-->On Backup Startupデータベースメソッド : Integer<!-- END REF-->
<!--REF #_command_.On Backup Startup database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | 0 = バックアップの開始を許可する; 0以外の値 = バックアップの開始を許可しない |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 

<!--REF #_command_.On Backup Startup database method.Summary-->**On Backup Startupデータベースメソッド**は、データベースのバックアップを開始しようとするたびに呼び出されます（手動でのバックアップ、定期的自動バックアップ、または[BACKUP](backup.md "BACKUP") コマンドによるバックアップ）。<!-- END REF-->  
これはすべての4D環境: 4D (すべてのモード), 4D Server、4D Volume Desktopが統合されたコンパイル済みアプリケーションに当てはまります。

**On Backup Startupデータベースメソッド**を使用すると、バックアップの開始を検証することができます。このメソッドからは、バックアップの許可または拒否を示す以下の値を引数$0にセットしてください:

* $0= 0：バックアップの開始を許可します。
* $0# 0：バックアップを拒否します。バックアップ処理はキャンセルされ、エラーが返されます。このエラーは、[BACKUP INFO](backup-info.md "BACKUP INFO")コマンドを使用して取得できます。

このデータベースメソッドを使用して、バックアップの実行条件を検証できます（ユーザ、前回のバックアップ日付など）。

**Note:** データベースメソッドで*$0* 引数 (倍長整数) を宣言しなければなりません:

```4d
 var $0 : Integer.
```
