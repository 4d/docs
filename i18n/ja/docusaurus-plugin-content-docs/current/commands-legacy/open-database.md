---
id: open-database
title: OPEN DATABASE
slug: /commands/open-database
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATABASE.Syntax-->**OPEN DATABASE** ( *filePath* )<!-- END REF-->
<!--REF #_command_.OPEN DATABASE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| filePath | Text | &#8594;  | 開きたいファイル名(.4db、.4dc、.4dbase または .4dlink)、<br/>または開きたいデータベースへの完全なアクセスパス |

<!-- END REF-->

#### 注 

<!--REF #_command_.OPEN DATABASE.Summary-->**OPEN DATABASE** コマンドは、現在開いている4Dデータベースを閉じ、*filePath* で定義されたデータベースを即座に開きます。<!-- END REF-->このコマンドは自動的にテストをする目的や、コンパイル後にデータベースを自動的に開いたり、組み込み 4Dリモートアプリケーションに接続するデータベースサーバーを選択させたりするのに有用です。

*filePath* 引数には、開きたいデータベースの名前または完全なアクセスパスを渡します。指定できるファイルの拡張子は以下のとおりです:

* .4db (インタープリタストラクチャーファイル)
* .4dc (コンパイルされたストラクチャーファイル)
* .4dbase (OS X パッケージ)
* .4dproject (プロジェクトデータベースファイル)
* .4dz (プロジェクトデータベースの運用ファイル)
* .4dlink (ショートカットファイル)

ファイル名のみを渡す場合、現在開いているデータベースのストラクチャーファイルと同じ階層にそのファイルが置かれている必要があります。

ア クセスパスが有効なデータベースを設定していた場合、4Dは開いているデータベースを閉じ、指定されたデータベースを開きます。シングルユーザーモードに おいては、閉じられた方のデータベースの [On Exitデータベースメソッド](on-exit-database-method.md) と、新たに開かれた方のデータベースの [On Startupデータベースメソッド](on-startup-database-method.md) (または [On Server Open Connectionデータベースメソッド](on-server-open-connection-database-method.md)) が順番に実行されます。

**警告** **:** このコマンドは指定されたデータベースを開く前にアプリケーションを強制的に閉じるため、[On Startupデータベースメソッド](on-startup-database-method.md) の中やこのデータベースメソッドから呼び出されるメソッド内で呼び出すことは通常は推奨されません。

このコマンドは非同期的に実行されます。つまり、呼び出しの後、4Dは他のメソッドを実行し続けます。そして、アプリケーションは**ファイル**メニューの**4Dを終了**コマンドを選択したのと同じ挙動をします。ファイルを開くダイアログボックスはキャンセルされ、開いているプロセスは全て10秒間の猶予の後に終了します。

指定されたデータベースファイルが見つからないか無効である時、標準のファイルシステムエラーが返され、4Dは何もしません。

#### 例題 1 

```4d
 OPEN DATABASE("C:\\databases\\Invoices\\Invoices.4db")
```

#### 例題 2 

シングルユーザーアプリケーションのスタートアップからサーバーを選択したい場合を考えます。この場合、[On Startupデータベースメソッド](on-startup-database-method.md) から立ち上げたプロセスで以下のコードを実行することでそれを行うことができます:

```4d
 var $xml : Text

$xml:=""
 $databaseName:="myServer"
 $IP:="192.168.6.7:19813"

If(Shift down)
 $IP:=Request("IP address to connect to "+$databaseName;$IP)
Else
 ok:=1
End if
 
If(ok=1)
 $xml:=Replace string($xml;"{databaseName}";$databaseName)
 $xml:=Replace string($xml;"{IP}";$IP)
 var $link : Object
 $link:=Folder(fk user preferences folder).file("server.4dlink")
 $link.setText($xml)
 OPEN DATABASE($link.platformPath)
Else
 QUIT 4D
End if


```
