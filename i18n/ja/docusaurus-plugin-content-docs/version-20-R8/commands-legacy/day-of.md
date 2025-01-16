---
id: day-of
title: Day of
slug: /commands/day-of
displayed_sidebar: docs
---

<!--REF #_command_.Day of.Syntax-->**Day of** ( *date* ) : Integer<!-- END REF-->
<!--REF #_command_.Day of.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| date | Date | &#8594;  | 日を取り出す日付 |
| 戻り値 | Integer | &#8592; | 日を表す数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Day of.Summary-->Day of コマンドは、*date*から日を返します。<!-- END REF-->Day of は1から31までの値を返します。日付から曜日を取得するには、[Day number](day-number.md "Day number")コマンドを使用します。

#### 例題 1 

以下の例は、Day ofの使用方法を示しています。結果は変数vResultに代入されます。変数vResultに代入される内容はコメントで説明されています:   
  
```4d
 vResult:=Day of(!92/12/25!) // vResult には25が代入されます。
 vResult:=Day of(Current date) // vResult 現在の日が代入されます
```

#### 例題 2 

[Current date](current-date.md "Current date")コマンドの例を参照。

#### 参照 

[Day number](day-number.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 23 |
| スレッドセーフである | &check; |


