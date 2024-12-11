---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *objectName* ; *value* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectName | Text | &#8594;  | オブジェクト名 |
| value | any | &#8594;  | フォームオブジェクトのデータソースの新しい値 |

<!-- END REF-->

#### 例題 1 

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** は、*objectName* 引数で指定したフォームオブジェクトのカレントのデータソースに対して*value* 引数の値を設定します。<!-- END REF-->

*objectName* 引数には、フォームオブジェクト名(文字列)を渡します。ワイルドカード文字(“@”)を使用することで複数のフォームオブジェクトの値を設定することができます。

*value* 引数にはフォームオブジェクトのデータソースの新しい値を渡します。

**注**: データソースが代入不可能な式だった場合、**OBJECT SET VALUE** は何もしません。詳細な情報については、*代入可 vs 代入不可の式* を参照して下さい。

#### 例題 2 

あるフォームオブジェクトのデータソース値を取得し、その名前を取得して新しい値を設定したい場合を考えます:

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current)) // 現在の値を取得
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10) // フォームオブジェクト名でフォームオブジェクトを探し、現在の値+10 の値を設定する
```

#### 参照 

[OBJECT Get value](object-get-value.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1742 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


