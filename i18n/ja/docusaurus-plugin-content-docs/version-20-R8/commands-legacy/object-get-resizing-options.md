---
id: object-get-resizing-options
title: OBJECT GET RESIZING OPTIONS
slug: /commands/object-get-resizing-options
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Syntax-->**OBJECT GET RESIZING OPTIONS** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| horizontal | Integer | &#8592; | 横リサイズオプション |
| vertical | Integer | &#8592; | 縦リサイズオプション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET RESIZING OPTIONS.Summary-->**OBJECT GET RESIZING OPTIONS**コマンドは*object*と*\** 引数で指定したオブジェクトのカレントプロセスのリサイズオプションを返します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。

このコマンドはデザインモードや[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)コマンドを使用してプロセスに設定された、リサイズに関するオプションの現在の設定値を返します。これらのオプションはフォームウィンドウのサイズが変更されたときのオブジェクトの表示方法を規定します。

*horizontal* 引数には横方向のリサイズオプション設定値が返されます。この値を*Form Objects (Properties)*テーマの以下の定数と比較できます:

| 定数                     | 型    | 値 | コメント                                    |
| ---------------------- | ---- | - | --------------------------------------- |
| Resize horizontal grow | 倍長整数 | 1 | ウィンドウが横方向に拡げられたら、オブジェクトの幅も同じ比率だけ右に拡大する。 |
| Resize horizontal move | 倍長整数 | 2 | ウィンドウの幅が拡げられたら、オブジェクトも同じだけ右方向に移動する。     |
| Resize horizontal none | 倍長整数 | 0 | ウィンドウの幅が変更されても、オブジェクトの位置及びサイズを変更しない。    |

*vertical* 引数には縦方向のリサイズオプション設定値が返されます。この値を*Form Objects (Properties)*テーマの以下の定数と比較できます:

| 定数                   | 型    | 値 | コメント                                     |
| -------------------- | ---- | - | ---------------------------------------- |
| Resize vertical grow | 倍長整数 | 1 | ウィンドウが縦方向に拡げられたら、オブジェクトの高さも同じ比率だけ下に拡大する。 |
| Resize vertical move | 倍長整数 | 2 | ウィンドウの高さが拡げられたら、オブジェクトも同じだけ下方向に移動する。     |
| Resize vertical none | 倍長整数 | 0 | ウィンドウの高さが変更されても、オブジェクトの位置及びサイズを変更しない。    |

#### 参照 

[OBJECT SET RESIZING OPTIONS](object-set-resizing-options.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1176 |
| スレッドセーフである | &cross; |


