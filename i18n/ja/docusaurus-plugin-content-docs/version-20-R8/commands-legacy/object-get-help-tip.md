---
id: object-get-help-tip
title: OBJECT Get help tip
slug: /commands/object-get-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get help tip.Syntax-->**OBJECT Get help tip** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get help tip.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| 戻り値 | Text | &#8592; | オブジェクトのヘルプメッセージ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get help tip.Summary-->**OBJECT Get help tip**コマンドは*object* と*\** 引数で指定したオブジェクトに割り当てられたカレントプロセスのヘルプメッセージを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドは指定したオブジェクトにデザインモードあるいは[OBJECT SET HELP TIP](object-set-help-tip.md)コマンドでカレントプロセスに関連付けられた、現在のヘルプメッセージを返します。返される文字列はフォームが実行されたときに表示されるメッセージです。4D参照やxliff resnameなどの可変な値が含まれる場合、文脈に基づき解析された結果が返されます。

#### 例題 

ピクチャーボタンのタイトルがヘルプメッセージとして格納されています。このタイトルはxliffファイルに記述されていて、アプリケーションのカレント言語に基づき変わります: 

```4d
 OBJECT SET HELP TIP(*;"button1";":xliff:btn_yes")
 $helpmessage:=OBJECT Get help tip(*;"button1")
  // $helpmessageには例えば日本語環境では"はい"、英語環境では"YES"が返されます (xliffにそのように記述されていれば)。
```

#### 参照 

[OBJECT SET HELP TIP](object-set-help-tip.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1182 |
| スレッドセーフである | &cross; |


