---
id: create-alias
title: CREATE ALIAS
slug: /commands/create-alias
displayed_sidebar: docs
---

<!--REF #_command_.CREATE ALIAS.Syntax-->**CREATE ALIAS** ( *targetPath* ; *aliasPath* )<!-- END REF-->
<!--REF #_command_.CREATE ALIAS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetPath | Text | &#8594;  | エイリアス/ショートカットターゲットのアクセスパスまたは名前 |
| aliasPath | Text | &#8594;  | エイリアスまたはショートカットの完全なパス名または名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CREATE ALIAS.Summary-->CREATE ALIASコマンドを使用して、*targetPath*に渡した目的のファイルまたはフォルダのエイリアス(Windowsでは"ショートカット" と呼ばれる) を作成します。<!-- END REF-->名前と場所は、引数*targetPath*によって決定されます。

エイリアスは、あらゆる種類のドキュメントやフォルダに役立ちます。エイリアスのアイコンはターゲットアイテムと同じです。アイコンの左下には小さな矢印があります。Mac OSではアイコン名はイタリック文字で表示されます。

このコマンドは、名前をデフォルトで割り当てませんので、引数*aliasPath*に名前を渡す必要があります。名前だけをこの引数に渡すと、エイリアスがカレントのワーキングフォルダ内に作成されます(通常、ストラクチャファイルを格納しているファイル) 。

**Note:** Windowsでは、ショートカットは、拡張子".LNK" (可視できません) によって指定されます。この拡張子を渡さなければ、コマンドが自動的に拡張子を付加します。

*targetPath*に空の文字列を渡すと、コマンドは何もしません。

#### 例題 

データベースは、データベースのフォルダ内でソートされた"レポート番号" と呼ばれるテキストファイルを作成します。これらのレポートのショートカットを作成し、便利な場所に保存します。

```4d
  //メソッドCREATE_REPORT
 var $vtRport : Text
 C_STRING(250;$vtpath)
 C_STRING(80;$vaname)
 var vDoc : Time
 C_INTEGER($ReportNber)
 
 $vTReport:=... //レポートを作成する
 $ReportNber:=... //レポート番号を計算する
 $vaName:="Report"+String($ReportNber)+".txt" //ファイル名
 vDoc:=Create document($vaName)
 If(OK=1)
    SEND PACKET(vDoc;$vTReport)
    CLOSE DOCUMENT(vDoc)
  //エイリアスを追加する
    CONFIRM("Create an alias for this report?")
    If(OK=1)
       $vtPath:=Select folder("Where do you want the alias to be created?")
       If(OK=1)
          CREATE ALIAS($vaName;$vtPath+$vaName)
          If(OK=1)
             SHOW ON DISK($vtPath+$vaName)
  //エイリアスの場所を表示する
          End if
       End if
    End if
 End if
```

#### システム変数およびセット 

コマンドの実行が成功すると、OKシステム変数に1が代入されます。その他の場合は、0が代入されます。

#### 参照 

[RESOLVE ALIAS](resolve-alias.md)  