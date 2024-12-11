---
id: resource-type-list
title: RESOURCE TYPE LIST
slug: /commands/resource-type-list
displayed_sidebar: docs
---

<!--REF #_command_.RESOURCE TYPE LIST.Syntax-->**RESOURCE TYPE LIST** ( *resTypes* {; *resFile*} )<!-- END REF-->
<!--REF #_command_.RESOURCE TYPE LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resTypes | Text array | &#8592; | 利用可能なリストタイプのリスト |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RESOURCE TYPE LIST.Summary-->RESOURCE TYPE LIST コマンドは、現在開いているリソースファイルの中に存在するリソースのリソースタイプによる*resTypes*配列を作成します。<!-- END REF-->

オプション引数*resFile*に有効なリソースファイル参照番号を渡すと、そのファイルのリソースのみが返されます。*resFile*を省略した場合、現在開いているリソースファイルのすべてのリソースが返されます。

RESOURCE TYPE LISTを呼び出す前に、*resTypes*配列を文字列配列またはテキスト配列としてあらかじめ定義することができます。配列の事前定義を行わない場合、このコマンドはテキスト配列の*resTypes*を作成します。

このコマンドの実行後、[Size of array](size-of-array.md "Size of array")を*resTypes*配列に対して実行し、見つかったリソースタイプの数を調べることができます。

#### 例題 1 

以下の例は、現在開いているすべてのリソースファイルに存在するリソースのリソースタイプによる*atResType*配列を作成します:

```4d
 RESOURCE TYPE LIST(atResType)
```

#### 例題 2 

以下の例題では、Macintoshの4Dストラクチャファイルに古い4Dプラグインが含まれているかどうかをテストします。もし含まれていれば、これをWindowsで使用するためには更新が必要です。

```4d
 $vhResFile:=Open resource file(Structure file)
 RESOURCE TYPE LIST(atResType;$vhResFile)
 If(Find in array(atResType;"4DEX")>0)
    ALERT("This database contains old model Mac OS 4D plug-ins."+(Char(13)*2)+
    "You will have to update them for using this database on Windows.")
 End if
```

**Note:** 古いプラグインはストラクチャファイル以外にも存在する可能性があります。またデータベースにはProc.Extファイルが含まれているかもしれません。

#### 例題 3 

以下のプロジェクトメソッドは、リソースファイルの中に存在するリソースの数を返します: 

```4d
  // Count resources プロジェクトメソッド
  // Count resources ( 時間 ) -> 倍長整数
  // Count resources ( DocRef ) -> リソース数
 
 var $0 : Integer
 var $1 : Time
 
 $0:=0
 RESOURCE TYPE LIST($atResType;$1)
 For($vlElem;1;Size of array($atResType))
    RESOURCE LIST($atResType{$vlElem};$alResID;$atResName;$1)
    $0:=$0+Size of array($alResID)
 End for
```

このメソッドをデータベースに組み込むと、以下のように記述できます:

```4d
 $vhResFile:=Open resource file("")
 If(OK=1)
    ALERT("The file “"+Document+"” contains "+String(Count resources($vhResFile))+" resource(s).")
    CLOSE RESOURCE FILE($vhResFile)
 End if
```

#### 参照 

[RESOURCE LIST](resource-list.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 499 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


