---
id: ob-remove
title: OB REMOVE
slug: /commands/ob-remove
displayed_sidebar: docs
---

<!--REF #_command_.OB REMOVE.Syntax-->**OB REMOVE** ( *object* ; *property* )<!-- END REF-->
<!--REF #_command_.OB REMOVE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| property | Text | &#8594;  | 削除したいプロパティの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB REMOVE.Summary-->**OB REMOVE**コマンドは、*object* 引数で指定したランゲージオブジェクトの、 *property* 引数で指定したプロパティを削除します。<!-- END REF-->で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して定義されているか、4Dオブジェクトフィールドが指定されている必要があります。

*property* 引数には、削除したいプロパティのラベルを渡します。  
*property* 引数では、大文字と小文字は区別されることに注意して下さい。

#### 例題 

オブジェクトから、 "age" のプロパティを削除する場合:

```4d
 var $Object : Object
 OB SET($Object;"name";"smith";"age";42;"client";True)
  // $Object={"name":"smith","age":42,"client":true}
 OB REMOVE($Object;"age")
  // $Object={"name":"smith","client":true}
```

#### 参照 

[OB SET](ob-set.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1226 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


