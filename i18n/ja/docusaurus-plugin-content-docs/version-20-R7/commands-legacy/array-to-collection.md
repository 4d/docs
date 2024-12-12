---
id: array-to-collection
title: ARRAY TO COLLECTION
slug: /commands/array-to-collection
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO COLLECTION.Syntax-->**ARRAY TO COLLECTION** ( *collection* ; *array* {; *propertyName*}{; *array2* ; *propertyName2* ; ... ; *arrayN* ; *propertyNameN*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO COLLECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| collection | Collection | &#8592; | 配列のデータを受け取るコレクション |
| array | Array | &#8594;  | コレクションにコピーする配列。propertyName引数指定時はコレクションのpropertyNameの値にコピーする配列。 |
| propertyName | Text | &#8594;  | 配列の要素を値として格納するオブジェクトのプロパティ名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.ARRAY TO COLLECTION.Summary-->**ARRAY TO COLLECTION** コマンドは*array* 引数で指定した一つあるいはそれ以上の配列を、*collection* 引数で指定したコレクションの要素、あるいは*propertyName* 引数で指定したプロパティの値にコピーします*。<!-- END REF-->*

このコマンドは値を格納している*collection* に対して使用することもできますし、オブジェクトを格納している*collection* に対して使用することもできます。後者の場合には*propertyName* 引数は必須になります。

* 引数を省略した場合、コマンドは全ての*array* の要素を*collection* へとコピーします。*collection* が空でない場合、既存の要素は置き換えられ、*array* のサイズが*collection* のlength より大きい場合には新しい要素が追加されます。コマンド実行後、*collection* のlength は*array* のサイズと同一になります。
* 一つあるいはそれ以上の*propertyName* 引数を渡す場合、コマンドはオブジェクトを*collection* の要素として作成あるいは上書きします。それぞれのオブジェクトには引数で名前を指定したプロパティと、対応する配列の要素が値として格納されます。*collection* が空でない場合、既存の要素は置き換えられ、*array* のサイズが*collection* のlength より大きい場合には新しい要素が追加されます。コマンド実行後、*collection* のlength は*array* うち最大の配列のサイズと同一になります。

#### 例題 1 

テキスト配列をコレクションへとコピーしたい場合を考えます:

```4d
 var $colFruits : Collection
 $colFruits:=New collection
 ARRAY TEXT($artFruits;4)
 $artFruits{1}:="Orange"
 $artFruits{2}:="Banana"
 $artFruits{3}:="Apple"
 $artFruits{4}:="Grape"
 ARRAY TO COLLECTION($colFruits;$artFruits)
  //$colFruits[0]="Orange"
  //$colFruits[1]="Banana"
  //...
```

#### 例題 2 

フィールドの値を、配列を通してオブジェクトのコレクションへとコピーしたい場合を考えます:

```4d
 var $col : Collection
 $col:=New collection
 ARRAY TEXT($artCity;0)
 ARRAY LONGINT($arLZipCode;0)
 SELECTION TO ARRAY([Customer]City;$artCity)
 SELECTION TO ARRAY([Customer]Zipcode;$arLZipCode)
 ARRAY TO COLLECTION($col;$artCity;"cityName";$arLZipCode;"Zip")
  //$col[0]={"cityName":"Cleveland","Zip":35049}
  //$col[1]={"cityName":"Blountsville","Zip":35031}
  //...
```

#### 例題 3 

テキスト配列を共有コレクションへとコピーしたい場合を考えます:

```4d
 ARRAY TEXT($at;1)
 
 APPEND TO ARRAY($at;"Apple")
 APPEND TO ARRAY($at;"Orange")
 APPEND TO ARRAY($at;"Grape")
 
 var $sharedCol : Collection
 $sharedCol:=New shared collection
 
 Use($sharedCol)
    ARRAY TO COLLECTION($sharedCol;$at)
 End use
```

#### 参照 

[COLLECTION TO ARRAY](collection-to-array.md)  
*コレクションと4D配列間での型の変換*  