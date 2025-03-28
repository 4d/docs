---
id: get-list-item-font
title: Get list item font
slug: /commands/get-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.Get list item font.Syntax-->**Get list item font** ( {* ;} *list* ; *itemRef* ) : Text<br/>**Get list item font** ( * ; *list* ; * ) : Text<!-- END REF-->
<!--REF #_command_.Get list item font.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時) または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号 または 0 の場合最後に追加された項目 または *の場合リストのカレント項目 |
| 戻り値 | Text | &#8592; | フォント名 |

<!-- END REF-->

## 説明 

<!--REF #_command_.Get list item font.Summary-->Get list item font コマンドは、リスト参照またはオブジェクト名で指定した*list*リストの、*itemRef* 引数で指定した項目のフォント名を返します。<!-- END REF-->

一番目のオプション引数 \* を渡すと、*list* 引数はフォーム上のリストオブジェクトのオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。フォーム上に1つしかリストオブジェクトがない場合や (2番目の \* を省略して) リストのストラクチャを対象に処理を行う場合、いずれのシンタックスも使用できます。同じリストを複数のリストオブジェクトで使用する場合で、 (2番目の \* を渡して) 選択されている項目を対象に処理を行う場合、選択されている項目はオブジェクトごとに異なるので、オブジェクト名のシンタックスを使用しなければなりません。

**Note:** オブジェクト名に@文字を使用し、フォーム上にこれに合致するリストオブジェクトが複数ある場合、Get list item font コマンドは最初に見つけたリストオブジェクトを検索の対象とします。

*itemRef*には項目参照番号を渡すことができます。この番号に対応する項目がない場合、コマンドは何も行いません。*itemRef*に0を渡すと ([APPEND TO LIST](append-to-list.md "APPEND TO LIST")を使用して) リストに最後に追加された項目のフォントを返します。  
*itemRef*に \* を渡した場合、コマンドはリスト中のカレントの項目のフォントを返します。複数の項目がユーザにより選択されている場合、最後に選択された項目がカレントの項目です。項目が選択されていない場合、コマンドは何も行いません。

## 参照 

[SET LIST ITEM FONT](set-list-item-font.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 954 |
| スレッドセーフである | &cross; |


