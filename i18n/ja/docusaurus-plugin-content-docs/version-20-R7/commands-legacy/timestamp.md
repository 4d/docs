---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | ISOフォーマットを使用してミリ秒付きで返された現在時刻 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Timestamp.Summary-->**Timestamp** はカレントのUTC時刻をISOフォーマット、ミリ秒付きで返します。<!-- END REF-->具体的には yyyy-MM-ddTHH:mm:ss.SSSZ という形式です。最後の"Z"文字はGMTタイムゾーンを意味するという点に注意してください。

**Timestamp** によって返された時刻はそれぞれ、ISO 8601標準に従って表現されます。この標準についての詳細な情報については、こちらを参照してください: <https://en.wikipedia.org/wiki/ISO%5F8601>

**注:** この関数は計測目的には適していません。経過時間を計測したい場合には[Milliseconds](milliseconds.md) を使用してください。

#### 例題 

ログファイル内で**Timestamp**を使用することによって、あるイベントがいつ起きたかということを正確に知ることができます。以下で示すように、同じ秒間内に複数の操作が発生していることがあるかもしれません:

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

結果の例:

```RAW
2016-12-12T13:31:29.477Z   Log with timestamp2016-12-12T13:31:29.478Z   Connection of user12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z   Click on button16842016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

#### 参照 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Time](time.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1445 |
| スレッドセーフである | &check; |


