---
id: ob-copy
title: OB Copy
slug: /commands/ob-copy
displayed_sidebar: docs
---

<!--REF #_command_.OB Copy.Syntax-->**OB Copy** ( *object* {; resolvePtrs | {; *option* {; *groupWith*}}} )  : Object<!-- END REF-->
<!--REF #_command_.OB Copy.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| object | Object, Object | &#8594;  | 構造化されたオブジェクト |
| resolvePtrs | Boolean | &#8594;  | True = ポインターを解決<br/>False または省略時 = ポインターを解決しない |
| option | Integer | &#8594;  | ck shared: 共有オブジェクトを返すck resolve pointers: コピーの前にポインターを解決する |
| groupWith | Collection, Object | &#8594;  | 返されるオブジェクトが所属することになる共有コレクションまたは共有オブジェクト |
| 戻り値 | Object | &#8592; | 複製されたオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OB Copy.Summary-->**OB Copy**コマンドは、 *object*のプロパティ、オブジェクト内オブジェクト、値を内包した完全なコピー(ディープコピー)のオブジェクトを返します。<!-- END REF-->
*object* で指定したオブジェクトがポインター型の値を格納している場合、複製先にもポインターが格納されます。あるいは、*resolvePtrs* 引数に **True** を渡すことで、複製時に値を解決させることもできます。この場合、*object* 内で値を指定しているポインターは解決され、解決済みの値が使用されます。

**注:** *object* 引数のオブジェクトのプロパティが共有オブジェクトあるいは共有コレクションであった場合、それらのプロパティは返されたコピーの中では標準の(共有でない)オブジェクトになります。共有オブジェクトを返したい場合には第二シンタックスを使用してください(以下参照)

* 第二シンタックス: **OB Copy(object{; option{; groupWith}})**

指定時、*option* 引数には以下のどちらか一方(あるいは両方)の定数を渡すことができます:

| **オプション**           | **詳細**                                                                                                                                                                      |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ck resolve pointers | オリジナルのオブジェクトがポインター型の値を格納している場合、デフォルトではコピー先のオブジェクトもポインターを格納します。しかしながら、ck resolve pointers 定数を渡すことで、コピー時にポインターを解決することごとができます。この場合、オブジェクト内のそれぞれのポインターはコピー時に解決され、解決済みの値が使用されます。 |
| ck shared           | デフォルトでは、たとえ共有オブジェクトに対して適用された場合でも、**OB Copy** は通常の(共有でない)オブジェクトを返します。共有オブジェクトを返すためには、ck shared 定数を渡してください。この場合、*groupWith* 引数を使用して他の共有オブジェクト/共有コレクションに割り当てることもできます(以下参照)     |

*groupWith* 引数を使用すると、返されるオブジェクトを関連づけたいコレクションまたはオブジェクトを指定することができます。

****注:**

* **OB Copy** をエンティティセレクションオブジェクトに対して使用することができます。デフォルトでck shared が省略されていた場合、*共有不可*のエンティティセレクションが返されます。ck shared が渡されていた場合、*共有可能*なエンティティセレクションが返されます。このコンテキストにおいては、*groupWith* オプションは意味を持ちません。エンティティセレクションには*ロック識別子*を持たないからです。
* 同じ原理が*object* の内側のプロパティに保存されているエンティティセレクションに対しても適用されます。しかしながら、このコマンドにck shared が渡されており、ネストされたエンティティセレクションが共有可能だった場合には最適化されます。その際には同じエンティティセレクションへの参照が返されるオブジェクト内に返されます。
* データストア、データクラス、エンティティ、エンティティセッレクションオブジェクトは複製することはできません。もし**OB Copy** がこれらに対して呼び出された場合、Null 値が返されます。

#### 例題 1 

単純な値を格納しているオブジェクトを複製する場合を考えます:

