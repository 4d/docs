---
id: object-get-value
title: OBJECT Get value
slug: /commands/object-get-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get value.Syntax-->**OBJECT Get value** ( *objectName* ) : any<!-- END REF-->
<!--REF #_command_.OBJECT Get value.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectName | Text | &#8594;  | オブジェクト名 |
| 戻り値 | any | &#8592; | フォームオブジェクトのデータソースのカレント値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get value.Summary-->**OBJECT Get value** コマンドは、*objectName* 引数で指定されたフォームオブジェクトのデータソースのカレント値を返します。<!-- END REF-->

*objectName* 引数には、フォームオブジェクトの名前(文字列)を渡します。ワイルドカード文字(“@”)を使用して複数のオブジェクトを指定した場合、最初のフォームオブジェクトのデータソースの値のみが返されます。

**注**: **OBJECT Get value** はリストボックスカラムオブジェクトに対しては使用できません。

**返される値**

フォームオブジェクトのデータソースのカレントの値。

**注**:

* データソースが配列の場合、コマンドは配列のインデックスを返します。
* データソースが式の場合、コマンドは最後の実行サイクルから計算された値を返します。

#### 例題 

[OBJECT SET VALUE](object-set-value.md) コマンドの例題を参照してください。

#### 参照 

[OBJECT SET VALUE](object-set-value.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1743 |
| スレッドセーフである | &cross; |


