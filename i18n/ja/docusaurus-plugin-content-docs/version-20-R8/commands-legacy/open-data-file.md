---
id: open-data-file
title: OPEN DATA FILE
slug: /commands/open-data-file
displayed_sidebar: docs
---

<!--REF #_command_.OPEN DATA FILE.Syntax-->**OPEN DATA FILE** ( *accessPath* )<!-- END REF-->
<!--REF #_command_.OPEN DATA FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| accessPath | Text | &#8594;  | 開くデータファイルの名前または完全アクセスパス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OPEN DATA FILE.Summary-->**OPEN DATA FILE**コマンドは、4Dアプリケーションによって開かれたデータファイルをオンザフライで変更することを可能にします。<!-- END REF-->引数には、開こうとするデータファイル (".4DD"拡張子を持つファイル) の名前または完全なアクセスパスを渡します。ファイル名だけを渡す場合、データファイルはデータベースのストラクチャファイルと同じ階層に配置されていなければなりません。

アクセスパスが有効なデータファイルを指している場合、4Dは現在使用しているデータベースを終了し、指定されたデータファイルを使って再度開きます。シングルユーザーモードでは[On Exitデータベースメソッド](on-exit-database-method.md)と[On Startupデータベースメソッド](on-startup-database-method.md)が続いて呼び出されます。

**警告：** このコマンドを使用すると、指定されたデータファイルで再びデータベースが開かれる前に、アプリケーションは一度終了します。このため [On Exitデータベースメソッド](on-exit-database-method.md) やこのデータベースメソッドから呼び出されるメソッド内で、このコマンドを使用する場合には、無限ループに陥らないよう慎重な注意が必要です。

このコマンドは非同期的に実行されます。つまり、コマンド呼び出しの後、4Dはメソッドの残りの部分を続けて実行します。この後、アプリケーションは**ファイル**メニューの**終了**コマンドが選択された場合と同様の処理を行います。表示されているダイアログボックスはキャンセルされ、実行中のプロセスは10秒間の猶予の後に打ち切られます。

処理を開始する前に、コマンドは指定されたデータファイルが有効かどうかを検証します。また、そのファイルが既に開かれている場合、コマンドはファイルが現在使用中のストラクチャファイルに対応するかどうかを確認します。

*accessPath*に空の文字列を渡した場合、このコマンドはデータファイルを変更せずにデータベースを再度開きます。

**4D Server:** 4D v13より、このコマンドを4D Serverで実行できるようになりました。このコンテキストで、このコマンドは指定されたファイルを開く前に、サーバー上で内部的に[QUIT 4D](quit-4d.md)を呼び出します。結果各接続クライアント上にはサーバーが終了中である旨を通知するダイアログが表示されます。

#### 例題 

組み込みアプリケーションの運用において、On Startup データベースメソッドでユーザーデータファイルを作成したり開いたりしたい場合を考えます。例題ではデフォルトデータファイルを使用しています (*最終アプリケーションでのデータファイルの管理* 参照):

```4d
 If(Data file="@default.4dd")
    If(Version type?? Merged application)
       If(Is data file locked)
          $dataPath:=Get 4D folder(Active 4D Folder)+"data.4dd"
  // ローカルデータファイルがすでに存在していれば
          If(Test path name($dataPath)=Is a document)
             OPEN DATA FILE($dataPath) // 既存データファイルを開きます
          Else
             CREATE DATA FILE($dataPath) // 既存ファイルがなければ新規作成します
          End if
       End if
    End if
 End if
```

#### 参照 

[CREATE DATA FILE](create-data-file.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 312 |
| スレッドセーフである | &check; |


