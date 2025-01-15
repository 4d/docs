---
id: wa-get-current-url
title: WA Get current URL
slug: /commands/wa-get-current-url
displayed_sidebar: docs
---

<!--REF #_command_.WA Get current URL.Syntax-->**WA Get current URL** ( {* ;} *object* ) : Text<!-- END REF-->
<!--REF #_command_.WA Get current URL.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, objectはオブジェクト名 (文字列) 省略時, objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または 変数 (* 省略時) |
| 戻り値 | Text | &#8592; | 現在WebエリアにロードされているURL |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WA Get current URL.Summary-->WA Get current URL コマンドは、*\** と *object* 引数で指定したWebエリアに現在表示されているページのURLアドレスを返します。<!-- END REF-->

現在のURLが利用できない場合、コマンドは空の文字列を返します。

Webページが完全にロードされると、この関数から返される値はWebエリアに関連付けられたURL変数の値と同じです。ページがロード中の場合、2つの値は異なります。関数は完全にロードされたURLを返し、変数にはロード中のURLが格納されています。

#### 例題 

"www.apple.com"のページが表示されていて"www.4d.com"ページをロード中の場合:

```4d
 $url:=WA Get current URL(MyWArea) //は "http://www.apple.com"
  //関連付けられたURL変数は "http://www.4d.com"
```

#### 参照 

[WA OPEN URL](wa-open-url.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1025 |
| スレッドセーフである | &cross; |


