---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *data* {; *data2* ; ... ; *dataN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| data | Field, Variable | &#8594;  | 累計する数値型のフィールドまたは変数 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.ACCUMULATE.Summary-->ACCUMULATEは、[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドを使ってプリントするフォームレポート中で累計するフィールドまたは変数を指定します。<!-- END REF-->

ブレーク処理を行うレポートを印刷する前に、[BREAK LEVEL](break-level.md "BREAK LEVEL")コマンドとACCUMULATEコマンドを実行しなければなりません。これらのコマンドはレポートに対するブレーク処理を有効にします。[Subtotal](subtotal.md "Subtotal")コマンドの説明を参照してください。

フォームレポートに数値フィールドまたは変数の小計を求める場合に、ACCUMULATEコマンドを使用します。ACCUMULATEは、4Dに対して、*data*毎の小計を記憶するように指示します。小計は[BREAK LEVEL](break-level.md "BREAK LEVEL")コマンドで指定された各ブレークレベルに対して累計されます。

[PRINT SELECTION](print-selection.md "PRINT SELECTION")コマンドを使ってレポートを印刷する前に、ACCUMULATEコマンドを実行します。

フォームメソッドかオブジェクトメソッドで[Subtotal](subtotal.md "Subtotal")コマンドを使用して、*data*引数の1つの小計を求めます。

#### 例題 

[BREAK LEVEL](break-level.md "BREAK LEVEL") コマンドの例題参照

#### 参照 

[BREAK LEVEL](break-level.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  