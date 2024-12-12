---
id: is-in-print-preview
title: Is in print preview
slug: /commands/is-in-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Is in print preview.Syntax-->**Is in print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Is in print preview.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | True: 印刷プレビューFalse: 印刷プレビューでない |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Is in print preview.Summary-->**Is in print preview**コマンドは印刷ダイアログボックスで印刷プレビューオプションが選択されている場合Trueを返し、そうでなければFalseを返します。<!-- END REF-->この設定はカレントプロセスに対し有効です。 

[Get print preview](get-print-preview.md)コマンドをと異なり、**Is in print preview**はユーザーがダイアログボックスでの設定を終えた後の、オプションの最終的な値を返します。なのでこのコマンドを使用すれば実際に印刷がプレビューモードで行われるのかどうかを判定できます。

#### 例題 

この例題はすべてのタイプの印刷に対応します:

```4d
 SET PRINT PREVIEW(True) //デフォルトで印刷プレビューを行う
 PRINT SETTINGS
 If(OK=1)
  //ユーザーが印刷先を変更しているかもしれない
    If(Is in print preview) // 印刷プレビューならTrue
       FORM SET OUTPUT([Invoices];"toScreen")
    Else
       FORM SET OUTPUT([Invoices];"toPrinter"
    End if
    OPEN PRINTING JOB
    ALL RECORDS([Invoices])
    PRINT SELECTION([Invoices];>)
    CLOSE PRINTING JOB
 End if
```

#### 参照 

[Get print preview](get-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  