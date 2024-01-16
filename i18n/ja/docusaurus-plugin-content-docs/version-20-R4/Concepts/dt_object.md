---
id: object
title: Object
---

オブジェクト型の変数・フィールド・式にはさまざまなデータを格納することができます。 4D のネイティブなオブジェクトの構造は、よくある "プロパティ/値" (または "属性/値") というペア (連想配列) に基づいています。 これらオブジェクトの記法は JSON をもとにしていますが、完全に同じというわけではありません。

- プロパティ名は必ずテキストで表現されます。 It must follow [specific rules](identifiers.md#object-properties).

- プロパティ値は以下のどれかの型で表現されます:
  - 数値 (実数、整数、等)
  - text
  - null
  - boolean
  - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
  - 日付 (日付型あるいは ISO日付フォーマット文字列)
  - オブジェクト(1) (オブジェクトは入れ子にすることができます)
  - ピクチャー(2)
  - collection

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... cannot be stored in **object fields**. An error is returned if you try to do it; however, they are fully supported in **object variables** in memory.

(2) デバッガー内でテキストとして表示したり、JSON へと書き出されたりした場合、ピクチャー型のオブジェクトプロパティは "[object Picture]" と表されます。

:::caution

プロパティ名は大文字と小文字を区別するという点に注意してください。

:::

You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

オブジェクト記法を使ってアクセスされたそれぞれのプロパティ値は式とみなされます。 4D内で式が期待される場所であれば、どこでもこのような値を使用することができます:

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- デバッガー及びランタイムエクスプローラーの式エリア内。
- フォームエディターにおいて、フォームオブジェクトのプロパティリスト内。変数あるいは式フィールド内の他、様々なセレクションリストボックス及びカラムの式 (データソース、背景色、スタイル、フォントカラー等) において使用可能です。

## インスタンス化

オブジェクトはあらかじめインスタンス化しておく必要があります。 初期化しない場合、プロパティ値の取得や変更はシンタックスエラーとなります。

オブジェクトのインスタンス化は、以下のいずれかの方法でおこなうことができます:

- using the [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- using the `{}` operator.

:::info

Several 4D commands and functions return objects, for example [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) or [`File`](../API/FileClass.md#file). この場合、オブジェクトを明示的にインスタンス化する必要はなく、4Dランゲージが代わりにおこなってくれます。

:::

### `New object` command

The [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command creates a new empty or prefilled object and returns its reference.

例:

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable
 
 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```

### `{}` operator

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). オブジェクトリテラルのシンタックスは、空の、またはプロパティが格納されたオブジェクトを作成します。

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

例:

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
 		// with properties {"a":"foo","b":42,"c":{},"d":false})

	// same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

You can mix the `New object` and literal syntaxes:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```

### 通常オブジェクトと共有オブジェクト

二種類のオブジェクトを作成することができます:

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). 通常のオブジェクトは特別なアクセスコントロールをせずに編集可能ですが、プロセス間で共有することはできません。
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. 共有オブジェクトはプロセス間 (プリエンティブ・スレッド含む) で共有可能なオブジェクトです。 Access to these objects is controlled by `Use...End use` structures.
  詳細な情報については、[共有オブジェクトと共有コレクション](shared.md) を参照ください。

## プロパティ

You access object property values through a chain of tokens. Object properties can be accessed in two ways:

- using a "dot" symbol:
  > object.propertyName

例:

```4d
     employee.name:="Smith"
```

- using a string within square brackets:
  > object["propertyName"]

例:

```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
	 $vName:=employee[$property]

```

Since an object property value can be an object or a collection, you can use a sequence of symbols to access sub-properties, for example:

```4d
 $vAge:=employee.children[2].age
```

オブジェクトを格納、あるいは返すあらゆるランゲージ要素に対してオブジェクト記法を使用できます。たとえば:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements).
  例:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```

- **4D commands** that return objects.
  例:

```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** or **Functions** that return objects.
  例:

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections**
  Example:

```4d
     myColl.length //size of the collection
```

### Null 値

When using the objects, the **null** value is supported though the **Null** command. This command can be used to assign or compare the null value to object properties, for example:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### 未定義の値

オブジェクトプロパティを評価した結果、未定義の値が生成されることがあります。 Assigning an undefined value to an existing object property reinitializes or clears its value. 未定義の値を存在しないオブジェクトのプロパティへと代入した場合は、何も起こりません。

For more information, please refer to [Null and Undefined](dt_null_undefined.md)

### ポインター

**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. オブジェクトを引数として渡す際、4D 内部では自動的にポインターに類似したメカニズムを使うことでメモリの消費を最小限に抑え、引数を編集して返すことを可能にします。 つまり、ポインターは必要ないということです。 それでもポインターを使用したい場合には、プロパティ値はポインターを通してアクセスすることができます。

ポインターを使ってオブジェクトプロパティにアクセスするには、直接オブジェクトを使用する場合と方法が似ていますが、"ドット" 記号は省略する必要があります。

- オブジェクト記法によるアクセス:

> pointerOnObject->propertyName

- 大カッコを使用する方法:

> pointerOnObject->["propertyName"]

例:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

## Resources

Objects use _resources_ such a documents, entity locks, and of course, memory. オブジェクトが必要とする限り、これらのリソースは保持されます。 変数や他のオブジェクトから参照されなくなったことを検知すると、4D はその参照されなくなったオブジェクトが使用していたリソースをすべて自動的に解放するため、通常はこの処理を意識することはありません。

For instance, when there is no more references to an entity on which you have set a lock with [`$entity.lock()`](../API/EntityClass.md#lock), 4D will free the memory but also automatically release the associated lock, a call to [`$entity.unlock()`](../API/EntityClass.md#unlock) is useless.

If you want to release immediately all resources occupied by an object without having to wait that 4D does it automatically (at the end of the method execution for local variables for example), you just have to **nullify all its references**. 例:

```4d

$doc:=WP Import document("large_novel.4wp")
	... // do something with $doc
$doc:=Null  // free resources occupied by $doc
	... // continue execution with more free memory

```

## 例題

オブジェクト記法を使用すると、オブジェクトを扱う際の 4Dコードを単純化することができます。 同時に、コマンドベースの記法も引き続き完全にサポートされています。

- オブジェクトの読み書き (この例題ではオブジェクト記法とコマンド記法を比較します):

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56
 
  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42
 
  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- プロパティの作成と、オブジェクトを含む値の代入:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- オブジェクト記法を使用すると、サブオブジェクトの値を簡単に取得できます:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- You can access properties as strings using the `[]` operator

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
