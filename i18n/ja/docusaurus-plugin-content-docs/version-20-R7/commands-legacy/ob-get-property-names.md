---
id: ob-get-property-names
title: OB GET PROPERTY NAMES
slug: /commands/ob-get-property-names
displayed_sidebar: docs
---

<!--REF #_command_.OB GET PROPERTY NAMES.Syntax-->**OB GET PROPERTY NAMES** ( *object* ; *arrProperties* {; *arrTypes*} )<!-- END REF-->
<!--REF #_command_.OB GET PROPERTY NAMES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object | &#8594;  | 構造化されたオブジェクト |
| arrProperties | Text array | &#8592; | プロパティ名 |
| arrTypes | Integer array | &#8592; | プロパティの型 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB GET PROPERTY NAMES.Summary-->**OB GET PROPERTY NAMES**コマンドは、 *object* 引数で指定したランゲージオブジェクトの中に含まれているプロパティの名前を、 *arrProperties* という名前のテキスト配列に入れて返します。<!-- END REF-->

*object* で指定するオブジェクトは、 [C\_OBJECT](c-object.md) コマンドを使用して作成されている、あるいはオブジェクトフィールドが選択されている必要があります。

*arrProperties* 引数にはテキスト配列を渡します。配列が存在しない場合、コマンドが自動的に作成してリサイズします。

また、任意の *arrTypes* 引数に倍長整数配列を渡すこともできます。この場合、 *arrProperties* 内の個々の要素に関して、プロパティに保存された値の型を *arrTypes* に返します。返される値は、 "*Field and Variable Types*" テーマ内にある以下の定数のどれかになります:

| 定数            | 型    | 値   |
| ------------- | ---- | --- |
| Is Boolean    | 倍長整数 | 6   |
| Is collection | 倍長整数 | 42  |
| Is null       | 倍長整数 | 255 |
| Is object     | 倍長整数 | 38  |
| Is real       | 倍長整数 | 1   |
| Is text       | 倍長整数 | 2   |
| Object array  | 倍長整数 | 39  |

**注:** 値が配列型の場合、コマンドは Is collection を返します。

#### 例題 1 

オブジェクトが空でないかどうかをテストしたい場合を考えます:

```4d
 ARRAY TEXT(arrNames;0)
 ARRAY LONGINT(arrTypes;0)
 var $ref_richard : Object
 OB SET($ref_richard;"name";"Richard";"age";7)
 OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)
  // arrNames{1}="name", arrNames{2}="age"
  // arrTypes{1}=2, arrTypes{2}=1
 If(Size of array(arrNames)#0)
  // ...
 End if
```

#### 例題 2 

オブジェクト配列の要素を使用する場合を考えます:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4;"girl";True) //追加の属性
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James")
 OB SET NULL($ref_james;"age") //null属性
 APPEND TO ARRAY($arrayChildren;$ref_james)
 
 OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)
  // $arrayChildren{1} = {"name":"Richard","age":7}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
 
 OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrNames{3}="girl"
  // $arrTypes{1}=2
  // $arrTypes{2}=1
  // $arrTypes{3}=6
 
 OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)
  // $arrayChildren{3} = {"name":"James","age":null}
  // $arrNames{1}="name"
  // $arrNames{2}="age"
  // $arrTypes{1}=2
  // $arrTypes{2}=255
```

#### 参照 

[OB Get type](ob-get-type.md)  
[OB SET NULL](ob-set-null.md)  