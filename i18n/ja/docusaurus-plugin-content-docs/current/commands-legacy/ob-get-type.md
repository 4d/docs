---
id: ob-get-type
title: OB Get type
slug: /commands/ob-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OB Get type.Syntax-->**OB Get type** ( *object* ; *property* ) : Integer<!-- END REF-->
<!--REF #_command_.OB Get type.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | 構造化されたオブジェクト |
| property | Text | &#8594;  | 読み出したいプロパティ名 |
| 戻り値 | Integer | &#8592; | プロパティの値のタイプ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Get type.Summary-->**OB Get type**コマンドは、*object* で指定したランゲージオブジェクトの *property* に関連付けられた値の型を返します。<!-- END REF-->で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

*property* 引数には、値の型を取得したいプロパティのラベルを渡します。  
*property* 引数では、大文字と小文字は区別されることに注意して下さい。

コマンドは、指定した値の型を示す倍長整数の値を返します。返される値は、 "*Field and Variable Types*" テーマ内にある以下の定数のどれかになります。

| 定数            | 型    | 値   |
| ------------- | ---- | --- |
| Is Boolean    | 倍長整数 | 6   |
| Is collection | 倍長整数 | 42  |
| Is date       | 倍長整数 | 4   |
| Is null       | 倍長整数 | 255 |
| Is object     | 倍長整数 | 38  |
| Is real       | 倍長整数 | 1   |
| Is text       | 倍長整数 | 2   |
| Is undefined  | 倍長整数 | 5   |

**注:** 値がピクチャー型の場合、コマンドは Is object を返します。

#### 例題 

よくある値の型を取得する場合:

```4d
 var $ref : Object
 OB SET($ref;"name";"smith";"age";42)
 $type:=OB Get type($ref;"name") //$type returns 2
 $type2:=OB Get type($ref;"age") //$type2 returns 1
```

#### 参照 

[OB GET PROPERTY NAMES](ob-get-property-names.md)  
[Value type](value-type.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1230 |
| スレッドセーフである | &check; |


