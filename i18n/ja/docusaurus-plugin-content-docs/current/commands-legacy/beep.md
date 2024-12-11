---
id: beep
title: BEEP
slug: /commands/beep
displayed_sidebar: docs
---

<!--REF #_command_.BEEP.Syntax-->**BEEP**<!-- END REF-->
<!--REF #_command_.BEEP.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.BEEP.Summary-->BEEP コマンドは、PCまたはMacintoshでビーブ音を発生します。<!-- END REF-->発生するビーブ音は、サウンドコントロールパネルで変更することができます。

**警告:** Web接続プロセス内からBEEP コマンドを呼び出さないでください。これは、クライアントであるWebブラウザマシンではなく、Webサーバマシン上の4Dでビーブ音が発生するためです。

#### 例題 

以下の例は、クエリでレコードが見つからなかった場合に、ビーブ音を発生し、警告が表示されます。

```4d
 QUERY([Customers];[Customers]Name=$vsNameToLookFor)
 If(Records in selection([Customers])=0)
    BEEP
    ALERT("There is no Customer with such a name.")
 End if
```

#### 参照 

[PLAY](play.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 151 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