```4d
 var $Object : Object
 var $JsonString : Text
 
 ARRAY OBJECT($arraySel;0)
 ALL RECORDS([Product])
 While(Not(End selection([Product])))
    OB SET($Object;"id";[Product]ID_Product)
    OB SET($Object;"Product Name";[Product]Product_Name)
    OB SET($Object;"Price";[Product]Price)
    OB SET($Object;"Tax rate";[Product]Tax_rate)
    $ref_value:=OB Copy($Object) //直接複製
    APPEND TO ARRAY($arraySel;$ref_value)
  //$ref_value の中身は $Object の中身と完全に同じ
    NEXT RECORD([Product])
 End while
  //$ref_value の中身
 $JsonString:=JSON Stringify array($arraySel)
```

#### 例題 2 

ポインターを格納しているオブジェクトを複製する場合を考えます(第一シンタックス):

```4d
 var $ref : Object
 
 OB SET($ref;"name";->[Company]name) //ポインターを含むオブジェクト
 OB SET($ref;"country";->[Company]country)
 ARRAY OBJECT($sel;0)
 ARRAY OBJECT($sel2;0)
 
 ALL RECORDS([Company])
 
 While(Not(End selection([Company])))
    $ref_comp:=OB Copy($ref) // copy without evaluating pointers
  // $ref_comp={"name":"->[Company]name","country":"->[Company]Country"}
    $ref_comp2:=OB Copy($ref;True) //解決済みのポインターを含んだコピー
  // $ref_comp={"name":"4D SAS","country":"France"}
    APPEND TO ARRAY($sel;$ref_comp)
    APPEND TO ARRAY($sel2;$ref_comp2)
    NEXT RECORD([Company])
 End while
 
 $Object:=JSON Stringify array($sel)
 $Object2:=JSON Stringify array($sel2)
 
  // $Object = [{"name":"","country":""},{"name":"","country":""},...]
  // $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]
```

#### 例題 3 

通常の(非共有の)*$person* オブジェクトを、*$sharedObject* 共有オブジェクトへとコピーしたい場合を考えます。これのためには、まず(*$sharedObject*) 共有オブジェクトを作成する必要があります。

```4d
 var $person;$copy;$sharedObject : Object
 var $text : Text
 
 $text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")
 $person:=JSON Parse($text) //$person は通常のオブジェクト
 $sharedObject:=New shared object()
 $copy:=OB Copy($person;ck shared) //$copy は共有オブジェクト
 
  // 共有オブジェクトになったので$sharedObject に入れることが可能
 Use($sharedObject)
    $sharedObject.person:=$copy
 End use
```

#### 例題 4 

*$obj* オブジェクトは("name" プロパティ内に)カレンレコードの"name" フィールドへのポインターを格納しているとします。

```4d
 var $obj;$objWithPtr;$sharedObjWithPtr : Object
 $obj:=New object()
 
  //$obj はポインターを格納したオブジェクト
 OB SET($obj;"name";->[Persons]name)
 
 ALL RECORDS([Persons])
  // [Persons] テーブルのカレントレコードがロードされたので、[Persons]name に値がある
  //
  // $obj オブジェクトを、ポインターを解決した状態の通常のオブジェクトとしてコピーしたい場合
  // 以下のように書きます:
 $objWithPtr:=OB Copy($obj;True)
  //
  // $obj オブジェクトを、ポインターを解決した状態の共有オブジェクトとしてコピーしたい場合
  // 以下のように書きます:
 $sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)
```

#### 例題 5 

*$sharedObj* オブジェクトを*$sharedColl* コレクションへとコピーしたい場合を考えます。それぞれ異なる共有グループに所属しているため、直接コピーするとエラーを生成することになります。まず*$sharedObj* のコピーを作成し、そのコピーを*$sharedColl* の共有グループとして指定する必要があります。

```4d
 var $sharedObj;$objCopy : Object
 var $sharedColl : Collection
 
  //$sharedObj はある共有グループに所属している
 $sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))
  //$sharedColl は別の共有グループに所属している
 $sharedColl:=New shared collection(New shared object("lastname";"Brown"))
 
 $objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)
  //$objCopy は$sharedColl と同じ共有グループに属した
 
  //そのため $objCopy は$sharedColl 同じグループに含めてもエラーは起きない
 Use($sharedColl)
    $sharedColl.push($objCopy)
 End use
```

#### 参照 

[OB Get](ob-get.md)  
*共有オブジェクトと共有コレクション*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1225 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


