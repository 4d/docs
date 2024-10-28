---
id: wp-set-frame
title: WP SET FRAME
slug: /WritePro/commands/wp-set-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP SET FRAME.Syntax-->**WP SET FRAME** ( {* ;} *wpArea* ; *frameSelector* {; *textBoxID*} )<!-- END REF-->
<!--REF #_command_.WP SET FRAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、wpArea はフォームオブジェクト(文字列)。省略時、wpArea はオブジェクトフィールドあるいは変数 |
| wpArea | Text | &#8594;  | フォームオブジェクト名(* 指定時)あるいは4D Write Pro オブジェクト変数あるいはフィールド(* 省略時) |
| frameSelector | Integer | &#8594;  | カーソルを設定するフレーム |
| textBoxID | Text | &#8594;  | カーソルを設定したいテキストボックスのID |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP SET FRAME.Summary-->**WP SET FRAME** コマンドは*wpArea* 引数で指定した4D Write Pro エリア内の、*frameSelector* 引数で指定したフレーム内、または *textBoxID* 引数で指定したテキストボックス内にカーソルを設定します。<!-- END REF-->

任意の *\** 引数を渡した場合、*wpArea* 引数はフォームオブジェクト名(文字列)です。省略時、*wpArea* 引数は4D Write Pro オブジェクト変数あるいはフィールドです。

**注**: このコマンドは*wpArea* 引数がフォームオブジェクトに割り当てられている場合にのみ使用することができます(つまりカレントのフォーム/ページに表示されている必要があります)。

*frameSelector* 引数には、*4D Write Pro* テーマ内にある以下の定数のどれか一つを渡すことができます:

| 定数                                | 型    | 値  | コメント                                           |
| --------------------------------- | ---- | -- | ---------------------------------------------- |
| wk body                           | 倍長整数 | 0  | セクションのボディフレーム                                  |
| wk current page footer            | 倍長整数 | 2  |                                                |
| wk current page header            | 倍長整数 | 1  |                                                |
| wk current section default footer | 倍長整数 | 10 | セクションのメインのフッター(アクティブなサブセクションのフッターがない場合にのみ利用可能) |
| wk current section default header | 倍長整数 | 9  | セクションのメインのヘッダー(アクティブなサブセクションのヘッダーがない場合にのみ利用可能) |
| wk current section first footer   | 倍長整数 | 4  | セクションの最初のページのフッター                              |
| wk current section first header   | 倍長整数 | 3  | セクションの最初のページのヘッダー                              |
| wk current section left footer    | 倍長整数 | 6  | セクションの左ページのフッター                                |
| wk current section left header    | 倍長整数 | 5  | セクションの左ページのヘッダー                                |
| wk current section right footer   | 倍長整数 | 8  | セクションの右ページのフッター                                |
| wk current section right header   | 倍長整数 | 7  | セクションの右ページのヘッダー                                |
| wk text box                       | 倍長整数 | 11 | テキストボックス                                       |

* *frameSelector* 引数にwk current page header or wk current page footer が渡された場合、**WP SET FRAME** はサブセクションタイプにかかわらず、選択された最初のページのヘッダーあるいはフッターにフォーカスを移します(ページにヘッダーあるいはフッターがない場合、コマンドは何もしません)。
* *frameSelector* 引数にwk current section\[...\] 系の定数が渡された場合、**WP SET FRAME** は選択された最初のセクション内の指定されたサブセクションヘッダーあるいはフッターにフォーカスを移します(そこにヘッダーあるいはフッターがない場合、コマンドは何もしません)。
* 選択されたセクション内に*frameSelector* 引数で指定されたフレームが存在しない場合、**WP SET FRAME** は何もしません(例えば、*wpArea* 引数で指定したエリア内に左ページと右ページの区別がない場合に渡されたwk current section left header など)。

*frameSelector* \= wk text box の場合、*textBoxID* 引数にはフォーカスを設定したテキストボックスのIDを渡す必要があります。このとき、*textBoxID* が省略されているか、指定されたID のテキストボックスがないか、テキストボックスのアンカー条件に合致するページがない場合、コマンドは何もしません。

*frameSelector* \# wk text box の場合には、*textBoxID* 引数は渡しても無視されます。

#### 例題 

カレントセレクションの左のフッターにカーソルを設定したい場合を考えます:

```4d
 WP SET FRAME(*;"WPArea";wk current section left footer)
```

#### 参照 

[WP Get frame](wp-get-frame.md)  