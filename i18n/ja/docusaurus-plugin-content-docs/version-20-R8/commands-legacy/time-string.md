---
id: time-string
title: Time string
slug: /commands/time-string
displayed_sidebar: docs
---

<!--REF #_command_.Time string.Syntax-->**Time string** ( *seconds* ) : Text<!-- END REF-->
<!--REF #_command_.Time string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| seconds | Integer, Time | &#8594;  | 0時からの秒数 |
| 戻り値 | Text | &#8592; | 24時フォーマットの時間文字列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Time string.Summary-->Time string コマンドは、*seconds*に渡した時間式の文字列を返します。<!-- END REF-->

文字列は**HH:MM:SS**形式です。

1日の秒数は86,400秒ですが、この値を越えても、Time stringは、時間、分、秒の加算を継続します。例えば、Time string (86401) は、文字列“24:00:01”を返します。

**Note:** 時間を様々なフォーマットの文字列に変換したい場合は、[String](string.md "String")を使用します。

#### 例題 

以下の例題は警告ダイアログに“46800 seconds is 13:00:00.”というメッセージを表示します。

```4d
 ALERT("46800 seconds is "+Time string(46800))
```

#### 参照 

[String](string.md)  
[Time](time.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 180 |
| スレッドセーフである | &check; |


