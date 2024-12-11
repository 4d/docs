---
id: object-get-indicator-type
title: OBJECT Get indicator type
slug: /commands/object-get-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get indicator type.Syntax-->**OBJECT Get indicator type** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get indicator type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Integer | &#8592; | インジケータータイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get indicator type.Summary-->**OBJECT Get indicator type**コマンドは、引数 *object* と *\** で指定したサーモメーターに割り当てられた、カレントのインジケーターの型を返します。<!-- END REF-->

インジケーターのタイプは、デザインモードのプロパティリストを使用するか、新コマンド [OBJECT SET INDICATOR TYPE](object-set-indicator-type.md) を使用することによって定義できます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

返された値は、 "*Form Objects (Properties)*" テーマ内にある以下の定数と対応しています:

| 定数                        | 型    | 値 | コメント                         |
| ------------------------- | ---- | - | ---------------------------- |
| Asynchronous progress bar | 倍長整数 | 3 | 連続したアニメーションを表示する、回転型のインジケーター |
| Barber shop               | 倍長整数 | 2 | 連続したアニメーションを表示するバー           |
| Progress bar              | 倍長整数 | 1 | 標準の進捗バー                      |

#### 参照 

[OBJECT SET INDICATOR TYPE](object-set-indicator-type.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1247 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


