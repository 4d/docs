---
id: select-list-items-by-reference
title: SELECT LIST ITEMS BY REFERENCE
slug: /commands/select-list-items-by-reference
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Syntax-->**SELECT LIST ITEMS BY REFERENCE** ( *list* ; *itemRef* {; *refArray*} )<!-- END REF-->
<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | リスト参照番号 |
| itemRef | Integer | &#8594;  | 項目参照番号 または 0: リストに最後に追加された項目 |
| refArray | Integer array | &#8594;  | 項目参照番号配列 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SELECT LIST ITEMS BY REFERENCE.Summary-->SELECT LIST ITEMS BY REFERENCE コマンドは、*list*に渡された参照番号のリストにおいて、*itemRef*ならびにオプションとして*refArray*に渡された項目参照番号を持つ項目を選択します。<!-- END REF-->

渡した項目参照番号の項目が存在しない場合、コマンドは何も行いません。

項目が現在表示されていない場合（つまり、縮小されているサブリスト内にその項目がある場合）、コマンドは必要なサブリストを展開し、その項目を表示します。

*refArray*引数を渡さない場合、*itemRef*引数は選択される項目の参照番号を示します。項目番号がそのリスト中の項目に対応しない場合、コマンドは何も行いません。リストに最後に追加された項目を示すために値0を指定することもできます。

任意の引数である*refArray*を使用すると、リスト中で複数の項目を同時に選択することができます。*refArray*には必ず配列を渡し、その各要素は選択する項目の固定参照番号を示します。  
その場合、結果として選択された各項目の中で、*itemRef* 引数に指定した項目がそのリストの新しいカレント項目になります。この項目は、配列によって定義した一連の項目に含まれていない可能性もあります。カレント項目とは、具体的に言うと、[EDIT ITEM](edit-item.md "EDIT ITEM")コマンドを使用した場合に編集モードに移行される項目のことです。

**Note:** 階層リスト内で複数のリスト項目を同時に選択するには（手動、あるいはプログラムから）、そのリストに対して複数選択可プロパティを有効に設定しておかなくてはなりません。このプロパティの設定は、[SET LIST PROPERTIES](set-list-properties.md "SET LIST PROPERTIES")コマンドを使用して行います。

項目参照番号を使用して作業を実行する場合、項目がユニークな参照番号を持つリストを作成します。そうでなければ、項目を区別できません。詳細については[APPEND TO LIST](append-to-list.md "APPEND TO LIST")の説明を参照してください。

#### 例題 

*hList*は一意の参照番号が付いた項目を持つリストです。以下のボタン用オブジェクトメソッドは、現在選択されている項目に親項目が存在する場合にはその親項目を選択します:

```4d
 $vlItemPos:=Selected list items(hList) // 選択された項目の位置を取得
 GET LIST ITEM(hList;$vlItemPos;$vlItemRef;$vsItemText) // 選択された項目の参照番号を取得
 $vlParentItemRef:=List item parent(hList;$vlItemRef) // 親項目の参照を取得 (あれば)
 If($vlParentItemRef>0)
    SELECT LIST ITEM BY REFERENCE(hList;List item parent(hList;$vlItemRef)) // 親項目を選択
 End if
```

#### 参照 

[EDIT ITEM](edit-item.md)  
[SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md)  
[Selected list items](selected-list-items.md)  