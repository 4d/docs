---
id: set-list-item-icon
title: SET LIST ITEM ICON
slug: /commands/set-list-item-icon
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM ICON.Syntax-->**SET LIST ITEM ICON** ( {* ;} *list* ; itemRef | * ; *icon* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM ICON.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号, または 0: リストに最後に追加された項目, または *: リスト中のカレント項目 |
| icon | Picture | &#8594;  | 項目に割り当てるアイコン |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET LIST ITEM ICON.Summary-->SET LIST ITEM ICON コマンドは、リスト参照またはオブジェクト名を*list*に指定したリスト中、*itemRef*引数で指定した項目に割り当てるアイコンを設定します。<!-- END REF-->

**Note:** [SET LIST ITEM PROPERTIES](set-list-item-properties.md "SET LIST ITEM PROPERTIES") コマンドを使用して、項目に割り当てるアイコンを設定することができます。しかし[SET LIST ITEM PROPERTIES](set-list-item-properties.md "SET LIST ITEM PROPERTIES")はスタティックピクチャ参照 (リソース参照またはピクチャライブラリのピクチャ) のみを受け入れます。

1番目の \* 引数を渡した場合、*list* 引数はフォーム中のリストオブジェクトのオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数はリスト参照番号 ([ListRef](# "階層リストへの参照")) です。1つしかフォーム上でリストオブジェクトを使用しない、または2番目の \* を省略してリスト構造を処理対象とする場合、いずれのシンタックスも使用できます。同じリストの複数のリストオブジェクトがフォーム上にあり、2番目の \* を渡してカレントの項目を処理する場合、リストオブジェクトごとにカレント項目が異なるため、オブジェクト名に基づくシンタックスを使用しなければなりません。

*itemRef*には参照番号を渡すことができます。渡した項目参照番号を持つ項目が存在しない場合、コマンドは何も行いません。オプションとして*itemRef*に0を渡し、[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドを用いてリストへ最後に追加される項目を指定することができます。  
最後に、*itemRef*には *\** を渡すことができます。この場合、コマンドはリストのカレント項目に対して適用されます。手動で複数のリスト項目が選択されている場合、最後に選択された項目がカレントリスト項目になります。選択された項目が存在しない場合、コマンドは何も行いません。  
  
*icon* 引数には有効な4Dピクチャ式 (フィールド、変数、ポインタなど) を渡します。ピクチャは項目の左側に表示されます。

#### 例題 

同じピクチャーを二つの異なる項目に適用したい場合を考えます。以下のコードは、ピクチャーがメモリに一度読み出されているために、最適化されています:

```4d
 var $picture : Picture
 READ PICTURE FILE("myPict.png";$picture)
 SET LIST ITEM ICON(mylist;ref1;$picture)
 SET LIST ITEM ICON(mylist;ref2;$picture)
```

#### 参照 

[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM FONT](set-list-item-font.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 950 |
| スレッドセーフである | &cross; |


