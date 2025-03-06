---
id: object-set-vertical-alignment
title: OBJECT SET VERTICAL ALIGNMENT
slug: /commands/object-set-vertical-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Syntax-->**OBJECT SET VERTICAL ALIGNMENT** ( {* ;} *object* ; *alignment* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| alignment | Integer | &#8594;  | 行揃えコード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET VERTICAL ALIGNMENT.Summary-->**OBJECT SET VERTICAL ALIGNMENT**コマンドは*object* と*\** 引数で指定されたオブジェクトに適用される行揃えのタイプを変更します。<!-- END REF-->

オプションの *\** 引数を渡すと、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合、*object* は変数であり、文字列ではなく変数参照を渡します。 

*alignment* には*Form Objects (Properties)*テーマの以下のいづれかの定数を渡します: 

| 定数            | 型    | 値 |
| ------------- | ---- | - |
| Align bottom  | 倍長整数 | 4 |
| Align center  | 倍長整数 | 3 |
| Align default | 倍長整数 | 1 |
| Align top     | 倍長整数 | 2 |

行テキスト揃えは以下のオブジェクトに適用できます:

* リストボックス
* リストボックス列
* リストボックスヘッダーやフッター

#### 参照 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET HORIZONTAL ALIGNMENT](object-set-horizontal-alignment.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1187 |
| スレッドセーフである | &cross; |


