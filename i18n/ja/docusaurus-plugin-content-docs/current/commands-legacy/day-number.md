---
id: day-number
title: Day number
slug: /commands/day-number
displayed_sidebar: docs
---

<!--REF #_command_.Day number.Syntax-->**Day number** ( *aDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Day number.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aDate | Date | &#8594;  | 曜日に対応する数値を得る日付 |
| 戻り値 | Integer | &#8592; | 曜日を示す数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Day number.Summary-->Day number コマンドは、*aDate*に対応するの曜日を数値で返します。<!-- END REF-->  

**Note:** Day number は日付がヌルの時、*2* を返します。 

4Dは "" テーマで以下の定義済み定数を提供します:

| 定数        | 型    | 値 |
| --------- | ---- | - |
| Sunday    | 倍長整数 | 1 |
| Monday    | 倍長整数 | 2 |
| Tuesday   | 倍長整数 | 3 |
| Wednesday | 倍長整数 | 4 |
| Thursday  | 倍長整数 | 5 |
| Friday    | 倍長整数 | 6 |
| Saturday  | 倍長整数 | 7 |

**Note:** Day number は1から7までの値を返します。日付から日を取り出すには、[Day of](day-of.md "Day of")コマンドを使用します。

#### 例題 

以下の関数は、現在の曜日文字列を返します。:

```4d
 $viDay :=Day number(Current date) // $viDay には現在の曜日を示す番号が代入される
 Case of
    :($viDay =1)
       $0:="Sunday"
    :($viDay =2)
       $0:="Monday"
    :($viDay =3)
       $0:="Tuesday"
    :($viDay =4)
       $0:="Wednesday"
    :($viDay =5)
       $0:="Thursday"
    :($viDay =6)
       $0:="Friday"
    :($viDay =7)
       $0:="Saturday"
 End case
```

#### 参照 

[Day of](day-of.md)  