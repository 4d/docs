---
id: object-get-scroll-position
title: OBJECT GET SCROLL POSITION
slug: /commands/object-get-scroll-position
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLL POSITION.Syntax-->**OBJECT GET SCROLL POSITION** ( {* ;} *object* ; *vPosition* {; *hPosition*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLL POSITION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数、フィールドまたはテーブル (* 省略時) |
| vPosition | Integer | &#8592; | 表示されている最初の行数、または ピクセル単位の縦スクロール (ピクチャ) |
| hPosition | Integer | &#8592; | 表示されている最初の列数、または<br/>ピクセル単位の横スクロール (ピクチャ) |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.OBJECT GET SCROLL POSITION.Summary-->OBJECT GET SCROLL POSITION は*object*で指定されたフォームオブジェクトの、スクロールバーの位置に関連する情報を*vPosition*と*hPosition*引数に返します。<!-- END REF-->

オプションの*\** 引数を渡すと、*object*引数はサブフォーム、階層リスト、スクロールエリア、リストボックス、またはピクチャタイプのオブジェクト名 (文字) です。この引数を渡さないと、*object*は変数 (階層リストの[ListRef](# "階層リストへの参照")、ピクチャまたはリストボックス変数) またはフィールドです。

**注:** サブフォームタイプオブジェクトにおいては、*\** を使用したシンタックスのみがサポートされます。

*object*がリストタイプのオブジェクト (サブフォーム、リストフォーム、階層リスト、スクロールエリア、またはリストボックス) を指定する場合、*vPosition*には*object*中で表示されている最初の行の番号が返されます。リストボックスの場合のみ、*hPosition*にはリストボックス中で一番左に完全に表示されている列の番号が返されます。他のタイプのオブジェクトの場合、この引数には0が返されます。

*object*がピクチャ (変数またはフィールド) をさす場合、*vPosition*には縦移動、 *hPosition*には横移動が返されます。これらの値はピクセル単位で表現され、ローカル座標システムのピクチャの基点を0とします。

#### 参照 

[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  