---
id: collection-to-array
title: COLLECTION TO ARRAY
slug: /commands/collection-to-array
displayed_sidebar: docs
---

<!--REF #_command_.COLLECTION TO ARRAY.Syntax-->**COLLECTION TO ARRAY** ( *collection* ; *array* {; *propertyName*}{; *array2* ; *propertyName2* ; ... ; *arrayN* ; *propertyNameN*} )<!-- END REF-->
<!--REF #_command_.COLLECTION TO ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| collection | Collection | &#8594;  | 配列へとコピーしたいコレクション |
| array | Array | &#8592; | コレクションの要素を受け取る配列。propertyName引数指定時はコレクションのpropertyNameの値を受け取る配列。 |
| propertyName | Text | &#8594;  | 配列へとコピーしたいオブジェクトのプロパティ名(""を指定で全要素をコピー) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.COLLECTION TO ARRAY.Summary-->**COLLECTION TO ARRAY** コマンドは、*collection* 引数のコレクションの要素あるいは*propertyName* 引数で指定したプロパティの値を、*array* 引数で指定した一つまたはそれ以上の配列へと渡します。<!-- END REF-->

このコマンドは値を格納している*collection* に対して使用することもできますし、オブジェクトを格納している*collection* に対して使用することもできます。後者の場合には*propertyName* 引数は必須になります。

* *propertyName* 引数を省略した場合、コマンドは*collection* 内の全ての要素を*array* 引数の配列へとコピーします。コマンド実行後、*array* のサイズはコレクションのlength と同一になります。
* 一つあるいはそれ以上の*propertyName* 引数を渡す場合、*collection* はオブジェクトのコレクションでなければいけません(他の要素は無視されます)。この場合、*propertyName* 引数には、コレクションの各オブジェクトから対応するに*array* へとコピーしたい値のプロパティの名前を渡します。*propertyName* / *array* のペアはいくつでも渡すことができ、それぞれ異なる配列の型を指定することもできます。コマンド実行後、各*array* のサイズはコレクションのlength と同一になります。

どちらの場合においても、4D はコレクションの要素あるいは値を*array* 引数で指定した配列の型に合わせて変換します(必要であれば)。変換に際してのルールは*コレクションと4D配列間での型の変換* のページに詳細な説明があります。

#### 例題 1 

文字列のコレクションをテキスト配列へとコピーしたい場合を考えます:

```4d
 var $fruits : Collection
 $fruits:=New collection("Orange";"Banana";"Apple";"Grape")
 ARRAY TEXT($artFruits;0)
 COLLECTION TO ARRAY($fruits;$artFruits)
  //$artFruits{1}="Orange"
  //$artFruits{2}="Banana"
  //...
```

#### 例題 2 

オブジェクトのコレクションの異なるプロパティ値を、異なる配列へとコピーしたい場合を考えます:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($city;0)
 ARRAY LONGINT($zipCode;0)
 $col.push(New object("name";"Cleveland";"zc";35049))
 $col.push(New object("name";"Blountsville";"zc";35031))
 $col.push(New object("name";"Adger";"zc";35006))
 $col.push(New object("name";"Clanton";"zc";35046))
 $col.push(New object("name";"Shelby";"zc";35143))
 
 COLLECTION TO ARRAY($col;$city;"name";$zipCode;"zc")
  //$city{1}="Cleveland", $zipCode{1}=35049
  //$city{2}="Blountsville", $zipCode{2}=35031
  //...
```

#### 参照 

[ARRAY TO COLLECTION](array-to-collection.md)  
*コレクションと4D配列間での型の変換*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1562 |
| スレッドセーフである | &check; |


