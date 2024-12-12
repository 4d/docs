---
id: subtotal
title: Subtotal
slug: /commands/subtotal
displayed_sidebar: docs
---

<!--REF #_command_.Subtotal.Syntax-->**Subtotal** ( *data* {; *pageBreak*} ) : Real<!-- END REF-->
<!--REF #_command_.Subtotal.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| data | Field | &#8594;  | 小計を求める数値型のフィールドまたは変数 |
| pageBreak | Integer | &#8594;  | 改ページを行うブレークレベル |
| 戻り値 | Real | &#8592; | データの小計 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Subtotal.Summary-->**Subtotal** は、現在または最後のブレークレベルにおける*data*の小計を返します。<!-- END REF-->**Subtotal** は、ソートされたセレクションを[PRINT SELECTION](print-selection.md) コマンドで印刷する場合と、デザインモードでプリント...メニューから印刷を行う場合にのみ機能します。*data*引数のタイプは実数、整数、倍長整数のいずれかでなければなりません。フォームのブレークエリアに変数を配置し、**Subtotal** の結果を代入します。

**警告:** ブレーク処理を行ない、小計を計算するレポートを印刷する前に、[BREAK LEVEL](break-level.md) と[ACCUMULATE](accumulate.md) コマンドを実行しなければなりません。このコマンドの最後の説明を参照してください。

**Subtotal** の2番目の引数 (オプション) で印刷中にページブレークを行わせることができます。*pageBreak*が0の場合、**Subtotal** は改ページを行いません。*pageBreak*が1の場合、**Subtotal** はレベル1の各ブレークに対して改ページを行います。*pageBreak*が2の場合、**Subtotal** はレベル1と2の各ブレークに対して改ページを行います。

**Tip:** 画面に表示された出力フォームから**Subtotal** を実行すると、エラーが発生し、フォームとエラーウィンドウの間で更新処理の無限ループを引き起こします。このループから抜けるには、エラーウィンドウのアボートボタンをクリックする際にAlt+Shiftキー (Windows) またはoption+shiftキー (Macintosh) を押します (何度か繰り返さなければならないかもしれません)。これによりフォームのウィンドウの更新が一時的に中断されます。エラーが再たび生成されるようにするために別のフォームを出力フォームとして選択してください。フォームを表示と印刷の両方で使用したい場合、デザインモードに移り、**Subtotal** を[Form event code](form-event-code.md)\=On Printing Breakという判定式の中に配置します。

#### 例題 

以下の例は、フォームのブレークエリア (B0、B0マーカの上のエリア) のオブジェクトメソッドです。*vSalary*変数はブレークエリアにあります。このブレークレベルが発生すると、変数に\[Employees\]Salaryフィールドの小計が代入されます。ブレーク処理は事前に[BREAK LEVEL](break-level.md) と [ACCUMULATE](accumulate.md) コマンドを使用して有効にされていなければなりません。

```4d
 Case of
    :(Form event code=On Printing Break) //v17 以前ではForm event を使用すること
       vSalary:=Subtotal([Employees]Salary)
 End case
```

フォームのヘッダとブレークエリアを使用したフォームのデザインに関するより詳しい情報は、4D Design Referenceマニュアルを参照してください。

#### フォームレポートにおけるブレーク処理の起動 

ブレークを使用したレポートを生成するには、[BREAK LEVEL](break-level.md "BREAK LEVEL")と[ACCUMULATE](accumulate.md "ACCUMULATE")コマンドを呼び出して、レポート中のブレーク処理を有効にしなければなりません。

フォームレポートを印刷する前にこれらのコマンド両方を実行しなければなりません。フォームに値を表示するためにSubtotal関数は必要です。最低でも必要なブレークの数のレベルでソートしなければなりません。

[BREAK LEVEL](break-level.md "BREAK LEVEL")と[ACCUMULATE](accumulate.md "ACCUMULATE")を使用する際、レポートを印刷する処理は以下のようになります:   
1\. 印刷するレコードを選択する  
2\. [ORDER BY](order-by.md "ORDER BY")でレコードをソートする。最低でもブレークレベル数でソートします。  
3\. [BREAK LEVEL](break-level.md "BREAK LEVEL")と[ACCUMULATE](accumulate.md "ACCUMULATE")を実行します。  
4\. [PRINT SELECTION](print-selection.md "PRINT SELECTION")でレポートを印刷します。

Subtotal関数はフォームに値を表示するために必要です。

#### 参照 

[ACCUMULATE](accumulate.md)  
[BREAK LEVEL](break-level.md)  
[Level](level.md)  
[PRINT SELECTION](print-selection.md)  