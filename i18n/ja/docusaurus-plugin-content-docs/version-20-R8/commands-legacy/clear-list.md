---
id: clear-list
title: CLEAR LIST
slug: /commands/clear-list
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR LIST.Syntax-->**CLEAR LIST** ( *list* {; *} )<!-- END REF-->
<!--REF #_command_.CLEAR LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| list | Integer | &#8594;  | リスト参照番号 |
| * | Operator |  &#8594;  | 指定した場合, サブリストがあればそれもメモリからクリア 省略した場合, サブリストがあってもそれをクリアしない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR LIST.Summary-->CLEAR LIST コマンドは、*list*に渡したリスト参照番号を持つ階層リストを廃棄します。<!-- END REF-->

通常は、リストの項目またはサブ項目にサブリストがあれば一緒にクリアされるように、オプションの引数 *\** を渡します。

プロパティリストでフォームオブジェクトに関連付けたリストをクリアする必要はありません。そうしたリストのロードとクリアは4Dが自動的に処理します。一方で、BLOBからリストのロード、コピー、取り出しを行ったり、プログラムでリストを作成した場合は、リストを使い終わるたびにCLEAR LISTコマンドを呼ぶ必要があります。

フォームに表示されているリストから項目にあるサブリストだけをクリアするには、以下のように行います:

1. 親項目に対して[GET LIST ITEM](get-list-item.md "GET LIST ITEM")コマンドを呼び出して、サブリストのリスト参照を取得する。
2. 親項目に対して[SET LIST ITEM](set-list-item.md "SET LIST ITEM")コマンドを呼び出して、サブリストを消去する前にサブリストを親項目から切り離す。
3. CLEAR LISTコマンドを呼び出して、[GET LIST ITEM](get-list-item.md "GET LIST ITEM")コマンドで取得した参照番号を持つサブリストを消去する。

#### 例題 1 

(ウィンドウを閉じてフォームがアンロードされるときなどに) 必要のないオブジェクトやデータをすべて消去するクリーンアップルーチン中で、クリアしようとするリストはすでにクリアされたものであるかもしれません。[Is a list](is-a-list.md "Is a list")を使用して、クリアする必要のあるリストだけをクリアすることができます:

```4d
  // Extract of clean-up routine
 If(Is a list(hlList))
    CLEAR LIST(hlList;*)
 End if
```

#### 例題 2 

[Load list](load-list.md "Load list") コマンドの例題参照

#### 例題 3 

[BLOB to list](blob-to-list.md "BLOB to list") コマンドの例題参照

#### 参照 

[BLOB to list](blob-to-list.md)  
[Load list](load-list.md)  
[New list](new-list.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 377 |
| スレッドセーフである | &cross; |


