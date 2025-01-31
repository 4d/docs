---
id: print-settings-to-blob
title: Print settings to BLOB
slug: /commands/print-settings-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.Print settings to BLOB.Syntax-->**Print settings to BLOB** ( *printSettings* ) : Integer<!-- END REF-->
<!--REF #_command_.Print settings to BLOB.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| printSettings | Blob | &#8592; | 現在のプリント設定 |
| 戻り値 | Integer | &#8592; | 1 = 処理に成功, 0 = カレントのプリンターがない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Print settings to BLOB.Summary-->**Print settings to BLOB** コマンドは4Dのカレントのプリント設定を *printSettings* BLOBに格納します。<!-- END REF-->*printSettings* は、印刷で使用されるすべての設定を格納します:

* 用紙、方向、倍率などのレイアウト設定
* 部数、用紙トレーなどのプリント設定

このコマンドは [BLOB to print settings](blob-to-print-settings.md) と対で使用します。これらのコマンドを利用すれば、ユーザー指定の印刷設定を保存し、必要に応じてこれを呼び出せるため、出力のたびに印刷設定をやりなおす必要がなくなります。さらに、一般的ではない、プリンタードライバーに固有のプリント設定も保存することができます。

生成された BLOB をプログラムで変更してはいけません。この BLOB は [BLOB to print settings](blob-to-print-settings.md) コマンドでのみ使用できます。

BLOB が正しく生成されるとコマンドは 1を返します。カレントプリンターが選択されていないと 0を返します。

##### Windows / OS X 

*printSettings* BLOB はどちらのプラットフォームでも保存およびロードすることが可能ですが、印刷設定には共有されているものと、ドライバーやシステムバージョンに依存する特有のものがあります。そのため、同じ *printSettings* BLOB を異なるプラットフォームに流用した場合には、ロードされる情報が不完全の場合があります。異なるプラットフォームを併用する環境において印刷設定の復元を最適化するには、それぞれのプラットフォーム用に (つまり二つの) *printSettings* BLOB を管理することが推奨されます。

#### 例題 

現在のプリント設定をディスクに保存します:

```4d
 var curSettings : Blob
 PRINT SETTINGS // ユーザーに印刷設定ダイアログを表示します
 If(OK=1)
    $err:=Print settings to BLOB(curSettings)
    If($err=1)
       BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)
    Else
       ALERT("プリンターが未選択です")
    End if
 End if
```

#### 参照 

  
[BLOB to print settings](blob-to-print-settings.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1433 |
| スレッドセーフである | &cross; |


