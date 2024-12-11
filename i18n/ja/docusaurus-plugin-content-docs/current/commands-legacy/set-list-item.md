---
id: set-list-item
title: SET LIST ITEM
slug: /commands/set-list-item
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM.Syntax-->**SET LIST ITEM** ( {* ;} *list* ; itemRef | * ; *newItemText* ; *newItemRef* {; *sublist* ; *expanded*} )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 演算子, 倍長整数 | &#8594;  | 項目参照番号, または 0: リストに最後に追加された項目, または *: リスト中のカレント項目 |
| newItemText | Text | &#8594;  | 新しい項目テキスト |
| newItemRef | Integer | &#8594;  | 新しい項目参照番号 |
| sublist | Integer | &#8594;  | 項目に添付する新しいサブリスト, または 0: サブリストがない場合 (現在のサブリストを取り除く), または -1: 変更しない |
| expanded | Boolean | &#8594;  | オプションのサブリストの展開/折りたたみ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET LIST ITEM.Summary-->SET LIST ITEM コマンドは、*list*引数に渡した参照番号またはオブジェクト名のリストにおいて、*itemRef*で指定した項目を変更します。<!-- END REF-->

1番目の \* 引数を渡した場合、*list* 引数はフォーム中のリストオブジェクトのオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数はリスト参照番号 ([ListRef](# "階層リストへの参照")) です。1つしかフォーム上でリストオブジェクトを使用しない場合、いずれのシンタックスも使用できます。同じリストの複数のリストオブジェクトがフォーム上にあり、2番目の \* を渡してカレントの項目を処理する場合、リストオブジェクトごとにカレント項目が異なるため、オブジェクト名に基づくシンタックスを使用しなければなりません。

*itemRef*には参照番号を渡すことができます。渡した項目参照番号を持つ項目が存在しない場合、コマンドは何も行いません。オプションとして*itemRef*に0を渡し、[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドを用いてリストへ最後に追加される項目を指定することができます。  
最後に、*itemRef*には *\** を渡すことができます。この場合、コマンドはリストのカレント項目に対して適用されます。手動で複数のリスト項目が選択されている場合、最後に選択された項目がカレントリスト項目になります。選択された項目が存在しない場合、コマンドは何も行いません。

項目参照番号を使用して作業を実行する場合、項目がユニークな参照番号を持つリストを作成します。そうでなければ、項目を区別できません。詳細についてはの説明を参照してください。

*newItemText*に項目の新しいテキストを渡します。項目参照番号を変更する場合、*newItemRef*に新しい値を渡します。変更しない場合は同じ値を渡します。

項目にサブリストを添付する場合、サブリストの参照番号を*subList*に渡します。この時、新たなサブリスを展開するには*expanded*に[True](true.md "True")を、そうでない場合は[False](false.md "False")を渡します。

項目にすでに添付されているサブリストを切り離す場合は、*sublist*に0を渡します。この場合、[GET LIST ITEM](get-list-item.md "GET LIST ITEM")コマンドを使用して、そのリストの参照番号をあらかじめ取得しておくとよいでしょう。そうすれば、リストが必要なくなったときに[CLEAR LIST](clear-list.md "CLEAR LIST")コマンドを使用して削除することができます。

項目のサブリストプロパティを変更しない場合は、*sublist*に-1を渡します。

**Note:** 引数*sublist*と*expanded*はともにオプションですが、指定する場合は組み合わせて指定してください。

#### 例題 1 

*hList*はユニークな参照番号が付いた項目を持つリストです。以下のボタン用オブジェクトメソッドは、現在選択されているリスト項目にサブ項目を追加します。

```4d
 $vlItemPos:=Selected list items(hList)
 If($vlItemPos>0)
    GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText;$hSublist;$vbExpanded)
    $vbNewSubList:=Not(Is a list($hSublist))
    If($vbNewSubList)
       $hSublist:=New list
    End if
    vlUniqueRef:=vlUniqueRef+1
    APPEND TO LIST($hSubList;"New Item";vlUniqueRef)
    If($vbNewSubList)
       SET LIST ITEM(hList;$vlItemRef;$vsItemText;$vlItemRef;$hSublist;True)
    End if
    SELECT LIST ITEMS BY REFERENCE(hList;vlUniqueRef)
 End if
```

#### 例題 2 

[GET LIST ITEM](get-list-item.md "GET LIST ITEM")コマンドの例題参照

#### 例題 3 

[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドの例題参照

#### 参照 

[GET LIST ITEM](get-list-item.md)  
[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 385 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


