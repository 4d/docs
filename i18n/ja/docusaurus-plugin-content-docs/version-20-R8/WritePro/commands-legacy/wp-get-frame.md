---
id: wp-get-frame
title: WP Get frame
slug: /WritePro/commands/wp-get-frame
displayed_sidebar: docs
---

<!--REF #_command_.WP Get frame.Syntax-->**WP Get frame** ( {* ;} *wpArea* {; *textBoxID*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get frame.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、wpArea はフォームオブジェクト(文字列)。省略時、wpArea はオブジェクトフィールドあるいは変数 |
| wpArea | Text | &#8594;  | フォームオブジェクト名(* 指定時)あるいは4D Write Pro オブジェクト変数あるいはフィールド(* 省略時) |
| textBoxID | 文字 | &#x1F858; | テキストボックスのID(テキストボックスにフォーカスがある場合にのみ値が入ります) |
| 戻り値 | Integer | &#8592; | カーソルが現在設定されているフレーム |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.WP Get frame.Summary-->**WP Get frame** コマンドは*wpArea* 引数で指定した4D Write Pro エリア内で、カーソルが現在設定されているフレームを返します。<!-- END REF-->

任意の *\** 引数を渡した場合、*wpArea* 引数はフォームオブジェクト名(文字列)です。省略時、*wpArea* 引数は4D Write Pro オブジェクト変数あるいはフィールドです。

**注**: このコマンドは、*wpArea* 引数がフォームオブジェクトに割り当てられている場合にのみ使用可能です(つまり引数がカレントのフォーム/ページに表示されている必要があります)。

返された値は、*4D Write Pro* テーマ内にある以下の定数のどれか一つと比較することができます:

| 定数                                | 型    | 値  | コメント                                           |
| --------------------------------- | ---- | -- | ---------------------------------------------- |
| wk body                           | 倍長整数 | 0  | セクションのボディフレーム                                  |
| wk current section default footer | 倍長整数 | 10 | セクションのメインのフッター(アクティブなサブセクションのフッターがない場合にのみ利用可能) |
| wk current section default header | 倍長整数 | 9  | セクションのメインのヘッダー(アクティブなサブセクションのヘッダーがない場合にのみ利用可能) |
| wk current section first footer   | 倍長整数 | 4  | セクションの最初のページのフッター                              |
| wk current section first header   | 倍長整数 | 3  | セクションの最初のページのヘッダー                              |
| wk current section left footer    | 倍長整数 | 6  | セクションの左ページのフッター                                |
| wk current section left header    | 倍長整数 | 5  | セクションの左ページのヘッダー                                |
| wk current section right footer   | 倍長整数 | 8  | セクションの右ページのフッター                                |
| wk current section right header   | 倍長整数 | 7  | セクションの右ページのヘッダー                                |
| wk text box                       | 倍長整数 | 11 | テキストボックス                                       |

カレントのカーソル位置がテキストボックス要素内にある場合、テキストボックスの要素 **ID** は*textBoxID* 引数に返されます。その他の場合には、この引数は空の値が返されます。

#### 例題 

ユーザーがカーソルをヘッダーあるいはフッターフレームに設定したかどうかを確認したい場合を考えます:

```4d
 var $frameGet : Integer
 $frameGet:=WP Get frame(*;"WParea")
 If($frameGet=wk body)|($frameGet=wk text box)
    ALERT("フッターあるいはヘッダーを選択してください")
 End if
```

#### 参照 

[WP Get footer](wp-get-footer.md)  
[WP SET FRAME](wp-set-frame.md)  