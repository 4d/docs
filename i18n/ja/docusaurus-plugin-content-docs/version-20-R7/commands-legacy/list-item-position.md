---
id: list-item-position
title: List item position
slug: /commands/list-item-position
displayed_sidebar: docs
---

<!--REF #_command_.List item position.Syntax-->**List item position** ( {* ;} *list* ; *itemRef* ) : Integer<!-- END REF-->
<!--REF #_command_.List item position.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef | Integer | &#8594;  | 項目参照番号 |
| 戻り値 | Integer | &#8592; | 展開/折りたたまれたリストにおける項目位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.List item position.Summary-->List item position コマンドは、*list*に渡された項目参照番号またはオブジェクト名リスト中で、*itemRef*で指定した項目の位置を返します。<!-- END REF-->

オプションの第一引数 *\** を渡すと、*list* 引数はフォーム上のリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。リストオブジェクトを一つしか使わない場合、両方のシンタックスを使用できます。他方フォーム上に同じ階層リストを参照する複数のオブジェクトがある場合、それぞれのオブジェクトが個別に展開/折りたたみ状態をもつので、オブジェクト名に基づくシンタックスを使用しなければなりません。

**Note:** オブジェクト名に @ 文字を使用することで、名前に対応するオブジェクトが複数検索された場合、List item position コマンドは最初に見つけたオブジェクトを処理の対象とします。

**Note:** このテーマの他のコマンドと異なり、このコマンドでは*itemRef*に0を渡して最後に追加された項目を指定することはできません。

位置はリストやサブリストの展開/折りたたみ状態を使用し、メインリストの先頭項目からの相対位置であらわされます。

結果は1から[Count list items](count-list-items.md "Count list items")で返される数値までの間となります。

項目が縮小されているリストにあるために表示されていない場合、List item positionが適切なリストを展開してその項目を表示します。

項目が存在しない場合、LList item positionは0を返します。

#### 参照 

[Count list items](count-list-items.md)  
[SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 629 |
| スレッドセーフである | &cross; |


