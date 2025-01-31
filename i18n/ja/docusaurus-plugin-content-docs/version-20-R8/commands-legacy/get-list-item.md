---
id: get-list-item
title: GET LIST ITEM
slug: /commands/get-list-item
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM.Syntax-->**GET LIST ITEM** ( {* ;} *list* ; itemPos | * ; *itemRef* ; *itemText* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemPos &#124; * | 演算子, 倍長整数 | &#8594;  | 展開/折りたたまれたリスト中の項目位置 * の場合、リスト中のカレント項目 |
| itemRef | Integer | &#8592; | 項目参照番号 |
| itemText | Text | &#8592; | リスト項目テキスト |
| sublist | Integer | &#8592; | サブリストリスト参照番号 (サブリストがある場合) |
| expanded | Boolean | &#8592; | サブリストが添付されている場合: TRUE = サブリストは現在展開されている FALSE = サブリストは折りたたまれている |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET LIST ITEM.Summary-->GET LIST ITEM コマンドは、リスト参照番号またはオブジェクト名が*list*であるリスト中、*itemPos*で指定した項目に関する情報を返します。<!-- END REF-->

1番目の \* 引数を渡した場合、*list* 引数はフォーム中のリストオブジェクトのオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数はリスト参照番号 ([ListRef](# "階層リストへの参照")) です。1つしかフォーム上でリストオブジェクトを使用しない場合、いずれのシンタックスも使用できます。同じリストの複数のリストオブジェクトがフォーム上にある場合は、リストオブジェクトごとに展開/折りたたみが異なるため、オブジェクト名に基づくシンタックスを使用しなければなりません。

**Note:** オブジェクト名に@文字を使用し、フォーム上にこれに合致するリストオブジェクトが複数ある場合、GET LIST ITEM コマンドは最初に見つけたリストオブジェクトを検索の対象とします。

項目位置は、リストの現在の展開/折りたたみ状況に基づき、相対的に示されなければなりません。1 から [Count list items](count-list-items.md "Count list items")で返される値までの数値を渡します。この範囲外の数値を渡すと、GET LIST ITEMは空の値 (0, "", など) を返します。

コマンドの呼出し後、以下の情報が返されます:

* *itemRef*に項目参照番号。
* *itemText*に項目テキスト。

オプションの引数 *sublist* と *expanded* を渡した場合:

* *subList*に、その項目に添付されたサブリストのリスト参照番号。項目にサブリストが添付されていない場合、*subList*には0が返されます。
* 項目にサブリストが添付されているとき、*expanded*にはサブリストが展開されていればTRUEが、折りたたまれていればFALSEが返されます。

#### 例題 1 

*hList* は項目にユニークな参照番号が与えられたリストです。以下のコードはプログラムで、現在選択されている項目のサブリストの展開/折りたたみを切り替えます:

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)
    If(Is a list($hSublist))
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;Not($vbExpanded))
    End if
 End if
```

#### 例題 2 

[APPEND TO LIST](append-to-list.md "APPEND TO LIST") コマンドの例題を参照

#### 参照 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[List item parent](list-item-parent.md)  
[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 378 |
| スレッドセーフである | &cross; |


