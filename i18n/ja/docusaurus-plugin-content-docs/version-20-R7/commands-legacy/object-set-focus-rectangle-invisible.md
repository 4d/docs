---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( {* ;} *object* ; *invisible* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時)変数またはフィールド (* 省略時) |
| invisible | Boolean | &#8594;  | True = フォーカスの四角を隠すFalse = フォーカスの四角を表示する |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->**OBJECT SET FOCUS RECTANGLE INVISIBLE**コマンドは*object* と *\** 引数で指定したオブジェクトのフォーカス四角のカレントプロセスの表示オプションを変更します。<!-- END REF-->この設定は、フォームエディターのプロパティリストの入力可能オブジェクトで利用できる**フォーカスの四角を隠す**オプションに対応します。 

**注:** このオプションはMac OSでのみ利用できます。Windowsでは効果がありません。 

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。 

*invisible* 引数に**True**を渡すとフォーカスの四角が隠され、**False**を渡すと表示されます。

#### 参照 

[OBJECT Get focus rectangle invisible](object-get-focus-rectangle-invisible.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1177 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


