---
id: print-object
title: Print object
slug: /commands/print-object
displayed_sidebar: docs
---

<!--REF #_command_.Print object.Syntax-->**Print object** ( {* ;} *object* {; *posX* {; *posY* {; *width* {; *height*}}}} ) : Boolean<!-- END REF-->
<!--REF #_command_.Print object.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列) <br/>省略時 objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| posX | Integer | &#8594;  | オブジェクトの横位置 |
| posY | Integer | &#8594;  | オブジェクトの縦位置 |
| width | Integer | &#8594;  | オブジェクトの幅 (ピクセル) |
| height | Integer | &#8594;  | オブジェクトの高さ (ピクセル) |
| 戻り値 | Boolean | &#8592; | True = オブジェクトが完全に印刷された; そうでなければFalse |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Print object.Summary-->**Print object** コマンドを使用して *object*と*\** 引数で指定したフォームオブジェクトを、*posX*と*posY*の位置に、任意のサイズで印刷できます。<!-- END REF-->

**Print object** コマンドを呼び出す前に、印刷するテーブルまたはオブジェクトを含むプロジェクトフォームを新しい [FORM LOAD](../commands/form-load.md) で指定しなければなりません。

オプションの*\** 引数を渡すと、*object*引数にはオブジェクト名 (文字列) を渡します。*\** 引数を渡さない場合、*object*には変数を指定します。この場合、文字列ではなく変数参照 (オブジェクトタイプのみ) を渡します。

*posX*と*posY*引数はオブジェクトを印刷する開始位置を指定します。これらの値はピクセル単位で指定ます。これらの引数を省略すると、オブジェクトはフォーム上の位置に基づいて印刷されます。

*width*と*height*引数はフォームオブジェクトの幅と高さを指定します。**Print object** コマンドは可変長のオブジェクトを管理しません。[OBJECT GET BEST SIZE](object-get-best-size.md) コマンドでオブジェクトのサイズを管理しなければなりません。また[OBJECT GET BEST SIZE](object-get-best-size.md) コマンドでテキストを含むオブジェクトのもっとも適切なサイズを知ることができます。同様に、**Print object** はページブレークを自動では生成しません。必要に応じて開発者が管理しなければなりません。 

4Dコマンドを使用してオブジェクトプロパティ (色やサイズなど) をオンザフライで変更できます。

オブジェクトが完全に印刷されるとコマンドはTrueを返します。そうでないばあい、言い換えればフレームワーク内のオブジェクトに割り当てられた データをすべて印刷できなかった場合、コマンドはFalseを返します。特にリストボックスのすべての行を印刷できなかった場合、コマンドはFalseを 返します。この場合**Print object** コマンドを、それがTrueを返すまで繰り返し呼び出します。特別なメカニズムが自動で使用され、オブジェクトの内容が呼び出しごとに自動でスクロールされます。ユーザーが印刷オペレーションをキャンセルした場合、エラー-128 が生成されます。このエラーは[ON ERR CALL](on-err-call.md) で割り込み可能です。

**注:**  

* 4D の現在のバージョンでは、リストボックスタイプのオブジェクトのみがこのメカニズムを持っています (他のオブジェクトではコマンドは常に Trueを返します)。4Dの将来のバージョンでこの機能は他の可変長オブジェクトに拡張されます。
* [LISTBOX GET PRINT INFORMATION](listbox-get-print-information.md) コマンドを使用して、処理中に印刷状況を知ることができます。

**Print object** コマンドは事前に[OPEN PRINTING JOB](open-printing-job.md) で開かれた印刷ジョブのコンテキストでのみ使用できます。このコンテキストの外で呼び出された場合、コマンドはなにも行いません。同じ印刷ジョブ内で**Print object** コマンドを複数回呼び出すことができます。

****注:** 階層リスト、サブフォーム、およびWebエリアを印刷することはできません。

#### 例題 1 

フォーム上の10個のオブジェクトを印刷する例:

```4d
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    If(OK=1)
       FORM LOAD("PrintForm")
       x:=100
       y:=50
       GET PRINTABLE AREA(hpaper;wpaper)
       For($i;1;10)
          OBJECT GET BEST SIZE(*;"Obj"+String($i);bestwidth;bestheight)
          $end:=Print object(*;"Obj"+String($i))
          y:=y+bestheight+15
          If(y>hpaper)
             PAGE BREAK(>)
             y:=50
          End if
       End for
    End if
    CLOSE PRINTING JOB
 End if
```

#### 例題 2 

リストボックス全体を印刷したい場合を考えます:

```4d
 OPEN PRINTING JOB
 FORM LOAD("myForm")
 $Over:=False
 gError:=0
 ON ERR CALL("err")
 Repeat
    $Total:=Print object(*;"List_Box")
    LISTBOX GET PRINT INFORMATION(*;"List_Box";lk printing is over;$Over)
    PAGE BREAK
    If(gError=-128) //ユーザーが印刷をキャンセルした
       $Over:=True
    End if
 Until($Over)
 CLOSE PRINTING JOB
 ON ERR CALL("")
```

#### 参照 

[FORM LOAD](../commands/form-load.md)  