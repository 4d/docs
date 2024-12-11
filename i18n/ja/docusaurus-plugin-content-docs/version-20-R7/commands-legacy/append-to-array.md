---
id: append-to-array
title: APPEND TO ARRAY
slug: /commands/append-to-array
displayed_sidebar: docs
---

<!--REF #_command_.APPEND TO ARRAY.Syntax-->**APPEND TO ARRAY** ( *array* ; *value* )<!-- END REF-->
<!--REF #_command_.APPEND TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| array | Array | &#8594;  | 要素を追加する配列 |
| value | Expression | &#8594;  | 追加する値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.APPEND TO ARRAY.Summary-->APPEND TO ARRAY コマンドは、*array*の最後に新規要素を追加し、その要素に*value*を代入します。<!-- END REF-->インタプリタモードでは、*array*が存在しない場合、コマンドは*value*の型に対応する配列を作成します。

このコマンドはあらゆるタイプの配列（文字列、数値、ブール、日付、ポインタ、ピクチャ）に対応します。

*value*のタイプは配列のタイプと一致しなくてはなりません。一致しない場合は、シンタックスエラー54“引数のタイプが違います”が生成されます。ただし、次の値は受け入れられます。

* 文字列配列（テキストまたは文字列）はテキストや文字列タイプの*value*を受け入れます。
* 数値配列（整数、倍長整数、実数）は、整数、倍長整数、実数、または時間タイプの*value*を受け入れます。

#### 例題 

以下のコードは:

```4d
 INSERT IN ARRAY($myarray;Size of array($myarray)+1)
 $myarray{Size of array($myarray)}:=$myvalue
```

このコードに置き換えることができます:

```4d
 APPEND TO ARRAY($myarray;$myvalue)
```

#### 参照 

[DELETE FROM ARRAY](delete-from-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 911 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


