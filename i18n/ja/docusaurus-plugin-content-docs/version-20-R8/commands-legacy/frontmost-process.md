---
id: frontmost-process
title: Frontmost process
slug: /commands/frontmost-process
displayed_sidebar: docs
---

<!--REF #_command_.Frontmost process.Syntax-->**Frontmost process** {( * )} : Integer<!-- END REF-->
<!--REF #_command_.Frontmost process.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | フローティングウインドウ以外の最前面のプロセス番号 |
| 戻り値 | Integer | &#8592; | 最前面にあるウィンドウのプロセス番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Frontmost process.Summary-->Frontmost processは、ウィンドウが最前面にあるプロセスの番号を返します。<!-- END REF-->

1つ以上のフローティングウィンドウがある場合は、次の2種類のウィンドウレイヤがあります:

* 通常のウィンドウ
* フローティングウィンドウ

フローティングウィンドウのフォームメソッドやオブジェクトメソッドからFrontmost processコマンドを使用すると、このコマンドはフローティングウィンドウレイヤ内の最前面のフローティングウィンドウのプロセス番号を返します。オプションの *\** 引数を指定すると、この関数は、通常ウィンドウレイヤ内の最前面のアクティブウィンドウのプロセス番号を返します。

#### 例題 

[BRING TO FRONT](bring-to-front.md "BRING TO FRONT")の例題参照

#### 参照 

[BRING TO FRONT](bring-to-front.md)  
[WINDOW LIST](window-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 327 |
| スレッドセーフである | &cross; |


