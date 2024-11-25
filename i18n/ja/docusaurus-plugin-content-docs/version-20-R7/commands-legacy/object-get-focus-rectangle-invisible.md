---
id: object-get-focus-rectangle-invisible
title: OBJECT Get focus rectangle invisible
slug: /commands/object-get-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get focus rectangle invisible.Syntax-->**OBJECT Get focus rectangle invisible** ( {* ;} *object* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get focus rectangle invisible.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| 戻り値 | Boolean | &#8592; | True = フォーカスの四角を隠すFalse = フォーカスの四角を表示する |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT Get focus rectangle invisible.Summary-->**OBJECT Get focus rectangle invisible**コマンドは*object* と *\** 引数で指定したオブジェクトのフォーカスの四角に関するカレントプロセス内の表示オプションを返します。<!-- END REF-->この設定は、フォームエディターのプロパティリストの入力可能オブジェクトで利用できる**フォーカスの四角を隠す**オプションに対応します。 このコマンドはデザインモードや[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)コマンドを使用して指定されたこのオプションに関する現在の設定値を返します。

**注:** このオプションはMac OSでのみ利用できます。Windowsでは効果がありません。 

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドはフォーカスの四角が隠されていると**True**を、表示されていると**False**を返します。

#### 参照 

[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)  