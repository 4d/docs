---
id: object-get-scrollbar
title: OBJECT GET SCROLLBAR
slug: /commands/object-get-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SCROLLBAR.Syntax-->**OBJECT GET SCROLLBAR** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SCROLLBAR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字)、省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または、フィールドまたは変数 (* 省略時) |
| horizontal | Boolean, Integer | &#8592; | True=表示, False=非表示 |
| vertical | Boolean, Integer | &#8592; | True=表示, False=非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT GET SCROLLBAR.Summary-->OBJECT GET SCROLLBAR コマンドは、*object*で指定されたオブジェクトまたはオブジェクトグループの縦横スクロールバーの表示/非表示状態を知るために使用します。<!-- END REF-->. 

オプションの *\** 引数を渡すと、*object引数*はオブジェクト名(文字)です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照(フィールドまたは変数オブジェクトのみ)を渡します。

*horizontal* と *vertical* 引数には、ブール型または倍調整数型の変数を渡すことができます:

* ブール型の変数を渡した場合、スクロールバーの**カレントの**状態を反映した値が返ってきます:  
   * スクロールバーが非表示に定義されているときには、引数にはFalseが返されます。  
   * スクロールバーが表示に定義されているときには、引数にはTrueが返されます。  
   * スクロールバーが自動モードに定義されているときには、オブジェクトのカレントの表示状態に応じてTrueまたはFalseが返されます。
* 倍調整数型の変数を渡した場合、スクロールバーに定義された表示状態を反映した値が返ってきます:  
   * スクロールバーが非表示に定義されているときには、引数には0が返されます。  
   * スクロールバーが表示に定義されているときには、引数には1が返されます。  
   * スクロールバーが自動モードに定義されているときには、引数には2が返されます。

このコマンドは以下のオブジェクトに対して使用できます:

* ピクチャまたはテキストのオブジェクトフィールドと変数
* リストボックス
* 階層リスト
* サブフォーム
より詳細な情報に関しては、[OBJECT SET SCROLLBAR](object-set-scrollbar.md)コマンドの説明を参照して下さい。

#### 参照 

[OBJECT SET SCROLLBAR](object-set-scrollbar.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1076 |
| スレッドセーフである | &cross; |


