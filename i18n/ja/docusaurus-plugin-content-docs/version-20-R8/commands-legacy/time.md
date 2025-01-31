---
id: time
title: Time
slug: /commands/time
displayed_sidebar: docs
---

<!--REF #_command_.Time.Syntax-->**Time** ( *timeValue* ) : Time<!-- END REF-->
<!--REF #_command_.Time.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| timeValue | Text, Integer | &#8594;  | 時間を表す文字列または倍長整数 |
| 戻り値 | Time | &#8592; | 時間 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Time.Summary-->Time コマンドは、*timeValue* 引数で指定した時間に相当する時間表示を返します。<!-- END REF-->引数には以下のものを渡す事ができます。

* システムの言語に対応している4D標準の時間フォーマットで表された時刻を含んでいる文字列(詳細な情報については[String](string.md) を参照して下さい)。
* 00:00:00を経過した秒数を表す倍長整数

**注:** *timeValue* 引数の式が未定義に評価される場合、**Time** コマンドは空の文字列(00:00:00)を返します。これは式の結果が、たとえ未定義であっても時間として返されることを期待したい場合などに有効です。

#### 例題 1 

以下の例題は警告ダイアログに“1:00 P.M. = 13 時 0 分”と表示します:

```4d
 ALERT("1:00 P.M. = "+String(Time("13:00:00");Hour Min))
```

#### 例題 2 

どんな数字の値も時間として表現することができます。

```4d
 vTime:=Time(10000)
  //vTime は 02:46:40
 vTime2:=Time((60*60)+(20*60)+5200)
  //vTime2 は 02:46:40
```

#### 参照 

[ARRAY TIME](array-time.md)  
[Bool](bool.md)  
[String](string.md)  
[Time string](time-string.md)  
[Timestamp](timestamp.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 179 |
| スレッドセーフである | &check; |


