---
id: current-time
title: Current time
slug: /commands/current-time
displayed_sidebar: docs
---

<!--REF #_command_.Current time.Syntax-->**Current time** {( * )} : Time<!-- END REF-->
<!--REF #_command_.Current time.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | サーバの時刻を返す |
| 戻り値 | Time | &#8592; | 現在の時刻 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current time.Summary-->Current time コマンドは、システムクロックの現在の時刻を返します。<!-- END REF--> 

現在の時刻は常に00:00:00から23:59:59の間です。[String](string.md "String")または[Time string](time-string.md "Time string")を使用して、Current timeから返される時間式の文字列を得ることができます。

**4D Server:** この関数を実行する際に、リモートモードの4Dでアスタリスク (\*) 引数を使用すると、サーバの現在時刻が返されます。

#### 例題 1 

以下の例題は、処理時間を計測する方法を紹介しています。ここでは、LongOperation メソッドの実行にかかる時間を計っています:

```4d
 $vhStartTime:=((Current date-!1980-01-01!)*86400)+Current time //開始時刻を保存、1980年1月1日からの経過秒で取得
 LongOperation //処理を実行
 $vhEndTime:=((Current date-!1980-01-01!)*86400)+Current time
 ALERT("The operation took "+String($vhEndTime-$vhStartTime)+" seconds.") //経過時間を表示
```

#### 例題 2 

以下の例題は現在時刻から時間、分、秒を取り出します:

```4d
 $vhNow:=Current time
 ALERT("Current hour is: "+String($vhNow\3600))
 ALERT("Current minute is: "+String(($vhNow\60)%60))
 ALERT("Current second is: "+String($vhNow%60))
```

#### 参照 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Tickcount](tickcount.md)  