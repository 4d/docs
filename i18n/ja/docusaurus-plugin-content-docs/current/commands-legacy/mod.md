---
id: mod
title: Mod
slug: /commands/mod
displayed_sidebar: docs
---

<!--REF #_command_.Mod.Syntax-->**Mod** ( *number1* ; *number2* ) : Real<!-- END REF-->
<!--REF #_command_.Mod.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| number1 | Integer | &#8594;  | 除算される数値 |
| number2 | Integer | &#8594;  | 除算する数値 |
| 戻り値 | Real | &#8592; | 余り |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Mod.Summary-->**Mod**コマンドは、*number1*を*number2*で割り算し、その余りの整数を返します。<!-- END REF-->

**Notes:** 

* **Mod**は整数、倍長整数、実数を受け入れます。しかし*number1*または*number2*が実数の場合、それらの値は丸められてから**Mod**計算を実行します。
* (2^31を超える) サイズの大きな実数を用いてModを使用する場合は注意が必要です。この場合、処理が標準的なプロセッサの計算能力の限界に達してしまう可能性があります。

なお余りを計算するためにモジューロ演算子（%）を使用することもできます ([C\_TIME](c-time.md)を参照)。

**警告:** *%*演算子は整数または倍長整数式を用いて有効な結果を返します。実数値のモジューロを計算するには、**Mod**コマンドを使用しなければなりません。

#### 例題 

以下の例は、Modが異なる引数でどのように機能するかを紹介しています。各行は*vlResult*に値を代入し、コメント行にその結果を記述しています: 

```4d
 vlResult:=Mod(3;2) // vlResult gets 1
 vlResult:=Mod(4;2) // vlResult gets 0
 vlResult:=Mod(3.5;2) // vlResult gets 0
```
