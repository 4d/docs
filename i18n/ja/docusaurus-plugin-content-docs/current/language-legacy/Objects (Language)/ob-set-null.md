---
id: ob-set-null
title: OB SET NULL
slug: /commands/ob-set-null
displayed_sidebar: docs
---

<!--REF #_command_.OB SET NULL.Syntax-->**OB SET NULL** ( *object* : Object ; *property* : Text )<!-- END REF-->
<!--REF #_command_.OB SET NULL.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594; | 構造化されたオブジェクト |
| property | Text | &#8594; | null 値を適用したいプロパティ名 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|15|変更|
|14|初出|

</details>
</div>

## 説明 

<!--REF #_command_.OB SET NULL.Summary-->**OB SET NULL**コマンドは、*object* 引数で指定したランゲージオブジェクトの中に**null値**を保存します。<!-- END REF-->で指定するオブジェクトは、 *C\_OBJECT* コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

*property* 引数には、 **null** の値を保存したいプロパティのラベル(名前)を指定します。オブジェクト内に指定されたプロパティが存在する場合、その値は **null** で上書きされます。プロパティが存在しない場合、新たにプロパティが作成されます。  
*property* 引数では、大文字と小文字は区別されることに注意して下さい。

## 例題 

Lea の "age" というプロパティにnull を入れる場合:

```4d
 var $ref : Object
 OB SET($ref;"name";"Lea";"age";4)
  // $ref = {"name":"Lea","age":4}
 ...
 OB SET NULL($ref ;"age")
  // $ref = {"name":"Lea","age":null}
```

## 参照 

[Null](../commands/null)  
[OB GET PROPERTY NAMES](../commands/ob-get-property-names)  
[OB SET](../commands/ob-set)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1233 |
| スレッドセーフである | yes |


