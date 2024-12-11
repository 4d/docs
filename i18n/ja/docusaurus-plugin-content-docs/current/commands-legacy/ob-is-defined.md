---
id: ob-is-defined
title: OB Is defined
slug: /commands/ob-is-defined
displayed_sidebar: docs
---

<!--REF #_command_.OB Is defined.Syntax-->**OB Is defined** ( *object* {; *property*} ) : Boolean<!-- END REF-->
<!--REF #_command_.OB Is defined.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| property | Text | &#8594;  | 指定時にはプロパティをチェック、省略時にはオブジェクトをチェック |
| 戻り値 | Boolean | &#8592; | property 省略時:object が定義済みの場合はTrue を、それ以外は False を返す<br/>property 指定時:property が定義済みの場合はTrue を、それ以外は False を返す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Is defined.Summary-->**OB Is defined**コマンドは、*object* または *property* が定義済みである場合にはTrueを返し、それ以外の場合にはFalseを返します。<!-- END REF-->引数で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

*property* 引数を省略した場合、コマンドは *object* が定義済みかどうかを調べます。オブジェクトの中身が初期化されていれば定義済みであるとみなされます。

**注:** 定義済みのオブジェクトでも空である場合もあります。オブジェクトが空もしくは未定義であるかどうかを調べる場合には、 [OB Is empty](ob-is-empty.md) コマンドを使用して下さい。

*property* 引数を渡した場合、コマンドは指定されたプロパティが *object* 内に存在するかどうかをチェックします。*property* 引数では、大文字と小文字は区別されることに注意して下さい。

#### 例題 1 

オブジェクトの初期化を調べる記法:

```4d
 var $object : Object
 $def:=OB Is defined($object) // $object は未定義なので$def=false
 
 OB SET($object;"Name";"Martin")
 OB REMOVE($object;"Name")
 $def2:=OB Is defined($object) // $object は空({})ではあるものの定義済みなので$def2=true
```

#### 例題 2 

プロパティが存在しているかどうかを調べます:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
  //...
 If(OB Is defined($ref;"age"))
  //...
 End if
```

このテストは以下のコマンドと同等です:

```4d
 If(OB Get type($Object;"name")#Is undefined)
```

#### 参照 

[OB Is empty](ob-is-empty.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1231 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


