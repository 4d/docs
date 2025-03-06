---
id: idle
title: IDLE
slug: /commands/idle
displayed_sidebar: docs
---

<!--REF #_command_.IDLE.Syntax-->**IDLE**<!-- END REF-->
<!--REF #_command_.IDLE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.IDLE.Summary-->IDLEコマンドは、コンパイラと一緒に使用する目的だけに作成されたコマンドです。<!-- END REF-->このコマンドは、4Dエンジンに呼び出しが戻らないように書かれたメソッド中で、コンパイルされたデータベースにおいてのみ使用されます。例えば、ループ内にまったく4Dコマンドを含まないForループを持ったメソッドを実行している場合、[ON EVENT CALL](on-event-call.md "ON EVENT CALL")でインストールされた割り込みメソッドでそれを中断することはできませんし、ユーザが他のアプリケーションに切り替えることもできません。このような場合、IDLEを挿入して、4Dがイベントをトラップできるようにします。割り込みを起こしたくない場合は、IDLEコマンドを記述しないでくだくさい。

#### 例題 

以下の例は、IDLEを使用しないと、コンパイルしたデータベースでループから抜け出すことができません:

```4d
  // Do Something Project Method
 ON EVENT CALL("EVENT METHOD")
 <>vbWeStop:=False
 MESSAGE("Processing..."+Char(13)+"Type any key to interrupt...")
 REPEAT
  // 4Dコマンドを呼び出さない何らかの処理を行う
    IDLE
 Until(<>vbWeStop)
 ON EVENT CALL("")
```

EVENT METHODは以下のとおりです:

```4d
  // EVENT METHOD Project Method
 If(Undefined(KeyCode))
    KeyCode:=0
 End if
 If(KeyCode#0)
    CONFIRM("Do you really want to stop this operation?")
    If(OK=1)
       <>vbWeStop:=True
    End if
 End if
```

#### 参照 

[ON EVENT CALL](on-event-call.md)  
*コンパイラコマンド*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 311 |
| スレッドセーフである | &check; |


