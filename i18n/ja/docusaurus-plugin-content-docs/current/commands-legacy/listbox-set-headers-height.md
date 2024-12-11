---
id: listbox-set-headers-height
title: LISTBOX SET HEADERS HEIGHT
slug: /commands/listbox-set-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Syntax-->**LISTBOX SET HEADERS HEIGHT** ( {* ;} *object* ; *height* {; *unit*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時objectはオブジェクト名 (文字列)省略時objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時)または変数 (* 省略時) |
| height | Integer | &#8594;  | ヘッダーの高さ |
| unit | Integer | &#8594;  | 高さを指定する単位:0または省略時 = ピクセル、1 = 行 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Summary-->**LISTBOX SET HEADERS HEIGHT**コマンドは*object*と*\** 引数で指定したリストボックスのヘッダー行の高さを変更します。<!-- END REF-->

オプションの *\** 引数を渡した場合、*object* 引数はオブジェクト名 (文字列) です。この引数を渡さない場合 *object* は変数です。この場合文字列ではなく変数参照を渡します。

リストボックスあるいはリストボックスヘッダーのいずれかを指定できます。

設定する高さを *height* 引数に渡します。*unit* 引数を省略するとデフォルトで高さはピクセル単位であらわされます。単位を変更するには *unit* 引数に*List Box*テーマの以下の定数を渡します:

| 定数        | 型    | 値 | コメント                            |
| --------- | ---- | - | ------------------------------- |
| lk lines  | 倍長整数 | 1 | 高さを行数で指定。4Dはフォント設定に応じて高さを計算します。 |
| lk pixels | 倍長整数 | 0 | 高さをピクセルで指定 (デフォルト)。             |

ヘッダー高さの最小値はシステムに設定された値を使用します。

これはWindowsで24ピクセル、Mac OSで17ピクセルです。

*height*引数にこれより小さな値を渡すと、最小値が適用されます。

**注:** 行の高さの計算についてはデザインリファレンスマニュアルを参照してください。

#### 参照 

[LISTBOX Get headers height](listbox-get-headers-height.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1143 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


