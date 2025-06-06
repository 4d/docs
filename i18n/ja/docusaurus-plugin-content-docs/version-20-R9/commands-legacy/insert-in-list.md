---
id: insert-in-list
title: INSERT IN LIST
slug: /commands/insert-in-list
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN LIST.Syntax-->**INSERT IN LIST** ( {* ;} *list* ; *beforeItemRef* ; *itemText* ; *itemRef* {; *sublist* ; *expanded*} )<br/>**INSERT IN LIST** ( * ; *list* ; * ; *itemText* ; *itemRef* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.INSERT IN LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| beforeItemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号 または 0: リストに最後に追加された項目 または *: 現在選択されている項目 |
| itemText | Text | &#8594;  | 新しいリスト項目のテキスト |
| itemRef | Integer | &#8594;  | 新しいリスト項目のユニークな参照番号 |
| sublist | Integer | &#8594;  | 新しいリスト項目に添付するオプションのサブリスト |
| expanded | Boolean | &#8594;  | サブリストの展開/折りたたみ状態を指定 |

<!-- END REF-->

## 説明 

<!--REF #_command_.INSERT IN LIST.Summary-->INSERT IN LIST コマンドは、*list*に渡されたリスト参照番号またはオブジェクト名のリストに *itemRef*が指定する新規項目を挿入します。<!-- END REF-->

オプションの第一引数 *\** を渡すと、*list* 引数はフォーム上のリストオブジェクトに対応するオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数は階層リスト参照 ([ListRef](# "階層リストへの参照")) です。リストオブジェクトを一つしか使わない場合や、2番目の *\** を使用しない場合は、両方のシンタックスを使用できます。他方フォーム上に同じ階層リストを参照する複数のオブジェクトがある場合で、2番目の *\** を渡して現在選択されている項目を参照する場合、それぞれのオブジェクトが個別に選択された項目をもつので、オブジェクト名に基づくシンタックスを使用しなければなりません。

*beforeItemRef* 引数は、新規リスト項目を挿入する位置を指定するために用います:

* リストに最後追加された項目の前に新しい項目を挿入するには値0を渡します。そして新しく挿入された項目が選択されます。
* 現在選択されている項目の前に新しい項目を挿入するには *\** を指定します。そして新しく挿入された項目が選択されます。
* 特定の項目の前に挿入するには、その項目の参照番号を渡します。この場合新しく挿入された項目は自動的には選択されません。項目参照番号に対応する項目がない場合、コマンドは何もしません。

新規項目のテキストを*itemText*に渡します。4D v16 R4以降で、項目に標準アクションが設定されている場合には、 ak standard action title定数を*itemText*に受け渡すとローカライズされたアクション名が自動的に採用されます。詳細については *標準アクション* を参照ください。

*itemRef*には新規項目の項目参照番号を渡します。この番号はユニーク値と見なされますが、実際には任意の値を渡すことができます。*itemRef*についての詳細は *階層リストの管理*を参照ください。

項目にサブ項目を設定する場合は、*sublist* に有効なリスト参照を渡します。この場合サブリストを展開または縮小を指定する*expanded*引数を渡さなければなりません。[True](true.md "True")または[False](false.md "False")の指定に従い、サブリストは展開または折りたたまれます。

## 例題 

以下のコードは、リスト*hList*の現在選択されている項目の直前に項目を挿入します（サブリストは添付されていません）:

```4d
 vlUniqueRef:=vlUniqueRef+1
 INSERT IN LIST(hList;*;"New Item";vlUniqueRef)
```

## 参照 

[APPEND TO LIST](append-to-list.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 625 |
| スレッドセーフである | &cross; |


