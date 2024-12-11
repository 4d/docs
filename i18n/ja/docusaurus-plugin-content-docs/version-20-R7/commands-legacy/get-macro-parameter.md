---
id: get-macro-parameter
title: GET MACRO PARAMETER
slug: /commands/get-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.GET MACRO PARAMETER.Syntax-->**GET MACRO PARAMETER** ( *selector* ; *textParam* )<!-- END REF-->
<!--REF #_command_.GET MACRO PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | 使用するセレクション |
| textParam | Text | &#8592; | 返されたテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET MACRO PARAMETER.Summary-->GET MACRO PARAMETERコマンドは、呼び出されたメソッドテキストのすべてまたは一部を引数*textParam*に返します。<!-- END REF-->

引数*selector* を使用して、返される情報のタイプを設定します。テーマ“” に追加されている以下の定数の一つを渡します。

| 定数                      | 型    | 値 |
| ----------------------- | ---- | - |
| Full method text        | 倍長整数 | 1 |
| Highlighted method text | 倍長整数 | 2 |

Full method textを*selector*に渡すと、メソッドのテキストはすべて*textParam*に返されます。Highlighted method textを*selector*に渡すと、メソッドで選択されたテキストだけが*textParam*に返されます。

#### 例題 

[SET MACRO PARAMETER](set-macro-parameter.md "SET MACRO PARAMETER")コマンドの例を参照してください。

#### 参照 

[SET MACRO PARAMETER](set-macro-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 997 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


