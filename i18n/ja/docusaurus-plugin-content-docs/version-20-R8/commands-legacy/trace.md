---
id: trace
title: TRACE
slug: /commands/trace
displayed_sidebar: docs
---

<!--REF #_command_.TRACE.Syntax-->**TRACE**<!-- END REF-->
<!--REF #_command_.TRACE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.TRACE.Summary-->データベースの開発時に、**TRACE** コマンドを使用してメソッドをトレースすることができます。<!-- END REF-->コマンドは、カレントプロセス用の4Dのデバッガを起動します。デバッグウィンドウはコードの次の行が実行される前に表示されます。実行するコードを表示しながらメソッドの実行を続けることができます。コードの実行中に、 **Alt+Shift+右クリック** (Windows) 、または**Control+Option+Command+クリック** (Macintosh) でもデバッガーを起動することができます。

実行しているコードがコンパイルされている場合には、**TRACE**コマンドは無視されます。

**4D Server:** ストアドプロシージャーのコンテキスト内で実行されたプロジェクトメソッドから **TRACE** コマンドをコールすると、デバッグウィンドウはサーバーマシン上に表示されます。

**Tip:** On ActivateおよびOn Deactivateイベントが選択されたフォームを使用する場合、**TRACE** コマンドを使用しないでください。デバッグウィンドウが表示されるたびに、これらのイベントが起動されて、この2つのイベントとデバッグウィンドウとの間で永久ループになってしまいます。このような状況になった場合には、**トレースなし**ボタンを**Shiftキーを押しながらクリック**します。以降、そのプロセス内では**TRACE** コマンドが無視されます。

#### 例題 

次のコードでは、プロセス変数**BUILD\_LANG**に“US”あるいは“FR”という値であることを期待しています。それ以外の値である場合に、プロジェクトメソッドDEBUGを呼び出します: 

```4d
  // ...
 Case of
    :(BUILD_LANG="US")
       vsBHCmdName:=[Commands]CM US Name
    :(BUILD_LANG="FR")
       vsBHCmdName:=[Commands]CM FR Name
    Else
       DEBUG("Unexpected BUILD_LANG value")
 End case
```

DEBUG プロジェクトメソッドを次に示します:

```4d
  // DEBUG Project Method
  // DEBUG (Text)
  // DEBUG (Optional Debug Information)
 
 var $1 : Text
 
 If(<>vbDebugOn) // インタープロセス変数はOn Startupメソッドで設定される
    If(Is compiled mode)
       If(Count parameters>=1)
          ALERT($1+Char(13)+"Call Designer at x911")
       End if
    Else
       TRACE
    End if
 End if
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 157 |
| スレッドセーフである | &check; |


