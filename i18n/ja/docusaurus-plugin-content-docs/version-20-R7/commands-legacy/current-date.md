---
id: current-date
title: Current date
slug: /commands/current-date
displayed_sidebar: docs
---

<!--REF #_command_.Current date.Syntax-->**Current date** {( * )} : Date<!-- END REF-->
<!--REF #_command_.Current date.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | サーバの日付を返す |
| 戻り値 | Date | &#8592; | 現在の日付 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Current date.Summary-->Current date コマンドは、システムクロックに保持された日付を現在の日付として返します。<!-- END REF-->

**4D Server:** リモートモードの4Dでこの関数を実行する際にアスタリスク (\*) 引数を渡すと、サーバの現在の日付が返されます。

#### 例題 1 

以下の例は、現在の日付を警告ダイアログに表示します。:

```4d
 ALERT("日付は "+String(Current date)+"です。")
```

#### 例題 2 

国際市場に向けたアプリケーションを作成する場合に、使用している4Dのバージョンが日付フォーマットMM/DD/YYYY（US版）やDD/MM/YYYY（フランス版）に対応するかどうかを知る必要があるとします。これはデータ入力フィールドのカスタマイズのために知っておくと便利な情報です。

以下のプロジェクトメソッドにより目的の処理を行うことができます:

```4d
  // Sys date format プロジェクトメソッド
  // Sys date format -> String
  // Sys date format -> デフォルトの4D日付フォーマット
 
 C_STRING(31;$0;$vsDate;$vsMDY;$vsMonth;$vsDay;$vsYear)
 var $1;$vlPos : Integer
 var $vdDate : Date
 
  // 月、日、年の値がすべて異なる日付の値を取得
 $vdDate:=Current date
 REPEAT
    $vsMonth:=String(Month of($vdDate))
    $vsDay:=String(Day of($vdDate))
    $vsYear:=String(Year of($vdDate)%100)
    If(($vsMonth=$vsDay)|($vsMonth=$vsYear)|($vsDay=$vsYear))
       vOK:=0
       $vdDate:=$vdDate+1
    Else
       vOK:=1
    End if
 Until(vOK=1)
 $0:="" // 関数の戻り値を初期化
 $vsDate:=String($vdDate)
 $vlPos:=Position("/";$vsDate) // 文字列../../..から最初のセパレータ / を探す
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // 日付から最初の桁を取り出す
 $vsDate:=Substring($vsDate;$vlPos+1) // 最初の区切り文字 / とともに最初の桁を取り除く
 Case of
    :($vsMDY=$vsMonth) // 月を表わす桁
       $0:="MM"
    :($vsMDY=$vsDay) // 日を表わす桁
       $0:="DD"
    :($vsMDY=$vsYear) // 年を表わす桁
       $0:="YYYY"
 End case
 $0:=$0+"/" // 関数の結果の組み立て開始
 $vlPos:=Position("/";$vsDate) // 文字列../..から2番目のセパレータを探す
 $vsMDY:=Substring($vsDate;1;$vlPos-1) // 日付から以下の桁を取り出す
 $vsDate:=Substring($vsDate;$vlPos+1) // 文字列を日付の最後の桁まで減らす
 Case of
    :($vsMDY=$vsMonth) // 月を表わす桁
       $0:=$0+"MM"
    :($vsMDY=$vsDay) // 日を表わす桁
       $0:=$0+"DD"
    :($vsMDY=$vsYear) // 年を表わす桁
       $0:=$0+"YYYY"
 End case
 $0:=$0+"/" // 関数結果の構築を続行
 Case of
    :($vsDate=$vsMonth) // 月を表わす桁
       $0:=$0+"MM"
    :($vsDate=$vsDay) // 日を表わす桁
       $0:=$0+"DD"
    :($vsDate=$vsYear) // 年を表わす桁
       $0:=$0+"YYYY"
 End case
  // この時点で、$0 はMM/DD/YYYYまたはDD/MM/YYYYまたは...
```

#### 参照 

[Day of](day-of.md)  
[Month of](month-of.md)  
[Year of](year-of.md)  