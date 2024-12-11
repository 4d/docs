---
id: ob-get-property-names
title: OB GET PROPERTY NAMES
slug: /commands/ob-get-property-names
displayed_sidebar: docs
---

<!--REF #_command_.OB GET PROPERTY NAMES.Syntax-->**OB GET PROPERTY NAMES** ( *object* ; *arrProperties* {; *arrTypes*} )<!-- END REF-->
<!--REF #_command_.OB GET PROPERTY NAMES.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| object | Object | &#8594;  | Structured object |
| arrProperties | Text array | &#8592; | Property names |
| arrTypes | Array integer | &#8592; | Property types |

<!-- END REF-->

#### Description 

<!--REF #_command_.OB GET PROPERTY NAMES.Summary-->The **OB GET PROPERTY NAMES** command returns, in *arrProperties*, the names of the properties contained in the language object designated by the *object* parameter.<!-- END REF-->can be an object varialble or a 4D object field.

Pass a text array in the *arrProperties* parameter. If the array does not exist, the command creates and sizes it automatically. 

Optionally, you can also pass a longint array in *arrTypes*. For each element of *arrProperties*, the command returns, in *arrTypes*, the type of value stored in the property. You can compare the values received with the following constants, found in the "*Field and Variable Types*" theme:

| Constant      | Type    | Value |
| ------------- | ------- | ----- |
| Is Boolean    | Integer | 6     |
| Is collection | Integer | 42    |
| Is null       | Integer | 255   |
| Is object     | Integer | 38    |
| Is real       | Integer | 1     |
| Is text       | Integer | 2     |
| Object array  | Integer | 39    |

**Note:** For array attributes, the command returns Is collection. 

#### Example 1 

You want to test that an object is not empty:

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

#### Example 2 

Using an object array element:

```4d
 var $Children;$ref_richard;$ref_susan;$ref_james : Object
 ARRAY OBJECT($arrayChildren;0)
 
 OB SET($ref_richard;"name";"Richard";"age";7)
 APPEND TO ARRAY($arrayChildren;$ref_richard)
 OB SET($ref_susan;"name";"Susan";"age";4;"girl";True) //additional attribute
 APPEND TO ARRAY($arrayChildren;$ref_susan)
 OB SET($ref_james;"name";"James")
 OB SET NULL($ref_james;"age") //null attribute
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

#### See also 

[OB Get type](ob-get-type.md)  
[OB SET NULL](ob-set-null.md)  

#### Properties
|  |  |
| --- | --- |
| Command number | 1232 |
| Thread safe | &check; |
| Forbidden on the server ||


