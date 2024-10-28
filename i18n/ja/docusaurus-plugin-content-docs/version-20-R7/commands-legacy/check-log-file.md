---
id: check-log-file
title: CHECK LOG FILE
slug: /commands/check-log-file
displayed_sidebar: docs
---

<!--REF #_command_.CHECK LOG FILE.Syntax-->**CHECK LOG FILE**<!-- END REF-->
<!--REF #_command_.CHECK LOG FILE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.CHECK LOG FILE.Summary-->**CHECK LOG FILE** コマンドは、データベースのカレントログファイルの内容をブラウズできるダイアログを表示します。<!-- END REF-->このダイアログにはMaintenance & Security Centerからもアクセスできます:

![](../assets/en/commands/pict4835044.en.png)

このダイアログ画面では、データベースのデータに対して行われた操作を取り消すことのできる、**ロールバック**ボタンがあります。このダイアログボックスの詳細については、4DのDesign Referenceを参照してください。

**Note:** ロールバックは相対的に強力な操作であるため、**CHECK LOG FILE** コマンドの使用はデータベースの管理者に制限することを推奨します。

このコマンドは、シングルユーザアプリケーションで実行している場合に使用できます。特に、このコマンドは4D Volume Desktopアプリケーション (デザインモードの無いアプリケーション) からロールバック機能へのアクセスを提供します。クライアント/サーバアプリケーションでこのコマンドを呼び出した場合、エラー1421が返され、コマンドは何も行いません。

#### エラー処理 

* ログファイルを使用しないデータベースでこのコマンドを実行した場合、コマンドは何も行わず、エラー1403が返されます。
* このコマンドがクライアント/サーバデータベースで実行された場合、コマンドは何も行わず、エラー1421が返されます。  
[ON ERR CALL](on-err-call.md "ON ERR CALL")コマンドでインストールされるエラー処理メソッドを使用して、これらのエラーをとらえることができます。

#### 参照 

[RESTORE](restore.md)  
*バックアップマネージャエラー (1401 -> 1421)*  