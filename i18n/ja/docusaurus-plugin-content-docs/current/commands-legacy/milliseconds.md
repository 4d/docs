---
id: milliseconds
title: Milliseconds
slug: /commands/milliseconds
displayed_sidebar: docs
---

<!--REF #_command_.Milliseconds.Syntax-->**Milliseconds**  : Integer<!-- END REF-->
<!--REF #_command_.Milliseconds.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | マシンが起動されてからの 経過ミリ秒数 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Milliseconds.Summary-->Milliseconds は、マシンが起動されてから経過したミリ秒 (1/1000秒) 数を返します。<!-- END REF-->

返される値は符号付き倍長整数であり、最大2の31乗(約20億ミリ秒、または約24日間相当)です。マシンが24日を超えて実行され続けた場合、返される数値は負の値になります。

このコマンドの目的は、短い時間を高い精度で計測することにあります。その意味では24日という長さは比較のためには十分な期間に思えますが、注意すべき点があります。それは値を比較する際、2つの値の差異を計算して比較するようにするということです。値を直接比較してはいけません。一つの値は負の値で、もう一つが正の値を取っている可能性があるからです。

#### 例題 

以下のコードは、ロックされたレコードがアンロックされるまで5秒間待ち、アンロックされていなければ終了します:

```4d
 If(Locked([Table_1]))
    $starttime:=Milliseconds
    Repeat
       DELAY PROCESS(Current process;15)
       LOAD RECORD([Table_1])
       $waittime:=Milliseconds-$starttime
    Until(Not(Locked([Table_1]))|(Process aborted)|($waittime>5000)) //最大で5秒待つ
 End if
```

**注:** 上記コード内にある様に、必ず2回の**Milliseconds** の呼び出しの差異を比較してください。以下の様に直接比較することは絶対にしてはいけません:  

```4d
 (Milliseconds>($starttime+5000)) //この比較は決してしてはいけません。1つは正の値、1つは負の値を取りうるからです
```

#### 参照 

[Current time](current-time.md)  
[Tickcount](tickcount.md)  
[Timestamp](timestamp.md)  