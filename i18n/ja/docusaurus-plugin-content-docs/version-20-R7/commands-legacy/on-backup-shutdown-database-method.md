---
id: on-backup-shutdown-database-method
title: On Backup Shutdown database method
slug: /commands/on-backup-shutdown-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Backup Shutdown database method.Syntax-->$1 -> On Backup Shutdownデータベースメソッド<!-- END REF-->
<!--REF #_command_.On Backup Shutdown database method.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| $1 | 倍長整数 | &#8592; | 0 = バックアップは正しく実行された; 0以外の値 = エラー、ユーザーにより中断された、またはOn Backup Startupから返されたコード |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 

<!--REF #_command_.On Backup Shutdown database method.Summary-->**On Backup Shutdownデータベースメソッド**は、データベースのバックアップが終了するたびに呼び出されます。<!-- END REF-->バックアップが終了する理由には、コピーの終了、 ユーザによる中断、そしてエラーがあります。  
これはすべての4D環境: 4D (すべてのモード), 4D Server、4D Volume Desktopが統合されたコンパイル済みアプリケーションに当てはまります。

**On Backup Shutdownデータベースメソッド**を使用すると、バックアップが正常に実行されたかどうかを確認できます。バックアップが完了すると、このメソッド内の$1 引数にはバックアップのステータスを示す値が返されます:

* バックアップが正常に終了すると、$1には0が代入されます。
* バックアップがユーザにより中断されたり、エラーが発生した場合、$1には0以外が代入されます。  
   * バックアップが*On Backup Startupデータベースメソッド* ($0 # 0)により停止された場合、$1には$0 引数で返された値が代入されます。これにより、独自のエラー管理システムを実装できます。  
   * エラーのためバックアップが停止した場合、エラーコードが$1に返されます。  
いずれの場合も[BACKUP INFO](backup-info.md)コマンドを使用してエラーに関する情報を入手できます。

**注**: データベースメソッドで$1 引数 (倍長整数) を宣言しなければなりません:

```4d
 var $1 : Integer
```
