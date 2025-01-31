---
id: month-of
title: Month of
slug: /commands/month-of
displayed_sidebar: docs
---

<!--REF #_command_.Month of.Syntax-->**Month of** ( *aDate* ) : Integer<!-- END REF-->
<!--REF #_command_.Month of.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aDate | Date | &#8594;  | 月を取り出す日付 |
| 戻り値 | Integer | &#8592; | 日付の月を示す数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Month of.Summary-->Month of コマンドは*aDate*の月を返します。<!-- END REF-->Month of は月の数値を返します。月の名前ではありません (例題 1参照)。

この関数から返される値を比較するために、4Dは*Days and Months*テーマに定義済み定数を提供しています:

| 定数        | 型    | 値  |
| --------- | ---- | -- |
| January   | 倍長整数 | 1  |
| February  | 倍長整数 | 2  |
| March     | 倍長整数 | 3  |
| April     | 倍長整数 | 4  |
| May       | 倍長整数 | 5  |
| June      | 倍長整数 | 6  |
| July      | 倍長整数 | 7  |
| August    | 倍長整数 | 8  |
| September | 倍長整数 | 9  |
| October   | 倍長整数 | 10 |
| November  | 倍長整数 | 11 |
| December  | 倍長整数 | 12 |

  
#### 例題 1 

以下の例題はMonth ofの使用方法を紹介しています。結果は変数*vResult*に代入されます:

```4d
 vResult:=Month of(!92/12/25!) // vResult には12が代入される
 vResult:=Month of(Current date) // vResult には今日の日付の月が代入される
```

#### 例題 2 

[Current date](current-date.md "Current date")コマンドの例題を参照。

#### 参照 

[Day of](day-of.md)  
[Year of](year-of.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 24 |
| スレッドセーフである | &check; |


