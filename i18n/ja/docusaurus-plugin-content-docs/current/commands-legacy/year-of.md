---
id: year-of
title: Year of
slug: /commands/year-of
displayed_sidebar: docs
---

<!--REF #_command_.Year of.Syntax-->**Year of** ( *date* ) : Integer<!-- END REF-->
<!--REF #_command_.Year of.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| date | Date | &#8594;  | 年を取り出す日付 |
| 戻り値 | Integer | &#8592; | 年を示す数値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Year of.Summary-->Year of コマンドは、*date*から年を返します。<!-- END REF-->

#### 例題 1 

以下はYear ofの使用例です。結果を*vResult*変数に代入します。 

```4d
 vResult:=Year of(!92/12/25!) // vResult gets 1992
 vResult:=Year of(!1992/12/25!) // vResult gets 1992
 vResult:=Year of(!1892/12/25!) // vResult gets 1892
 vResult:=Year of(!2092/12/25!) // vResult gets 2092
 vResult:=Year of(Current date) // vResult gets year of current date
```

#### 例題 2 

[Current date](current-date.md "Current date")の例を参照。

#### 参照 

[Day of](day-of.md)  
[Month of](month-of.md)  