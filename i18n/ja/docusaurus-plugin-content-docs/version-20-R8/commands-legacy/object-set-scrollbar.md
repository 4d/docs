---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( {* ;} *object* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または 変数 (* 省略時) |
| horizontal | Boolean, Integer | &#8594;  | True = 表示, False = 非表示 |
| vertical | Boolean, Integer | &#8594;  | True = 表示, False = 非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->OBJECT SET SCROLLBARコマンドは、引数*object* と *\** で指定したオブジェクトの水平/垂直スクロールバーの表示/非表示を設定します。<!-- END REF--> 

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object*は変数です。この場合、文字列ではなく変数参照を指定します。オブジェクト名に関する詳細は *オブジェクトプロパティ* を参照してください。

*horizontal* と *vertical* 引数には、対応するスクロールバーが表示されるべきかどうかを指定する値を渡します。渡せる値はブール値(True=表示、False=非表示)、または数値(0=非表示、1=表示、2=自動モード)です。数値を使用した場合には、スクロールバーが必要なときのみ表示される自動モードを選択することができます。

以下の表は、スクロールバーを受け付けるオブジェクトの *horizontal* と *vertical* 引数に対して渡すことのできる値の一覧です(自動モードは、一部のオブジェクトでは使用できないものもあります):

| **スクロールバーを持つオブジェクト** | **スクロールバー非表示** | **スクロールバーを表示** | **自動モード** |
| -------------------- | -------------- | -------------- | --------- |
| テキストオブジェクトフィールドまたは変数 | False または 0    | True または 1     | *使用不可*    |
| ピクチャオブジェクトフィールドまたは変数 | False または 0    | True または 1     | 2         |
| リストボックス              | False または 0    | True または 1     | 2         |
| 階層リスト                | False または 0    | True または 1     | 2         |
| サブフォーム               | False または 0    | True または 1     | *使用不可*    |

デフォルトでは、スクロールバーは表示されています。

**注:** 自動モードについての詳細は、*スクロールバー* を参照して下さい。

#### 参照 

[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT GET SCROLLBAR](object-get-scrollbar.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 843 |
| スレッドセーフである | &cross; |


