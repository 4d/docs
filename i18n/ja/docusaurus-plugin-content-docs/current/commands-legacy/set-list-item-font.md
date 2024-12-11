---
id: set-list-item-font
title: SET LIST ITEM FONT
slug: /commands/set-list-item-font
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST ITEM FONT.Syntax-->**SET LIST ITEM FONT** ( {* ;} *list* ; itemRef | * ; *font* )<!-- END REF-->
<!--REF #_command_.SET LIST ITEM FONT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, listはオブジェクト名 (文字列) 省略時, listはリスト参照番号 |
| list | Integer, Text | &#8594;  | リスト参照番号 (* 省略時), または リストオブジェクト名 (* 指定時) |
| itemRef &#124; * | 倍長整数, 演算子 | &#8594;  | 項目参照番号, または 0: リストに最後に追加された項目, または *: リスト中のカレント項目 |
| font | Text, Integer | &#8594;  | フォント名または番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET LIST ITEM FONT.Summary-->SET LIST ITEM FONT コマンドは、リスト参照またはオブジェクト名を*list*に指定したリスト中、*itemRef*引数で指定した項目の文字フォントを設定します。<!-- END REF-->

1番目の \* 引数を渡した場合、*list* 引数はフォーム中のリストオブジェクトのオブジェクト名 (文字列) です。この引数を渡さない場合、*list* 引数はリスト参照番号 ([ListRef](# "階層リストへの参照")) です。1つしかフォーム上でリストオブジェクトを使用しない、または2番目の \* を省略してリスト構造を処理対象とする場合、いずれのシンタックスも使用できます。同じリストの複数のリストオブジェクトがフォーム上にあり、2番目の \* を渡してカレントの項目を処理する場合、リストオブジェクトごとにカレント項目が異なるため、オブジェクト名に基づくシンタックスを使用しなければなりません。

*itemRef*には参照番号を渡すことができます。渡した項目参照番号を持つ項目が存在しない場合、コマンドは何も行いません。オプションとして*itemRef*に0を渡し、[APPEND TO LIST](append-to-list.md "APPEND TO LIST")コマンドを用いてリストへ最後に追加される項目を指定することができます。

最後に、*itemRef*には *\** を渡すことができます。この場合、コマンドはリストのカレント項目に対して適用されます。手動で複数のリスト項目が選択されている場合、最後に選択された項目がカレントリスト項目になります。選択された項目が存在しない場合、コマンドは何も行いません。

*font* 引数には、使用するフォントの名前または番号を渡します。デフォルトフォントを設定するには空の文字列を渡します。

#### 例題 

リストのカレント項目にTimesフォントを適用します:

```4d
 SET LIST ITEM FONT(*;"Mylist";*;"Times")
```

#### 参照 

[Get list item font](get-list-item-font.md)  
[OBJECT SET FONT](object-set-font.md)  
[SET LIST ITEM](set-list-item.md)  
[SET LIST ITEM ICON](set-list-item-icon.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 953 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


