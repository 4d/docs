---
id: add-to-date
title: Add to date
slug: /commands/add-to-date
displayed_sidebar: docs
---

<!--REF #_command_.Add to date.Syntax-->**Add to date** ( *date* ; *years* ; *months* ; *days* ) : Date<!-- END REF-->
<!--REF #_command_.Add to date.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| date | Date | &#8594;  | 年月日を加算する日付 |
| years | Integer | &#8594;  | 日付に加算する年 |
| months | Integer | &#8594;  | 日付に加算する月 |
| days | Integer | &#8594;  | 日付に加算する日 |
| 戻り値 | Date | &#8592; | 結果の日付 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Add to date.Summary-->**Add to date** コマンドは、*date*に*years*、*months*、*days* を加算し、その結果の日付を返します。<!-- END REF--> 

通常、任意の日付に日を追加する場合、[日付演算子](https://developer.4d.com/docs/ja/Concepts/date/#%E6%97%A5%E4%BB%98%E6%BC%94%E7%AE%97%E5%AD%90)を使用しますが、**Add to date** は（+ 日付 演算子を使用する場合のように）1ケ月の日数やうるう年の取り扱い方法を気にすることなく月や年を素早く加算することができます。

#### 例題 

```4d
  // この行は、現在の月日の一年後の日付を計算しています
 $vdInOneYear:=Add to date(Current date;1;0;0)
 
  // この行は、現在の日付の来月を計算しています
 $vdNextMonth:=Add to date(Current date;0;1;0)
 
  // この行は$vdTomorrow:=Current 日付+1と同等です
 $vdTomorrow:=Add to date(Current date;0;0;1)
```
